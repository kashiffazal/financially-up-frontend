"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  CalendarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * CapitalGainsAndMajorTransactions Component
 * ==========================================
 * Section 6: Capital Gains and Major Transactions.
 * Verbatim text from Page 3 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Explains CGT event A1 timing (contract date vs settlement), cost base elements,
 * capital loss utilization, and links to the comprehensive Capital Gains Tax service.
 */
export default function CapitalGainsAndMajorTransactions() {
  const cgtElements = [
    {
      title: "CGT Event A1: Contract Date Rule",
      desc: "For assets disposed under a contract, the CGT event occurs on the date the contract is signed—not the settlement date. Signing in June incurs tax in that financial year.",
    },
    {
      title: "5-Element Cost Base Calculations",
      desc: "Acquisition price, incidental purchase costs, holding costs, capital expenditure, and title defense costs all contribute to minimising net gain.",
    },
    {
      title: "12-Month 50% CGT Discount",
      desc: "Eligible Australian individual tax residents can access a 50% general discount on assets held for longer than 12 consecutive months.",
    },
    {
      title: "Carried-Forward Capital Losses",
      desc: "Historical capital losses can offset gross capital gains before the 50% discount applies, substantially lowering net assessable gain.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Capital Gains Timing
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Capital Gains and Major Transactions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Capital gains tax is often highly dependent on timing and records.
            For a disposal under a contract, CGT event A1 generally occurs when
            the contract is entered into rather than at settlement. Other CGT
            events can have different timing, so the transaction and documents
            should be reviewed. Cost-base records, ownership history, capital
            losses and any exemption or concession need to be considered before
            assuming the outcome.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            If you are planning a sale or need a detailed CGT calculation, our
            Capital Gains Tax service covers the issue in more depth.
          </p>
        </div>

        {/* 4 CGT Strategy Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {cgtElements.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-colors"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm shrink-0" />
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-normal leading-relaxed pl-6">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Deep Dive Action Card to CGT Service */}
        <div className="rounded-2xl p-6 sm:p-8 bg-slate-100/80 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Planning to sell property, shares, or crypto?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal">
              Review our specialized Capital Gains Tax service for complete
              cost-base modeling and concession reviews.
            </p>
          </div>
          <Link
            href="/services/individual-tax/capital-gains-tax"
            className="shrink-0"
          >
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-11 px-6 shadow-xs"
            >
              Explore Capital Gains Tax
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
