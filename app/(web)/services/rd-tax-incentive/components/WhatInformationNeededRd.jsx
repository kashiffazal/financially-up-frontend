"use client";

import React from "react";
import {
  SolutionOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  ProjectOutlined,
  ExperimentOutlined,
  TeamOutlined,
  DollarOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

/**
 * WhatInformationNeededRd Component
 * =================================
 * Section: "What should you bring to a first discussion?"
 * Content verbatim from '15th Pillar R&D Tax Incentive.docx'
 *
 * Theme: Lite Brand Gradient
 */
export default function WhatInformationNeededRd() {
  const discussionItems = [
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Company's Income Year",
      tag: "Statutory Timing",
      items: [
        "Company balancing date (standard 30 June or substituted accounting period)",
        "Incorporation details and Australian company residency status",
        "Associated corporate entities and turnover background",
      ],
    },
    {
      icon: <ProjectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Outline of Each Project & Key Dates",
      tag: "Project Charters",
      items: [
        "Summary outline of each innovative project undertaken",
        "Key milestone dates: commencement, trial periods, conclusion dates",
        "Brief explanation of technical objectives and uncertainties faced",
      ],
    },
    {
      icon: <ExperimentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Records of Experiments & Results",
      tag: "Contemporaneous Logs",
      items: [
        "Documented hypotheses and planned trial methodologies",
        "Records of experiments performed and observed test results",
        "Technical notes, design iterations, failure logs and conclusions",
      ],
    },
    {
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Staff & Contractor Details",
      tag: "Personnel",
      items: [
        "Key internal staff members involved and rough time allocation",
        "Contractor agreements, scopes of work and invoices",
        "Details of any registered research service provider (RSP) used",
      ],
    },
    {
      icon: <DollarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Rough Expenditure Summary",
      tag: "Cost Breakdown",
      items: [
        "Rough breakdown of salary, contractor and consumable expenditure",
        "General ledger accounts or software transaction summaries",
        "Checking whether total costs exceed the $20,000 threshold",
      ],
    },
    {
      icon: <GlobalOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Overseas Work & Prior Applications",
      tag: "Special Circumstances",
      items: [
        "Whether any experimental work was performed overseas",
        "Whether another entity paid or reimbursed project costs",
        "Whether a registration application has already been submitted",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Initial Consultation Checklist
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What should you bring to a first discussion?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Bring the company&apos;s income year, an outline of each project, key dates, records of experiments and results, staff and contractor details, and a rough expenditure summary. Tell us whether any work was performed overseas, another entity paid costs or a registration application has already been made. We can then identify the immediate deadline and agree whether an eligibility review or claim preparation is the next step.
          </p>
        </div>

        {/* 6 Information Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {discussionItems.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2.5">
                  {card.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed"
                    >
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Next Steps Action Box */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Ready to identify your deadline and agree the next step?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1">
              Book an Appointment to discuss the company, the work undertaken and where you are in the application process.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
