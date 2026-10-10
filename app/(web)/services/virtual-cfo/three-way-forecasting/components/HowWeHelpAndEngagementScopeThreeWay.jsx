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
  CheckCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowWeHelpAndEngagementScopeThreeWay Component
 * ============================================
 * Section 5: How Financially Up can help & Scope, assumptions and professional boundaries
 * Features 100% complete, verbatim content from client SEO document.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 */
export default function HowWeHelpAndEngagementScopeThreeWay() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      subtitle: `TPB Agent #${company.tpbNumber || "26234055"}`,
      desc: "More than a decade of experience building integrated three-statement financial forecasts.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Specialists",
      subtitle: "Qualified Senior Advisors",
      desc: "Delivering linked models decision-makers can understand, update, and question.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Australia-Wide Support",
      subtitle: "Online & In-Person",
      desc: "Serving clients nationwide via remote video screen-shares or face-to-face appointments.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: How Financially Up can help */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm flex flex-col justify-between">
            <div>
              <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                Advisory Service
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                How Financially Up can help
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  We agree the users and purpose, review records, build the connected forecast within scope and walk you through its outputs. We can discuss a process for updating actual results and revisiting assumptions, if ongoing support is needed.
                </p>
                <p>
                  A lender or investor may request specific supporting material or independent verification; those requirements should be confirmed separately, and no funding outcome is guaranteed.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <CheckCircleOutlined />
              <span>Full Output Walkthrough & Model Handover</span>
            </div>
          </div>

          {/* Card 2: Scope, assumptions and professional boundaries */}
          <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/60 shadow-sm flex flex-col justify-between">
            <div>
              <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
                Governance Boundaries
              </Tag>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
                Scope, assumptions and professional boundaries
              </h2>
              <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                <p>
                  The engagement covers the agreed forecast structure, linked calculations, stated assumptions and explanation of the outputs. Tax-related payments may be modelled using agreed assumptions, but specialist tax advice, finance approval, valuation, audit and assurance are separate unless specifically scoped. The forecast supports planning and should not be presented as a guaranteed result or independently verified information.
                </p>
                <p>
                  {company.legalName || "Financially Up Pty Ltd"} has more than 10 years of experience, with a team including CPA and IPA members. We offer online and in-person appointments across Australia. We aim to leave decision makers with a forecast they can understand, update where agreed, and question when the business changes.
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
              See the Full Effect of Your Commercial Plan
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0">
              Book a consultation to build an integrated three-statement financial model.
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
