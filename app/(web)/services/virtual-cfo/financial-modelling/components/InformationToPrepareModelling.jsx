"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileDoneOutlined,
  CheckCircleFilled,
  FolderOpenOutlined,
} from "@ant-design/icons";

/**
 * InformationToPrepareModelling Component
 * =======================================
 * Section 5: What to bring to the first discussion
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function InformationToPrepareModelling() {
  const items = [
    { title: "recent financial statements or management accounts", desc: "Past 12–24 months of balance sheets and P&L statements to establish baselines." },
    { title: "current budget or target forecasts", desc: "Any existing fiscal goals, operational budgets, or departmental expectations." },
    { title: "relevant loans and debt agreements", desc: "Current interest rates, repayment schedules, balloon clauses, and covenants." },
    { title: "short outline of the proposed decision", desc: "A brief summary of what decision is being weighed (e.g. expansion, acquisition, hires)." },
    { title: "sales pipeline information and signed contracts", desc: "Confirmed orders, CRM deals, pipeline probability weights, and client retention rates." },
    { title: "pricing, staffing plans and customer payment terms", desc: "Proposed rate cards, remuneration packages, superannuation, and debtor collection terms." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Discovery Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What to bring to the first discussion
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Bring recent financial statements or management accounts, a current budget, relevant loans and a short outline of the proposed decision. Sales pipeline information, contracts, pricing, staffing plans and customer payment terms can also help. We will identify which inputs are supported by records and which require judgement, then agree a sensible scope and time horizon.
          </p>
        </div>

        {/* 6 Preparation Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 hover:bg-white dark:hover:bg-zinc-800 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-teal-100/60 dark:bg-teal-950/40 text-teal-700 dark:text-teal-400 flex items-center justify-center font-mono font-bold text-sm">
                    0{index + 1}
                  </div>
                  <FileDoneOutlined className="text-lg text-slate-400 dark:text-zinc-500" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white capitalize mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                <CheckCircleFilled className="text-xs" />
                <span>Model Input Material</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
