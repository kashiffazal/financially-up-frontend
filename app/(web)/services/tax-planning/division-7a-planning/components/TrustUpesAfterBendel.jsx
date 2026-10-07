"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  ApartmentOutlined,
  WarningOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * TrustUpesAfterBendel Component
 * ==============================
 * Section 4: Current Australian tax law position following the landmark High Court
 * decision in Commissioner of Taxation v Bendel (10 June 2026), addressing
 * unpaid present entitlements (UPEs) and remaining trust-company exposure.
 * Verbatim text from Page 9 of the Tax Planning document.
 */
export default function TrustUpesAfterBendel() {
  const legalTakeaways = [
    {
      title: "High Court Bendel Ruling",
      desc: "Held that UPEs were not section 109D loans merely because the private company had not demanded payment and the trust retained the amount.",
    },
    {
      title: "Surviving Division 7A Exposure",
      desc: "Other Division 7A provisions can still apply, and a UPE may be replaced or satisfied by a separate loan or arrangement requiring its own analysis.",
    },
    {
      title: "Nuanced Advisory Approach",
      desc: "Current advice avoids treating every UPE as an automatic section 109D loan, while recognizing that Bendel does not eliminate all risk from trust-company arrangements.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Case Law &amp; Trust Distributions
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Current Position on Trust UPEs After Bendel
          </h2>
        </div>

        {/* Verbatim High Court Decision Breakdown */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm flex items-start gap-4">
            <ApartmentOutlined className="text-2xl text-brand-primary dark:text-emerald-400 mt-1 shrink-0" />
            <p>
              The High Court’s 10 June 2026 decision in Commissioner of Taxation v Bendel is important for trusts with a private company beneficiary. The Court held that the unpaid present entitlements considered in that case were not loans for section 109D merely because the private company had not demanded payment and the trust retained the amount.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm flex items-start gap-4">
            <WarningOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
            <p>
              That does not mean all Division 7A issues involving trusts have disappeared. Other Division 7A provisions can still apply, and a UPE may be replaced or satisfied by a separate loan or arrangement requiring its own analysis.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm flex items-start gap-4">
            <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
            <p>
              Current Division 7A loan advice should therefore avoid treating every unpaid present entitlement as an automatic section 109D loan, while also recognizing that Bendel does not remove all risk from trust-company arrangements. Our Trust Tax Returns service covers the underlying trust reporting.
            </p>
          </div>
        </div>

        {/* Key Takeaways Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {legalTakeaways.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/70 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <CheckCircleOutlined className="text-emerald-500 text-lg mb-3" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Link to Trust Tax Returns */}
        <div className="max-w-md mx-auto text-center">
          <Link href="/services/business-tax/trust-tax-returns">
            <Button
              type="primary"
              size="large"
              className="bg-brand-primary dark:bg-emerald-500 hover:bg-brand-primary/90 text-white font-bold px-8 h-12 rounded-xl text-sm shadow-md"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Explore Trust Tax Returns Service
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
