"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  AuditOutlined,
  WarningOutlined,
  CheckCircleOutlined,
  StopOutlined,
} from "@ant-design/icons";

/**
 * AssetProtectionAndLegalConsiderations Component
 * ===============================================
 * Section 6: Liability exposure, separate legal entity status,
 * director personal liabilities, and legal drafting boundaries.
 * Verbatim text from Page 6 of the Tax Planning document.
 */
export default function AssetProtectionAndLegalConsiderations() {
  const accountingScope = [
    "Tax liability calculations across entities",
    "Division 7A loan agreements and minimum repayments",
    "Capital Gains Tax rollover concession eligibility",
    "PAYG, GST, and superannuation guarantee compliance",
    "Trust distribution tax resolution modeling",
    "Commercial profit & cash-flow forecasts",
  ];

  const legalScope = [
    "Drafting shareholder & buy-sell agreements",
    "Executing formal partnership agreements",
    "Drafting discretionary, unit, or family trust deeds",
    "Asset protection ring-fencing strategies",
    "Commercial leases, supplier & client contracts",
    "Enforcing legal rights or resolving partner disputes",
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider bg-brand-primary/10 text-brand-primary dark:bg-emerald-500/10 dark:text-emerald-400 mb-4 border border-brand-primary/20 dark:border-emerald-500/20">
            Risk &amp; Governance
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 dark:text-white tracking-tight">
            Asset Protection and Legal Considerations
          </h2>
        </div>

        {/* Verbatim Content Paragraphs */}
        <div className="max-w-4xl mx-auto mb-14 space-y-6 text-slate-700 dark:text-zinc-300 text-base sm:text-lg leading-relaxed">
          <div className="bg-white dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm flex items-start gap-4">
            <SafetyCertificateOutlined className="text-2xl text-brand-primary dark:text-emerald-400 mt-1 shrink-0" />
            <p>
              Structure can affect liability and asset exposure, but asset protection is a legal issue as well as a tax and accounting issue. For example, a company is generally a separate legal entity, while directors can still have personal obligations and potential liabilities in some circumstances.
            </p>
          </div>

          <div className="bg-white dark:bg-zinc-900 p-6 sm:p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm flex items-start gap-4">
            <WarningOutlined className="text-2xl text-amber-600 dark:text-amber-400 mt-1 shrink-0" />
            <p>
              Financially Up can explain tax and accounting implications, but legal advice should be obtained for shareholder agreements, partnership agreements, trust deeds, asset-protection strategies, contracts and other legal rights or obligations.
            </p>
          </div>
        </div>

        {/* Clear Professional Scope Delineation Matrix */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Accounting Scope */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-emerald-200 dark:border-emerald-800/60 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 flex items-center justify-center">
                <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Financially Up Accounting Scope
                </h3>
                <span className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold">
                  Tax, Accounting &amp; Compliance Modeling
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              {accountingScope.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  <CheckCircleOutlined className="text-emerald-500 mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Scope */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                <StopOutlined className="text-xl text-slate-600 dark:text-zinc-400" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Legal Practitioner Scope
                </h3>
                <span className="text-xs text-slate-500 dark:text-zinc-400 font-semibold">
                  Independent Legal Counsel Required
                </span>
              </div>
            </div>
            <ul className="space-y-3">
              {legalScope.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 dark:bg-zinc-600 mt-2 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
