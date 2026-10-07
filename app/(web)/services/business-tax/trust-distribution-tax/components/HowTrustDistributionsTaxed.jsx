"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  UserOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * HowTrustDistributionsTaxed Component
 * ====================================
 * Section: How are trust distributions taxed?
 * Verbatim text from Page 11 of client docx.
 * Covers:
 * - Difference between trust taxation and company taxation
 * - Present entitlement to trust net income
 * - Specific allocation of capital gains and franked distributions
 * - Trustee assessment liabilities when no beneficiary is entitled.
 */
export default function HowTrustDistributionsTaxed() {
  const principles = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Distinct from Company Taxation",
      desc: "A trust is not automatically taxed like a company. Trusts are generally conduit structures where taxable net income flows through to entitled beneficiaries rather than paying entity-level flat corporate tax.",
    },
    {
      icon: <UserOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Present Entitlement Assessment",
      desc: "In broad terms, the way trust net income is assessed depends on matters such as whether beneficiaries are presently entitled to trust income and whether particular capital gains or franked distributions are specifically allocated under the relevant rules.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Trustee Liability on Undistributed Income",
      desc: "The trustee may be assessed on some amounts where there is no beneficiary who is appropriately entitled, or where the tax law otherwise places the liability on the trustee. The result can differ significantly between trusts and between income years.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Trust Taxation Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How are trust distributions taxed?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A trust is not automatically taxed like a company. In broad terms, the way trust net income is assessed depends on matters such as whether beneficiaries are presently entitled to trust income and whether particular capital gains or franked distributions are specifically allocated under the relevant rules.
          </p>
        </div>

        {/* 3 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {principles.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Verbatim Explanatory Box: Annual Variability */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Annual Assessment Outcomes Differ Across Years
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The trustee may be assessed on some amounts where there is no beneficiary who is appropriately entitled, or where the tax law otherwise places the liability on the trustee. The result can differ significantly between trusts and between income years.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Discuss Trust Assessment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
