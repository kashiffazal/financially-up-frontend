"use client";

import React from "react";
import { Tag } from "antd";
import {
  BarChartOutlined,
  RiseOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * WhatAreManagementReportingServices Component
 * Covers 'What are management reporting services?'
 * from Page 9 of 4th Pillar Bookkeeping.docx.
 */
export default function WhatAreManagementReportingServices() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <Tag color="blue" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <BarChartOutlined className="mr-1.5" />
              Strategic Clarity
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What are management reporting services?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Management reporting services involve preparing and presenting internal financial information for business decision-making. Common reports include a profit and loss statement, balance sheet, cash-flow information, accounts receivable and accounts payable summaries, and comparisons against prior periods or budgets where appropriate data is available.
            </p>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Monthly financial reporting is most useful when the bookkeeping file is current and reconciled. A report generated from incomplete or unreconciled data may be technically available in software but still give a misleading picture of the business.
            </p>
          </div>

          <div className="lg:col-span-5">
            <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 shadow-xs space-y-6">
              <div className="flex items-center gap-3 text-amber-600 dark:text-amber-400">
                <WarningOutlined className="text-2xl shrink-0" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  The Reconciled Data Rule
                </h3>
              </div>

              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Generating an instantaneous report inside your accounting platform only takes a click, but if opening balances are wrong or transactions are unreconciled, the figures can mislead your pricing, hiring, or cash decisions.
              </p>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-brand-primary dark:text-emerald-400 uppercase tracking-wide">
                  <RiseOutlined />
                  Decision Readiness
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 italic">
                  &ldquo;A report generated from incomplete or unreconciled data may be technically available in software but still give a misleading picture of the business.&rdquo;
                </p>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
