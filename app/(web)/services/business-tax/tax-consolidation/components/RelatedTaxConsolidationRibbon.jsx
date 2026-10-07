"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedTaxConsolidationRibbon Component
 * =======================================
 * Displays contextual related services for Tax Consolidation:
 * - Company Tax Returns
 * - Business Tax Compliance
 * - Business Financial Statements
 * - Business Tax Hub
 */
export default function RelatedTaxConsolidationRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-xs">
          Related Services:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            Head company returns:
            <Link href="/services/business-tax/company-tax-returns">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-teal-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPosition="end"
              >
                Company Tax Returns
              </Button>
            </Link>
          </span>

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">•</span>

          <span className="flex items-center gap-1.5">
            Statutory reporting:
            <Link href="/services/business-tax/business-tax-compliance">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-teal-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPosition="end"
              >
                Business Tax Compliance
              </Button>
            </Link>
          </span>

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">•</span>

          <span className="flex items-center gap-1.5">
            Consolidated financials:
            <Link href="/services/business-tax/business-financial-statements">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-teal-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPosition="end"
              >
                Business Financial Statements
              </Button>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
