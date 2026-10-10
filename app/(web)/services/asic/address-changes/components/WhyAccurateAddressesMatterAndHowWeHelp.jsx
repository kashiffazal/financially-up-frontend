"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FileTextOutlined,
  HomeOutlined,
  CalendarOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  PhoneOutlined,
  BellOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyAccurateAddressesMatterAndHowWeHelp Component
 * ===============================================
 * Section 3 of Change Company Address (/services/asic/address-changes/):
 * 1. "Why accurate address records matter"
 * 2. "How Financially Up can help" (6 scope points)
 * 3. "Information we may need"
 * 4. "Why choose Financially Up"
 *
 * Implements 100% complete, verbatim content from Page 8 of '7th Pillar ASIC.docx'.
 * Explains missed communication risks, scope checklist, records checklist, credentials, and dynamic company phone.
 */
export default function WhyAccurateAddressesMatterAndHowWeHelp() {
  const company = useCompany();

  const helpPoints = [
    "Reviewing the company’s current ASIC address details",
    "Confirming whether the change relates to the registered office, principal place of business or contact address",
    "Preparing the relevant ASIC company-address update",
    "Checking effective dates and consistency across company details",
    "Flagging the need for occupier consent where the company does not occupy the registered office",
    "Coordinating related company-detail changes where required",
  ];

  const infoList = [
    { icon: <FileTextOutlined />, label: "Company name and ACN" },
    { icon: <CalendarOutlined />, label: "Current ASIC annual statement or company extract" },
    { icon: <HomeOutlined />, label: "Previous (old) and proposed (new) addresses" },
    { icon: <CalendarOutlined />, label: "Effective date of the address change" },
    { icon: <SafetyCertificateOutlined />, label: "Confirmation if company occupies proposed office" },
    { icon: <TeamOutlined />, label: "Registered agent details (if connecting/ceasing an agent)" },
  ];

  const credentials = [
    { value: "10+ Years", label: "Corporate Experience" },
    { value: "CPA & IPA", label: "Qualified Specialists" },
    { value: "TPB Registered", label: "Registered Tax Agent" },
    { value: "Australia-Wide", label: "Online & In-Person" },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: Why accurate address records matter */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Risk Mitigation & Public Register Integrity
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why accurate address records matter
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              ASIC uses company address information for official communication, and some address details are visible on the companies register. An outdated registered office can mean important notices are sent to a place the company no longer monitors. It can also complicate annual reviews and other company updates.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Address accuracy is particularly important around the ASIC Annual Review, because the annual statement is used to check the company details held on the register. However, the annual review is not a substitute for notifying changes when they occur.
            </p>
          </div>
        </div>

        {/* Subsection 2: How Financially Up can help */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Service Scope & Group Coordination
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Financially Up can help
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Our ASIC address change service can help company directors and business owners identify the correct address type, check the current company record and prepare the relevant update. We can also assist where a company has changed accountants, a former address is still appearing on the register, or more than one company in a group needs to be updated.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {helpPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/60 dark:border-zinc-800">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Subsection 3: Information we may need */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
              Information we may need
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-6">
              We may ask for the company name and ACN, current ASIC annual statement or company extract, the old and new addresses, the effective date of the change, and confirmation about whether the company occupies the proposed registered office. If the change is connected with appointing or ceasing a registered agent, we may also need the relevant agent details.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
              {infoList.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/70 dark:border-zinc-800 flex items-center gap-2.5 text-xs text-slate-700 dark:text-zinc-300 font-medium"
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

        {/* Subsection 4: Why choose Financially Up */}
        <div className="w-full rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950 text-white shadow-xl border border-slate-800 relative overflow-hidden">
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-4">
              Comprehensive Corporate Administration
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight mb-4">
              Why choose Financially Up
            </h2>
            <p className="text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-3xl font-normal mb-8">
              Financially Up supports company owners with ASIC administration as part of a broader accounting and compliance service. We are a registered tax agent with 10+ years of experience, and our team includes CPA and IPA members. Australia-wide support is available through online appointments, with in-person appointments also offered.
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
