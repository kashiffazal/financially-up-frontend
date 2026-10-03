"use client";

/**
 * ============================================================================
 * Admin Portal 404 Not Found Catch-All Route (`app/admin/[...notFound]/page.js`)
 * ============================================================================
 * Architecture Role:
 * 1. Catches all unmatched routes inside the `/admin/*` routing hierarchy.
 * 2. Integrates seamlessly within the Admin Portal Layout (Sidebar, Header, scoped theme tokens).
 * 3. Provides quick jump shortcuts to core administrative modules (Company Registrations,
 *    Individual Engagements, User Management, Roles, Audit Logs, Settings).
 * 4. Displays technical path diagnostics and direct IT/admin escalation contacts.
 */

import React from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "antd";
import {
  FileSearchOutlined,
  DashboardOutlined,
  ArrowLeftOutlined,
  BankOutlined,
  IdcardOutlined,
  TeamOutlined,
  KeyOutlined,
  HistoryOutlined,
  SettingOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  CompassOutlined,
} from "@ant-design/icons";

export default function AdminNotFound() {
  const router = useRouter();
  const pathname = usePathname();

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
    <div className="w-full max-w-4xl mx-auto py-6 sm:py-10 space-y-6 animate-fade-in">
      {/* Main Admin 404 Card Shell */}
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

        {/* Heading & Subtitle */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Admin Route Not Found
        </h1>
        <p className="text-sm text-slate-500 dark:text-zinc-400 max-w-md mx-auto mt-2 mb-8 leading-relaxed">
          The administrative page, log record, or operational view you are attempting to access does not exist, has been archived, or requires elevated RBAC permissions.
        </p>

        {/* Action Controls */}
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

        {/* Quick Admin Navigation Matrix */}
        <div className="text-left pt-6 border-t border-slate-100 dark:border-zinc-800">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
              Quick Navigation Matrix
            </h3>
            <CompassOutlined className="text-slate-400 text-sm" />
          </div>

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

        {/* Diagnostic & Support Footer */}
        <div className="mt-8 pt-4 border-t border-slate-100 dark:border-zinc-800/60 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-400 gap-2">
          <span className="font-mono truncate max-w-xs sm:max-w-md">
            Requested URL: {pathname || "/admin"}
          </span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@financiallyup.com.au"
              className="text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] hover:underline font-medium flex items-center gap-1"
            >
              <MailOutlined />
              <span>info@financiallyup.com.au</span>
            </a>
            <a
              href="tel:1300328316"
              className="text-[var(--brand-primary)] hover:text-[var(--brand-primary-hover)] hover:underline font-medium flex items-center gap-1"
            >
              <PhoneOutlined />
              <span>1300 328 316</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
