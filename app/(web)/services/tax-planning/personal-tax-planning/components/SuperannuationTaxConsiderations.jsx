"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * SuperannuationTaxConsiderations Component
 * =========================================
 * Section 7: Superannuation-Related Tax Considerations.
 * Verbatim text from Page 3 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains personal deductible concessional super contributions, the statutory Notice of Intent,
 * contribution caps, and clear boundaries around licensed financial product advice.
 */
export default function SuperannuationTaxConsiderations() {
  const superRequirements = [
    {
      step: "01",
      title: "Concessional Contribution Caps",
      desc: "Annual concessional cap ($30,000 for 2024–25) includes employer super guarantee, salary sacrifice, and personal deductible amounts.",
    },
    {
      step: "02",
      title: "Carry-Forward Unused Caps",
      desc: "Eligible individuals with a total super balance under $500,000 can access unused concessional cap amounts from the past 5 financial years.",
    },
    {
      step: "03",
      title: "Section 290-170 Notice of Intent",
      desc: "A valid Notice of Intent to claim a deduction must be lodged with your super fund before lodging your tax return or 30 June of the following year.",
    },
    {
      step: "04",
      title: "Super Fund Acknowledgment",
      desc: "You must receive written acknowledgment from the super fund confirming the deduction amount before claiming it on your return.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Superannuation Planning
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Superannuation-Related Tax Considerations
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Superannuation can be relevant to personal tax planning, but contribution rules, caps and deduction requirements apply. A personal contribution does not automatically create a tax deduction. Where the eligibility requirements are met, a valid notice of intent generally needs to be given to the super fund within the required time, and the fund’s acknowledgement should be received before the deduction is claimed. Contribution caps and other conditions also need to be considered.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Financially Up can consider the tax implications within our tax scope. Advice about which super fund, investment option or financial product is suitable is personal financial advice and may require a licensed financial adviser.
          </p>
        </div>

        {/* 4 Process Step Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {superRequirements.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-colors flex flex-col justify-between"
            >
              <div>
                <span className="text-[11px] font-extrabold text-brand-primary dark:text-emerald-400 uppercase tracking-widest block mb-3">
                  Step {item.step}
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Boundary Note */}
        <div className="rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <InfoCircleOutlined className="text-blue-600 dark:text-blue-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed font-normal">
            <strong>Financial Advice Regulatory Notice:</strong> Financially Up advises strictly on the tax consequences and deductibility of superannuation contributions under Australian tax law. We do not provide Australian Financial Services (AFS) product advice or recommend specific super funds or investment allocations.
          </p>
        </div>
      </div>
    </section>
  );
}
