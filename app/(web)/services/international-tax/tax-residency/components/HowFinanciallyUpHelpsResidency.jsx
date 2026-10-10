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
  CheckOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsResidency Component
 * =======================================
 * Section 6: How Financially Up Can Help & Why Choose Financially Up?
 * Exact verbatim content from Client Document (Page 3) with dynamic useCompany() hook.
 */
export default function HowFinanciallyUpHelpsResidency() {
  const company = useCompany();

  const servicesScope = [
    "Reviewing your movements between Australia and other countries",
    "Assessing the Australian residency tests",
    "Reviewing your living, family and employment arrangements",
    "Considering the relevance of temporary-resident provisions",
    "Identifying possible treaty issues",
    "Explaining the Australian tax consequences of the residency position",
    "Identifying foreign income that may require Australian reporting",
    "Assisting with your Australian tax return where included in the engagement",
  ];

  const whyChoosePoints = [
    "Australia-wide service",
    "Online appointments",
    "In-person appointments where available",
    "Practical explanations of residency issues",
    "Assistance connecting the residency conclusion with the client's Australian tax reporting",
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: How Financially Up Can Help */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
              <AuditOutlined /> Advisory Scope
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              How Financially Up Can Help
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Our tax residency service may include:
            </p>

            <div className="mt-8 space-y-3.5">
              {servicesScope.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3.5 shadow-xs"
                >
                  <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0" />
                  <span className="text-sm font-medium text-slate-800 dark:text-zinc-200 leading-snug">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-4">
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                Where determination of foreign-country residency or interpretation of overseas law is required, advice from a qualified professional in that country may also be necessary.
              </p>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                Where the matter involves wider cross-border income, assets or entities, our{" "}
                <Link
                  href="/services/international-tax"
                  className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  international tax services page
                </Link>{" "}
                explains the broader Australian tax assistance available.
              </p>
            </div>
          </div>

          {/* Right Column: Why Choose Financially Up? */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6">
                <SafetyCertificateOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Why Choose Financially Up?
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent assisting clients with Australian taxation, accounting and international tax matters. Our team includes CPA and IPA members and has more than 10 years of experience.
              </p>

              {/* Verbatim Bullet Points */}
              <div className="space-y-3 mb-8">
                {whyChoosePoints.map((pt, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300">
                    <CheckOutlined className="text-teal-600 dark:text-teal-400 shrink-0 font-bold" />
                    <span>{pt}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic Company Contact Info */}
              <div className="pt-6 border-t border-slate-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                  <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />
                  <span>Registered Tax Agent: <strong>TPB #{company.abn || "26234055"}</strong></span>
                </div>
                {company.phone && (
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    <PhoneOutlined className="text-teal-600 dark:text-teal-400" />
                    <a href={`tel:${company.phone.replace(/\s/g, "")}`} className="hover:underline font-medium text-slate-900 dark:text-white">
                      {company.phone}
                    </a>
                  </div>
                )}
                {company.email && (
                  <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                    <MailOutlined className="text-teal-600 dark:text-teal-400" />
                    <a href={`mailto:${company.email}`} className="hover:underline font-medium text-slate-900 dark:text-white">
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
