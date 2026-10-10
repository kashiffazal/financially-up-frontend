"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  DollarOutlined,
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpSupportsTransactions Component
 * ===============================================
 * Section 5: How Financially Up supports the transaction
 * Source: 12th Pillar Business Advisory.docx (Lines 320-322)
 *
 * Implements 100% complete, verbatim SEO text explaining advisory scope,
 * buyer due diligence reports, and seller financial packaging.
 */
export default function HowFinanciallyUpSupportsTransactions() {
  const scopeHighlights = [
    {
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reviewing Accounts & Returns",
      desc: "Reconciling financial statements, tax returns, and source records to ensure transparency and integrity.",
    },
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Earnings & Working Capital",
      desc: "Analyzing sustainable normalized earnings, margin durability, and true working capital requirements.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Cash Flow & Tax Modelling",
      desc: "Modelling post-settlement cash flow and clarifying CGT, trading stock, and GST going concern rules.",
    },
    {
      icon: <QuestionCircleOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Targeted Inquiries",
      desc: "Preparing specific, commercial financial questions and requests for clarification to the counterpart's advisors.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Advisory Scope &amp; Support
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Supports the Transaction
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our business sale advisory work can include reviewing financial
            statements and tax returns, reconciling key figures, analyzing
            earnings and working capital, modelling cash flow, explaining tax
            considerations and preparing questions for the other side. We agree
            on whether the engagement is for a buyer, seller or another party
            and define the documents and periods covered.
          </p>
        </div>

        {/* 4 Scope Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {scopeHighlights.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dual Buyer vs Seller Delivery Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* For Buyers */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircleOutlined className="text-xl" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                For Buyers
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              For buyers, we report what the records support, what remains
              uncertain and what information is still needed.
            </p>
          </div>

          {/* For Sellers */}
          <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center text-blue-600 dark:text-blue-400">
                <SafetyCertificateOutlined className="text-xl" />
              </span>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                For Sellers
              </h3>
            </div>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
              For sellers, we help assemble coherent financial information and
              identify inconsistencies before they delay a transaction.
            </p>
          </div>
        </div>

        {/* Professional Scope Disclaimer Callout */}
        <div className="p-5 sm:p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/70 dark:border-emerald-800/40 flex items-start gap-4">
          <AuditOutlined className="text-xl sm:text-2xl text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
          <div>
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              Scope of Financial Due Diligence Review
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
              A review of selected records is not an audit or a guarantee about
              future earnings. We provide an independent, rigorous examination
              of available documents within agreed parameters to assist your
              decision-making.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
