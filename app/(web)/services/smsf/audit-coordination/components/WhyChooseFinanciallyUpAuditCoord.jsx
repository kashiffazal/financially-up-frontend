"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  CalendarOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpAuditCoord Component
 * ==========================================
 * Implements verbatim SEO content from Page 7 of 9th Pillar SMSF.docx:
 * - Why choose Financially Up for SMSF audit coordination?
 * Uses dynamic company details via `useCompany()`.
 */
export default function WhyChooseFinanciallyUpAuditCoord() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: `${company.legalName || "Financially Up Pty Ltd"} is a registered tax agent (TPB #${company.tpbNumber || "26242127"}) with more than 10 years of experience across accounting, taxation and business advisory services.`,
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      desc: "Our qualified specialists hold memberships with CPA Australia and the Institute of Public Accountants (IPA), ensuring rigorous professional accounting workpapers.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      desc: "We support self-managed super fund trustees Australia-wide through online calendar appointments as well as in-person consultations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Professional Credentials
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose Financially Up for SMSF audit coordination?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up is a registered tax agent with more than 10 years of experience across accounting, taxation and business advisory services. Our team includes CPA and IPA members, and we support clients Australia-wide through online and in-person appointments. For SMSF audit coordination, the focus is on accurate accounting records, organized evidence and clear communication with the independent auditor.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-purple-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action Bar */}
        <div className="p-8 rounded-3xl bg-slate-900 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
              Need help preparing for your SMSF annual audit?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 dark:text-zinc-400 max-w-xl font-normal">
              Book an appointment with Financially Up to review the accounts, audit records and next steps.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                className="bg-emerald-600 hover:bg-emerald-500 font-semibold border-none"
                icon={<CalendarOutlined />}
              >
                Book an Appointment
              </Button>
            </Link>
            {company.phone && (
              <a href={`tel:${company.phone?.replace(/\s/g, "")}`}>
                <Button
                  size="large"
                  className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold"
                  icon={<PhoneOutlined />}
                >
                  {company.phone}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
