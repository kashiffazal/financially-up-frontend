"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  DollarOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PostReviewAndWhatToBring Component
 * ==================================
 * Section 1: What happens after the review?
 * Section 2: What to bring to the first appointment
 * Verbatim text from Page 3 of 15th Pillar R&D Tax Incentive docx.
 */
export default function PostReviewAndWhatToBring() {
  const checklistItems = [
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Company Structure",
      desc: "Entity legal details, ownership hierarchy, and corporate group relationships",
    },
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Project Timeline",
      desc: "Key dates of inception, trial phases, testing periods, and completion milestones",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Description of Technical Uncertainty",
      desc: "A plain-language description of what was unknown and unresolvable by current knowledge",
    },
    {
      icon: <FileTextOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Dated Experimental Records",
      desc: "Hypotheses, laboratory notes, trial observations, test data, and technical logs",
    },
    {
      icon: <TeamOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Staff & Contractor Arrangements",
      desc: "Employment agreements, timesheets, third-party contractor contracts, and scopes of work",
    },
    {
      icon: <DollarOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Cost Estimates & Special Factors",
      desc: "An estimate of expenditure, plus notification of overseas activities or prior lodgements",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: What happens after the review? */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Review Outcomes &amp; Next Steps
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What happens after the review?
          </h2>
        </div>

        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-16 space-y-6">
          <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
            We discuss the entity, activities, expenditure and evidence separately. You receive an
            explanation of issues to resolve and the next steps within the agreed engagement, such as
            gathering records, obtaining technical input, considering a finding or preparing an
            activity registration. Any conclusion is based on the information supplied and remains
            subject to the statutory tests and regulatory review.
          </p>
          <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
            If an activity appears supportable, our R&amp;D tax claim preparation service covers the
            financial reconciliation and company tax return stage. The R&amp;D tax incentive overview
            explains the full registration and tax claim process. Registration is generally due within
            10 months of the relevant income year&apos;s end, so a review should allow time for
            evidence and any specialist work.
          </p>
          <div className="pt-4 flex flex-wrap gap-4">
            <Link href="/services/rd-tax-incentive/rnd-tax-claim-preparation">
              <Button
                type="primary"
                className="bg-emerald-600 hover:bg-emerald-700 border-emerald-600 font-semibold px-6 h-11 rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                R&amp;D Tax Claim Preparation Service
              </Button>
            </Link>
            <Link href="/services/rd-tax-incentive">
              <Button
                className="font-semibold px-6 h-11 rounded-xl border-slate-300 dark:border-zinc-700 dark:text-zinc-200"
              >
                R&amp;D Tax Incentive Overview
              </Button>
            </Link>
          </div>
        </div>

        {/* Section 2: What to bring to the first appointment */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="blue"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Preparation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What to bring to the first appointment
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Bring the company structure, project timeline, a plain-language description of the
            technical uncertainty, dated experimental records, key staff and contractor arrangements,
            and an estimate of costs. Tell us whether any activities happened overseas or an application
            has already been lodged. We can identify which questions are ready to answer and which need
            more evidence.
          </p>
        </div>

        {/* 6 Checklist Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {checklistItems.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-500/40 transition-colors flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-slate-200/70 dark:border-zinc-700/60">
                {item.icon}
              </div>
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 block mb-1">
                  Item 0{idx + 1}
                </span>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
