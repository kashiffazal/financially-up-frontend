"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarOutlined,
  BankOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  ProfileOutlined,
} from "@ant-design/icons";

/**
 * DifferentAtoLettersDifferentAction Component
 * ============================================
 * Section 3: Mapping specific notice categories to corresponding resolution pathways:
 * unlodged returns, tax debts, review questionnaires, and penalty notices.
 */
export default function DifferentAtoLettersDifferentAction() {
  const noticeTypes = [
    {
      title: "Outstanding Returns & BAS",
      desc: "Default assessments, failure to lodge warnings, and demand for prior-year lodgements.",
      serviceName: "Overdue Tax Returns",
      href: "/services/ato-help/overdue-tax-returns",
      icon: <CalendarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Pillar 11.3",
    },
    {
      title: "Debt & Demand for Payment",
      desc: "Statement of Account balances, firmer collection warnings, and GIC statements.",
      serviceName: "ATO Payment Plan Help",
      href: "/services/ato-help/payment-plans",
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Pillar 11.6",
    },
    {
      title: "Review & Information Request",
      desc: "Data-matching discrepancies, questionnaires, and requests for source records.",
      serviceName: "ATO Review Help",
      href: "/services/ato-help/ato-reviews",
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Pillar 11.7",
    },
    {
      title: "Penalties & Interest Charges",
      desc: "Failure to lodge (FTL) penalty notifications, shortfall penalties, and GIC statements.",
      serviceName: "Penalty Remission",
      href: "/services/ato-help/penalty-remission",
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      tag: "Pillar 11.4",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Notice Classification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            Different ATO letters require different action
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              A notice may concern an outstanding return or activity statement, an account balance, a proposed or imposed penalty, general interest charge, a request for records, a data-matching discrepancy, a review, an amended assessment or an objection decision. The correct response depends on the document’s legal and practical effect.
            </p>
            <p>
              For an outstanding income tax return, see our overdue tax returns service. If the notice concerns a debt you cannot pay in full, our ATO payment plan help page explains instalment arrangements. A formal examination has a distinct response process covered under ATO review help. These pages explain the issue; they do not replace reading the particular notice.
            </p>
          </div>
        </div>

        {/* 4 Notice Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {noticeTypes.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-500 dark:text-zinc-400 uppercase">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                  {item.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-700/60">
                <Link
                  href={item.href}
                  className="text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 flex items-center justify-between"
                >
                  <span>See {item.serviceName}</span>
                  <ArrowRightOutlined className="group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
