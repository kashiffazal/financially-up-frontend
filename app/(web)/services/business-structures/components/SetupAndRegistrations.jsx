"use client";

import React from "react";
import { Button } from "antd";
import {
  IdcardOutlined,
  CheckCircleOutlined,
  BankOutlined,
  FileTextOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
  TeamOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * SetupAndRegistrations Component
 * ===============================
 * Section 5: Business setup and registrations
 *
 * Implements verbatim copy from Paragraphs 38 to 40 of '6th Pillar Business Structures.docx':
 * - Verbatim Heading 2: "Business setup and registrations" (Para 38)
 * - Verbatim Text: Paragraph 39 & Paragraph 40
 *
 * Background: Lite Brand Gradient with alternating palette.
 */
export default function SetupAndRegistrations() {
  /**
   * Statutory registration components directly itemized in Paragraph 39:
   * "company registration, ABN, tax file number, GST registration, PAYG withholding and other business registrations."
   */
  const registrationElements = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Company Registration",
      tag: "ASIC Incorporation",
      description:
        "Establishing the company on the Australian companies register managed by ASIC, issuing the ACN, and setting up corporate registers.",
      href: "/services/business-structures/company-registration",
    },
    {
      icon: <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Australian Business Number (ABN)",
      tag: "ABR Identifier",
      description:
        "Reviewing enterprise entitlement and applying for the unique 11-digit public business identifier through the Australian Business Register.",
      href: "/services/business-structures/abn-registration",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Tax File Number (TFN)",
      tag: "Entity Tax File",
      description:
        "Applying for a dedicated entity TFN for companies, trusts, and partnerships to lodge annual income tax returns with the ATO.",
      href: "/services/business-structures/business-structure-advice",
    },
    {
      icon: <DollarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "GST Registration",
      tag: "Goods & Services Tax",
      description:
        "Registering for GST where annual business turnover reaches or is projected to exceed the compulsory $75,000 statutory threshold.",
      href: "/services/business-structures/abn-registration",
    },
    {
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "PAYG Withholding & Business Names",
      tag: "Staffing & Trading",
      description:
        "Setting up PAYG withholding for staff salaries and director remuneration, alongside ASIC business name registrations for distinct trading brands.",
      href: "/services/business-structures/business-name-registration",
    },
  ];

  /**
   * Key ABN Entitlement Criteria from Paragraph 40
   */
  const entitlementCriteria = [
    "Carrying on an enterprise or taking active steps to start an enterprise",
    "Corporations Act company registered under Australian corporate law",
    "Commercial intent, regular activity, and reasonable expectation of profit",
    "Accurate associate and principal place of business details",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Verbatim Heading 2 (Para 38) & Paragraph 39 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <IdcardOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Implementation Roadmap
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Business setup and registrations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Once a structure is selected, the next step is making sure the entity and registrations are set up consistently. Depending on the structure and activities, this can involve a company registration, ABN, tax file number, GST registration, PAYG withholding and other business registrations.
          </p>
        </div>

        {/* Statutory Registration Components Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {registrationElements.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-3 mt-4 border-t border-slate-100 dark:border-zinc-800">
                <Link
                  href={item.href}
                  className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline inline-flex items-center gap-1"
                >
                  <span>Learn more</span>
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Callout Box: Verbatim Paragraph 40 */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 lg:p-9 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative: Verbatim Paragraph 40 */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-semibold">
                <InfoCircleOutlined />
                <span>ABN Application & Entitlement Scope</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Assistance with the ABN Registration Process
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If an ABN is required, Financially Up can help with the ABN registration process and the information needed for the application. Not everyone is entitled to an ABN; entitlement depends on matters such as carrying on or starting an enterprise, or being a Corporations Act company.
              </p>
              <div className="pt-2">
                <Link href="/book-an-appointment">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPlacement="end"
                    className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
                  >
                    Discuss Your Registrations
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Entitlement Checklist */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800/80">
              <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
                <span>ABN Entitlement Factors</span>
              </h4>
              <ul className="space-y-2.5">
                {entitlementCriteria.map((criterion, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>{criterion}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
