"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider, theme, App } from "antd";

/**
 * ============================================================================
 * CENTRAL THEME COLOR PALETTE (SINGLE SOURCE OF TRUTH)
 * ============================================================================
 */
export const THEME_PALETTE = {
  primary: "#008043", // Main Primary Brand Color
  primaryHover: "#006635", // Primary Hover State
  primaryActive: "#004d28", // Primary Active/Pressed State
  primarySoft: "#eaf7f0", // Light Soft Wash Background
  primaryLight: "#eefaf3", // Light Section Gradient Wash
  borderHover: "#52c480", // Card Border Hover Highlight

  dark: {
    primarySoft: "#0b3822",
    primaryLight: "#072e1c",
    borderHover: "#10b981",
  },
};

/**
 * ============================================================================
 * CENTRAL BORDER RADIUS TOKENS (SINGLE SOURCE OF TRUTH)
 * Separated for Website (Web) and Admin ERP Portal (Admin).
 * Drives both Ant Design component tokens and Tailwind CSS variables.
 * ============================================================================
 */
export const THEME_RADIUS = {
  // Public Website: Softer, modern aesthetic
  web: {
    base: 12,        // Ant Design default borderRadius
    xs: 4,           // Extra small radius
    sm: 8,           // Small radius
    md: 12,          // Medium radius
    lg: 16,          // Large radius
    xl: 20,          // Extra large radius
    xxl: 24,         // 2X large radius
    xxxl: 32,        // 3X large radius
    btn: 12,         // Button radius
    input: 10,       // Input / Select / DatePicker radius
    card: 20,        // Card / Container radius
    modal: 24,       // Modal / Dialog radius
    tag: 8,          // Tag / Pill radius
    table: 12,       // Table radius
    pill: 9999,      // Full pill radius
  },

  // Admin Portal: Crisp, compact, professional enterprise ERP aesthetic
  admin: {
    base: 8,         // Ant Design default borderRadius
    xs: 3,           // Extra small radius
    sm: 6,           // Small radius
    md: 8,           // Medium radius
    lg: 12,          // Large radius
    xl: 16,          // Extra large radius
    xxl: 20,         // 2X large radius
    xxxl: 24,        // 3X large radius
    btn: 8,          // Button radius
    input: 8,        // Input / Select / DatePicker radius
    card: 16,        // Card / Container radius
    modal: 16,       // Modal / Dialog radius
    tag: 6,          // Tag / Pill radius
    table: 10,       // Table radius
    pill: 9999,      // Full pill radius
  },
};

/**
 * Generates Ant Design Theme Configuration for the Public Website
 */
export const getWebThemeConfig = (isDark = false) => ({
  algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: THEME_PALETTE.primary,
    colorPrimaryHover: THEME_PALETTE.primaryHover,
    colorPrimaryActive: THEME_PALETTE.primaryActive,
    borderRadius: THEME_RADIUS.web.base,
    borderRadiusXS: THEME_RADIUS.web.xs,
    borderRadiusSM: THEME_RADIUS.web.sm,
    borderRadiusLG: THEME_RADIUS.web.lg,
    borderRadiusOuter: THEME_RADIUS.web.sm,
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
  },
  components: {
    Button: {
      colorPrimary: THEME_PALETTE.primary,
      colorPrimaryHover: THEME_PALETTE.primaryHover,
      colorPrimaryActive: THEME_PALETTE.primaryActive,
      borderRadius: THEME_RADIUS.web.btn,
      borderRadiusSM: THEME_RADIUS.web.sm,
      borderRadiusLG: THEME_RADIUS.web.lg,
    },
    Input: {
      colorPrimary: THEME_PALETTE.primary,
      colorPrimaryHover: THEME_PALETTE.primaryHover,
      activeBorderColor: THEME_PALETTE.primary,
      borderRadius: THEME_RADIUS.web.input,
      borderRadiusSM: THEME_RADIUS.web.sm,
      borderRadiusLG: THEME_RADIUS.web.lg,
    },
    Select: {
      colorPrimary: THEME_PALETTE.primary,
      colorPrimaryHover: THEME_PALETTE.primaryHover,
      borderRadius: THEME_RADIUS.web.input,
    },
    DatePicker: {
      borderRadius: THEME_RADIUS.web.input,
    },
    Card: {
      borderRadiusLG: THEME_RADIUS.web.card,
    },
    Modal: {
      borderRadiusLG: THEME_RADIUS.web.modal,
    },
    Tag: {
      borderRadiusSM: THEME_RADIUS.web.tag,
    },
    Table: {
      borderRadius: THEME_RADIUS.web.table,
      borderRadiusLG: THEME_RADIUS.web.table,
    },
    Checkbox: {
      colorPrimary: THEME_PALETTE.primary,
      colorPrimaryHover: THEME_PALETTE.primaryHover,
      borderRadiusSM: THEME_RADIUS.web.xs,
    },
    Radio: {
      colorPrimary: THEME_PALETTE.primary,
    },
  },
});

/**
 * Generates Ant Design Theme Configuration for the Admin Portal
 */
export const getAdminThemeConfig = (isDark = false) => ({
  algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
  token: {
    colorPrimary: THEME_PALETTE.primary,
    colorPrimaryHover: THEME_PALETTE.primaryHover,
    colorPrimaryActive: THEME_PALETTE.primaryActive,
    borderRadius: THEME_RADIUS.admin.base,
    borderRadiusXS: THEME_RADIUS.admin.xs,
    borderRadiusSM: THEME_RADIUS.admin.sm,
    borderRadiusLG: THEME_RADIUS.admin.lg,
    borderRadiusOuter: THEME_RADIUS.admin.xs,
    fontFamily: "var(--font-geist-sans), Arial, sans-serif",
  },
  components: {
    Button: {
      colorPrimary: THEME_PALETTE.primary,
      colorPrimaryHover: THEME_PALETTE.primaryHover,
      colorPrimaryActive: THEME_PALETTE.primaryActive,
      borderRadius: THEME_RADIUS.admin.btn,
      borderRadiusSM: THEME_RADIUS.admin.sm,
      borderRadiusLG: THEME_RADIUS.admin.lg,
    },
    Input: {
      colorPrimary: THEME_PALETTE.primary,
      colorPrimaryHover: THEME_PALETTE.primaryHover,
      activeBorderColor: THEME_PALETTE.primary,
      borderRadius: THEME_RADIUS.admin.input,
      borderRadiusSM: THEME_RADIUS.admin.sm,
      borderRadiusLG: THEME_RADIUS.admin.lg,
    },
    Select: {
      colorPrimary: THEME_PALETTE.primary,
      colorPrimaryHover: THEME_PALETTE.primaryHover,
      borderRadius: THEME_RADIUS.admin.input,
    },
    DatePicker: {
      borderRadius: THEME_RADIUS.admin.input,
    },
    Card: {
      borderRadiusLG: THEME_RADIUS.admin.card,
    },
    Modal: {
      borderRadiusLG: THEME_RADIUS.admin.modal,
    },
    Tag: {
      borderRadiusSM: THEME_RADIUS.admin.tag,
    },
    Table: {
      borderRadius: THEME_RADIUS.admin.table,
      borderRadiusLG: THEME_RADIUS.admin.table,
    },
    Checkbox: {
      colorPrimary: THEME_PALETTE.primary,
      colorPrimaryHover: THEME_PALETTE.primaryHover,
      borderRadiusSM: THEME_RADIUS.admin.xs,
    },
    Radio: {
      colorPrimary: THEME_PALETTE.primary,
    },
  },
});

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  palette: THEME_PALETTE,
  radius: THEME_RADIUS,
  getWebThemeConfig,
  getAdminThemeConfig,
});

export const useTheme = () => useContext(ThemeContext);

let globalMessage = null;
let globalNotification = null;

/**
 * Helper component rendered inside Ant Design <App> context.
 * Captures dynamic theme-aware message and notification instances.
 */
function AntdGlobalHelper() {
  const app = App.useApp();
  globalMessage = app.message;
  globalNotification = app.notification;
  return null;
}

export const getAntdMessage = () => globalMessage;
export const getAntdNotification = () => globalNotification;

export const antdMsg = {
  success: (msg, dur) => (globalMessage ? globalMessage.success(msg, dur) : undefined),
  error: (msg, dur) => (globalMessage ? globalMessage.error(msg, dur) : undefined),
  warning: (msg, dur) => (globalMessage ? globalMessage.warning(msg, dur) : undefined),
  info: (msg, dur) => (globalMessage ? globalMessage.info(msg, dur) : undefined),
};

export const antdNotify = {
  success: (args) => (globalNotification ? globalNotification.success(args) : undefined),
  error: (args) => (globalNotification ? globalNotification.error(args) : undefined),
  warning: (args) => (globalNotification ? globalNotification.warning(args) : undefined),
  info: (args) => (globalNotification ? globalNotification.info(args) : undefined),
};

export default function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Function to dynamically update CSS custom properties on :root
  const applyCssVariables = (darkState) => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;

    // 1. Color Palette Variables
    root.style.setProperty("--brand-primary", THEME_PALETTE.primary);
    root.style.setProperty("--brand-primary-hover", THEME_PALETTE.primaryHover);
    root.style.setProperty(
      "--brand-primary-active",
      THEME_PALETTE.primaryActive,
    );
    root.style.setProperty(
      "--brand-primary-soft",
      darkState ? THEME_PALETTE.dark.primarySoft : THEME_PALETTE.primarySoft,
    );
    root.style.setProperty(
      "--brand-primary-light",
      darkState ? THEME_PALETTE.dark.primaryLight : THEME_PALETTE.primaryLight,
    );
    root.style.setProperty(
      "--brand-border-hover",
      darkState ? THEME_PALETTE.dark.borderHover : THEME_PALETTE.borderHover,
    );

    // 2. Web Radius Variables
    root.style.setProperty("--radius-web-base", `${THEME_RADIUS.web.base}px`);
    root.style.setProperty("--radius-web-xs", `${THEME_RADIUS.web.xs}px`);
    root.style.setProperty("--radius-web-sm", `${THEME_RADIUS.web.sm}px`);
    root.style.setProperty("--radius-web-md", `${THEME_RADIUS.web.md}px`);
    root.style.setProperty("--radius-web-lg", `${THEME_RADIUS.web.lg}px`);
    root.style.setProperty("--radius-web-xl", `${THEME_RADIUS.web.xl}px`);
    root.style.setProperty("--radius-web-2xl", `${THEME_RADIUS.web.xxl}px`);
    root.style.setProperty("--radius-web-3xl", `${THEME_RADIUS.web.xxxl}px`);
    root.style.setProperty("--radius-web-btn", `${THEME_RADIUS.web.btn}px`);
    root.style.setProperty("--radius-web-input", `${THEME_RADIUS.web.input}px`);
    root.style.setProperty("--radius-web-card", `${THEME_RADIUS.web.card}px`);
    root.style.setProperty("--radius-web-modal", `${THEME_RADIUS.web.modal}px`);
    root.style.setProperty("--radius-web-tag", `${THEME_RADIUS.web.tag}px`);
    root.style.setProperty("--radius-web-table", `${THEME_RADIUS.web.table}px`);

    // 3. Admin Radius Variables
    root.style.setProperty("--radius-admin-base", `${THEME_RADIUS.admin.base}px`);
    root.style.setProperty("--radius-admin-xs", `${THEME_RADIUS.admin.xs}px`);
    root.style.setProperty("--radius-admin-sm", `${THEME_RADIUS.admin.sm}px`);
    root.style.setProperty("--radius-admin-md", `${THEME_RADIUS.admin.md}px`);
    root.style.setProperty("--radius-admin-lg", `${THEME_RADIUS.admin.lg}px`);
    root.style.setProperty("--radius-admin-xl", `${THEME_RADIUS.admin.xl}px`);
    root.style.setProperty("--radius-admin-2xl", `${THEME_RADIUS.admin.xxl}px`);
    root.style.setProperty("--radius-admin-3xl", `${THEME_RADIUS.admin.xxxl}px`);
    root.style.setProperty("--radius-admin-btn", `${THEME_RADIUS.admin.btn}px`);
    root.style.setProperty("--radius-admin-input", `${THEME_RADIUS.admin.input}px`);
    root.style.setProperty("--radius-admin-card", `${THEME_RADIUS.admin.card}px`);
    root.style.setProperty("--radius-admin-modal", `${THEME_RADIUS.admin.modal}px`);
    root.style.setProperty("--radius-admin-tag", `${THEME_RADIUS.admin.tag}px`);
    root.style.setProperty("--radius-admin-table", `${THEME_RADIUS.admin.table}px`);
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialDark = savedTheme === "dark" || (!savedTheme && prefersDark);

    setIsDark(initialDark);
    applyCssVariables(initialDark);

    if (initialDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    applyCssVariables(nextDark);

    if (nextDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  // Base fallback theme config
  const defaultThemeConfig = getWebThemeConfig(isDark);

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
        palette: THEME_PALETTE,
        radius: THEME_RADIUS,
        getWebThemeConfig,
        getAdminThemeConfig,
      }}
    >
      <ConfigProvider theme={defaultThemeConfig}>
        <App className="min-h-full flex flex-col flex-1">
          <AntdGlobalHelper />
          {children}
        </App>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
