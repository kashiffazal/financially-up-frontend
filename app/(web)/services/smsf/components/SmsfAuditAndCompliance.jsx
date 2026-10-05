"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  AuditOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * SmsfAuditAndCompliance Component
 * ================================
 * Section 4: Independent Audit Coordination & The 45-Day Rule.
 *
 * Explains the mandatory annual independent audit under the SIS Act,
 * the statutory 45-day auditor appointment deadline, and market valuation rules.
 *
 * Background: Clean White.
 */
export default function SmsfAuditAndCompliance() {
  const auditRules = [
    {
      icon: <AuditOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Mandatory Independent ASIC Auditor",
      description:
        "Every SMSF must undergo an annual financial and regulatory compliance audit by an independent auditor registered with ASIC, even if the fund had zero contributions or pension payments during the year.",
      tag: "ASIC Registered",
    },
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "The 45-Day Appointment Deadline",
      description:
        "Superannuation law requires trustees to formally appoint their approved SMSF auditor at least 45 days before the SMSF Annual Return (SAR) lodgement deadline, ensuring sufficient audit preparation time.",
      tag: "45-Day Rule",
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Annual Market Valuation Evidence",
      description:
        "The ATO mandates that all SMSF assets—including commercial premises, residential property, and private investments—must be valued at objective market value as at 30 June each year.",
      tag: "Market Valuation",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Statutory Audit Requirement
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Independent Audit Coordination & The 45-Day Rule
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The annual audit is an independent check ensuring your super fund complies with the SIS Act and ATO regulations. Clean accounting workpapers make the audit fast, efficient, and trouble-free.
          </p>
        </div>

        {/* 3 Audit Rule Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {auditRules.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Audit Coordination Reassurance"
          tagIcon="safety"
          title="Seamless Independent SMSF Audit Coordination"
          description="Financially Up prepares complete, audit-ready workpapers and coordinates directly with accredited independent SMSF auditors, resolving technical queries and delivering an unqualified audit report."
          primaryButton={{
            text: "Coordinate My SMSF Audit",
            href: "/services/smsf/audit-coordination",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
