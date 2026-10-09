"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  DollarCircleOutlined,
  StopOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * PaymentsExpensesDebtForgiveness Component
 * =========================================
 * Section: Payments, Private Expenses and Debt Forgiveness
 * Verbatim copy from Page 9 of client docx.
 * Explains private-company funds used for shareholder benefit, bookkeeping labels,
 * debt forgiveness, and why bookkeeping labels do not determine tax outcomes.
 */
export default function PaymentsExpensesDebtForgiveness() {
  const benefitCategories = [
    {
      icon: (
        <DollarCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Payments of Private Expenses",
      desc: "Private-company funds used to pay personal expenses, credit cards, or living costs recorded through shareholder or drawings accounts.",
    },
    {
      icon: (
        <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Benefits Recorded in Shareholder Accounts",
      desc: "Use of company assets, transfers of property, or personal benefits provided directly to a shareholder or associate without formal documentation.",
    },
    {
      icon: (
        <StopOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Debt Forgiveness",
      desc: "Where a private company waives, releases, or forgives a debt legally owed by a shareholder or associate in relevant circumstances.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Beyond Formal Loan Documents
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Payments, Private Expenses and Debt Forgiveness
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Division 7A is not limited to formal loan documents. Private-company
            funds used for a shareholder or associate&apos;s benefit can require
            review, including payments of private expenses or other benefits
            recorded through shareholder accounts. Debt forgiveness can also
            fall within Division 7A in relevant circumstances.
          </p>
        </div>

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {benefitCategories.map((item, idx) => (
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

        {/* Verbatim Critical Box: Bookkeeping Labels Do Not Determine Outcome */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-amber-500/20 dark:border-amber-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AuditOutlined className="text-amber-600 dark:text-amber-400" />
              Bookkeeping Labels vs. Tax Reality
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Bookkeeping labels do not determine the tax outcome. The
              transaction, available exclusions, documentation and surrounding
              circumstances must be reviewed.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Review Transactions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
