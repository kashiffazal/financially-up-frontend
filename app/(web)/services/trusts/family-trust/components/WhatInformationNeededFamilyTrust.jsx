"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  CheckCircleOutlined,
  ExclamationCircleOutlined,
  BankOutlined,
  DollarCircleOutlined,
  FileTextOutlined,
  HomeOutlined,
  TeamOutlined,
  AuditOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

/**
 * WhatInformationNeededFamilyTrust Component
 * ==========================================
 * Section: What information does a family trust accountant need?
 * Verbatim text from Page 2 of client docx.
 * Checklist of 9 essential trust documents and legal deed verification guidance.
 */
export default function WhatInformationNeededFamilyTrust() {
  const documents = [
    {
      icon: <FileTextOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Complete Trust Deed & Amendments",
      text: "a complete trust deed and all amendments",
    },
    {
      icon: <AuditOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Prior-Year Accounts & Tax Returns",
      text: "prior-year financial statements and trust tax returns",
    },
    {
      icon: <BankOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Bank & Investment Statements",
      text: "bank and investment statements",
    },
    {
      icon: <DollarCircleOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Business, Rental & Investment Income",
      text: "business, rental or investment income records",
    },
    {
      icon: <FileSearchOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Expense Invoices & Receipts",
      text: "expense invoices and supporting documents",
    },
    {
      icon: <HomeOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "Property & Asset Transactions",
      text: "property and investment acquisition or disposal documents",
    },
    {
      icon: <TeamOutlined className="text-cyan-600 dark:text-cyan-400" />,
      title: "Beneficiary Details & History",
      text: "beneficiary details and prior distribution schedules",
    },
    {
      icon: <FileSearchOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Trustee Minutes & Resolutions",
      text: "trustee resolutions, minutes and other relevant trust records",
    },
    {
      icon: <ApartmentOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Related-Entity Loan Accounts",
      text: "related-entity loan accounts or transactions",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information does a family trust accountant need?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The exact records depend on the trust’s activities. Common information includes:
          </p>
        </div>

        {/* 3-Column Document Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {documents.map((doc, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                {doc.icon}
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
                  {doc.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 capitalize font-medium flex items-center gap-1.5">
                  <CheckCircleOutlined className="text-emerald-500 text-xs shrink-0" />
                  <span>{doc.text}</span>
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Deed Advisory Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 dark:bg-zinc-900 border border-amber-200 dark:border-amber-900/60 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-amber-300 dark:border-amber-700 flex items-center justify-center shrink-0">
            <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />
          </div>
          <div className="space-y-1 max-w-4xl">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Deed Integrity & Legal Verification
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If the deed cannot be located or has been amended over time, this should be addressed early. The
              accounting and tax treatment often depends on the deed, while replacement deeds, deed interpretation or
              legal amendments may require a legal adviser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
