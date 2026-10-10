"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  FileDoneOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * AnnualAuditAndLodgementWorkflow Component
 * =========================================
 * Implements verbatim SEO content from Page 6 of 9th Pillar SMSF.docx:
 * - How does the annual audit and lodgement workflow operate? (5-step roadmap)
 * - Property, LRBAs and other complex investments (cross-links)
 */
export default function AnnualAuditAndLodgementWorkflow() {
  const roadmapSteps = [
    {
      step: "01",
      title: "Records are collected, processed and reconciled.",
      desc: "Bank feeds, platform reports, property manager statements, and expense invoices are processed and balanced.",
    },
    {
      step: "02",
      title: "Missing documents and unexplained transactions are identified with the trustees.",
      desc: "Clarification of unallocated transfers, missing trade confirmations, or ambiguous member activity.",
    },
    {
      step: "03",
      title: "Year-end accounts, tax calculations and the annual return are prepared.",
      desc: "Compiling the operating statement, balance sheet, member benefit statements, and draft SAR.",
    },
    {
      step: "04",
      title: "The independent approved SMSF auditor receives the accounts and supporting evidence.",
      desc: "Audit file handover to an ASIC-registered auditor appointed at least 45 days prior to the SAR due date.",
    },
    {
      step: "05",
      title: "Audit matters are addressed, and the SMSF annual return is lodged when authorized.",
      desc: "Resolving auditor queries, obtaining trustee signatures, and electronically lodging the SAR with the ATO.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Sequential Compliance Roadmap
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How does the annual audit and lodgement workflow operate?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Every SMSF must be audited for each income year by an independent approved SMSF auditor. Trustees must appoint the auditor at least 45 days before the SMSF annual return is due, and the audit must be completed before the return is lodged.
          </p>
        </div>

        {/* 5-Step Sequential Workflow */}
        <div className="space-y-4 mb-16 w-full">
          {roadmapSteps.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-400/60 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-extrabold text-base flex items-center justify-center shrink-0">
                {item.step}
              </div>
              <div className="flex-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* SAR Summary Callout */}
        <div className="mb-16 p-6 rounded-2xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/40 w-full">
          <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed m-0 font-medium">
            The SMSF annual return combines the fund&apos;s income tax return, regulatory information, member contribution reporting and the SMSF supervisory levy. Keeping the administration substantially current allows the year-end process to focus on adjustments, tax and reporting instead of reconstructing routine transactions.
          </p>
        </div>

        {/* Complex Assets Section & Cross Links */}
        <div className="bg-slate-50 dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 w-full">
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Property, LRBAs and other complex investments
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
            Some investments require extra administration. Property may involve leases, agent statements, invoices, valuations and capital expenditure records. An LRBA adds loan statements, holding-trust documents and repayment tracking. Corporate actions, unlisted investments and pension payments can also create additional evidence and allocation work.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block mb-1">SMSF Property</span>
                <span className="text-xs text-slate-500 dark:text-zinc-400">Leases, agent statements & valuations</span>
              </div>
              <Link href="/services/smsf/property" className="mt-3">
                <Button type="link" size="small" className="text-emerald-600 dark:text-emerald-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                  Property Service
                </Button>
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block mb-1">SMSF LRBA</span>
                <span className="text-xs text-slate-500 dark:text-zinc-400">Loan schedules & bare trust records</span>
              </div>
              <Link href="/services/smsf/lrba" className="mt-3">
                <Button type="link" size="small" className="text-emerald-600 dark:text-emerald-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                  LRBA Service
                </Button>
              </Link>
            </div>

            <div className="p-4 rounded-xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
              <div>
                <span className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white block mb-1">SMSF Setup</span>
                <span className="text-xs text-slate-500 dark:text-zinc-400">Establish new fund & trustee structure</span>
              </div>
              <Link href="/services/smsf/establishment" className="mt-3">
                <Button type="link" size="small" className="text-emerald-600 dark:text-emerald-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                  Setup Service
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
