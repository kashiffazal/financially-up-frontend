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
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * NewMigrantsChecklistAndMeeting Component
 * ========================================
 * Section 4: What to bring to the first meeting & How Financially Up can help
 * Exact verbatim content from Client Document (Page 4) with dynamic useCompany() hook.
 */
export default function NewMigrantsChecklistAndMeeting() {
  const company = useCompany();

  const documentsToBring = [
    { title: "Passport & visa information", desc: "Passport bio page, subclass grant notice, and arrival stamps." },
    { title: "Arrival & travel dates", desc: "Boarding pass or flight itinerary confirming exact arrival in Australia." },
    { title: "Australian income statements", desc: "PAYG payment summaries, income statements, and bank interest records." },
    { title: "Overseas employment records", desc: "Payslips, P60, W-2, or foreign contractor remittances for the year." },
    { title: "Foreign property records", desc: "Ownership documents, rent statements, expense receipts, and loan papers." },
    { title: "Foreign tax assessments", desc: "Official foreign notices of assessment, payment receipts, and refund notices." },
    { title: "List of countries", desc: "List of countries where you lived, worked, or held investments during the year." },
  ];

  return (
    <section className="py-16 md:py-20 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: What to bring to the first meeting */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-teal-100 text-teal-800 dark:bg-teal-950/80 dark:text-teal-300 border border-teal-200 dark:border-teal-800/80 mb-4">
              <FileTextOutlined /> Preparation Checklist
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
              What to Bring to the First Meeting
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-8">
              Bring passport and visa information, arrival and travel dates, Australian income statements, and overseas employment or investment records for the relevant period. If you have a property abroad, bring ownership documents, rent statements, expense records and loan information. Foreign tax assessments, payment evidence, refund notices and prior returns help connect overseas tax to the correct income. A short list of the countries where you lived, worked or held investments during the year is also useful.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

          {/* Right Column: How Financially Up can help & Credentials */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-6">
                <AuditOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                How Financially Up Can Help
              </h3>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Our tax advice for new migrants in Australia can include reviewing your arrival and residency timeline, identifying Australian and overseas income sources, explaining record requirements and preparing an Australian tax return where engaged to do so. We can review whether foreign tax documents and treaty provisions need closer attention. Advice on foreign law or another country's tax return may require a local specialist, and we agree any coordination and scope in advance.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                If your situation involves complex employee remuneration, our{" "}
                <Link
                  href="/services/individual-tax/high-income-professionals"
                  className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  high-income professionals service
                </Link>{" "}
                addresses that separate issue. Once residency and foreign income have been resolved, the{" "}
                <Link
                  href="/services/individual-tax/individual-tax-returns"
                  className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  individual tax return service
                </Link>{" "}
                focuses on return preparation and lodgement. We confirm the appropriate scope at the first appointment.
              </p>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent with more than 10 years of experience and a team including CPA and IPA members. We assist clients across Australia through online and in-person appointments and explain which facts drive the Australian treatment.
              </p>

              {/* Dynamic Company Details */}
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
