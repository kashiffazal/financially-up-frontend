"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  KeyOutlined,
  BankOutlined,
  FileTextOutlined,
  TeamOutlined,
  DollarOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeededXero Component
 * ===================================
 * Section 6: What Information May Be Needed?
 * Features 100% complete, verbatim content from Page 2 of client docx.
 */
export default function WhatInformationNeededXero() {
  const documentChecklist = [
    {
      icon: <KeyOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Appropriate Xero Access",
      desc: "Inviting our team as an advisor or standard user with access to relevant bank accounts and reports.",
    },
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Bank & Credit-Card Statements",
      desc: "Official bank statements to verify opening/closing balances against electronic feeds.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Supplier Invoices & Receipts",
      desc: "Bills and digital receipts supporting expense claims and GST input tax credits.",
    },
    {
      icon: <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Customer Records",
      desc: "Sales invoices, contracts, and debtor notes to ensure accurate revenue allocation.",
    },
    {
      icon: <DollarOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Finance & Loan Statements",
      desc: "Vehicle finance contracts, commercial loans, or director loan agreements.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Payroll & Prior BAS Documents",
      desc: "Pay run summaries, superannuation records, and historical activity statement lodgements.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Preparation &amp; Onboarding
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information may be needed?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            You may need to provide appropriate Xero access, bank and credit-card statements, supplier invoices, customer records, receipts, finance or loan statements, payroll information, prior BAS documents and details of any transactions that cannot be identified from the accounting file alone.
          </p>
        </div>

        {/* Document Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {documentChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-4 hover:border-emerald-400/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 flex items-center justify-center shrink-0 shadow-xs">
                {item.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Missing Records Note */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              Missing some receipts or historical paperwork? Don&apos;t worry—our first step is reviewing what exists and determining the most practical path forward.
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
              Get Started
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
