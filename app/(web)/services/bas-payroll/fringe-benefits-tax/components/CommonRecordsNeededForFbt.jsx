"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
  CarOutlined,
  FileTextOutlined,
  AuditOutlined,
  CoffeeOutlined,
  DollarOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * CommonRecordsNeededForFbt Component
 * Covers 'Common Records Needed for FBT' (5-year rule) and 'FBT and Business Bookkeeping'
 * with link to Bookkeeping from Page 6 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function CommonRecordsNeededForFbt() {
  const records = [
    {
      title: "Motor vehicle details, odometer records & valid logbooks",
      icon: (
        <CarOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
      ),
    },
    {
      title: "Supplier invoices, receipts & employee reimbursement forms",
      icon: (
        <FileTextOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
      ),
    },
    {
      title:
        "Signed employee declarations (e.g. private use, living away from home)",
      icon: (
        <AuditOutlined className="text-blue-600 dark:text-blue-400 text-lg" />
      ),
    },
    {
      title:
        "Detailed travel itineraries, attendance logs & meal entertainment accounts",
      icon: (
        <CoffeeOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />
      ),
    },
    {
      title:
        "Commercial loan agreements, interest statements & repayment schedules",
      icon: (
        <DollarOutlined className="text-purple-600 dark:text-purple-400 text-lg" />
      ),
    },
    {
      title:
        "Employee contribution records & documentation supporting exemptions",
      icon: (
        <SolutionOutlined className="text-amber-600 dark:text-amber-400 text-lg" />
      ),
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Part 1: Common Records Needed for FBT */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag
            color="geekblue"
            className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs"
          >
            <FolderOpenOutlined className="mr-1.5" />
            Substantiation &amp; Audit Trail
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Common Records Needed for FBT
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The records required depend on the benefit. They may include motor
            vehicle details and logbook information where relevant, invoices,
            reimbursement records, employee declarations, travel or
            entertainment records, loan details, payroll records, employee
            contributions and documentation supporting any exemption or
            concession being applied.
          </p>
        </div>

        {/* 6 Records Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {records.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-start gap-4 hover:border-emerald-400/60 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <p className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug pt-2">
                {item.title}
              </p>
            </div>
          ))}
        </div>

        {/* 5-Year Record Retention Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60 mb-16">
          <div className="flex items-start gap-4">
            <InfoCircleOutlined className="text-xl sm:text-2xl text-amber-600 dark:text-amber-400 shrink-0 mt-1" />
            <div className="text-sm text-amber-900 dark:text-amber-200 leading-relaxed">
              <span className="font-bold">
                Five-Year Retention Requirement:
              </span>{" "}
              The ATO expects employers to keep sufficient records to support
              FBT calculations and employee reporting. FBT records generally
              need to be kept for five years from the date the relevant return
              is lodged, or from the due date if no return is lodged, although
              specific records may have different requirements. Missing records
              can restrict the valuation methods, exemptions or concessions
              available, so documentation should be considered during the year
              rather than only when the return is due.
            </div>
          </div>
        </div>

        {/* Part 2: FBT and Business Bookkeeping */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              FBT and Business Bookkeeping
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              FBT often starts with accounting data, but bookkeeping entries
              alone do not determine the tax treatment. Expense descriptions may
              not show who received the benefit, whether there was private use,
              or whether an exemption applies. A proper FBT review may therefore
              require information beyond the general ledger.
            </p>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If your business records also need ongoing transaction processing
              and reconciliation, see our Bookkeeping services page.
            </p>
          </div>

          <div className="lg:col-span-4 flex justify-start lg:justify-end">
            <Link href="/services/bookkeeping">
              <Button
                type="primary"
                size="large"
                className="font-bold"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Explore Bookkeeping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
