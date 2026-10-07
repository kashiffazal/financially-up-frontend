"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ThunderboltOutlined,
  GiftOutlined,
  AppstoreOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  BranchesOutlined,
} from "@ant-design/icons";

/**
 * StakingAirdropsAndCryptoIncome Component
 * ========================================
 * Section 4: Staking rewards, airdrops and other crypto income.
 * Features 100% complete, verbatim content from Page 8 of the client document.
 */
export default function StakingAirdropsAndCryptoIncome() {
  const incomeTypes = [
    {
      icon: <ThunderboltOutlined className="text-xl text-amber-500" />,
      title: "Staking Rewards",
      badge: "Ordinary Income & CGT",
      desc: "Staking rewards may be ordinary income when derived, depending on the arrangement. A later sale or swap may also have CGT consequences.",
      detail:
        "The AUD market value upon receipt becomes assessable ordinary income, and establishes the cost base for any future capital disposal.",
    },
    {
      icon: <GiftOutlined className="text-xl text-purple-500" />,
      title: "Airdrops & Token Allocations",
      badge: "Market Value at Derivation",
      desc: "Airdrops do not all receive identical treatment. Tokens received for services, promotion or another income-producing activity may be ordinary income at market value when derived. Other arrangements can differ. An amount included as income may also affect the asset's later cost base.",
      detail:
        "Whether airdropped tokens are treated as ordinary income or zero-cost-base CGT assets depends on the token distribution mechanism.",
    },
    {
      icon: <DollarOutlined className="text-xl text-emerald-500" />,
      title: "Crypto for Work or Business",
      badge: "Assessable Income",
      desc: "Crypto received for work or business sales may be assessable income, subject to ordinary Australian income tax rates at fair market value.",
      detail:
        "Salary sacrificed into crypto or payments received as an independent contractor under an ABN must be declared in AUD at the time of payment.",
    },
    {
      icon: <BranchesOutlined className="text-xl text-blue-500" />,
      title: "DeFi, Wrapping & Liquidity Pools",
      badge: "Smart Contract Review",
      desc: "DeFi, wrapping, liquidity and other smart-contract arrangements require review of their legal and practical effect.",
      detail:
        "Wrapping tokens (e.g. ETH to WETH) or depositing into liquidity pools may be treated as a CGT disposal by the ATO depending on whether beneficial ownership is retained.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Yield, Rewards &amp; Smart Contracts
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Staking Rewards, Airdrops and Other Crypto Income
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Digital asset returns often generate dual tax obligations: assessable income upon receipt, followed by capital gains calculations on future disposals.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {incomeTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag className="m-0 font-semibold text-2xs uppercase tracking-wider py-0.5 px-2.5 rounded-full border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                    {item.badge}
                  </Tag>
                </div>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  {item.desc}
                </p>

                <div className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-100 dark:border-zinc-700/60 text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.detail}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-2xs text-brand-primary dark:text-emerald-400 font-medium">
                <CheckCircleOutlined />
                <span>ATO Digital Currency Guidance</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
