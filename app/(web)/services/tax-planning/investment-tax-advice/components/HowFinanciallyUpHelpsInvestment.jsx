"use client";

import React from "react";
import Link from "next/link";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ArrowRightOutlined,
  TeamOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsInvestment Component
 * =========================================
 * Section 8: How Financially Up assists investors, registered tax agent credentials (TPB #26234055),
 * CPA & IPA qualifications, separation of tax advice from regulated financial product advice,
 * and dynamic contact information via useCompany().
 * Verbatim text from Page 12 of the Tax Planning document.
 */
export default function HowFinanciallyUpHelpsInvestment() {
  const company = useCompany();

  const serviceCapabilities = [
    {
      title: "Tax Implications Review",
      desc: "Review the tax implications of existing or proposed investment transactions and explain how income and CGT rules may apply.",
    },
    {
      title: "Record Identification",
      desc: "Identify records needed for a reliable calculation and assist with separately scoped tax planning where appropriate.",
    },
    {
      title: "Tax Return Compliance",
      desc: "Prepare or review the related tax return information for shares, funds, trusts, and investment properties.",
    },
    {
      title: "Clear Advisory Boundaries",
      desc: "Distinguish tax planning from financial product advice, clearly directing product selection questions to licensed advisers.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Advisory Partnership &amp; Credentials
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
            How Financially Up Can Help
          </h2>
        </div>

        {/* Verbatim Explanatory Lead */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <p className="bg-white dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm">
            Financially Up can review the tax implications of existing or proposed investment transactions, explain how income and CGT rules may apply, identify records needed for a reliable calculation and assist with separately scoped tax planning where appropriate.
          </p>
          <p className="bg-white dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm">
            We can also prepare or review the related tax return information. Where you need a recommendation about which financial product to buy, sell or hold, or broader personal financial advice, that work sits outside ordinary tax advice and may require an appropriately authorized adviser.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {serviceCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center mb-4 text-brand-primary dark:text-emerald-400">
                  <CheckCircleOutlined className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us & Company Info Card */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Column: Why Choose Financially Up Copy */}
            <div className="lg:col-span-7">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-3 border border-brand-primary/20 dark:border-emerald-500/20">
                Registered Tax Agents
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Why Choose Financially Up?
              </h3>
              <p className="text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed mb-4">
                Financially Up Pty Ltd is a registered tax agent with more than 10 years of experience. Our team includes CPA and IPA members and provides Australia-wide tax and accounting support through online and in-person appointments.
              </p>
              <p className="text-slate-600 dark:text-zinc-300 text-base leading-relaxed mb-6">
                Our focus is to explain the tax consequences clearly, keep the advice connected to your records and circumstances, and distinguish tax planning from financial product advice.
              </p>

              {/* Initial Discussion Scope */}
              <div className="bg-slate-50 dark:bg-zinc-800/60 p-5 rounded-xl border border-slate-200/70 dark:border-zinc-700/60 text-sm text-slate-700 dark:text-zinc-300 leading-relaxed">
                <span className="font-semibold text-slate-900 dark:text-white block mb-1">
                  Initial Consultation Focus:
                </span>
                An initial discussion can cover your existing investments, proposed transactions, income and distributions, capital gains or losses, ownership, records and the tax questions you want reviewed.
              </div>
            </div>

            {/* Right Column: Dynamic Contact & Credentials Card */}
            <div className="lg:col-span-5 bg-gradient-to-br from-slate-900 to-zinc-900 text-white rounded-2xl p-7 sm:p-8 border border-slate-800 shadow-lg">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-brand-primary/20 flex items-center justify-center border border-brand-primary/30">
                  <SafetyCertificateOutlined className="text-2xl text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-lg text-white">
                    {company?.legalName || "Financially Up Pty Ltd"}
                  </h4>
                  <p className="text-xs text-emerald-400 font-semibold">
                    Registered Tax Agent • TPB #26234055
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm text-zinc-300 mb-6">
                <div className="flex items-start space-x-3">
                  <PhoneOutlined className="text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-400 block">Phone Support</span>
                    <a
                      href={`tel:${company?.phone?.replace(/\s/g, "") || "1300328316"}`}
                      className="text-white hover:text-emerald-400 font-medium transition-colors"
                    >
                      {company?.phone || "1300 328 316"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MailOutlined className="text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-400 block">Email Advisory</span>
                    <a
                      href={`mailto:${company?.email || "info@financiallyup.com.au"}`}
                      className="text-white hover:text-emerald-400 font-medium transition-colors"
                    >
                      {company?.email || "info@financiallyup.com.au"}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <EnvironmentOutlined className="text-emerald-400 mt-1 shrink-0" />
                  <div>
                    <span className="text-xs text-zinc-400 block">National Office</span>
                    <span className="text-zinc-200">
                      {company?.address || "Level 5, 100 Walker St, North Sydney NSW 2060, Australia"}
                    </span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 pt-2 border-t border-zinc-800 text-xs text-zinc-400">
                  <div className="flex items-center space-x-1.5">
                    <TeamOutlined className="text-emerald-400" />
                    <span>CPA &amp; IPA Qualified</span>
                  </div>
                  <div className="flex items-center space-x-1.5">
                    <AuditOutlined className="text-emerald-400" />
                    <span>ABN: {company?.abn || "84 659 717 263"}</span>
                  </div>
                </div>
              </div>

              <Link
                href="/book-an-appointment"
                className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-xl bg-brand-primary hover:bg-brand-secondary text-white font-semibold text-sm transition-all shadow-md hover:shadow-lg group"
              >
                Book an Appointment
                <ArrowRightOutlined className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
