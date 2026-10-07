"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  SolutionOutlined,
  FileProtectOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  PhoneOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsTrusts Component
 * =====================================
 * Sections: "How Financially Up can help" and "Why choose Financially Up?"
 * Verbatim text from Page 11 of client docx.
 * Connects with Trust Tax Returns and Business Tax & Accounting services.
 * Dynamically accesses company phone via useCompany().
 */
export default function HowFinanciallyUpHelpsTrusts() {
  const company = useCompany();

  const servicesList = [
    {
      title: "Expected Income Review",
      desc: "Reviewing expected trust accounting income and tax net income ahead of 30 June to evaluate distributable amounts.",
    },
    {
      title: "Deed & Record Alignment",
      desc: "Checking accounting records against the trust deed information supplied to ensure trustee resolutions operate intra vires.",
    },
    {
      title: "Beneficiary Allocation Advice",
      desc: "Discussing proposed beneficiary allocations, marginal tax rates, streaming powers, and Section 100A integrity considerations.",
    },
    {
      title: "Tax Return & Beneficiary Reporting",
      desc: "Preparing or reviewing tax calculations and ensuring distribution information is reflected consistently in the trust tax return.",
    },
  ];

  const credentials = [
    "Registered Tax Agent with the Tax Practitioners Board",
    "Over 10 years of experience in Australian accounting & taxation",
    "Professional team includes CPA and IPA members",
    "Australia-wide support via online and in-person appointments",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section 1: How Financially Up Can Help */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Expert Trustee Advisory
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our trust distribution services can include reviewing expected trust income, checking accounting records against the trust deed information supplied, discussing proposed beneficiary allocations, preparing or reviewing tax calculations, and ensuring the distribution information is reflected consistently in the trust tax return and beneficiary reporting.
          </p>
        </div>

        {/* 4 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {servicesList.map((srv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {srv.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {srv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Cross-Service Links & Legal Disclaimer (Verbatim) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 mb-16 space-y-4">
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
            We can also assist with the annual{" "}
            <Link
              href="/services/business-tax/trust-tax-returns"
              className="text-teal-600 dark:text-teal-400 font-semibold underline underline-offset-4 hover:text-teal-700"
            >
              Trust Tax Return
            </Link>{" "}
            and broader{" "}
            <Link
              href="/services/business-tax"
              className="text-teal-600 dark:text-teal-400 font-semibold underline underline-offset-4 hover:text-teal-700"
            >
              Business Tax & Accounting
            </Link>{" "}
            work.
          </p>
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <FileProtectOutlined className="text-teal-600 dark:text-teal-400" />
              Legal Advice & Drafting Coordination
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
              Legal interpretation of a trust deed, trust-law disputes or specialist legal drafting may require advice from an appropriately qualified lawyer.
            </p>
          </div>
        </div>

        {/* Section 2: Why Choose Financially Up? */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <div className="max-w-3xl mb-8">
            <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Client Trust & Qualifications
            </Tag>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why choose Financially Up?
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              {company?.legalName || "Financially Up Pty Ltd"} is a registered tax agent providing accounting, taxation, bookkeeping and business advisory services. We have 10+ years of experience, our professional team includes CPA and IPA members, and we work with clients across Australia through online and in-person appointments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {credentials.map((cred, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-base shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-200">
                  {cred}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-200/80 dark:border-zinc-800">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                className="brand-btn-primary font-semibold rounded-xl"
                icon={<CalendarOutlined />}
              >
                Book an Appointment
              </Button>
            </Link>
            {company?.phone && (
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                <Button
                  size="large"
                  className="font-semibold rounded-xl border-slate-300 dark:border-zinc-700 dark:text-zinc-200 hover:border-teal-500 hover:text-teal-600"
                  icon={<PhoneOutlined />}
                >
                  Call {company.phone}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
