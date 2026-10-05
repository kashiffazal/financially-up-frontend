"use client";

import React from "react";
import {
  FileTextOutlined,
  DollarOutlined,
  AuditOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  CheckOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeeded Component
 * ===============================
 * Section 7: What Information May Be Needed?
 * Detailed checklist of documentation, accounting records, and transaction facts
 * needed for a thorough tax planning consultation.
 */
export default function WhatInformationNeeded() {
  const documents = [
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Year-to-Date Accounting & Payroll",
      description:
        "Current profit and loss statements, balance sheets, payroll reports, or software file access (Xero, MYOB, QuickBooks) up to the latest closed month.",
      tag: "Financials",
    },
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Prior-Year Returns & Notices",
      description:
        "Prior-year tax returns and ATO Notices of Assessment to review carried-forward tax losses, capital loss balances, and prior depreciation schedules.",
      tag: "Historical Returns",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Business Expenses & Asset Purchases",
      description:
        "Invoices and finance contracts for major plant, vehicle, or equipment purchases, as well as quotes for proposed capital acquisitions.",
      tag: "Asset Expenditure",
    },
    {
      icon: <HomeOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Investment & Property Information",
      description:
        "Rental property income and expense summaries, annual dividend statements, managed fund tax statements, or share transaction history.",
      tag: "Investments & CGT",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "BAS, GST & PAYG Instalment Records",
      description:
        "Quarterly Activity Statements lodged to date, instalment rate notices from the ATO, and running balance accounts with the tax office.",
      tag: "ATO Accounts",
    },
    {
      icon: <CalendarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Superannuation Contributions History",
      description:
        "Records of employer and personal super contributions made during the financial year, including available concessional carry-forward caps.",
      tag: "Super Caps",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Contracts & Restructuring Documents",
      description:
        "Draft sale-of-business contracts, heads of agreement, shareholder deeds, or proposed transaction dates for pending asset or equity transfers.",
      tag: "Commercial Contracts",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <FolderOpenOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Checklist & Preparation
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Information May Be Needed?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Effective tax planning relies on reliable, contemporaneous data. Having these key records ready helps us model accurate forecasts and identify actionable opportunities well before 30 June.
          </p>
        </div>

        {/* Responsive Grid of Document Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {doc.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {doc.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {doc.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {doc.description}
                </p>
              </div>
            </div>
          ))}

          {/* Quick Notice Card */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-zinc-900 dark:to-teal-950/30 border border-teal-200 dark:border-teal-800/80 flex flex-col justify-center">
            <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center mb-3">
              <CheckOutlined className="text-base" />
            </div>
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Incomplete Bookkeeping?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              Don&apos;t wait for perfect records to start. Financially Up can identify information gaps and assist in bringing your accounts into an advisory-ready position.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
