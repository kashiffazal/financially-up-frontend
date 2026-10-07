"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  BranchesOutlined,
  ExclamationCircleOutlined,
  CheckCircleOutlined,
  RiseOutlined,
  UserAddOutlined,
  UserDeleteOutlined,
  SwapOutlined,
  SafetyOutlined,
  BankOutlined,
  AppstoreOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatDoesRestructuringInvolve Component
 * Covers 'What does business restructuring involve?', formal Part 5.3B insolvency distinction,
 * and 'When may a business restructure be considered?' from Page 8 of 6th Pillar Business Structures.docx.
 */
export default function WhatDoesRestructuringInvolve() {
  const triggers = [
    {
      text: "Business growth and increasing commercial complexity",
      icon: <RiseOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
    },
    {
      text: "Bringing in a new owner, partner or investor",
      icon: <UserAddOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
    },
    {
      text: "An existing owner exiting or succession planning beginning",
      icon: <UserDeleteOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
    },
    {
      text: "Moving from sole trader or partnership operations to a company",
      icon: <SwapOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
    },
    {
      text: "Changes in asset ownership or how business risk is managed",
      icon: <SafetyOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
    },
    {
      text: "New financing, contracting or operational requirements",
      icon: <BankOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
    },
    {
      text: "A need to separate different business activities or assets",
      icon: <AppstoreOutlined className="text-cyan-600 dark:text-cyan-400 text-lg" />,
    },
    {
      text: "A review of tax, administration and ongoing compliance requirements",
      icon: <FileDoneOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Main Explanation Header */}
        <div className="max-w-3xl">
          <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
            <BranchesOutlined className="mr-1.5" />
            Entity & Operating Transition
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does business restructuring involve?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A business restructure changes how a business is owned, operated or legally structured. It is different from simply updating bookkeeping or lodging a tax return. It can require a coordinated transition from one entity or arrangement to another, including new registrations, asset transfers, accounting entries, tax treatment and closure or updating of old registrations.
          </p>
        </div>

        {/* Important Clarification: Commercial Restructure vs Part 5.3B Formal Insolvency */}
        <div className="p-6 sm:p-8 rounded-2xl bg-amber-50/70 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-800/50 shadow-xs">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-100 dark:bg-amber-900/50 flex items-center justify-center shrink-0">
              <ExclamationCircleOutlined className="text-amber-700 dark:text-amber-400 text-2xl" />
            </div>
            <div className="space-y-2">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                Commercial Transition vs Insolvency Restructuring (Part 5.3B)
              </h3>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
                This service concerns changes to a business&apos;s entity, ownership or operating structure. It is not the formal small business restructuring process under Part 5.3B of the Corporations Act for an eligible company in financial distress, which involves a registered restructuring practitioner and may require insolvency and legal advice.
              </p>
            </div>
          </div>
        </div>

        {/* When may a business restructure be considered? */}
        <div className="space-y-8">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
              When may a business restructure be considered?
            </h3>
            <p className="mt-2 text-sm sm:text-base text-slate-600 dark:text-zinc-400">
              Businesses evolve over time, leading owners to re-evaluate their legal and operational framework across common commercial triggers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {triggers.map((item, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between hover:border-emerald-500/50 hover:shadow-sm transition-all"
              >
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <p className="text-sm font-semibold text-slate-800 dark:text-zinc-200 leading-snug pt-1">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Cross-link to Structure Advice */}
          <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed">
              If the main question is which structure should be used before any implementation work begins, see our <strong className="text-slate-900 dark:text-white">Business Structure Advice</strong> service. Business restructuring services focus on the practical and professional work involved in changing an existing arrangement.
            </p>
            <Link
              href="/services/business-structures/business-structure-advice"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-zinc-800 border border-slate-300 dark:border-zinc-600 text-brand-primary dark:text-emerald-400 text-sm font-semibold hover:border-emerald-500 transition-all shrink-0 shadow-xs"
            >
              Business Structure Advice
              <ArrowRightOutlined className="text-xs" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
