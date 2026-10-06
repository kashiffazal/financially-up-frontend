"use client";

import React from "react";
import { Button } from "antd";
import {
  ClockCircleOutlined,
  FileSearchOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  HistoryOutlined,
  FormOutlined,
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * AtoNoticesAndDeadlines Component
 * ================================
 * Section 5: Start with the notice, deadline and underlying records
 *
 * Implements verbatim content from '11th Pillar ATO Help.docx' (Page 1: 1- ATO Help Australia).
 * Focuses on establishing the 3 core essentials (what is asked, due date, supporting records),
 * avoiding premature responses or false assumptions, and providing cross-links to
 * prior-year returns and amendments.
 *
 * Background: Clean White.
 */
export default function AtoNoticesAndDeadlines() {
  const threeEssentials = [
    {
      step: "01",
      icon: <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "What the ATO Has Asked For",
      description:
        "Clarifying whether the request is administrative, compliance, debt, data-matching, or audit-related.",
    },
    {
      step: "02",
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "When a Response is Due",
      description:
        "Establishing statutory cut-off dates and requesting formal extension of time before deadlines expire.",
    },
    {
      step: "03",
      icon: <CheckCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "What Records Support the Position",
      description:
        "Gathering verified source documents, ledgers, and workpapers before submitting answers to the ATO.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Action Principles
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Start with the notice, deadline and underlying records
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The fastest way to make progress is usually to establish three things: what the ATO has
            asked for, when a response is due and what records support the tax position. Ignoring
            correspondence can make a manageable issue harder. Responding before the facts are checked
            can also create inconsistencies or leave important questions unanswered.
          </p>

          {/* Exact Verbatim Paragraph 2 from Document */}
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Do not assume every ATO contact means something is wrong. Some matters are resolved by
            confirming information, lodging a missing document or reconciling an account. Others
            reveal an underlying return, BAS or record-keeping problem. The correct response depends on
            the notice and the facts—not on a generic template.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {threeEssentials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-teal-600 dark:text-teal-400">
                    {item.step}
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
        </div>

        {/* Exact Verbatim Cross-Service Referral Pathways (Overdue Returns & Amendments) */}
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8">
          <div className="mb-4">
            <span className="text-xs font-bold text-teal-600 dark:text-teal-400 uppercase tracking-wider">
              Connected Tax Services
            </span>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 font-medium mt-1 mb-0">
              {/* Exact Verbatim Paragraph 3 from Document */}
              If the issue is missing historical individual returns, our{" "}
              <Link
                href="/services/individual-tax/prior-year-tax-returns"
                className="text-teal-600 dark:text-teal-400 hover:underline font-bold"
              >
                prior-year and overdue tax return service
              </Link>{" "}
              may be relevant. If a lodged individual return is wrong rather than overdue, see{" "}
              <Link
                href="/services/individual-tax/tax-return-amendments"
                className="text-teal-600 dark:text-teal-400 hover:underline font-bold"
              >
                tax return amendments
              </Link>
              .
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <Link href="/services/individual-tax/prior-year-tax-returns">
              <Button
                block
                icon={<HistoryOutlined />}
                className="h-11 rounded-xl font-semibold border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800"
              >
                Prior-Year & Overdue Tax Returns
              </Button>
            </Link>
            <Link href="/services/individual-tax/tax-return-amendments">
              <Button
                block
                icon={<FormOutlined />}
                className="h-11 rounded-xl font-semibold border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 hover:bg-white dark:hover:bg-zinc-800"
              >
                Tax Return Amendments
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
