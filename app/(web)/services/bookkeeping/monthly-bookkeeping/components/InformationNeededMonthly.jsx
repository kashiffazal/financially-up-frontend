"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  KeyOutlined,
  BankOutlined,
  FileTextOutlined,
  DollarOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededMonthly Component
 * ===================================
 * Section 6: What Information Do We Need From You?
 * Features 100% complete, verbatim content from Page 3 of client docx.
 */
export default function InformationNeededMonthly() {
  const documentChecklist = [
    {
      icon: <KeyOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Accounting-Software Access",
      desc: "Inviting our team with advisor or standard user privileges in Xero, MYOB, or your cloud accounting file.",
    },
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Bank & Credit-Card Statements",
      desc: "Regular monthly PDF statements to verify statement closing balances against software bank feeds.",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Invoices & Receipts",
      desc: "Supplier tax invoices, bills, and purchase receipts for expense verification and GST claim support.",
    },
    {
      icon: <DollarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Loan or Finance Records",
      desc: "Chattel mortgage statements, equipment finance contracts, and interest schedules.",
    },
    {
      icon: <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Payroll Details",
      desc: "Monthly payroll summaries, STP pay run confirmations, and superannuation clearing reports.",
    },
    {
      icon: <QuestionCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Explanations for Unusual Transactions",
      desc: "Brief notes on non-routine owner transfers, personal reimbursements, or large one-off asset purchases.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Documentation &amp; Collaboration
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information do we need from you?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A monthly workflow works best when documents and questions are dealt with regularly. Depending on your business, we may need accounting-software access, bank and credit-card statements, invoices, receipts, loan or finance records, payroll details and explanations for unusual transactions. You should not guess information that is missing; unresolved items can be identified and followed up.
          </p>
        </div>

        {/* 6 Document Checklist Cards */}
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

        {/* Proactive Follow-up Banner */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              Never guess missing numbers. We track open items systematically in a simple query log, making monthly resolution painless.
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
              Set Up Your Routine
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
