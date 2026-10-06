"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  AuditOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  CheckCircleFilled,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInformationNeeded Component
 * ===============================
 * Section 7 of Tax Planning Hub:
 * "What Information May Be Needed?"
 *
 * All 7 checklist items are 100% VERBATIM from the professional SEO specialist document:
 * '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx' (Page 1).
 */
export default function WhatInformationNeeded() {
  /**
   * The 7 Exact Document Checklist Items (Verbatim)
   */
  const documentItems = [
    {
      num: "01",
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Accounting & Payroll",
      text: "Current year-to-date income, accounting or payroll information.",
    },
    {
      num: "02",
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Tax History",
      text: "Prior-year tax returns and notices of assessment where relevant.",
    },
    {
      num: "03",
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Expenditure",
      text: "Details of business expenses, asset purchases and expected transactions.",
    },
    {
      num: "04",
      icon: <HomeOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      tag: "Investments & CGT",
      text: "Investment, property or capital gains information where relevant.",
    },
    {
      num: "05",
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Business Compliance",
      text: "BAS, GST, PAYG instalment and other tax records for a business.",
    },
    {
      num: "06",
      icon: <CalendarOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Superannuation",
      text: "Superannuation contribution information where it is part of the tax planning scope.",
    },
    {
      num: "07",
      icon: <FolderOpenOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      tag: "Commercial Contracts",
      text: "Any contracts, transaction dates or supporting documents relevant to a planned sale, purchase or restructure.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <FolderOpenOutlined className="mr-1" /> Checklist &amp; Preparation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Information May Be Needed?
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Having relevant documentation and accounting records available
            enables us to review your financial position accurately and consider
            practical options before decisions are finalized.
          </p>
        </div>

        {/* 7-Item Document Checklist Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documentItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                      {item.tag}
                    </span>
                    <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                      {item.num}
                    </span>
                  </div>
                </div>
                {/* Document Item Text - Verbatim */}
                <p className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed m-0">
                  {item.text}
                </p>
              </div>
            </div>
          ))}

          {/* Action Notice Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-gradient-to-br from-teal-50 to-emerald-50 dark:from-zinc-900 dark:to-teal-950/30 border border-teal-200 dark:border-teal-800/80 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-full bg-teal-600 text-white flex items-center justify-center mb-3">
                <CheckCircleFilled className="text-base" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                Need Help Organizing Records?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Don&apos;t worry if some documents are incomplete or need
                updating. Financially Up can review your available records and
                identify the specific scope needed.
              </p>
            </div>
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-10 rounded-xl font-semibold shadow-sm"
              >
                Discuss Available Records
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
