"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SyncOutlined,
  KeyOutlined,
  SearchOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * BankReconciliationWorkflow Component
 * Covers 'How bank reconciliation outsourcing works'
 * and link to monthly bookkeeping from Page 8 of 4th Pillar Bookkeeping.docx.
 */
export default function BankReconciliationWorkflow() {
  const steps = [
    {
      number: "1",
      title: "Confirm accounts and access",
      description: "We identify the bank accounts, cards and payment facilities to be reconciled and agree how access and supporting information will be provided.",
      icon: <KeyOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      number: "2",
      title: "Review the accounting file",
      description: "We check the period to be reconciled, opening position and any existing unreconciled or duplicated items.",
      icon: <SearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      number: "3",
      title: "Match and investigate",
      description: "Transactions are matched to the bank activity. Exceptions are reviewed and questions are raised where the correct treatment cannot be determined from the available records.",
      icon: <CheckCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      number: "4",
      title: "Complete and maintain",
      description: "Once differences are resolved, reconciliations are completed and can be repeated on an agreed schedule as part of ongoing bookkeeping.",
      icon: <SyncOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <Tag color="purple" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <SyncOutlined className="mr-1.5" />
            Process Overview
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            How bank reconciliation outsourcing works
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our systematic 4-step workflow ensures every account is reconciled with clarity, transparency, and precision.
          </p>
        </div>

        {/* 4 Steps Timeline / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative p-7 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/80 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-brand-primary dark:text-emerald-400">
                    0{step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-700/60 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Monthly Bookkeeping Cross-Link Card */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 dark:from-zinc-800/80 dark:via-zinc-900 dark:to-zinc-800/60 border border-emerald-200/80 dark:border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white">
              Looking for Year-Round Consistency?
            </h4>
            <p className="text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Businesses that want reconciliation performed consistently throughout the year may prefer our monthly bookkeeping services, which can combine transaction processing with regular reconciliations and file maintenance.
            </p>
          </div>
          <Link href="/services/bookkeeping/monthly-bookkeeping">
            <Button
              type="primary"
              size="middle"
              className="font-bold shrink-0"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Explore Monthly Bookkeeping
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
