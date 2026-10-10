"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  WarningOutlined,
  AlertOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * CommonAuditDelaysAndAuditFindings Component
 * ============================================
 * Implements verbatim SEO content from Page 7 of 9th Pillar SMSF.docx:
 * - Common causes of SMSF audit delays (6 delay factors)
 * - What happens if the auditor identifies an issue? (ACR reporting criteria)
 * - Cross-links to administration, compliance, and accounting services
 */
export default function CommonAuditDelaysAndAuditFindings() {
  const auditDelays = [
    {
      title: "Missing bank, broker, platform or property records",
      desc: "Incomplete bank statement histories, missing platform annual tax reports, or unobtained lease contracts.",
    },
    {
      title: "Assets recorded in names that do not clearly show fund or trustee ownership",
      desc: "Real estate titles, share holdings, or bank accounts registered in trustee personal names without super fund designation.",
    },
    {
      title: "Year-end values not supported by objective evidence",
      desc: "Property, unlisted shares, or private unit trusts lacking verifiable market value documentation at 30 June.",
    },
    {
      title: "Unexplained transfers between the SMSF and members or related parties",
      desc: "Unclassified bank movements or personal drawings raising potential financial assistance or borrowing concerns.",
    },
    {
      title: "Pension or contribution records that do not reconcile with the accounts",
      desc: "Failure to satisfy minimum statutory pension drawdown limits or unreconciled personal contribution notices.",
    },
    {
      title: "Late bookkeeping that leaves insufficient time before the annual return due date",
      desc: "Rushing year-end preparation without leaving the mandatory 45-day window for thorough independent examination.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="orange" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Bottleneck Prevention
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common causes of SMSF audit delays
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Keeping the fund records current during the year usually makes the audit process more efficient. Proactively addressing these common delay triggers ensures audit clearance without pressure:
          </p>
        </div>

        {/* 6 Audit Delays Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14 max-w-6xl mx-auto">
          {auditDelays.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-amber-50/50 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                  <ExclamationCircleOutlined />
                  <span>{item.title}</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Section: What happens if the auditor identifies an issue? */}
        <div className="bg-slate-50 dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 w-full mb-12">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center shrink-0">
              <AlertOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">
                What happens if the auditor identifies an issue?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-3">
                An audit query does not automatically mean the fund has committed a reportable breach. Sometimes the auditor simply needs more evidence. Where a contravention is identified, however, the auditor has statutory reporting responsibilities and may need to report it to the ATO if the relevant criteria are met. Trustees should address audit findings promptly rather than ignoring them until the next year.
              </p>
            </div>
          </div>
        </div>

        {/* Related Services Navigation Card */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 w-full shadow-2xs flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-zinc-400">
          <span>Complementary SMSF Practice Areas:</span>
          <div className="flex flex-wrap items-center gap-3">
            <Link href="/services/smsf/administration">
              <Button type="link" size="small" className="text-purple-600 dark:text-purple-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                SMSF Administration
              </Button>
            </Link>
            <span className="text-slate-300 dark:text-zinc-700">•</span>
            <Link href="/services/smsf/compliance">
              <Button type="link" size="small" className="text-purple-600 dark:text-purple-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                SMSF Compliance
              </Button>
            </Link>
            <span className="text-slate-300 dark:text-zinc-700">•</span>
            <Link href="/services/smsf/accounting">
              <Button type="link" size="small" className="text-purple-600 dark:text-purple-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                SMSF Accounting
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
