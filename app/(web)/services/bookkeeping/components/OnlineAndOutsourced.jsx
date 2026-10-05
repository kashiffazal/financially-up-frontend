"use client";

import React from "react";
import { Button } from "antd";
import {
  CloudUploadOutlined,
  TeamOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  LaptopOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * OnlineAndOutsourced Component
 * =============================
 * Section 5: Online and Outsourced Bookkeeping Workflows.
 * Highlights cloud accounting advantages, paperless document workflows,
 * and visibility over cash flow and outstanding balances.
 * Background: Lite Brand Gradient.
 */
export default function OnlineAndOutsourced() {
  const onlineBenefits = [
    "Secure cloud software integration (Xero, MYOB, QuickBooks Online)",
    "Electronic receipt capture eliminating paper shoe boxes and lost receipts",
    "Automated direct bank feeds with daily bank reconciliation protocols",
    "Live dashboard visibility accessible from your desktop, tablet, or phone",
  ];

  const outsourcedBenefits = [
    "Eliminates internal hiring, training, and bookkeeping payroll overheads",
    "Scales seamlessly with your transaction volume as your business grows",
    "Expert review by qualified accounting professionals familiar with ATO rules",
    "Predictable monthly bookkeeping fees with clear, agreed deliverables",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <CloudUploadOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Modern Cloud Workflows
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Online and Outsourced Bookkeeping Services
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Manage your financial records smoothly without physical paperwork or regular office visits. Our online workflow gives you reliable, reconciled accounts and clear visibility over your business cash flow.
          </p>
        </div>

        {/* 2 Major Columns: Online vs Outsourced */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Online Bookkeeping Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                  <LaptopOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Paperless & Remote
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                100% Online Cloud Bookkeeping
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                Share source documents electronically, review transactions in real-time, and get your questions resolved quickly without administrative friction.
              </p>

              <div className="space-y-3 mb-8">
                {onlineBenefits.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/services/bookkeeping/xero-bookkeeping" className="w-full block">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full h-12 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center"
              >
                Explore Xero Bookkeeping
              </Button>
            </Link>
          </div>

          {/* Outsourced Bookkeeping Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                  <TeamOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Full Service Support
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Outsourced Bookkeeping Routine
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                Transfer routine data maintenance and reconciliation to our professional team, ensuring your records are always current and management-ready.
              </p>

              <div className="space-y-3 mb-8">
                {outsourcedBenefits.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link href="/services/bookkeeping/monthly-bookkeeping" className="w-full block">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="w-full h-12 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center"
              >
                Explore Monthly Bookkeeping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
