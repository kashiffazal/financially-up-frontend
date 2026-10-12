"use client";

/**
 * Global Settings Store
 * =====================
 * Application-wide store for the global variables (company identity, contact
 * emails, application URLs) managed at /admin/settings.
 *
 * Values are injected by the server layout, so there is no loading flash. Any
 * component can read them:
 *
 *   const company = useCompany();          // company.name, company.abn, company.email
 *   const { settings, get } = useSettings(); // get("company.taxAgentNumber")
 *
 * After saving on the settings page, call refreshSettings() to pull new values
 * without a full page reload.
 */

import React, { createContext, useContext, useState, useCallback, useMemo } from "react";
import { normalizeSettings, toCompanyShape } from "@/lib/companyDefaults";
import { brandText } from "@/lib/brand";
import { HTTP } from "@/services";

const SettingsContext = createContext(null);

export const SettingsProvider = ({ initialSettings = null, children }) => {
  const [settings, setSettings] = useState(() => normalizeSettings(initialSettings || {}));

  /** Re-fetch the public settings map (used after an admin saves changes) */
  const refreshSettings = useCallback(async () => {
    const res = await HTTP("GET", "/settings", {}, false, true);
    if (res && res.success && res.settings) {
      setSettings(normalizeSettings(res.settings));
      return res.settings;
    }
    return null;
  }, []);

  const value = useMemo(() => {
    const get = (key, fallback = "") => settings[key] ?? fallback;
    return {
      settings,
      get,
      company: toCompanyShape(settings),
      refreshSettings,
    };
  }, [settings, refreshSettings]);

  return <SettingsContext.Provider value={value}>{children}</SettingsContext.Provider>;
};

/** Full store: { settings, get, company, refreshSettings } */
export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) {
    // Allows isolated component usage/tests without the provider mounted
    const defaults = normalizeSettings({});
    return {
      settings: defaults,
      get: (key, fallback = "") => defaults[key] ?? fallback,
      company: toCompanyShape(defaults),
      refreshSettings: async () => null,
    };
  }
  return ctx;
};

/** Shortcut for the most common case: company details */
export const useCompany = () => useSettings().company;

export default SettingsContext;

/**
 * Brand a plain string with the live company details (lib/brand.js), for
 * places that need text rather than an element: alt, placeholder, aria-label,
 * mailto links...
 *
 *   const brand = useBrandText();
 *   <Image alt={brand("Financially Up Logo")} />
 */
export const useBrandText = () => {
  const { settings } = useSettings();
  return useCallback((text) => brandText(text, settings), [settings]);
};
