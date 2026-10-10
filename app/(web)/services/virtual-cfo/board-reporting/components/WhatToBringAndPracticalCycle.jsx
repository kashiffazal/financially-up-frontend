"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  PhoneOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhatToBringAndPracticalCycle Component
 * =======================================
 * Section 6: What to bring to the first discussion & A practical reporting cycle
 * Features 100% complete, verbatim content from client SEO document.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 */
export default function WhatToBringAndPracticalCycle() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      subtitle: `TPB Agent #${company.tpbNumber || "26234055"}`,
      desc: "Providing objective, reliable governance reporting for Australian corporate boards.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Specialists",
      subtitle: "Qualified Senior Advisors",
      desc: "Turning dense ledger transactions into decision-focused narratives directors can interrogate.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Australia-Wide Support",
      subtitle: "Online & In-Person",
      desc: "Supporting boards across all states through online video briefings or in-person board meetings.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: What to bring to the first discussion */}
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                First Consultation
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                What to bring to the first discussion
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                Bring recent board packs or management accounts, financial statements, a budget, the board meeting schedule and examples of questions directors have raised. We can identify the reporting gaps, confirm who will supply and approve information and agree a format and timetable. The first discussion can also establish whether prior accounting work is needed before a recurring pack would be reliable.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400">
              <FileDoneOutlined />
              <span>Tailored Format & Timetable Alignment</span>
            </div>
          </div>

          {/* Card 2: A practical reporting cycle */}
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                Board Calendar Cadence
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                A practical reporting cycle
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  A recurring cycle normally sets a reporting cut-off, responsibility for reconciliations and commentary, a management review point and the intended distribution date. The timetable should leave directors enough time to read the pack before the meeting. Where information is late or unresolved, the pack should state that clearly rather than present an estimate as a final result.
                </p>
                <p>
                  {company.legalName || "Financially Up Pty Ltd"} has more than 10 years of experience and a team including CPA and IPA members. We provide online and in-person appointments across Australia. Our focus is clear, timely financial information that matches the decisions before your directors and the limitations of the available records.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400">
              <ClockCircleOutlined />
              <span>Director Reading Buffer Built In</span>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {credentials.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1">
                {card.title}
              </h3>
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-3">
                {card.subtitle}
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                {card.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Contact Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-emerald-500/10 dark:bg-emerald-950/30 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="text-lg font-bold text-slate-900 dark:text-white m-0">
              Give Directors Information They Can Use
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0">
              Speak with Financially Up to design a tailored board reporting calendar.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {company.phone && (
              <a href={`tel:${company.phone?.replace(/\s/g, "")}`}>
                <Button
                  type="default"
                  size="large"
                  icon={<PhoneOutlined />}
                  className="font-semibold"
                >
                  {company.phone}
                </Button>
              </a>
            )}
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<CalendarOutlined />}
                className="font-semibold bg-emerald-600 hover:bg-emerald-500"
              >
                Book An Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
