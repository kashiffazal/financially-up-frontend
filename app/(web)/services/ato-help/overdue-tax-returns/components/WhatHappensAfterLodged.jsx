"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  WarningOutlined,
  SwapOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * WhatHappensAfterLodged Component
 * ================================
 * Section 5: What happens after overdue returns are lodged?
 * Verbatim text from Page 4 of '11th Pillar ATO Help.docx'.
 *
 * Explains the post-lodgement assessment cycle: Notice of Assessment issuance,
 * credit offsets, penalty review separation, and resolving prior default assessments.
 */
export default function WhatHappensAfterLodged() {
  const steps = [
    {
      icon: <FileTextOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Notice of Assessment Issuance",
      body: "The ATO processes each return and issues a notice of assessment. A result may be a refund, a debt or no amount payable.",
      sub: "We review each Notice of Assessment (NOA) against our prepared calculation to verify that tax offsets, deductions, and tax rates were calculated correctly.",
    },
    {
      icon: <SwapOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Credits Applied to Other Debts",
      body: "A credit can also be applied against other tax debts rather than paid directly. Check each assessment against the lodged return and address any discrepancy promptly.",
      sub: "If you have an outstanding BAS, HECS/HELP balance, or prior tax year debit, the ATO system automatically offsets refunds against those liabilities.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Separate Penalty & Interest Reviews",
      body: "Lodgment does not automatically remove a failure-to-lodge penalty or interest on unpaid tax. Those issues are reviewed separately.",
      sub: "Once the return is lodged and assessed, we can prepare a formal submission to request penalty remission based on safe-harbour and extenuating circumstances.",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Overcoming Prior Default Assessments",
      body: "If the ATO has already issued a default assessment, the response may involve lodging the outstanding return and dealing with the assessment or any applicable review process.",
      sub: "Lodging the actual return replaces the arbitrary ATO Section 167 estimated figures with your true, evidenced accounting transactions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Post-Lodgement Procedures
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What happens after overdue returns are lodged?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The ATO processes each return and issues a notice of assessment. A result may be a refund, a debt or no amount payable. A credit can also be applied against other tax debts rather than paid directly. Check each assessment against the lodged return and address any discrepancy promptly.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-emerald dark:hover:border-brand-emerald transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-3">
                  {item.body}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.sub}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircleOutlined /> Notice of Assessment Audit
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
