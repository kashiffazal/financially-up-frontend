"use client";

import React from "react";
import {
  HomeOutlined,
  TeamOutlined,
  IdcardOutlined,
  CalendarOutlined,
  CheckCircleFilled,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoReportsAndOwnership Component
 * =================================
 * Section 1: Who needs to report overseas rent & How ownership affects calculation
 * Exact verbatim content from Client Document (Page 5).
 */
export default function WhoReportsAndOwnership() {
  return (
    <section className="py-16 md:py-20 bg-slate-50 dark:bg-zinc-900/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Card 1: Who needs to report overseas rent */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl mb-5">
                <HomeOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                Who Needs to Report Overseas Rent
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                Australian residents for tax purposes generally declare worldwide income, including rent from property outside Australia, subject to applicable rules and exceptions. The position can differ for a foreign resident or a person who qualifies as a temporary resident for tax purposes. The country where the property sits, the bank account receiving the rent and the owner's citizenship do not by themselves determine whether the income belongs in an Australian return.
              </p>
              <div className="p-4 rounded-xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  Timing also matters when you become or cease to be an Australian resident during a year. Rent, expenses and foreign tax may need to be separated by relevant periods. If residency is uncertain, that question should be resolved before a rental schedule is prepared.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Tax status and physical location of real property are reviewed independently.
            </div>
          </div>

          {/* Card 2: How ownership affects the Australian calculation */}
          <div className="p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-sm flex flex-col justify-between h-full">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center text-blue-600 dark:text-blue-400 text-2xl mb-5">
                <TeamOutlined />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight mb-4">
                How Ownership Affects the Australian Calculation
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The legal ownership and entity records should be checked. Where individuals co-own a property, rental income and expenses are generally attributed according to their legal interests rather than the account into which rent is deposited or an informal family agreement. A property held through a company, trust or other entity raises different reporting questions from a property held personally.
              </p>
              <div className="p-4 rounded-xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/60">
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
                  Bring the title or acquisition documents and any ownership agreement. If ownership changed, or a property was transferred between family members or entities, the transfer may raise separate tax, valuation and legal issues. Those questions should not be hidden inside the annual rental calculation.
                </p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Legal title ownership strictly determines statutory income & expense apportionment.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
