"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  AuditOutlined,
  CalculatorOutlined,
  FileProtectOutlined,
  DollarCircleOutlined,
  IdcardOutlined,
  ArrowRightOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * RestructureTaxAndRegistrations Component
 * Covers:
 * - Tax implications before restructuring (CGT, income tax, SBRR small business restructure roll-over)
 * - GST, state taxes and transaction costs
 * - Registrations and practical implementation (ABN non-transferability, timing)
 * from Page 8 of 6th Pillar Business Structures.docx.
 */
export default function RestructureTaxAndRegistrations() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">

        {/* Section Header */}
        <div className="max-w-3xl">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            <CalculatorOutlined className="mr-1.5" />
            Taxation & Compliance Dynamics
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Tax implications should be reviewed before the restructure occurs
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Transferring assets or business interests from one entity to another can create tax consequences. Depending on the transaction, capital gains tax, income tax, GST and other rules may need to be considered. The fact that the same owners remain involved does not automatically mean the transfer has no tax effect.
          </p>
        </div>

        {/* Roll-Over Relief & Small Business Restructure Roll-over (SBRR) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          <div className="lg:col-span-8 p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-5">
            <div className="flex items-center gap-3 text-emerald-600 dark:text-emerald-400">
              <FileProtectOutlined className="text-2xl" />
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Roll-Over Concessions & Statutory Conditions
              </h3>
            </div>
            
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
              Some restructures may qualify for a roll-over or other relief where the relevant statutory conditions are met. For example, the small business restructure roll-over may apply to eligible transfers of certain CGT assets, trading stock, revenue assets and depreciating assets as part of a genuine restructure of an ongoing business.
            </p>

            <div className="p-4 rounded-xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/60 dark:border-amber-800/40 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
              <strong className="text-slate-900 dark:text-white">Eligibility Criteria:</strong> Eligibility depends on all applicable conditions, including the small-business requirements, asset eligibility and continuity of ultimate economic ownership. Relief should not be assumed merely because a business is small or the restructure has a commercial purpose.
            </div>

            <div className="pt-2">
              <Link
                href="/services/tax-planning/business-restructuring"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
              >
                Explore Business Restructuring Tax Advice
                <ArrowRightOutlined className="text-xs" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-4 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-slate-900 to-slate-800 text-white flex flex-col justify-between shadow-sm">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center">
                <AuditOutlined className="text-emerald-400 text-xl" />
              </div>
              <h3 className="text-lg font-bold">Pre-Transaction Review</h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Where the immediate need is a pre-transaction review of the tax and accounting consequences before implementation, our Business Restructuring Advice service provides thorough evaluation before binding documents are executed.
              </p>
            </div>
            <div className="pt-6">
              <Link
                href="/services/tax-planning/business-restructuring"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-semibold transition-all shadow-sm"
              >
                Pre-Transaction Review
                <ArrowRightOutlined className="text-xs" />
              </Link>
            </div>
          </div>

        </div>

        {/* GST, State Taxes & Practical Registrations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Card 1: GST, State Taxes & Transaction Costs */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200 dark:border-indigo-800 flex items-center justify-center">
              <DollarCircleOutlined className="text-indigo-600 dark:text-indigo-400 text-xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              GST, state taxes and transaction costs
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              GST treatment can depend on what is transferred and how the transaction is structured. For example, some transfers may involve taxable supplies, while a sale of a going concern can be GST-free where the applicable requirements are satisfied. Registration status and the specific transaction must be reviewed rather than assuming one GST outcome. State or territory duty may also apply depending on the assets, transaction and jurisdiction, and legal documents, valuations or lender consent may be required separately.
            </p>
          </div>

          {/* Card 2: Registrations and Practical Implementation */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                <IdcardOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
                Registrations and practical implementation
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Changing legal structure can also change registrations. When a business moves to a different entity, the new entity generally requires its own ABN. An ABN cannot be transferred from one entity to another. Business names may need to be transferred or re-registered, and GST, PAYG withholding and other registrations may need to be added, updated or cancelled at the correct time.
              </p>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed">
                If the restructure requires a new company, our Company Registration service covers the company-registration component. The restructure itself remains broader because it also involves the transition from the old arrangement to the new one.
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/services/business-structures/company-registration"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-primary dark:text-emerald-400 hover:underline"
              >
                View Company Registration Service
                <ArrowRightOutlined className="text-xs" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
