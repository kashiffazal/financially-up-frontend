"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ShopOutlined,
  HomeOutlined,
  StockOutlined,
  ApartmentOutlined,
  UsergroupAddOutlined,
  TeamOutlined,
  QuestionCircleOutlined,
  NodeIndexOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * CommonSituationsCgtAdvice Component
 * ===================================
 * Section: Common situations where advice is useful
 * Verbatim text from Page 12 of client docx.
 * Features 8 common situations and the verbatim legal/duty disclaimer:
 * "A small business CGT review does not by itself determine GST, state duty,
 * revenue-account treatment or legal consequences. Those matters may require
 * separate advice depending on the transaction."
 */
export default function CommonSituationsCgtAdvice() {
  const situations = [
    {
      icon: (
        <ShopOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Selling a business or business goodwill",
      desc: "Disposals of complete operating enterprises, client books, brand names, or goodwill balances where substantial capital gains arise.",
    },
    {
      icon: (
        <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Selling commercial property used in a business",
      desc: "Disposing of business premises, warehouses, or land used directly in trading operations or held through related entities.",
    },
    {
      icon: (
        <StockOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Selling shares in a private company or interests in a trust",
      desc: "Equity sales where small business participation percentages and concession stakeholder tests must be satisfied.",
    },
    {
      icon: (
        <ApartmentOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title: "Restructuring ownership before a future sale",
      desc: "Strategic restructuring of business assets, subsidiaries, or trust arrangements well in advance of a market disposal.",
    },
    {
      icon: (
        <UsergroupAddOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title: "Retirement or succession transactions",
      desc: "Transferring operations to the next generation or exiting the business upon reaching age 55 or permanent retirement.",
    },
    {
      icon: (
        <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "A sale involving connected entities or family groups",
      desc: "Transactions within complex family group structures where cross-entity control and affiliate rules impact turnover and assets.",
    },
    {
      icon: (
        <QuestionCircleOutlined className="text-xl text-rose-600 dark:text-rose-400" />
      ),
      title: "Uncertainty about aggregated turnover or maximum net asset value",
      desc: "Evaluating borderline balances near the $2M turnover or $6M net asset thresholds before finalizing sale agreements.",
    },
    {
      icon: (
        <NodeIndexOutlined className="text-xl text-cyan-600 dark:text-cyan-400" />
      ),
      title: "A transaction where several CGT concessions may interact",
      desc: "Modelling the sequence of applying general 50% discount, 50% active asset reduction, retirement exemption, and rollover.",
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
            Commercial Scenarios
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Common situations where advice is useful
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Business sales, property disposals, and ownership transfers present
            critical tax considerations that benefit from early evaluation.
          </p>
        </div>

        {/* 8 Situations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {situations.map((item, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <div className="space-y-1">
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Duty & Legal Disclaimer Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-amber-500/20 dark:border-amber-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400" />
              Distinct Tax & Legal Boundaries
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A small business CGT review does not by itself determine GST,
              state duty, revenue-account treatment or legal consequences. Those
              matters may require separate advice depending on the transaction.
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
                Discuss Transaction Scope
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
