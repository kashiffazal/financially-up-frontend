"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  CalendarOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * PropertyRecordsChecklistAndSupport Component
 * ============================================
 * Implements verbatim SEO content from Page 4 of 9th Pillar SMSF.docx:
 * - Records to keep for an SMSF property (8 core record items)
 * - How Financially Up can help
 * - Why choose Financially Up?
 * Uses dynamic company details via `useCompany()`.
 */
export default function PropertyRecordsChecklistAndSupport() {
  const company = useCompany();

  const propertyRecordsList = [
    "Purchase and sale contracts, settlement statements and conveyancing records",
    "Loan statements and LRBA documents where applicable",
    "Property-manager statements, leases and rent records",
    "Rates, insurance, repairs, maintenance and other invoices",
    "Capital improvement, renovation and construction records",
    "Capital works and depreciation schedules where used",
    "Annual valuation evidence and the basis used by the trustees",
    "Related-party agreements and evidence supporting market-value terms",
  ];

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: `${company.legalName || "Financially Up Pty Ltd"} is a registered tax agent (registration number ${company.tpbNumber || "26242127"}) with more than 10 years of experience across accounting, taxation, bookkeeping and business advisory work.`,
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Professionals",
      desc: "Our qualified specialists include CPA and IPA professionals with dedicated training in Australian superannuation and real estate tax accounting.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      desc: "We support SMSF trustees Australia-wide through online appointments, with in-person appointments also available.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section: Records to Keep */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center mb-3">
              <FolderOpenOutlined className="text-xl text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Records to keep for an SMSF property
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Trustees must retain comprehensive supporting records to satisfy statutory annual audit and ATO compliance requirements:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {propertyRecordsList.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/70 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300"
              >
                <CheckCircleOutlined className="text-emerald-500 text-base mt-0.5 shrink-0" />
                <span>{rec}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: How Financially Up Can Help */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Accounting & Compliance Scope
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help
            </h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can reconcile property activity, prepare accounting and tax schedules, organize audit information and coordinate the property with the fund&apos;s annual compliance work. Tax planning or transaction advice can be scoped separately. Legal documents, credit assistance and financial product recommendations require the appropriate professional.
            </p>
          </div>
        </div>

        {/* Section: Why Choose Financially Up? */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Credentials & Trust
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why choose Financially Up?
            </h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up Pty Ltd is a registered tax agent (registration number {company.tpbNumber || "26242127"}) with more than 10 years of experience across accounting, taxation, bookkeeping and business advisory work. Our team includes CPA and IPA professionals. We support SMSF trustees Australia-wide through online appointments, with in-person appointments also available.
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
                Have questions about your SMSF property records?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-zinc-400 max-w-xl font-normal">
                Book an appointment to discuss property records, annual accounting position, and audit readiness.
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
