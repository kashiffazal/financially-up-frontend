"use client";

import React from "react";
import { Tag } from "antd";
import {
  HomeOutlined,
  FileSearchOutlined,
  DollarCircleOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatSmsfPropertyAccountantDoes Component
 * =======================================
 * Implements verbatim SEO content from Page 4 of 9th Pillar SMSF.docx:
 * - What does an SMSF property accountant do?
 */
export default function WhatSmsfPropertyAccountantDoes() {
  const propertyWorkAreas = [
    {
      title: "Rental income and lease reconciliations",
      desc: "Reconciling gross rent, agent management fees, tenant disbursements, and municipal charges to primary bank accounts.",
    },
    {
      title: "Expense classification & deductibility",
      desc: "Differentiating immediately deductible repairs and maintenance from capital improvements and borrowing costs.",
    },
    {
      title: "Loan and borrowing schedules",
      desc: "Separating loan principal, interest charges, and bank fees where property is held under compliant borrowing.",
    },
    {
      title: "Acquisition and disposal cost bases",
      desc: "Recording stamp duty, conveyancing fees, legal costs, settlement statements, and capital works registers for CGT.",
    },
    {
      title: "Capital works and depreciating assets",
      desc: "Maintaining Division 43 capital works deductions and Division 40 plant and equipment depreciation schedules.",
    },
    {
      title: "Annual valuation evidence & audit file",
      desc: "Organizing objective market-value evidence and preparing verified schedules for the independent SMSF auditor.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            SMSF Real Estate Accounting
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does an SMSF property accountant do?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            An SMSF property accountant focuses on the accounting and tax treatment of property held by the fund. This is different from property investment advice, loan or credit advice, legal conveyancing and the independent SMSF audit. The work usually begins with the fund&apos;s bank, property-manager, loan and settlement records and follows those transactions through to the annual accounts, tax calculations and audit file.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The work may cover rental income, expenses, loans, acquisition and disposal costs, capital works, depreciating assets, valuations and related-party dealings. Treatment depends on the transaction, fund circumstances and applicable rules.
          </p>
        </div>

        {/* 6 Property Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {propertyWorkAreas.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-purple-400/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-100 dark:border-purple-800/40 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  <HomeOutlined className="text-xl text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircleOutlined className="text-emerald-500 text-sm shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Regulatory Distinction Callout */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start sm:items-center gap-4 shadow-xs">
          <SafetyCertificateOutlined className="text-2xl text-purple-600 dark:text-purple-400 shrink-0 mt-0.5 sm:mt-0" />
          <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-normal">
            <span className="font-bold text-slate-900 dark:text-white">Strict Advisory Boundaries:</span> Financially Up Pty Ltd provides accounting, tax reporting, and compliance support for property held within superannuation. We do not provide credit assistance, mortgage broking, conveyancing, or financial product advice recommending the acquisition or disposal of real estate.
          </p>
        </div>
      </div>
    </section>
  );
}
