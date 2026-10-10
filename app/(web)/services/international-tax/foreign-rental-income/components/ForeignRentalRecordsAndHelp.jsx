"use client";

import React from "react";
import Link from "next/link";
import { useCompany } from "@/context/SettingsContext";
import {
  FileTextOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  CheckCircleFilled,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

/**
 * ForeignRentalRecordsAndHelp Component
 * =====================================
 * Section 4: Records to bring & How Financially Up can help
 * Exact verbatim content from Client Document (Page 5) with dynamic useCompany() hook.
 */
export default function ForeignRentalRecordsAndHelp() {
  const company = useCompany();

  const recordsToBring = [
    "Lease agreements, property manager statements and rent receipts",
    "Purchase, title and co-ownership documents",
    "Invoices, local authority charges, insurance and repair records",
    "Loan contracts, statements, redraws and refinancing documents",
    "Evidence of advertising, vacancies and private-use periods",
    "Foreign tax assessments, withholding records, payments and refunds",
    "Australian residency dates and relevant valuation records",
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Records to bring */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
              <FileTextOutlined /> Substantiation Schedule
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              Records to Bring
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-8">
              To ensure every allowable deduction is substantiated and properly converted, please provide the following documentation:
            </p>

            <div className="space-y-3.5">
              {recordsToBring.map((rec, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3.5 shadow-xs"
                >
                  <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug">
                    {rec}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How Financially Up can help & Company Credentials */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6">
                <AuditOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                How Financially Up Can Help
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                We can review residency and ownership, prepare an Australian rental calculation from the available records, assess expense categories, translate relevant amounts and consider how overseas tax is reported. We agree whether the engagement covers only the current return or also requires prior-year amendments, residency advice or a separate review of a proposed sale.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent. Our team includes CPA and IPA members and has more than 10 years of experience. We offer online and in-person appointments across Australia and explain where another country's law requires local advice.
              </p>

              {/* Dynamic Company Details */}
              <div className="pt-6 border-t border-slate-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                  <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />
                  <span>Registered Tax Agent: <strong>TPB #{company.abn || "26234055"}</strong></span>
                </div>
                {company.phone && (
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    <PhoneOutlined className="text-teal-600 dark:text-teal-400" />
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:underline font-medium text-slate-900 dark:text-white">
                      {company.phone}
                    </a>
                  </div>
                )}
                {company.email && (
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    <MailOutlined className="text-teal-600 dark:text-teal-400" />
                    <a href={`mailto:${company.email}`} className="hover:underline font-medium text-slate-900 dark:text-white">
                      {company.email}
                    </a>
                  </div>
                )}
              </div>

              <div className="mt-8">
                <Link
                  href="/book-an-appointment"
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-teal-600 hover:bg-teal-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <CalendarOutlined /> Book an Appointment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
