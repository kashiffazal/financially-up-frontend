"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * AnnualReviewAndSolvency Component
 * =================================
 * Section 4: Annual Company Reviews & The Solvency Resolution Rule.
 *
 * Explains annual review statements, the statutory 2-month solvency resolution rule,
 * and the 28-day notification rule for corporate changes.
 *
 * Background: Clean White.
 */
export default function AnnualReviewAndSolvency() {
  const obligations = [
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Annual Statement & Fee Due Date",
      description:
        "ASIC issues an annual statement shortly after your company registration anniversary. Directors must verify details and ensure the annual review fee is paid by the due date to avoid escalating late fees.",
      tag: "Annual Fee",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "The 2-Month Solvency Resolution",
      description:
        "Under Section 347A of the Corporations Act, directors must pass and document a formal solvency resolution within 2 months after the annual review date confirming the company can pay its debts when due.",
      tag: "Director Duty",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "The Strict 28-Day Notification Window",
      description:
        "Do not wait for the annual review to update changed details. Addresses, officeholder appointments, resignations, and share transfers must be reported to ASIC within 28 days of the change occurring.",
      tag: "28-Day Limit",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Statutory Obligations
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Annual Company Reviews & The Solvency Resolution Rule
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Every Australian proprietary company must complete an annual review and pass a formal solvency resolution. Keeping corporate administration structured prevents penalties and protects director governance.
          </p>
        </div>

        {/* 3 Obligation Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {obligations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Corporate Secretarial Reassurance"
          tagIcon="safety"
          title="Never Miss an ASIC Annual Review Deadline"
          description="Appointing Financially Up as your ASIC registered agent means annual statements are delivered directly to our registered agent portal, checked against your financial records, and sent to you with documented solvency minutes ready for signature."
          primaryButton={{
            text: "Appoint Registered Agent",
            href: "/services/asic/registered-agent",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
