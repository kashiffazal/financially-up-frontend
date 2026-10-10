"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  DollarOutlined,
  FileProtectOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * TaxAndLegalIssuesSuccession Component
 * ======================================
 * Section 4: What tax and legal issues may arise?
 * Source: 12th Pillar Business Advisory.docx (Lines 523-525)
 *
 * Implements 100% complete, verbatim SEO text detailing CGT, GST, entity transfers,
 * family transfer tax myths, ATO documentation rules, Small Business CGT Concessions,
 * and clear professional boundaries across accounting, legal, and financial planning.
 */
export default function TaxAndLegalIssuesSuccession() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Compliance &amp; Governance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Tax and Legal Issues May Arise?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A transfer can have capital gains tax, income tax, GST or other
            consequences depending on the entity, assets, consideration and
            transaction structure. A family transfer is not automatically
            tax-free because it is between relatives. The ATO recommends
            documenting significant structural changes and asset transfers,
            including their tax impact and relevant acquisition, cost-base,
            improvement and valuation information. Eligibility for any small
            business CGT concession has specific conditions, including
            requirements that depend on the asset and business circumstances,
            and should be checked before a concession is applied.
          </p>
        </div>

        {/* Dual Cards: Tax Considerations & ATO Documentation Standards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Card 1: Taxation Nuances & Family Myths */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-800/40 flex items-center justify-center text-amber-600 dark:text-amber-400">
                <DollarOutlined className="text-xl" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                  Tax Consequences &amp; Concessions
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  CGT, GST, and Small Business Concessions
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <ExclamationCircleOutlined className="text-amber-500 mt-1 shrink-0" />
                <span>Family transfers are NOT automatically tax-free because they occur between relatives.</span>
              </li>
              <li className="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                <span>Small business CGT concessions require separate eligibility verification for entity and asset.</span>
              </li>
            </ul>
          </div>

          {/* Card 2: ATO Structural Transfer Guidance */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <FileProtectOutlined className="text-xl" />
              </span>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                  ATO Evidence &amp; Documentation Standards
                </h3>
                <p className="text-xs text-slate-500 dark:text-zinc-400 m-0">
                  Structural change substantiation
                </p>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
              The ATO recommends documenting significant structural changes and
              asset transfers, including their tax impact and relevant
              acquisition, cost-base, improvement and valuation information.
            </p>
          </div>
        </div>

        {/* Clear Professional Roles & Specialist Coordination Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
          <div className="flex items-start gap-4">
            <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5">
              <AuditOutlined className="text-xl" />
            </span>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Coordinated Multidisciplinary Advisory
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                As a registered tax agent, Financially Up can review tax
                implications within an agreed scope and coordinate accounting
                information. A solicitor may be needed for sale documents,
                shareholder arrangements, wills, trusts or estate planning.
                Regulated financial advice may be needed for personal retirement
                and investment decisions. We do not treat those services as
                automatically included in an accounting engagement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
