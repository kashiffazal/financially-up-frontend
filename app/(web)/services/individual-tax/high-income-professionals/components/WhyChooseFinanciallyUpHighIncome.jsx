"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpHighIncome Component
 * ==========================================
 * Section 6: About Financially Up / Why Choose Us.
 * Features 100% complete, verbatim content from Page 3 of the client document.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 */
export default function WhyChooseFinanciallyUpHighIncome() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      subtitle: "Tax Agent Number: 26242127",
    },
    {
      icon: <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Specialists",
      subtitle: "Qualified Accounting & Tax Team",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "Australia-Wide Support",
      subtitle: "Virtual Outlook Meetings & In-Person",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Trusted Advisors
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Financially Up
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Professional accounting and advisory practice supporting executives, high-income earners, and business leaders across Australia.
          </p>
        </div>

        {/* 2 Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Card 1: Statutory Credentials */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <CheckCircleOutlined />
                <span>Registered Tax Agent Credentials</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                {company?.legalName || "Financially Up Pty Ltd"} is a registered tax agent, Tax Agent Number 26242127. We provide individual tax return preparation and tax planning support for Australian professionals, executives and individuals with complex tax circumstances.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 flex items-center justify-between">
              <span>ABN: {company?.abn || "84 659 717 263"}</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">TPB Registered</span>
            </div>
          </div>

          {/* Card 2: Professional Approach */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <CheckCircleOutlined />
                <span>Compliance &amp; Advisory Standard</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                We explain what needs to be reported, identify the information required and prepare your return based on the records provided and applicable rules.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-200/60 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-2">
              <EnvironmentOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>{company?.address || "Level 5, 100 Walker St, North Sydney NSW 2060, Australia"}</span>
            </div>
          </div>
        </div>

        {/* 3 Credential Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-12">
          {credentials.map((cred, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-sm transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mx-auto mb-3">
                {cred.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {cred.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium">
                {cred.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Contact Strip */}
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              Have Questions Before Booking?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-normal">
              Speak with our senior client services team to discuss your executive or professional requirements.
            </p>
          </div>
          <div className="flex items-center gap-3">
            {company?.phone && (
              <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
                <Button
                  size="large"
                  icon={<PhoneOutlined />}
                  className="font-bold rounded-xl text-slate-800 dark:text-white border-slate-300 dark:border-zinc-700 h-11"
                >
                  {company.phone}
                </Button>
              </a>
            )}
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                size="large"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
                className="font-bold rounded-xl bg-brand-primary hover:bg-brand-primary-dark border-none h-11"
              >
                Book Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
