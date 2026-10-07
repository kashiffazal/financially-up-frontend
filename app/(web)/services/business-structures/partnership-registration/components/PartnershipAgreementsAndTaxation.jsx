"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * PartnershipAgreementsAndTaxation Component
 * Covers 'Do you need a partnership agreement?' and 'How is partnership income taxed?'
 * from Page 6 of 6th Pillar Business Structures.docx.
 */
export default function PartnershipAgreementsAndTaxation() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: Do you need a partnership agreement? */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <FileTextOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Do you need a partnership agreement?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A written partnership agreement is not simply an accounting document, but it can be an important part of a well-managed partnership. It can set expectations about ownership, contributions, roles, profit and loss sharing, decisions, admission or exit of partners, dispute processes and what happens if the partnership ends.
              </p>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-700 flex items-start gap-2.5 text-xs text-slate-600 dark:text-zinc-300">
                <InfoCircleOutlined className="text-sm text-blue-600 shrink-0 mt-0.5" />
                <span>
                  Financially Up can help explain the accounting and tax issues that should be considered when those arrangements are being discussed. Drafting or advising on the legal effect of a partnership agreement should be handled by an appropriately qualified legal adviser.
                </span>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-purple-700 dark:text-purple-400 font-medium">
              <CheckCircleOutlined className="text-sm shrink-0" />
              <span>Clear boundaries defined between financial tax roles and legal drafting.</span>
            </div>
          </div>

          {/* Card 2: How is partnership income taxed? */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <DollarOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                How is partnership income taxed?
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A partnership generally lodges an annual partnership tax return that reports the partnership’s income, deductions and the allocation of the net result between partners. The partnership itself generally does not pay income tax on that net income in the way a company does. Instead, each partner includes their share of the partnership’s net income in their own tax position, subject to the applicable tax rules.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                This annual tax-return obligation is separate from partnership setup. Our{" "}
                <Link
                  href="/services/business-tax/partnership-tax-returns"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                >
                  partnership tax returns service
                  <ArrowRightOutlined className="text-xs" />
                </Link>{" "}
                focuses on preparing and lodging the ongoing partnership tax return after the structure is operating.
              </p>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-emerald-700 dark:text-emerald-400 font-medium">
              <CheckCircleOutlined className="text-sm shrink-0" />
              <span>Annual reporting with net results allocated directly to each partner.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
