"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ToolOutlined,
  ApartmentOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  FileSearchOutlined,
} from "@ant-design/icons";

/**
 * CommonIssuesAndSixStepProcess Component
 * =======================================
 * Section 6 & 8: Common Tax Return Amendment Issues & How the Amendment Process Works.
 * Features 100% complete, verbatim content from Page 12 of the client document.
 */
export default function CommonIssuesAndSixStepProcess() {
  const steps = [
    {
      num: "1",
      title: "Confirm the affected year.",
      desc: "Tell us which return may require correction and why",
    },
    {
      num: "2",
      title: "Provide the lodged return and assessment.",
      desc: "Supply the original return, notice of assessment and any previous amendments",
    },
    {
      num: "3",
      title: "Provide supporting records.",
      desc: "Relevant documents may include income statements, receipts, investment reports, foreign-income records, rental property information and ATO correspondence",
    },
    {
      num: "4",
      title: "Review the proposed correction.",
      desc: "We review the existing figures, corrected totals, available evidence and any related tax calculations",
    },
    {
      num: "5",
      title: "Prepare the amendment request.",
      desc: "If an amendment is appropriate, the corrected information and explanation are prepared. Subject to authorization and the agreed scope, the request may be lodged using the appropriate ATO channel",
    },
    {
      num: "6",
      title: "Review the ATO outcome.",
      desc: "Once processed, the amended notice of assessment can be checked against the amendment request, including any additional tax, refund, interest, penalty or payment due date",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 6: Common Tax Return Amendment Issues */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Practical vs Complex Amendments
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Common Tax Return Amendment Issues
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Many amendments involve practical errors discovered after lodgment, such as an amended income statement, omitted interest, an incorrect work-related expense or a deduction that was not properly apportioned between business and private use.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch mb-8">
            {/* Practical Errors */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                    <ToolOutlined className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Practical Everyday Corrections
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">
                      Routine Post-Lodgment Discoveries
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  Many amendments involve practical errors discovered after lodgment, such as an amended income statement, omitted interest, an incorrect work-related expense or a deduction that was not properly apportioned between business and private use.
                </p>
              </div>
            </div>

            {/* Complex Amendments & CGT */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <ApartmentOutlined className="text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                      Complex &amp; Multi-Asset Matters
                    </h3>
                    <span className="text-xs text-slate-500 dark:text-zinc-400">
                      Investments, Offshore &amp; CGT
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                  More complex amendments can involve foreign income, rental properties, share transactions, cryptocurrency, carried-forward losses or capital gains. If the correction involves a disposal of property or investments, our capital gains tax page explains the broader CGT service.
                </p>
                <Link href="/services/individual-tax/capital-gains-tax">
                  <Button
                    type="link"
                    className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 h-auto text-xs"
                    icon={<ArrowRightOutlined className="text-xs" />}
                    iconPosition="end"
                  >
                    View Capital Gains Tax Service
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-slate-100/80 dark:bg-zinc-800/60 border border-slate-200/60 dark:border-zinc-700/60 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 text-center font-medium">
            Detailed tax advice, calculations or reviews outside the amendment itself may need to be scoped separately.
          </div>
        </div>

        {/* Section 8: How the Amendment Process Works */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Structured Methodology
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How the Amendment Process Works
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A transparent, 6-step pathway to ensure amendments are thoroughly supported, accurately prepared, and submitted through official ATO digital lodgment channels.
            </p>
          </div>

          {/* 6 Steps Stack */}
          <div className="max-w-4xl mx-auto space-y-4">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex items-start gap-4 sm:gap-6 hover:shadow-xs transition-shadow"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-brand-primary dark:text-emerald-400 font-extrabold text-sm sm:text-base shrink-0">
                  {item.num}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
