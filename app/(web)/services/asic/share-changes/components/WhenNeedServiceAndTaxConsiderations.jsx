"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  DollarOutlined,
  TeamOutlined,
  LineChartOutlined,
  ArrowRightOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhenNeedServiceAndTaxConsiderations Component
 * ============================================
 * Section 2 of Share Changes (/services/asic/share-changes/):
 * 1. "When might you need an ASIC share transfer service?"
 * 2. "Tax and transaction considerations before changing shares"
 *
 * Implements 100% complete, verbatim content from Page 7 of '7th Pillar ASIC.docx'.
 * Clean White alternating section, ownership triggers, CGT & equity tax warnings, and cross-service links.
 */
export default function WhenNeedServiceAndTaxConsiderations() {
  const triggers = [
    { title: "Founder Departure", desc: "A founding partner exits, transferring their shares back to company or co-founders." },
    { title: "Incoming Owner / Investor", desc: "New equity partner joins or an external investor injects expansion capital." },
    { title: "Family Succession", desc: "Transferring family enterprise ownership to the next generation or family trust." },
    { title: "Holding Adjustments", desc: "Existing shareholders increasing or diluting their proportional equity stake." },
    { title: "Corporate Restructure", desc: "Transferring shares into a holding company, unit trust, or bucket company entity." },
    { title: "Historical Discrepancies", desc: "Reconciling internal records where past changes were never formally lodged with ASIC." },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: When might you need an ASIC share transfer service? */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Commercial Triggers
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              When might you need an ASIC share transfer service?
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6 mb-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Share changes commonly arise when a founder leaves, a new owner joins, family ownership changes, an investor is introduced, an existing shareholder increases or reduces their holding, or a company restructures its ownership. Some businesses also discover that older shareholder changes were recorded internally but not updated with ASIC, or that the company&apos;s share register is incomplete.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 pt-2">
              {triggers.map((t, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800"
                >
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1 uppercase tracking-wider">
                    {t.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                    {t.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-3 border-t border-slate-200/70 dark:border-zinc-800 m-0">
              If broader company details also need correction, our{" "}
              <Link href="/services/asic/company-changes" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Company Changes service
              </Link>{" "}
              can help coordinate those updates. Where the issue is primarily the ongoing integrity of statutory records, see our{" "}
              <Link href="/services/asic/corporate-registers" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Corporate Registers service
              </Link>.
            </p>
          </div>
        </div>

        {/* Subsection 2: Tax and transaction considerations before changing shares */}
        <div className="w-full">
          <div className="text-center mb-10">
            <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Tax, CGT & Legal Integrity
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Tax and transaction considerations before changing shares
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              An ASIC filing does not determine the tax outcome of a share transaction. A transfer or issue can have tax, accounting, valuation, duty or legal consequences depending on the facts. For example, a disposal of shares may have capital gains tax implications for the shareholder, while a share issue can affect ownership percentages and the company&apos;s equity records.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              For that reason, it can be useful to seek advice before signing or implementing a significant ownership change rather than treating the ASIC update as the first step. Financially Up can assist with the accounting and tax aspects that fall within the agreed scope. Legal documentation, shareholder rights or transaction-specific legal advice may require a lawyer.
            </p>

            <div className="p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40">
              <div className="flex items-center gap-2 mb-1">
                <WarningOutlined className="text-amber-600 dark:text-amber-400" />
                <h4 className="text-sm font-bold text-amber-950 dark:text-amber-200 m-0">
                  Pre-Transaction Advisory
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                Always review capital gains tax concessions (such as small business CGT concessions) or market valuation requirements before finalizing share transfers to avoid unexpected ATO liabilities.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
