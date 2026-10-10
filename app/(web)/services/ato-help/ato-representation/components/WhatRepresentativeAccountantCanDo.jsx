"use client";

import React from "react";
import Link from "next/link";
import {
  TranslationOutlined,
  SendOutlined,
  ClusterOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatRepresentativeAccountantCanDo Component
 * ===========================================
 * Section 4: Practical capabilities of an authorized representative:
 * translating technical issues into checklists, registered agent portal communication,
 * and coordinating overlapping tax obligations (BAS, debt, returns).
 */
export default function WhatRepresentativeAccountantCanDo() {
  const representativeCapabilities = [
    {
      title: "Actionable Issue Translation",
      description:
        "Translate the tax issue into a practical action list, identify what information the ATO is asking for and help present relevant records clearly.",
      icon: <TranslationOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Direct Registered-Agent Channels",
      description:
        "Communicate directly with the ATO through specialized registered-agent channels, check account balances and lodgment status, and follow up on agreed requests.",
      icon: <SendOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Intersecting Obligations Coordination",
      description:
        "When an ATO debt is connected with overdue BAS or returns, coordinate communication across all accounts to ensure lodgments are brought up to date before negotiating repayment plans.",
      icon: <ClusterOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Practical Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            What can an ATO representative accountant do for you?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              An ATO representative accountant can translate the tax issue into a practical action list, identify what information the ATO is asking for and help present relevant records clearly. Where the matter is within our scope, Financially Up can communicate with the ATO through the appropriate registered-agent channels, check account and lodgment information, and follow up on agreed requests.
            </p>
            <p>
              For example, if an ATO debt is connected with overdue BAS or income tax returns, the first task may be to confirm the outstanding lodgments before discussing a payment arrangement. Our ATO debt service focuses on tax debt and payment issues, while our BAS lodgement service covers current BAS preparation and lodgment. ATO representation coordinates the communication and account-side work where those issues intersect.
            </p>
          </div>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {representativeCapabilities.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Intersecting Services Cross-Links */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            href="/services/ato-help/ato-debt"
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 flex items-center justify-between group transition-colors"
          >
            <div>
              <span className="text-[10px] font-bold text-emerald-600 dark:text-emerald-400 uppercase">
                Pillar 11.1
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                ATO Debt & Payment Arrangements
              </h4>
            </div>
            <ArrowRightOutlined className="text-emerald-600 dark:text-emerald-400 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/services/ato-help/overdue-bas"
            className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 flex items-center justify-between group transition-colors"
          >
            <div>
              <span className="text-[10px] font-bold text-teal-600 dark:text-teal-400 uppercase">
                Pillar 11.10
              </span>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mt-0.5">
                Overdue BAS Preparation & Lodgement
              </h4>
            </div>
            <ArrowRightOutlined className="text-teal-600 dark:text-teal-400 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
