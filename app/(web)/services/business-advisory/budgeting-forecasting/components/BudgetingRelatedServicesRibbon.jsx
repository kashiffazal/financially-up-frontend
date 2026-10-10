"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * BudgetingRelatedServicesRibbon Component
 * ========================================
 * Related Services Navigation Ribbon.
 * Links to complementary advisory capabilities referenced throughout the document:
 * 1. Cash Flow Management
 * 2. Business Advisory Hub
 * 3. Business Financial Statements
 * 4. Profitability Consulting
 */
export default function BudgetingRelatedServicesRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-semibold text-slate-900 dark:text-white">
          Related Advisory Services:
        </span>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/services/business-advisory/cash-flow-management">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPlacement="end"
            >
              Cash Flow Management
            </Button>
          </Link>

          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>

          <Link href="/services/business-advisory">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPlacement="end"
            >
              Business Advisory Hub
            </Button>
          </Link>

          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>

          <Link href="/services/business-tax/business-financial-statements">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPlacement="end"
            >
              Business Financial Statements
            </Button>
          </Link>

          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>

          <Link href="/services/business-advisory/profitability">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPlacement="end"
            >
              Profitability Consulting
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
