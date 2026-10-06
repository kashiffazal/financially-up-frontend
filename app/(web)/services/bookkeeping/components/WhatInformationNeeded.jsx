"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  FileTextOutlined,
  AuditOutlined,
  UserOutlined,
  SafetyCertificateOutlined,
  FolderOpenOutlined,
  CheckOutlined,
  FileSearchOutlined,
  DollarOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeeded Component
 * ===============================
 * Section 8: What information may be needed?
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '4th Pillar Bookkeeping.docx' (Page 1).
 * Background: Clean White.
 */
export default function WhatInformationNeeded() {
  /**
   * The 8 common items listed directly in the verbatim document paragraph
   */
  const commonItems = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Bank and credit-card statements",
      description:
        "Statements or direct electronic bank feeds for all trading accounts, credit cards, and payment gateways.",
      tag: "Statements",
    },
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Sales records",
      description:
        "Customer invoices, POS summaries, merchant reports, and e-commerce platform sales summaries.",
      tag: "Sales",
    },
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Supplier invoices",
      description:
        "Tax invoices and bills from vendors, contractors, and suppliers for business operating expenses.",
      tag: "Bills",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Receipts",
      description:
        "Electronic receipts, photos, or paperless documentation substantiating business purchases.",
      tag: "Receipts",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Loan or finance statements",
      description:
        "Commercial loan contracts, equipment leases, vehicle financing, and chattel mortgage schedules.",
      tag: "Finance",
    },
    {
      icon: <UserOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Payroll information",
      description:
        "Wages summaries, timesheets, superannuation guarantee reports, and STP reporting records.",
      tag: "Payroll",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Prior BAS records",
      description:
        "Previously lodged Business Activity Statements and tax returns to verify opening balances.",
      tag: "Prior BAS",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Access to the accounting file",
      description:
        "User or advisor permissions in cloud accounting software such as Xero, MYOB, or QuickBooks.",
      tag: "Software",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <FolderOpenOutlined className="mr-1" /> Preparation Guide
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information may be needed?
          </h2>
          {/* Document Full Paragraph - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The exact information depends on your systems and the work required.
            Common items include bank and credit-card statements, sales records,
            supplier invoices, receipts, loan or finance statements, payroll
            information, prior BAS records and access to the accounting file. If
            records are incomplete, the first step is usually to identify what
            is available rather than guess missing figures.
          </p>
        </div>

        {/* 8 Common Items Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {commonItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Reassurance Callout Box */}
        <div className="rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 p-6 sm:p-8 flex items-center gap-5">
          <div className="w-12 h-12 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
            <CheckOutlined className="text-lg" />
          </div>
          <div className="space-y-1">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white m-0">
              Incomplete or Overdue Records?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
              If records are incomplete, the first step is usually to identify
              what is available rather than guess missing figures. We will guide
              you on retrieving bank feeds, invoices, and historical files in an
              orderly way.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
