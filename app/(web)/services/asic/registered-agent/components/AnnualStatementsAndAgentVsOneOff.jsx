"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BellOutlined,
  DollarOutlined,
  SafetyCertificateOutlined,
  SwapOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * AnnualStatementsAndAgentVsOneOff Component
 * =========================================
 * Section 2 of ASIC Registered Agent Service (/services/asic/registered-agent/):
 * 1. "What happens to ASIC annual statements when a registered agent is appointed?"
 * 2. "Registered agent support versus one-off ASIC lodgement services"
 *
 * Implements 100% complete, verbatim content from Page 2 of '7th Pillar ASIC.docx'.
 * Clean White alternating section background with responsive cards and internal links.
 */
export default function AnnualStatementsAndAgentVsOneOff() {
  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sub-section 1: Annual Statements Delivery & Obligations */}
        <div className="max-w-4xl mx-auto mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="blue" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Annual Statements & Reviews
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What happens to ASIC annual statements when a registered agent is appointed?
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              ASIC issues an annual statement to registered companies. Where a registered agent is appointed, ASIC places the registered agent address first in its stated order of priority for delivery of the annual statement. This can make annual review administration easier to centralise.
            </p>
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              The annual review itself still involves company obligations. The annual review fee must be dealt with by its due date, the company details should be checked, and the directors need to address the solvency resolution requirements. A registered agent can support the administration, but directors remain responsible for their duties.
            </p>

            {/* 3 Pillar Summary Points */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-200/70 dark:border-zinc-800">
              <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800">
                <BellOutlined className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Priority Delivery
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 leading-snug">
                    Agent address placed 1st in ASIC delivery hierarchy
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800">
                <DollarOutlined className="text-teal-600 dark:text-teal-400 text-lg mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Review Fee Timelines
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 leading-snug">
                    Preventing statutory late payment fees and penalties
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800">
                <SafetyCertificateOutlined className="text-blue-600 dark:text-blue-400 text-lg mt-0.5" />
                <div>
                  <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                    Solvency Resolution
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5 leading-snug">
                    Assisting directors with annual solvency declarations
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sub-section 2: Comparison: Registered Agent vs One-Off ASIC Lodgement */}
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Engagement Comparison
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Registered agent support versus one-off ASIC lodgement services
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A registered agent arrangement is useful when a company wants ongoing ASIC administration. If you only need to record a specific event, such as a change of address, appointment or cessation of an officeholder, or certain share changes, our company changes service may be the more direct option.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Card: Ongoing Registered Agent */}
            <div className="rounded-3xl p-7 sm:p-9 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/90 dark:via-zinc-900 dark:to-zinc-950 border-2 border-emerald-500/30 dark:border-emerald-500/30 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                    <SafetyCertificateOutlined /> Ongoing Representation
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    Pillar 7.1
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                  Ongoing Registered Agent Service
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                  Registered agent support is an ongoing representation arrangement providing a consistent corporate contact, annual statement monitoring, and ongoing registry administration throughout the year.
                </p>

                <ul className="space-y-3 mb-6 text-sm text-slate-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Permanent ASIC correspondence contact address</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Automated annual statement tracking & review alerts</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-0.5 shrink-0" />
                    <span>Coordinated accounting, tax, and ASIC compliance oversight</span>
                  </li>
                </ul>
              </div>

              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full rounded-xl font-bold bg-brand-primary hover:bg-brand-primary/90 text-white h-11"
                >
                  Appoint Registered Agent
                </Button>
              </Link>
            </div>

            {/* Right Card: One-Off ASIC Lodgements / Company Changes */}
            <div className="rounded-3xl p-7 sm:p-9 bg-slate-50 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                    <SwapOutlined /> Single-Event Lodgement
                  </span>
                  <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500 uppercase tracking-wider">
                    Pillar 7.2
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white mb-3">
                  One-Off Company Changes (Form 484)
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-6 font-normal">
                  A company-change engagement can be limited to a particular filing when you only need to record a specific event without ongoing representation.
                </p>

                <ul className="space-y-3 mb-6 text-sm text-slate-700 dark:text-zinc-300">
                  <li className="flex items-start gap-2.5">
                    <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>Change of registered office or principal place of business</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>Appointment or cessation of company directors & secretaries</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircleOutlined className="text-blue-600 dark:text-blue-400 mt-0.5 shrink-0" />
                    <span>Share transfers, issues, and member register updates</span>
                  </li>
                </ul>
              </div>

              <div className="space-y-2">
                <Link href="/services/asic/company-changes">
                  <Button
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    className="w-full rounded-xl font-bold border-slate-300 dark:border-zinc-700 text-slate-800 dark:text-white hover:border-emerald-500 hover:text-emerald-600 h-11"
                  >
                    View Company Changes (Form 484)
                  </Button>
                </Link>
                <p className="text-[11px] text-center text-slate-500 dark:text-zinc-400 m-0">
                  For broader corporate compliance, explore our{" "}
                  <Link href="/services/asic" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                    ASIC Compliance Services Hub
                  </Link>.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed max-w-3xl mx-auto italic">
              “For broader corporate compliance support, including annual reviews and other routine filing matters, see our ASIC compliance services. The services can overlap operationally, but their intent is different: registered agent support is an ongoing representation arrangement, while a company-change engagement can be limited to a particular filing.”
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
