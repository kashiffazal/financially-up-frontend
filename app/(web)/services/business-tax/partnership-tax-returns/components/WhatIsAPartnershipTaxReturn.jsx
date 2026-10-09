"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  SwapOutlined,
  FileDoneOutlined,
  AuditOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIsAPartnershipTaxReturn Component
 * =====================================
 * Section: Partnership Tax Return & Accounting Services Overview
 * Features 100% complete, verbatim content from Page 4 of client docx.
 * Explains flow-through taxation, partner allocations, and professional preparation.
 */
export default function WhatIsAPartnershipTaxReturn() {
  const highlights = [
    {
      icon: (
        <SwapOutlined className="text-xl text-teal-600 dark:text-teal-400" />
      ),
      title: "Flow-Through Taxation",
      desc: "The partnership itself generally does not pay income tax on its net income; instead, each partner reports their share in their own tax return, subject to the applicable tax rules.",
    },
    {
      icon: (
        <FileDoneOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Organized Annual Returns",
      desc: "Financially Up Pty Ltd provides partnership tax return preparation and partnership accounting services for businesses across Australia, helping organize records and prepare compliant annual returns.",
    },
    {
      icon: (
        <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Partner Reconciliation & Advisory",
      desc: "We reconcile partner information, balance drawings against taxable profits, and identify matters that may need separate tax advice before lodgment.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="cyan"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Partnership Tax Fundamentals
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Partnership Tax Return &amp; Accounting Services
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A partnership tax return reports the partnership’s business income,
            deductions and tax information for the year, including how relevant
            income or losses are allocated to the partners.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Verbatim Editorial Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50/80 dark:bg-zinc-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <BankOutlined className="text-teal-600 dark:text-teal-400" />
                How Partnership Taxation Operates
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A partnership tax return reports the partnership’s business
                income, deductions and tax information for the year, including
                how relevant income or losses are allocated to the partners. The
                partnership itself generally does not pay income tax on its net
                income; instead, each partner reports their share in their own
                tax return, subject to the applicable tax rules.
              </p>
              <div className="h-px bg-slate-200 dark:bg-zinc-700 my-2" />
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up Pty Ltd provides partnership tax return
                preparation and partnership accounting services for businesses
                across Australia. We help organize the partnership’s records,
                prepare the annual return, reconcile partner information and
                identify matters that may need separate tax advice before
                lodgment.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  className="brand-btn-primary text-xs sm:text-sm font-semibold rounded-xl"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                >
                  Book Partnership Consultation
                </Button>
              </Link>
              <Link href="/services/business-tax">
                <Button
                  type="default"
                  className="brand-btn-outline text-xs sm:text-sm font-semibold rounded-xl"
                >
                  Explore Business Tax Hub
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Structured Highlights */}
          <div className="lg:col-span-6 space-y-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
