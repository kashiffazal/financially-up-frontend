"use client";

import React from "react";
import Link from "next/link";
import { UsergroupAddOutlined, FileDoneOutlined, ArrowRightOutlined } from "@ant-design/icons";

/**
 * OwnershipAndTaxReportingGearing Component
 * Highlights the strict requirement that rental losses follow legal title percentages,
 * and links to Investment Property Tax and Ownership Structures services.
 */
export default function OwnershipAndTaxReportingGearing() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Ownership Rules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Ownership Affects Who Reports the Rental Loss
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Rental income and tax deductions must strictly mirror the registered legal ownership interests on the certificate of title.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Legal Ownership vs Cash Outgoings */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-5">
                <UsergroupAddOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Title Ownership Governs the Tax Result
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                The fact that one spouse pays the entire mortgage repayment or coordinates the property manager does not transfer the tax deductions to that individual. If the property is owned 50/50 as joint tenants or tenants-in-common, both rental income and deductible expenses must be declared exactly 50/50 on each individual tax return.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Similarly, properties owned by discretionary trusts, unit trusts, or corporate entities have distinct tax loss rules—losses incurred in a trust generally cannot be distributed directly to individual beneficiaries.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100">
              <Link
                href="/services/property-tax/ownership-structures"
                className="inline-flex items-center gap-2 text-emerald-700 font-bold text-sm hover:text-emerald-800 transition-colors"
              >
                Explore Property Ownership Structures
                <ArrowRightOutlined />
              </Link>
            </div>
          </div>

          {/* Annual Tax Return Reporting */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-5">
                <FileDoneOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Negative Gearing & Annual Tax Returns
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Negative gearing is formally reconciled as part of the annual tax return for the property owner. Complete records of gross rental income, agent statements, loan interest, insurance, rates, and detailed expense categories are required, along with precise records of any private use or vacancy periods.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                This page focuses specifically on diagnosing and calculating a legitimate rental tax loss, avoiding errors in capital items, and ensuring all interest tracing complies with ATO guidelines.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100">
              <Link
                href="/services/property-tax/investment-property-tax"
                className="inline-flex items-center gap-2 text-blue-700 font-bold text-sm hover:text-blue-800 transition-colors"
              >
                View Investment Property Tax Service
                <ArrowRightOutlined />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
