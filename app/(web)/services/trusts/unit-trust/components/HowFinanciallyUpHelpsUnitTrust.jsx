"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  GlobalOutlined,
  TeamOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsUnitTrust Component
 * ========================================
 * Sections: How Financially Up can help & Why choose Financially Up?
 * Verbatim text from Page 3 of client docx.
 * Dynamically references registered tax agent and company credentials.
 */
export default function HowFinanciallyUpHelpsUnitTrust() {
  const company = useCompany();

  const advantages = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-brand-emerald" />,
      title: "Registered Tax Agent #26234055",
      desc: "Licensed with the TPB, providing full lodging authority, extended deadlines, and ATO representation.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      desc: "Over a decade of specialised practice managing unit trust accounts, syndicate capital, and joint ventures.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      desc: "Seamless 100% online video appointments across all states, plus in-person consultations by arrangement.",
    },
    {
      icon: <AuditOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Proactive Scope Protection",
      desc: "We reconcile trust accounts and prepare returns while identifying unit transactions that require separate tax review.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: How Financially Up Can Help */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Partnership
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We can review unit trust records, reconcile the accounts, prepare annual financial statements and tax
            returns, and identify when a proposed unit transaction needs separate tax review before it is implemented.
          </p>
        </div>

        {/* 4 Pillars Grid: Why Choose Financially Up */}
        <div className="mb-12">
          <div className="text-center max-w-2xl mx-auto mb-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Why choose Financially Up?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
              {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent with more than 10 years of
              experience. Our team includes CPA and IPA members and provides support Australia-wide, with online and
              in-person appointment options.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verbatim Action Consultation Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-brand-emerald" />
              Pre-Transaction Review for Significant Unit Changes
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For unit trust accounting, tax-return preparation, compliance support or tax review before a significant
              unit-holder transaction, Book an Appointment. We can review the trust’s documents and records and agree on
              the appropriate scope.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0 w-full md:w-auto">
            <Button
              type="primary"
              className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
