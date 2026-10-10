"use client";

import React from "react";
import Link from "next/link";
import {
  FileTextOutlined,
  CloudServerOutlined,
  DollarCircleOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  CheckCircleTwoTone,
} from "@ant-design/icons";

/**
 * RecordsNeededLateBasAccountant Component
 * ========================================
 * Section 6: Comprehensive checklist of source records needed for historical BAS reconstruction,
 * bank feeds, POS reports, STP data, and bookkeeping clean-up handoff.
 */
export default function RecordsNeededLateBasAccountant() {
  const documentGroups = [
    {
      title: "Bank & Financial Feeds",
      items: [
        "Trading bank statements for all unlodged quarters",
        "Business credit card transaction histories",
        "Commercial loan and chattel mortgage schedules",
      ],
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Sales & Turnover Data",
      items: [
        "Point-of-Sale (POS) or e-commerce merchant summaries",
        "Tax invoices issued to customers and clients",
        "Cash sales records and bank deposit slips",
      ],
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Expense & Supplier Bills",
      items: [
        "Supplier tax invoices showing GST credits claimed",
        "Major asset purchase contracts and tax invoices",
        "Motor vehicle and equipment purchase agreements",
      ],
      icon: <CloudServerOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Payroll & Single Touch Payroll",
      items: [
        "Payroll summary reports for gross wages and PAYGW",
        "Single Touch Payroll (STP) year-to-date reports",
        "Superannuation guarantee payment confirmations",
      ],
      icon: <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Documentation Architecture
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What records does a late BAS accountant need?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              Useful records can include bank and credit-card statements, accounting software access, sales and supplier invoices, point-of-sale reports, payroll and Single Touch Payroll records, prior BAS, loan statements and details of unusual transactions. Additional invoices or contracts may be needed where GST treatment is uncertain.
            </p>
            <p>
              If the records are incomplete, a bookkeeping clean-up may be required before the BAS can be prepared reliably. Our bookkeeping service can bring the accounting records up to date, while this page focuses on the activity statements and related ATO lodgment position.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {documentGroups.map((group, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {group.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3">
                  {group.title}
                </h3>
                <ul className="space-y-2">
                  {group.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 flex items-start gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bookkeeping Clean-Up Callout */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Behind on Bank Reconciliations and Software Data Entry?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-1">
              Our professional bookkeeping team can systematically clean up months or years of historical transactions before the BAS is calculated.
            </p>
          </div>
          <Link
            href="/services/business-accounting/bookkeeping"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors whitespace-nowrap self-start sm:self-auto"
          >
            <span>Explore Bookkeeping Service</span>
            <ArrowRightOutlined />
          </Link>
        </div>
      </div>
    </section>
  );
}
