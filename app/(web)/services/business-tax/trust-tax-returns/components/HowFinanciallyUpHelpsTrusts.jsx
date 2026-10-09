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
 * HowFinanciallyUpHelpsTrusts Component
 * =====================================
 * Sections: How Financially Up Can Help & Why Choose Financially Up
 * Features 100% complete, verbatim content from Page 3 of client docx.
 * Dynamic company contact integration via useCompany().
 */
export default function HowFinanciallyUpHelpsTrusts() {
  const company = useCompany();

  const serviceCapabilities = [
    {
      icon: (
        <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Trust Accounting & Accounts Preparation",
      desc: "Comprehensive preparation of balance sheets, profit and loss statements, and beneficiary account reconciliations.",
    },
    {
      icon: (
        <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Trust Tax Return Lodgment",
      desc: "Accurate preparation and lodgment of annual trust income tax returns and statutory ATO schedules.",
    },
    {
      icon: (
        <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Distribution Reporting & Beneficiary Statements",
      desc: "Preparation of distribution statements, capital gain allocations, franking credit records, and beneficiary tax summaries.",
    },
    {
      icon: (
        <ApartmentOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Separately Scoped Advisory",
      desc: "Tailored specialist scoping for complex issues: unusual distribution arrangements, trust losses, Division 7A interactions, restructuring, or detailed planning.",
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
      desc: "More than a decade of proven expertise across trust estates, business tax compliance, and Australian private client accounting.",
    },
    {
      icon: (
        <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      title: "CPA & IPA Members",
      desc: "Senior practitioners holding CPA and IPA professional memberships, adhering to rigorous technical and ethical benchmarks.",
    },
    {
      icon: (
        <EnvironmentOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Australia-Wide Support",
      desc: "Appointments can be arranged online, by phone or in person where preferred, supporting trustees in Sydney, Melbourne, Brisbane, and across all states.",
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
            Financially Up can assist with trust accounting, trust tax return
            preparation, distribution reporting and related business tax work.
            Where the trust has more involved issues—such as unusual
            distribution arrangements, trust losses, Division 7A interactions,
            restructuring or detailed planning—the advisory work can be
            separately scoped.
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

        {/* Section 2: Why Choose Financially Up */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Practitioner Credentials
          </Tag>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Financially Up
          </h3>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up is a registered tax agent with more than 10 years of
            experience across accounting and tax services. The team includes CPA
            and IPA members and supports clients Australia-wide. Appointments
            can be arranged online, by phone or in person where preferred.
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
            <Link href="/contact">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Book Trust Consultation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
