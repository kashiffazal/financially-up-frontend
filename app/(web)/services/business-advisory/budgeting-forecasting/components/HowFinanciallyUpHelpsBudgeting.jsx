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
  CalendarOutlined,
  SyncOutlined,
  ExperimentOutlined,
  BarChartOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * HowFinanciallyUpHelpsBudgeting Component
 * =======================================
 * Sections 8 & 9: How Financially Up Can Help & Why Choose Financially Up.
 * Source: 12th Pillar Business Advisory.docx (Page 3: Budgeting & Forecasting)
 *
 * Implements 100% complete, verbatim SEO text detailing our 4 core planning models,
 * regulatory boundaries, registered credentials, and dynamic company contacts.
 */
export default function HowFinanciallyUpHelpsBudgeting() {
  const company = useCompany();

  const deliverables = [
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Annual Business Budgets",
      desc: "Comprehensive 12-month financial blueprints establishing revenue targets, margins, and expense limits.",
    },
    {
      icon: <SyncOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Rolling Dynamic Forecasts",
      desc: "Continually refreshed 3-to-12 month models updating forward expectations as actual results unfold.",
    },
    {
      icon: <ExperimentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Scenario & Stress Models",
      desc: "Testing sensitivity to pricing shifts, headcount expansion, customer churn, and major capital outlays.",
    },
    {
      icon: <BarChartOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "Budget-Versus-Actual Reviews",
      desc: "Decision-focused monthly variance analysis highlighting exactly where performance diverges from plan.",
    },
  ];

  const credentials = [
    {
      icon: (
        <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Registered Tax Agent",
      subtitle: "10+ Years Practice Experience",
    },
    {
      icon: (
        <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
      title: "CPA & IPA Specialists",
      subtitle: "Qualified Commercial Advisors",
    },
    {
      icon: (
        <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Australia-Wide Support",
      subtitle: "Online & In-Person Appointments",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Advisory Partnership &amp; Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How Financially Up Can Help
          </h2>
        </div>

        {/* 2 Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full mb-12">
          {/* Paragraph 1: Collaborative Modeling */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 mb-4">
                <CheckCircleOutlined />
                <span>Structured Financial Planning</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                Financially Up can help build annual budgets, rolling forecasts,
                scenario models and budget-versus-actual reporting. We work with
                the business owner to identify key assumptions, connect the
                model to available accounting data and make the output useful
                for ongoing decisions.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Connecting financial forecasts directly to live business software.
            </div>
          </div>

          {/* Paragraph 2: Professional Scope Notice */}
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-700 dark:text-teal-400 mb-4">
                <CheckCircleOutlined />
                <span>Advisory Boundaries &amp; Governance</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                The service is financial planning and business advisory support.
                It does not guarantee that forecast results will occur, and it
                does not replace legal advice, lending decisions or regulated
                financial product advice where those matters arise.
              </p>
            </div>
            <div className="mt-5 pt-4 border-t border-slate-200 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
              Transparent, compliance-aligned commercial advisory.
            </div>
          </div>
        </div>

        {/* 4 Deliverable Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {deliverables.map((deliv, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                {deliv.icon}
              </div>
              <div className="text-xs font-bold uppercase text-emerald-700 dark:text-emerald-400 mb-1">
                Capability 0{idx + 1}
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                {deliv.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                {deliv.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Section Header: Why Choose Financially Up */}
        <div className="text-center max-w-3xl mx-auto mb-8">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Accreditation &amp; Expertise
          </Tag>
          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
            Why Choose Financially Up?
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up is a registered tax agent with more than 10 years of
            experience across accounting, taxation, bookkeeping and business
            advisory. Our team includes CPA and IPA professionals, and we
            support businesses across Australia through online and in-person
            appointments. This allows budgeting and forecasting to stay
            connected with the accounting data and tax obligations that affect
            the business in practice.
          </p>
        </div>

        {/* 3 Credential Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-12">
          {credentials.map((cred, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mx-auto mb-3">
                {cred.icon}
              </div>
              <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                {cred.title}
              </h3>
              <p className="text-xs text-slate-500 dark:text-zinc-400 font-medium m-0">
                {cred.subtitle}
              </p>
            </div>
          ))}
        </div>

        {/* Action Row */}
        <div className="text-center flex flex-wrap items-center justify-center gap-4">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="rounded-xl font-bold px-7 h-12 shadow-md shadow-brand-primary/20"
            >
              Book an Appointment
            </Button>
          </Link>

          {company?.phone && (
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
              <Button
                size="large"
                icon={<PhoneOutlined />}
                className="rounded-xl font-bold px-6 h-12 bg-white dark:bg-white/10 text-slate-800 dark:text-white border-slate-200 dark:border-white/20"
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
