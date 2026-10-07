"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedHighIncomeTaxRibbon Component
 * =====================================
 * Navigation ribbon linking to adjacent High-Income and Tax Planning sub-services
 * within the Pillar 3 service ecosystem.
 */
export default function RelatedHighIncomeTaxRibbon() {
  const relatedLinks = [
    { label: "High-Income Professionals", href: "/services/individual-tax/high-income-professionals" },
    { label: "Capital Gains Tax", href: "/services/individual-tax/capital-gains-tax" },
    { label: "Personal Tax Planning", href: "/services/tax-planning/personal-tax-planning" },
    { label: "Property Tax Planning", href: "/services/tax-planning/property-tax-planning" },
  ];

  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-semibold text-slate-800 dark:text-white">Related Services:</span>
        <span>Explore adjacent executive advisory services:</span>
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
