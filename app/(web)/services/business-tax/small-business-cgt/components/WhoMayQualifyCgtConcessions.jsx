"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  AuditOutlined,
  DollarCircleOutlined,
  ApartmentOutlined,
  FileSearchOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhoMayQualifyCgtConcessions Component
 * =====================================
 * Section: Who may qualify?
 * Verbatim text from Page 12 of client docx.
 * Covers:
 * - Basic eligibility conditions
 * - $2M aggregated turnover threshold vs $6M maximum net asset value test (MNAVT)
 * - Specific rules for connected entities and affiliates
 * - Additional conditions for shares, trust interests, companies and trusts.
 */
export default function WhoMayQualifyCgtConcessions() {
  const pathways = [
    {
      icon: <DollarCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "$2 Million Aggregated Turnover Pathway",
      desc: "Satisfying the small business entity pathway where the entity carries on a business and its aggregated turnover (including connected entities and affiliates) is under $2 million.",
      badge: "Turnover Pathway",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "$6 Million Maximum Net Asset Value Test",
      desc: "Satisfying the maximum net asset value test where total net market value of CGT assets owned by the entity, affiliates, and connected entities does not exceed $6 million immediately before the CGT event.",
      badge: "Net Assets Pathway",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Connected Entities & Affiliates Rules",
      desc: "Specific tax aggregation rules require combining the turnover and net assets of entities you control (40%+ test) or affiliates that act in accordance with your directions.",
      badge: "Aggregation Rules",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Shares & Trust Interests (Stakeholders)",
      desc: "Additional conditions apply where selling shares or units, requiring significant individuals (20%+ small business participation percentage) and CGT concession stakeholders.",
      badge: "Equity & Trusts",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Basic Eligibility Thresholds
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who may qualify?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Eligibility starts with the basic conditions. Depending on the circumstances, access may involve satisfying the small business entity pathway based on aggregated turnover or the maximum net asset value test, as well as the active asset test. Current law generally uses a $2 million aggregated-turnover threshold for the relevant small business CGT test and a $6 million maximum net asset value threshold, but the calculations include specific rules for connected entities and affiliates.
          </p>
        </div>

        {/* 4 Pathways Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {pathways.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <Tag color="cyan" className="font-semibold text-xs">
                    {item.badge}
                  </Tag>
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

        {/* Verbatim Critical Box: Ownership Chains & Related Entities */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
              Ownership Chain and Related Entity Assessment
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Additional conditions can apply where the CGT asset is a share or trust interest, or where the concession is being claimed by a company or trust. A small business CGT advice accountant should therefore review the ownership chain and related entities rather than looking only at the selling entity.
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
                Assess Basic Conditions
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
