"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  BankOutlined,
  SwapOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  IdcardOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

/**
 * PtyLtdCompanyAndNameDifferences Component
 * Covers 'Registering a Pty Ltd company' and 'Company name, business name and ACN are different'
 * from Page 2 of 6th Pillar Business Structures.docx.
 */
export default function PtyLtdCompanyAndNameDifferences() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
          
          {/* Card 1: Registering a Pty Ltd company */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 flex items-center justify-center">
                <BankOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Registering a Pty Ltd company
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A proprietary limited company, commonly shown as &apos;Pty Ltd&apos;, is a common company type for privately owned businesses. ASIC&apos;s requirements apply to the company itself, its officeholders and members. At least one director of an Australian proprietary company must ordinarily live in Australia.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A company setup accountant can help make sure the information used for incorporation is consistent with the business&apos;s intended ownership and tax registrations. However, registration does not determine whether a company is commercially or legally the best structure for you.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/business-structures"
                  className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  Review the broader Business Structures service before proceeding
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>Compliant with Australian residency director rules and ASIC registers.</span>
            </div>
          </div>

          {/* Card 2: Company name, business name and ACN are different */}
          <div className="p-8 sm:p-10 rounded-3xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div className="space-y-5">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300 flex items-center justify-center">
                <SwapOutlined className="text-lg" />
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Company name, business name and ACN are different
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A company name identifies the registered company. An ACN is the unique number issued to a registered company. A business name is a separate registration used when an entity trades under a name other than its own legal name. Registering a company does not automatically mean every trading name is covered.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                This distinction matters when you are preparing bank accounts, contracts, invoices, websites and tax registrations. Using consistent entity details from the outset can reduce administrative problems later.
              </p>

              <div className="pt-2">
                <Link
                  href="/services/business-structures/business-name-registration"
                  className="font-semibold text-purple-600 dark:text-purple-400 hover:underline inline-flex items-center gap-1.5 text-sm"
                >
                  Explore Business Name Registration
                  <ArrowRightOutlined className="text-xs" />
                </Link>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-slate-200 dark:border-zinc-700/80 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400 font-medium">
              <CheckCircleOutlined className="text-purple-600 dark:text-purple-400" />
              <span>Clarity across trading names, corporate names, and legal contracts.</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
