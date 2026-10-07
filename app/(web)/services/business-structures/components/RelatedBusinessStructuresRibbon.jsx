"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedBusinessStructuresRibbon Component
 * =========================================
 * Reusable navigation ribbon displaying quick contextual links across the 7 Business Structures sub-pillars
 * and the main Business Structures Hub. Automatically highlights or filters based on current page slug.
 *
 * @param {string} props.currentSlug - Current page route slug (e.g., 'company-registration')
 */
export default function RelatedBusinessStructuresRibbon({ currentSlug = "" }) {
  const allSubServices = [
    {
      label: "Company Registration",
      href: "/services/business-structures/company-registration",
      slug: "company-registration",
      hint: "Pty Ltd & ASIC",
    },
    {
      label: "ABN Registration",
      href: "/services/business-structures/abn-registration",
      slug: "abn-registration",
      hint: "Business numbers",
    },
    {
      label: "Business Name Registration",
      href: "/services/business-structures/business-name-registration",
      slug: "business-name-registration",
      hint: "Trading names",
    },
    {
      label: "Business Structure Advice",
      href: "/services/business-structures/business-structure-advice",
      slug: "business-structure-advice",
      hint: "Entity selection",
    },
    {
      label: "Partnership Registration",
      href: "/services/business-structures/partnership-registration",
      slug: "partnership-registration",
      hint: "Partner setups",
    },
    {
      label: "Corporate Trustee",
      href: "/services/business-structures/corporate-trustee",
      slug: "corporate-trustee",
      hint: "Trust governance",
    },
    {
      label: "Business Restructure",
      href: "/services/business-structures/business-restructure",
      slug: "business-restructure",
      hint: "Entity transitions",
    },
    {
      label: "Business Structures Overview",
      href: "/services/business-structures",
      slug: "business-structures",
      hint: "Main Hub",
    },
  ];

  const visibleLinks = allSubServices.filter((s) => s.slug !== currentSlug);

  return (
    <nav
      aria-label="Related Business Structures Services"
      className="border-b border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 py-3 sm:py-4 px-4 sm:px-6 lg:px-8 shadow-xs"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4">
        
        {/* Label */}
        <div className="flex items-center gap-2 shrink-0">
          <span className="w-2 h-2 rounded-full bg-brand-primary dark:bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
            Business Structures Sub-Services:
          </span>
        </div>

        {/* Scrollable Badges / Links */}
        <div className="flex items-center gap-2 sm:gap-3 overflow-x-auto pb-1 md:pb-0 scrollbar-thin scrollbar-thumb-slate-200 dark:scrollbar-thumb-zinc-700">
          {visibleLinks.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap bg-slate-100 hover:bg-emerald-50 text-slate-700 hover:text-brand-primary dark:bg-zinc-800 dark:hover:bg-zinc-700/80 dark:text-zinc-300 dark:hover:text-emerald-400 border border-slate-200/60 dark:border-zinc-700 transition-colors shadow-2xs"
            >
              <span>{service.label}</span>
              <span className="text-[10px] opacity-60 font-normal hidden xl:inline">
                ({service.hint})
              </span>
            </Link>
          ))}
        </div>

        {/* Quick Hub Backlink */}
        {currentSlug !== "business-structures" && (
          <div className="shrink-0 hidden lg:block">
            <Link href="/services/business-structures">
              <Button
                type="link"
                size="small"
                className="text-xs font-semibold text-brand-primary dark:text-emerald-400 p-0 flex items-center gap-1 hover:underline"
              >
                All Structure Services <ArrowRightOutlined className="text-[10px]" />
              </Button>
            </Link>
          </div>
        )}

      </div>
    </nav>
  );
}
