"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  ClockCircleOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
  FileDoneOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * FamilyTrustDistributionsTiming Component
 * ========================================
 * Section: Family trust distributions require timely attention
 * Verbatim text from Page 2 of client docx.
 * Focuses on 30 June present entitlement deadlines, trustee resolutions,
 * capital gains streaming, and link to Trust Distribution Planning.
 */
export default function FamilyTrustDistributionsTiming() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="gold" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Critical Year-End Deadlines
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Family trust distributions require timely attention
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            For a discretionary trust, the trustee generally needs to make beneficiaries presently entitled to trust
            income by 30 June if income is to be assessed to those beneficiaries, subject to the trust deed and the
            applicable tax rules. The deed may impose earlier timing or specific procedural requirements. Capital gains
            and franked distributions can also require separate consideration.
          </p>
        </div>

        {/* 2-Column Core Warning & Mechanism Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Not a Bookkeeping Entry */}
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-800 flex items-center justify-center">
                  <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />
                </div>
                <Tag color="error" className="font-semibold text-xs">
                  Strict 30 June Rule
                </Tag>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Distribution Decisions Cannot Be Made After the Fact
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                That means a distribution decision should not be treated as a year-end bookkeeping entry made after the
                fact. Reliable accounts and an estimate of the trust’s tax position can help the trustee make an
                informed decision before the relevant deadline. The trustee remains responsible for exercising its
                discretion in accordance with the deed.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <ExclamationCircleOutlined className="text-amber-500" />
              <span>Unresolved resolutions risk trustee taxation at the highest marginal rate (47%).</span>
            </div>
          </div>

          {/* Card 2: Essential Requirements */}
          <div className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                  <FileDoneOutlined className="text-xl text-teal-600 dark:text-teal-400" />
                </div>
                <Tag color="cyan" className="font-semibold text-xs">
                  Deed Procedural Terms
                </Tag>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
                Trust Deed Specificity & Franking / CGT Considerations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The trust deed determines trustee powers, default beneficiary rules, and how trust income is defined.
                Streaming capital gains or franked dividends requires valid, timely trustee minutes that comply with
                both the specific deed powers and ATO streaming criteria.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-2 text-xs text-slate-500 dark:text-zinc-400">
              <SafetyCertificateOutlined className="text-teal-500" />
              <span>Valid present entitlement requires compliant written records before year end.</span>
            </div>
          </div>
        </div>

        {/* Verbatim Link Card: Trust Distribution Planning Service */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-teal-500/5 to-slate-50 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-zinc-950 border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <Tag color="green" className="font-semibold text-xs">
              Dedicated Advisory Practice
            </Tag>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CalendarOutlined className="text-emerald-600 dark:text-emerald-400" />
              Need Proactive Distribution Strategy Before 30 June?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Where the focus is proactive distribution strategy rather than routine annual compliance, our{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">Trust Distribution Planning</strong>{" "}
              service covers that distinct planning need.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/services/trusts/distribution-planning">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Explore Distribution Planning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
