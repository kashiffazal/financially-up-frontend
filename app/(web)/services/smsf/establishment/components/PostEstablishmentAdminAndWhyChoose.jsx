"use client";

import React from "react";
import Link from "next/link";
import { Button, Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  PhoneOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * PostEstablishmentAdminAndWhyChoose Component
 * ============================================
 * Implements verbatim SEO content from Page 3 of 9th Pillar SMSF.docx:
 * - What happens after establishment?
 * - Why choose Financially Up?
 * Uses dynamic company details via `useCompany()`.
 */
export default function PostEstablishmentAdminAndWhyChoose() {
  const company = useCompany();

  const postSetupTasks = [
    "Keep proper financial and transactional records",
    "Formulate and regularly review the written investment strategy",
    "Record member contributions, rollovers, and benefit payments",
    "Prepare annual financial statements (operating statement and balance sheet)",
    "Obtain an independent audit each year from an approved SMSF auditor",
    "Lodge the annual SMSF annual return (SAR) with the Australian Taxation Office",
  ];

  const trustPillars = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: `${company.legalName || "Financially Up Pty Ltd"} (TPB #${company.tpbNumber || "26242127"}) brings more than 10 years of professional superannuation and tax expertise.`,
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      desc: "Our qualified specialists hold memberships with CPA Australia and the Institute of Public Accountants (IPA), ensuring rigorous professional accounting standards.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      desc: "We provide comprehensive SMSF establishment assistance across Australia through online appointments as well as in-person consultations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Post-Establishment Transition Section */}
        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Lifecycle Transition
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What happens after establishment?
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Once established, the SMSF moves into ongoing administration. Trustees need to keep proper records, maintain the fund&apos;s investment strategy, record contributions and benefits, prepare annual financial statements, obtain an independent audit each year and lodge the SMSF annual return. Our SMSF accounting service can assist with the recurring accounting and tax work after setup.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {postSetupTasks.map((task, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/60 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium"
                >
                  <CheckCircleOutlined className="text-emerald-500 text-base mt-0.5 shrink-0" />
                  <span>{task}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
              <span>Transition smoothly from establishment into routine compliance.</span>
              <Link href="/services/smsf/accounting">
                <Button type="link" size="small" className="p-0 text-emerald-600 dark:text-emerald-400 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                  Explore Recurring SMSF Accounting
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Financially Up Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Professional Expertise
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why choose Financially Up?
            </h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up is a registered tax agent with more than 10 years of experience and a team that includes CPA and IPA members. We provide Australia-wide support through online and in-person appointments. Our role in SMSF establishment is to make the accounting, registration and ongoing compliance requirements clear, while recognizing where legal or licensed financial advice sits outside that scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {trustPillars.map((item, idx) => (
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

          {/* Call to Action Bar */}
          <div className="p-8 rounded-3xl bg-slate-900 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Planning to set up an Australian SMSF?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-zinc-400 max-w-xl font-normal">
                Book an appointment to discuss trustee structures, registrations, and establishment records.
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
