"use client";

import React from "react";
import {
  AuditOutlined,
  FolderOpenOutlined,
  TeamOutlined,
  CalculatorOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsRd Component
 * =================================
 * Section: "How Financially Up can help"
 * Content verbatim from '15th Pillar R&D Tax Incentive.docx'
 *
 * Theme: Clean White
 */
export default function HowFinanciallyUpHelpsRd() {
  const servicePillars = [
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Review Tax & Accounting Aspects",
      description:
        "As a registered tax agent, Financially Up can review the tax and accounting aspects of an R&D tax incentive claim and assist with a company tax return within an agreed engagement.",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Organise Project & Cost Information",
      description:
        "We can help organise project and cost information, reconciling development ledgers, payroll and contractor invoices to ensure accurate and traceable figures.",
    },
    {
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Specialist & Technical Coordination",
      description:
        "Identify questions for technical staff or an appropriate R&D specialist, ensuring uncertain experimental activities receive the required technical attention.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Coordinate Registration & Tax Calculations",
      description:
        "Coordinate registration information and tax calculations where scoped, aligning customer portal submissions with the company income tax return and R&D schedule.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Registered Tax Agent Scope
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            As a registered tax agent, Financially Up can review the tax and accounting aspects of an R&amp;D tax incentive claim and assist with a company tax return within an agreed engagement. We can help organise project and cost information, identify questions for technical staff or an appropriate R&amp;D specialist and coordinate registration information and tax calculations where scoped.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {servicePillars.map((pillar, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-md transition-all flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center shrink-0">
                {pillar.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {pillar.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Self-Assessment & Honest Advice Banner (Verbatim from docx) */}
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <div className="flex items-center gap-2">
                <InfoCircleOutlined className="text-teal-600 dark:text-teal-400" />
                <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                  Self-Assessment Responsibilities &amp; Realistic Advice
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                The company remains responsible for the accuracy of its self-assessment, activity descriptions and expenditure records.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-medium">
                Financially Up Pty Ltd has more than 10 years of experience and a team including CPA and IPA members. We offer online and in-person appointments across Australia. We discuss the specific work needed without guaranteeing eligibility, registration, an offset amount or ATO acceptance.
              </p>
            </div>

            <div className="lg:col-span-4 flex items-center justify-center lg:justify-end">
              <div className="p-4 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-center w-full sm:w-auto">
                <span className="text-[11px] font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider block font-mono">
                  Credentials &amp; Delivery
                </span>
                <span className="text-lg font-bold text-slate-900 dark:text-white block my-1">
                  CPA &amp; IPA Qualified
                </span>
                <span className="text-xs text-slate-600 dark:text-zinc-400">
                  Australia-Wide (Online &amp; In-Person)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
