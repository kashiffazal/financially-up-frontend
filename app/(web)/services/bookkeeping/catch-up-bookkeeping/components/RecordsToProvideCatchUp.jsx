"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  FileTextOutlined,
  DollarOutlined,
  TeamOutlined,
  FileDoneOutlined,
  KeyOutlined,
  EditOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RecordsToProvideCatchUp Component
 * =================================
 * Section 5: What Records Should You Provide?
 * Features 100% complete, verbatim content from Page 4 of client docx.
 */
export default function RecordsToProvideCatchUp() {
  const documentChecklist = [
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Bank and credit-card statements for the outstanding period.",
      desc: "Complete statements across all business accounts covering every month of the backlog.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Sales invoices, receipts and payment-platform reports.",
      desc: "Customer billing records and reports from Stripe, Square, PayPal, or EFTPOS merchant terminals.",
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Supplier bills and expense receipts.",
      desc: "Trade supplier invoices, vendor statements, and digital or paper expense receipts.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Loan, finance and asset-purchase documents where relevant.",
      desc: "Equipment hire purchase contracts, commercial loan agreements, and major capital equipment invoices.",
    },
    {
      icon: <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Payroll summaries or payroll-system reports, if payroll affects the accounts.",
      desc: "Historical pay run totals, superannuation clearing summaries, and PAYG withholding figures.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "BAS or other prior-period reports that may help establish opening positions.",
      desc: "Previously lodged activity statements and tax returns to lock in verified opening balances.",
    },
    {
      icon: <KeyOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Access to the accounting software and relevant connected systems.",
      desc: "Advisor invitations to Xero, MYOB, QuickBooks, or receipts inbox apps.",
    },
    {
      icon: <EditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Notes about known missing records, unusual transactions or business changes.",
      desc: "Any contextual notes explaining major structural events, discontinued accounts, or missing receipts.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Preparation Guide
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records Should You Provide?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            You do not need every document perfectly organized before asking for bookkeeping backlog help. Start with the records you have.
          </p>
        </div>

        {/* 8 Document Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {documentChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Practical Reassurance Banner */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              Don&apos;t wait for a &quot;perfect time&quot; when your receipts are all sorted. Hand over what you have, and we&apos;ll piece the jigsaw together step by step.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="middle"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="font-bold shrink-0"
            >
              Start Catch-Up Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
