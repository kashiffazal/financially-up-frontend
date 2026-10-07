"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  FileTextOutlined,
  SearchOutlined,
  CommentOutlined,
  SendOutlined,
  CheckCircleOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsProperty Component
 * =======================================
 * Section 10 & 11: How Financially Up Can Help & 5-Step Process.
 * Features 100% complete, verbatim content from Page 5 of the client document.
 */
export default function HowFinanciallyUpHelpsProperty() {
  const company = useCompany();

  const servicesIncluded = [
    "Reviewing rental income and expense records",
    "Preparing rental property schedules for individual tax returns",
    "Reviewing loan use, interest and apportionment issues",
    "Considering repairs, capital works and depreciating assets",
    "Reviewing private use, ownership and rental-availability matters",
    "Assisting investors with one or multiple properties",
    "Reviewing relevant CGT information when a property is sold",
    "Explaining the tax treatment before lodgement",
  ];

  const processSteps = [
    {
      num: "01",
      icon: <CalendarOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Book an Appointment",
      description:
        "Book through the website or arrange an appointment by phone. Online and in-person meetings are available.",
    },
    {
      num: "02",
      icon: <FileTextOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Provide Your Records",
      description:
        "Supply the relevant property manager statements, invoices, loan records, settlement documents and other available information.",
    },
    {
      num: "03",
      icon: <SearchOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Information Review",
      description:
        "Financially Up reviews the property’s ownership, rental period, income, expenses, loan use and significant changes.",
    },
    {
      num: "04",
      icon: <CommentOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Preparation and Discussion",
      description:
        "We prepare the rental property information for your return and discuss matters requiring clarification or separate advice.",
    },
    {
      num: "05",
      icon: <SendOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
      title: "Review and Lodgement",
      description:
        "You review the return and the relevant tax treatment before lodgement is completed where authorized.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Professional Practice &amp; Process
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company?.legalName || "Financially Up Pty Ltd"} is a registered tax agent, registration number {company?.taxAgentNumber || "26242127"}. We provide rental property tax assistance to clients Australia-wide.
          </p>
        </div>

        {/* Services Included Grid */}
        <div className="bg-white dark:bg-zinc-900 rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-16">
          <div className="max-w-3xl mb-8">
            <span className="text-2xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400 block mb-1">
              Scope of Service
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Our Property Investor Services Can Include
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {servicesIncluded.map((service, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-100 dark:border-zinc-700/50 text-xs sm:text-sm text-slate-700 dark:text-zinc-200 font-medium"
              >
                <CheckCircleOutlined className="text-emerald-500 mt-0.5 shrink-0 text-base" />
                <span>{service}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-slate-500 dark:text-zinc-400">
            <p className="m-0 max-w-2xl leading-relaxed">
              Tax planning or advisory work is not automatically included in standard tax-return preparation. Where additional planning or advisory services are relevant, the scope and fees are confirmed separately.
            </p>
            <Link
              href="/services/individual-tax"
              className="text-brand-primary dark:text-emerald-400 font-bold hover:underline inline-flex items-center gap-1 shrink-0"
            >
              Broader Individual Tax Services <ArrowRightOutlined className="text-xs" />
            </Link>
          </div>
        </div>

        {/* 5-Step Process Section */}
        <div>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Client Journey
            </Tag>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              How Our Investment Property Tax Service Works
            </h3>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A transparent, streamlined 5-step workflow designed to take the stress out of preparing your property tax return.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-white dark:bg-zinc-900 rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-brand-primary/40 dark:hover:border-emerald-500/40 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-slate-200 dark:text-zinc-700 font-mono">
                      {step.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center">
                      {step.icon}
                    </div>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-100 dark:border-zinc-800 text-2xs text-slate-400 dark:text-zinc-500 font-medium">
                  Step {idx + 1} of 5
                </div>
              </div>
            ))}
          </div>

          {/* Quick Contact Ribbon */}
          <div className="mt-12 text-center flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-slate-600 dark:text-zinc-400">
            <span>Prefer to arrange by phone?</span>
            <a
              href={`tel:${company.phone?.replace(/\s/g, "")}`}
              className="font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1.5"
            >
              <PhoneOutlined /> {company.phone}
            </a>
            <span className="text-slate-300 dark:text-zinc-700 hidden sm:inline">•</span>
            <span>Registered Tax Agent #{company?.taxAgentNumber || "26242127"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
