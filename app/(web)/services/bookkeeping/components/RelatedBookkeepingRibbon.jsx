"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedBookkeepingRibbon Component
 * ===================================
 * Reusable ribbon displaying quick contextual links across the 8 Bookkeeping sub-pillars
 * and the main Bookkeeping Hub. Filters out the current active page automatically.
 *
 * @param {string} props.currentSlug - Current page route slug (e.g., 'xero-bookkeeping')
 */
export default function RelatedBookkeepingRibbon({ currentSlug = "" }) {
  const allSubServices = [
    {
      label: "Xero Bookkeeping",
      href: "/services/bookkeeping/xero-bookkeeping",
      slug: "xero-bookkeeping",
      hint: "Cloud accounting",
    },
    {
      label: "Monthly Bookkeeping",
      href: "/services/bookkeeping/monthly-bookkeeping",
      slug: "monthly-bookkeeping",
      hint: "Recurring routine",
    },
    {
      label: "Catch-Up Bookkeeping",
      href: "/services/bookkeeping/catch-up-bookkeeping",
      slug: "catch-up-bookkeeping",
      hint: "Backlog clearing",
    },
    {
      label: "Bookkeeping Clean-Up",
      href: "/services/bookkeeping/bookkeeping-clean-up",
      slug: "bookkeeping-clean-up",
      hint: "File diagnostics",
    },
    {
      label: "Accounts Payable",
      href: "/services/bookkeeping/accounts-payable",
      slug: "accounts-payable",
      hint: "Supplier bills",
    },
    {
      label: "Accounts Receivable",
      href: "/services/bookkeeping/accounts-receivable",
      slug: "accounts-receivable",
      hint: "Customer debtors",
    },
    {
      label: "Bank Reconciliation",
      href: "/services/bookkeeping/bank-reconciliation",
      slug: "bank-reconciliation",
      hint: "Ledger matching",
    },
    {
      label: "Management Reporting",
      href: "/services/bookkeeping/reporting",
      slug: "reporting",
      hint: "Financial visibility",
    },
  ];

  // Filter out current active page and pick 3-4 most relevant sibling services
  const displayedServices = allSubServices
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="py-8 bg-white dark:bg-zinc-900 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-xs">
          Related Bookkeeping Services:
        </span>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {displayedServices.map((service, idx) => (
            <React.Fragment key={service.slug}>
              {idx > 0 && (
                <span className="hidden md:inline text-slate-300 dark:text-zinc-700">
                  •
                </span>
              )}
              <span className="flex items-center gap-1.5">
                <span className="text-slate-500 dark:text-zinc-400">
                  {service.hint}:
                </span>
                <Link href={service.href}>
                  <Button
                    type="link"
                    className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs sm:text-sm"
                    icon={<ArrowRightOutlined className="text-[11px]" />}
                    iconPlacement="end"
                  >
                    {service.label}
                  </Button>
                </Link>
              </span>
            </React.Fragment>
          ))}

          <span className="hidden md:inline text-slate-300 dark:text-zinc-700">
            •
          </span>
          <Link href="/services/bookkeeping">
            <Button
              type="dashed"
              size="small"
              className="font-medium text-xs text-slate-700 dark:text-zinc-300 hover:text-emerald-600"
            >
              All Bookkeeping Services Hub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
