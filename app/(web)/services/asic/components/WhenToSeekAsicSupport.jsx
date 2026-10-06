"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  ClockCircleOutlined,
  UserSwitchOutlined,
  HomeOutlined,
  ShareAltOutlined,
  FileExclamationOutlined,
  HistoryOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  RocketOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhenToSeekAsicSupport Component
 * ===============================
 * Section: "When should a company seek help with ASIC compliance?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '7th Pillar ASIC.docx' (Section 1).
 *
 * Background: Lite Brand Gradient.
 */
export default function WhenToSeekAsicSupport() {
  /**
   * Common corporate trigger situations directly cited in Paragraph 1
   */
  const triggerSituations = [
    {
      icon: <UserSwitchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Director Joining or Leaving",
      description: "A director appointment, resignation, or vacation of office requiring statutory notifications.",
      tag: "Officeholders",
    },
    {
      icon: <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Office Address Changing",
      description: "Changes to registered office address or principal place of business location.",
      tag: "Addresses",
    },
    {
      icon: <ShareAltOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Shares Issued or Transferred",
      description: "Equity allotments, member transfers, or updates to company share structures.",
      tag: "Shares",
    },
    {
      icon: <FileExclamationOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Outdated Annual Statement",
      description: "An annual review statement showing historical or incorrect corporate information.",
      tag: "Annual Review",
    },
    {
      icon: <HistoryOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Overdue Company Changes",
      description: "Several overdue company changes needing to be reconciled and brought up to date.",
      tag: "Backlog Catch-Up",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <ClockCircleOutlined className="mr-1" /> Practical Triggers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            When should a company seek help with ASIC compliance?
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            ASIC compliance support is useful when directors want ongoing administration handled consistently or when a company has a specific event to record. Common situations include a director joining or leaving, an office address changing, shares being issued or transferred, an annual statement showing outdated information, or several overdue company changes needing to be reconciled.
          </p>
        </div>

        {/* 5 Common Situations Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {triggerSituations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

          {/* Consistent Administration Card */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-emerald-500/50 hover:shadow-md transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center">
                  <CheckCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                  Ongoing Peace of Mind
                </span>
              </div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Ongoing Administration
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                Directors seeking consistent corporate secretarial and annual statement tracking managed professionally.
              </p>
            </div>
          </div>
        </div>

        {/* New Company Registration Routing Box - Paragraph 2 Verbatim */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-semibold mb-3">
              <RocketOutlined />
              <span>Company Lifecycle Context</span>
            </div>
            {/* Document Paragraph 2 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-medium">
              It can also be useful after a new company has been established. If you are still at the setup stage, our company registration service is the more relevant starting point. This page deals with the ongoing company compliance that follows registration.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Link href="/services/business-structures">
              <Button
                size="large"
                className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
              >
                Company Registration
              </Button>
            </Link>
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
