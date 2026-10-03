"use client";

/**
 * ============================================================================
 * Universal 404 Not Found Page (`app/not-found.js`)
 * ============================================================================
 * Architecture Role:
 * 1. Root 404 handler for the Next.js App Router.
 * 2. Smart routing detection:
 *    - If accessed from an `/admin/*` path, renders the enterprise Admin 404 module.
 *    - For all public website requests, renders the full branded website experience
 *      complete with WebsiteHeader, WebsiteFooter, interactive service cards, and
 *      official company contact assistance.
 * 3. 100% Brand variables:
 *    - Uses var(--brand-primary), var(--brand-primary-hover), var(--brand-primary-soft),
 *      and var(--brand-border-hover) for all highlights, buttons, and backgrounds.
 * 4. Responsive, animated, dark/light mode compatible with rich micro-interactions.
 */

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { ConfigProvider } from "antd";
import {
  HomeOutlined,
  ArrowLeftOutlined,
  CalendarOutlined,
  CalculatorOutlined,
  BankOutlined,
  FileProtectOutlined,
  BookOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
  DashboardOutlined,
  TeamOutlined,
  KeyOutlined,
  HistoryOutlined,
  SettingOutlined,
  IdcardOutlined,
  FileSearchOutlined,
  CompassOutlined,
} from "@ant-design/icons";
import { useTheme } from "./ThemeProvider";
import WebsiteHeader from "../components/website/Header";
import WebsiteFooter from "../components/website/Footer";

export default function NotFound() {
  const router = useRouter();
  const pathname = usePathname();
  const { isDark, getWebThemeConfig, getAdminThemeConfig } = useTheme();

  const isAdminPath = pathname?.startsWith("/admin");
  const webTheme = getWebThemeConfig ? getWebThemeConfig(isDark) : undefined;
  const adminTheme = getAdminThemeConfig ? getAdminThemeConfig(isDark) : undefined;

  // --------------------------------------------------------------------------
  // ADMIN 404 VARIANT (When an administrative URL is not found)
  // --------------------------------------------------------------------------
  if (isAdminPath) {
    const adminShortcuts = [
      {
        title: "Company Registrations",
        desc: "ASIC company lodgements & applications",
        href: "/admin/company-registration-new",
        icon: <BankOutlined className="text-[var(--brand-primary)] text-lg" />,
      },
      {
        title: "Individual Engagements",
        desc: "Personal client engagement onboarding",
        href: "/admin/individual-engagement-new",
        icon: <IdcardOutlined className="text-blue-600 text-lg" />,
      },
      {
        title: "Staff & User Admin",
        desc: "Manage practice accounts and sessions",
        href: "/admin/users",
        icon: <TeamOutlined className="text-purple-600 text-lg" />,
      },
      {
        title: "Roles & Permissions",
        desc: "Fine-tune RBAC operational matrix",
        href: "/admin/roles",
        icon: <KeyOutlined className="text-amber-600 text-lg" />,
      },
      {
        title: "Security & Audit Logs",
        desc: "Forensic event logs and state mutations",
        href: "/admin/audit-logs",
        icon: <HistoryOutlined className="text-rose-600 text-lg" />,
      },
      {
        title: "System Settings",
        desc: "Global firm profile & configuration",
        href: "/admin/settings",
        icon: <SettingOutlined className="text-slate-600 text-lg" />,
      },
    ];

    return (
      <ConfigProvider theme={adminTheme}>
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 flex items-center justify-center p-4 sm:p-8 transition-colors duration-300">
          <div className="w-full max-w-4xl space-y-6 animate-fade-in">
            {/* Main Admin 404 Card */}
            <div className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 rounded-card p-8 sm:p-12 shadow-sm text-center relative overflow-hidden">
              {/* Top Warning Icon Bubble */}
              <div className="w-20 h-20 rounded-2xl bg-[var(--brand-primary-soft)] border border-[var(--brand-primary)]/20 text-[var(--brand-primary)] text-3xl flex items-center justify-center mx-auto mb-6 shadow-xs">
                <FileSearchOutlined />
              </div>

              {/* Status Code Badge */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-pill bg-amber-50 dark:bg-amber-950/50 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-3">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
                <span>Admin Error 404 • Resource Not Found</span>
              </div>

              {/* Title & Description */}
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
                Admin Route Not Found
              </h1>
              <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-md mx-auto mt-2 mb-8 leading-relaxed">
                The administrative page, log record, or operational view you are attempting to access does not exist, has been archived, or requires elevated RBAC permissions.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
                <Link
                  href="/admin/dashboard"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-pill bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-semibold text-sm shadow-sm transition-all"
                >
                  <DashboardOutlined />
                  <span>Return to Dashboard</span>
                </Link>
                <button
                  type="button"
                  onClick={() => router.back()}
                  className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-pill border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-50 dark:hover:bg-zinc-800 text-sm font-semibold transition-all cursor-pointer"
                >
                  <ArrowLeftOutlined />
                  <span>Previous Screen</span>
                </button>
              </div>

              {/* Quick Navigation Matrix */}
              <div className="text-left pt-6 border-t border-slate-100 dark:border-zinc-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-4 text-center">
                  Quick Navigation Matrix
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {adminShortcuts.map((item, idx) => (
                    <Link
                      key={idx}
                      href={item.href}
                      className="group p-3.5 rounded-xl border border-slate-200/70 dark:border-zinc-800 bg-slate-50/50 dark:bg-zinc-800/30 hover:border-[var(--brand-border-hover)] hover:bg-white dark:hover:bg-zinc-800 transition-all flex items-start gap-3 shadow-xs"
                    >
                      <div className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        {item.icon}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-slate-800 dark:text-zinc-200 group-hover:text-[var(--brand-primary)] transition-colors truncate">
                          {item.title}
                        </div>
                        <div className="text-[11px] text-slate-400 dark:text-zinc-500 truncate mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Diagnostic Footer */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
                <span className="font-mono truncate max-w-xs sm:max-w-md">
                  Requested Path: {pathname || "/admin"}
                </span>
                <span>
                  Need assistance? Contact{" "}
                  <a
                    href="mailto:info@financiallyup.com.au"
                    className="text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] hover:underline font-medium"
                  >
                    info@financiallyup.com.au
                  </a>{" "}
                  or call{" "}
                  <a
                    href="tel:1300328316"
                    className="text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] hover:underline font-medium"
                  >
                    1300 328 316
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </ConfigProvider>
    );
  }

  // --------------------------------------------------------------------------
  // PUBLIC WEBSITE 404 (Client-Facing Website Experience)
  // --------------------------------------------------------------------------
  const services = [
    {
      title: "Individual Tax Return",
      description: "Fast individual lodgements, salary deductions & investment properties.",
      href: "/individual-services/individual-tax-return",
      icon: <CalculatorOutlined className="text-[var(--brand-primary)] text-xl" />,
    },
    {
      title: "Company Tax Return",
      description: "Comprehensive corporate compliance for Pty Ltd, trusts & partnerships.",
      href: "/business-services/company-tax-return",
      icon: <BankOutlined className="text-[var(--brand-primary)] text-xl" />,
    },
    {
      title: "Business Registration",
      description: "Instant online setup for ABN, GST, Company & Trust ASIC lodgement.",
      href: "/resources/registration-forms/company-registration",
      icon: <FileProtectOutlined className="text-[var(--brand-primary)] text-xl" />,
    },
    {
      title: "Bookkeeping & Payroll",
      description: "Certified Xero, MYOB setup, payroll management & financial reporting.",
      href: "/book-keeping",
      icon: <BookOutlined className="text-[var(--brand-primary)] text-xl" />,
    },
  ];

  return (
    <ConfigProvider theme={webTheme}>
      <div className="web-portal-root min-h-screen flex flex-col bg-white dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 transition-colors duration-300">
        {/* Full Website Header */}
        <WebsiteHeader />

        {/* Main 404 Hero & Interactive Directory */}
        <main className="flex-grow w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          {/* Subtle Ambient Background Aura */}
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--brand-primary)]/10 blur-3xl rounded-full pointer-events-none -z-10"></div>

          <div className="max-w-4xl mx-auto text-center">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-pill bg-[var(--brand-primary-soft)] border border-[var(--brand-primary)]/20 text-[var(--brand-primary)] text-xs font-semibold uppercase tracking-wider mb-6 shadow-xs animate-fade-in">
              <span className="w-2 h-2 rounded-full bg-[var(--brand-primary)] animate-ping"></span>
              <span>Error Code: 404 • Page Not Found</span>
            </div>

            {/* Giant Gradient 404 Display */}
            <div className="text-8xl sm:text-9xl font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-[var(--brand-primary)] via-[#00a858] to-[var(--brand-primary-hover)] select-none drop-shadow-sm leading-none">
              404
            </div>

            {/* Heading & Subtitle */}
            <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight mt-4 mb-3">
              Lost in the Ledger? We Can&#39;t Find That Page.
            </h1>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 max-w-xl mx-auto leading-relaxed mb-8">
              The page you are searching for might have been moved, renamed, or is temporarily unavailable. Let&#39;s get your taxation and business advisory back on track.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-pill bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] text-white font-bold text-sm shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <HomeOutlined />
                <span>Return to Homepage</span>
              </Link>

              <Link
                href="/book-an-appointment"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-pill bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 text-slate-800 dark:text-zinc-200 hover:border-[var(--brand-border-hover)] hover:text-[var(--brand-primary)] font-semibold text-sm shadow-xs transition-all duration-200"
              >
                <CalendarOutlined />
                <span>Book an Appointment</span>
              </Link>

              <button
                type="button"
                onClick={() => router.back()}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-pill text-slate-500 dark:text-zinc-400 hover:text-slate-900 dark:hover:text-zinc-100 text-sm font-medium transition-colors cursor-pointer"
              >
                <ArrowLeftOutlined />
                <span>Go Back</span>
              </button>
            </div>

            {/* Popular Services Directory */}
            <div className="text-left pt-12 border-t border-slate-200/80 dark:border-zinc-800/80">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-lg font-bold text-slate-900 dark:text-zinc-100">
                    Explore Popular Accounting &amp; Tax Services
                  </h2>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                    Navigate directly to our most frequently accessed Australian compliance services.
                  </p>
                </div>
                <CompassOutlined className="text-2xl text-slate-300 dark:text-zinc-700 hidden sm:block" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map((item, index) => (
                  <Link
                    key={index}
                    href={item.href}
                    className="group bg-white dark:bg-zinc-900/80 rounded-card p-5 border border-slate-200/80 dark:border-zinc-800 hover:border-[var(--brand-border-hover)] shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
                  >
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-[var(--brand-primary-soft)] border border-[var(--brand-primary)]/20 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                        {item.icon}
                      </div>
                      <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-100 group-hover:text-[var(--brand-primary)] transition-colors mb-1.5">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed mb-4">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[var(--brand-primary)] pt-2 border-t border-slate-100 dark:border-zinc-800/60">
                      <span>Learn More</span>
                      <ArrowRightOutlined className="text-[10px] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Assistance Strip with Official Contact Info */}
            <div className="mt-12 p-5 rounded-card bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-400 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-center sm:text-left">
                <EnvironmentOutlined className="text-[var(--brand-primary)] text-base shrink-0" />
                <span>
                  <strong>Head Office:</strong> Level 5, 100 Walker St, North Sydney NSW 2060, Australia
                </span>
              </div>
              <div className="flex items-center gap-5 shrink-0">
                <a
                  href="tel:1300328316"
                  className="flex items-center gap-1.5 text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] font-semibold hover:underline"
                >
                  <PhoneOutlined />
                  <span>1300 328 316</span>
                </a>
                <a
                  href="mailto:info@financiallyup.com.au"
                  className="flex items-center gap-1.5 text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] font-semibold hover:underline"
                >
                  <MailOutlined />
                  <span>info@financiallyup.com.au</span>
                </a>
              </div>
            </div>
          </div>
        </main>

        {/* Full Website Footer */}
        <WebsiteFooter />
      </div>
    </ConfigProvider>
  );
}
