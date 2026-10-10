"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileSearchOutlined,
  AuditOutlined,
  HistoryOutlined,
  ReconciliationOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpHelpsAppointorChanges Component
 * ==============================================
 * Section: How Financially Up can help
 * Verbatim text from Page 9 of client docx (8th Pillar Trust Services.docx).
 * Covers deed tax reviews, tax history checks, loss & election testing,
 * accounting record updates, and links to Trust Tax Returns service.
 */
export default function HowFinanciallyUpHelpsAppointorChanges() {
  const deliverables = [
    {
      icon: <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Deed Tax Perspective Review",
      desc: "Reviewing the trust deed provisions, appointment schedules, and succession powers through a tax and accounting lens.",
    },
    {
      icon: <HistoryOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Tax History & Loss Analysis",
      desc: "Checking carried-forward revenue and capital losses, Family Trust Elections (FTE), and Interposed Entity Elections (IEE).",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Control Test & Integrity Checks",
      desc: "Evaluating whether the incoming appointor triggers control shifts under Section 268-160 or income injection test risks.",
    },
    {
      icon: <ReconciliationOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Accounting & Tax Record Updates",
      desc: "Coordinating updates to trust ledgers, statutory registers, and associated entity records once the legal deed is executed.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Professional Deliverables
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up can review the trust deed from an accounting and tax perspective, understand the proposed
            succession or control change, check the trust&apos;s tax history, identify trust loss or election issues
            that may need analysis, and coordinate updates to accounting and tax records once the legal change has been
            validly made.
          </p>
        </div>

        {/* 4 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliverables.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Callout & Link Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Annual Trust Compliance & Lodgement
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Where the trust also requires annual compliance, our{" "}
              <Link
                href="/services/trusts/trust-tax-returns"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Trust Tax Returns
              </Link>{" "}
              service covers preparation and lodgement of the trust return separately.
            </p>
          </div>
          <Link
            href="/services/trusts/trust-tax-returns"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm shrink-0"
          >
            <FileDoneOutlined className="mr-2" />
            Trust Tax Returns <ArrowRightOutlined className="ml-2 text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
