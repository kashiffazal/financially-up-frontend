"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  TrophyOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpXero Component
 * =====================================
 * Section 7: Why Choose Financially Up?
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Complies with centralized company context via useCompany() hook.
 */
export default function WhyChooseFinanciallyUpXero() {
  const company = useCompany();

  const trustBadges = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: `TPB Registration #${company.taxAgentNumber || "26234055"} with formal regulatory standing.`,
    },
    {
      icon: <TrophyOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Members",
      desc: "Qualified accounting professionals adhering to high technical and ethical standards.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "10+ Years Experience",
      desc: "Proven track record advising Australian companies, trusts, and sole traders.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Australia-Wide Service",
      desc: "Appointments available online via video meetings, with in-person options available.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white via-slate-50/60 to-white dark:from-zinc-900 dark:via-zinc-950 dark:to-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Credentials &amp; Reputation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose Financially Up?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company.legalName || "Financially Up Pty Ltd"} provides accounting, tax, bookkeeping and business advisory services Australia-wide. We are a registered tax agent with more than 10 years of experience, and our professional team includes CPA and IPA members. Appointments are available online and in person.
          </p>
        </div>

        {/* 4 Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {trustBadges.map((badge, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-all duration-300 text-center flex flex-col items-center justify-between"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {badge.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {badge.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {badge.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Dynamic Company Details Bar */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white dark:bg-zinc-950 border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Connect Directly With Our Bookkeeping Team
            </h4>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 text-xs sm:text-sm text-slate-300">
              {company.phone && (
                <a
                  href={`tel:${company.phone?.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <PhoneOutlined />
                  <span>{company.phone}</span>
                </a>
              )}
              {company.email && (
                <a
                  href={`mailto:${company.email}`}
                  className="inline-flex items-center gap-1.5 hover:text-emerald-400 transition-colors"
                >
                  <MailOutlined />
                  <span>{company.email}</span>
                </a>
              )}
              {company.address && (
                <span className="inline-flex items-center gap-1.5 text-slate-400">
                  <EnvironmentOutlined />
                  <span>{company.address}</span>
                </span>
              )}
            </div>
          </div>

          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="font-bold bg-emerald-500 hover:bg-emerald-400 border-none shrink-0"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
