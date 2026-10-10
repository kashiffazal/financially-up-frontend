"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  ReconciliationOutlined,
  CalculatorOutlined,
  AuditOutlined,
  ExclamationCircleOutlined,
  PlusCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatFinanciallyUpHelpsBareTrust Component
 * =========================================
 * Section: What Financially Up can help with
 * Verbatim text from Page 4 of client docx (8th Pillar Trust Services.docx).
 * Lists the 5 core scope areas and setup assistance scope vs legal adviser handoff.
 */
export default function WhatFinanciallyUpHelpsBareTrust() {
  const serviceDeliverables = [
    {
      icon: <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Ownership & Accounting Review",
      desc: "Reviewing the accounting records and ownership facts provided by the client.",
    },
    {
      icon: <ReconciliationOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Multi-Party Transaction Reconciliation",
      desc: "Reconciling transactions between the trustee, beneficiary, lender and asset records.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Income Tax & GST Reporting Scope",
      desc: "Considering income-tax and GST reporting within our tax-agent scope.",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Statutory Records & Lodgement Work",
      desc: "Preparing relevant accounting records and tax work where a return or lodgement is required.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Legal & Regulatory Scope Boundaries",
      desc: "Identifying when the matter depends on legal interpretation, conveyancing, duty, land tax or financial product advice that sits outside the engagement.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Service Capabilities
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Financially Up can help with
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We provide structured accounting, tax reconciliation, and statutory lodgement support designed around the
            factual ownership realities of your bare trust.
          </p>
        </div>

        {/* 5 Service Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {serviceDeliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Establishing a New Bare Trust Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
              <PlusCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
            </div>
            <div className="space-y-1">
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Establishing a New Bare Trust
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If a new bare trust is being established, Financially Up can assist with the accounting,
                tax-registration and practical implementation aspects once the proposed arrangement is understood. Legal
                drafting of a trust deed or advice on legal ownership rights should be obtained from an appropriately
                qualified legal adviser where required.
              </p>
            </div>
          </div>
          <Link
            href="/book-an-appointment"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm shrink-0"
          >
            Discuss Implementation <ArrowRightOutlined className="ml-2 text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
