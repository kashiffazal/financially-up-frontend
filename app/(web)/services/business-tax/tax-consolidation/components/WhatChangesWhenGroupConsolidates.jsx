"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  PartitionOutlined,
  DollarCircleOutlined,
  CalculatorOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatChangesWhenGroupConsolidates Component
 * ==========================================
 * Section: What changes when a group consolidates?
 * Verbatim text from Page 13 of client docx.
 * Covers:
 * - Single entity rule (SER): subsidiary members treated as parts of head company
 * - Intra-group dealings generally ignored for income tax
 * - Tax cost setting, transferred losses, franking, and other tax attributes
 * - Material impact on future depreciation, capital gains, and taxable income.
 */
export default function WhatChangesWhenGroupConsolidates() {
  const mechanicalChanges = [
    {
      icon: <PartitionOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "The Single Entity Rule (SER)",
      desc: "For income-tax purposes, the single entity rule treats subsidiary members as parts of the head company. Intra-group dealings are therefore generally ignored when working out the head company's income-tax liability, subject to specific provisions and exceptions.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Tax Cost Setting (ACA Calculations)",
      desc: "When an entity joins or leaves the group, asset tax costs and loss positions may need to be calculated under the consolidation provisions using the Allocable Cost Amount (ACA) formula.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Transferred Losses & Franking Credits",
      desc: "Consolidation brings rules for tax cost setting, transferred losses, franking and other tax attributes. Franking balances pool into the head company, and transferred losses face utilization fraction caps.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Material Depreciation & CGT Impacts",
      desc: "Reset tax costs of assets upon joining can step up or reduce future depreciation deductions, capital gains upon eventual sale, and ongoing group taxable income.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Mechanics & Attributes
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What changes when a group consolidates?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Consolidation fundamental alters how corporate groups interact with the Australian tax system, creating both operational simplifications and complex valuation adjustments.
          </p>
        </div>

        {/* 4 Changes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {mechanicalChanges.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Critical Box: Material Impact Warning */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Tax Cost Setting & Ongoing Calculation Effects
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Consolidation also brings rules for tax cost setting, transferred losses, franking and other tax attributes. When an entity joins or leaves the group, asset tax costs and loss positions may need to be calculated under the consolidation provisions. These calculations can materially affect later depreciation, capital gains and taxable income.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Model Asset Tax Costs
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
