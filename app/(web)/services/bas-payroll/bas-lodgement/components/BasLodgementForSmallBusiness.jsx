"use client";

import React from "react";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  FileDoneOutlined,
  SyncOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * BasLodgementForSmallBusiness Component
 * Covers 'BAS lodgement for small business' and 'How Financially Up can help'
 * from Page 2 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function BasLodgementForSmallBusiness() {
  const helpCapabilities = [
    "Prepare activity statements from completed business records",
    "Review GST coding and selected transactions relevant to the BAS",
    "Reconcile key figures before lodgement",
    "Identify records or explanations still required from the client",
    "Lodge the BAS when information is complete and approved",
    "Coordinate catch-up bookkeeping or separate tax advice where needed",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: BAS lodgement for small business */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="purple" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <AuditOutlined className="mr-1.5" />
              Small Business Focus
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              BAS lodgement for small business
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A BAS accountant for small business should do more than transfer totals from software into a form. The purpose of professional review is to make sure the figures are supported by the records and that obvious inconsistencies are addressed before lodgement.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              That does not mean every BAS requires complex tax advice. Straightforward preparation and lodgement can remain a defined compliance service. Where a transaction raises a separate GST interpretation, restructuring or tax-advice issue, Financially Up can identify that and scope the additional work separately.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-4">
              <div className="flex items-center gap-3 text-brand-primary dark:text-emerald-400">
                <FileDoneOutlined className="text-2xl" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Defined Compliance Scope
                </h3>
              </div>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Enjoy transparent fixed-scope activity statement preparation without paying for unsolicited complex tax advice, while keeping the security of an experienced registered tax agent reviewing your figures.
              </p>
            </div>
          </div>
        </div>

        {/* Part 2: How Financially Up can help */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-10">
            <div className="flex items-center gap-2 text-brand-primary dark:text-emerald-400 font-bold text-xs uppercase tracking-wider mb-3">
              <SolutionOutlined />
              Registered Agent Support
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
              How Financially Up can help
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up provides BAS preparation and lodgement support within the firm&apos;s registered tax-agent scope. Depending on your records and obligations, we can assist with BAS preparation, review, lodgement and related ATO correspondence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {helpCapabilities.map((capability, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex items-start gap-4"
              >
                <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                  <CheckCircleOutlined />
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug pt-1">
                  {capability}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
