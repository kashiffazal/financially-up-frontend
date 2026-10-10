"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  DollarCircleOutlined,
  BuildOutlined,
  CalendarOutlined,
  BarChartOutlined,
  RiseOutlined,
  GlobalOutlined,
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * RecordsToBringCgtAppointment Component
 * =====================================
 * Section: Records to bring to your CGT appointment.
 * Features 100% complete, verbatim content from Page 5 of 10th Pillar Property Tax.docx.
 */
export default function RecordsToBringCgtAppointment() {
  const records = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Purchase and sale contracts and settlement statements",
      detail: "Both initial contract of sale & purchase settlement sheet, plus disposal contract & final settlement statement.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Stamp duty, conveyancing and selling-cost records",
      detail: "State revenue stamp duty receipts, legal conveyancing accounts, real estate marketing and agent sales commissions.",
    },
    {
      icon: <BuildOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Invoices for renovations, extensions and other capital work",
      detail: "Receipts and contractor invoices for major additions, kitchen/bathroom modernizations, structural walls, and pools.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Rental dates, property schedules and prior tax returns",
      detail: "Logs of all periods the property was rented vs occupied privately, plus previous years' rental tax return schedules.",
    },
    {
      icon: <BarChartOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Capital works and depreciation schedules",
      detail: "Quantity Surveyor reports showing Division 43 claims to calculate mandatory reductions to the CGT cost base.",
    },
    {
      icon: <RiseOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Market valuations prepared for a relevant tax purpose",
      detail: "Valuations obtained when a home was first rented out, upon inheriting an estate, or for non-arm's-length transfers.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Details of ownership, residency, capital gains and capital losses",
      detail: "Proof of Australian residency tenure, passport departure stamps, and carried-forward capital loss tax return schedules.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "ATO clearance certificates or withholding documentation",
      detail: "Approved ATO Foreign Resident Capital Gains Clearance Certificates or Purchaser Withholding Payment notification receipts.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Checklist for Consultation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Records to Bring to Your CGT Appointment
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Useful documents include:
          </p>
        </div>

        {/* 8 Records Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center mb-4">
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
              Document Reconstruction &amp; 5-Year Retention
            </span>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm md:text-base text-slate-200 dark:text-zinc-200 leading-relaxed font-normal">
              Identify missing older documents before lodgment. Records relevant to a property CGT calculation should generally be retained for at least five years after the CGT event, and longer while they are needed to establish the cost base before disposal.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
