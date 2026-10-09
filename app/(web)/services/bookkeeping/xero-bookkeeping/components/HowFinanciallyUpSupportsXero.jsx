"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileSearchOutlined,
  BankOutlined,
  CheckCircleOutlined,
  QuestionCircleOutlined,
  ClearOutlined,
  AuditOutlined,
  InteractionOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * HowFinanciallyUpSupportsXero Component
 * =======================================
 * Section 5: How Financially Up Can Help with Xero Bookkeeping
 * Features 100% complete, verbatim content from Page 2 of client docx.
 */
export default function HowFinanciallyUpSupportsXero() {
  const serviceActions = [
    {
      icon: (
        <FileSearchOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Review the current Xero bookkeeping process",
      desc: "Detailed diagnostic of how transactions are entered, rules are applied, and bank feeds are managed.",
    },
    {
      icon: (
        <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Reconcile bank and credit-card accounts",
      desc: "Rigorous alignment between external financial institution feeds and internal ledger balances.",
    },
    {
      icon: (
        <CheckCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Code and review transactions within the agreed scope",
      desc: "Accurate allocation across chart of accounts with verified Australian GST treatment.",
    },
    {
      icon: (
        <QuestionCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Identify bookkeeping items requiring clarification",
      desc: "Proactive communication regarding unexplained debits, missing receipts, and non-routine transfers.",
    },
    {
      icon: (
        <ClearOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Clean up incomplete or inconsistent records",
      desc: "Resolving duplicate entries, historical discrepancies, and out-of-balance suspense accounts.",
    },
    {
      icon: (
        <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title:
        "Prepare bookkeeping records for separately scoped BAS, tax or accounting work",
      desc: "Delivering reconciled underlying records ready for seamless activity statement and tax compliance.",
    },
    {
      icon: (
        <InteractionOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title:
        "Establish a practical process for receiving documents and resolving queries",
      desc: "Designing simple, recurring workflows for digital receipt submission and query resolution.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Our Service Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up can help with Xero bookkeeping
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            We work collaboratively with your team to maintain clean, accurate,
            and audit-ready records within Xero.
          </p>
        </div>

        {/* 7 Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {serviceActions.map((action, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    {action.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Step 0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {action.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {action.desc}
                </p>
              </div>
            </div>
          ))}

          {/* 8th Card: Consultation Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-950 rounded-2xl p-6 sm:p-7 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                <span>Tailored Package</span>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">
                Customised to Your Business
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 dark:text-emerald-200 leading-relaxed font-normal">
                Whether you need weekly reconciliation, monthly closes, or ad
                hoc clean-up, we structure an engagement that fits your exact
                workflow.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  className="w-full bg-white text-emerald-800 hover:bg-emerald-50 border-none font-bold"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Verbatim Important Scope Disclaimer */}
        <div className="p-6 sm:p-7 rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-3 sm:gap-4">
          <InfoCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            <strong>Important Engagement Scope:</strong> The exact work depends
            on your file and service agreement. Tax advice, BAS preparation and
            lodgement, financial product advice and legal advice are not
            automatically included in a bookkeeping engagement and should be
            scoped separately where required.
          </p>
        </div>
      </div>
    </section>
  );
}
