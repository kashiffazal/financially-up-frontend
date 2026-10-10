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
  InfoCircleOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * TrusteeResponsibilityAndWhyChoose Component
 * ===========================================
 * Implements verbatim SEO content from Page 6 of 9th Pillar SMSF.docx:
 * - Can an administrator take over trustee responsibility?
 * - How Financially Up can help
 * - Why choose Financially Up?
 * Uses dynamic company details via `useCompany()`.
 */
export default function TrusteeResponsibilityAndWhyChoose() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: `${company.legalName || "Financially Up Pty Ltd"} is a registered tax agent (registration number ${company.tpbNumber || "26242127"}) with more than 10 years of experience across accounting and taxation.`,
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Professionals",
      desc: "Our team includes CPA and IPA professionals maintaining rigorous compliance workflows and transparent records.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Service",
      desc: "We provide Australia-wide support through online appointments and also offer in-person appointments. Our focus is clear records and a practical annual compliance workflow.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section: Can an administrator take over trustee responsibility? */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-16 w-full">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center shrink-0">
              <SafetyCertificateOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Can an administrator take over trustee responsibility?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                No. Outsourced SMSF administration does not transfer trustee responsibility. Trustees remain responsible for complying with superannuation law, keeping an appropriate investment strategy, making investment decisions and authorizing benefits and pensions. Financially Up does not use an administration engagement to manage investments, recommend financial products or make trustee decisions.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The phrase SMSF management services is sometimes used broadly. Our scope is accounting, tax and compliance administration. Where legal advice, financial product advice or investment strategy recommendations are needed, the appropriate qualified or authorized professional may also be required.
              </p>
            </div>
          </div>
        </div>

        {/* Section: How Financially Up can help */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Practical Support Scope
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help
            </h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can establish a practical record-keeping workflow, process and reconcile fund transactions, maintain supporting schedules, identify missing documents, prepare the file for year-end accounting and coordinate information requested for audit. We can provide ongoing administration or bring records up to date after a period of inactivity, subject to reviewing the available information and agreeing the scope.
            </p>
          </div>
        </div>

        {/* Section: Why choose Financially Up? */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Credentials & Trust
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why choose Financially Up?
            </h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up Pty Ltd is a registered tax agent (registration number {company.tpbNumber || "26242127"}) with more than 10 years of experience across accounting and taxation. Our team includes CPA and IPA professionals. We provide Australia-wide support through online appointments and also offer in-person appointments. Our focus is clear records and a practical annual compliance workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {credentials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Action Bar */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Need ongoing or catch-up SMSF administration?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-zinc-400 max-w-xl font-normal">
                Book an appointment to discuss the fund&apos;s records, investment activity, and the level of support required.
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
      </div>
    </section>
  );
}
