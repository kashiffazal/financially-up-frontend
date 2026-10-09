"use client";

import React from "react";
import { Tag, Alert } from "antd";
import {
  CheckCircleOutlined,
  IdcardOutlined,
  MailOutlined,
  SwapOutlined,
  CopyOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatToCheckBeforeRenewing Component
 * ===================================
 * Section 2 of Business Name Renewal (/services/asic/business-name-renewal/):
 * "What should be checked before you renew a business name?"
 *
 * Implements 100% complete, verbatim content from Page 4 of '7th Pillar ASIC.docx'.
 * Clean White alternating section background with 5 structured verification cards.
 */
export default function WhatToCheckBeforeRenewing() {
  const checkItems = [
    {
      icon: <CheckCircleOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "whether the business still trades under the name and intends to keep using it",
      desc: "Confirm active commercial trading under the title and ongoing intellectual property relevance for your enterprise.",
    },
    {
      icon: <IdcardOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "the identity of the registered business name holder and the associated ABN",
      desc: "Verify that the holding entity (sole trader, partnership, company, or trust) matches the underlying operating structure.",
    },
    {
      icon: <MailOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "email, service-of-documents and other contact details recorded with ASIC",
      desc: "Ensure formal service addresses and email contacts are accurate so crucial ASIC compliance notices are delivered.",
    },
    {
      icon: <SwapOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "whether the business has been sold, restructured or transferred to another entity",
      desc: "Identify whether an entity transfer or assignment has occurred which requires a formal name transfer rather than simple renewal.",
    },
    {
      icon: <CopyOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "whether there are duplicate or unused business names that should be reviewed rather than renewed automatically",
      desc: "Prune redundant trading names to prevent paying unnecessary ASIC statutory renewal fees across holding portfolios.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Pre-Renewal Due Diligence
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What should be checked before you renew a business name?
            </h2>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Before renewing, it is sensible to confirm that the existing registration still reflects how the business is operating. Useful checks include:
            </p>
          </div>

          {/* 5 Check Cards */}
          <div className="space-y-4 mb-8">
            {checkItems.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/70 dark:border-zinc-800 flex items-start gap-4 hover:border-emerald-400/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center shrink-0 mt-0.5">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug capitalize-first mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal m-0">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Warning / Guidance Alert */}
          <Alert
            type="info"
            showIcon
            icon={<InfoCircleOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />}
            className="rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/70 dark:bg-emerald-950/30 p-4 sm:p-5"
            title={
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Ownership & Restructure Alignment
              </span>
            }
            description={
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 mt-1 font-normal">
                If the holder or ownership arrangement has changed, a simple renewal may not correct that issue. The transaction required depends on what has actually changed. Financially Up can help identify the administrative position and, where relevant, coordinate it with business structure or accounting work.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
}
