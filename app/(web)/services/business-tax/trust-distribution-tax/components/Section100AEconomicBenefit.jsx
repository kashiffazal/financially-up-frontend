"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
  SwapOutlined,
  FileSearchOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * Section100AEconomicBenefit Component
 * ====================================
 * Section: Section 100A and who receives the benefit
 * Verbatim text from Page 11 of client docx.
 * Covers:
 * - Entitlement created where another person receives economic benefit
 * - Section 100A reimbursement agreements entered into for a tax-reduction purpose
 * - Exclusions for ordinary family or commercial dealings
 * - Why a valid trust deed resolution alone does not prevent s 100A applying.
 */
export default function Section100AEconomicBenefit() {
  const s100aFactors = [
    {
      icon: (
        <SwapOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Reimbursement Agreements",
      desc: "Section 100A may apply where a beneficiary is made presently entitled to trust income, but under an agreement, the real economic benefit is provided to another person for a tax-reduction purpose.",
    },
    {
      icon: (
        <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Ordinary Family or Commercial Dealings",
      desc: "Reimbursement agreements do not trigger Section 100A if entered into in the course of ordinary family or commercial dealing, which requires factual substantiation of family and business purposes.",
    },
    {
      icon: (
        <FileSearchOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Complete Fund Flow Analysis",
      desc: "The outcome depends on the complete arrangement, including how funds are paid, retained, gifted, loaned or applied rather than relying solely on the accounting journal entries.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="orange"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Anti-Avoidance Integrity Review
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Section 100A and who receives the benefit
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A distribution can require further review where a beneficiary is
            made presently entitled but another person receives or uses the
            economic benefit. Section 100A may apply to a reimbursement
            agreement entered into for a tax-reduction purpose, subject to
            exclusions including an agreement entered into in the course of
            ordinary family or commercial dealing.
          </p>
        </div>

        {/* 3 s100A Factors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {s100aFactors.map((item, idx) => (
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

        {/* Verbatim Critical Box: Deed Validity vs Section 100A */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-amber-500/20 dark:border-amber-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400" />
              Valid Trust Deed Resolution Does Not Settle Tax Status Alone
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The outcome depends on the complete arrangement, including how
              funds are paid, retained, gifted, loaned or applied. A resolution
              that is valid under the trust deed does not by itself determine
              whether section 100A applies, so higher-risk arrangements should
              be separately reviewed and documented.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Review Section 100A Risk
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
