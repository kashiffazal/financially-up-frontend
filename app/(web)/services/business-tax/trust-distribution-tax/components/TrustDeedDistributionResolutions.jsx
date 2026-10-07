"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileTextOutlined,
  CalendarOutlined,
  AlertOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * TrustDeedDistributionResolutions Component
 * ==========================================
 * Section: Why the trust deed and distribution resolution matter
 * Verbatim text from Page 11 of client docx.
 * Covers:
 * - Acting within trust deed powers
 * - Deed checks: income definitions, eligible beneficiary classes, default clauses, streaming powers
 * - Critical deadlines: June 30 (general income & franked distributions) and August 31 (capital gains extension)
 * - Consequences of ineffective resolutions (cannot reconstruct after the event).
 */
export default function TrustDeedDistributionResolutions() {
  const deedChecks = [
    {
      icon: <FileTextOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Deed Definition of Income",
      desc: "Checking whether the deed defines income as accounting income, section 95 taxable net income, or gives the trustee discretion to determine.",
    },
    {
      icon: <CheckCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Class of Eligible Beneficiaries",
      desc: "Verifying that every nominated individual, company, or charity strictly falls within the primary, general, or default beneficiary definitions.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Default & Timing Provisions",
      desc: "Reviewing default distribution clauses that automatically trigger if a trustee fails to execute an effective resolution by the required date.",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Streaming Powers in Deed",
      desc: "Confirming whether the trustee has explicit legal power under the deed to stream capital gains and franked distributions separately.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Legal Powers & Crucial Deadlines
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why the trust deed and distribution resolution matter
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A trustee must act within the powers and requirements of the trust deed. Before making a distribution, the deed should be checked for the definition of income, the class of eligible beneficiaries, default provisions, timing requirements and any powers relevant to streaming capital gains or franked distributions.
          </p>
        </div>

        {/* 4 Deed Checks Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {deedChecks.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Verbatim Critical Callout: Deadlines & Ineffective Resolutions */}
        <div className="space-y-6">
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-3 flex items-center gap-2">
              <CalendarOutlined className="text-teal-600 dark:text-teal-400" />
              Statutory Deadlines: 30 June and 31 August
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A beneficiary&apos;s present entitlement to trust income generally needs to be created by 30 June, or earlier if required by the deed. For streaming, a beneficiary&apos;s specific entitlement to a franked distribution generally needs to be recorded by the end of the income year. A specific entitlement to a capital gain must generally be recorded by 31 August for a 30 June balancing trust under the tax-law extension, although the deed may require earlier action. The records and timing should be checked for the particular trust.
            </p>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-amber-500/20 dark:border-amber-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-3xl">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <AlertOutlined className="text-amber-600 dark:text-amber-400" />
                No Retrospective Reconstruction
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A resolution that is ineffective under the deed or tax rules can change who is assessed. Trust distribution planning should therefore be completed before the relevant deadline, not reconstructed after the event.
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
                  Prepare June 30 Resolution
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
