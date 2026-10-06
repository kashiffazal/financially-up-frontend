"use client";

import React from "react";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  BookOutlined,
  BankOutlined,
  DollarOutlined,
  HomeOutlined,
  ScheduleOutlined,
  FolderOpenOutlined,
  SyncOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeededTrusts Component
 * =====================================
 * Section 6: What records are needed for trust accounting?
 *
 * Implements verbatim content from '8th Pillar Trust Services.docx' (Page 1: 1- Trust Services).
 * Sets out the exact 8 essential document categories required to prepare compliant trust accounts,
 * along with the vital legal note on trust deeds and legal adviser interpretation.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatInformationNeededTrusts() {
  /**
   * Exact 8 document items from client document
   */
  const documentChecklist = [
    {
      title: "current trust deed and any amendments or variations",
      icon: <BookOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      tag: "Deed Terms",
    },
    {
      title: "bank, credit-card and investment statements",
      icon: <BankOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      tag: "Banking",
    },
    {
      title: "income records, invoices and expense documentation",
      icon: <DollarOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      tag: "Income & Invoices",
    },
    {
      title: "property purchase, sale and loan documents where relevant",
      icon: <HomeOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      tag: "Property & CGT",
    },
    {
      title: "dividend and managed-fund tax statements",
      icon: <FileTextOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      tag: "Investments",
    },
    {
      title: "asset registers and prior-year financial statements",
      icon: <FolderOpenOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      tag: "Prior Accounts",
    },
    {
      title: "trustee distribution resolutions and beneficiary information",
      icon: <ScheduleOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      tag: "Resolutions",
    },
    {
      title: "records of loans, reimbursements or transactions involving related entities.",
      icon: <SyncOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      tag: "Related Entities",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <BookOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Records & Preparation
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What records are needed for trust accounting?
          </h2>

          {/* Exact Verbatim Introductory Sentence from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Good trust accounting starts with complete records. The documents needed depend on what
            the trust does, but may include:
          </p>
        </div>

        {/* 8 Document Checklist Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-12">
          {documentChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3.5">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.tag}
                  </span>
                </div>
                <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug m-0 capitalize-first">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Exact Verbatim Deed Note & Legal Disclaimer Box */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-amber-200/80 dark:border-amber-900/60 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-start gap-4 sm:gap-6">
          <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/50 text-amber-600 dark:text-amber-400 flex items-center justify-center shrink-0">
            <InfoCircleOutlined className="text-xl" />
          </div>
          <div className="space-y-1">
            <h3 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Why Deed Integrity Matters
            </h3>
            {/* Exact Verbatim Concluding Note from Document */}
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
              A complete copy of the deed is especially important because accounting and tax
              treatment cannot be considered in isolation from the trustee&apos;s powers and the
              beneficiaries identified by the deed. Legal interpretation or deed amendments may
              require an appropriately qualified legal adviser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
