"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  MailOutlined,
  BankOutlined,
  CalculatorOutlined,
  CheckCircleOutlined,
  CompassOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * InformationToAssembleDisclosure Component
 * =========================================
 * Section 5: What information should be assembled?
 * Verbatim text from Page 6 of '11th Pillar ATO Help.docx'.
 *
 * Details the 6 records required to substantiate a voluntary disclosure
 * and establishes the multi-period scope requirement.
 */
export default function InformationToAssembleDisclosure() {
  const records = [
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Original Lodged Statements & Prior Amendments",
      verbatim: "The original return, BAS or other statement and any amended versions",
      desc: "Full copies of the original tax filings and assessment notices that contain the reporting error.",
    },
    {
      icon: <MailOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "ATO Letters & Statutory Deadlines",
      verbatim: "ATO letters, audit or review notifications and relevant deadlines",
      desc: "Any correspondence from the ATO to verify whether an audit clock has begun running.",
    },
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Source Bank & Bookkeeping Records",
      verbatim: "Bank records, invoices, payroll or bookkeeping reports",
      desc: "Underlying financial source documents verifying the actual receipts, payments, or wage transactions.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Original Calculation Workpapers",
      verbatim: "Working papers showing how the original figure was calculated",
      desc: "Tax working papers, spreadsheet models, or notes showing why the original figure was adopted.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Substantiation of Correct Figures",
      verbatim: "Evidence establishing the correct figure and affected periods",
      desc: "Mathematical reconciliations and external contracts establishing the true tax position.",
    },
    {
      icon: <CompassOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Explanation of How Error Was Discovered",
      verbatim: "An explanation of when and how the error was discovered",
      desc: "A factual account explaining the circumstances that brought the oversight to light.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Substantiating Records
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information should be assembled?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The correction must be supported by records. Depending on the issue, we may request:
          </p>
        </div>

        {/* 6 Record Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

              <div className="mt-4 pt-3 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-1.5 text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined /> Document Ready
              </div>
            </div>
          ))}
        </div>

        {/* Multi-Period Scope Banner */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 shrink-0 border border-emerald-200/60 dark:border-emerald-800/60">
              <SolutionOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Multi-Period & Multi-Entity Scope Audit:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                Where more than one period or entity is affected, the scope should be established before sending an incomplete account. We can reconcile the figures, explain uncertainties and prepare a factual description of the correction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
