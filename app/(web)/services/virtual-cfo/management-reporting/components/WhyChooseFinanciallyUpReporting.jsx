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
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpReporting Component
 * =========================================
 * Section 8: Why choose Financially Up?
 * Features 100% complete, verbatim content from client SEO document.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 */
export default function WhyChooseFinanciallyUpReporting() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      subtitle: `TPB Agent #${company.tpbNumber || "26234055"}`,
      desc: "More than a decade of proven rigor in accounting, taxation, bookkeeping and advisory.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Specialists",
      subtitle: "Qualified Senior Advisors",
      desc: "Delivering reports accurate enough to rely on and concise enough to use.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Australia-Wide Support",
      subtitle: "Online & In-Person",
      desc: "Connecting reporting directly to operational decisions through virtual and face-to-face sessions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Trusted Advisors
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose Financially Up?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent with more than 10 years of experience across accounting, taxation, bookkeeping and business advisory. Our team includes CPA and IPA professionals, with Australia-wide support through online and in-person appointments. We focus on reports that are accurate enough to rely on, concise enough to use and connected to the decisions management needs to make.
          </p>
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
              Ready to Upgrade Your Monthly Management Pack?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 m-0">
              Book a consultation to align your KPIs and financial visibility.
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
