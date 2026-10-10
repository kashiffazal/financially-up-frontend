"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  CalendarOutlined,
  AlertOutlined,
  BankOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * TrustDistributionsAndAnnualReturn Component
 * ===========================================
 * Section: Trust distributions and the annual return
 * Verbatim text from Page 6 of client docx (8th Pillar Trust Services.docx).
 * Covers statement of distribution, present entitlement, prohibition of post-event reconstruction,
 * and links to Trust Distribution Planning & Division 7A services.
 */
export default function TrustDistributionsAndAnnualReturn() {
  const points = [
    {
      icon: <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Statement of Distribution & Present Entitlement",
      desc: "Beneficiary tax reporting depends on valid present entitlement, trust distributable income, and specific streaming of capital gains or franked distributions under the trust deed.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "No Post-30 June Reconstruction",
      desc: "Distribution planning cannot be reconstructed after the event as if a decision had been made earlier. Prospective advice must be completed before statutory 30 June deadlines.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Distribution Alignment
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trust distributions and the annual return
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The trust&apos;s statement of distribution needs to reflect the beneficiary information relevant to the year.
            Beneficiary tax reporting can depend on present entitlement, the trust&apos;s distributable income and the
            treatment of particular amounts such as capital gains or franked distributions. The trust deed and trustee
            resolutions can therefore affect the tax-return outcome.
          </p>
        </div>

        {/* 2 Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Warning & Cross-Link Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center shrink-0">
              <AlertOutlined className="text-lg text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                Pre-Year-End Strategy vs Retrospective Reporting
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Distribution planning should not be reconstructed after the event as if a decision had been made
                earlier. Where trustees want advice about prospective distributions, beneficiary choices or year-end
                strategy, that work should be undertaken before the relevant decisions and deadlines where possible.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex flex-col lg:flex-row lg:items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Our{" "}
              <Link
                href="/services/trusts/distribution-planning"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Trust Distribution Planning
              </Link>{" "}
              service deals with proactive distribution planning. Where a trust has private-company dealings or related
              balances, the separate{" "}
              <Link
                href="/services/business-tax/division-7a-loans"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Division 7A
              </Link>{" "}
              service may also be relevant depending on the facts.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/services/trusts/distribution-planning"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
              >
                Distribution Planning <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
              <Link
                href="/services/business-tax/division-7a-loans"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
              >
                Division 7A Loans <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
