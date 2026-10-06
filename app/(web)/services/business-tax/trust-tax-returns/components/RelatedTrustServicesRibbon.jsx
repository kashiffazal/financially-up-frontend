"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedTrustServicesRibbon Component
 * =====================================
 * Displays contextual related services from Page 3 of the client docx:
 * Company Tax Returns, Business Tax & Accounting Hub, and Beneficiary Individual Tax.
 */
export default function RelatedTrustServicesRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-xs">
          Related Services:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <span className="flex items-center gap-1.5">
            Operating through a company? See
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

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">•</span>

          <span className="flex items-center gap-1.5">
            Year-end accounts &amp; compliance:
            <Link href="/services/business-tax">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPosition="end"
              >
                Business Tax Hub
              </Button>
            </Link>
          </span>

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">•</span>

          <span className="flex items-center gap-1.5">
            Beneficiary individual returns:
            <Link href="/services/individual-tax/individual-tax-return">
              <Button
                type="link"
                className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
                icon={<ArrowRightOutlined className="text-[11px]" />}
                iconPosition="end"
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
