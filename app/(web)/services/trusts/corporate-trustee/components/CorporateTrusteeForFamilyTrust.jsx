"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SafetyOutlined,
  HistoryOutlined,
  AuditOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * CorporateTrusteeForFamilyTrust Component
 * ========================================
 * Section: Corporate trustee for a family trust
 * Verbatim text from Page 5 of client docx (8th Pillar Trust Services.docx).
 * Explains trustee succession continuity, personal liability isolation,
 * company-level administration, and links to Family Trust & Business Structures services.
 */
export default function CorporateTrusteeForFamilyTrust() {
  const benefits = [
    {
      icon: <HistoryOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Perpetual Succession & Continuity",
      desc: "Unlike individual trustees where incapacity or passing triggers costly title re-registrations, a company provides uninterrupted legal ownership of trust assets.",
    },
    {
      icon: <SafetyOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Personal Ownership Separation",
      desc: "Creates clear demarcation between the directors' personal affairs and their duties administering family trust property for nominated beneficiaries.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Ongoing Company-Level Governance",
      desc: "Requires proactive maintenance of ASIC company statements, annual review fee payments, registered office records, and director solvency resolutions.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Family Asset Protection
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Corporate trustee for a family trust
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A company can act as trustee for a family trust. This is common where the owners want continuity of the
            trustee role or clearer separation between personal ownership and trust administration. However, using a
            company as trustee also creates company-level administration: the company must remain registered, keep its
            ASIC details current, maintain directors and comply with annual review requirements.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {benefits.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Verbatim Link Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Exploring Trust Operations & Setup Decisions
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                For the trust itself, see our{" "}
                <Link
                  href="/services/trusts/family-trust"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Family Trust
                </Link>{" "}
                service. If you are deciding whether to use a company as trustee or need a new trustee company
                established, our{" "}
                <Link
                  href="/services/business-structures"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Business Structures Corporate Trustee
                </Link>{" "}
                service addresses the structure and setup decision in more detail.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/services/trusts/family-trust"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
              >
                Family Trust Service <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
              <Link
                href="/services/business-structures"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
              >
                Business Structures <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
