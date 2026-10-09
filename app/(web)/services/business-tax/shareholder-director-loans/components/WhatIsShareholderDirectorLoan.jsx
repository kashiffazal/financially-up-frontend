"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SwapOutlined,
  SafetyCertificateOutlined,
  FileTextOutlined,
  ArrowRightOutlined,
  DollarCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsShareholderDirectorLoan Component
 * =======================================
 * Section: What is a shareholder or director loan?
 * Verbatim text from Page 10 of client docx.
 * Focuses on loan directionality (company-to-individual vs individual-to-company)
 * and Division 7A unfranked dividend rules.
 */
export default function WhatIsShareholderDirectorLoan() {
  const directionCards = [
    {
      icon: (
        <DollarCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Company Lending to Shareholder / Associate",
      desc: "Where private company funds are advanced to a director, shareholder, or relative. For private companies, Division 7A can treat certain payments, loans or forgiven debts provided to shareholders or their associates as unfranked dividends unless an exclusion applies or the arrangement satisfies the relevant rules.",
      tag: "Division 7A Risk",
    },
    {
      icon: (
        <SwapOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Shareholder Lending to Company",
      desc: "Where a shareholder or director introduces personal funds to finance business operations. This raises entirely different tax considerations and is not treated in the same way as company-to-shareholder advances.",
      tag: "Company Liability",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Loan Definition & Directionality
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is a shareholder or director loan?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A shareholder loan tax or director loan usually refers to money owed
            between a company and a shareholder, director or related person. The
            direction of the loan matters. A company lending money to a
            shareholder or associate can raise different tax issues from a
            shareholder lending money to the company.
          </p>
        </div>

        {/* Direction Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {directionCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <Tag
                    color={idx === 0 ? "orange" : "blue"}
                    className="font-semibold text-xs"
                  >
                    {card.tag}
                  </Tag>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Explanatory Box: Accurate Records Requirement */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />
              Why Accurate Loan-Account Records Are Vital
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              For private companies, Division 7A can treat certain payments,
              loans or forgiven debts provided to shareholders or their
              associates as unfranked dividends unless an exclusion applies or
              the arrangement satisfies the relevant rules. That is why accurate
              loan-account records are important.
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
                Review Loan Account
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
