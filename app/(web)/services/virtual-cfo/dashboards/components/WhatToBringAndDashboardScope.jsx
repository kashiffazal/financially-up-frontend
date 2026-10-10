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
  FileDoneOutlined,
  DashboardOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhatToBringAndDashboardScope Component
 * ======================================
 * Section 5: What to bring to the first appointment & Service scope and reporting responsibilities
 * Features 100% complete, verbatim content from client SEO document.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 */
export default function WhatToBringAndDashboardScope() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      subtitle: `TPB Agent #${company.tpbNumber || "26234055"}`,
      desc: "More than 10 years of experience ensuring financial dashboards reflect clean accounting records.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Specialists",
      subtitle: "Qualified Senior Advisors",
      desc: "Designing dashboards that make numbers easier to question, challenge, and use in operations.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Australia-Wide Support",
      subtitle: "Online & In-Person",
      desc: "Working with businesses nationwide via remote screen-shares or face-to-face sessions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: What to bring to the first appointment */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm flex flex-col justify-between">
            <div>
              <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                Discovery Session
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                What to bring to the first appointment
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal m-0">
                Bring your latest financial statements or management reports, any budget, the reports you already use and a list of decisions that take too long because the information is hard to find. Tell us which measures your staff can supply and how quickly the accounts are updated. We can then identify a realistic reporting cycle and where underlying records need attention.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-2 text-xs font-semibold text-teal-600 dark:text-teal-400">
              <FileDoneOutlined />
              <span>Realistic Reporting Cadence Planning</span>
            </div>
          </div>

          {/* Card 2: Service scope and reporting responsibilities */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm flex flex-col justify-between">
            <div>
              <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                Scope & Responsibility
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Service scope and reporting responsibilities
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  The engagement can cover dashboard design, agreed calculations, data checks and recurring discussion. It does not turn incomplete records into verified information or replace statutory accounts, audit, assurance or directors’ responsibilities. Management remains responsible for operational decisions and for confirming that non-financial data supplied by the business is complete and appropriate for use.
                </p>
                <p>
                  {company.legalName || "Financially Up Pty Ltd"} has more than 10 years of experience and a team including CPA and IPA members. We provide online and in-person appointments to businesses across Australia. Our aim is a dashboard that makes the numbers easier to question and use, with important assumptions and limitations visible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {credentials.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm text-center flex flex-col items-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-white dark:bg-zinc-700 shadow-sm flex items-center justify-center mb-4">
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
              Make Your Numbers Easier to Use
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0">
              Speak with Financially Up to design a tailored finance dashboard today.
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
