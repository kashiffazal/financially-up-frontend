"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  CalculatorOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * BasAndBusinessTaxComplianceDev Component
 * ========================================
 * Section: BAS and business tax compliance.
 * Features 100% complete, verbatim content from Page 3 of 10th Pillar Property Tax.docx.
 */
export default function BasAndBusinessTaxComplianceDev() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Activity Statements &amp; Returns
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            BAS and Business Tax Compliance
          </h2>
        </div>

        {/* 2 Context Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Card 1: Verbatim Paragraph 1 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <CalculatorOutlined />
                <span>Pre-Sale GST Cash Flow Reconciliations</span>
              </div>
              {/* Verbatim copy from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                A development project can generate significant GST transactions before any property is sold. Construction invoices, professional fees, land acquisition treatment and settlements need to be reconciled carefully to the accounting records and activity statements.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-zinc-800">
              <Link href="/services/business-tax/business-tax-compliance">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore Business Tax Compliance <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Verbatim Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <FileProtectOutlined />
                <span>Distinct Scope Boundaries</span>
              </div>
              {/* Verbatim copy from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Our Business Tax Compliance service can support broader entity tax obligations, while GST Registration covers registration where that is separately required. This property-development page focuses on the project-specific tax and accounting issues rather than duplicating those services.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-zinc-800">
              <Link href="/services/bas-payroll">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore BAS &amp; Activity Statements <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
