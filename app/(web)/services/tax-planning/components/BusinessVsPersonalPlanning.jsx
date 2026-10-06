"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  UserOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * BusinessVsPersonalPlanning Component
 * =====================================
 * Section 4 of Tax Planning Hub:
 * "Business and Personal Tax Planning"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx' (Page 1).
 */
export default function BusinessVsPersonalPlanning() {
  /**
   * Focus points directly drawn from verbatim Paragraph 2
   */
  const businessFocusPoints = [
    "Business income",
    "Deductions",
    "Cash flow",
    "Structures",
    "GST/BAS considerations",
    "Planning around business decisions",
  ];

  /**
   * Focus points directly drawn from verbatim Paragraph 3
   */
  const personalFocusPoints = [
    "Employment and investment income",
    "Rental property",
    "Capital gains",
    "Deductions",
    "Superannuation-related matters",
    "Other personal tax considerations",
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <ApartmentOutlined className="mr-1" /> Distinct Planning Frameworks
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Business and Personal Tax Planning
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The main tax planning page provides an overview across both business
            and individual matters. More detailed planning should be matched to
            the taxpayer and decision involved.
          </p>
        </div>

        {/* 2 Major Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Business Tax Planning Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800 flex items-center justify-center">
                  <BankOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/50 text-teal-700 dark:text-teal-300 border border-teal-200 dark:border-teal-800">
                  Business Focus
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Business Tax Planning
              </h3>
              {/* Document Paragraph 2 - Verbatim */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                For business owners, our Business Tax Planning service focuses on
                business income, deductions, cash flow, structures, GST/BAS
                considerations and planning around business decisions.
              </p>

              <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100 dark:border-zinc-800">
                {businessFocusPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300"
                  >
                    <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/services/tax-planning/business-tax-planning"
              className="w-full block"
            >
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-12 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center"
              >
                Explore Business Tax Planning
              </Button>
            </Link>
          </div>

          {/* Personal Tax Planning Column */}
          <div className="p-8 sm:p-10 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-emerald-500/50 transition-all flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center">
                  <UserOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
                </div>
                <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800">
                  Individual Focus
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3">
                Personal Tax Planning
              </h3>
              {/* Document Paragraph 3 - Verbatim */}
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 leading-relaxed mb-6">
                For individuals, our Personal Tax Planning service considers
                employment and investment income, rental property, capital
                gains, deductions, superannuation-related matters and other
                personal tax considerations.
              </p>

              <div className="space-y-2.5 mb-8 pt-4 border-t border-slate-100 dark:border-zinc-800">
                {personalFocusPoints.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300"
                  >
                    <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/services/tax-planning/personal-tax-planning"
              className="w-full block"
            >
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="w-full h-12 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.01] active:scale-[0.99] transition-all flex items-center justify-center"
              >
                Explore Personal Tax Planning
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
