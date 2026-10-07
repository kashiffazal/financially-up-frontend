"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * SoleTraderRelatedServiceRibbon Component
 * ========================================
 * Section 10: Related Service Ribbon.
 * Displays cross-navigation links connecting Sole Trader Tax to Individual Tax, Bookkeeping and BAS/GST practices.
 */
export default function SoleTraderRelatedServiceRibbon() {
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
          <Link href="/services/individual-tax/individual-tax-return">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPosition="end"
            >
              Standard Personal Tax Returns
            </Button>
          </Link>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <Link href="/services/bookkeeping">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPosition="end"
            >
              Bookkeeping Services
            </Button>
          </Link>
          <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
          <Link href="/services/bas-gst-payroll">
            <Button
              type="link"
              className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
              icon={<ArrowRightOutlined className="text-xs" />}
              iconPosition="end"
            >
              BAS &amp; GST Services
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
