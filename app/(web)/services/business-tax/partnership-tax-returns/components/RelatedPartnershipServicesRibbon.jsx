"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedPartnershipServicesRibbon Component
 * ==========================================
 * Displays contextual related services from Page 4 of the client docx:
 * Business Financial Statements, Business Tax Hub, and Partner Individual Tax Returns.
 */
export default function RelatedPartnershipServicesRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-xs">
          Related Services:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            Full annual accounts:
            <Link href="/services/business-tax/business-financial-statements">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPlacement="end"
              >
                Business Financial Statements
              </Button>
            </Link>
          </span>

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">
            •
          </span>

          <span className="flex items-center gap-1.5">
            Comprehensive business tax:
            <Link href="/services/business-tax">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPlacement="end"
              >
                Business Tax Hub
              </Button>
            </Link>
          </span>

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">
            •
          </span>

          <span className="flex items-center gap-1.5">
            Individual partner returns:
            <Link href="/services/individual-tax/individual-tax-return">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPlacement="end"
              >
                Individual Tax Return
              </Button>
            </Link>
          </span>
        </div>
      </div>
    </section>
  );
}
