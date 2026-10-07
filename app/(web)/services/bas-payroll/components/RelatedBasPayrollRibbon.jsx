"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedBasPayrollRibbon Component
 * =================================
 * Reusable ribbon displaying quick contextual links across the 10 BAS, GST & Payroll sub-pillars
 * and the main BAS, GST & Payroll Hub. Filters out the current active page automatically.
 *
 * @param {string} props.currentSlug - Current page route slug (e.g., 'bas-lodgement')
 */
export default function RelatedBasPayrollRibbon({ currentSlug = "" }) {
  const allSubServices = [
    {
      label: "BAS Lodgement",
      href: "/services/bas-payroll/bas-lodgement",
      slug: "bas-lodgement",
      hint: "Activity statements",
    },
    {
      label: "GST Registration",
      href: "/services/bas-payroll/gst-registration",
      slug: "gst-registration",
      hint: "Threshold & setup",
    },
    {
      label: "Payroll Services",
      href: "/services/bas-payroll/payroll-services",
      slug: "payroll-services",
      hint: "Wage processing",
    },
    {
      label: "Single Touch Payroll",
      href: "/services/bas-payroll/stp",
      slug: "stp",
      hint: "STP Phase 2",
    },
    {
      label: "Fringe Benefits Tax",
      href: "/services/bas-payroll/fringe-benefits-tax",
      slug: "fringe-benefits-tax",
      hint: "FBT returns",
    },
    {
      label: "IAS Lodgement",
      href: "/services/bas-payroll/ias",
      slug: "ias",
      hint: "Monthly instalments",
    },
    {
      label: "PAYG Withholding",
      href: "/services/bas-payroll/payg",
      slug: "payg",
      hint: "Employer tax",
    },
    {
      label: "Payroll Tax",
      href: "/services/bas-payroll/payroll-tax",
      slug: "payroll-tax",
      hint: "State thresholds",
    },
    {
      label: "Employer Compliance",
      href: "/services/bas-payroll/employer-compliance",
      slug: "employer-compliance",
      hint: "Governance reviews",
    },
    {
      label: "Superannuation",
      href: "/services/bas-payroll/super-processing",
      slug: "super-processing",
      hint: "Super guarantee",
    },
  ];

  // Filter out current active page and pick 4 most relevant sibling services
  const displayedServices = allSubServices
    .filter((item) => item.slug !== currentSlug)
    .slice(0, 4);

  return (
    <section className="py-8 bg-white dark:bg-zinc-900 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-bold text-slate-800 dark:text-white uppercase tracking-wider text-xs">
          Related BAS &amp; Payroll Services:
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
                    iconPosition="end"
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
          <Link href="/services/bas-payroll">
            <Button
              type="dashed"
              size="small"
              className="font-medium text-xs text-slate-700 dark:text-zinc-300 hover:text-emerald-600"
            >
              All BAS &amp; Payroll Services Hub
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
