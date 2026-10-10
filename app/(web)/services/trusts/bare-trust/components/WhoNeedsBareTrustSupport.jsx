"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  HomeOutlined,
  FileSearchOutlined,
  DollarCircleOutlined,
  QuestionCircleOutlined,
  ReconciliationOutlined,
} from "@ant-design/icons";

/**
 * WhoNeedsBareTrustSupport Component
 * ==================================
 * Section: Who may need bare trust accounting support?
 * Verbatim text from Page 4 of client docx (8th Pillar Trust Services.docx).
 * Covers beneficial ownership across individuals, companies, and trusts,
 * real property, commercial/financing arrangements, and record reconciliations.
 */
export default function WhoNeedsBareTrustSupport() {
  const triggerScenarios = [
    {
      icon: <HomeOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Real Property & Investment Assets",
      desc: "Where property or investment assets are held by a custodian or trustee while the economic benefits and risk lie with a distinct beneficiary.",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Commercial & Financing Structures",
      desc: "Arrangements established for lender requirements, security structures, joint holding, or commercial convenience where legal title differs from beneficial ownership.",
    },
    {
      icon: <QuestionCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Income & Deduction Uncertainty",
      desc: "When there is uncertainty regarding whether rental income, interest deductions, or capital expenses must be lodged in the trust or directly by the beneficiary.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "GST Enterprise & Supply Review",
      desc: "Reviewing whether the acquisition or sale of commercial assets, adjustments, or input tax credits belong to the trustee or the beneficiary entity.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Bank & Legal Title Discrepancies",
      desc: "When conveyancer, lender, and land title records show the legal trustee, requiring clear accounting alignment with the beneficiary’s statutory books.",
    },
    {
      icon: <ReconciliationOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Multi-Entity Financial Reconciliations",
      desc: "Reconciling loan accounts, funds flows, and settlements between the trustee, beneficiary, lender, and third-party stakeholders.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Practical Applications
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who may need bare trust accounting support?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Bare trust accounting can be relevant where an individual, company, trust or other entity is the beneficial
            owner of an asset but legal title is held by a separate trustee. Common situations can involve real
            property, investment assets or arrangements created for commercial, financing or ownership reasons.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Support may be useful when a transaction has occurred, the bank or solicitor records show the trustee as
            legal owner, there is uncertainty about who should report income or deductions, GST treatment needs review,
            or the arrangement needs to be reconciled with the beneficiary&apos;s financial and tax records.
          </p>
        </div>

        {/* 6 Trigger Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {triggerScenarios.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
