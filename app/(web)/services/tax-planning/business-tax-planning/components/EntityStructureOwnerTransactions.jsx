"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ApartmentOutlined,
  AlertOutlined,
  ArrowRightOutlined,
  BankOutlined,
  PartitionOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * EntityStructureOwnerTransactions Component
 * ===========================================
 * Section 5: Entity Structure and Owner Transactions.
 * Verbatim text from Page 2 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Covers company, trust, partnership, and sole trader structural evolution,
 * Division 7A private company loan pitfalls, and boundaries between tax advice and legal drafting.
 */
export default function EntityStructureOwnerTransactions() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Structural Alignment
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Entity Structure and Owner Transactions
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A business structure affects tax and registration obligations and
            can also affect how profits, losses and owner transactions are
            treated. A structure that was appropriate when the business started
            may need review as ownership, risk, profit or long-term objectives
            change.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Tax advice can address the tax consequences of a proposed structure
            or restructure. Legal establishment documents, changes to governing
            documents and other legal implementation work may require a
            separately qualified legal adviser.
          </p>
        </div>

        {/* 2 Strategic Blocks */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Block 1: Annual Return Compliance & Entity Types */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-6">
                <ApartmentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Entity Compliance &amp; Structural Health
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                For companies, annual return preparation is covered separately
                under Company Tax Returns. Trust return compliance is covered
                under Trust Tax Returns.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2 mb-6">
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    Company Returns
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal">
                    Corporate tax rates, franking accounts &amp; retained
                    profits.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-slate-50 dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800">
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white mb-1">
                    Trust Returns
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 font-normal">
                    Discretionary &amp; unit trust resolutions before 30 June.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-slate-100 dark:border-zinc-800">
              <Link
                href="/services/business-tax/company-tax-returns"
                className="flex-1"
              >
                <Button
                  type="default"
                  className="w-full rounded-xl font-semibold border-slate-300 dark:border-zinc-700 h-10 text-xs"
                >
                  Company Tax Returns
                </Button>
              </Link>
              <Link
                href="/services/business-tax/trust-tax-returns"
                className="flex-1"
              >
                <Button
                  type="default"
                  className="w-full rounded-xl font-semibold border-slate-300 dark:border-zinc-700 h-10 text-xs"
                >
                  Trust Tax Returns
                </Button>
              </Link>
            </div>
          </div>

          {/* Block 2: Division 7A & Private Company Owner Loans */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-100 dark:border-amber-800/40 flex items-center justify-center mb-6">
                <AlertOutlined className="text-xl text-amber-600 dark:text-amber-400" />
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Owner Transactions &amp; Division 7A
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Owner transactions require particular care. Loans, payments or
                other benefits involving a private company and shareholders or
                associates can raise Division 7A issues depending on the facts.
                Detailed treatment belongs within a specific review rather than
                being assumed from a year-end balance.
              </p>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal mb-6">
                If this is a concern, see our Division 7A service.
              </p>

              <div className="rounded-xl bg-white dark:bg-zinc-900 p-4 border border-slate-200/80 dark:border-zinc-800 mb-6">
                <div className="text-xs font-bold text-amber-700 dark:text-amber-400 mb-1">
                  Compliance Risk Alert
                </div>
                <p className="text-xs text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
                  Unmanaged drawings or shareholder debit balances can be deemed
                  unfranked dividends by the ATO if not covered by a compliant
                  Division 7A loan agreement and benchmark interest payments.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800">
              <Link href="/services/tax-planning/division-7a-planning">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="w-full rounded-xl font-bold bg-brand-primary dark:bg-emerald-500 text-white hover:bg-brand-primary/90 h-11"
                >
                  Explore Division 7A Planning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
