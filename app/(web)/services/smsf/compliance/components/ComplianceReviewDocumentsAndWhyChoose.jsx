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
 * ComplianceReviewDocumentsAndWhyChoose Component
 * ===============================================
 * Implements verbatim SEO content from Page 8 of 9th Pillar SMSF.docx:
 * - Annual SMSF compliance obligations (5-year vs 10-year retention)
 * - Documents that help with an SMSF compliance review (7 items)
 * - Why choose Financially Up?
 * Uses dynamic company details via `useCompany()`.
 */
export default function ComplianceReviewDocumentsAndWhyChoose() {
  const company = useCompany();

  const reviewDocuments = [
    "Current trust deed and any subsequent amendments",
    "Latest written investment strategy and trustee minutes",
    "Bank, investment, equities platform and property records",
    "Loan agreements and LRBA documentation where applicable",
    "Member contribution, rollover, and pension payment information",
    "Prior financial statements, annual returns, and audit reports",
    "ATO correspondence and details of any transaction causing concern",
  ];

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: `${company.legalName || "Financially Up Pty Ltd"} is a registered tax agent (TPB #${company.tpbNumber || "26242127"}) with more than 10 years of experience across accounting and superannuation compliance.`,
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      desc: "Our qualified specialists include CPA and IPA members dedicated to clear reporting and audit-ready governance workpapers.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      desc: "Our SMSF compliance support is designed to make the fund’s accounting and reporting position clear, while keeping specialist legal and financial advice boundaries properly separated.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section: Annual Compliance Obligations */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-16 w-full">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
            Annual SMSF compliance obligations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
            Each income year, an SMSF generally needs annual accounts and financial statements, an independent financial and compliance audit, and an SMSF annual return. The approved SMSF auditor must be appointed no later than 45 days before the annual return due date, and the audit must be completed before lodgement.
          </p>
          <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 mb-6 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
            <span className="font-bold text-slate-900 dark:text-white block mb-1">Record Retention Rules:</span>
            Trustees also need to keep appropriate records. Core accounting records and annual financial statements generally need to be retained for at least five years. The trust deed, trustee minutes, investment-strategy records, member and trustee changes, consents and other specified governance records generally need to be retained for at least 10 years. The applicable period depends on the document.
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-zinc-400">
            <span>Explore related services for annual reporting and audit coordination:</span>
            <div className="flex items-center gap-3">
              <Link href="/services/smsf/accounting">
                <Button type="link" size="small" className="text-emerald-600 dark:text-emerald-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                  SMSF Accounting
                </Button>
              </Link>
              <span className="text-slate-300 dark:text-zinc-700">•</span>
              <Link href="/services/smsf/audit-coordination">
                <Button type="link" size="small" className="text-emerald-600 dark:text-emerald-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                  Audit Coordination
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Section: Documents that Help with a Compliance Review */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-16 w-full">
          <div className="max-w-3xl mb-8">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/40 flex items-center justify-center mb-3">
              <FolderOpenOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Documents that help with an SMSF compliance review
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Providing these documents helps clarify the fund&apos;s legal and tax standing:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {reviewDocuments.map((doc, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/70 dark:border-zinc-800 text-xs sm:text-sm text-slate-700 dark:text-zinc-300"
              >
                <CheckCircleOutlined className="text-emerald-500 text-base mt-0.5 shrink-0" />
                <span>{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Section: Why Choose Financially Up? */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Credentials & Advisory Boundaries
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why choose Financially Up?
            </h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up is a registered tax agent with more than 10 years of experience. Our team includes CPA and IPA members and supports clients Australia-wide through online and in-person appointments. Our SMSF compliance support is designed to make the fund’s accounting and reporting position clear, while keeping specialist legal and financial advice boundaries properly separated.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {credentials.map((item, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-cyan-400/60 transition-all duration-300 flex flex-col justify-between"
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
                Want to check your SMSF’s compliance position?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-zinc-400 max-w-xl font-normal">
                Book an appointment to review the fund&apos;s records before year-end, audit or lodgement.
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
