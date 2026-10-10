"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  FileSyncOutlined,
  CalculatorOutlined,
  SolutionOutlined,
  CarryOutOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsPaymentPlan Component
 * ==========================================
 * Section 7: How Financially Up can help
 * Verbatim text from Page 7 of '11th Pillar ATO Help.docx'.
 *
 * Implements 6 core deliverables and defines service scope boundaries
 * regarding tax disputes and legal/insolvency counsel.
 */
export default function HowFinanciallyUpHelpsPaymentPlan() {
  const deliverables = [
    {
      num: "01",
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Identify Accounts, Periods & Components",
      desc: "identify the tax accounts, periods and amounts included in the debt",
      detail:
        "We dissect your ATO statements to clarify which parts relate to income tax, activity statements, superannuation, or accrued interest.",
    },
    {
      num: "02",
      icon: <FileSyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Check Outstanding Lodgements & Credits",
      desc: "check whether returns, BAS, credits or amendments remain outstanding",
      detail:
        "The ATO will not approve an instalment arrangement while unlodged returns remain outstanding. We audit and fast-track missing filings.",
    },
    {
      num: "03",
      icon: <CalculatorOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Model Cash Flow & Supportable Proposals",
      desc: "review cash flow and prepare a supportable instalment proposal",
      detail:
        "We test your trading margins and working capital to formulate instalment amounts that can be maintained alongside new tax bills.",
    },
    {
      num: "04",
      icon: <SolutionOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Agent Portal Setup or ATO Liaison",
      desc: "assist with an eligible online plan or ATO communication where authorized",
      detail:
        "As your registered tax agent, we navigate Online services for agents for eligible debts up to $200,000 or negotiate directly with case officers.",
    },
    {
      num: "05",
      icon: <CarryOutOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Document Agreed Conditions & Milestones",
      desc: "record the agreed instalments, dates and ongoing compliance conditions",
      detail:
        "We document payment schedules, direct-debit clearing accounts, and key compliance dates so you never inadvertently breach terms.",
    },
    {
      num: "06",
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Identify Specialist Legal/Insolvency Needs",
      desc: "identify when legal, insolvency or specialist debt advice is required",
      detail:
        "If a business faces severe insolvency or director liability, we flag early when specialist insolvency practitioners or lawyers are required.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Our Client Services
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We provide structured, professional tax-agent representation to structure sustainable payment arrangements with the ATO and avoid repeating cycles of default.
          </p>
        </div>

        {/* 6 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-7 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-600">
                    {item.num}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium mb-2 leading-relaxed">
                  "{item.desc}"
                </p>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Direct Tax Agent Service
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Scope Boundaries Callout */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-200/60 dark:border-blue-800/60">
              <SafetyCertificateOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Scope & Legal Demarcation:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                If you dispute the underlying assessment, a payment plan does not resolve the tax calculation. That issue may require an amendment, objection or another review pathway. Formal legal or insolvency advice may require an appropriately qualified specialist.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
