"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  FileSearchOutlined,
  SendOutlined,
  AuditOutlined,
  HeartOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsOverdue Component
 * =====================================
 * Section 7: How Financially Up can help with overdue tax returns.
 * Features 100% complete, verbatim content from Page 11 of the client document.
 */
export default function HowFinanciallyUpHelpsOverdue() {
  const company = useCompany();

  const services = [
    {
      title: "Identify outstanding income years and likely lodgment requirements",
      icon: <CalendarOutlined className="text-emerald-500 text-lg" />,
      desc: "Checking your complete historical lodgment status directly on the ATO Tax Agent Portal.",
    },
    {
      title: "Prepare prior-year individual tax returns",
      icon: <FileDoneOutlined className="text-blue-500 text-lg" />,
      desc: "Accurately applying statutory rates, thresholds, and deductions applicable to each specific year.",
    },
    {
      title: "Review available income, deduction and ATO information",
      icon: <FileSearchOutlined className="text-amber-500 text-lg" />,
      desc: "Reconciling historical employer PAYG summaries, bank interest, pre-fill and personal records.",
    },
    {
      title: "Identify missing supporting records",
      icon: <AuditOutlined className="text-purple-500 text-lg" />,
      desc: "Pinpointing documentation gaps and advising on acceptable substantiation alternatives.",
    },
    {
      title: "Lodge completed returns after your review and approval",
      icon: <SendOutlined className="text-teal-500 text-lg" />,
      desc: "Transmitting finalized returns securely through the digital ATO portal with full client sign-off.",
    },
    {
      title: "Explain assessments, balances and ATO correspondence relating to the lodged returns",
      icon: <SafetyCertificateOutlined className="text-rose-500 text-lg" />,
      desc: "Providing clear explanations of Notices of Assessment, refunds, or payment balances issued by the ATO.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Practical &amp; Non-Judgmental Support
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company?.legalName || "Financially Up Pty Ltd"} assists individuals Australia-wide with organizing and preparing overdue tax returns in a practical, non-judgmental way. Depending on the agreed scope, we may help to:
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs mb-12">
          <div className="max-w-2xl mb-8">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Practice Capabilities
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Our Prior-Year &amp; Overdue Tax Assistance
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

          {/* Scope Boundaries Note */}
          <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-zinc-700/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
            <p className="m-0 max-w-2xl leading-relaxed">
              Tax-return preparation and lodgment are separate from detailed tax advice, tax planning, objections, debt arrangements and requests for remission. If additional work is required, the proposed scope and fees can be confirmed separately before that work begins.
            </p>
            <Link
              href="/services/individual-tax"
              className="text-brand-primary dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Explore Individual Tax Hub <ArrowRightOutlined className="text-xs" />
            </Link>
          </div>
        </div>

        {/* Non-Judgmental Empathy Callout */}
        <div className="rounded-3xl p-6 sm:p-8 bg-linear-to-r from-emerald-500/10 via-brand-primary/5 to-transparent dark:from-emerald-950/40 dark:via-zinc-800/40 dark:to-transparent border border-emerald-200 dark:border-emerald-800/50 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/60 text-emerald-800 dark:text-emerald-200 text-xs font-semibold mb-3">
              <HeartOutlined /> No Judgment, Just Clarity
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Ready to Catch Up on Missing Tax Returns?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 mt-1 leading-relaxed">
              Falling behind happens for many reasons. We provide a calm, structured path forward to help you become fully up to date with the ATO with confidence and complete peace of mind.
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
