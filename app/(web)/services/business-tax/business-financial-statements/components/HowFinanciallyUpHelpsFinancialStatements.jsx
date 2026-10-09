"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ApartmentOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsFinancialStatements Component
 * ==================================================
 * Sections: How Financially Up Can Help & Why Choose Financially Up?
 * Features 100% complete, verbatim content from Page 6 of client docx.
 * Dynamic company contact integration via useCompany().
 */
export default function HowFinanciallyUpHelpsFinancialStatements() {
  const company = useCompany();

  const serviceCapabilities = [
    {
      icon: (
        <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Financial Statement Preparation",
      desc: "Structured profit and loss statements, balance sheets, and supporting schedules compiled from business accounting records.",
    },
    {
      icon: (
        <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Accounting Review & Reconciliation",
      desc: "Reconciling bank accounts, loan ledgers, debtors, creditors, fixed assets, and control accounts before statements are finalized.",
    },
    {
      icon: (
        <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Coordinated Tax Preparation",
      desc: "Where the statements feed into a tax return, we coordinate the accounting information with the relevant company, trust, partnership or sole trader tax return.",
    },
    {
      icon: (
        <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Separately Scoped Reporting",
      desc: "Statutory financial reporting, general purpose financial statements, audit and assurance work are not assumed to be included and must be separately assessed and scoped.",
    },
  ];

  const credentials = [
    {
      icon: (
        <SafetyCertificateOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />
      ),
      title: "Registered Tax Agent",
      desc: `Financially Up is a registered tax agent (TPB #${company?.tpbNumber || "26234055"}), providing authorized ATO representation and lodgment program extensions.`,
    },
    {
      icon: (
        <ClockCircleOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
      title: "10+ Years of Experience",
      desc: "More than 10 years of experience in business accounting, financial reporting, and Australian taxation.",
    },
    {
      icon: (
        <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      title: "CPA & IPA Members",
      desc: "Our professional team includes qualified CPA and IPA members maintaining rigorous accounting quality standards.",
    },
    {
      icon: (
        <EnvironmentOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Australia-Wide Support",
      desc: "We work with clients Australia-wide through online appointments, with in-person meetings available where preferred.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: How Financially Up Can Help */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Professional Assistance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can provide financial statement preparation,
            accounting review and related business reporting. Where the
            statements feed into a tax return, we can coordinate the accounting
            information with the relevant tax work. For broader tax matters, see
            Business Tax &amp; Accounting.
          </p>
        </div>

        {/* 4 Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 sm:mb-20">
          {serviceCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Cross-Service Context Strip */}
        <div className="p-6 rounded-2xl bg-white dark:bg-zinc-800/80 border border-slate-200 dark:border-zinc-700 mb-16 text-center max-w-3xl mx-auto shadow-sm">
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            If the reporting relates specifically to a partnership, see our
            Partnership Tax Returns service. Sole traders can also review our
            Sole Trader Tax page for business tax and accounting support.
          </p>
        </div>

        {/* Section 2: Why Choose Financially Up? */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Practitioner Credentials
          </Tag>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Financially Up?
          </h3>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up is a registered tax agent with more than 10 years of
            experience in accounting and taxation. Our professional team
            includes CPA and IPA members. We work with clients Australia-wide
            through online appointments, with in-person meetings available where
            preferred.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="mb-4">{cred.icon}</div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {cred.title}
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {cred.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-6 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
            {company?.phone && (
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-brand-primary dark:hover:text-emerald-400 font-semibold transition-colors"
              >
                <PhoneOutlined className="text-brand-primary dark:text-emerald-400" />
                <span>{company.phone}</span>
              </a>
            )}
            {company?.email && (
              <a
                href={`mailto:${company.email}`}
                className="flex items-center gap-2 hover:text-brand-primary dark:hover:text-emerald-400 font-semibold transition-colors"
              >
                <MailOutlined className="text-brand-primary dark:text-emerald-400" />
                <span>{company.email}</span>
              </a>
            )}
            {company?.address && (
              <span className="flex items-center gap-2 text-slate-500 dark:text-zinc-400">
                <EnvironmentOutlined />
                <span>{company.address}</span>
              </span>
            )}
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Book Reporting Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
