"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  KeyOutlined,
  BankOutlined,
  FileTextOutlined,
  FolderOpenOutlined,
  DollarOutlined,
  FileDoneOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededCleanup Component
 * ===================================
 * Section 5: What Information May Be Needed?
 * Features 100% complete, verbatim content from Page 5 of client docx.
 */
export default function InformationNeededCleanup() {
  const documentChecklist = [
    {
      icon: (
        <KeyOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Access to the accounting software and relevant bank feeds.",
      desc: "Advisor permissions in Xero, MYOB, or QuickBooks along with electronic bank feed statuses.",
    },
    {
      icon: (
        <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Bank and credit-card statements for affected periods.",
      desc: "Original bank statements across all operating, loan, and credit-card accounts for the disordered periods.",
    },
    {
      icon: (
        <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Sales invoices and supplier bills.",
      desc: "Customer billing records and outstanding trade supplier invoices to resolve aged ledger mismatches.",
    },
    {
      icon: (
        <FolderOpenOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Receipts and supporting expense documents.",
      desc: "Proof of purchase, travel receipts, and capital equipment documentation to support deductions.",
    },
    {
      icon: (
        <DollarOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Loan, lease or finance statements.",
      desc: "Vehicle finance contracts, commercial mortgages, and director loan agreements.",
    },
    {
      icon: (
        <FileDoneOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Prior BAS, tax reports or year-end journals where relevant.",
      desc: "Copies of historical activity statements and past accountant year-end adjusting journals.",
    },
    {
      icon: (
        <TeamOutlined className="text-xl text-rose-600 dark:text-rose-400" />
      ),
      title:
        "Payroll reports if payroll-related balances need to be reconciled.",
      desc: "Wages reports, PAYG withholding totals, and superannuation clearing account statements.",
    },
    {
      icon: (
        <QuestionCircleOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />
      ),
      title:
        "Details of known business/personal transactions or unusual one-off items.",
      desc: "Context on drawings, capital injections, or private expenses mistakenly paid from business accounts.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Information May Be Needed?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To diagnose and clean up historical ledger errors, we work with the
            source records and statements you currently have available.
          </p>
        </div>

        {/* 8 Checklist Cards */}
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

        {/* Callout */}
        <div className="p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-200/60 dark:border-emerald-900/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium">
              Don&apos;t worry if you don&apos;t have every document
              immediately. Our initial diagnostic review will pinpoint exactly
              which records are needed to solve the specific discrepancies.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="middle"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="font-bold shrink-0"
            >
              Start Diagnostic Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
