"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * ValueAndTaxConnectedDistinct Component
 * =======================================
 * Section 6: Value and tax are connected but distinct.
 * Source: 12th Pillar Business Advisory.docx (Page 5: Business Valuations)
 *
 * Implements 100% complete, verbatim SEO text explaining why commercial negotiated
 * prices do not resolve statutory tax treatment, Small Business CGT Concessions criteria,
 * and legal document coordination.
 */
export default function ValueAndTaxConnectedDistinct() {
  const taxConsiderations = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Transaction Structure (Assets vs Shares vs Trust)",
      desc: "Asset sales require apportioning purchase price between stock, depreciating assets, and goodwill, while share sales transfer the entire entity with historic liabilities.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Small Business CGT Concessions Eligibility",
      desc: "Concessions such as the 15-year exemption, 50% active asset reduction, retirement exemption, and rollover depend on strict net asset value and active asset tests.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "GST & Going Concern Rules",
      desc: "A sale is GST-free only if all going concern statutory requirements are met in writing prior to settlement.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="red"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Commercial vs Statutory Analysis
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Value and Tax are Connected but Distinct
          </h2>
        </div>

        {/* 2 Primary Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Negotiated Price vs Tax Outcomes */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-700 dark:text-rose-400 mb-3">
                <FileProtectOutlined />
                <span>Transaction Structure &amp; CGT Eligibility</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                The value used in a negotiation does not by itself settle the
                tax consequences of a sale or transfer. Whether a deal involves
                assets, shares or interests in a trust can affect the tax and
                GST analysis. Small business CGT concessions may be relevant
                only if the detailed eligibility requirements are satisfied.
                Those matters need transaction-specific review before contract
                terms are finalized.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Tax treatment requires separate transaction review before contracts are signed.
            </div>
          </div>

          {/* Card 2: Legal Coordination & Market Reality */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-3">
                <TeamOutlined />
                <span>Legal Coordination &amp; Market Realities</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Financially Up can review the accounting and tax implications
                within the agreed scope and coordinate with the lawyer drafting
                the transaction documents. A valuation is not a guarantee that a
                buyer will offer or a lender will accept a stated price.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Valuations establish reasoned benchmarks; market negotiations finalize the price.
            </div>
          </div>
        </div>

        {/* 3 Consideration Points */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {taxConsiderations.map((tc, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 p-6 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                {tc.icon}
              </div>
              <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                {tc.title}
              </h4>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {tc.desc}
              </p>
            </div>
          ))}
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
              Review Tax &amp; Value Alignment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
