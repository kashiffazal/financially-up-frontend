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
  FileSearchOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhatFinanciallyUpReviewsGst Component
 * =====================================
 * Section: What Financially Up reviews.
 * Features 100% complete, verbatim content from Page 6 of 10th Pillar Property Tax.docx.
 * Dynamically resolves company details via useCompany() hook.
 */
export default function WhatFinanciallyUpReviewsGst() {
  const company = useCompany();

  const reviewItems = [
    "The acquisition, intended use and transaction history",
    "Whether the proposed activities constitute an enterprise",
    "GST registration and taxable-supply requirements",
    "The GST character of a proposed purchase, sale or lease",
    "Potential GST credits and change-of-use adjustments",
    "Margin scheme eligibility and calculations",
    "GST withholding, supplier notices and activity-statement reporting",
  ];

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
            Advisory Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Financially Up Reviews
          </h2>
          {/* Verbatim Paragraph 1 */}
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Our GST property accountant services can cover:
          </p>
        </div>

        {/* 7 Review Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {reviewItems.map((item, idx) => (
            <div
              key={idx}
              className={`bg-slate-50/70 dark:bg-zinc-900/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md hover:border-emerald-400/60 transition-all flex items-start gap-3.5 ${
                idx === 6 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 font-bold flex items-center justify-center shrink-0 text-xs">
                0{idx + 1}
              </div>
              <p className="text-xs sm:text-sm font-semibold text-slate-800 dark:text-zinc-200 leading-snug">
                {item}
              </p>
            </div>
          ))}
        </div>

        {/* 2 Verbatim Text Highlights */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 2 */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
              <FileSearchOutlined />
              <span>Requested Documents &amp; Scope Tailoring</span>
            </div>
            {/* Verbatim text from official document */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
              We may request contracts, settlement statements, tax invoices, development plans, lease information, finance documents and previous activity statements. Tax advice before a transaction, detailed project modelling and annual compliance work are scoped according to the matter.
            </p>
          </div>

          {/* Paragraph 3 & CGT Link */}
          <div className="bg-slate-50/80 dark:bg-zinc-900/80 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <CheckCircleOutlined />
                <span>CGT Calculation Coordination</span>
              </div>
              {/* Verbatim text from official document */}
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Where a sale also requires a capital gain or loss calculation, our Property Capital Gains Tax service covers that separate income-tax issue.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200/70 dark:border-zinc-800">
              <Link href="/services/property-tax/property-capital-gains-tax">
                <Button
                  type="default"
                  className="brand-btn-secondary w-full sm:w-auto font-medium"
                >
                  Explore Property Capital Gains Tax <ArrowRightOutlined />
                </Button>
              </Link>
            </div>
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
              Discuss Your Property Transaction with {company?.legalName || "Financially Up"}
            </h3>
            {/* Verbatim text from official document */}
            <p className="text-xs sm:text-sm text-slate-300 max-w-xl font-normal">
              Bring the proposed contract, acquisition documents, ownership structure and a summary of how the property has been or will be used. Financially Up can identify the GST questions, review the available information and explain what should be resolved before you proceed.
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
