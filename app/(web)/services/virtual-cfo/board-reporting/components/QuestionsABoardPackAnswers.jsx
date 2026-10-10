"use client";

import React from "react";
import { Tag } from "antd";
import {
  QuestionCircleOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  CarryOutOutlined,
} from "@ant-design/icons";

/**
 * QuestionsABoardPackAnswers Component
 * =====================================
 * Section 4: Questions a board pack can help answer
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function QuestionsABoardPackAnswers() {
  const coreQuestions = [
    {
      q: "Are actual results materially different from plan, and why?",
      desc: "Distinguishing operational volume shifts, margin compression, or seasonal timing from structural problems.",
    },
    {
      q: "What is driving cash receipts, payments and near-term commitments?",
      desc: "Tracking debt amortization, customer debtor ageing, and planned capex outflows across the upcoming quarter.",
    },
    {
      q: "Which assumptions underpin the current forecast?",
      desc: "Making revenue conversion rates, hiring timelines, and inflation assumptions transparent for director scrutiny.",
    },
    {
      q: "Are major costs, customer balances or debt obligations changing?",
      desc: "Highlighting key client concentrations, overdue supplier invoices, and bank covenant compliance indicators.",
    },
    {
      q: "What decision is requested from directors and what information supports it?",
      desc: "Framing formal resolutions with concise financial impact summaries and downside risk analyses.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Director Inquiries
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Questions a board pack can help answer
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A board reporting consultant can help management turn data into a report directors can interrogate. A high-quality pack directly addresses five fundamental oversight questions:
          </p>
        </div>

        {/* 5 Questions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {coreQuestions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-mono font-bold text-teal-600 dark:text-teal-400 block mb-2">
                  Governance Inquiry 0{idx + 1}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.q}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Action Log Integration Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex items-start gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-400 flex items-center justify-center shrink-0">
            <CarryOutOutlined className="text-xl" />
          </div>
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1">
              Accountability & Action Tracking
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-normal">
              The report is most useful when it separates observed results from explanations still being investigated, and when action owners and follow-up dates are recorded in the organization’s normal governance process.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
