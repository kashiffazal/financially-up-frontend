"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { ConfigProvider, theme, App } from "antd";

/**
 * ============================================================================
 * CENTRAL THEME COLOR PALETTE (SINGLE SOURCE OF TRUTH)
 * Change brand colors here to update the ENTIRE web app, admin panel,
 * Ant Design components, Tailwind CSS classes, and CSS custom variables.
 * ============================================================================
 */
export const THEME_PALETTE = {
  primary: "#008043", // Main Primary Brand Color
  primaryHover: "#006635", // Primary Hover State
  primaryActive: "#004d28", // Primary Active/Pressed State
  primarySoft: "#eaf7f0", // Light Soft Wash Background
  primaryLight: "#eefaf3", // Light Section Gradient Wash
  borderHover: "#52c480", // Card Border Hover Highlight

  // primary: "red", // Main Primary Brand Color
  // primaryHover: "#e75528", // Primary Hover State
  // primaryActive: "#e0c528", // Primary Active/Pressed State
  // primarySoft: "#eaf7f0", // Light Soft Wash Background
  // primaryLight: "#eefaf3", // Light Section Gradient Wash
  // borderHover: "#a2c452", // Card Border Hover Highlight

  dark: {
    primarySoft: "#0b3822",
    primaryLight: "#072e1c",
    borderHover: "#10b981",
  },
};

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  palette: THEME_PALETTE,
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

  // Configure Ant Design components using central THEME_PALETTE
  const themeConfig = {
    algorithm: isDark ? theme.darkAlgorithm : theme.defaultAlgorithm,
    token: {
      colorPrimary: THEME_PALETTE.primary,
      colorPrimaryHover: THEME_PALETTE.primaryHover,
      colorPrimaryActive: THEME_PALETTE.primaryActive,
      borderRadius: 8,
      fontFamily: "var(--font-geist-sans), Arial, sans-serif",
    },
    components: {
      Button: {
        colorPrimary: THEME_PALETTE.primary,
        colorPrimaryHover: THEME_PALETTE.primaryHover,
        colorPrimaryActive: THEME_PALETTE.primaryActive,
      },
      Checkbox: {
        colorPrimary: THEME_PALETTE.primary,
        colorPrimaryHover: THEME_PALETTE.primaryHover,
      },
      Input: {
        colorPrimary: THEME_PALETTE.primary,
        colorPrimaryHover: THEME_PALETTE.primaryHover,
        activeBorderColor: THEME_PALETTE.primary,
      },
    },
  };

  return (
    <ThemeContext.Provider
      value={{ isDark, toggleTheme, palette: THEME_PALETTE }}
    >
      <ConfigProvider theme={themeConfig}>
        <App className="min-h-full flex flex-col flex-1">
          <AntdGlobalHelper />
          {children}
        </App>
      </ConfigProvider>
    </ThemeContext.Provider>
  );
}
