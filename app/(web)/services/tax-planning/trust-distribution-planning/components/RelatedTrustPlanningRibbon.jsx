"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedTrustPlanningRibbon Component
 * ====================================
 * Navigation ribbon linking to adjacent Trust, Company, and Division 7A
 * sub-services within the Financially Up advisory ecosystem.
 */
export default function RelatedTrustPlanningRibbon() {
  const relatedLinks = [
    { label: "Trust Tax Returns", href: "/services/business-tax/trust-tax-returns" },
    { label: "Company Tax Returns", href: "/services/business-tax/company-tax-returns" },
    { label: "Division 7A Planning", href: "/services/tax-planning/division-7a-planning" },
    { label: "Business Structure Advice", href: "/services/tax-planning/business-structure-advice" },
  ];

  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-semibold text-slate-800 dark:text-white">Related Services:</span>
        <span>Explore adjacent trust, corporate &amp; structuring services:</span>
        <div className="inline-flex flex-wrap items-center justify-center gap-2">
          {relatedLinks.map((item, idx) => (
            <React.Fragment key={idx}>
              <Link href={item.href}>
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs sm:text-sm"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  {item.label}
                </Button>
              </Link>
              {idx < relatedLinks.length - 1 && (
                <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
