"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  HistoryOutlined,
  CompassOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * PreparationVsPlanning Component
 * ================================
 * Section 2: High Income Tax Return Preparation and Planning.
 * Features 100% complete, verbatim content from Page 3 of the client document.
 * Compares Retrospective Compliance (Preparation) with Prospective Strategy (Planning).
 */
export default function PreparationVsPlanning() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Dual Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            High Income Tax Return Preparation and Planning
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Tax return preparation and tax planning serve different purposes. Your tax return looks back at income, deductions and transactions that have already occurred during the financial year. Tax planning looks ahead at how proposed decisions or changing circumstances may affect your future tax position.
          </p>
        </div>

        {/* 2 Comparative Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Individual tax return preparation */}
          <div className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/60 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center text-teal-600 dark:text-teal-400 text-2xl">
                  <HistoryOutlined />
                </div>
                <Tag color="cyan" className="font-bold text-xs uppercase px-3 py-1">
                  Retrospective Compliance
                </Tag>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Individual tax return preparation
              </h3>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                Depending on your circumstances, our work may include reviewing employment income and remuneration, reconciling investment income, considering rental property information, reporting capital gains, reviewing deductions and preparing your return for lodgement.
              </p>

              <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 mb-6 text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
                <p className="font-normal">
                  If you primarily need annual preparation and lodgement rather than high-income planning support, see our{" "}
                  <Link
                    href="/services/individual-tax/individual-tax-return"
                    className="font-bold text-brand-primary dark:text-emerald-400 hover:underline"
                  >
                    Individual Tax Return Services
                  </Link>
                  .
                </p>
              </div>
            </div>

            <div>
              <Link href="/services/individual-tax/individual-tax-return">
                <Button
                  type="default"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full rounded-xl font-bold text-slate-800 dark:text-white border-slate-300 dark:border-zinc-700 hover:border-brand-primary hover:text-brand-primary h-12"
                >
                  View Individual Tax Return Services
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Proactive tax planning */}
          <div className="flex flex-col justify-between bg-gradient-to-br from-slate-900 via-zinc-900 to-emerald-950 text-white rounded-3xl p-8 sm:p-10 border border-emerald-800/40 shadow-lg relative overflow-hidden">
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400 text-2xl">
                  <CompassOutlined />
                </div>
                <Tag color="gold" className="font-bold text-xs uppercase px-3 py-1">
                  Prospective Strategy
                </Tag>
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Proactive tax planning
              </h3>

              <p className="text-sm sm:text-base text-zinc-300 leading-relaxed font-normal mb-4">
                Tax planning for high income earners considers future decisions rather than changing completed transactions. A discussion may be useful before year end, a significant investment or disposal, or a change in employment.
              </p>

              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-normal mb-4">
                The planning work required depends on your circumstances. Its scope and fees are confirmed separately before that work proceeds. Any tax strategies for high income earners must operate within the law and be supported by the relevant facts. Financially Up does not guarantee a particular deduction, refund or tax saving.
              </p>

              <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-xs border border-white/10 text-xs text-zinc-300 mb-6 flex items-start gap-2.5">
                <InfoCircleOutlined className="text-amber-400 text-sm mt-0.5 shrink-0" />
                <p className="font-normal">
                  Where a matter involves broader financial advice, Financially Up only provides advice within its authorized service scope.
                </p>
              </div>
            </div>

            <div className="relative z-10">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full rounded-xl font-bold bg-white text-emerald-950 hover:bg-emerald-50 hover:text-emerald-900 border-none h-12"
                >
                  Schedule Planning Consultation
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
