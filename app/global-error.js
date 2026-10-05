"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "antd";
import {
  ReloadOutlined,
  HomeOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  SafetyCertificateOutlined,
  WarningFilled,
  InfoCircleOutlined,
  BankOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import { COMPANY_DEFAULTS } from "@/lib/companyDefaults";
import "./globals.css";

/**
 * GlobalError Component (`app/global-error.js`)
 * ============================================
 * Root error boundary handler for Next.js App Router.
 * Replaces the root layout when an unhandled application error occurs.
 *
 * Features:
 * 1. Branded emergency recovery card with dark emerald aesthetic.
 * 2. Official global company variables (Phone, Email, Address, ABN, Legal Name, Tax Agent #)
 *    dynamically fetched via useCompany() with automatic offline fallback to COMPANY_DEFAULTS.
 * 3. Immediate recovery actions: Reload Application and Return to Homepage.
 * 4. Expandable error diagnostics for debugging without compromising customer reassurance.
 */
export default function GlobalError({ error, reset }) {
  let company = COMPANY_DEFAULTS;
  try {
    const dynamicCompany = useCompany();
    if (dynamicCompany && dynamicCompany.name) {
      company = dynamicCompany;
    }
  } catch {
    company = COMPANY_DEFAULTS;
  }

  const [showDetails, setShowDetails] = useState(false);

  // Safe retry handler
  const handleReload = () => {
    if (typeof reset === "function") {
      reset();
    } else {
      window.location.reload();
    }
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-950 text-slate-100 flex items-center justify-center p-4 sm:p-6 relative overflow-hidden font-sans selection:bg-emerald-500 selection:text-white">
        {/* Background Ambient Glow Orbs */}
        <div className="absolute top-0 left-1/4 -translate-x-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[420px] h-[420px] bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Subtle Architectural Dot Matrix Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.03] [background-image:radial-gradient(#ffffff_1.2px,transparent_1.2px)] [background-size:24px_24px]"
          aria-hidden="true"
        />

        {/* Central Glassmorphic Recovery Card */}
        <div className="relative z-10 max-w-2xl w-full rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 p-6 sm:p-10 shadow-2xl text-slate-100 space-y-6">
          {/* Top Brand Logo & Status Tag */}
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-800 pb-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo-w.png"
                alt={company.name || "Financially Up"}
                width={160}
                height={42}
                priority
                className="h-9 w-auto object-contain"
              />
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-bold uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-rose-500 animate-pulse" />
              <span>Application Recovery Mode</span>
            </div>
          </div>

          {/* Heading & Reassurance Message */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-rose-500/15 text-rose-400 flex items-center justify-center shrink-0">
                <WarningFilled className="text-xl" />
              </div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight m-0">
                Something went wrong
              </h1>
            </div>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal pt-1 m-0">
              An unexpected error occurred while processing your request. Your financial data remains protected. Please try reloading the application or contact our Australian support team directly below.
            </p>
          </div>

          {/* Action Buttons (Ant Design) */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            <Button
              type="primary"
              size="large"
              icon={<ReloadOutlined />}
              onClick={handleReload}
              className="h-11 px-6 rounded-lg font-bold text-sm sm:text-base bg-brand-primary hover:bg-brand-primary-hover shadow-lg shadow-emerald-950/40 hover:scale-[1.02] transition-all"
            >
              Try Again
            </Button>

            <Link href="/">
              <Button
                size="large"
                icon={<HomeOutlined />}
                className="h-11 px-6 rounded-lg font-bold text-sm sm:text-base border border-slate-700 bg-slate-800 text-slate-200 hover:text-white hover:border-emerald-500 transition-all"
              >
                Return to Homepage
              </Button>
            </Link>
          </div>

          {/* Company Details Contact Grid (Official Global Variables) */}
          <div className="rounded-2xl bg-slate-950/60 border border-slate-800/80 p-5 space-y-4">
            <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-emerald-400 border-b border-slate-800/80 pb-2.5">
              <span>{company.legalName || "Financially Up Pty Ltd"} — Support &amp; Enquiries</span>
              <span className="text-slate-400 font-normal normal-case">Tax Agent #{company.taxAgentNumber || "25800000"}</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs text-slate-300">
              {/* Phone Variable */}
              <div className="flex items-start gap-2.5">
                <PhoneOutlined className="text-emerald-400 text-sm mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Direct Support Line</span>
                  <a
                    href={`tel:${(company.phone || "1300328316").replace(/\s+/g, "")}`}
                    className="font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    {company.phone || "1300 328 316"}
                  </a>
                </div>
              </div>

              {/* Email Variable */}
              <div className="flex items-start gap-2.5">
                <MailOutlined className="text-emerald-400 text-sm mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Official Email</span>
                  <a
                    href={`mailto:${company.email || "info@financiallyup.com.au"}`}
                    className="font-bold text-white hover:text-emerald-400 transition-colors"
                  >
                    {company.email || "info@financiallyup.com.au"}
                  </a>
                </div>
              </div>

              {/* Head Office Address Variable */}
              <div className="flex items-start gap-2.5 sm:col-span-2">
                <EnvironmentOutlined className="text-emerald-400 text-sm mt-0.5 shrink-0" />
                <div>
                  <span className="text-slate-400 block text-[11px]">Head Office</span>
                  <span className="text-slate-200">
                    {company.address || "Level 5, 100 Walker St, North Sydney NSW 2060, Australia"}
                  </span>
                </div>
              </div>

              {/* ABN & Legal Entity Variable */}
              <div className="flex items-start gap-2.5 sm:col-span-2 pt-1 border-t border-slate-900 text-[11px] text-slate-400 justify-between flex-wrap">
                <span className="flex items-center gap-1.5">
                  <BankOutlined className="text-emerald-500" />
                  ABN: <strong className="text-slate-200">{company.abn || "84 659 717 263"}</strong>
                </span>
                <span className="flex items-center gap-1.5">
                  <SafetyCertificateOutlined className="text-emerald-500" />
                  100% ATO Compliant Practice
                </span>
              </div>
            </div>
          </div>

          {/* Collapsible Error Diagnostics */}
          {error && (
            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowDetails(!showDetails)}
                className="text-xs text-slate-400 hover:text-slate-200 inline-flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <InfoCircleOutlined />
                <span>{showDetails ? "Hide technical diagnostic details" : "Show technical diagnostic details"}</span>
              </button>

              {showDetails && (
                <div className="mt-2.5 p-3 rounded-xl bg-black/60 border border-slate-800 text-[11px] font-mono text-slate-400 break-words max-h-36 overflow-y-auto">
                  {error.message || "An unexpected runtime exception was caught by root GlobalError."}
                  {error.digest && <div className="text-slate-400 pt-1">Digest: {error.digest}</div>}
                </div>
              )}
            </div>
          )}
        </div>
      </body>
    </html>
  );
}
