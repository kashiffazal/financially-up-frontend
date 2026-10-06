"use client";

import React from "react";
import { Button } from "antd";
import {
  AuditOutlined,
  CalendarOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  ScheduleOutlined,
  ClockCircleOutlined,
  BankOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * TrustAccountingTaxDistributions Component
 * =========================================
 * Section 5: Trust accounting, tax and distributions
 *
 * Implements verbatim content from '8th Pillar Trust Services.docx' (Page 1: 1- Trust Services).
 * Explains how trust taxation differs from simple company or flow-through taxation,
 * the critical requirement for timely trustee distribution resolutions before year-end,
 * and the specific tax rules governing capital gains and franked distributions.
 *
 * Background: Clean White.
 */
export default function TrustAccountingTaxDistributions() {
  const taxPrinciples = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Assessment Nuance",
      title: "Present Entitlement vs Trustee Assessment",
      description:
        "A trust is neither simply taxed like a company nor automatically taxed through beneficiaries in every situation. Income tax depends on who is presently entitled or specifically entitled, or whether the trustee is assessed directly.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Year-End Deadlines",
      title: "Timing & Wording of Trustee Decisions",
      description:
        "For discretionary trusts, trustee resolutions are commonly needed before the end of the income year (30 June) to establish beneficiary entitlements under the deed's specific terms and conditions.",
    },
    {
      icon: <DollarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Streaming Rules",
      title: "Capital Gains & Franked Distributions",
      description:
        "Different statutory rules apply to capital gains and franked distributions, requiring explicit streaming powers and accurate tax calculations to ensure tax offsets flow effectively to beneficiaries.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200/80 dark:border-emerald-800/60 mb-4">
            <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-emerald-800 dark:text-emerald-300 tracking-wide uppercase">
              Tax Governance & Distributions
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trust accounting, tax and distributions
          </h2>

          {/* Exact Verbatim Paragraph 1 from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A trust is not simply &ldquo;taxed like a company&rdquo; or &ldquo;taxed through the
            beneficiaries&rdquo; in every situation. The income-tax treatment depends on the trust
            and on who is presently entitled to trust income or specifically entitled to certain
            amounts. In some cases the trustee may be assessed instead. This makes the accounting
            records and the timing and wording of trustee decisions important.
          </p>

          {/* Exact Verbatim Paragraph 2 from Document */}
          <p className="mt-3 text-sm sm:text-base text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            For discretionary trusts, trustee resolutions are commonly needed before the end of the
            income year to establish beneficiary entitlements. The trust deed can impose its own
            requirements, and different rules can apply to capital gains and franked distributions.
            Financially Up can prepare the accounting and tax information needed for the trust&apos;s
            annual compliance and can separately scope tax advice where distribution planning or a
            more complex tax issue needs to be considered.
          </p>
        </div>

        {/* 3 Core Architecture Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {taxPrinciples.map((item, idx) => (
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
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Distribution Planning & Scoping Reassurance Banner */}
        <div className="rounded-2xl bg-gradient-to-r from-teal-900 via-slate-900 to-slate-950 p-6 sm:p-8 lg:p-10 text-white shadow-lg flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-300 uppercase tracking-wider">
              <ClockCircleOutlined />
              <span>Timely Pre-30 June Preparation</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white m-0">
              Need Distribution Planning or Complex Tax Advice Scoped?
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed m-0 font-normal">
              Ensure your discretionary trust resolutions reflect the latest ATO rulings and deed
              requirements before 30 June. We clarify your annual compliance and separately scope
              strategic distribution advice.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="h-11 px-6 rounded-xl font-semibold shadow-md bg-teal-500 hover:bg-teal-400 border-none text-slate-950 hover:scale-[1.02] transition-all"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
