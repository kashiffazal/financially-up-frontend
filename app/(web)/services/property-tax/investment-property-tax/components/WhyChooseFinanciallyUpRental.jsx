"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  PhoneOutlined,
  MailOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpRental Component
 * ======================================
 * Section: How Financially Up can help.
 * Features 100% complete, verbatim content from Page 2 of 10th Pillar Property Tax.docx.
 * Dynamically resolves company details via useCompany() hook.
 */
export default function WhyChooseFinanciallyUpRental() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      subtitle: "TPB Registered Agent #26234055",
    },
    {
      icon: <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Specialists",
      subtitle: "Qualified Accounting & Tax Team",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Australia-Wide Support",
      subtitle: "100% Online & In-Person Appointments",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Trusted Property Advisors
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
        </div>

        {/* 2 Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1 */}
          <div className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <CheckCircleOutlined />
              <span>Comprehensive Rental Review</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Financially Up can prepare and review rental property tax reporting, reconcile records where information is incomplete, classify expenses, identify amounts that require capital treatment and coordinate related CGT or planning work where separately engaged.
            </p>
          </div>

          {/* Paragraph 2 */}
          <div className="bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
              <CheckCircleOutlined />
              <span>Registered Professional Practice</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              Financially Up is a registered tax agent with more than 10 years of experience. Our team includes CPA and IPA professionals, with Australia-wide online support and in-person appointment options.
            </p>
          </div>
        </div>

        {/* 3 Credential Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-5 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:border-emerald-400/60 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 border border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-center shrink-0">
                {cred.icon}
              </div>
              <div>
                <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                  {cred.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  {cred.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Contact Banner utilizing useCompany() */}
        <div className="bg-gradient-to-r from-slate-900 via-emerald-950 to-slate-900 text-white rounded-2xl p-7 sm:p-10 shadow-lg border border-emerald-900/40 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="text-center lg:text-left">
            <h3 className="text-lg sm:text-xl font-bold mb-2">
              Speak with a Property Tax Accountant at {company?.legalName || "Financially Up"}
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-normal">
              Get your rental property tax return prepared with accuracy, maximizing eligible deductions while remaining 100% compliant with ATO requirements.
            </p>
            {company?.phone && (
              <div className="mt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs sm:text-sm">
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                >
                  <PhoneOutlined /> {company.phone}
                </a>
                {company?.email && (
                  <a
                    href={`mailto:${company.email}`}
                    className="inline-flex items-center gap-2 text-emerald-400 hover:text-emerald-300 font-semibold transition-colors"
                  >
                    <MailOutlined /> {company.email}
                  </a>
                )}
              </div>
            )}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                className="brand-btn-primary h-12 px-7 font-bold shadow-md"
              >
                Book an Appointment <ArrowRightOutlined />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
