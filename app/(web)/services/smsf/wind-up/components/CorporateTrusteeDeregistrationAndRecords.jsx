"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FolderOpenOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  CalendarOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * CorporateTrusteeDeregistrationAndRecords Component
 * ==================================================
 * Implements verbatim SEO content from Page 9 of 9th Pillar SMSF.docx:
 * - What about a corporate trustee after the SMSF closes? (ASIC deregistration)
 * - How Financially Up can help with an SMSF wind up
 * - Information to have ready (7 items)
 * - Why choose Financially Up?
 * Uses dynamic company details via `useCompany()`.
 */
export default function CorporateTrusteeDeregistrationAndRecords() {
  const company = useCompany();

  const requiredDocuments = [
    "Current trust deed and any subsequent amendments",
    "Latest member statements and benefit balances",
    "Bank, broker, platform, property and investment records",
    "Details of liabilities, unpaid expenses, and accrued liabilities",
    "Prior financial statements, annual returns, and audit reports",
    "Details of proposed rollovers or benefit payments (SuperStream details)",
    "Corporate trustee information where applicable (ASIC records, ACN)",
  ];

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: `${company.legalName || "Financially Up Pty Ltd"} is a registered tax agent (TPB #${company.tpbNumber || "26242127"}) with more than 10 years of experience across accounting and superannuation tax.`,
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      desc: "Our team includes CPA and IPA members providing rigorous, orderly final accounting workpapers.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Service",
      desc: "We support clients Australia-wide through online calendar appointments as well as in-person consultations.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section: Corporate Trustee Deregistration */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-16 w-full">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800/40 flex items-center justify-center shrink-0">
              <BankOutlined className="text-2xl text-purple-600 dark:text-purple-400" />
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
                What about a corporate trustee after the SMSF closes?
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If the SMSF has a corporate trustee, the company is separate from the fund. If that company was used only as the SMSF trustee and is no longer required, the directors may need to consider whether the company should be deregistered with ASIC after the fund is finalized. Company deregistration is a separate process and should not be confused with closing the SMSF itself.
              </p>
            </div>
          </div>
        </div>

        {/* Section: How Financially Up Can Help */}
        <div className="mb-16 w-full">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Orderly Finalization Scope
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help with an SMSF wind up
            </h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              We can review the fund’s accounting position, identify outstanding records and lodgements, prepare final accounts, coordinate the independent final audit, prepare the final SMSF annual return and assist with administrative steps within scope. Where the fund has property, complex asset transfers, legal disputes or benefit decisions requiring regulated advice, additional specialists may be needed.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-600 dark:text-zinc-400 shadow-2xs">
            <span>Not yet ready to close? Catch up on overdue records first:</span>
            <Link href="/services/smsf/administration">
              <Button type="link" size="small" className="text-purple-600 dark:text-purple-400 p-0 font-semibold" icon={<ArrowRightOutlined />} iconPlacement="end">
                Explore SMSF Administration
              </Button>
            </Link>
          </div>
        </div>

        {/* Section: Information to have ready */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-16 w-full">
          <div className="max-w-3xl mb-8">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-200 dark:border-cyan-800/40 flex items-center justify-center mb-3">
              <FolderOpenOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Information to have ready
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Assembling these core items speeds up final accounts preparation and audit coordination:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {requiredDocuments.map((doc, idx) => (
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
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Credentials & Trust
            </Tag>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why choose Financially Up?
            </h3>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up is a registered tax agent with more than 10 years of experience. Our team includes CPA and IPA members, and we provide Australia-wide support through online and in-person appointments. For SMSF winding up services, our role is to help make the accounting, audit and final reporting steps clear and properly sequenced.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 w-full">
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
          <div className="p-8 rounded-3xl bg-slate-900 text-white dark:bg-zinc-900 dark:border dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6 w-full">
            <div>
              <h4 className="text-lg sm:text-xl font-bold text-white mb-1">
                Ready to close your SMSF properly?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 dark:text-zinc-400 max-w-xl font-normal">
                Book an appointment to review remaining assets, final audit requirements, and ATO closure steps.
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
