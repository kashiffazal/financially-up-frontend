"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
  FileSyncOutlined,
  ToolOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsCompliance Component
 * Covers 'How Financially Up can help' from Page 10 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function HowFinanciallyUpHelpsCompliance() {
  const serviceOfferings = [
    {
      title: "Payroll Compliance Reviews",
      desc: "Detailed examination of payroll records, software configurations, and employee setups.",
      icon: <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      title: "Multi-System Reconciliations",
      desc: "Reconciling payroll figures against general ledgers, bank transactions, and ATO portals.",
      icon: <FileSyncOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      title: "Data Issue Identification",
      desc: "Pinpointing discrepancies in tax scales, allowance categories, deductions, or super rates.",
      icon: <ToolOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      title: "Correction Assistance",
      desc: "Assisting with payroll adjustments, STP out-of-cycle filings, and activity statement amendments.",
      icon: <ApartmentOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <SafetyCertificateOutlined className="mr-1.5" />
              Strategic Alignment
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can provide payroll compliance services that connect payroll processing with bookkeeping, accounting and tax reporting. This is particularly useful where a business wants payroll figures to reconcile cleanly into its accounts rather than treating payroll as a separate administrative system.
            </p>

            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Support may include payroll compliance review, reconciliations, identification of data issues, assistance with corrections, and coordination with the business&apos;s regular payroll and tax processes. Routine payroll processing is available through our{" "}
              <Link
                href="/services/bas-payroll/payroll-services"
                className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
              >
                Payroll Services page
                <ArrowRightOutlined className="text-xs" />
              </Link>{" "}
              where the need is ongoing pay-run support rather than a compliance-focused review.
            </p>

            <p className="text-sm text-slate-500 dark:text-zinc-400 italic">
              Tax advice, legal advice, award interpretation and specialist employment matters are separately scoped where relevant.
            </p>
          </div>

          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {serviceOfferings.map((offering, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center mb-3">
                    {offering.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {offering.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {offering.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
