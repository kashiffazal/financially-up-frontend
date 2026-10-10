"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  CalendarOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpRdEligibility Component
 * ============================================
 * Section: Why choose Financially Up?
 * Verbatim text from Page 3 of 15th Pillar R&D Tax Incentive docx.
 * Dynamically resolves company details via useCompany().
 */
export default function WhyChooseFinanciallyUpRdEligibility() {
  const company = useCompany();

  const credentials = [
    {
      icon: (
        <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Registered Tax Agent",
      subtitle: company?.abn ? `ABN: ${company.abn}` : "TPB Registered Agent",
    },
    {
      icon: (
        <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
      title: "CPA & IPA Members",
      subtitle: "Qualified Tax Specialists",
    },
    {
      icon: (
        <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Australia-Wide Support",
      subtitle: "Online & In-Person Consultations",
    },
    {
      icon: (
        <CalendarOutlined className="text-2xl text-indigo-600 dark:text-indigo-400" />
      ),
      title: "10+ Years Experience",
      subtitle: "Taxation & Accounting Practice",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Trusted Practice
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose {company?.tradingName || company?.legalName || "Financially Up"}?
          </h2>
        </div>

        {/* Verbatim Document Text Card */}
        <div className="max-w-4xl mx-auto bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-8 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
            <CheckCircleOutlined />
            <span>Honest Evaluation &amp; Regulatory Alignment</span>
          </div>
          <p className="text-base sm:text-lg text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
            {company?.legalName || "Financially Up Pty Ltd"} is a registered tax agent with more than
            10 years of experience and a team including CPA and IPA members. We work with businesses
            across Australia through online and in-person appointments. We focus on an honest
            assessment of records, scope and tax consequences rather than promising that a project will
            qualify or an offset will be paid.
          </p>
        </div>

        {/* 4 Professional Credential Badges */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto mb-10">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800 text-center shadow-xs flex flex-col items-center justify-center hover:border-emerald-500/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center mb-3 border border-slate-200/60 dark:border-zinc-800">
                {cred.icon}
              </div>
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {cred.title}
              </h4>
              <p className="text-xs text-slate-500 dark:text-zinc-400">
                {cred.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Action Button Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              className="bg-emerald-600 hover:bg-emerald-700 border-emerald-600 font-semibold px-8 h-12 rounded-xl shadow-xs"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
            >
              Book an Appointment
            </Button>
          </Link>
          {company?.phone && (
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
              <Button
                size="large"
                className="font-semibold px-6 h-12 rounded-xl border-slate-300 dark:border-zinc-700 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400"
                icon={<PhoneOutlined />}
              >
                Call {company.phone}
              </Button>
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
