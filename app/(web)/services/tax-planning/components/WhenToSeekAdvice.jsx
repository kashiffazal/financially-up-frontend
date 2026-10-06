"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  ClockCircleOutlined,
  AlertOutlined,
  RiseOutlined,
  CalendarOutlined,
  SafetyCertificateOutlined,
  ShopOutlined,
  ApartmentOutlined,
  ArrowRightOutlined,
  CheckCircleFilled,
} from "@ant-design/icons";
import Link from "next/link";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhenToSeekAdvice Component
 * ==========================
 * Section 3 of Tax Planning Hub:
 * "When Should You Speak With a Tax Planning Advisor?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx' (Page 1).
 */
export default function WhenToSeekAdvice() {
  /**
   * The key scenarios directly cited in Paragraph 2
   */
  const advisorScenarios = [
    {
      icon: <RiseOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Business Growth",
      desc: "When a business is growing and operations expand.",
    },
    {
      icon: <AlertOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Cash Flow Changes",
      desc: "When cash flow has changed materially during the year.",
    },
    {
      icon: <ShopOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "New Investments",
      desc: "When a new investment is being considered.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Income Increases",
      desc: "When personal or business income has increased.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Major Events",
      desc: "When you expect a property sale, business restructure or change in ownership.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Year-Round Review",
      desc: "Planning can also be reviewed during the year rather than waiting until June.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <ClockCircleOutlined className="mr-1" /> Critical Timing Windows
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Should You Speak With a Tax Planning Advisor?
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The most useful time to seek advice is generally before the
            transaction or financial year has finished. Once an asset has been
            sold, income has been derived or a contract has been entered into, the
            tax consequences may already be determined or the available options
            may be narrower.
          </p>
        </div>

        {/* Feature Split: Document Paragraph 2 Highlight & Trigger Scenarios */}
        <div className="p-8 sm:p-10 rounded-3xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-14">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-3">
              <CheckCircleFilled /> Proactive Advice Triggers
            </div>
            {/* Document Paragraph 2 - Verbatim */}
            <p className="text-base sm:text-lg text-slate-800 dark:text-zinc-200 font-medium leading-relaxed m-0">
              A tax planning advisor may also be useful when a business is
              growing, cash flow has changed materially, a new investment is
              being considered, income has increased, or you expect an event such
              as a property sale, business restructure or change in ownership.
              Planning can also be reviewed during the year rather than waiting
              until June.
            </p>
          </div>

          {/* 6 Scenario Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {advisorScenarios.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 shadow-2xs transition-all flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white m-0">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 mt-1 mb-0 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Timing Matters"
          title="Reviewing Upcoming Transactions Before Execution"
          description="A tax planning advisor can review upcoming property disposals, corporate restructures, capital acquisitions, or superannuation contributions before commitments are finalised. Planning reviews conducted well before 30 June provide adequate time to execute required resolutions and ensure records are fully compliant."
          primaryButton={{
            text: "Book an Appointment",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
