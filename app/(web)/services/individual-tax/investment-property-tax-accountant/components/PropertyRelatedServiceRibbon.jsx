"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * PropertyRelatedServiceRibbon Component
 * ======================================
 * Displays cross-navigation links connecting Investment Property Tax to Individual Tax, Capital Gains Tax and High Income practices.
 */
export default function PropertyRelatedServiceRibbon() {
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
              Individual Tax Hub
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
              Capital Gains Tax
            </Button>
          </Link>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <Link href="/services/individual-tax/high-income-professionals">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPosition="end"
            >
              High-Income Professionals
            </Button>
          </Link>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <Link href="/services/individual-tax/sole-trader-tax-return">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPosition="end"
            >
              Sole Trader Tax Returns
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
