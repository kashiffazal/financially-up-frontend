"use client";

import React from "react";
import { ConfigProvider } from "antd";
import { useTheme } from "../ThemeProvider";
import WebsiteHeader from "../../components/website/Header";
import WebsiteFooter from "../../components/website/Footer";
import "./web.css";

export default function WebLayout({ children }) {
  const { isDark, getWebThemeConfig } = useTheme();
  const webTheme = getWebThemeConfig ? getWebThemeConfig(isDark) : undefined;

  return (
    <ConfigProvider theme={webTheme}>
      <div className="web-portal-root min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 transition-colors duration-300">
        <WebsiteHeader />
        <main className="flex-grow w-full">{children}</main>
        <WebsiteFooter />
      </div>
    </ConfigProvider>
  );
}
