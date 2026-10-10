"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleOutlined,
  ArrowRightOutlined,
  DashboardOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsDashboards Component
 * =========================================
 * Section 4: How Financially Up helps & Related services
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function HowFinanciallyUpHelpsDashboards() {
  const serviceSteps = [
    "Review current management reports and underlying accounting data structures",
    "Agree on core commercial measures, calculations, and KPI definitions",
    "Design a concise, intuitive visual layout tailored to your management team",
    "Perform data-integrity checks on source ledgers and cut-off routines",
    "Conduct recurring performance reviews at an agreed weekly or monthly cadence",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Service Delivery
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up helps
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                Our business performance dashboard services can include reviewing current reporting, agreeing the measures and definitions, designing a concise view, checking source data, and discussing results at an agreed frequency. A one-off dashboard setup and an ongoing CFO-style review are different engagements, so we clarify the work, reporting dates and responsibilities at the outset.
              </p>
              <p>
                Our KPI reporting services focus on selecting, defining and interpreting business measures in a regular reporting process. The finance dashboard provides the tailored visual view for decision makers. Where directors need a fuller narrative and supporting papers, our{" "}
                <Link href="/services/virtual-cfo/board-reporting" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  board reporting services
                </Link>{" "}
                address the board pack. For decisions about future cash and financial position,{" "}
                <Link href="/services/virtual-cfo/three-way-forecasting" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                  three-way financial forecasting
                </Link>{" "}
                covers connected projections rather than current performance alone.
              </p>
            </div>
          </div>

          {/* Right Column: Implementation Scope Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm space-y-3.5">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-4">
                Dashboard Engagement Scope
              </h3>
              {serviceSteps.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
