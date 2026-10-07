"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  AuditOutlined,
  BankOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * RentalIncomeAndExpenses Component
 * =================================
 * Section 2: How Rental Income and Expenses Are Reported.
 * Features 100% complete, verbatim content from Page 5 of the client document.
 */
export default function RentalIncomeAndExpenses() {
  const rentalIncomeTypes = [
    "Rent received",
    "Rental bond money retained by the owner",
    "Certain insurance payments for lost rent",
    "Tenant reimbursements",
    "Other payments connected with renting the property",
  ];

  const commonExpenses = [
    "Property management fees",
    "Council rates",
    "Water charges",
    "Landlord & building insurance",
    "Advertising for tenants",
    "Eligible repairs and maintenance",
    "Strata or body corporate fees",
    "Tax-related accounting costs",
    "Interest on money borrowed for an income-producing purpose",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Income &amp; Deductions
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Rental Income and Expenses Are Reported
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A comprehensive overview of assessable receipts, deductible operational outgoings, and strict Australian tax rules governing investment loan interest.
          </p>
        </div>

        {/* 3 Structured Columns Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Card 1: Rental Income */}
          <div className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <DollarOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Rental Income
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Assessable Receipts
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Rental income generally needs to be declared in the income year in which it is received or becomes payable, depending on the circumstances. It may include:
              </p>

              <div className="space-y-2.5">
                {rentalIncomeTypes.map((type, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50 text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium"
                  >
                    <CheckCircleOutlined className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{type}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                Joint Ownership Rule:
              </span>
              If the property is jointly owned, each owner generally reports their share of income and expenses according to their legal ownership interest.
            </div>
          </div>

          {/* Card 2: Common Rental Expenses */}
          <div className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-800/60 flex items-center justify-center text-blue-600 dark:text-blue-400">
                  <AuditOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Common Expenses
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Allowable Deductions
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Depending on the circumstances, expenses that may be deductible include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
                {commonExpenses.map((exp, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50 text-xs text-slate-700 dark:text-zinc-200"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500 shrink-0" />
                    <span className="truncate">{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                Eligibility Standard:
              </span>
              Eligibility depends on the nature of the expense, when it was incurred and how the property was used. The private or capital portion of an expense is generally not immediately deductible.
            </div>
          </div>

          {/* Card 3: Interest on Loans */}
          <div className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/60 flex items-center justify-center text-amber-600 dark:text-amber-400">
                  <BankOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Loan Interest Rules
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Use of Borrowed Funds
                  </span>
                </div>
              </div>

              <div className="space-y-3.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Interest is not automatically deductible simply because a loan is secured against a rental property. Deductibility generally depends on how the borrowed money was used.
                </p>
                <p>
                  Interest on funds used to purchase or meet eligible costs of an income-producing rental property may be deductible to the extent the relevant requirements are satisfied. If part of the loan was used privately, the interest may need to be apportioned.
                </p>
                <div className="p-3.5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                  <span className="font-bold block mb-1">
                    Refinancing &amp; Redraws:
                  </span>
                  The same principle applies when a loan is refinanced or money is redrawn. Refinancing does not automatically make the interest deductible or non-deductible. The purpose and use of the borrowed funds, including any private component, must be reviewed.
                </div>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800">
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Review Loan Interest Apportionment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
