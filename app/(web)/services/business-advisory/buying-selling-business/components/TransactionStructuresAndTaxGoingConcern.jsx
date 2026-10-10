"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  AuditOutlined,
  SwapOutlined,
} from "@ant-design/icons";

/**
 * TransactionStructuresAndTaxGoingConcern Component
 * ==================================================
 * Section 3: Asset sale, share sale or another arrangement?
 * Source: 12th Pillar Business Advisory.docx (Page 6: Buying and Selling a Business)
 *
 * Implements 100% complete, verbatim SEO text detailing Asset vs Share vs Trust deal structures,
 * statutory tax considerations (CGT, Small Business Concessions), the 4 mandatory Going Concern
 * GST-free conditions, and legal coordination.
 */
export default function TransactionStructuresAndTaxGoingConcern() {
  const goingConcernRules = [
    {
      num: "01",
      title: "Written Agreement",
      desc: "Both vendor and purchaser agree in writing that the supply is of a going concern.",
    },
    {
      num: "02",
      title: "GST Registration",
      desc: "The purchaser is registered (or required to be registered) for GST on the date of supply.",
    },
    {
      num: "03",
      title: "Supply Everything Necessary",
      desc: "The vendor supplies all assets, leases, and agreements necessary for ongoing operations.",
    },
    {
      num: "04",
      title: "Carrying On Until Day of Supply",
      desc: "The vendor actively operates the commercial enterprise right up to the settlement date.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Structure &amp; Statutory Taxation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Asset Sale, Share Sale or Another Arrangement?
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Asset vs Share Sale */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-3">
                <SwapOutlined />
                <span>Transaction Entity Structure</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                The structure of a transaction affects what the buyer acquires
                and what the seller disposes of. An asset sale can involve
                separate treatment for trading stock, depreciating assets and
                goodwill. A share sale transfers an interest in the company,
                with its history and liabilities requiring careful due
                diligence. Trust interests and business restructures add further
                complexity.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Asset sales allow selective acquisitions; share sales inherit company history.
            </div>
          </div>

          {/* Card 2: Headline Price vs Tax Outcome */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-3">
                <FileProtectOutlined />
                <span>Tax Outcomes &amp; CGT Concessions</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                The tax outcome cannot be inferred from the headline purchase
                price. Sellers may need to consider income tax, CGT and potential
                small business CGT concessions, which have detailed eligibility
                requirements. GST treatment depends on the transaction.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Concessions require meticulous entity and asset eligibility reviews.
            </div>
          </div>
        </div>

        {/* Verbatim Feature Box: GST-Free Going Concern 4 Mandatory Requirements */}
        <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-slate-50 dark:from-emerald-950/30 dark:via-zinc-950 dark:to-zinc-900 rounded-2xl p-7 sm:p-10 border border-emerald-200/80 dark:border-emerald-800/40 shadow-xs mb-12">
          <div className="max-w-3xl mb-6">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-300 mb-2">
              <SafetyCertificateOutlined />
              <span>Statutory Compliance Criterion</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              GST-Free Going Concern Requirements
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              A business sale can be GST-free as a going concern only where all
              relevant conditions are met, including written agreement, a
              GST-registered or required-to-be-registered buyer, supply of
              everything necessary for continued operation, and the seller
              carrying on the enterprise until the day of supply.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {goingConcernRules.map((rule, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 p-5 rounded-xl border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
              >
                <div className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 mb-1">
                  Condition {rule.num}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                  {rule.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {rule.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verbatim Paragraph 3 Feature Banner: Legal Document Review */}
        <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-200 dark:border-teal-800/60 flex items-center justify-center shrink-0 mt-0.5">
              <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Lawyer Coordination &amp; Professional Boundaries
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
                We review the proposed transaction with the lawyer before
                contracts are finalized so the accounting and tax assumptions
                match the documented deal. We do not draft legal terms or
                guarantee concession eligibility.
              </p>
            </div>
          </div>
        </div>

        {/* Action Row */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Align Deal Structure with Tax
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
