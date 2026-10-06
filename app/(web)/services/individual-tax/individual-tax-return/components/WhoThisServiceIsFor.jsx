"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  HomeOutlined,
  LineChartOutlined,
  ClockCircleOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoThisServiceIsFor Component
 * ==============================
 * Section 2: Who This Service Is For.
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * Always utilizes Ant Design Button components for interactive actions.
 */
export default function WhoThisServiceIsFor() {
  const specialistLinks = [
    {
      icon: <HomeOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Property & Rental Tax",
      desc: "Negative gearing, rental schedules & depreciation deductions",
      href: "/services/property-tax",
    },
    {
      icon: <LineChartOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Capital Gains & Investments",
      desc: "Shares, crypto transactions, managed funds & CGT discounts",
      href: "/services/tax-planning",
    },
    {
      icon: <ClockCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Prior-Year & Overdue Returns",
      desc: "Catch-up lodgements, missing records & ATO penalty remission",
      href: "/services/ato-help",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Profile
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who This Service Is For
          </h2>
        </div>

        {/* 2 Primary Content Cards with Verbatim Text */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Card 1: Complex Tax Affairs */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100/70 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 text-xs font-bold uppercase tracking-wider mb-5">
                <CheckCircleOutlined className="text-sm" />
                <span>Multi-Stream &amp; Complex Portfolios</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Complex Personal Tax Portfolios
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                This service is primarily for individuals whose tax affairs are more complex than a basic salary-and-wage return. It may suit you if you have multiple income sources, employment income plus investments, an investment property, an asset sale, share or managed fund income, crypto asset activity, overseas income, employee shares, contracting income or deductions that need careful review.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Tailored CPA assessment for every income stream
              </span>
              <Link href="/book-an-appointment">
                <Button type="primary" size="middle" icon={<ArrowRightOutlined />} iconPosition="end">
                  Book Consult
                </Button>
              </Link>
            </div>
          </div>

          {/* Card 2: Straightforward Returns & Specialist Connection */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-100/70 dark:bg-teal-950 text-teal-800 dark:text-teal-300 text-xs font-bold uppercase tracking-wider mb-5">
                <UserOutlined className="text-sm" />
                <span>Straightforward Lodgement &amp; Support</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
                Straightforward Returns with Expert Guidance
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                We also provide tax return assistance for individuals with straightforward returns who want a personal tax return accountant to prepare the return and answer their questions. If your matter requires detailed advice about property, capital gains or outstanding lodgements, Financially Up can connect the return work with the relevant specialist tax service.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200/70 dark:border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-slate-500 dark:text-zinc-400">
                Fast turnarounds &amp; direct accountant access
              </span>
              <Link href="/services/individual-tax">
                <Button type="default" size="middle" icon={<ArrowRightOutlined />} iconPosition="end">
                  View Individual Hub
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Connected Specialist Tax Services Strip */}
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-200/80 dark:border-zinc-800/80 p-6 sm:p-8">
          <div className="text-xs font-extrabold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-4 text-center sm:text-left">
            Connected Specialist Practices at Financially Up:
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {specialistLinks.map((spec, i) => (
              <div
                key={i}
                className="flex items-start gap-3.5 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-400/50 transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 shrink-0">
                  {spec.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {spec.title}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-zinc-400 leading-snug mb-2.5">
                    {spec.desc}
                  </p>
                  <Link href={spec.href}>
                    <Button
                      type="link"
                      className="p-0 text-xs font-bold text-brand-primary dark:text-emerald-400 h-auto inline-flex items-center gap-1"
                      icon={<ArrowRightOutlined className="text-[10px]" />}
                      iconPosition="end"
                    >
                      Learn more
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
