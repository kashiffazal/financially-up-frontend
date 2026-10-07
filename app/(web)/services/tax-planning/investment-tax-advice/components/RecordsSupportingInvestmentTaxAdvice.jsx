"use client";

import React from "react";
import {
  FileTextOutlined,
  CheckCircleFilled,
  InfoCircleOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

/**
 * RecordsSupportingInvestmentTaxAdvice Component
 * ===============================================
 * Section 7: 8-point checklist of investment records required for accurate tax calculations
 * and the importance of long-term records across platform/broker migrations.
 * Verbatim text from Page 12 of the Tax Planning document.
 */
export default function RecordsSupportingInvestmentTaxAdvice() {
  const recordsChecklist = [
    {
      title: "Confirmations & Brokerage Costs",
      desc: "Purchase and sale confirmations, including brokerage and transaction costs.",
    },
    {
      title: "Dividend Statements & Franking",
      desc: "Dividend statements and details of franking credits.",
    },
    {
      title: "Fund & AMMA Statements",
      desc: "ETF, managed-fund and AMMA statements.",
    },
    {
      title: "Bank & Deposit Interest",
      desc: "Bank or term-deposit interest statements.",
    },
    {
      title: "Corporate Actions & Demergers",
      desc: "Corporate-action records such as splits, takeovers, demergers or reinvestment plans.",
    },
    {
      title: "Property & Rental Documentation",
      desc: "Property purchase, loan, rental and disposal records where relevant.",
    },
    {
      title: "Prior Returns & Carried Losses",
      desc: "Prior tax returns and records of carried-forward capital losses.",
    },
    {
      title: "Cost-Base Adjustments",
      desc: "Any cost-base calculations or adjustments already made.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Documentation &amp; Evidence
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Records That Support Good Investment Tax Advice
          </h2>
        </div>

        {/* 8-Point Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {recordsChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/50 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200 dark:border-zinc-700">
                    <FileTextOutlined className="text-brand-primary dark:text-emerald-400 text-lg" />
                  </div>
                  <span className="text-xs font-bold text-slate-400 dark:text-zinc-500">
                    #{idx + 1}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center text-xs text-brand-primary dark:text-emerald-400 font-medium">
                <CheckCircleFilled className="mr-1.5" />
                Required record
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Concluding Note */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-amber-50/70 dark:bg-amber-950/30 p-6 sm:p-7 rounded-2xl border border-amber-200 dark:border-amber-800/40 shadow-sm flex items-start space-x-4">
            <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-amber-200 dark:border-amber-700/60 shrink-0">
              <FolderOpenOutlined className="text-2xl text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <div className="flex items-center space-x-2 text-amber-800 dark:text-amber-300 text-xs font-bold uppercase tracking-wider mb-1">
                <InfoCircleOutlined />
                <span>Multi-Year &amp; Migration Continuity</span>
              </div>
              <p className="text-slate-800 dark:text-zinc-200 text-base sm:text-lg font-medium leading-relaxed">
                Good records are particularly important where investments have been held for many years or moved between brokers or platforms.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
