"use client";

import React from "react";
import { Tag } from "antd";
import {
  FolderOpenOutlined,
  LockOutlined,
  BankOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  TableOutlined,
  InfoCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededBankRecon Component
 * Covers 'What information may be needed?'
 * from Page 8 of 4th Pillar Bookkeeping.docx.
 */
export default function InformationNeededBankRecon() {
  const items = [
    {
      title: "Accounting Software Access",
      desc: "Invited user access to Xero, MYOB, or QuickBooks with appropriate bookkeeping permissions.",
      icon: <LockOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Bank & Credit-Card Statements",
      desc: "Electronic bank feeds, monthly PDF statements, and credit-card transaction summaries.",
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "Merchant & Payment Gateway Reports",
      desc: "Settlement schedules and payout breakdowns from Stripe, PayPal, Square, or EFTPOS terminals.",
      icon: <CreditCardOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Invoices, Bills & Receipts",
      desc: "Supporting source documentation verifying payments, claims, and customer sales transactions.",
      icon: <FileTextOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Transfer & Unusual Transaction Explanations",
      desc: "Details for owner drawings, inter-account transfers, loan repayments, and uncommon banking entries.",
      icon: <TableOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <Tag color="geekblue" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <FolderOpenOutlined className="mr-1.5" />
            Readiness Checklist
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What information may be needed?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
            A bank reconciliation bookkeeper may need access to your accounting software, bank feeds or statements, credit-card statements, merchant reports, invoices, bills, receipts and explanations for transfers or unusual transactions. Access should be provided through appropriate user permissions rather than sharing personal banking passwords.
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Where records are missing, the item can be flagged for follow-up instead of being guessed or forced into an account.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Security & Missing Records Callout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-blue-50/70 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/60 flex items-start gap-3">
            <InfoCircleOutlined className="text-xl text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
            <div className="text-sm text-blue-900 dark:text-blue-200 leading-relaxed">
              <span className="font-bold">Security Best Practice:</span> Never share direct internet banking login details. Always invite us via your accounting software or provide read-only banking statements or official data feeds.
            </div>
          </div>

          <div className="p-6 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 flex items-start gap-3">
            <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
            <div className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <span className="font-bold">No Guesswork Policy:</span> Where records are missing, the item can be flagged for follow-up instead of being guessed or forced into an account.
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
