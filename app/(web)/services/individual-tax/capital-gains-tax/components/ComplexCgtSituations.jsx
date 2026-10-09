"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ExclamationCircleOutlined,
  HomeOutlined,
  ToolOutlined,
  CalendarOutlined,
  TeamOutlined,
  HistoryOutlined,
  GlobalOutlined,
  StockOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ComplexCgtSituations Component
 * ===============================
 * Section 11: Complex CGT Situations Where Advice Can Help.
 * Features 100% complete, verbatim content from Page 6 of the client document.
 */
export default function ComplexCgtSituations() {
  const complexScenarios = [
    {
      icon: <HomeOutlined className="text-amber-500" />,
      text: "A property sold after being used as both a main residence and rental property.",
    },
    {
      icon: <ToolOutlined className="text-blue-500" />,
      text: "An investment property with substantial improvements or incomplete acquisition records.",
    },
    {
      icon: <CalendarOutlined className="text-emerald-500" />,
      text: "Multiple CGT events in one financial year.",
    },
    {
      icon: <TeamOutlined className="text-purple-500" />,
      text: "Jointly owned assets where each owner may need to report a share of the gain or loss.",
    },
    {
      icon: <HistoryOutlined className="text-rose-500" />,
      text: "Capital losses carried forward from earlier years.",
    },
    {
      icon: <GlobalOutlined className="text-indigo-500" />,
      text: "Inherited assets, foreign-residency considerations or significant asset disposals.",
    },
    {
      icon: <StockOutlined className="text-teal-500" />,
      text: "Shares, managed investments and employee share interests.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Specialist Advice
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Complex CGT Situations Where Advice Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            When multiple tax rules intersect, professional calculation prevents
            costly errors and ensures full compliance with ATO regulations.
          </p>
        </div>

        {/* 7 Scenarios Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {complexScenarios.map((item, idx) => (
            <div
              key={idx}
              className="flex items-start gap-4 p-5 sm:p-6 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700 flex items-center justify-center shrink-0 border border-slate-200 dark:border-zinc-600 text-lg shadow-2xs">
                {item.icon}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-medium m-0">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Advisory Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-emerald-50 via-white to-emerald-50 dark:from-zinc-800/90 dark:via-zinc-850 dark:to-zinc-800/90 border border-emerald-200/80 dark:border-emerald-800/40 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xs">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Planning to Sell an Asset in the Current Financial Year?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 max-w-2xl font-normal leading-relaxed">
              We help you understand your estimated capital gain, available
              concessions, and cost-base deductions before signing contracts.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              className="brand-btn-primary font-bold px-6 h-11 text-sm shadow-md"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
            >
              Book Pre-Sale Advice
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
