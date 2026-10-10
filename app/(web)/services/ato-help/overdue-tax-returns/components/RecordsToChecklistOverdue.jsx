"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  ProfileOutlined,
  BankOutlined,
  HomeOutlined,
  LineChartOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";

/**
 * RecordsToChecklistOverdue Component
 * ===================================
 * Section 6: What records should I bring?
 * Verbatim text from Page 4 of '11th Pillar ATO Help.docx'.
 *
 * Implements the 6-point document preparation checklist and emphasizes our
 * ethical standard: no invented deductions.
 */
export default function RecordsToChecklistOverdue() {
  const records = [
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "ATO Letters & Assessment Notices",
      verbatim: "ATO letters, notices of assessment and details of unlodged years",
      desc: "Any demand letters, final notices, previous Notices of Assessment, or correspondence showing flagged overdue tax years.",
    },
    {
      icon: <ProfileOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Income Statements & Government Payments",
      verbatim: "Income statements, payment summaries and government payment information",
      desc: "PAYG payment summaries, Single Touch Payroll income statements, Centrelink statements, superannuation pensions, or annuities.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Bank Statements & Bookkeeping",
      verbatim: "Bank statements and business bookkeeping records",
      desc: "Year-end bank statements showing interest, accounting ledgers, invoices, sole-trader sales logs, or electronic bookkeeping files.",
    },
    {
      icon: <HomeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Rental Statements & Invoices",
      verbatim: "Rental statements and property expense invoices",
      desc: "Annual real estate agent summary statements, council rate notices, water charges, landlord insurance, and mortgage interest records.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Investment & Capital Gains (CGT) Records",
      verbatim: "Investment, dividend and capital gains records",
      desc: "Dividend statements with franking credits, managed fund annual tax statements, cryptocurrency exchange records, and purchase/sale contracts.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Receipts for Claimed Deductions",
      verbatim: "Receipts or other evidence supporting claimed deductions",
      desc: "Work-related expenses, vehicle logbooks, home-office hours records, professional memberships, tools, equipment, and donations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Client Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records should I bring?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Bring what you have, even if it is incomplete. Useful information may include:
          </p>
        </div>

        {/* 6 Document Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-2">
                  "{item.verbatim}"
                </p>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Document Ready
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Professional Standards Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-200/60 dark:border-emerald-800/60">
              <StopOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Our Transparent Evidence Standard:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                We can identify what remains missing and whether information can be obtained from employers, banks, agents or other sources. We will not invent deductions or assume missing records establish an amount.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
