"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  DollarCircleOutlined,
  CalendarOutlined,
  RetweetOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatAreSmallBusinessCgtConcessions Component
 * ============================================
 * Section: What are the small business CGT concessions?
 * Verbatim text from Page 12 of client docx.
 * Covers:
 * - Concessions reducing, deferring, or disregarding eligible capital gains
 * - Distinction from ordinary general CGT rules
 * - The four main concessions: 15-year exemption, 50% active asset reduction,
 *   retirement exemption, small business rollover
 * - Importance of the application order.
 */
export default function WhatAreSmallBusinessCgtConcessions() {
  const fourConcessions = [
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "15-Year Exemption",
      desc: "Can disregard an entire eligible capital gain where the asset has been continuously owned for at least 15 years and retirement or incapacity conditions are satisfied.",
    },
    {
      icon: <DollarCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "50% Active Asset Reduction",
      desc: "Reduces an eligible capital gain by 50%. This is distinct from the general 50% CGT discount and is available to companies that qualify.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Retirement Exemption",
      desc: "Can disregard eligible capital gains up to a statutory lifetime limit ($500,000), with superannuation payment requirements if under 55.",
    },
    {
      icon: <RetweetOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Small Business Rollover",
      desc: "Can defer all or part of an eligible capital gain for two years or longer when acquiring a replacement active asset or improving existing assets.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Division 152 Framework
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What are the small business CGT concessions?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The small business CGT concessions are a set of concessions in the tax law that may reduce, defer or disregard an eligible capital gain. They are separate from the ordinary CGT rules and are not automatically available just because the seller considers the business to be small.
          </p>
        </div>

        {/* 4 Concessions Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {fourConcessions.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Verbatim Explanatory Box: Order of Application */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Order of Application Affects the Final Tax Outcome
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              The four main concessions are the 15-year exemption, the 50% active asset reduction, the retirement exemption and the small business rollover. Each has its own conditions, and the order in which concessions are applied can affect the final outcome.
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
                Model Concessions Order
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
