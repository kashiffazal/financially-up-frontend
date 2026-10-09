"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SwapOutlined,
  DollarOutlined,
  AuditOutlined,
  AlertOutlined,
  CheckCircleOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * TrustIncomeVsCashPaid Component
 * ================================
 * Section: Trust Income Is Not the Same as Cash Paid Out
 * Features 100% complete, verbatim content from Page 3 of client docx.
 * Visual contrast between present tax entitlement and physical cash drawings.
 */
export default function TrustIncomeVsCashPaid() {
  const contrastPoints = [
    {
      title: "Taxable Net Income & Entitlement",
      badge: "Tax Assessment",
      badgeColor: "blue",
      icon: (
        <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      points: [
        "Determined by the trust deed formula and s95 net tax income calculations",
        "Created by effective trustee resolution on or before 30 June",
        "Beneficiary is assessed for tax whether funds are withdrawn or left in the trust",
        "Streams specific tax characters such as franking credits or capital gains",
      ],
    },
    {
      title: "Physical Cash Movement & Drawings",
      badge: "Banking & Cashflow",
      badgeColor: "orange",
      icon: (
        <DollarOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      points: [
        "Physical bank transfers or personal drawings throughout the year",
        "Paying cash later does not, by itself, create the required present entitlement",
        "Undrawn distributions become an Unpaid Present Entitlement (UPE) or loan",
        "Cash movement alone does not dictate tax liability or streaming eligibility",
      ],
    },
  ];

  const reviewTriggers = [
    "Net capital gains requiring statutory 50% discount treatment",
    "Franked distributions and streaming franking credits to individuals",
    "Multiple beneficiaries in disparate personal tax brackets",
    "Retained cash reserves needed for ongoing working capital",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="orange"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Tax Concept Clarification
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trust Income Is Not the Same as Cash Paid Out
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A common source of confusion is assuming that tax follows only the
            cash physically transferred to a beneficiary. Trust tax outcomes can
            depend on present entitlement, the trust deed and the tax character
            of income, not simply whether money has moved to a beneficiary’s
            bank account.
          </p>
        </div>

        {/* 2-Column Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {contrastPoints.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/90 dark:border-zinc-700/80 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-700 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <Tag
                    color={card.badgeColor}
                    className="font-semibold text-xs uppercase tracking-wider"
                  >
                    {card.badge}
                  </Tag>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-3">
                  {card.points.map((pt, pIdx) => (
                    <li
                      key={pIdx}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Why Pre-Year-End Review Is Essential */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-teal-50 to-blue-50 dark:from-zinc-900 dark:via-zinc-850 dark:to-zinc-900 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-3xl">
              <div className="flex items-center gap-2">
                <CalendarOutlined className="text-emerald-700 dark:text-emerald-400 text-lg" />
                <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                  Why Pre-30 June Review Is Essential
                </h4>
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                This is one reason trust tax should be reviewed before year-end
                where possible, particularly when the trust has capital gains,
                franked distributions, several beneficiaries or retained cash.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                {reviewTriggers.map((trig, tIdx) => (
                  <div
                    key={tIdx}
                    className="flex items-center gap-2 text-xs text-slate-600 dark:text-zinc-300"
                  >
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-xs shrink-0" />
                    <span>{trig}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="shrink-0 w-full lg:w-auto">
              <Link href="/contact">
                <Button
                  type="primary"
                  className="brand-btn-primary w-full sm:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Schedule Year-End Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
