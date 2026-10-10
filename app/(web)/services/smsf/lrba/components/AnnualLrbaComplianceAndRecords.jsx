"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  CalendarOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * AnnualLrbaComplianceAndRecords Component
 * ========================================
 * Implements verbatim SEO content from Page 5 of 9th Pillar SMSF.docx:
 * - Annual LRBA compliance and records (8-point checklist)
 * - How Financially Up can help with SMSF LRBA compliance
 * - Why choose Financially Up?
 * Uses dynamic company details via `useCompany()`.
 */
export default function AnnualLrbaComplianceAndRecords() {
  const company = useCompany();

  const lrbaChecklist = [
    "Executed loan agreement and any variations or refinancing documents",
    "Holding trust or bare trust deed and trustee details",
    "Purchase contract, settlement statement and ownership evidence",
    "Loan statements covering the full financial year",
    "Evidence of principal, interest and other payments",
    "Asset income, expenses and insurance records",
    "Related-party lending evidence and arm’s-length comparisons where relevant",
    "Valuation evidence and details of repairs, renovations or changes in use",
  ];

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: `${company.legalName || "Financially Up Pty Ltd"} is a registered tax agent (registration number ${company.tpbNumber || "26242127"}) with more than 10 years of experience.`,
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Professionals",
      desc: "Our qualified specialists include CPA and IPA professionals with deep experience across complex superannuation borrowing compliance.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      desc: "We provide Australia-wide support through online appointments, with in-person appointments also available. Our LRBA work focuses on accurate accounting, tax reporting and practical compliance support.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section: Annual LRBA Records Checklist */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-16">
          <div className="max-w-3xl mb-8">
            <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center mb-3">
              <FolderOpenOutlined className="text-xl text-purple-600 dark:text-purple-400" />
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Annual LRBA compliance and records
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The LRBA must be reflected in the SMSF&apos;s annual accounts, tax calculations and audit file. Where the acquired asset is property, the ordinary property rules also apply, including annual market-value evidence, related-party restrictions and correct treatment of income and expenses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {lrbaChecklist.map((rec, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/70 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300"
              >
                <CheckCircleOutlined className="text-emerald-500 text-base mt-0.5 shrink-0" />
                <span>{rec}</span>
              </div>
            ))}
          </div>

          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-zinc-400">
            <span>Explore related services for detailed property or general annual accounts:</span>
            <div className="flex items-center gap-3">
              <Link href="/services/smsf/property">
                <Button type="link" size="small" className="text-purple-600 dark:text-purple-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                  SMSF Property
                </Button>
              </Link>
              <span className="text-slate-300 dark:text-zinc-700">•</span>
              <Link href="/services/smsf/accounting">
                <Button type="link" size="small" className="text-purple-600 dark:text-purple-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                  SMSF Accounting
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Section: How Financially Up Can Help */}
        <div className="mb-16">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Professional Service Scope
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help with SMSF LRBA compliance
            </h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can review the records against the LRBA, reconcile the borrowing, prepare asset and liability balances, account for income and expenses, prepare audit schedules and coordinate the arrangement with the annual accounts and tax return.
            </p>
            <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For a proposed arrangement, our role can help identify the accounting records and entity details required. A new fund may also need our SMSF establishment service. Legal structure, lending and financial product advice remain separate professional services.
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
              Financially Up Pty Ltd is a registered tax agent (registration number {company.tpbNumber || "26242127"}) with more than 10 years of experience. Our team includes CPA and IPA professionals. We provide Australia-wide support through online appointments, with in-person appointments also available. Our LRBA work focuses on accurate accounting, tax reporting and practical compliance support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {credentials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-purple-400/60 transition-all duration-300 flex flex-col justify-between"
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
                Have questions about your SMSF borrowing arrangement?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-zinc-400 max-w-xl font-normal">
                Book an appointment to review borrowing records, arrangement dates, and audit readiness.
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
