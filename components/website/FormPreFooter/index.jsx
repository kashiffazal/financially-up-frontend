"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneOutlined,
  MailOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  LockOutlined,
  CustomerServiceOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";
import styles from "./FormPreFooter.module.css";

/**
 * FormPreFooter Component
 * Specialized Pre-Footer section specifically designed for Form & Onboarding pages.
 * Displays assistance options, ATO privacy guarantees, and instant appointment CTA.
 */
export default function FormPreFooter() {
  return (
    <section className="bg-slate-100/80 dark:bg-zinc-900/80 border-t border-slate-200/80 dark:border-zinc-800 py-6 sm:py-8 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
        {/* Compact Top Header Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-200/60 dark:border-zinc-800/80 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-xl bg-brand-primary-soft dark:bg-emerald-950/80 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-sm shrink-0">
              <CustomerServiceOutlined />
            </div>
            <div>
              <h3 className="text-sm sm:text-base font-extrabold text-slate-900 dark:text-zinc-50 leading-tight">
                Need Help Completing Your Form?
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                Our Australian Registered Tax Agents are available to assist you.
              </p>
            </div>
          </div>

          <Link
            href="/book-an-appointment"
            className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-brand-primary hover:bg-brand-primary-hover !text-white font-bold text-xs shadow-sm transition-colors shrink-0 !no-underline"
          >
            <span className="!text-white font-bold">Book 1-on-1 Consultation</span>
            <ArrowRightOutlined className="!text-white text-xs" />
          </Link>
        </div>

        {/* Compact 3-Column Support Bar */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {/* ITEM 1: Direct Support Phone & Email */}
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/70 dark:border-zinc-800 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-zinc-900 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-sm shrink-0">
              <PhoneOutlined />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100 mb-0.5">
                Tax Agent Helpline
              </h4>
              <div className="text-xs text-slate-600 dark:text-zinc-400 space-y-0.5">
                <a href="tel:1300328316" className="font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary transition-colors block">
                  1300 328 316
                </a>
                <a href="mailto:info@financiallyup.com.au" className="text-[11px] text-slate-500 hover:text-brand-primary transition-colors block truncate">
                  info@financiallyup.com.au
                </a>
              </div>
            </div>
          </div>

          {/* ITEM 2: ATO Compliance & Privacy Protection */}
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/70 dark:border-zinc-800 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-zinc-900 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-sm shrink-0">
              <LockOutlined />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100 mb-0.5">
                Privacy & Data Security
              </h4>
              <div className="text-[11px] text-slate-500 dark:text-zinc-400 space-y-0.5">
                <div className="flex items-center gap-1.5">
                  <CheckCircleFilled className="text-brand-primary text-[10px]" />
                  <span>256-Bit SSL Encrypted</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircleFilled className="text-brand-primary text-[10px]" />
                  <span>ATO Registered Tax Agent</span>
                </div>
              </div>
            </div>
          </div>

          {/* ITEM 3: Head Office & Confidentiality Guarantee */}
          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/70 dark:border-zinc-800 flex items-start gap-3">
            <div className="w-9 h-9 rounded-xl bg-slate-100 dark:bg-zinc-900 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-sm shrink-0">
              <SafetyCertificateOutlined />
            </div>
            <div className="min-w-0">
              <h4 className="text-xs font-bold text-slate-900 dark:text-zinc-100 mb-0.5">
                Head Office
              </h4>
              <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-tight">
                Level 5, 100 Walker St, North Sydney NSW 2060, Australia
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
