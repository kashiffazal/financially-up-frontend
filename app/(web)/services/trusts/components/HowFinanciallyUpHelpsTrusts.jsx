"use client";

import React from "react";
import { Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  AppstoreOutlined,
  SolutionOutlined,
  ScheduleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * HowFinanciallyUpHelpsTrusts Component
 * ====================================
 * Section 8: How Financially Up can help
 *
 * Implements verbatim content from '8th Pillar Trust Services.docx' (Page 1: 1- Trust Services).
 * Explains how our trust accounting service adapts to the trust's actual needs rather than
 * applying generic templates, covering accounts, reconciliations, lodgements, proactive
 * planning scope, and clear boundaries for qualified legal advice.
 *
 * Background: Lite Brand Gradient.
 */
export default function HowFinanciallyUpHelpsTrusts() {
  /**
   * Core service workflows derived directly from Paragraph 1
   */
  const complianceSteps = [
    "Reviewing the prior-year tax position and balance sheet balances",
    "Reconciling bank accounts, ledgers, and investment schedules",
    "Preparing annual financial accounts and statements of financial position",
    "Preparing or coordinating the trust tax return for timely lodgement",
    "Compiling accurate beneficiary distribution information and tax notices",
    "Identifying and resolving compliance matters prior to ATO lodgement",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Practical Support
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our trust accounting service can be structured around the trust&apos;s actual needs rather
            than treating every trust the same. We can review the prior-year position, reconcile
            records, prepare annual accounts, prepare or coordinate the trust tax return, compile
            beneficiary information and identify matters that should be resolved before lodgement.
          </p>

          {/* Exact Verbatim Paragraph 2 from Document */}
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Where proactive tax planning is requested, we can clarify what can be considered within
            the agreed scope. Where legal advice is needed about the trust deed, trustee powers, asset
            protection or legal ownership, that work may need to be handled by an appropriately
            qualified legal adviser.
          </p>
        </div>

        {/* 2-Column Structured Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Tailored Trust Accounting Scope */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                  <AuditOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase">
                    Tailored Practice Scope
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                    Annual Accounts & Lodgement Coordination
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-400 mb-6 font-normal leading-relaxed">
                Rather than applying generic templates, we tailor our accounting workflow to match
                the specific provisions of your deed and the real-world transactions of your trust.
              </p>

              <ul className="space-y-3.5 mb-6">
                {complianceSteps.map((step, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-normal"
                  >
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-10 px-5 rounded-xl font-semibold shadow-xs"
                >
                  Schedule Initial Trust Discussion
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Strategic Advisory & Professional Boundaries */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-11 h-11 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center">
                  <SafetyCertificateOutlined className="text-blue-600 dark:text-blue-400 text-xl" />
                </div>
                <div>
                  <span className="text-[11px] font-bold text-blue-600 dark:text-blue-400 tracking-wider uppercase">
                    Agreed Scope & Referrals
                  </span>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white m-0">
                    Proactive Planning & Legal Clarity
                  </h3>
                </div>
              </div>

              <div className="space-y-4 text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed mb-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Agreed Proactive Tax Planning Scope
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0">
                    Where proactive distribution planning or capital gains analysis is requested, we
                    clearly establish what can be addressed within an agreed advisory scope before
                    commitments are made.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    Qualified Legal Adviser Collaboration
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0">
                    When decisions depend on formal deed amendments, trustee powers, asset
                    protection strategies, or legal ownership structures, we coordinate smoothly
                    with your legal advisers or provide specialist referral pathways.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Clear scope boundaries ensure your compliance is robust and professional costs are fully
              transparent.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
