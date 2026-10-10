"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  FileProtectOutlined,
  ArrowRightOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenAnAccountantHelps Component
 * ===============================
 * Section 3: When an Accountant May Help With Your Tax Return.
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Always utilizes Ant Design Button components for interactive actions.
 */
export default function WhenAnAccountantHelps() {
  const benefitPillars = [
    {
      title: "Clarity on Declarations & Deductibility",
      description:
        "Understand exactly what income must be declared, which records are required, and whether an expense is legally deductible under current ATO rulings.",
    },
    {
      title: "Navigating Life & Circumstance Changes",
      description:
        "Get structured accounting support when your financial circumstances changed during the year or multiple complex tax issues need to be evaluated together.",
    },
    {
      title: "Beyond Data Entry: True Review & Explanation",
      description:
        "For complex returns, the value is having information rigorously reviewed, queries identified prior to lodgement, and the final return explained so you approve with confidence.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/70 dark:bg-zinc-950/70 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Professional Guidance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When an Accountant May Help With Your Tax Return
          </h2>
        </div>

        {/* Primary Content Presentation with Verbatim Copy */}
        <div className="w-full space-y-6 mb-12">
          {/* Paragraph 1 Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0 mt-0.5">
                <QuestionCircleOutlined className="text-xl text-brand-primary dark:text-emerald-400" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  Self-Lodgement vs Professional Accountant Review
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  You can prepare and lodge your own return through ATO online
                  services. Using an individual tax return accountant may be
                  worthwhile when you are unsure what must be declared, which
                  records are required, whether an expense may be deductible or
                  how a transaction should be treated. An accountant can also
                  help when your circumstances changed during the year or
                  several tax issues need to be considered together.
                </p>
              </div>
            </div>
          </div>

          {/* Paragraph 2 Card */}
          <div className="bg-white dark:bg-zinc-900 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-100 dark:border-teal-800/40 flex items-center justify-center shrink-0 mt-0.5">
                <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />
              </div>
              <div className="space-y-3">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  The Value of an Informed, Explained Return
                </h3>
                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  For complex returns, the value is not simply entering figures.
                  It is having the relevant information reviewed, questions
                  identified before lodgement and the completed return explained
                  so you can make an informed approval.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Core Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mb-10">
          {benefitPillars.map((benefit, i) => (
            <div
              key={i}
              className="bg-white dark:bg-zinc-900 rounded-xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
            >
              <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-lg mb-3" />
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                {benefit.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Footer */}
        <div className="text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-semibold px-7 shadow-md"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
