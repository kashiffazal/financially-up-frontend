"use client";

import React from "react";
import { Tag } from "antd";
import {
  ScheduleOutlined,
  SyncOutlined,
  TeamOutlined,
  AuditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * HowWeDevelopBoardReportingProcess Component
 * ===========================================
 * Section 3: How we develop a board reporting process
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function HowWeDevelopBoardReportingProcess() {
  const processSteps = [
    { title: "Review Meeting Frequency & Decisions", desc: "Align with board calendars, director committee priorities, and key strategic choices." },
    { title: "Assess Current Reports & Data Sources", desc: "Audit existing management packs, chart of accounts consistency, and general ledger feeds." },
    { title: "Establish Agreed Pack Structure", desc: "Standardize schedules for P&L, balance sheets, cash forecasting, and operational KPIs." },
    { title: "Enforce Cut-Offs & Reconciliation", desc: "Allow adequate buffer for management to close ledgers, reconcile balances, and investigate variances." },
    { title: "Draft Commentary & Review Prior to Distribution", desc: "Draft objective explanations of material swings and review numbers with executives before release." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Process Architecture
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How we develop a board reporting process
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                We start by discussing meeting frequency, the decisions directors face and the reports already produced. We then review accounting data, reporting cut-offs, budgets and any operational measures management can support. Our board pack preparation services can include an agreed pack structure, recurring financial schedules, variance commentary and discussion of the figures before distribution.
              </p>
              <p>
                A practical preparation cycle gives management time to reconcile material balances, investigate exceptions and approve factual explanations. If the accounts are incomplete, the pack should make that clear and prioritize the work needed for reliable reporting. Consistency helps directors compare periods, while the content should change when the business's risks or decisions change.
              </p>
            </div>
          </div>

          {/* Right Column: Process Steps Card */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
                Five-Stage Board Pack Delivery Cadence
              </h3>
              {processSteps.map((st, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-7 h-7 rounded-lg bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center font-mono font-bold text-xs shrink-0 mt-0.5">
                    {idx + 1}
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white m-0">
                      {st.title}
                    </h4>
                    <p className="text-[11px] sm:text-xs text-slate-500 dark:text-zinc-400 m-0 mt-0.5">
                      {st.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
