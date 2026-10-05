"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  SolutionOutlined,
  CheckCircleOutlined,
  BookOutlined,
  BankOutlined,
  HomeOutlined,
  DollarOutlined,
  FileDoneOutlined,
  SyncOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInformationNeededTrusts Component
 * =====================================
 * Section 7: What Records Are Needed for Trust Accounting?
 *
 * Detailed checklist of the 6 essential documentation categories required
 * to prepare compliant annual trust accounts and tax returns.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatInformationNeededTrusts() {
  const checklistCards = [
    {
      icon: <BookOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Deed & Deed Variations",
      tag: "Constitutional Base",
      items: [
        "Complete stamped original trust deed with all schedules",
        "All subsequent deed amendments, variations, and deeds of change of trustee",
        "Schedule of primary, general, and default beneficiaries",
        "Appointor, principal, and guardian provisions",
      ],
    },
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bank & Investment Statements",
      tag: "Reconciliation",
      items: [
        "12 months of bank statements for all trust accounts",
        "Term deposit certificates and interest income notices",
        "Investment portfolio and share brokerage trading accounts",
        "Credit card and business transaction statements",
      ],
    },
    {
      icon: <HomeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Property & Asset Documentation",
      tag: "Capital Records",
      items: [
        "Property purchase settlement sheets and stamp duty receipts",
        "Legal invoices and conveyancing documentation",
        "Capital expenditure, renovations, and depreciation reports",
        "Loan statements and mortgage interest summaries",
      ],
    },
    {
      icon: <DollarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Dividend & Managed Fund Statements",
      tag: "Investment Income",
      items: [
        "Annual managed fund tax summaries (AMMA statements)",
        "Dividend payment advices detailing franked amounts and credits",
        "Foreign investment income and foreign tax credit statements",
        "Capital gains distribution statements from underlying trusts",
      ],
    },
    {
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Trustee Distribution Resolutions",
      tag: "Present Entitlement",
      items: [
        "Executed 30 June trustee distribution minutes",
        "Specific capital gains or franked dividend streaming determinations",
        "Beneficiary Tax File Numbers (TFNs) and bank details",
        "Family Trust Election (FTE) and Interposed Entity Election (IEE) records",
      ],
    },
    {
      icon: <SyncOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Related Party & Division 7A Loans",
      tag: "Inter-Entity Balances",
      items: [
        "Written Division 7A complying 7-year loan agreements",
        "Annual principal and benchmark interest repayment receipts",
        "Inter-company and beneficiary loan ledger reconciliations",
        "Records of capital injections and partner drawings",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Preparation Checklist
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records Are Needed for Trust Accounting?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Organised records enable our accountants to verify trust deed powers, prepare accurate balance sheets, stream eligible credits, and lodge your trust tax return smoothly.
          </p>
        </div>

        {/* 6 Checklist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {checklistCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2.5">
                  {card.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed"
                    >
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Helper */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Need help reviewing your trust deed or organising prior-year records?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1">
              Book an appointment with Financially Up. We&apos;ll examine your trust records and establish a clear plan for your compliance and distribution needs.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
            >
              Book Trust Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
