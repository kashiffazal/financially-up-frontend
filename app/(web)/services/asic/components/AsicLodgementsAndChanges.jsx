"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  EyeOutlined,
  ArrowRightOutlined,
  SolutionOutlined,
  BankOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * AsicLodgementsAndChanges Component
 * ==================================
 * Section: "ASIC lodgements and company changes"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '7th Pillar ASIC.docx' (Section 1).
 *
 * Background: Clean White.
 */
export default function AsicLodgementsAndChanges() {
  const commonChangeTypes = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Company Addresses",
      description: "Changes to registered office or principal place of business addresses.",
    },
    {
      icon: <TeamOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Officeholders",
      description: "Appointment or cessation of company directors and company secretaries.",
    },
    {
      icon: <SolutionOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Share & Member Details",
      description: "Certain updates to share structure, member registers and holding info.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <FileTextOutlined className="mr-1" /> Form 484 & Online Filings
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            ASIC lodgements and company changes
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Many routine company updates are made through ASIC’s online services, including changes commonly associated with Form 484. Examples include changes to addresses, officeholders and certain share or member details. The exact filing depends on the event; not every corporate change is a Form 484 matter.
          </p>
        </div>

        {/* 3 Common Change Types Visual Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {commonChangeTypes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 2 Feature Box & Navigation */}
        <div className="p-7 sm:p-9 rounded-2xl bg-gradient-to-r from-teal-50/80 via-emerald-50/50 to-teal-50/80 dark:from-zinc-900 dark:via-zinc-900/80 dark:to-zinc-900 border border-teal-200/80 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-2">
              <CheckCircleOutlined /> Company Changes Service Scope
            </div>
            {/* Document Paragraph 2 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-800 dark:text-zinc-200 leading-relaxed font-medium m-0">
              If your company needs to update information, our company changes service focuses specifically on reviewing the change, identifying the relevant ASIC update and helping ensure the filing reflects the company’s underlying records.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Link href="/services/asic/company-changes">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
              >
                Company Changes Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
