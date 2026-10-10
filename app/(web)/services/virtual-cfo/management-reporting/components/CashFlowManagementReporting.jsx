"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  FileSyncOutlined,
  ArrowRightOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * CashFlowManagementReporting Component
 * =====================================
 * Section 5: Cash flow and management reporting & Management reporting versus statutory financial statements
 * Features 100% complete, verbatim content from client SEO document.
 */
export default function CashFlowManagementReporting() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Cash flow and management reporting */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 flex flex-col justify-between">
            <div>
              <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                Liquidity Tracking
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Cash flow and management reporting
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Cash flow reporting is particularly important because accounting profit does not necessarily equal cash available. Timing of customer receipts, supplier payments, payroll, tax, loan repayments and investment can create cash pressure even when the profit and loss statement looks healthy. A cash flow statement tracks money moving in and out, while a cash flow forecast estimates future inflows and outflows based on assumptions.
                </p>
                <p>
                  Management reporting can combine historical cash information with forecast visibility. Forecasts should be updated as assumptions change and should not be treated as guaranteed outcomes.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2: Management reporting versus statutory financial statements */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 flex flex-col justify-between">
            <div>
              <Tag color="gold" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                Statutory Distinction
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Management reporting versus statutory financial statements
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  Management reports are primarily designed for internal decision-making and can be tailored to the metrics the business uses. Statutory or year-end financial statements may have different presentation, compliance or reporting requirements depending on the entity and circumstances. A management report should therefore not be assumed to replace formal year-end accounting, tax returns, audit or other regulated reporting obligations.
                </p>
                <p>
                  If you need annual accounts and tax-related year-end work rather than recurring internal reports, see our{" "}
                  <Link href="/services/business-tax" className="text-emerald-700 dark:text-emerald-400 font-bold hover:underline">
                    year-end accounting service
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60">
              <Link href="/services/business-tax">
                <Button type="default" size="middle" icon={<ArrowRightOutlined />} iconPlacement="end">
                  Explore Year-End Accounting
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
