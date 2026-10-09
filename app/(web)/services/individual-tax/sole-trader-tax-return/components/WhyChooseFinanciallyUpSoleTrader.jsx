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
  InfoCircleOutlined,
  EnvironmentOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpSoleTrader Component
 * =========================================
 * Section 7: About Financially Up / Why Choose Us.
 * Features 100% complete, verbatim content from Page 4 of the client document.
 * Centralized company contact values are dynamically accessed via `useCompany()`.
 */
export default function WhyChooseFinanciallyUpSoleTrader() {
  const company = useCompany();

  const credentials = [
    {
      icon: (
        <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Registered Tax Agent",
      subtitle: "Tax Agent Number: 26242127",
    },
    {
      icon: (
        <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
      title: "CPA & IPA Qualified",
      subtitle: "Small Business Tax Specialists",
    },
    {
      icon: (
        <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Australia-Wide Support",
      subtitle: "Virtual Outlook Meetings & In-Person",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Trusted Advisors
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Financially Up
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Specialist small business tax accountants providing reliable return
            preparation for Australian sole traders, contractors and
            freelancers.
          </p>
        </div>

        {/* 2 Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Card 1: Statutory Credentials */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <CheckCircleOutlined />
                <span>Registered Tax Agent Credentials</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                {company?.legalName || "Financially Up Pty Ltd"} is a registered
                tax agent, Tax Agent Number 26242127. Bookings are available
                online or by phone, with online and in-person meetings for sole
                traders across Australia.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 flex items-center justify-between">
              <span>ABN: {company?.abn || "84 659 717 263"}</span>
              <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                TPB Registered Agent
              </span>
            </div>
          </div>

          {/* Card 2: Professional Standards & Compliance Notice */}
          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <InfoCircleOutlined />
                <span>Statutory Compliance Notice</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Our work reflects the records provided and applicable Australian
                tax rules. We do not guarantee a deduction, refund or tax
                saving.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400 flex items-center gap-2">
              <EnvironmentOutlined className="text-emerald-600 dark:text-emerald-400" />
              <span>
                {company?.address ||
                  "Level 5, 100 Walker St, North Sydney NSW 2060, Australia"}
              </span>
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
        <div className="rounded-2xl bg-slate-50 dark:bg-zinc-950 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-4 shadow-xs">
          <div className="text-center sm:text-left">
            <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-1">
              Ready to Prepare Your Sole Trader Return?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 font-normal">
              Speak with our small business accounting team to review your
              invoices, expenses and lodgement timeline.
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
                iconPlacement="end"
                className="font-bold rounded-xl bg-brand-primary hover:bg-brand-primary-dark border-none h-11 px-6"
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
