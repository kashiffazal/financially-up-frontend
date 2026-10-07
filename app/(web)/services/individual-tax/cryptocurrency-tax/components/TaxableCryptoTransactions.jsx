"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  DollarOutlined,
  SwapOutlined,
  ShoppingCartOutlined,
  GiftOutlined,
  WalletOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * TaxableCryptoTransactions Component
 * ===================================
 * Section 2: Which crypto transactions may have tax consequences?
 * Features 100% complete, verbatim content from Page 8 of the client document.
 */
export default function TaxableCryptoTransactions() {
  const disposalEvents = [
    {
      icon: <DollarOutlined className="text-xl text-emerald-500" />,
      title: "Fiat Conversions",
      desc: "Sell crypto for Australian dollars or another fiat currency",
      badge: "CGT Event A1",
    },
    {
      icon: <SwapOutlined className="text-xl text-blue-500" />,
      title: "Crypto-to-Crypto Swaps",
      desc: "Swap one crypto asset for another (e.g. BTC to ETH or USDT)",
      badge: "Disposal & Acquisition",
    },
    {
      icon: <ShoppingCartOutlined className="text-xl text-amber-500" />,
      title: "Purchasing Goods/Services",
      desc: "Use crypto to buy goods or services from a merchant",
      badge: "Commercial Spend",
    },
    {
      icon: <GiftOutlined className="text-xl text-purple-500" />,
      title: "Gifting & Transfers",
      desc: "Gift crypto to another person or transfer ownership",
      badge: "Market Value Proceeds",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Taxable Disposals
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Which Crypto Transactions Have Tax Consequences?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Under ATO rules, disposing of digital currency encompasses far more than withdrawing funds back to an Australian bank account.
          </p>
        </div>

        {/* 4 Disposal Categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {disposalEvents.map((item, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-3xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-100 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag className="m-0 font-semibold text-2xs uppercase tracking-wider py-0.5 px-2 rounded-full border-slate-300 dark:border-zinc-700 bg-slate-50 dark:bg-zinc-800 text-slate-700 dark:text-zinc-300">
                    {item.badge}
                  </Tag>
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-2xs text-brand-primary dark:text-emerald-400 font-medium">
                <CheckCircleOutlined />
                <span>CGT Event Trigger</span>
              </div>
            </div>
          ))}
        </div>

        {/* Swaps & Wallet-to-Wallet Deep Dive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Card 1: Crypto Swaps */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <SwapOutlined className="text-xl text-blue-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Crypto-to-Crypto Swaps
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                A crypto-to-crypto swap generally involves disposing of one asset and acquiring another. The Australian-dollar market value at the time is usually needed, even if no cash changes hands.
              </p>
              <div className="p-4 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
                <span className="font-bold block mb-1">
                  Tax Calculation Note:
                </span>
                For example, swapping BTC for ETH requires determining the AUD value of the BTC at the exact minute of the transaction to calculate capital gain or loss on the BTC disposal, which then becomes the cost base of the newly acquired ETH.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500">
              Historical AUD spot rates applied to every on-chain swap
            </div>
          </div>

          {/* Card 2: Wallet Transfers */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <WalletOutlined className="text-xl text-emerald-500" />
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Wallet-to-Wallet Transfers
                </h3>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Moving crypto between accounts you beneficially own is generally not a disposal merely because its location changes. Keep evidence linking both sides. Fees paid in crypto and changes in beneficial ownership may have separate consequences.
              </p>
              <div className="p-4 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/40 text-xs text-amber-950 dark:text-amber-200 leading-relaxed">
                <span className="font-bold block mb-1">
                  Gas &amp; Network Fees:
                </span>
                Transferring tokens between MetaMask and a Ledger hardware wallet is non-taxable, but network gas fees paid in native crypto (e.g. ETH) to execute the transfer constitute a disposal of that gas amount.
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-2xs text-slate-400 dark:text-zinc-500">
                Beneficial ownership proof required
              </span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Book Transaction Review
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
