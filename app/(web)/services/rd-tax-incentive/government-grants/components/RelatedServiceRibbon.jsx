"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedServiceRibbon Component
 * ==============================
 * Contextual footer ribbon linking to R&D Tax Incentive Hub and Application Support.
 */
export default function RelatedServiceRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-semibold text-slate-800 dark:text-white">
          Related R&amp;D Service:
        </span>
        <span>Does your grant project also include eligible R&amp;D activities? Explore our</span>
        <Link href="/services/rd-tax-incentive/application-support">
          <Button
            type="link"
            className="p-0 font-bold text-emerald-600 dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
            icon={<ArrowRightOutlined className="text-xs" />}
            iconPlacement="end"
          >
            R&amp;D Tax Incentive Application Support
          </Button>
        </Link>
        <span className="hidden md:inline text-slate-300 dark:text-zinc-700">|</span>
        <Link href="/services/rd-tax-incentive">
          <Button
            type="link"
            className="p-0 font-medium text-slate-600 dark:text-zinc-300 hover:text-emerald-600 dark:hover:text-emerald-400 inline-flex items-center gap-1 h-auto"
          >
            ← Back to R&amp;D Hub
          </Button>
        </Link>
      </div>
    </section>
  );
}
