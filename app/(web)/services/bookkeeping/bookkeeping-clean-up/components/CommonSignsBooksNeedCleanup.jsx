"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  ClockCircleOutlined,
  CopyOutlined,
  QuestionCircleOutlined,
  TeamOutlined,
  FileProtectOutlined,
  UserSwitchOutlined,
  ImportOutlined,
  LineChartOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CommonSignsBooksNeedCleanup Component
 * =====================================
 * Section 2: Common Signs Your Books Need Cleaning Up
 * Features 100% complete, verbatim content from Page 5 of client docx.
 */
export default function CommonSignsBooksNeedCleanup() {
  const signs = [
    {
      icon: <BankOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Bank or credit-card balances in the software do not agree with statements.",
      desc: "Software shows one balance while the actual bank account shows another, breaking cash reconciliation integrity.",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Old unreconciled transactions remain in the bank-reconciliation screen.",
      desc: "Stale payments or unexplained deposits from past quarters linger in the matching feed without resolution.",
    },
    {
      icon: <CopyOutlined className="text-xl text-orange-600 dark:text-orange-400" />,
      title: "The same income or expense appears more than once.",
      desc: "Duplicate bill entries or manual journal entries duplicate automatic bank feed imports, distorting profits.",
    },
    {
      icon: <QuestionCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Large balances sit in suspense, uncategorized or clearing accounts.",
      desc: "Transactions were parked into holding accounts during data entry and never allocated to proper accounts.",
    },
    {
      icon: <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Supplier or customer balances do not make sense.",
      desc: "Aged debtor or creditor schedules display paid bills as overdue or show negative balances.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "GST coding is inconsistent or transactions are missing tax treatment information.",
      desc: "Similar supplier expenses are tagged with conflicting BAS tax codes or default without GST verification.",
    },
    {
      icon: <UserSwitchOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Personal and business transactions have been mixed without clear treatment.",
      desc: "Private director drawings and business purchases flow through the same account without drawings or loan separation.",
    },
    {
      icon: <ImportOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />,
      title: "Opening balances were imported incorrectly during a software change.",
      desc: "Migrating from spreadsheets or another system left carry-forward equity and bank balances out of balance.",
    },
    {
      icon: <LineChartOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Reports vary materially depending on how transactions have been coded.",
      desc: "Inconsistent accounting definitions produce erratic profit and loss swings that obscure true commercial trends.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-slate-600 dark:text-slate-400" />,
      title: "The file has passed through several bookkeepers and there is no consistent process.",
      desc: "Differing methods and philosophies over time have left disjointed chart-of-accounts conventions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Diagnostic Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common Signs Your Books Need Cleaning Up
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            If you recognise one or more of these symptoms in your ledger, a professional diagnostic clean-up will restore order and accounting reliability.
          </p>
        </div>

        {/* 10 Signs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {signs.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-400/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 flex items-center justify-center mb-5 shadow-xs">
                  {item.icon}
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal pl-6">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-6">
                <span>Sign {idx < 9 ? `0${idx + 1}` : idx + 1}</span>
              </div>
            </div>
          ))}

          {/* 11th & 12th Unified Strategic CTA Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-950 rounded-2xl p-6 sm:p-7 text-white shadow-md flex flex-col justify-between md:col-span-2 lg:col-span-2">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                <span>Diagnostic Assessment</span>
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                Need an Expert Ledger Health Check?
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 dark:text-emerald-200 leading-relaxed font-normal">
                Our qualified accountants review your file, diagnose the root causes of discrepancy, and outline a fixed-scope clean-up plan before making adjustments.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
              <span className="text-xs text-emerald-100">
                Registered Tax Agent #26234055 • CPA &amp; IPA Qualified
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  className="bg-white text-emerald-800 hover:bg-emerald-50 border-none font-bold"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Verbatim Guidance Box */}
        <div className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Unsure whether you need Catch-Up or Clean-Up?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If the main problem is that transactions have not been entered at all for recent months, Catch-Up Bookkeeping may be the more direct service. If the records are current but need an ongoing monthly process after the clean-up, Monthly Bookkeeping can help maintain the file going forward.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link href="/services/bookkeeping/catch-up-bookkeeping">
              <Button type="default" size="middle" className="font-medium text-xs sm:text-sm">
                Catch-Up Bookkeeping
              </Button>
            </Link>
            <Link href="/services/bookkeeping/monthly-bookkeeping">
              <Button type="primary" size="middle" className="font-bold text-xs sm:text-sm">
                Monthly Bookkeeping
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
