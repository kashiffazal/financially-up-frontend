"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * HighIncomeRelatedServiceRibbon Component
 * ========================================
 * Section 9: Related Service Ribbon.
 * Displays cross-navigation links connecting High-Income Tax to the broader Individual Tax practice.
 */
export default function HighIncomeRelatedServiceRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-semibold text-slate-800 dark:text-white">Related Services:</span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/services/individual-tax">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPosition="end"
            >
              Individual Tax Services Hub
            </Button>
          </Link>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <Link href="/services/individual-tax/individual-tax-return">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPosition="end"
            >
              Standard Individual Tax Returns
            </Button>
          </Link>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <Link href="/services/individual-tax/capital-gains-tax">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPosition="end"
            >
              Capital Gains Tax (CGT)
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
