"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  CalendarOutlined,
  FolderOpenOutlined,
  ShopOutlined,
  SwapOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatToBringToTransactionMeeting Component
 * ==========================================
 * Section 6: What to bring to the first meeting
 * Source: 12th Pillar Business Advisory.docx (Lines 323-324)
 *
 * Implements 100% complete, verbatim SEO text outlining core records,
 * specific buyer inputs (access, decision date), and seller inputs (timetable, assets).
 */
export default function WhatToBringToTransactionMeeting() {
  const commonRecords = [
    {
      icon: <DollarOutlined className="text-emerald-600 dark:text-emerald-400" />,
      text: "Proposed price, terms, or formal purchase offer",
    },
    {
      icon: <ShopOutlined className="text-teal-600 dark:text-teal-400" />,
      text: "Comprehensive business overview and commercial description",
    },
    {
      icon: <FileTextOutlined className="text-blue-600 dark:text-blue-400" />,
      text: "Latest statutory financial statements and lodged tax returns",
    },
    {
      icon: <FolderOpenOutlined className="text-amber-600 dark:text-amber-400" />,
      text: "Year-to-date management accounts and trial balances",
    },
    {
      icon: <AuditOutlined className="text-purple-600 dark:text-purple-400" />,
      text: "Available information memorandum or draft contract / heads of agreement",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What to Bring to the First Meeting
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Bring the proposed price or offer, business description, latest
            financial statements, tax returns, management accounts and any
            available sale memorandum or draft contract. If you are the buyer,
            provide the access granted for due diligence and the decision date.
            If you are the seller, explain the desired timetable and which
            assets or interests you intend to transfer.
          </p>
        </div>

        {/* Common Documents Grid */}
        <div className="mb-10">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 text-center">
            Standard Financial Records for Review
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonRecords.map((rec, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800"
              >
                <span className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0 mt-0.5 text-base">
                  {rec.icon}
                </span>
                <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium leading-relaxed">
                  {rec.text}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tailored Instructions: Buyer vs Seller */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Buyer Specifics */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/50 via-white to-slate-50/50 dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/50 flex items-center justify-center text-emerald-700 dark:text-emerald-300">
                <CalendarOutlined className="text-xl" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                If You Are the Buyer
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              Provide the access granted for due diligence and the decision
              date. This enables us to structure our review scope and prioritize
              critical verification steps before key deadlines expire.
            </p>
          </div>

          {/* Seller Specifics */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/50 via-white to-slate-50/50 dark:from-blue-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-blue-200/80 dark:border-blue-800/50 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-700 dark:text-blue-300">
                <SwapOutlined className="text-xl" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                If You Are the Seller
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              Explain the desired timetable and which assets or interests you
              intend to transfer. Clarifying inclusions and exclusions upfront
              prevents protracted negotiations and last-minute deal renegotiation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
