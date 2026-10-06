"use client";

import React from "react";
import {
  ExperimentOutlined,
  CheckCircleOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
  FileProtectOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import Link from "next/link";

/**
 * WhatRdIncentiveInvolves Component
 * =================================
 * Section: "How does the R&D tax incentive work?"
 * Content verbatim from '15th Pillar R&D Tax Incentive.docx'
 *
 * Theme: Lite Brand Gradient
 */
export default function WhatRdIncentiveInvolves() {
  const stages = [
    {
      stage: "Stage 1",
      authority: "Department of Industry, Science and Resources",
      portal: "R&D Tax Incentive Customer Portal",
      title: "Register Eligible R&D Activities",
      description:
        "The company applies to register eligible R&D activities with the Department of Industry, Science and Resources through the R&D Tax Incentive customer portal.",
      details: [
        "Assess core and supporting R&D activities against legislative criteria",
        "Submit detailed project descriptions and experimental objectives",
        "Obtain formal activity registration number before tax lodgement",
      ],
      icon: <ExperimentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      badgeClass: "bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border-teal-200/80 dark:border-teal-800/60",
    },
    {
      stage: "Stage 2",
      authority: "Australian Taxation Office (ATO)",
      portal: "Company Income Tax Return & R&D Schedule",
      title: "Claim Eligible R&D Tax Offset",
      description:
        "Once registration requirements are met, the company claims any eligible R&D tax offset through its company income tax return with the ATO, including the relevant R&D schedule.",
      details: [
        "Include approved registration number and relevant income year",
        "Calculate notional deductions for eligible staff, contractors and materials",
        "Claim refundable or non-refundable tax offset through the tax return",
      ],
      icon: <FileProtectOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      badgeClass: "bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 border-blue-200/80 dark:border-blue-800/60",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Two Connected Stages
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How does the R&D tax incentive work?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            The program has two connected stages. The company applies to register eligible R&amp;D activities with the Department of Industry, Science and Resources through the R&amp;D Tax Incentive customer portal. Once registration requirements are met, the company claims any eligible R&amp;D tax offset through its company income tax return with the ATO, including the relevant R&amp;D schedule. Registration and a tax return claim have separate requirements; neither removes the need for accurate records.
          </p>
        </div>

        {/* 2 Connected Stages Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {stages.map((stg, idx) => (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                      {stg.icon}
                    </div>
                    <div>
                      <span className="text-[11px] font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider font-mono">
                        {stg.stage}
                      </span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
                        {stg.title}
                      </h3>
                    </div>
                  </div>
                  <span className={`text-[11px] font-semibold px-2.5 py-1 rounded-full border ${stg.badgeClass}`}>
                    {stg.portal}
                  </span>
                </div>

                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5">
                  {stg.description}
                </p>

                <div className="bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-4 border border-slate-200/80 dark:border-zinc-800/80 mb-4">
                  <span className="text-xs font-bold text-slate-700 dark:text-zinc-300 uppercase tracking-wider block mb-2.5">
                    Stage Focus &amp; Requirements
                  </span>
                  <ul className="space-y-2">
                    {stg.details.map((item, itemIdx) => (
                      <li
                        key={itemIdx}
                        className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400"
                      >
                        <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 flex items-center justify-between">
                <span>Governing Authority:</span>
                <span className="font-semibold text-slate-700 dark:text-zinc-300">
                  {stg.authority}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* 10-Month Deadline & Extension Rules Banner (Verbatim from docx) */}
        <div className="rounded-2xl bg-amber-50/60 dark:bg-amber-950/20 border border-amber-200/80 dark:border-amber-900/40 p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8">
              <div className="flex items-center gap-2 mb-3">
                <ClockCircleOutlined className="text-amber-600 dark:text-amber-400 text-lg" />
                <h3 className="text-lg sm:text-xl font-bold text-amber-900 dark:text-amber-200 m-0">
                  Application Deadlines &amp; Statutory Timing
                </h3>
              </div>
              <p className="text-sm sm:text-base text-amber-950/90 dark:text-amber-100/90 leading-relaxed m-0 mb-3">
                Applications to register activities are generally due within 10 months after the end of the company’s income year in which those activities took place. A company with a 30 June year end should not assume its registration date is the same as its income tax return due date.
              </p>
              <p className="text-sm sm:text-base text-amber-950/90 dark:text-amber-100/90 leading-relaxed m-0 font-medium">
                Extensions are subject to the Department’s rules and evidence requirements; a late application should never be assumed to be accepted. We confirm the relevant income year and deadline early.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col items-start lg:items-end justify-center gap-3">
              <div className="p-4 rounded-xl bg-white/80 dark:bg-zinc-900/80 border border-amber-200 dark:border-amber-800 w-full text-center">
                <span className="text-xs font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-wider block">
                  Standard 30 June Year End
                </span>
                <span className="text-xl sm:text-2xl font-extrabold text-amber-700 dark:text-amber-300 block my-1">
                  Strict 10-Month Deadline
                </span>
                <span className="text-xs text-slate-600 dark:text-zinc-400">
                  (Ordinarily 30 April following year end)
                </span>
              </div>
              <Link href="/book-an-appointment" className="w-full">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="w-full h-11 rounded-xl font-semibold bg-amber-600 hover:bg-amber-700 border-none text-white shadow-md"
                >
                  Confirm Your Deadline
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
