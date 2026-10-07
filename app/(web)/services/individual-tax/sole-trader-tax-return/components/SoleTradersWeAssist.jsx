"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ToolOutlined,
  LaptopOutlined,
  ShopOutlined,
  ApartmentOutlined,
  RocketOutlined,
  AppstoreOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * SoleTradersWeAssist Component
 * =============================
 * Section 2: Who This Service Is For.
 * Features 100% complete, verbatim content from Page 4 of the client document.
 */
export default function SoleTradersWeAssist() {
  const clientGroups = [
    {
      title: "tradies, subcontractors and labour hire workers",
      description: "Carpenters, electricians, plumbers, builders and trade subcontractors managing tool deductions, materials and vehicle logbooks.",
      icon: <ToolOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      tag: "Trades & Labour",
    },
    {
      title: "freelancers, consultants and professional service providers",
      description: "Marketing specialists, IT contractors, business consultants and designers navigating professional fees and PSI rules.",
      icon: <LaptopOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      tag: "Consultants & Freelance",
    },
    {
      title: "online and home-based business operators",
      description: "E-commerce sellers, creators, digital stores and home-based service operators claiming occupancy and operational expenses.",
      icon: <ShopOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      tag: "Digital & Home-Based",
    },
    {
      title: "sole traders with both employment and business income",
      description: "Professionals running an ABN side-business alongside regular PAYG employment salary and wages.",
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      tag: "Dual Income",
    },
    {
      title: "new sole traders preparing their first return",
      description: "First-time business owners establishing tax systems, expense tracking, and claiming initial startup costs.",
      icon: <RocketOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      tag: "Startups & First Return",
    },
    {
      title: "established operators with more complex records or obligations",
      description: "Established businesses handling GST, multiple subcontractors, asset depreciation schedules, and quarterly BAS.",
      icon: <AppstoreOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      tag: "Established Operators",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Client Practice Profiles
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Who This Service Is For
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            This service is for Australians carrying on a business in their own name or under an ABN, including:
          </p>
        </div>

        {/* 6 Client Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {clientGroups.map((group, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center transition-transform group-hover:scale-105">
                    {group.icon}
                  </div>
                  <Tag className="text-[11px] font-bold uppercase tracking-wider bg-white dark:bg-zinc-800 text-slate-600 dark:text-zinc-300 border-none m-0 shadow-2xs">
                    {group.tag}
                  </Tag>
                </div>

                <div className="flex items-start gap-2 mb-2.5">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug capitalize-first">
                    {group.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-5 font-normal">
                  {group.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 dark:border-zinc-800 text-[11px] font-medium text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
                <span>Profile 0{idx + 1}</span>
                <span>Specialized Review</span>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Contextual Scenario Callout */}
        <div className="rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-200/80 dark:border-amber-800/50 p-6 sm:p-7 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-xs">
          <div className="flex items-start gap-3.5 max-w-3xl">
            <InfoCircleOutlined className="text-amber-600 dark:text-amber-400 text-xl mt-0.5 shrink-0" />
            <p className="text-xs sm:text-sm text-amber-950 dark:text-amber-200 leading-relaxed font-normal">
              <strong>Industry-Specific Consideration:</strong> A tradie may need to review tools, vehicle use and subcontractor costs, while a consultant may need to consider mixed income or Personal Services Income rules.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="w-full md:w-auto font-bold rounded-xl bg-amber-700 hover:bg-amber-800 text-white border-none h-10 px-5"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Discuss Your Occupation
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
