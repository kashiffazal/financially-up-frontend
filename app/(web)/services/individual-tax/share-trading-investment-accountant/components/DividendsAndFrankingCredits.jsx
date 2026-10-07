"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  PercentageOutlined,
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  AuditOutlined,
} from "@ant-design/icons";

/**
 * DividendsAndFrankingCredits Component
 * =====================================
 * Section 2: Dividends and Franking Credits.
 * Features 100% complete, verbatim content from Page 7 of the client document.
 */
export default function DividendsAndFrankingCredits() {
  const dividendTypes = [
    {
      title: "Franked Dividends",
      desc: "Has a franking credit attached, representing company tax (up to 30%) already paid on distributed company profits.",
      badge: "Carries Tax Credit",
    },
    {
      title: "Partly Franked Dividends",
      desc: "Only a portion of the dividend has franking credits attached; remainder is unfranked.",
      badge: "Partial Credit",
    },
    {
      title: "Unfranked Dividends",
      desc: "No franking credit attached; declared in assessable income and fully taxed at marginal rate.",
      badge: "No Tax Credit",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Dividend Taxation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Dividends and Franking Credits
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian companies may pay franked, partly franked or unfranked dividends. A franked dividend has a franking credit attached, representing tax paid by the company on the distributed profit.
          </p>
        </div>

        {/* 3 Dividend Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {dividendTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center text-lg">
                    <DollarOutlined />
                  </div>
                  <Tag className="m-0 font-semibold text-2xs uppercase tracking-wider py-0.5 px-2.5 rounded-full border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                    {item.badge}
                  </Tag>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-2xs text-brand-primary dark:text-emerald-400 font-medium">
                <CheckCircleOutlined />
                <span>Australian Corporate Distribution</span>
              </div>
            </div>
          ))}
        </div>

        {/* Taxation Mechanics & Pre-fill Verification Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Tax Offset & Grossing Up */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <PercentageOutlined className="text-xl text-brand-primary dark:text-emerald-400" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Assessable Income &amp; Tax Offsets
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Where an investor is entitled to the credit, both the franked dividend and attached franking credit are generally included in assessable income, and the credit may provide a tax offset.
              </p>
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/70 dark:border-zinc-700/70 text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                <span className="font-bold text-slate-900 dark:text-white block mb-1">
                  Holding Period Requirements:
                </span>
                Entitlement can be affected by rules such as the holding-period requirements (45-day rule). A franking credit does not automatically produce a refund; the result depends on eligibility and the investor’s overall tax position.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500">
              Refundable tax offsets applied against overall tax liability
            </div>
          </div>

          {/* Card 2: Pre-Fill Verification */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <AuditOutlined className="text-xl text-blue-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Dividend Statements vs ATO Pre-Fill
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Dividend statements should be checked against pre-filled information. Pre-fill data may be incomplete when a return is prepared, so it should not replace the investor’s own statements and records.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                <span className="font-bold block mb-1">
                  Our Professional Audit Check:
                </span>
                We reconcile broker reports (CommSec, CMC, Selfwealth, Superhero, Stake) and registry statements (Computershare, Link Market Services, Boardroom) directly against ATO portal feeds.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-2xs text-slate-400 dark:text-zinc-500">
                Registry statements cross-referenced
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Book Statement Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
