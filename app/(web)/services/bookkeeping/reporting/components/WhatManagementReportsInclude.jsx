"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CheckCircleOutlined,
  ProfileOutlined,
  ArrowRightOutlined,
  DollarOutlined,
} from "@ant-design/icons";

/**
 * WhatManagementReportsInclude Component
 * Covers 'What can management reports include?'
 * and link to accounts receivable from Page 9 of 4th Pillar Bookkeeping.docx.
 */
export default function WhatManagementReportsInclude() {
  const reportDeliverables = [
    {
      title: "Profit and loss reporting for a month, quarter or year to date",
      detail: "Tracking operating revenue, cost of goods sold, gross margin, and operating overheads across discrete reporting periods.",
    },
    {
      title: "Balance sheet reporting showing assets, liabilities and equity at a point in time",
      detail: "Clear snapshots of bank accounts, receivables, inventory, tax liabilities, bank debt, and retained earnings.",
    },
    {
      title: "Cash-flow or cash-movement information",
      detail: "Visualizing actual inflows and outflows so business owners understand how operational profits convert into bank cash.",
    },
    {
      title: "Aged accounts receivable and accounts payable summaries",
      detail: "Categorising customer debts and supplier commitments by due date to safeguard short-term liquidity.",
    },
    {
      title: "Comparisons with prior months, prior years or budgets where available",
      detail: "Benchmarking month-on-month and year-on-year trends and identifying variance against projected operating targets.",
    },
    {
      title: "Category, department or tracking reports where the accounting setup supports them",
      detail: "Segmented performance reporting across locations, divisions, commercial projects, or business service lines.",
    },
    {
      title: "Commentary on material movements or bookkeeping items requiring management attention",
      detail: "Practical accounting notes highlighting significant variances, unusual expense spikes, or pending reconciliations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <Tag color="cyan" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <ProfileOutlined className="mr-1.5" />
            Reporting Pack
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What can management reports include?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The right report set depends on the business and the decisions management needs to make. Financial management reporting may include:
          </p>
        </div>

        {/* 7 Report Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {reportDeliverables.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-lg" />
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Cross-Link Card for Accounts Receivable */}
        <div className="p-8 rounded-2xl bg-gradient-to-r from-emerald-50/60 via-white to-teal-50/40 dark:from-zinc-800/80 dark:via-zinc-900 dark:to-zinc-800/60 border border-emerald-200/80 dark:border-zinc-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-800 dark:text-emerald-300 font-semibold text-sm">
              <DollarOutlined />
              Struggling with Outstanding Customer Invoices?
            </div>
            <p className="text-base text-slate-800 dark:text-zinc-200 leading-relaxed font-medium">
              If customer collections are a recurring issue, our accounts receivable services can help maintain the receivables records that support aged-debtor reporting.
            </p>
          </div>
          <Link href="/services/bookkeeping/accounts-receivable">
            <Button
              type="primary"
              size="middle"
              className="font-bold shrink-0"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Explore Accounts Receivable
            </Button>
          </Link>
        </div>

      </div>
    </section>
  );
}
