"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ApartmentOutlined,
  BankOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsTaxConsolidation Component
 * ================================
 * Section: What is tax consolidation?
 * Verbatim text from Page 13 of client docx.
 * Covers:
 * - Eligible groups choosing to be treated as one entity for income tax purposes
 * - Head company recognized as the taxpayer and wholly owned subsidiaries treated as parts of head company
 * - Income tax scope vs GST, payroll tax, ASIC requirements, and employment obligations.
 */
export default function WhatIsTaxConsolidation() {
  const regimePillars = [
    {
      icon: (
        <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "One Single Entity for Income Tax",
      desc: "Under the Australian consolidation regime, an eligible group can choose to be treated as one entity for income tax purposes, pooling tax calculations and simplifying intra-group transactions.",
    },
    {
      icon: (
        <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Head Company as the Taxpayer",
      desc: "Broadly, the head company is recognized as the taxpayer and eligible wholly owned subsidiary members are treated as parts of the head company for the group's income-tax calculations.",
    },
    {
      icon: (
        <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Limited to Income Tax Regime",
      desc: "The regime applies to income tax. It does not automatically mean that all other obligations, such as GST, payroll tax, ASIC requirements or employment obligations, are consolidated in the same way.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Corporate Tax Architecture
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is tax consolidation?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Under the Australian consolidation regime, an eligible group can
            choose to be treated as one entity for income tax purposes. Broadly,
            the head company is recognized as the taxpayer and eligible wholly
            owned subsidiary members are treated as parts of the head company
            for the group&apos;s income-tax calculations.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {regimePillars.map((item, idx) => (
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

        {/* Verbatim Critical Box: Separate Non-Income Tax Boundaries */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Distinct Regulatory & Non-Income Tax Responsibilities
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The regime applies to income tax. It does not automatically mean
              that all other obligations, such as GST, payroll tax, ASIC
              requirements or employment obligations, are consolidated in the
              same way.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
              >
                Assess Group Structure
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
