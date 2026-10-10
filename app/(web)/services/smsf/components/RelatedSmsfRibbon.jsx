"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedSmsfRibbon Component
 * ===========================
 * Reusable ribbon displaying quick contextual links across the 8 SMSF sub-pillars
 * and the main SMSF Hub (/services/smsf). Filters out the current active page automatically.
 *
 * @param {string} props.currentSlug - Current page route slug (e.g., 'accounting', 'property')
 */
export default function RelatedSmsfRibbon({ currentSlug = "" }) {
  const allSubServices = [
    {
      label: "SMSF Accounting",
      href: "/services/smsf/accounting",
      slug: "accounting",
      hint: "Annual accounts",
    },
    {
      label: "SMSF Setup",
      href: "/services/smsf/establishment",
      slug: "establishment",
      hint: "New fund setup",
    },
    {
      label: "SMSF Property",
      href: "/services/smsf/property",
      slug: "property",
      hint: "Property accounting",
    },
    {
      label: "SMSF LRBA",
      href: "/services/smsf/lrba",
      slug: "lrba",
      hint: "Borrowing rules",
    },
    {
      label: "SMSF Administration",
      href: "/services/smsf/administration",
      slug: "administration",
      hint: "Trustee records",
    },
    {
      label: "Audit Coordination",
      href: "/services/smsf/audit-coordination",
      slug: "audit-coordination",
      hint: "Independent audit",
    },
    {
      label: "SMSF Compliance",
      href: "/services/smsf/compliance",
      slug: "compliance",
      hint: "SISA standards",
    },
    {
      label: "SMSF Wind Up",
      href: "/services/smsf/wind-up",
      slug: "wind-up",
      hint: "Fund closure",
    },
  ];

  // Filter out current active page and pick 4 relevant sibling services
  const displayedServices = allSubServices
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="py-8 bg-white dark:bg-zinc-900 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-xs">
          Related SMSF Services:
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
          <Link href="/services/smsf">
            <Button
              type="dashed"
              size="small"
              className="font-medium text-xs text-slate-700 dark:text-zinc-300 hover:text-emerald-600"
            >
              SMSF Services Hub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
