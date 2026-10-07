"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleFilled,
  FolderOpenOutlined,
} from "@ant-design/icons";

/**
 * RecordsSupportingPropertyPlanning Component
 * ============================================
 * Section 7: Records that support property tax planning.
 * Verbatim text from Page 5 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Details the 8 essential property documents required from acquisition through to disposal
 * for accurate rental returns and CGT calculations.
 */
export default function RecordsSupportingPropertyPlanning() {
  const recordsChecklist = [
    {
      num: "01",
      title: "Purchase and settlement documents",
      desc: "Contract of sale, solicitor settlement adjustments, stamp duty receipts, and transfer registration fees.",
    },
    {
      num: "02",
      title: "Loan statements and borrowing contracts",
      desc: "Mortgage account statements, redraw histories, offset account records, and loan establishment fees.",
    },
    {
      num: "03",
      title: "Rental statements and tenancy agreements",
      desc: "Annual property management financial summaries and tenant bond and lease agreements.",
    },
    {
      num: "04",
      title: "Invoices, rates and insurance records",
      desc: "Council rates, water service charges, landlord insurance, body corporate levies, and maintenance bills.",
    },
    {
      num: "05",
      title: "Property management statements",
      desc: "Detailed monthly statements reflecting tenant rental receipts, agent letting fees, and routine repairs.",
    },
    {
      num: "06",
      title: "Depreciation or quantity-surveyor reports",
      desc: "Formal tax depreciation schedules for Division 40 plant & equipment and Division 43 capital works.",
    },
    {
      num: "07",
      title: "Renovation and improvement records",
      desc: "Builder contracts, architectural plans, council approvals, and invoices for capital additions.",
    },
    {
      num: "08",
      title: "Documents relating to any planned sale",
      desc: "Draft agency agreements, sales contracts, marketing expenditure receipts, and legal discharge fees.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Records That Support Property Tax Planning
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful records include purchase and settlement documents, loan statements, rental statements, invoices, rates and insurance records, property management statements, depreciation or quantity-surveyor information where relevant, renovation records and documents relating to any planned sale. Maintaining clear records from acquisition can make later rental and CGT calculations more reliable.
          </p>
        </div>

        {/* 8 Records Cards Grid */}
        <div className="max-w-4xl mx-auto space-y-3.5 mb-10">
          {recordsChecklist.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-4 sm:p-5 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-colors flex items-start gap-4"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-base" />
              </div>
              <div className="flex-1 space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Record {item.num}
                  </span>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tip Box */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 p-5 sm:p-6 flex items-start gap-3.5">
          <FolderOpenOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-normal">
            <strong>Acquisition-to-Disposal Discipline:</strong> Holding onto initial settlement sheets and building contracts ensures that when you eventually sell, every eligible cost-base dollar is substantiated to reduce your capital gains tax.
          </p>
        </div>
      </div>
    </section>
  );
}
