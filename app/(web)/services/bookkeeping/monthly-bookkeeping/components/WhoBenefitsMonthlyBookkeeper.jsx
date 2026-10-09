"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ShopOutlined,
  FileProtectOutlined,
  ClockCircleOutlined,
  LineChartOutlined,
  BankOutlined,
  RiseOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoBenefitsMonthlyBookkeeper Component
 * =======================================
 * Section 2: Who Benefits from a Monthly Bookkeeper?
 * Features 100% complete, verbatim content from Page 3 of client docx.
 */
export default function WhoBenefitsMonthlyBookkeeper() {
  const targetProfiles = [
    {
      icon: (
        <ShopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Small businesses with recurring sales and expenses",
      desc: "Maintain regular oversight over consistent trading activity, subscription income, rent, and overhead outlays without transaction pile-ups.",
    },
    {
      icon: (
        <FileProtectOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title:
        "Businesses registered for GST that need current underlying records",
      desc: "Stay fully prepared for quarterly Business Activity Statements with up-to-date sales, purchases, and verifiable input tax credits.",
    },
    {
      icon: (
        <ClockCircleOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title:
        "Owners who want to stop doing bookkeeping in evenings or at the end of each quarter",
      desc: "Reclaim personal weekends and evenings by handing over administrative ledger maintenance to professional bookkeepers.",
    },
    {
      icon: (
        <LineChartOutlined className="text-xl text-amber-600 dark:text-amber-400" />
      ),
      title:
        "Businesses that need cleaner records for management or accounting discussions",
      desc: "Walk into strategic planning meetings, loan reviews, or advisor conversations with accurate profit-and-loss and balance-sheet figures.",
    },
    {
      icon: (
        <BankOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "Businesses with multiple bank or credit-card accounts",
      desc: "Ensure seamless synchronization across operating accounts, merchant settlement gateways, savings buffers, and corporate cards.",
    },
    {
      icon: (
        <RiseOutlined className="text-xl text-purple-600 dark:text-purple-400" />
      ),
      title:
        "Growing businesses whose transaction volume has outgrown ad hoc bookkeeping",
      desc: "Transition smoothly from makeshift spreadsheets or sporadic data entry to an institutional-grade, repeatable financial workflow.",
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
            Client Profile &amp; Fit
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who benefits from a monthly bookkeeper?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A monthly bookkeeper can be useful for owners who have steady
            transaction activity but do not require a full in-house bookkeeping
            function. It can also suit businesses that currently complete
            records irregularly and want a repeatable process.
          </p>
        </div>

        {/* 6 Target Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {targetProfiles.map((item, idx) => (
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
                <span>Profile 0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Strip */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm text-slate-600 dark:text-zinc-300 mb-4 font-normal">
            Ready to replace ad hoc stress with a predictable, stress-free
            monthly bookkeeping routine?
          </p>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="font-bold"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
