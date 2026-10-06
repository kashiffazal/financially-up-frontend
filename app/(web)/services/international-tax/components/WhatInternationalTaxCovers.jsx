"use client";

import React from "react";
import { Button } from "antd";
import {
  GlobalOutlined,
  CheckCircleOutlined,
  UserOutlined,
  ShopOutlined,
  ArrowRightOutlined,
  InfoCircleOutlined,
  CompassOutlined,
  DollarOutlined,
  FileProtectOutlined,
  BankOutlined,
  AuditOutlined,
  HistoryOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInternationalTaxCovers Component
 * ====================================
 * Section 2: What Is International Tax?
 *
 * Implements the exact, word-for-word copy from Section 1 of the SEO document:
 * - Definition of international tax for individuals and businesses
 * - The 8 core factors dictating Australian tax treatment
 * - The statutory principle: tax is rarely determined simply by where money is received
 *
 * Background: Lite Brand Gradient
 */
export default function WhatInternationalTaxCovers() {
  /**
   * The 8 Factors dictating correct Australian tax treatment (Exact from document)
   */
  const statutoryFactors = [
    {
      icon: <CompassOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      text: "Your Australian tax residency status",
    },
    {
      icon: <GlobalOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      text: "Where income is sourced",
    },
    {
      icon: <DollarOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      text: "The type of income or transaction",
    },
    {
      icon: <FileProtectOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      text: "Whether foreign tax has been paid",
    },
    {
      icon: <BankOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      text: "Whether Australia has a tax treaty with the relevant country",
    },
    {
      icon: <ShopOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      text: "The ownership structure involved",
    },
    {
      icon: <AuditOutlined className="text-cyan-600 dark:text-cyan-400 text-lg" />,
      text: "Whether any exemptions or special rules apply",
    },
    {
      icon: <HistoryOutlined className="text-indigo-600 dark:text-indigo-400 text-lg" />,
      text: "The timing of changes in residency or ownership",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <GlobalOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Cross-Border Tax Advisory
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is International Tax?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            International tax deals with situations where more than one country may be connected to a person, transaction, investment, business or source of income.
          </p>
        </div>

        {/* Individual & Business Scope Cards (Verbatim text from doc) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-12">
          {/* Card 1: Individuals */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center mb-5">
              <UserOutlined className="text-teal-600 dark:text-teal-400 text-xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              For Individuals & Expatriates
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
              For an individual, this can include earning income overseas while living in Australia, moving to or from Australia, owning foreign investments or receiving an overseas pension.
            </p>
          </div>

          {/* Card 2: Businesses */}
          <div className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all">
            <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/50 flex items-center justify-center mb-5">
              <ShopOutlined className="text-blue-600 dark:text-blue-400 text-xl" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              For Businesses & Cross-Border Enterprises
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
              For a business, cross-border issues may arise when operating internationally, dealing with overseas entities, receiving foreign income or expanding business activities beyond Australia.
            </p>
          </div>
        </div>

        {/* The 8 Factors Grid */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              The correct Australian tax treatment can depend on several factors, including:
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            {statutoryFactors.map((factor, idx) => (
              <div
                key={idx}
                className="p-4 sm:p-5 rounded-xl bg-slate-50/80 dark:bg-zinc-950/60 border border-slate-200/80 dark:border-zinc-800/80 flex items-start gap-3 hover:border-teal-500/40 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-white dark:bg-zinc-800 flex items-center justify-center shrink-0 shadow-2xs mt-0.5">
                  {factor.icon}
                </div>
                <span className="text-xs sm:text-sm font-medium text-slate-700 dark:text-zinc-200 leading-snug">
                  {factor.text}
                </span>
              </div>
            ))}
          </div>

          {/* Key Principle Box (Verbatim text) */}
          <div className="p-4 sm:p-5 rounded-xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-200/80 dark:border-teal-800/60 flex items-start gap-3.5">
            <InfoCircleOutlined className="text-teal-600 dark:text-teal-400 text-lg mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm font-semibold text-teal-900 dark:text-teal-200 m-0 leading-relaxed">
              International tax is therefore rarely determined simply by where money is received or where a bank account is located.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
