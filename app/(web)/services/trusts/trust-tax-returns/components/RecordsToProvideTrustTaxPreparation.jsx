"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  HistoryOutlined,
  BankOutlined,
  AccountBookOutlined,
  DollarCircleOutlined,
  RiseOutlined,
  TeamOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * RecordsToProvideTrustTaxPreparation Component
 * =============================================
 * Section: Records to provide for trust tax preparation
 * Verbatim text from Page 6 of client docx (8th Pillar Trust Services.docx).
 * Features 8 essential documentation items for complete trust tax return preparation.
 */
export default function RecordsToProvideTrustTaxPreparation() {
  const records = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Deed & Variations",
      desc: "Trust deed, variations and prior trustee or distribution documents.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Prior-Year Accounts & Returns",
      desc: "Prior-year financial statements and trust tax returns.",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Bank & Bookkeeping Records",
      desc: "Bank statements and reconciled bookkeeping records.",
    },
    {
      icon: <AccountBookOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Sales, Property & Finance Records",
      desc: "Sales, expenses, property, investment and financing records.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Investment Income Statements",
      desc: "Dividend statements, managed-fund tax statements and interest summaries.",
    },
    {
      icon: <RiseOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Asset CGT Purchase & Disposal",
      desc: "Asset purchase and disposal records for CGT calculations.",
    },
    {
      icon: <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Beneficiary Details & Resolutions",
      desc: "Beneficiary details and trustee resolutions relevant to the year.",
    },
    {
      icon: <AuditOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "BAS, GST & Payroll Data",
      desc: "BAS/GST records and payroll information where applicable.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Records to provide for trust tax preparation
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Providing these documents allows our team to reconcile your trust ledger, accurately calculate Section 95 net
            income, and ensure full compliance before lodgement.
          </p>
        </div>

        {/* 8 Records Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
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
