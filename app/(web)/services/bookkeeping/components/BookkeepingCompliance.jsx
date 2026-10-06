"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  FieldTimeOutlined,
  AuditOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * BookkeepingCompliance Component
 * ================================
 * Section 4: Small business bookkeeping that supports compliance.
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '4th Pillar Bookkeeping.docx' (Page 1).
 * Background: Clean White.
 */
export default function BookkeepingCompliance() {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <FileProtectOutlined className="mr-1" /> Regulatory Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Small business bookkeeping that supports compliance
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            For a small business, bookkeeping provides the underlying records
            used for many tax and reporting obligations. The ATO generally
            requires businesses to keep records that explain their transactions
            and support amounts reported in tax returns and activity statements.
            Most business records must generally be kept for five years from
            when they are prepared or obtained, or when the relevant transaction
            is completed, whichever is later. Longer periods can apply, and
            companies also have separate corporate record-keeping obligations.
          </p>
        </div>

        {/* 2 Key Statutory Compliance Focus Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Statutory 5-Year Record Keeping */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                  <FieldTimeOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/60 text-teal-800 dark:text-teal-300 border border-teal-200/80 dark:border-teal-800/60">
                  ATO 5-Year Rule
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Substantiation & Statutory Record Retention
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                Under Australian tax law, records must explain all transactions
                and support every figure reported in income tax returns and
                activity statements. Maintaining organised electronic source
                documents ensures your business is protected and audit-ready.
              </p>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Retain records for at least 5 years from completion of transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Comply with separate corporate record-keeping rules for Australian companies</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                  <span>Maintain electronic receipts and clear transaction audit trails</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Card 2: GST Records & BAS Scope Boundary (Verbatim Paragraph 2) */}
          <div className="p-7 sm:p-8 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-sm flex items-center justify-center">
                  <AuditOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800/60">
                  GST & BAS Coordination
                </span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                GST Records & Clear Scope Boundaries
              </h3>
              {/* Document Paragraph 2 - Verbatim */}
              <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                If your business is registered for GST, the records should
                support the sales, purchases, GST credits and other amounts
                reported on activity statements. Accurate bookkeeping can make
                the BAS process more efficient, but bookkeeping itself is not
                the same as BAS preparation or lodgement. Work that requires
                determining GST treatment or preparing or lodging a BAS should
                be included in separately scoped compliance work. Where required,
                Financially Up can coordinate bookkeeping with our BAS and GST
                lodgement service.
              </p>
            </div>
          </div>
        </div>

        {/* Advisory Reassurance Banner Linking to BAS & GST Lodgement */}
        <AdvisoryReassuranceBanner
          tag="Coordinated Compliance"
          tagIcon="safety"
          title="Coordinated Bookkeeping, BAS & GST Lodgement"
          description="Accurate bookkeeping makes activity statement preparation seamless. Where required, Financially Up can coordinate your bookkeeping process with our registered tax agents for separately scoped BAS and GST lodgement."
          primaryButtonText="Book an Appointment"
          primaryButtonHref="/book-an-appointment"
          secondaryButtonText="Call"
        />
      </div>
    </section>
  );
}
