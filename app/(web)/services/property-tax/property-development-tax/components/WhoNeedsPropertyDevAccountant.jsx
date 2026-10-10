"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BuildOutlined,
  ToolOutlined,
  RiseOutlined,
  ApartmentOutlined,
  HistoryOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhoNeedsPropertyDevAccountant Component
 * =======================================
 * Section: Who needs a property development accountant?
 * Features 100% complete, verbatim content from Page 3 of 10th Pillar Property Tax.docx.
 */
export default function WhoNeedsPropertyDevAccountant() {
  const developerProfiles = [
    {
      icon: <BuildOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Commercial & Residential Developers",
      description:
        "Professional developers undertaking multi-unit residential developments, townhouse complexes, or commercial subdivisions requiring comprehensive project accounting and BAS reconciliation.",
    },
    {
      icon: <ToolOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Builders Constructing for Sale",
      description:
        "Licensed builders and construction contractors building duplexes, villas, or spec homes intended for commercial sale upon completion rather than long-term leasing.",
    },
    {
      icon: <RiseOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Investors Moving into Development",
      description:
        "Passive property landlords transitioning into active development, subdividing backyards, knockdown-rebuilds, or commercial conversions requiring revenue vs capital classification.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Special-Purpose Vehicles (SPVs)",
      description:
        "New companies, unit trusts, or joint ventures established specifically to acquire, fund, and execute a standalone property development project.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Existing Projects Catch-Up",
      description:
        "Ongoing or completed developments where project-cost tracking, contractor invoices, GST tax invoices, or Business Activity Statements have fallen behind and require urgent reconciliation.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Project Stages &amp; Eligibility
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who Needs a Property Development Accountant?
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A property development accountant can assist developers, builders undertaking projects for sale, investors moving from passive ownership into development, and entities created for a specific project. Support may be needed from feasibility and acquisition through construction, pre-sales, settlement and final entity reporting.
          </p>
          {/* Verbatim Paragraph 2 */}
          <p className="mt-3 text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-medium">
            The earlier the commercial purpose, ownership, GST position and accounting workflow are reviewed, the easier it is to build records that reflect the project. Existing projects can also be brought up to date where bookkeeping, BAS or project-cost records have fallen behind.
          </p>
        </div>

        {/* 5 Developer Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {developerProfiles.map((item, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-500/60 transition-all duration-300 group ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/70 dark:border-zinc-700/60 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Inline Booking Callout */}
        <div className="bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
              Planning, Operating or Completing a Development?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
              An initial discussion can clarify your project entity, GST margin scheme, and project accounting setup before contracts are signed.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              className="brand-btn-primary h-11 px-6 font-semibold"
            >
              Book an Appointment <ArrowRightOutlined />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
