"use client";

import React from "react";
import { Tag } from "antd";
import {
  BankOutlined,
  StockOutlined,
  UserAddOutlined,
  WalletOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  FolderOpenOutlined,
  TeamOutlined,
  FileSearchOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * CommonAdministrationTasksDuringYear Component
 * ==============================================
 * Implements verbatim SEO content from Page 6 of 9th Pillar SMSF.docx:
 * - Common SMSF administration tasks during the year (9 core routine tasks)
 */
export default function CommonAdministrationTasksDuringYear() {
  const adminTasks = [
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reconciling the SMSF bank account and investment cash accounts",
      desc: "Regular matching of primary bank accounts, broker cash accounts, and term deposit records.",
    },
    {
      icon: <StockOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Processing investment purchases, sales, distributions, dividends and interest",
      desc: "Capturing equities trades, dividend reinvestments, franking credits, and managed fund distribution statements.",
    },
    {
      icon: <UserAddOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Recording contributions and preserving evidence about their source and classification",
      desc: "Classifying employer SG, salary sacrifice, personal concessional, and non-concessional member contributions.",
    },
    {
      icon: <WalletOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Recording benefits and pension payments from trustee instructions and supporting records",
      desc: "Monitoring minimum pension drawdown thresholds and recording lump sum payments from trustee minutes.",
    },
    {
      icon: <HomeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Maintaining property income and expense records",
      desc: "Collating monthly rental statements, outgoings invoices, municipal rates, and tenant lease agreements.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Tracking permitted borrowing and repayments under an LRBA",
      desc: "Recording bare trust loan repayments, interest breakdowns, and lender statements under compliant terms.",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Organizing contracts, invoices, investment statements and year-end reports",
      desc: "Assembling a central, audit-ready digital repository of third-party contracts, tax invoices, and statements.",
    },
    {
      icon: <TeamOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Maintaining schedules for member balances and investment activity",
      desc: "Tracking accumulation and retirement-phase member equity, profit allocations, and tax-free percentages.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Identifying missing information before annual accounting begins",
      desc: "Proactively detecting gaps, missing dividend statements, or unclassified items well before audit deadlines.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Year-Round Administrative Workflow
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common SMSF administration tasks during the year
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Maintaining routine administrative rigor throughout the income year ensures all records, member events, and tax transactions are accurately tracked:
          </p>
        </div>

        {/* 9 Admin Tasks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {adminTasks.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-900/60 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md hover:border-emerald-400/60 transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-2">
                  <CheckCircleOutlined className="text-emerald-500 text-sm mt-1 shrink-0" />
                  <span>{item.title}</span>
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
