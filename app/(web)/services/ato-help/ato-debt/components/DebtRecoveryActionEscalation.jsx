"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  WarningOutlined,
  StopOutlined,
  BankOutlined,
  UsergroupAddOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * DebtRecoveryActionEscalation Component
 * ======================================
 * Section 6: What if the debt is already in recovery action?
 * Verbatim text from Page 2 of '11th Pillar ATO Help.docx'.
 *
 * Details:
 * - Firmer ATO recovery action and statutory enforcement escalation.
 * - Garnishee Notices (banks, trade debtors, employers).
 * - Director Penalty Notices (DPN) & 21-day strict statutory deadline.
 * - Clear scope boundaries: Tax Agent work vs Insolvency Practitioner / Legal Counsel.
 */
export default function DebtRecoveryActionEscalation() {
  const recoveryTypes = [
    {
      icon: <StopOutlined className="text-2xl text-red-600 dark:text-red-400" />,
      tag: "Third-Party Interception",
      title: "Garnishee Notices (Section 260-5)",
      lead: "A garnishee notice can require a third party that owes or holds money for the taxpayer—such as a bank, employer or trade debtor—to pay the ATO instead.",
      detail:
        "The ATO can issue notices directly to your financial institution to freeze bank accounts, or to customers to redirect trade receivable payments directly to the ATO until the debt is cleared.",
    },
    {
      icon: <WarningOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      tag: "21-Day Strict Timeline",
      title: "Director Penalty Notices (DPN)",
      lead: "Company directors can become personally liable for certain unpaid company liabilities, including PAYG withholding, net GST and super guarantee charge, through the director penalty regime.",
      detail:
        "A director penalty notice has strict consequences and a 21-day period measured from when the notice is sent. Obtain specialist advice immediately rather than relying on general website information.",
    },
    {
      icon: <BankOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      tag: "Legal Enforcement",
      title: "Statutory Demands & Wind-Up Proceedings",
      lead: "Depending on the circumstances, correspondence may refer to firmer recovery action, legal proceedings or insolvency processes.",
      detail:
        "The ATO may initiate court proceedings, bankruptcy notices for individuals, or statutory demands for companies that can lead to court liquidation if left unanswered.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="red" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Escalation & Recovery Notice Defence
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What if the debt is already in recovery action?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            ATO debt matters can escalate. Depending on the circumstances, correspondence may refer to firmer recovery action, garnishee notices, director penalty notices, legal proceedings or insolvency processes.
          </p>
        </div>

        {/* 3 Recovery Risk Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {recoveryTypes.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between hover:border-red-500/60 dark:hover:border-red-500/60 transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-50 dark:bg-red-950/60 border border-red-200/60 dark:border-red-800/60 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-xs font-bold text-red-700 dark:text-red-300 px-2.5 py-1 rounded-full bg-red-50 dark:bg-red-950/60 border border-red-200/60 dark:border-red-800/60">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium leading-relaxed mb-3">
                  {item.lead}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {item.detail}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-red-600 dark:text-red-400 flex items-center gap-1.5">
                <WarningOutlined /> Requires Immediate Action
              </div>
            </div>
          ))}
        </div>

        {/* Professional Scope Boundary & Collaboration Alert */}
        <div className="rounded-2xl p-6 sm:p-8 bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-blue-50 dark:bg-blue-950/60 text-blue-600 dark:text-blue-400 shrink-0 border border-blue-200/60 dark:border-blue-800/60">
              <AuditOutlined className="text-2xl" />
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Our Professional Scope & Boundaries:
              </h4>
              <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                Financially Up can assist with tax records, lodgements and ATO communication within scope. Legal proceedings, insolvency advice, director liability strategy or challenges to enforcement may require an appropriately qualified lawyer or insolvency practitioner.
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-4">
                <Link
                  href="/book-an-appointment"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm transition-colors shadow-sm"
                >
                  Book an Urgent Appointment <ArrowRightOutlined />
                </Link>
                <span className="text-xs text-slate-500 dark:text-zinc-400">
                  Strict client confidentiality assured. Fast lodgement catch-up available.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
