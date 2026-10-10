"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  SwapOutlined,
  AuditOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

/**
 * OrderlyWindUpSequence Component
 * ===============================
 * Implements verbatim SEO content from Page 9 of 9th Pillar SMSF.docx:
 * - What needs to happen before an SMSF can be closed? (8-step orderly closure list)
 */
export default function OrderlyWindUpSequence() {
  const closureSteps = [
    {
      step: "01",
      title: "Check the trust deed and document the trustees’ decision to wind up the fund",
      desc: "Reviewing fund dissolution clauses and executing formal written trustee meeting minutes and resolutions.",
    },
    {
      step: "02",
      title: "Identify each member’s benefit and arrange permitted payment or rollover in accordance with super law and the deed",
      desc: "Calculating final member account balances, preservation statuses, and authorized rollover destinations.",
    },
    {
      step: "03",
      title: "Dispose of or transfer fund investments and settle outstanding liabilities",
      desc: "Liquidating equities, selling property, settling tax debts, paying accounting/audit fees, and resolving creditors.",
    },
    {
      step: "04",
      title: "Complete any required Super Stream rollover and member reporting",
      desc: "Transmitting electronic rollover messages to receiving complying APRA super funds via SuperStream standards.",
    },
    {
      step: "05",
      title: "Prepare final accounting records and financial statements",
      desc: "Drafting the final operating statement, statement of financial position (reduced to zero), and member benefit allocations.",
    },
    {
      step: "06",
      title: "Arrange the final independent SMSF audit and any outstanding prior-year audits",
      desc: "Undergoing final statutory examination by an ASIC-registered approved SMSF auditor for the closure financial year.",
    },
    {
      step: "07",
      title: "Lodge all outstanding returns and the final SMSF annual return",
      desc: "Electronically lodging the final SAR with Section A 'Is the fund wound up?' formally selected as 'Yes'.",
    },
    {
      step: "08",
      title: "Notify relevant parties and retain the required records, including wind-up records, for at least 10 years after lodging the final SMSF annual return",
      desc: "Notifying financial institutions and safeguarding all historical fund, audit, and tax records for at least ten years.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Orderly Closure Sequence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What needs to happen before an SMSF can be closed?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The practical order depends on the fund, but trustees generally need to deal with member benefits, investments, liabilities and reporting before the SMSF can be finalized. A fund should not be treated as wound up while it still owns assets or has unresolved obligations.
          </p>
        </div>

        {/* 8-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 w-full">
          {closureSteps.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:border-cyan-400/60 transition-colors"
            >
              <div className="w-8 h-8 rounded-lg bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                {item.step}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
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
