"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  BankOutlined,
  CompassOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * CompanyBeneficiariesAndUnpaidEntitlements Component
 * ===================================================
 * Section: Company beneficiaries and unpaid entitlements
 * Verbatim text from Page 11 of client docx (8th Pillar Trust Services.docx).
 * Covers corporate beneficiaries, Unpaid Present Entitlements (UPEs),
 * High Court Bendel decision analysis (Commissioner of Taxation v Bendel [2026] HCA 18),
 * and links to the Division 7A service.
 */
export default function CompanyBeneficiariesAndUnpaidEntitlements() {
  const cards = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Corporate Beneficiaries & UPEs",
      desc: "Where a private company is a beneficiary, unpaid entitlements and later use of the funds can raise additional trust and Division 7A issues.",
    },
    {
      icon: <CompassOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "High Court Bendel Decision Context",
      desc: "In Commissioner of Taxation v Bendel [2026] HCA 18, the High Court held that the unpaid present entitlements arising under the particular deed and resolutions before it were not loans under section 109D.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Deed Terms & Financial Accommodation",
      desc: "The decision does not mean every trust-company balance falls outside Division 7A. The deed, the way the entitlement is created, any later financial accommodation and other transactions must still be considered on their facts.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Corporate Beneficiaries &amp; Division 7A
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Company beneficiaries and unpaid entitlements
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Where a private company is a beneficiary, unpaid entitlements and later use of the funds can raise
            additional trust and Division 7A issues. In Commissioner of Taxation v Bendel [2026] HCA 18, the High Court
            held that the unpaid present entitlements arising under the particular deed and resolutions before it were
            not loans under section 109D. The decision does not mean every trust-company balance falls outside Division
            7A. The deed, the way the entitlement is created, any later financial accommodation and other transactions
            must still be considered on their facts.
          </p>
        </div>

        {/* 3 Analysis Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {cards.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
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

        {/* Cross-Link Callout to Division 7A Service */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Private Company Related-Party Balances
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If your trust has company beneficiaries or related-party balances, separate advice may be appropriate.
              Our{" "}
              <Link
                href="/services/business-tax/division-7a"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Division 7A service
              </Link>{" "}
              addresses private-company Division 7A compliance in more detail.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link
              href="/services/business-tax/division-7a"
              className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors w-full md:w-auto"
            >
              Division 7A Hub <ArrowRightOutlined className="ml-2 text-xs" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
