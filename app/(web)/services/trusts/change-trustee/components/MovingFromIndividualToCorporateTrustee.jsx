"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  BankOutlined,
  SafetyOutlined,
  IdcardOutlined,
  AuditOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * MovingFromIndividualToCorporateTrustee Component
 * ================================================
 * Section: Moving from an individual trustee to a corporate trustee
 * Verbatim text from Page 8 of client docx (8th Pillar Trust Services.docx).
 * Explains transitioning from personal individuals to a Pty Ltd corporate trustee,
 * perpetual succession advantages, director responsibilities, and links to Corporate Trustee service.
 */
export default function MovingFromIndividualToCorporateTrustee() {
  const corporateAdvantages = [
    {
      icon: <SafetyOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Capacity-Only Legal Title",
      desc: "The company acts in its capacity as trustee rather than owning trust assets beneficially, strictly segregating trust property from directors’ private estates.",
    },
    {
      icon: <BankOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Streamlined Future Succession",
      desc: "Changes in family generations or director appointments occur at the company board level without requiring re-registration of property titles, bank accounts, or contracts.",
    },
    {
      icon: <IdcardOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Director IDs & Corporate Rules",
      desc: "Incoming directors must hold active Director Identification Numbers (Director IDs) and adhere to statutory director duties under the Corporations Act 2001.",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Annual ASIC Review & Filings",
      desc: "The trustee company incurs annual ASIC review fees, solvency declarations, and register maintenance, even when functioning purely as a holding trustee.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Corporate Succession
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Moving from an individual trustee to a corporate trustee
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A common change is replacing one or more individual trustees with a company. The company then acts in its
            capacity as trustee rather than owning the trust assets beneficially. This can make future trustee
            succession and administration more manageable, but it also creates company compliance obligations and
            director responsibilities.
          </p>
        </div>

        {/* 4 Corporate Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {corporateAdvantages.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Callout & Link Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
              Company Establishment & Ongoing Role
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If a company will become trustee, it needs to be properly established and its directors must meet the
              applicable requirements. Our{" "}
              <Link
                href="/services/trusts/corporate-trustee"
                className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
              >
                Corporate Trustee
              </Link>{" "}
              service explains the company-side setup and ongoing role in more detail.
            </p>
          </div>
          <Link
            href="/services/trusts/corporate-trustee"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm shrink-0"
          >
            Corporate Trustee Service <ArrowRightOutlined className="ml-2 text-xs" />
          </Link>
        </div>
      </div>
    </section>
  );
}
