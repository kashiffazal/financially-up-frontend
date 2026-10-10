"use client";

import React from "react";
import Link from "next/link";
import { useCompany } from "@/context/SettingsContext";
import {
  FileTextOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  CheckCircleFilled,
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * ExpatHelpAndDiscussionPreparation Component
 * ===========================================
 * Section 4: How Financially Up helps Australians abroad & What should you bring to the first discussion?
 * Exact verbatim content from Client Document (Page 8) with dynamic useCompany() hook.
 */
export default function ExpatHelpAndDiscussionPreparation() {
  const company = useCompany();

  const documentsToBring = [
    { title: "Timeline of departures & returns", desc: "Precise travel dates, flight logs, and boarding passes." },
    { title: "Addresses & family arrangements", desc: "Overseas living arrangements, family locations, and housing status." },
    { title: "Australian & foreign income statements", desc: "Income records, employment summaries, and bank interest." },
    { title: "Rental property records", desc: "Property manager statements, lease contracts, and expense invoices." },
    { title: "Details of property or investments", desc: "Share portfolio statements, superannuation, and business assets." },
    { title: "Previous Australian returns & foreign tax assessments", desc: "Prior year filings, notices of assessment, and foreign tax receipts." },
    { title: "Home purchase, lease or employment contracts", desc: "Documents showing purchase, lease, or job agreements abroad." },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What to bring to the first discussion */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
              <FileTextOutlined /> Consultation Checklist
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
              What Should You Bring to the First Discussion?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-8">
              A timeline of your departures and returns, addresses and family arrangements, Australian and foreign income statements, rental records and details of any property or investments provide a useful start. Bring previous Australian returns, foreign tax assessments where available, and documents showing a home purchase, lease or employment arrangement abroad. If a property sale is planned, tell us before contracts are signed so the appropriate questions can be reviewed in time.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-8">
              {documentsToBring.map((doc, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3"
                >
                  <CheckCircleFilled className="text-teal-600 dark:text-teal-400 text-base mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900 dark:text-white mb-0.5">
                      {doc.title}
                    </h3>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: How Financially Up Helps & Credentials */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6">
                <AuditOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                How Financially Up Helps Australians Abroad
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                We review your residency history, identify Australian and foreign income requiring consideration, discuss continuing assets and prepare Australian returns within an agreed scope. Where dual residency or another country’s tax law is involved, we can work with information from an adviser in that jurisdiction. Advice on foreign law, immigration law, a foreign tax return or regulated financial products is not automatically part of the Australian engagement.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                A tax accountant for Australian expats should also distinguish current return preparation from planning before a move or property sale. We discuss the decision and agree which work comes first. If records from overseas arrive after the Australian reporting year, we identify what information is needed and the relevant timing rather than guessing an amount.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent with more than 10 years of experience and a team including CPA and IPA members. We work with clients across Australia and overseas through online appointments, with in-person options when you are here. We explain the basis for Australian reporting and where the facts require further evidence.
              </p>

              {/* Dynamic Company Details */}
              <div className="pt-6 border-t border-slate-200 dark:border-zinc-800 space-y-3">
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                  <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />
                  <span>Registered Tax Agent: <strong>TPB #{company.abn || "26234055"}</strong></span>
                </div>
                <div className="flex items-center gap-3 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
                  <GlobalOutlined className="text-blue-600 dark:text-blue-400" />
                  <span>Global Zoom/Teams & In-Person Sydney Office</span>
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
