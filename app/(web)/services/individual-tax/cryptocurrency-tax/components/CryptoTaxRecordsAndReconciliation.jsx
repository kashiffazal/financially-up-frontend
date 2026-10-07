"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  HistoryOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  WarningOutlined,
} from "@ant-design/icons";

/**
 * CryptoTaxRecordsAndReconciliation Component
 * ===========================================
 * Section 5: Records for a crypto tax return.
 * Features 100% complete, verbatim content from Page 8 of the client document.
 */
export default function CryptoTaxRecordsAndReconciliation() {
  const records = [
    "Transaction dates, asset types and quantities",
    "Australian-dollar values and the valuation source used",
    "Acquisition costs, disposal proceeds and fees",
    "Exchange exports, wallet addresses and transaction IDs",
    "Records of transfers between your own wallets",
    "Staking, reward and airdrop information",
    "Relevant contracts or platform statements",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Substantiation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Records for a Crypto Tax Return
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Australian tax legislation requires complete documentation for every acquisition, transfer, and disposal across all exchanges and on-chain wallets.
          </p>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          {/* Left Column: Checklist */}
          <div className="lg:col-span-7 bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 sm:p-8 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <FileProtectOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Complete Transaction History Required
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Statutory Records Checklist
                  </span>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-5">
                Keep a complete transaction history showing:
              </p>

              <div className="space-y-2.5 mb-6">
                {records.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-2.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700/70 text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium"
                  >
                    <CheckCircleOutlined className="text-emerald-500 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 flex items-center justify-between text-2xs text-slate-500 dark:text-zinc-400">
              <span>Binance, CoinSpot, Kraken, Swyftx &amp; DeFi logs accepted</span>
              <Link href="/book-an-appointment">
                <Button
                  type="link"
                  className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto text-xs"
                  icon={<ArrowRightOutlined className="text-xs" />}
                  iconPosition="end"
                >
                  Book Log Reconciliation
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: Statutory Retention & Incomplete Records */}
          <div className="lg:col-span-5 flex flex-col justify-between gap-6">
            {/* Box 1: Retention & Foreign Exchanges */}
            <div className="bg-slate-50/70 dark:bg-zinc-800/60 rounded-3xl p-7 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <HistoryOutlined className="text-xl text-blue-500" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    5-Year Statutory Retention
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  Records generally need to be kept for five years after the relevant disposal, with longer retention where they establish the cost base of assets still held. Reconcile data from multiple or foreign platforms.
                </p>
                <div className="p-3.5 rounded-2xl bg-blue-50/60 dark:bg-blue-950/30 border border-blue-200/70 dark:border-blue-800/40 text-xs text-blue-950 dark:text-blue-200 leading-relaxed">
                  <GlobalOutlined className="mr-1.5" />
                  Australian tax residents must also report worldwide crypto transactions, including overseas exchanges, decentralized platforms and foreign income.
                </div>
              </div>
            </div>

            {/* Box 2: Missing or Incomplete Records */}
            <div className="bg-amber-50/60 dark:bg-amber-950/20 rounded-3xl p-7 border border-amber-200/80 dark:border-amber-800/40 shadow-xs flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <WarningOutlined className="text-xl text-amber-600 dark:text-amber-400" />
                  <h4 className="text-base font-bold text-slate-900 dark:text-white">
                    Handling Incomplete Records
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  If records are incomplete, Financially Up can identify gaps and explain what further information may be needed. Not every missing transaction can necessarily be reconstructed.
                </p>
              </div>

              <div className="pt-4 border-t border-amber-200/60 dark:border-amber-800/60 text-2xs text-amber-900 dark:text-amber-200 font-medium">
                We assist with blockchain explorers (Etherscan, Solscan) to trace missing trade hashes
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
