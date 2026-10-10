"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  FileTextOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  IdcardOutlined,
  KeyOutlined,
  SwapOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * RenewalVsCompanyAnnualReviewAndHowWeHelp Component
 * =================================================
 * Section 4 of Business Name Renewal (/services/asic/business-name-renewal/):
 * 1. "Business name renewal is different from company annual review"
 * 2. "How Financially Up can help with business name renewal"
 * 3. "Information to have ready"
 * 4. "Why choose Financially Up?"
 *
 * Implements 100% complete, verbatim content from Page 4 of '7th Pillar ASIC.docx'.
 * Clean White alternating section, distinction callouts, credentials, and dynamic phone action.
 */
export default function RenewalVsCompanyAnnualReviewAndHowWeHelp() {
  const company = useCompany();

  const infoReadyList = [
    { icon: <FileTextOutlined />, label: "Registered business name" },
    { icon: <IdcardOutlined />, label: "Associated Australian Business Number (ABN)" },
    { icon: <CalendarOutlined />, label: "Renewal notice or ASIC correspondence" },
    { icon: <IdcardOutlined />, label: "Current contact & service addresses" },
    { icon: <SwapOutlined />, label: "Information on recent ownership or structural changes" },
    { icon: <KeyOutlined />, label: "ASIC Connect account access details (if linked)" },
  ];

  const credentials = [
    { value: "10+ Years", label: "Business Advisory" },
    { value: "CPA & IPA", label: "Qualified Specialists" },
    { value: "TPB Registered", label: "Registered Tax Agent" },
    { value: "Australia-Wide", label: "Online & In-Person" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: Business name renewal is different from company annual review */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Important Regulatory Distinction
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Business name renewal is different from company annual review
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              A business name renewal and a company annual review are separate ASIC processes. A company can hold a business name, but renewing that business name does not complete the company&apos;s annual review obligations. Similarly, paying a company annual review fee does not renew a separate business name registration.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              If you operate through a company and want help managing company records and ASIC correspondence as well, our{" "}
              <Link href="/services/asic" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                ASIC compliance services
              </Link>{" "}
              and{" "}
              <Link href="/services/asic/registered-agent" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                ASIC registered agent service
              </Link>{" "}
              cover the company-side administration separately.
            </p>
          </div>
        </div>

        {/* Subsection 2: How Financially Up can help with business name renewal & Info to have ready */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Administrative Guidance & Checklist
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help with business name renewal
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can assist by reviewing the renewal notice and registration details, confirming the relevant business name and holder information, helping identify whether a straightforward renewal is appropriate, and assisting with the renewal process. If the issue reveals a broader company or structure change, we can explain the accounting and registration implications within our scope and identify where additional legal advice may be required.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-4">
              Information to have ready
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
              The information needed will depend on the circumstances, but it is useful to have the business name, ABN, renewal notice or ASIC correspondence, current contact details and information about any recent change to ownership or structure. If the business name is linked to an ASIC Connect account, access details may also be relevant.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {infoReadyList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/70 dark:border-zinc-800 flex items-center gap-2.5 text-xs text-slate-700 dark:text-zinc-300 font-medium"
                >
                  <span className="text-emerald-600 dark:text-emerald-400 text-sm shrink-0">
                    {item.icon}
                  </span>
                  <span>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Subsection 3: Why choose Financially Up? */}
        <div className="w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Professional Business Advisory
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why choose Financially Up?
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal mb-8">
              Financially Up is a registered tax agent with more than 10 years of experience across accounting, taxation, bookkeeping and business advisory work. Our team includes CPA and IPA professionals, and we support clients Australia-wide through online appointments as well as in-person appointments. For business name matters, the focus is practical: understand the registration, complete the required administration and identify any related accounting or structure issue without turning a straightforward renewal into unnecessary work.
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-slate-800 mb-8">
              {credentials.map((c, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-xl sm:text-2xl font-extrabold text-emerald-400">
                    {c.value}
                  </div>
                  <div className="text-xs text-slate-400 mt-1 uppercase tracking-wider">
                    {c.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link href="/book-an-appointment" className="w-full sm:w-auto">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full sm:w-auto rounded-xl font-bold bg-emerald-500 hover:bg-emerald-400 text-slate-950 border-none h-11"
                >
                  Book an Appointment
                </Button>
              </Link>

              {company?.phone && (
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="large"
                    icon={<PhoneOutlined />}
                    className="w-full sm:w-auto rounded-xl font-bold bg-transparent border-slate-700 text-slate-200 hover:border-emerald-400 hover:text-white h-11"
                  >
                    Call {company.phone}
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
