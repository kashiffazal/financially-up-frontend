"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  AuditOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * ManagementVsStatutoryAndCleanBooks Component
 * Covers 'Management reporting is different from statutory financial reporting'
 * and 'Why accurate bookkeeping comes first' with link to bank reconciliation
 * from Page 9 of 4th Pillar Bookkeeping.docx.
 */
export default function ManagementVsStatutoryAndCleanBooks() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
          {/* Section 1: Management reporting is different from statutory financial reporting */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                <AuditOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Management reporting is different from statutory financial
                reporting
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Internal management reports are prepared to help owners and
                managers run the business. They are not automatically the same
                as general purpose or special purpose financial statements,
                audited financial reports, tax returns or ASIC lodgements.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Companies must keep financial records that correctly record and
                explain transactions and financial position, and those records
                generally need to be retained for seven years. They support the
                preparation and audit of financial statements where required.
                Not every company must lodge financial reports with ASIC; the
                obligation depends on the entity and its circumstances.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can provide internal business reporting and
                bookkeeping-based management accounts. Formal financial
                statements, tax returns, audit work and other statutory or
                compliance reporting are separately scoped.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 text-xs text-slate-600 dark:text-zinc-400 flex items-center gap-3">
                <InfoCircleOutlined className="text-brand-primary text-base shrink-0" />
                <span>
                  Corporations Act 2001 (Cth): Australian companies must
                  maintain financial records explaining transactions for 7
                  years.
                </span>
              </div>
            </div>
          </div>

          {/* Section 2: Why accurate bookkeeping comes first */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div className="space-y-6">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 flex items-center justify-center">
                <FileDoneOutlined className="text-2xl" />
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white tracking-tight">
                Why accurate bookkeeping comes first
              </h2>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A management report is only as reliable as the records behind
                it. Before reporting, key accounts should be reviewed and
                material bank or ledger differences should be addressed. The ATO
                also requires businesses to keep records that explain
                transactions and support tax reporting, so accurate bookkeeping
                has both management and compliance value.
              </p>

              <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Our bank reconciliation services can help confirm that cash
                transactions in the accounting file align with bank activity
                before reports are relied on.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 dark:border-zinc-800">
              <Link href="/services/bookkeeping/bank-reconciliation">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Explore Bank Reconciliation Services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
