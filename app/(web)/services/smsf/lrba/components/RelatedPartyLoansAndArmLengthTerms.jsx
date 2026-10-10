"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  FileProtectOutlined,
  PercentageOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * RelatedPartyLoansAndArmLengthTerms Component
 * ============================================
 * Implements verbatim SEO content from Page 5 of 9th Pillar SMSF.docx:
 * - Related-party loans and arm’s-length dealing (PCG 2016/5, NALI tax risks)
 */
export default function RelatedPartyLoansAndArmLengthTerms() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Commercial Arm&apos;s-Length Terms
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Related-party loans and arm’s-length dealing
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An SMSF may borrow from a related party where the LRBA and other rules are satisfied, but the terms and conduct require careful support. Non-arm&apos;s-length terms can create superannuation compliance concerns and may affect the tax treatment of income from the asset.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO&apos;s PCG 2016/5 describes safe-harbor terms for certain LRBAs, but the ATO is reviewing that guidance following the 2026 changes. An arrangement outside a safe harbor is not automatically non-arm&apos;s-length; trustees need evidence supporting the terms and actual conduct. A legal adviser should draft or amend loan agreements.
          </p>
        </div>

        {/* 2 Critical Cards: PCG 2016/5 vs NALI Tax Risk */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Card 1: PCG 2016/5 Safe Harbor Parameters */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/40 flex items-center justify-center mb-6">
                <PercentageOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                ATO PCG 2016/5 Safe Harbor Parameters
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                To prevent non-arm&apos;s-length income (NALI) implications, related-party loan arrangements must reflect commercial lending realities:
              </p>
              <ul className="space-y-3 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Commercial interest rates matching standard Reserve Bank Indicator Rates</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Documented Loan-to-Value Ratio (LVR) limits (e.g., maximum 70% for real property)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Maximum loan term caps and regular principal-and-interest monthly repayments</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircleOutlined className="text-blue-500 text-sm mt-0.5 shrink-0" />
                  <span>Formal registered registered mortgage or personal property security charge</span>
                </li>
              </ul>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Arrangements outside safe harbors must be supported by external commercial benchmarking.
            </div>
          </div>

          {/* Card 2: NALI Tax Risk & Legal Drafting */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-2xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center mb-6">
                <FileProtectOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Non-Arm&apos;s-Length Income (NALI) Risk & Legal Deeds
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                If loan terms or lender conduct are artificially lenient (e.g., 0% interest, uncommercial deferrals, or no formal mortgage), the ATO may classify all net income and capital gains from the property as NALI, taxed at the top marginal rate of 45%.
              </p>
              <div className="p-4 rounded-xl bg-purple-50/80 dark:bg-purple-950/40 border border-purple-200/80 dark:border-purple-800/40 text-xs text-purple-950 dark:text-purple-200 leading-relaxed font-medium">
                <span className="font-bold block mb-1">Legal Document Requirement:</span>
                A qualified legal adviser must draft or amend related-party loan agreements, mortgages, and bare trust deeds to ensure legal efficacy and compliance.
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-purple-700 dark:text-purple-400 font-medium">
              Protects fund earnings from penal 45% non-arm&apos;s-length tax assessments.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
