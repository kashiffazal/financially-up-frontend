"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  SearchOutlined,
  ThunderboltOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * FromDataToManagementAction Component
 * ====================================
 * Section 3: From accounting data to management action
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function FromDataToManagementAction() {
  const actionExamples = [
    {
      movement: "Gross Margin is Falling",
      question: "Why is profitability per dollar dropping?",
      action: "Management investigates pricing discounts, changes in product/service mix, or direct supplier cost increases.",
      color: "orange",
    },
    {
      movement: "Debtor Days are Increasing",
      question: "Why is money taking longer to hit the bank?",
      action: "Management reviews invoice dispatch speed, customer follow-up cadence, and credit limits for slow payers.",
      color: "blue",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Verbatim Strategic Explanation */}
          <div className="lg:col-span-7">
            <Tag color="purple" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Action-Oriented Analytics
            </Tag>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              From accounting data to management action
            </h2>
            <div className="mt-6 space-y-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                A finance dashboard consultant first checks whether the source records support the detail requested. If wages move between direct costs and overhead from one month to the next, a reported margin trend may be misleading. If customer receipts are entered late, a cash collection measure may be stale. We identify material data problems before treating a graph as evidence of performance.
              </p>
              <p>
                We then agree how often the information can be updated reliably and who will review it. Some businesses need a short weekly cash view plus a monthly financial dashboard; others benefit from one monthly meeting. The format can be a report or an appropriate software dashboard, depending on your existing systems and the agreed scope. We do not require a particular platform simply to make the information look more sophisticated.
              </p>
              <p>
                Management dashboard reporting works best when it leads to a question or decision. If gross margin is falling, management might check pricing, product mix or direct costs. If debtor days are increasing, it might review invoicing and collections. The dashboard highlights the movement; investigation establishes the cause.
              </p>
            </div>
          </div>

          {/* Right Column: Movement to Investigation Cards */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400 mb-2">
              How Dashboards Trigger Action
            </h3>
            {actionExamples.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-900 dark:text-white">
                    Observed Movement:
                  </span>
                  <Tag color={item.color} className="text-[11px] font-semibold m-0">
                    {item.movement}
                  </Tag>
                </div>
                <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/50 mb-3 text-xs font-semibold text-slate-700 dark:text-zinc-300">
                  {item.question}
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-400 m-0 leading-relaxed">
                  <strong>Investigation & Action:</strong> {item.action}
                </p>
              </div>
            ))}

            <div className="p-4 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/20 border border-emerald-200/60 dark:border-emerald-800/40 text-xs text-emerald-900 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircleOutlined className="text-base text-emerald-600 dark:text-emerald-400 shrink-0" />
              <span>
                <strong>Platform Agnostic:</strong> We work directly with your existing Xero, MYOB, or Excel tools without forcing unnecessary proprietary software.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
