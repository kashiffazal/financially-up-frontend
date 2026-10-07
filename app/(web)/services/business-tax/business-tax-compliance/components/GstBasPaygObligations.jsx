"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  DollarCircleOutlined,
  TeamOutlined,
  ReconciliationOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * GstBasPaygObligations Component
 * ===============================
 * Section: GST, BAS and PAYG Obligations
 * Features 100% complete, verbatim content from Page 8 of client docx.
 * Covers transaction coding, reconciled control accounts, and BAS integrity.
 */
export default function GstBasPaygObligations() {
  const obligations = [
    {
      icon: <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "GST Reporting via BAS",
      desc: "A business registered for GST generally needs to report GST through its business activity statement. Reporting frequency (quarterly or monthly) depends on turnover registrations and ATO requirements.",
    },
    {
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "PAYG Withholding (PAYGW)",
      desc: "Employers must withhold income tax from payments to employees and eligible contractors, remitting tax withheld to the ATO via BAS and reporting through Single Touch Payroll (STP).",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "PAYG Instalments (PAYGI)",
      desc: "Pre-paying expected business income tax across activity statements helps manage cash flow and avoid large, unexpected annual tax bills when commercial trading profits grow.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Periodic Tax Filings
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GST, BAS and PAYG Obligations
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A business registered for GST generally needs to report GST through its business activity statement. BAS obligations can also include PAYG withholding or PAYG instalments, depending on the business. The frequency and information required depend on registrations and ATO requirements.
          </p>
        </div>

        {/* 3 Obligations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {obligations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Transaction Coding & Reconciliation Notice */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ReconciliationOutlined className="text-teal-600 dark:text-teal-400" />
              Reconciled Control Accounts Prevent Recurring Errors
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Good compliance depends on correct transaction coding and reconciled control accounts. A BAS prepared from unreconciled records can carry errors into later periods, so recurring tax compliance services may include reviewing the underlying accounting information rather than only transferring figures onto a form.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Review Activity Statements
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
