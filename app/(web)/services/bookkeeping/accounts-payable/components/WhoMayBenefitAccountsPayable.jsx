"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ShopOutlined,
  ClockCircleOutlined,
  TeamOutlined,
  SafetyCertificateOutlined,
  CloudSyncOutlined,
  EyeOutlined,
  RiseOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhoMayBenefitAccountsPayable Component
 * ======================================
 * Section 2: Who May Benefit from Outsourced Accounts Payable?
 * Features 100% complete, verbatim content from Page 6 of client docx.
 */
export default function WhoMayBenefitAccountsPayable() {
  const benefitProfiles = [
    {
      icon: (
        <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title:
        "Businesses receiving a steady volume of supplier invoices each week or month.",
      desc: "High transaction flow demands a structured capture process so invoices don't get lost in employee email inboxes.",
    },
    {
      icon: (
        <ClockCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title:
        "Owners spending too much time entering bills and checking due dates.",
      desc: "Reclaim strategic executive hours by delegating manual invoice data entry and due date calculations to bookkeepers.",
    },
    {
      icon: (
        <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title:
        "Businesses with remote teams or multiple people involved in purchasing and approvals.",
      desc: "Coordinate decentralized orders through a transparent, cloud-based digital approval and document repository.",
    },
    {
      icon: (
        <SafetyCertificateOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title:
        "Growing businesses that need clearer separation between processing and payment approval.",
      desc: "Establish proper internal segregation of duties to prevent fraud, payment duplication, or unauthorized transactions.",
    },
    {
      icon: (
        <CloudSyncOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title:
        "Businesses using cloud accounting software and wanting more consistent supplier records.",
      desc: "Maintain standardized vendor contact cards, ABN entries, and historical purchase records inside Xero or MYOB.",
    },
    {
      icon: (
        <EyeOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title:
        "Teams that need regular visibility over unpaid bills and upcoming commitments.",
      desc: "Get crystal-clear aged payables schedules to optimize working capital buffers and schedule cash outflows.",
    },
    {
      icon: (
        <RiseOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title:
        "Businesses preparing to move from ad hoc bookkeeping to a structured monthly process.",
      desc: "Build dependable supplier record foundations that feed directly into a streamlined month-end close routine.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Client Scenarios &amp; Fit
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who May Benefit from Outsourced Accounts Payable?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            AP management services can be useful when the volume or complexity
            of supplier transactions has outgrown an informal process.
          </p>
        </div>

        {/* 7 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {benefitProfiles.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-400/70 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 flex items-center justify-center mb-5 shadow-xs">
                  {item.icon}
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal pl-6">
                  {item.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/60 dark:border-zinc-800/80 flex items-center justify-between text-xs font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest pl-6">
                <span>Scenario 0{idx + 1}</span>
              </div>
            </div>
          ))}

          {/* 8th Card: Consultation Card */}
          <div className="bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-900 dark:to-teal-950 rounded-2xl p-6 sm:p-7 text-white shadow-md flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-bold uppercase tracking-wider mb-4">
                <span>Structured Processing</span>
              </div>
              <h3 className="text-lg font-extrabold text-white mb-2">
                Streamline Your Payables
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100 dark:text-emerald-200 leading-relaxed font-normal">
                Eliminate missed vendor deadlines and invoice clutter with a
                disciplined, cloud-connected accounts payable system.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/20">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  className="w-full bg-white text-emerald-800 hover:bg-emerald-50 border-none font-bold"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
