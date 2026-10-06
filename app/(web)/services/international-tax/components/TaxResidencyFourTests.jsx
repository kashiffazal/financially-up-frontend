"use client";

import React from "react";
import { Tag } from "antd";
import {
  CompassOutlined,
  HomeOutlined,
  CalendarOutlined,
  BankOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * TaxResidencyFourTests Component
 * ===============================
 * Section 6: Australian Tax Residency and International Tax
 *
 * Implements the exact copy from Section 1 of the SEO document:
 * - Why tax residency is the first question to address (determines scope of assessable income)
 * - The 4 specific statutory tests (resides test, domicile test, 183-day test, superannuation fund test)
 * - Whole-of-circumstances principle & Double Tax Agreement tie-breaker consideration
 *
 * Background: Lite Brand Gradient
 */
export default function TaxResidencyFourTests() {
  /**
   * The 4 Statutory Tests (Exact from document)
   */
  const residencyTests = [
    {
      icon: <CompassOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Resides Test",
      description:
        "The primary test. Examines your physical presence, intention, behaviour, family and business ties, living arrangements and assets in Australia.",
      tag: "Primary Test",
    },
    {
      icon: <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Domicile Test",
      description:
        "Applies if your domicile (origin or choice) is in Australia, unless the Commissioner is satisfied that your permanent place of abode is outside Australia.",
      tag: "Permanent Abode",
    },
    {
      icon: <CalendarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "183-Day Test",
      description:
        "Applies if you are present in Australia for more than half the income year (continuously or with breaks), unless your usual place of abode is outside Australia.",
      tag: "Physical Count",
    },
    {
      icon: <BankOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Commonwealth Superannuation Fund Test",
      description:
        "Applies to eligible members of the Public Sector Superannuation Scheme (PSS) or Commonwealth Superannuation Scheme (CSS), and their spouses and children under 16.",
      tag: "Government Staff",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Statutory Framework
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Australian Tax Residency and International Tax
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Tax residency is one of the first questions to address in many international matters because it can determine the scope of income potentially subject to Australian tax. Australia applies specific tests when determining whether an individual is an Australian resident for tax purposes.
          </p>
        </div>

        {/* 4 Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {residencyTests.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Whole-of-Circumstances Statutory Banner (Verbatim from doc) */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 mb-12 shadow-2xs">
          <div className="flex items-start gap-4">
            <InfoCircleOutlined className="text-teal-600 dark:text-teal-400 text-xl mt-1 shrink-0" />
            <div className="space-y-2">
              <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
                Whole-of-Circumstances Assessment
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed m-0">
                A person&apos;s circumstances need to be considered as a whole. Being present in Australia for fewer than or more than 183 days does not, by itself, resolve every residency case. Where a person may also be regarded as a resident of another country, an applicable double tax agreement may need to be considered.
              </p>
            </div>
          </div>
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Tax Residency Reassurance"
          tagIcon="safety"
          title="Unsure About Your Australian Tax Residency Status?"
          description="Never guess your tax residency. A formal determination prevents unexpected ATO tax assessments on worldwide earnings and protects your foreign tax offsets."
          primaryButton={{
            text: "Book Residency Determination",
            href: "/services/international-tax/tax-residency",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
