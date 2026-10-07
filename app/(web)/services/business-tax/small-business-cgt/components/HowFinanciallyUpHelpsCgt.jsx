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
 * HowFinanciallyUpHelpsCgt Component
 * ==================================
 * Sections: "How Financially Up can help" and "Why choose Financially Up?"
 * Verbatim text from Page 12 of client docx.
 * Connects with Company Tax Returns and Business Tax & Accounting services.
 * Dynamically accesses company phone via useCompany().
 */
export default function HowFinanciallyUpHelpsCgt() {
  const company = useCompany();

  const servicesList = [
    {
      title: "Underlying Capital Gain Calculation",
      desc: "Calculating the underlying capital gain, cost base elements, indexation or discount, and net proceeds from the disposal.",
    },
    {
      title: "Basic Conditions & Aggregation",
      desc: "Reviewing the basic conditions, analyzing connected entities and affiliates, and testing the $2M turnover or $6M net asset thresholds.",
    },
    {
      title: "Active Asset Verification",
      desc: "Checking active-asset history, business usage periods, and commercial property relationships to verify eligibility.",
    },
    {
      title: "Concession Modelling & Tax Returns",
      desc: "Considering additional conditions for the relevant concession and preparing supporting calculations and tax-return disclosures.",
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
            Expert Advisory & Tax Calculations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our small business CGT work can include calculating the underlying capital gain, reviewing the basic conditions, analyzing connected entities and affiliates, checking active-asset history, considering the additional conditions for the relevant concession and preparing supporting tax calculations.
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

        {/* Cross-Service Links & Specialist Advice Scoping (Verbatim) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 mb-16 space-y-4">
          <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
            Where the gain forms part of a company return or broader business transaction, the work can be coordinated with our{" "}
            <Link
              href="/services/business-tax/company-tax-returns"
              className="text-teal-600 dark:text-teal-400 font-semibold underline underline-offset-4 hover:text-teal-700"
            >
              Company Tax Returns
            </Link>{" "}
            or{" "}
            <Link
              href="/services/business-tax"
              className="text-teal-600 dark:text-teal-400 font-semibold underline underline-offset-4 hover:text-teal-700"
            >
              Business Tax & Accounting
            </Link>{" "}
            services.
          </p>
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700">
            <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1 flex items-center gap-2">
              <FileProtectOutlined className="text-teal-600 dark:text-teal-400" />
              Scope of Transaction-Specific Planning
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-normal leading-relaxed">
              Transaction-specific tax planning or restructuring advice is separately scoped and should be obtained early. Some transactions may also require legal, valuation, superannuation or other specialist advice outside the normal tax-return engagement.
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
              {company?.legalName || "Financially Up"} is a registered tax agent with 10+ years of experience. Our professional team includes CPA and IPA members and provides tax, accounting, bookkeeping and business advisory support Australia-wide, with online and in-person appointments available.
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
