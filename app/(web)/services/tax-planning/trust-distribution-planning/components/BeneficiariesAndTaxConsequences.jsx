"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  UserOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * BeneficiariesAndTaxConsequences Component
 * =========================================
 * Section 3: Present entitlement taxation principles (Section 97),
 * accounting income vs net taxable income, integrity provisions,
 * and corporate beneficiary interactions with Division 7A.
 * Verbatim text from Page 10 of the Tax Planning document.
 */
export default function BeneficiariesAndTaxConsequences() {
  const considerations = [
    "Trust income defined under the deed vs tax law net income",
    "Beneficiary eligibility within the deed's beneficiary classes",
    "Prior-year unpaid entitlements and family loan accounts",
    "Integrity provisions, reimbursement agreements & Section 100A",
    "Corporate beneficiaries taxed at company flat rates",
    "Interactions with Division 7A benchmark interest and loan rules",
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-900 border-b border-slate-100 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Tax Assessment &amp; Integrity
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Beneficiaries, Present Entitlement and Tax Consequences
          </h2>
        </div>

        {/* Verbatim Paragraphs 1 & 2 */}
        <div className="max-w-4xl mx-auto mb-12 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <div className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex items-start gap-4">
            <UserOutlined className="text-2xl text-brand-primary dark:text-emerald-400 mt-1 shrink-0" />
            <p>
              In broad terms, a beneficiary who is presently entitled to a share of trust income may be assessed on a corresponding share of the trust’s taxable income, subject to the specific rules that apply. The trustee may instead be assessed on some amounts in particular circumstances.
            </p>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-800/60 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex items-start gap-4">
            <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
            <p>
              Good trust tax planning therefore looks beyond the accounting profit. It considers the trust’s income under the deed, taxable income, beneficiary eligibility, prior-year arrangements and whether any integrity provisions may be relevant. Distribution outcomes should not be based only on a beneficiary’s marginal tax rate.
            </p>
          </div>
        </div>

        {/* Holistic Analysis Checklist */}
        <div className="max-w-4xl mx-auto mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          {considerations.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 dark:bg-zinc-800/40 p-4 sm:p-5 rounded-xl border border-slate-200/70 dark:border-zinc-700/60 flex items-start gap-3"
            >
              <CheckCircleOutlined className="text-emerald-500 mt-1 shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-300">
                {item}
              </span>
            </div>
          ))}
        </div>

        {/* Verbatim Paragraph 3 on Corporate Beneficiaries & Division 7A Link */}
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-slate-900 to-slate-800 dark:from-zinc-900 dark:to-zinc-800 text-white rounded-3xl p-8 sm:p-10 shadow-xl">
          <div className="flex items-start gap-4 mb-6">
            <BankOutlined className="text-2xl text-emerald-400 mt-1 shrink-0" />
            <div className="space-y-2">
              <h3 className="text-lg sm:text-xl font-bold">
                Private Company Beneficiaries &amp; Division 7A Interaction
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Where a private company is or may become a beneficiary, the interaction with private-company tax rules may also need review. Our linked Division 7A service explains the broader rules, while separately scoped advice may be needed for a particular trust-company arrangement.
              </p>
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 flex justify-end">
            <Link href="/services/tax-planning/division-7a-planning">
              <Button
                type="link"
                className="p-0 font-bold text-emerald-400 hover:text-emerald-300 inline-flex items-center gap-1.5 text-xs sm:text-sm h-auto"
                icon={<ArrowRightOutlined className="text-xs" />}
                iconPosition="end"
              >
                Explore Division 7A Planning Service
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
