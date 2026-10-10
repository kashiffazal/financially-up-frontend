"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  ApartmentOutlined,
  PieChartOutlined,
  ToolOutlined,
  BankOutlined,
  DollarCircleOutlined,
  CalculatorOutlined,
  HistoryOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * RecordsToKeepSubdivision Component
 * ==================================
 * Section: What records should you keep?
 * Features 100% complete, verbatim content from Page 4 of 10th Pillar Property Tax.docx.
 */
export default function RecordsToKeepSubdivision() {
  const records = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Purchase contract, settlement statement, stamp duty and legal costs",
      detail: "Initial acquisition contract, legal conveyancing invoices, stamp duty receipts, and mortgage establishment fees.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Subdivision applications, council approvals, surveys and plans",
      detail: "Council development consents, plan of subdivision, surveyor pegging diagrams, and compliance certificates.",
    },
    {
      icon: <PieChartOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Contemporaneous valuations supporting the allocation between lots",
      detail: "Registered valuer reports establishing relative market values of the individual lots at the date of subdivision.",
    },
    {
      icon: <ToolOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Civil works, demolition, service connections and contractor invoices",
      detail: "Earthworks, sewer/water connections, driveways, electrical trenching, fencing, and contractor tax invoices.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Loan, interest and other holding-cost records",
      detail: "Bank loan statements, council rates, land tax assessments, and insurance paid during the subdivision process.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Agent agreements, marketing costs, sale contracts and settlement statements",
      detail: "Real estate agency agreements, signage/advertising invoices, contracts of sale for each lot, and settlement adjustments.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "GST registrations, activity statements and tax invoices, where relevant",
      detail: "ABN/GST confirmation, quarterly BAS lodgement histories, input tax credit files, and purchaser withholding receipts.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Records showing when, why and how the plan for the property changed",
      detail: "Correspondence, diary notes, and board/family minutes explaining why long-held land was subdivided or why intention altered.",
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
            Audit Trail &amp; Document Retention
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records Should You Keep?
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Keep records from the original acquisition through to the last sale. Useful documents include:
          </p>
        </div>

        {/* 8 Records Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <div className="flex items-start gap-2 mb-2">
                  <CheckCircleOutlined className="text-emerald-500 text-xs mt-1 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal pl-4">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Banner (5-Year Record Retention) */}
        <div className="bg-slate-900 text-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-8 border border-slate-800 flex flex-col md:flex-row items-start md:items-center gap-6">
          <div className="w-12 h-12 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
            <ClockCircleOutlined className="text-2xl" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-amber-400 block mb-1">
              Statutory 5-Year+ Record Retention Rule
            </span>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 dark:text-zinc-200 leading-relaxed font-normal">
              Records relevant to a CGT calculation should generally be kept for at least five years after the relevant CGT event, and longer where they are needed to establish the cost base of land not yet sold.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
