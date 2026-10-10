"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalculatorOutlined,
  DollarOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * HowProjectCostsReconciled Component
 * ===================================
 * Section: How are project costs reconciled?
 * Verbatim text from Page 2 of 15th Pillar R&D Tax Incentive docx.
 */
export default function HowProjectCostsReconciled() {
  const reconciliationPillars = [
    {
      icon: (
        <ApartmentOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      tag: "Traceable Mapping",
      title: "Ledger & Payroll Apportionment",
      description:
        "We start with the general ledger, payroll records, contractor invoices, project records and the company's activity descriptions. A cost summary should be traceable to a transaction and linked to work on a registered or registrable activity. Some people divide their time among eligible experiments, routine development, management and commercial work; the claim needs a reasonable, documented allocation rather than an assumption that every hour is R&D.",
      bullets: [
        "Direct link between expenditure transactions and registered activities",
        "Documented labour apportionment separating routine vs experimental time",
        "Substantiation of contractor invoices and technical deliverables",
      ],
    },
    {
      icon: (
        <CalculatorOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
      tag: "Statutory Testing",
      title: "Expenditure Rules & Adjustments",
      description:
        "An R&D tax claim accountant may examine staff costs, third-party services, materials and other expenditure categories against the ATO's rules. We also consider whether costs were incurred by the claimant company, the timing of payments to associates where relevant, at-risk requirements, government assistance and other adjustments that may affect a calculation. The treatment depends on the facts and records; an amount in the accounts is not automatically a notional R&D deduction.",
      bullets: [
        "Verification of claimant entity expenditure incurring",
        "Timing and cash-payment testing for associate payments",
        "At-risk tests and adjustments for government grants & assistance",
      ],
    },
    {
      icon: (
        <DollarOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
      tag: "Threshold & Entitlement",
      title: "The $20,000 Threshold & Offset Rules",
      description:
        "To claim the offset, total eligible notional deductions must generally be more than $20,000. Specified exceptions include eligible expenditure incurred to a registered research service provider and eligible monetary contributions under the Cooperative Research Centres program. We assess the threshold and any exception rather than using the project budget as a proxy. Offset entitlements also depend on matters including aggregated turnover and control by exempt entities. We apply the rules for the relevant income year and do not promise a fixed refund percentage.",
      bullets: [
        "Assessment against the statutory $20,000 notional deduction minimum",
        "Exceptions for registered Research Service Providers (RSP) & CRC program",
        "Entitlement calculations factoring aggregated turnover & exempt entities",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Financial Substantiation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How are project costs reconciled?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Converting development invoices into a supportable R&amp;D tax claim requires
            transparent reconciliations against the ATO notional deduction rules.
          </p>
        </div>

        {/* 3 Detailed Reconciliation Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          {reconciliationPillars.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200 dark:border-zinc-800 shadow-xs">
                    {item.icon}
                  </div>
                  <Tag
                    color="cyan"
                    className="m-0 text-[11px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-0.5 border-none bg-cyan-50 text-cyan-700 dark:bg-cyan-950/60 dark:text-cyan-300"
                  >
                    {item.tag}
                  </Tag>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                  {item.description}
                </p>
              </div>

              <div className="pt-5 border-t border-slate-200/60 dark:border-zinc-800/80 space-y-2.5">
                {item.bullets.map((b, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5">
                    <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0 text-xs" />
                    <span className="text-xs text-slate-700 dark:text-zinc-300 leading-normal">
                      {b}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Professional Standard Callout */}
        <div className="bg-emerald-50/50 dark:bg-emerald-950/20 rounded-2xl p-6 sm:p-7 border border-emerald-200/70 dark:border-emerald-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center shrink-0 text-emerald-700 dark:text-emerald-300">
            <AlertOutlined className="text-lg" />
          </div>
          <p className="text-xs sm:text-sm text-emerald-900 dark:text-emerald-200 leading-relaxed font-normal">
            <strong className="font-semibold text-emerald-950 dark:text-emerald-100">
              Prudent Accounting Principle:
            </strong>{" "}
            An amount in the company accounts is not automatically a notional R&amp;D deduction.
            Every claimed dollar must be defended by contemporaneous activity records and documented allocation formulas.
          </p>
        </div>
      </div>
    </section>
  );
}
