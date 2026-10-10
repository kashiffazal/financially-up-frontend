"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  ApartmentOutlined,
  CommentOutlined,
  FieldTimeOutlined,
  LineChartOutlined,
  ArrowRightOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * WhatFinanciallyUpDoesWithYou Component
 * =======================================
 * Section 6: What Financially Up can do with you
 * Source: 12th Pillar Business Advisory.docx (Lines 425-427)
 *
 * Implements 100% complete, verbatim SEO text explaining our profit improvement scope,
 * operational driver review, and pathways to KPI reporting, benchmarking, and growth advisory.
 */
export default function WhatFinanciallyUpDoesWithYou() {
  const servicePillars = [
    {
      icon: <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Review of Accounts & Data",
      desc: "Detailed examination of statutory financial statements and internal management figures.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Activity-Based Analysis",
      desc: "Granular breakdown by product line, project, or service department where records permit.",
    },
    {
      icon: <CommentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Operational Driver Dialogue",
      desc: "Interrogating real-world shop floor and commercial realities behind the financial numbers.",
    },
    {
      icon: <FieldTimeOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Measurement & Reporting Plan",
      desc: "Designing practical recurring reports so you can track whether actions are delivering expected ROI.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Advisory Partnership &amp; Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Financially Up Can Do with You
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our profit improvement services can include a review of financial
            statements and management data, analysis by activity where records
            allow, discussion of operational drivers and a plan for measuring
            changes. We can help establish regular reporting so you can see
            whether an action is working. We agree the scope and data needs
            before undertaking detailed analysis.
          </p>
        </div>

        {/* 4 Service Pillars */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicePillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Interconnected Service Navigation Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
            Connecting Margin Insights with Strategic Execution
          </h3>
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-6">
            If the core decision is how to monitor business performance month by
            month, our KPI reporting services cover that reporting rhythm. If
            you want a qualified comparison with other businesses, see business
            benchmarking. When a profitability review forms part of an expansion
            decision, our business growth advice addresses capacity and funding
            as well.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            <Link href="/services/business-advisory/kpi-reporting">
              <Button
                type="default"
                icon={<LineChartOutlined />}
                className="rounded-xl font-semibold bg-slate-50 dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                KPI Reporting Services
              </Button>
            </Link>

            <Link href="/services/business-advisory/benchmarking">
              <Button
                type="default"
                icon={<CompassOutlined />}
                className="rounded-xl font-semibold bg-slate-50 dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Business Benchmarking
              </Button>
            </Link>

            <Link href="/services/business-advisory/business-growth">
              <Button
                type="default"
                icon={<ArrowRightOutlined />}
                className="rounded-xl font-semibold bg-slate-50 dark:bg-zinc-950 border-slate-200 dark:border-zinc-800 text-xs sm:text-sm"
              >
                Business Growth Advisory
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
