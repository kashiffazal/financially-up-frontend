"use client";

import React from "react";
import Link from "next/link";
import { useCompany } from "@/context/SettingsContext";
import {
  CheckCircleFilled,
  AuditOutlined,
  SafetyCertificateOutlined,
  GlobalOutlined,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsForeignIncome Component
 * ===========================================
 * Section 7: How Financially Up Can Help & Why Choose Financially Up?
 * Exact verbatim text from Client Document (Page 2) with dynamic useCompany() hook.
 */
export default function HowFinanciallyUpHelpsForeignIncome() {
  const company = useCompany();

  const servicesScope = [
    "Reviewing your Australian tax residency",
    "Identifying overseas income potentially relevant to your Australian return",
    "Reviewing foreign tax information",
    "Converting relevant amounts to Australian dollars",
    "Preparing Australian foreign-income schedules",
    "Calculating eligible foreign income tax offsets",
    "Considering treaty issues relevant to Australian reporting",
    "Preparing or amending an Australian tax return",
    "Identifying records required to support the position taken",
  ];

  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: How Financially Up Can Help */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
              <AuditOutlined /> Scope of Engagement
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              How Financially Up Can Help
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Our foreign income tax service can include, depending on the agreed scope:
            </p>

            <div className="mt-8 space-y-3.5">
              {servicesScope.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3.5 shadow-xs"
                >
                  <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                {company.legalName || "Financially Up Pty Ltd"} provides Australian taxation and accounting advice. We do not automatically provide domestic tax advice for another country, and a foreign-country adviser may be required where overseas law needs to be interpreted.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                For matters involving several countries, entities or cross-border transactions, our{" "}
                <Link
                  href="/services/international-tax"
                  className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  international tax services page
                </Link>{" "}
                explains the wider Australian tax support available.
              </p>
            </div>
          </div>

          {/* Right Column: Why Choose Financially Up? */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6">
                <SafetyCertificateOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Why Choose Financially Up?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent assisting clients across Australia. Our team includes CPA and IPA members and has more than 10 years of experience in taxation and accounting matters. We provide online and in-person appointment options and focus on explaining what information is required, how the Australian tax treatment works and what remains dependent on your individual circumstances.
              </p>

              {/* Dynamic Company Details */}
              <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300">
                  <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400 text-base shrink-0" />
                  <span>
                    Registered Tax Agent: <strong>TPB #{company.abn || "26234055"}</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300">
                  <GlobalOutlined className="text-blue-600 dark:text-blue-400 text-base shrink-0" />
                  <span>Australia-Wide Consultations (Online & In-Person)</span>
                </div>
                {company.phone && (
                  <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300">
                    <PhoneOutlined className="text-teal-600 dark:text-teal-400 text-base shrink-0" />
                    <a
                      href={`tel:${company.phone.replace(/\s/g, "")}`}
                      className="hover:underline font-medium"
                    >
                      {company.phone}
                    </a>
                  </div>
                )}
                {company.email && (
                  <div className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300">
                    <MailOutlined className="text-teal-600 dark:text-teal-400 text-base shrink-0" />
                    <a href={`mailto:${company.email}`} className="hover:underline font-medium">
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
