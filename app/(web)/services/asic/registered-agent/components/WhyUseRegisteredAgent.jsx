"use client";

import React from "react";
import { Tag, Alert } from "antd";
import {
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  IdcardOutlined,
  FileProtectOutlined,
  ApartmentOutlined,
  CompassOutlined,
} from "@ant-design/icons";

/**
 * WhyUseRegisteredAgent Component
 * ===============================
 * Section 3 of ASIC Registered Agent Service (/services/asic/registered-agent/):
 * 1. "Why use a registered agent for company administration?"
 * 2. "Company changes still need timely instructions"
 *
 * Implements 100% complete, verbatim content from Page 2 of '7th Pillar ASIC.docx'.
 * High-clarity gradient card layout with statutory deadline warnings and Director ID alerts.
 */
export default function WhyUseRegisteredAgent() {
  const driverCards = [
    {
      icon: <ApartmentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Stable Corporate Process",
      desc: "Handles ASIC correspondence through an established business workflow rather than personal email inboxes or addresses that may change.",
    },
    {
      icon: <CompassOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Multi-Company & Group Governance",
      desc: "Ideal for groups with multiple entities or busy directors focused on day-to-day business operations requiring centralized tracking.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Accounting & Secretarial Coordination",
      desc: "Connects ASIC corporate filings directly with company financial records, tax planning, payroll, and statutory reporting.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: Why use a registered agent for company administration? */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="purple" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Strategic Advantages
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why use a registered agent for company administration?
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              Company directors often engage a registered agent because they want ASIC correspondence handled through a stable business process rather than a personal inbox or an address that may change. This can be particularly useful for groups with multiple companies, directors who are focused on day-to-day operations, or businesses that want accounting and ASIC records coordinated.
            </p>

            {/* 3 Driver Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
              {driverCards.map((card, i) => (
                <div
                  key={i}
                  className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-950/70 border border-slate-200/70 dark:border-zinc-800 hover:border-emerald-400/50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-lg bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-3">
                    {card.icon}
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1.5">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {card.desc}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal pt-2 border-t border-slate-100 dark:border-zinc-800">
              A registered agent does not replace the board’s decision-making. The company still needs to make valid corporate decisions, maintain required records and provide accurate instructions. If a proposed transaction needs legal documents, shareholder approval or legal interpretation, separate legal advice may be required.
            </p>
          </div>
        </div>

        {/* Subsection 2: Company changes still need timely instructions */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Statutory Deadlines & Rules
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Company changes still need timely instructions
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Using an agent does not extend ASIC deadlines. ASIC requires many common changes to company details to be notified within 28 days. Directors should therefore provide information promptly when an address, officeholder, member or share-related detail changes.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
            {/* 28-Day Deadline Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-amber-50/80 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-lg" />
                  <span className="text-xs font-bold text-amber-900 dark:text-amber-300 uppercase tracking-wider">
                    Statutory Window
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  The 28-Day Notification Rule
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  ASIC imposes strict statutory late fees on filings submitted beyond 28 days from the effective event date. Appointing an agent ensures timely lodging, provided instructions are supplied without delay.
                </p>
              </div>
            </div>

            {/* Director ID & Consent Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-teal-50/80 dark:bg-teal-950/20 border border-teal-200/80 dark:border-teal-900/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <IdcardOutlined className="text-teal-600 dark:text-teal-400 text-lg" />
                  <span className="text-xs font-bold text-teal-900 dark:text-teal-300 uppercase tracking-wider">
                    Director ID Mandate
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  Mandatory ID Before Appointment
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  ASIC requires any new director to obtain a Director ID prior to formal appointment. Signed written consents must also be documented and safely stored in the company register.
                </p>
              </div>
            </div>
          </div>

          {/* Statutory Verbatim Paragraph Note */}
          <Alert
            type="warning"
            showIcon
            icon={<SafetyCertificateOutlined className="text-lg text-amber-600 dark:text-amber-400" />}
            className="rounded-2xl border border-amber-200/80 dark:border-amber-800/60 bg-amber-50/70 dark:bg-amber-950/30 p-4 sm:p-5"
            title={
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Verbatim Legal Compliance Guidance
              </span>
            }
            description={
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 mt-1 font-normal">
                For example, if a new director is being appointed, ASIC states that the person must apply for a director ID before appointment and the company must obtain and keep the required consent. The registered agent filing is one part of the process, not a substitute for the company’s underlying obligations.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}
