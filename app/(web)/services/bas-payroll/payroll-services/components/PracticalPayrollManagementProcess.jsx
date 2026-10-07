"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SyncOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * PracticalPayrollManagementProcess Component
 * Covers 'A Practical Payroll Management Process' and
 * 'Payroll, Bookkeeping and BAS: What Is the Difference?'
 * from Page 4 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function PracticalPayrollManagementProcess() {
  const steps = [
    {
      num: "01",
      title: "Confirm Setup & Frequency",
      desc: "Confirming the payroll frequency, employees, software and current setup.",
    },
    {
      num: "02",
      title: "Collect Approved Inputs",
      desc: "Collecting approved timesheets, leave information and authorized payroll changes.",
    },
    {
      num: "03",
      title: "Process & Review Pay Run",
      desc: "Processing the pay run and reviewing payroll outputs for obvious inconsistencies.",
    },
    {
      num: "04",
      title: "Coordinate Compliance Reporting",
      desc: "Preparing or coordinating required payroll reporting.",
    },
    {
      num: "05",
      title: "Maintain Records & Adjustments",
      desc: "Maintaining payroll records and addressing corrections where identified.",
    },
    {
      num: "06",
      title: "Reconcile Payroll Clearing",
      desc: "Reconciling payroll-related accounts where this is included in the agreed service.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: A Practical Payroll Management Process */}
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="purple" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <SyncOutlined className="mr-1.5" />
            Repeatable Workflow
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            A Practical Payroll Management Process
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Effective payroll management services rely on a repeatable process. A typical engagement may involve:
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
            >
              <div>
                <span className="text-2xl font-black text-brand-primary dark:text-emerald-400 mb-3 block">
                  {step.num}
                </span>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 mb-16 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 italic">
          &ldquo;Where the underlying payroll data is incomplete or unclear, the issue should be resolved rather than estimated. Accurate source information is essential to reliable payroll processing.&rdquo;
        </div>

        {/* Part 2: Payroll, Bookkeeping and BAS: What Is the Difference? */}
        <div className="pt-12 border-t border-slate-200/80 dark:border-zinc-800 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center gap-2 text-brand-primary dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <ApartmentOutlined />
              Connected Disciplines
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Payroll, Bookkeeping and BAS: What Is the Difference?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Payroll is focused on employee pay and employer payroll reporting. Bookkeeping covers the broader recording and reconciliation of business transactions, while BAS preparation deals with activity statement obligations such as GST and PAYG amounts where applicable. These functions interact, but they are not the same service.
            </p>
            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If your records also need ongoing transaction processing and reconciliations, our Bookkeeping services may be relevant. For activity statement support, see our BAS Lodgement service.
            </p>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  Bookkeeping Services
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  Transactions, supplier bills, reconciliations
                </p>
              </div>
              <Link href="/services/bookkeeping">
                <Button type="default" size="small" icon={<ArrowRightOutlined />}>
                  View
                </Button>
              </Link>
            </div>

            <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-center justify-between gap-4">
              <div>
                <h4 className="text-base font-bold text-slate-900 dark:text-white">
                  BAS Lodgement Services
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400">
                  Quarterly/monthly GST and PAYG filing
                </p>
              </div>
              <Link href="/services/bas-payroll/bas-lodgement">
                <Button type="primary" size="small" icon={<ArrowRightOutlined />}>
                  View
                </Button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
