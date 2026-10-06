"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  SolutionOutlined,
  CheckCircleOutlined,
  KeyOutlined,
  HomeOutlined,
  UserOutlined,
  FileDoneOutlined,
  FileSearchOutlined,
  CalendarOutlined,
  AlertOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInformationNeededAsic Component
 * ===================================
 * Section: "Information we may need"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '7th Pillar ASIC.docx' (Section 1).
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatInformationNeededAsic() {
  /**
   * The 8 record types specifically listed in Paragraph 1
   */
  const usefulInformationList = [
    {
      icon: <FileSearchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Latest ASIC Annual Statement",
      description: "Recent annual review statement showing current registered details and review date.",
    },
    {
      icon: <KeyOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Corporate Key or Portal Details",
      description: "Official 9-digit ASIC Corporate Key or registered portal login information where applicable.",
    },
    {
      icon: <HomeOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Registered Office & Business Addresses",
      description: "Current and proposed physical addresses for registered office and principal place of business.",
    },
    {
      icon: <UserOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Officeholder Details",
      description: "Full legal names, dates and places of birth, and residential addresses of directors and secretaries.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Signed Consents",
      description: "Written consents to act as director or secretary, and occupier consent for registered office if applicable.",
    },
    {
      icon: <SolutionOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Share Registers",
      description: "Company register of members, share allotment records, and share certificates.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Company Resolutions",
      description: "Minutes of directors' meetings or circular resolutions approving the corporate change.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Effective Date Documents",
      description: "Documents supporting the exact date on which the change took place in company operations.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <SolutionOutlined className="mr-1" /> Documentation Checklist
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Information we may need
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The records required depend on the lodgement. Useful information can include the latest ASIC annual statement, corporate key or portal details where applicable, current registered office and business addresses, officeholder details, signed consents, share registers, company resolutions and documents supporting the effective date of a change.
          </p>
        </div>

        {/* 8 Information Checklist Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {usefulInformationList.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/50 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Ownership & Share Changes Consistency Box - Paragraph 2 Verbatim */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-semibold mb-3">
              <AlertOutlined />
              <span>Internal Register Consistency</span>
            </div>
            {/* Document Paragraph 2 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0 font-medium">
              For ownership or share changes, it is important that the ASIC filing is consistent with the company’s internal records. If the underlying transaction is incomplete or unclear, the filing should not be treated as a substitute for proper documentation.
            </p>
          </div>
          <div className="shrink-0 flex items-center gap-3">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPlacement="end"
                className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
              >
                Review Records With Us
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
