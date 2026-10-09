"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleFilled,
  FolderOpenOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * RecordsRequestedCgtReview Component
 * ===================================
 * Section: Records we may request
 * Verbatim checklist of 8 records from Page 12 of client docx.
 * Substantiates cost bases, active asset duration, and net asset thresholds.
 */
export default function RecordsRequestedCgtReview() {
  const records = [
    {
      title: "Purchase and sale contracts",
      desc: "Original acquisition contracts, options, Heads of Agreement, and executed sale agreements establishing CGT event dates.",
    },
    {
      title: "Asset acquisition dates and cost-base records",
      desc: "Invoices, legal settlement statements, capital improvements, stamp duty receipts, and records supporting elements of the cost base.",
    },
    {
      title: "Business financial statements and tax returns",
      desc: "Historical balance sheets, profit and loss statements, and tax returns for the business over the relevant period.",
    },
    {
      title: "Turnover information for connected entities and affiliates",
      desc: "Financial records and revenue reports for all related Australian and foreign trading entities to assess the $2M turnover test.",
    },
    {
      title:
        "Balance sheets and market-value information relevant to the net asset test",
      desc: "Asset values and liabilities for the taxpayer, connected entities, and affiliates immediately before the sale for the $6M MNAVT.",
    },
    {
      title: "Evidence of how and when the asset was used in the business",
      desc: "Operational records, leases, commercial agreements, and trading accounts substantiating active asset usage duration.",
    },
    {
      title: "Company, trust and ownership records",
      desc: "Share registers, trust deeds, minutes, and constituent documents showing shareholdings, unit holdings, and stakeholder percentages.",
    },
    {
      title: "Valuations or transaction documents where relevant",
      desc: "Formal market valuations, apportionment schedules for business assets, and independent appraisal reports.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Review Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Records we may request
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To assess eligibility for the small business CGT concessions and
            calculate tax outcomes, we may request the following records:
          </p>
        </div>

        {/* 8 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-sm" />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Consultation Prompt */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FolderOpenOutlined className="text-teal-600 dark:text-teal-400" />
              Gathering Transaction Documentation Early
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Reviewing these records ahead of signing binding contracts allows
              our accountants to model concessions and structure the sale for
              optimal tax outcomes.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Schedule CGT Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
