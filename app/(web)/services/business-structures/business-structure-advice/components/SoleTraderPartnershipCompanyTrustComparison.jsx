"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  UserOutlined,
  TeamOutlined,
  BankOutlined,
  ApartmentOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * SoleTraderPartnershipCompanyTrustComparison Component
 * Covers 'Sole trader, partnership, company or trust?'
 * from Page 5 of 6th Pillar Business Structures.docx.
 */
export default function SoleTraderPartnershipCompanyTrustComparison() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <Tag color="purple" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            Core Australian Entities
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Sole trader, partnership, company or trust?
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Each business structure offers distinct advantages and trade-offs across tax treatment, personal liability, regulatory reporting, and setup complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* 1. Sole Trader */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                  <UserOutlined className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Sole trader
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A sole trader structure is generally simple to establish and operate. The individual owns and operates the business and is legally responsible for its obligations. It can suit straightforward owner-operated businesses, but the tax, liability and growth implications should still be reviewed against the individual circumstances.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              <span>Lowest administrative overhead with individual tax reporting.</span>
            </div>
          </div>

          {/* 2. Partnership */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 flex items-center justify-center">
                  <TeamOutlined className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Partnership
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A partnership generally involves two or more people carrying on a business together and sharing income or losses. The partnership normally needs its own ABN and TFN and lodges a partnership tax return. A written partnership agreement is usually worth considering, with legal review where appropriate.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/business-structures/partnership-registration"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  Our partnership registration service focuses on setup and registration steps
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-blue-600 dark:text-blue-400" />
              <span>Shared rights, responsibilities, and flow-through net income.</span>
            </div>
          </div>

          {/* 3. Company */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                  <BankOutlined className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Company
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A company is a separate legal entity from its shareholders. It has more formal governance, registration and ongoing compliance requirements than a sole trader or ordinary partnership. Company structure can be suitable in many situations, but the decision should consider ownership, funding, remuneration, tax and administration rather than relying on a single factor.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/business-structures/company-registration"
                  className="font-semibold text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  Our company registration service can assist once the structure has been selected
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-purple-600 dark:text-purple-400" />
              <span>Limited shareholder liability and separate corporate tax rate.</span>
            </div>
          </div>

          {/* 4. Trust */}
          <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-900/40 text-amber-700 dark:text-amber-400 flex items-center justify-center">
                  <ApartmentOutlined className="text-lg" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  Trust
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A trust is an arrangement where a trustee holds and manages assets for beneficiaries under the relevant trust terms. Trusts can involve additional tax, accounting and legal complexity, and the deed and trustee structure matter. Legal advice is often important when establishing or amending a trust.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/business-structures/corporate-trustee"
                  className="font-semibold text-amber-600 dark:text-amber-400 hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  Explore Corporate Trustee setups for family trusts
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-amber-600 dark:text-amber-400" />
              <span>Asset protection and discretionary distribution flexibility.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
