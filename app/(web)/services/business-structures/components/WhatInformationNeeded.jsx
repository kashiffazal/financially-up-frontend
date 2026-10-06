"use client";

import React from "react";
import { Button } from "antd";
import {
  SolutionOutlined,
  CheckCircleOutlined,
  UserOutlined,
  ShopOutlined,
  CalendarOutlined,
  PieChartOutlined,
  ApartmentOutlined,
  IdcardOutlined,
  TeamOutlined,
  LineChartOutlined,
  PropertySafetyOutlined,
  FileTextOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInformationNeeded Component
 * ===============================
 * Section 7: What information may be needed?
 *
 * Implements verbatim copy from Paragraphs 44 to 46 of '6th Pillar Business Structures.docx':
 * - Verbatim Heading 2: "What information may be needed?" (Para 44)
 * - Verbatim Text: Paragraph 45 & Paragraph 46
 * - Features the 10 exact information requirements from Paragraph 45
 *
 * Background: Lite Brand Gradient with alternating palette.
 */
export default function WhatInformationNeeded() {
  /**
   * The 10 exact information items itemized in Paragraph 45:
   * "proposed owners or directors, business activities, expected start date,
   * ownership percentages, existing entities, current ABNs or ACNs, expected employees,
   * projected turnover, asset ownership and any existing agreements."
   */
  const informationChecklist = [
    {
      icon: <UserOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Proposed owners or directors",
      description: "Full legal names, residential addresses, dates of birth, and director identification numbers (Director IDs).",
    },
    {
      icon: <ShopOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Business activities",
      description: "Detailed description of principal commercial activities, primary industry, and trading model.",
    },
    {
      icon: <CalendarOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Expected start date",
      description: "Planned date of enterprise commencement or official commercial transaction start.",
    },
    {
      icon: <PieChartOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Ownership percentages",
      description: "Proposed equity allocations, share classes, or partnership profit and loss distribution ratios.",
    },
    {
      icon: <ApartmentOutlined className="text-cyan-600 dark:text-cyan-400" />,
      title: "Existing entities",
      description: "Details of any associated corporate entities, discretionary family trusts, or current trading setups.",
    },
    {
      icon: <IdcardOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Current ABNs or ACNs",
      description: "Existing Australian Business Numbers or Australian Company Numbers linked to associates.",
    },
    {
      icon: <TeamOutlined className="text-indigo-600 dark:text-indigo-400" />,
      title: "Expected employees",
      description: "Anticipated staff hiring plans to assess PAYG withholding, superannuation, and workers compensation setups.",
    },
    {
      icon: <LineChartOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Projected turnover",
      description: "Estimated 12-month turnover to determine whether compulsory GST registration ($75k) applies from inception.",
    },
    {
      icon: <PropertySafetyOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Asset ownership",
      description: "Details of business vehicles, plant, machinery, premises, and intellectual property being introduced or held.",
    },
    {
      icon: <FileTextOutlined className="text-rose-600 dark:text-rose-400" />,
      title: "Any existing agreements",
      description: "Prior partnership pacts, shareholder agreements, existing leases, client contracts, or supplier commitments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Verbatim Heading 2 (Para 44) & Paragraphs 45 & 46 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Onboarding Checklist
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information may be needed?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The information required depends on what you are establishing or reviewing. It may include the proposed owners or directors, business activities, expected start date, ownership percentages, existing entities, current ABNs or ACNs, expected employees, projected turnover, asset ownership and any existing agreements.
          </p>
          <p className="mt-2 text-sm sm:text-base font-medium text-teal-700 dark:text-teal-300">
            Providing this information early helps avoid registrations being created under the wrong entity or with inconsistent details.
          </p>
        </div>

        {/* 10 Information Checklist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5 mb-12">
          {informationChecklist.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center text-lg group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm" />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Card */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Ready to discuss what information applies to your proposed entity?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1 font-normal">
              Book an appointment with Financially Up to review your documents and establish your entity cleanly.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
