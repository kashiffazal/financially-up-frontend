"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedSmallBusinessCgtRibbon Component
 * =======================================
 * Displays contextual related services for Small Business CGT:
 * - Company Tax Returns
 * - Trust Distribution Tax
 * - Business Financial Statements
 * - Business Tax Hub
 */
export default function RelatedSmallBusinessCgtRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-xs">
          Related Services:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            Corporate returns:
            <Link href="/services/business-tax/company-tax-returns">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-teal-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPlacement="end"
              >
                Company Tax Returns
              </Button>
            </Link>
          </span>

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">
            •
          </span>

          <span className="flex items-center gap-1.5">
            Trust capital gains:
            <Link href="/services/business-tax/trust-distribution-tax">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-teal-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPlacement="end"
              >
                Trust Distribution Tax
              </Button>
            </Link>
          </span>

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">
            •
          </span>

          <span className="flex items-center gap-1.5">
            Balance sheet assets:
            <Link href="/services/business-tax/business-financial-statements">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-teal-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPlacement="end"
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
