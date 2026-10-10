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
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * ScopeAndProfessionalBoundariesModelling Component
 * ==================================================
 * Section 6: Service scope and professional boundaries & Why Financially Up
 * Features 100% complete, verbatim content from client SEO document.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 */
export default function ScopeAndProfessionalBoundariesModelling() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      subtitle: `TPB Agent #${company.tpbNumber || "26234055"}`,
      desc: "More than a decade of proven rigor building financial models for growing Australian businesses.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Specialists",
      subtitle: "Qualified Senior Advisors",
      desc: "Models designed to make complex multi-statement dynamics intuitive for decision-makers.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Australia-Wide Support",
      subtitle: "Online & In-Person",
      desc: "Flexible video conferencing across all Australian states and territories, or in-person sessions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scope and Boundaries Card */}
        <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-12">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Engagement Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Service scope and professional boundaries
          </h2>
          <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <p>
              Our engagement covers the financial model, agreed assumptions, calculations and explanation of the outputs. Tax-related cash flows can be included using stated assumptions, but tax advice, assurance, audit work, finance applications and valuations are separate services unless expressly included. A model supports judgement; it does not guarantee funding, profitability or a commercial outcome.
            </p>
            <p>
              {company.legalName || "Financially Up Pty Ltd"} has more than 10 years of experience and a team including CPA and IPA members. We offer online and in-person appointments across Australia. We aim to make the model understandable to the people using it, including where its assumptions should be reviewed as circumstances change.
            </p>
          </div>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {credentials.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 text-center flex flex-col items-center"
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
              Planning a Major Business Move?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0">
              Speak with our modelling specialists to quantify risks and cash flow impact.
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
