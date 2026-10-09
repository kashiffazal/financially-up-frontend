"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  GlobalOutlined,
  TeamOutlined,
  CalendarOutlined,
  LockOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpFamilyTrust Component
 * ===========================================
 * Section: Why choose Financially Up?
 * Verbatim text from Page 2 of client docx.
 * Dynamically renders company credentials via useCompany() hook.
 */
export default function WhyChooseFinanciallyUpFamilyTrust() {
  const company = useCompany();

  const reasons = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-brand-emerald" />,
      title: "Registered Tax Agent #26234055",
      desc: "Fully registered with the Tax Practitioners Board (TPB), providing extended trust lodgement deadlines.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Members",
      desc: "Our senior accounting team includes certified CPA and IPA practitioners with deep private wealth expertise.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Service",
      desc: "100% online video appointments across all states and territories, alongside in-person meetings by appointment.",
    },
    {
      icon: <LockOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Integrated & Connected",
      desc: "We connect trust accounts, tax returns, and resolutions, while clearly flagging separate legal or tax advice.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Qualified Trust Practice
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose Financially Up?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company.legalName || "Financially Up Pty Ltd"} is a registered tax agent with 10+ years of experience. Our
            professional team includes CPA and IPA members and supports clients Australia-wide. Online and in-person
            appointment options are available.
          </p>
        </div>

        {/* 4 Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {reasons.map((r, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {r.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {r.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {r.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Core Principle Summary Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-brand-emerald" />
              Connected Accounting & Clear Scope Boundaries
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              We focus on keeping the family trust’s accounting, tax-return work and distribution-related information
              connected, while clearly identifying when separate planning, legal input or specialist tax work may be
              required.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0 w-full md:w-auto">
            <Button
              type="primary"
              className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
