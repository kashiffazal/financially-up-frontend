"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedYearEndServicesRibbon Component
 * ======================================
 * Displays contextual related services from Page 7 of the client docx:
 * Business Financial Statements, Business Tax Hub, Division 7A, and Company Tax Returns.
 */
export default function RelatedYearEndServicesRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-xs">
          Related Services:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            Formal reports:
            <Link href="/services/business-tax/business-financial-statements">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPosition="end"
              >
                Business Financial Statements
              </Button>
            </Link>
          </span>

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">•</span>

          <span className="flex items-center gap-1.5">
            Director loan issues:
            <Link href="/services/business-tax/division-7a">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPosition="end"
              >
                Division 7A
              </Button>
            </Link>
          </span>

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">•</span>

          <span className="flex items-center gap-1.5">
            Corporate tax lodgment:
            <Link href="/services/business-tax/company-tax-returns">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPosition="end"
              >
                Company Tax Returns
              </Button>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
