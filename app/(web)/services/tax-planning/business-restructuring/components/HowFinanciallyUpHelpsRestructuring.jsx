"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsRestructuring Component
 * ============================================
 * Section 7: Restructure modeling, implementation coordination, CPA/IPA team,
 * TPB #26234055 status, legal scoping boundaries, and dynamic contact info.
 * Verbatim text from Page 11 of the Tax Planning document.
 */
export default function HowFinanciallyUpHelpsRestructuring() {
  const company = useCompany();

  const keyStrengths = [
    {
      title: "Comprehensive Tax & Accounting Modeling",
      desc: "Financially Up can review the existing structure and proposed restructure, identify material tax and accounting consequences, model or explain the tax treatment where appropriate, and help coordinate the accounting and tax work needed to implement the change.",
    },
    {
      title: "Implementation Coordination & Ongoing Compliance",
      desc: "This may include reviewing asset transfers, entity accounts, tax registrations, ownership changes, company or trust tax issues and post-restructure compliance. Our Business Tax Compliance service can assist with ongoing tax obligations after the new arrangement is operating.",
    },
    {
      title: "Clear Legal & Specialist Boundaries",
      desc: "Where legal agreements, trust deeds, share transfers, employment law, stamp duty advice or other specialist matters are required, we may recommend that the relevant legal or specialist adviser is involved. Financially Up’s work is scoped to tax, accounting and business advisory services.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Advisory Standards &amp; Experience
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
        </div>

        {/* How We Help Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-6xl mx-auto">
          {keyStrengths.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-primary/10 dark:bg-emerald-950/40 flex items-center justify-center mb-4 text-brand-primary dark:text-emerald-400">
                  <CheckCircleOutlined className="text-lg" />
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Financially Up Verbatim Block */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-800 rounded-3xl p-8 sm:p-12 text-white shadow-xl max-w-5xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl space-y-4">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                Registered Tax Agent • TPB #26234055
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                Why Choose Financially Up?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Financially Up Pty Ltd is a registered tax agent with more than 10 years of experience. Our team includes CPA and IPA members and supports businesses Australia-wide through online and in-person appointments.
              </p>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                We focus on the practical connection between structure, tax, accounting records and ongoing compliance, while clearly identifying when legal or other specialist advice is required.
              </p>

              {/* Dynamic Company Details from Context */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <PhoneOutlined className="text-emerald-400" />
                  <a
                    href={`tel:${company.phone?.replace(/\s/g, "")}`}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {company.phone}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <MailOutlined className="text-emerald-400" />
                  <a
                    href={`mailto:${company.email}`}
                    className="hover:text-emerald-400 transition-colors"
                  >
                    {company.email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <SafetyCertificateOutlined className="text-emerald-400" />
                  <span>ABN: {company.abn}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GlobalOutlined className="text-emerald-400" />
                  <span>{company.address}</span>
                </div>
              </div>
            </div>

            {/* Quick Action Button */}
            <div className="shrink-0 w-full lg:w-auto">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<CalendarOutlined />}
                  className="w-full sm:w-auto bg-emerald-500 hover:bg-emerald-600 border-none font-bold text-slate-950 px-8 h-12 rounded-xl text-base shadow-lg shadow-emerald-500/20"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
