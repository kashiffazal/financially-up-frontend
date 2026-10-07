"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIsDeceasedEstateTaxReturn Component
 * ======================================
 * Section 1: What Is a Deceased Estate Tax Return.
 * Explains trust return nature during administration and the absence of death duties in Australia.
 * Features 100% complete, verbatim content from Page 13 of the client document.
 */
export default function WhatIsDeceasedEstateTaxReturn() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Estate Administration &amp; Trust Taxation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is a Deceased Estate Tax Return?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A deceased estate tax return generally refers to a trust tax return for income or capital gains derived by an estate during its administration. It is separate from the deceased person&apos;s final individual tax return.
          </p>
        </div>

        {/* 2 Core Principles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mb-12">
          {/* Card 1: No Australian Inheritance Tax */}
          <div className="p-7 sm:p-9 rounded-3xl bg-emerald-50/60 dark:bg-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/60 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <SafetyCertificateOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    No General Inheritance Tax
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Assets Passing at Death
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Australia does not impose a general inheritance or estate tax merely because assets pass following a death. However, ordinary income tax and capital gains tax rules can apply to income derived or assets disposed of during the estate&apos;s administration.
              </p>
            </div>
            <div className="pt-4 border-t border-emerald-200/60 dark:border-emerald-800/40 text-2xs text-emerald-800 dark:text-emerald-300 font-semibold">
              Tax applies only to post-death earnings, distributions, and capital disposals.
            </div>
          </div>

          {/* Card 2: Lodgment Criteria */}
          <div className="p-7 sm:p-9 rounded-3xl bg-slate-50/70 dark:bg-zinc-800/60 border border-slate-200/80 dark:border-zinc-700/80 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center text-blue-500">
                  <BankOutlined className="text-xl" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Estate Lodgment Criteria
                  </h3>
                  <span className="text-xs text-slate-500 dark:text-zinc-400">
                    Not Every Estate Requires a Return
                  </span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                Not every estate requires a separate trust tax return. The requirement depends on matters including the estate&apos;s income, capital gains, beneficiaries, administration stage and ATO lodgment requirements.
              </p>
            </div>
            <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-700/60 text-2xs text-slate-500 dark:text-zinc-400 font-semibold">
              Assessment stage: Determining whether income exceeded threshold limits.
            </div>
          </div>
        </div>

        {/* Introductory Reassurance Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/70 dark:border-zinc-700/70 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="max-w-2xl">
            <span className="font-bold text-slate-900 dark:text-white block text-sm sm:text-base mb-1">
              Executor Guidance:
            </span>
            Neither return is automatically required in every case. The person managing the estate should review the deceased person&apos;s lodgment history, income before death and any income received or derived by the estate afterwards.
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button type="primary" className="brand-btn-primary font-bold text-xs sm:text-sm">
              Book Executor Consultation
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
