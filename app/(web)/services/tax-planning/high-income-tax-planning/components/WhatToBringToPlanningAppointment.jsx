"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleFilled,
  FolderOpenOutlined,
} from "@ant-design/icons";

/**
 * WhatToBringToPlanningAppointment Component
 * ==========================================
 * Section 7: What to bring to a planning appointment.
 * Verbatim text from Page 4 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Provides a structured 7-item checklist for executives and professionals
 * before their initial tax planning session with Financially Up.
 */
export default function WhatToBringToPlanningAppointment() {
  const documentsList = [
    {
      num: "01",
      title: "Recent payslips or income summaries",
      desc: "Year-to-date earnings, PAYG withholding totals, and employer details.",
    },
    {
      num: "02",
      title: "Details of bonuses or expected changes in pay",
      desc: "Commission statements, scheduled performance bonuses, or executive package adjustments.",
    },
    {
      num: "03",
      title: "Investment and dividend statements",
      desc: "Share registry distribution statements, bank interest, and AMMA managed fund reports.",
    },
    {
      num: "04",
      title: "Rental property records",
      desc: "Annual real estate manager summaries, loan interest statements, and depreciation schedules.",
    },
    {
      num: "05",
      title: "Details of planned asset sales",
      desc: "Draft sale contracts, purchase records, acquisition dates, and incidental cost base invoices.",
    },
    {
      num: "06",
      title: "Super contribution information",
      desc: "Year-to-date personal and employer concessional contribution tallies and fund statements.",
    },
    {
      num: "07",
      title: "Any relevant ATO correspondence",
      desc: "Notices of assessment, PAYG instalment activity statements, or Division 293 determinations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What to Bring to a Planning Appointment
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful information can include recent payslips or income summaries, details of bonuses or expected changes in pay, investment and dividend statements, rental property records, details of planned asset sales, super contribution information and any relevant ATO correspondence. You do not need every document before making an initial appointment; the first review can identify what is required.
          </p>
        </div>

        {/* 7 Item Checklist */}
        <div className="max-w-4xl mx-auto space-y-3.5 mb-10">
          {documentsList.map((item, idx) => (
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

        {/* Reassurance Notice */}
        <div className="max-w-4xl mx-auto rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/30 border border-emerald-200/80 dark:border-emerald-800/50 p-5 sm:p-6 flex items-start gap-3.5">
          <FolderOpenOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-normal">
            <strong>Incomplete Records Are Okay:</strong> You do not need every document before making an initial appointment; the first review can identify what is required and help you assemble missing records efficiently.
          </p>
        </div>
      </div>
    </section>
  );
}
