"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  HomeOutlined,
  ApartmentOutlined,
  ExclamationCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * ActiveAssetTestExplained Component
 * ==================================
 * Section: The active asset test
 * Verbatim text from Page 12 of client docx.
 * Covers:
 * - Used or held ready for use in carrying on business for required period
 * - Intangible assets including goodwill
 * - Exclusion of assets mainly used to derive rent
 * - Commercial property history & operating entity relationships.
 */
export default function ActiveAssetTestExplained() {
  const activeAssetPillars = [
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Business Usage Duration",
      desc: "The asset must be used or held ready for use in the course of carrying on a business by you, an affiliate, or connected entity for at least half the ownership period (or 7.5 years if owned over 15 years).",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Intangible Assets & Goodwill",
      desc: "Certain intangible assets, such as goodwill, licenses, patents, or intellectual property inherently connected to the commercial operations of the business, may also qualify where the conditions are met.",
    },
    {
      icon: <HomeOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Rental & Commercial Property Rules",
      desc: "Assets mainly used to derive rent can be excluded from active-asset treatment, subject to the detailed rules and facts. Property transactions in particular need careful review because the business-use history and relationship between the property owner and operating entity can be important.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Core Asset Criteria
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            The active asset test
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            The active asset test examines whether the asset was used, or held ready for use, in the course of carrying on a business for the required period. Certain intangible assets, such as goodwill, may also qualify where the conditions are met.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {activeAssetPillars.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
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

        {/* Verbatim Rental Exclusion Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-amber-500/10 via-white to-slate-50 dark:from-amber-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-amber-500/20 dark:border-amber-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400" />
              Careful Scrutiny for Commercial Real Estate
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Assets mainly used to derive rent can be excluded from active-asset treatment, subject to the detailed rules and facts. Property transactions in particular need careful review because the business-use history and relationship between the property owner and operating entity can be important.
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
                Review Active Asset Status
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
