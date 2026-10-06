"use client";

import React from "react";
import {
  DollarOutlined,
  CalculatorOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  AlertOutlined,
  ExclamationCircleOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

/**
 * WhichCostsCanBeConsidered Component
 * ===================================
 * Section: "Which costs can be considered?"
 * Content verbatim from '15th Pillar R&D Tax Incentive.docx'
 *
 * Theme: Clean White
 */
export default function WhichCostsCanBeConsidered() {
  const expenditureCategories = [
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Notional Deductions",
      tag: "ATO Classification",
      description:
        "Potentially relevant expenditure may include eligible staff time, contractor or research service provider work, materials and other costs that meet the tax rules. The ATO calls eligible amounts notional deductions.",
      points: [
        "Each amount must be connected to eligible activities",
        "Tested under the relevant expenditure rules (who incurred it)",
        "At-risk rule testing (ensuring company bears commercial and financial risk)",
        "Application of special rules (feedstock, grant clawback, associate payments)",
      ],
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "The $20,000 Expenditure Threshold",
      tag: "Statutory Minimum",
      description:
        "To claim the offset, total eligible notional deductions must generally be more than $20,000. Specified exceptions can apply to eligible expenditure incurred to a registered research service provider and eligible monetary contributions under the Cooperative Research Centres program.",
      points: [
        "Minimum $20,000 annual notional deduction threshold",
        "Exception 1: Eligible expenditure to a registered research service provider (RSP)",
        "Exception 2: Contributions under Cooperative Research Centres (CRC) program",
        "Threshold is only one part: budgets are never automatically claimable",
      ],
    },
    {
      icon: <GlobalOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Overseas Activities & Findings",
      tag: "Strict Year-End Cutoff",
      description:
        "Expenditure on activities conducted overseas needs particular attention. A positive overseas finding is required before eligible overseas expenditure can be claimed.",
      points: [
        "Positive overseas finding required before claiming offshore costs",
        "Application must be submitted BEFORE the end of the relevant income year",
        "The Department cannot accept a late application or grant an extension",
        "If a project involves offshore work, raise it early",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <CalculatorOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Eligible Expenditure
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Which costs can be considered?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Potentially relevant expenditure may include eligible staff time, contractor or research service provider work, materials and other costs that meet the tax rules. The ATO calls eligible amounts notional deductions. Each amount must be connected to eligible activities and tested under the relevant expenditure rules, including who incurred it, whether it is at risk and whether special rules apply.
          </p>
        </div>

        {/* 3 Expenditure Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {expenditureCategories.map((cat, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {cat.icon}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {cat.tag}
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2.5">
                  {cat.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {cat.description}
                </p>

                <div className="pt-3 border-t border-slate-200 dark:border-zinc-800">
                  <ul className="space-y-2">
                    {cat.points.map((pt, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-zinc-400">
                        <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Cautionary Warning Box: Threshold & Offshore Realities (Verbatim from docx) */}
        <div className="rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 p-6 sm:p-8">
          <div className="flex items-start gap-3.5">
            <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400 text-xl mt-0.5 shrink-0" />
            <div className="space-y-2">
              <h4 className="text-base font-bold text-amber-900 dark:text-amber-200 m-0">
                Important Allocation &amp; Offshore Finding Rules
              </h4>
              <p className="text-xs sm:text-sm text-amber-950/90 dark:text-amber-200/90 leading-relaxed m-0">
                The threshold is only one part of eligibility. We do not treat a whole salary, software budget or project cost as automatically claimable because the team worked on an R&amp;D project.
              </p>
              <p className="text-xs sm:text-sm text-amber-950/90 dark:text-amber-200/90 leading-relaxed m-0 font-medium">
                The application for an overseas finding must be submitted before the end of the income year in which the company conducts, or plans to conduct, the overseas activities, and the Department cannot accept a late application or grant an extension for an overseas finding. If a project involves offshore work, raise it early.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
