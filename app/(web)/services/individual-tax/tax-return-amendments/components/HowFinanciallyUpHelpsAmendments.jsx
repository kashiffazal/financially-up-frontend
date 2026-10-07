"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  FileSearchOutlined,
  FormOutlined,
  CalculatorOutlined,
  AuditOutlined,
  SendOutlined,
  FileDoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsAmendments Component
 * =========================================
 * Section 7: How Financially Up Can Help with tax return amendments.
 * Features 100% complete, verbatim content from Page 12 of the client document.
 */
export default function HowFinanciallyUpHelpsAmendments() {
  const company = useCompany();

  const services = [
    {
      title: "reviewing the lodged return and notice of assessment;",
      icon: <FileSearchOutlined className="text-emerald-500 text-lg" />,
      desc: "Examining original lodgment lines, tax tables applied, and baseline assessment notices.",
    },
    {
      title: "identifying possible errors or omissions;",
      icon: <AuditOutlined className="text-blue-500 text-lg" />,
      desc: "Detecting unreported earnings, missing deductions, or discrepancies in reported figures.",
    },
    {
      title: "checking the supporting records;",
      icon: <CheckCircleOutlined className="text-amber-500 text-lg" />,
      desc: "Validating primary source receipts, bank feeds, payment summaries, and dividend vouchers.",
    },
    {
      title: "considering whether an amendment appears to be the appropriate process;",
      icon: <SafetyCertificateOutlined className="text-purple-500 text-lg" />,
      desc: "Confirming statutory time limits and verifying if an amendment or formal objection is required.",
    },
    {
      title: "preparing corrected amounts and explanations;",
      icon: <CalculatorOutlined className="text-teal-500 text-lg" />,
      desc: "Recalculating revised taxable income and drafting comprehensive reasons for adjustment.",
    },
    {
      title: "preparing or lodging the amendment where authorised and included in the agreed scope; and",
      icon: <SendOutlined className="text-rose-500 text-lg" />,
      desc: "Direct electronic transmission via the ATO Tax Agent Portal under client authorization.",
    },
    {
      title: "reviewing the amended notice of assessment.",
      icon: <FileDoneOutlined className="text-indigo-500 text-lg" />,
      desc: "Auditing the final ATO Amended Notice of Assessment, refund calculations, or revised liabilities.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Professional Practice Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For tax return amendment matters, {company?.legalName || "Financially Up Pty Ltd"} can assist with:
          </p>
        </div>

        {/* 7 Capabilities Cards Grid */}
        <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Practice Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Our Tax Return Amendment Scope
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-between p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 shadow-2xs hover:shadow-xs transition-shadow"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center shrink-0 border border-slate-100 dark:border-zinc-700 mb-3.5">
                    {item.icon}
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Scope Clarification Note */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
            <p className="m-0 max-w-2xl leading-relaxed">
              Where the issue requires separate tax advice, reconstruction of records or a more detailed review, the additional work can be discussed and scoped before proceeding.
            </p>
            <Link
              href="/services/individual-tax"
              className="text-brand-primary dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Individual Tax Hub <ArrowRightOutlined className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Action Callout */}
        <div className="rounded-3xl p-6 sm:p-8 bg-linear-to-r from-emerald-500/10 via-brand-primary/5 to-transparent dark:from-emerald-950/40 dark:via-zinc-800/40 dark:to-transparent border border-emerald-200 dark:border-emerald-800/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 text-xs font-semibold mb-3">
              <SafetyCertificateOutlined /> Registered Tax Agent Support
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Discovered a Mistake on Your Already-Lodged Tax Return?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-1 leading-relaxed">
              We can help determine whether an amendment appears appropriate, what information is required and whether any related tax advice should be scoped separately.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                className="brand-btn-primary font-bold shadow-md"
              >
                Book an Appointment
              </Button>
            </Link>
            {company?.phone && (
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  className="font-semibold text-slate-700 dark:text-zinc-200 border-slate-300 dark:border-zinc-700 hover:border-emerald-500"
                >
                  {company.phone}
                </Button>
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
