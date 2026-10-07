"use client";

import React from "react";
import { Tag } from "antd";
import {
  AuditOutlined,
  FolderOpenOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * AuditVsPracticalReviewAndInfo Component
 * Covers 'Payroll audit services versus a practical compliance review' and 'What information may be needed?'
 * from Page 10 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function AuditVsPracticalReviewAndInfo() {
  const recordsNeeded = [
    "recent payroll reports and employee payroll setup information",
    "STP and PAYG withholding records",
    "super contribution and payment records",
    "general-ledger payroll, PAYG and super accounts",
    "bank records supporting wage and super payments",
    "relevant payroll adjustments or prior correspondence",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Audit vs Practical Review */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-4 space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-100 dark:bg-teal-900/40 text-teal-700 dark:text-teal-300 flex items-center justify-center">
                <AuditOutlined className="text-2xl" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight">
                Payroll audit services versus a practical compliance review
              </h3>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Businesses sometimes search for payroll audit services when what they need is a detailed payroll compliance review. Financially Up can examine payroll records, reconciliations and reporting processes within an agreed accounting and tax scope.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                This should not be confused with a statutory audit, legal opinion or workplace investigation unless those services are separately required and provided by an appropriately qualified professional.
              </p>
            </div>

          </div>
        </div>

        {/* Part 2: What information may be needed? */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <FolderOpenOutlined className="mr-1.5" />
              Review Documentation
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What information may be needed?
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              To perform an effective payroll health check, we assess your underlying software records and financial ledgers against actual cash disbursements and ATO reporting data.
            </p>

            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 italic">
              The exact documents depend on the review. Sensitive employee information should be handled only to the extent necessary for the agreed work.
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs space-y-4">
              <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                Typical Documentation Checklist:
              </h3>
              <ul className="space-y-3">
                {recordsNeeded.map((rec, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-slate-600 dark:text-zinc-300">
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>{rec}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
