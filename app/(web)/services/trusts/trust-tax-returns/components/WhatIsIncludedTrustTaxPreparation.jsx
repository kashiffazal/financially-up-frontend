"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalculatorOutlined,
  ReconciliationOutlined,
  AuditOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsIncludedTrustTaxPreparation Component
 * ============================================
 * Section: What is included in trust tax return preparation?
 * Verbatim text from Page 6 of client docx (8th Pillar Trust Services.docx).
 * Explains Section 95 net income calculation, trustee vs beneficiary assessment,
 * and deed / distribution resolution reconciliation.
 */
export default function WhatIsIncludedTrustTaxPreparation() {
  const steps = [
    {
      icon: <ReconciliationOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Ledger & Transaction Review",
      desc: "Checking whether transactions have been properly recorded and identifying whether income belongs to the trust or an associated individual or entity.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Section 95 Net Income Calculation",
      desc: "Calculating the net statutory taxable income of the trust under Australian tax law, including franking credits, capital gains, and deduction adjustments.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Trustee vs Beneficiary Assessment",
      desc: "Determining whether tax is assessed to present entitled beneficiaries, the trustee under Section 98/99/99A, or both across respective capacities.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Statement of Distribution & Lodgement",
      desc: "Preparing the comprehensive distribution schedules, beneficiary tax notifications, and electronic lodgement directly via the ATO Tax Agent Portal.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Scope & Methodology
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is included in trust tax return preparation?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trust tax preparation generally involves more than copying figures into a return form. The process starts
            with reviewing financial records, checking whether transactions have been properly recorded, identifying
            whether income belongs to the trust or an associated entity, and calculating the net income of the trust
            under Australian tax law.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Administration Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Deed, Distribution Resolutions & Beneficiary Information
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For tax administration, the trustee generally lodges the trust tax return and provides the trust and
              beneficiary information required by the form. Depending on the facts, tax may be assessed to
              beneficiaries, the trustee, or both in different capacities. This is why the trust deed, distribution
              resolutions and beneficiary information matter to the annual return.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
