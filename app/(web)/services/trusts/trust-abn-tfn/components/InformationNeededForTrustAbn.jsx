"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileTextOutlined,
  BankOutlined,
  UserOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  AuditOutlined,
  EnvironmentOutlined,
  CalendarOutlined,
  NumberOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededForTrustAbn Component
 * =======================================
 * Section: What information is needed for a trust ABN application?
 * Verbatim text from Page 10 of client docx (8th Pillar Trust Services.docx).
 * Features 8 verbatim checklist items, explanation of legal/operating position,
 * and cross-link to Corporate Trustee service.
 */
export default function InformationNeededForTrustAbn() {
  const checklistItems = [
    {
      icon: <FileTextOutlined className="text-teal-600 dark:text-teal-400" />,
      text: "the trust name and date of establishment",
    },
    {
      icon: <AuditOutlined className="text-blue-600 dark:text-blue-400" />,
      text: "the trust deed or other establishing document",
    },
    {
      icon: <UserOutlined className="text-purple-600 dark:text-purple-400" />,
      text: "the trustee's legal name and identifying details",
    },
    {
      icon: <BankOutlined className="text-teal-600 dark:text-teal-400" />,
      text: "the ACN and company details where the trustee is a company",
    },
    {
      icon: <UserOutlined className="text-indigo-600 dark:text-indigo-400" />,
      text: "details of relevant associates or beneficiaries where required",
    },
    {
      icon: <CalendarOutlined className="text-amber-600 dark:text-amber-400" />,
      text: "the trust's principal activities and the date those activities commenced or are expected to commence",
    },
    {
      icon: <EnvironmentOutlined className="text-rose-600 dark:text-rose-400" />,
      text: "business locations and authorised contact details",
    },
    {
      icon: <NumberOutlined className="text-emerald-600 dark:text-emerald-400" />,
      text: "existing tax registrations and any previously held ABN relevant to the application.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Documentation & Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What information is needed for a trust ABN application?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The application should be based on the trust&apos;s actual legal and operating position. Depending on the
            circumstances, information may include:
          </p>
        </div>

        {/* 8 Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-12">
          {checklistItems.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-start"
            >
              <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-3 shrink-0">
                {item.icon}
              </div>
              <p className="text-xs sm:text-sm font-medium text-slate-800 dark:text-zinc-200 leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </div>

        {/* Corporate Trustee Callout & Cross-Link */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Corporate Trustee Structure Separation
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If the trust has a company acting as trustee, our{" "}
              <Link
                href="/services/trusts/corporate-trustee"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Corporate Trustee service
              </Link>{" "}
              covers the company-side trustee structure and ongoing administration. The ABN and TFN recorded for the
              trust&apos;s activities and tax affairs remain separate from the corporate trustee&apos;s own identifiers.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/services/trusts/corporate-trustee"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors w-full md:w-auto"
            >
              Corporate Trustee Hub <ArrowRightOutlined className="ml-2 text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
