"use client";

/**
 * Admin Root Layout
 * =================
 * Provides global authentication context, responsive sidebar collapsible state,
 * route protection, dynamic theme switching, and scoped Admin Ant Design tokens.
 */

import React, { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Spin, ConfigProvider, App } from "antd";
import { useTheme } from "../ThemeProvider";
import { AuthProvider, useAuth } from "../../context/AuthContext";
import Sidebar from "../../components/admin/Sidebar";
import Header from "../../components/admin/Header";
import Footer from "../../components/admin/Footer";
import "./admin.css";

function AdminLayoutContent({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { user, loading } = useAuth();
  const { isDark, getAdminThemeConfig } = useTheme();

  const isLoginPage = pathname === "/admin/login";
  const adminTheme = getAdminThemeConfig
    ? getAdminThemeConfig(isDark)
    : undefined;

  // Ensure root HTML tag has admin-portal-scope so all Ant Design portals and modals inherit admin radius variables
  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.classList.add("admin-portal-scope");
      return () => {
        document.documentElement.classList.remove("admin-portal-scope");
      };
    }
  }, []);

  useEffect(() => {
    if (!loading && !user && !isLoginPage) {
      router.push("/admin/login");
    }
  }, [user, loading, isLoginPage, router]);

  if (isLoginPage) {
    return (
      <ConfigProvider theme={adminTheme}>
        <App className="min-h-full flex flex-col flex-1">
          <div className="admin-portal-root">{children}</div>
        </App>
      </ConfigProvider>
    );
  }

  if (loading) {
    return (
      <ConfigProvider theme={adminTheme}>
        <App className="min-h-full flex flex-col flex-1">
          <div className="admin-portal-root flex min-h-screen items-center justify-center bg-slate-50 dark:bg-zinc-950">
            <div className="flex flex-col items-center gap-4">
              <Spin size="large" />
              <p className="text-sm font-medium text-slate-500 dark:text-zinc-400">
                Verifying secure session...
              </p>
            </div>
          </div>
        </App>
      </ConfigProvider>
    );
  }

  if (!user) {
    return null; // Will redirect via useEffect
  }

  return (
    <ConfigProvider theme={adminTheme}>
      <App className="min-h-full flex flex-col flex-1">
        <div className="admin-portal-root flex min-h-screen overflow-x-clip bg-slate-50 text-slate-900 dark:bg-zinc-950 dark:text-zinc-50 transition-colors duration-300">
          {/* Modern compact rail navigation panel */}
          <Sidebar mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} />

          {/* Main content body wrapper (saves 180px+ of horizontal space) */}
          <div className="flex flex-col flex-1 min-w-0 min-h-screen transition-all duration-300 pl-0 md:pl-[74px]">
            {/* Top toolbar header */}
            <Header onOpenMobile={() => setMobileOpen(true)} />

            {/* Dynamic page content container */}
            <main className="flex-grow p-4 sm:p-6 md:p-8 space-y-6 overflow-y-auto overflow-x-hidden">
              {children}
            </main>

            {/* Standard copyright and credits footer */}
            <Footer />
          </div>
        </div>
      </App>
    </ConfigProvider>
  );
}

export default function AdminLayout({ children }) {
  return (
    <AuthProvider>
      <AdminLayoutContent>{children}</AdminLayoutContent>
    </AuthProvider>
  );
}
