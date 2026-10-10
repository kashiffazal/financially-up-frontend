"use client";

import React from "react";
import { Tag } from "antd";
import {
  WarningOutlined,
  SafetyCertificateOutlined,
  SyncOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * AbnEntitlementNeedsToBeGenuine Component
 * ========================================
 * Section: ABN entitlement needs to be genuine
 * Verbatim text from Page 10 of client docx (8th Pillar Trust Services.docx).
 * Covers Australian Business Register entitlement reviews, evidence of enterprise,
 * and consequences of material structural changes requiring new ABN registrations.
 */
export default function AbnEntitlementNeedsToBeGenuine() {
  const compliancePoints = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "ABR Entitlement Reviews & Evidence",
      desc: "Not every entity is entitled to an ABN. The Australian Business Register can review ABN entitlement and may ask for evidence that the trust commenced, or took steps to commence, the enterprise from the stated start date.",
    },
    {
      icon: <WarningOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Real Activities vs General Identifier",
      desc: "For that reason, the application should reflect the real activities and timing rather than using an ABN as a general-purpose identifier.",
    },
    {
      icon: <SyncOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Structural Changes May Require New ABN",
      desc: "If the trust's structure or ownership arrangements change materially later, registration consequences may need to be reviewed. A change to the underlying entity or structure can sometimes mean a new ABN is required rather than simply updating the existing record.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            ABR Compliance & Entity Integrity
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            ABN entitlement needs to be genuine
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Not every entity is entitled to an ABN. The Australian Business Register can review ABN entitlement and may
            ask for evidence that the trust commenced, or took steps to commence, the enterprise from the stated start
            date. For that reason, the application should reflect the real activities and timing rather than using an ABN
            as a general-purpose identifier.
          </p>
        </div>

        {/* 3 Compliance Points Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {compliancePoints.map((item, idx) => (
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

        {/* Verbatim Structural Variation Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Ongoing Registration & Structure Review
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If the trust&apos;s structure or ownership arrangements change materially later, registration consequences
              may need to be reviewed. A change to the underlying entity or structure can sometimes mean a new ABN is
              required rather than simply updating the existing record.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
