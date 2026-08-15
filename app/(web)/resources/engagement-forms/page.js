"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  UserOutlined,
  BankOutlined,
  CustomerServiceOutlined,
  CheckCircleFilled,
  PhoneOutlined,
} from "@ant-design/icons";
import PageHero from "@/components/website/PageHero";

/**
 * 2 Engagement Forms Data Definition
 */
const ENGAGEMENT_FORMS = [
  {
    num: "01",
    tag: "INDIVIDUAL TAX ONBOARDING",
    title: "Individual Client Engagement Form",
    desc: "Complete your 10-step online engagement onboarding for individual tax returns, investment property deductions, and ATO representation.",
    href: "/resources/engagement-forms/individual-engagement-form",
    icon: <UserOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
  },
  {
    num: "02",
    tag: "CORPORATE & TRUST ONBOARDING",
    title: "Entity Client Engagement Form",
    desc: "Onboard your Company, Trust, Partnership, or SMSF for annual financial statements, tax return lodgements, and BAS compliance.",
    href: "/resources/engagement-forms/entity-engagements-form",
    icon: <BankOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
  },
];

/**
 * Standard Engagement Card Component
 */
function EngagementCard({ form }) {
  return (
    <Link
      href={form.href}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-brand-primary/60 dark:hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 !no-underline"
    >
      {/* Top Header Row */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-brand-primary-soft dark:bg-emerald-950/70 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-primary/10 transition-all duration-300 shadow-xs">
          {form.icon}
        </div>
        <span className="text-2xl sm:text-3xl font-black text-slate-200 dark:text-zinc-700 font-mono tracking-tight select-none">
          {form.num}
        </span>
      </div>

      {/* Middle Content */}
      <div className="space-y-2.5 flex-1">
        <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-brand-primary dark:text-emerald-400">
          {form.tag}
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-zinc-50 leading-snug group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors duration-200">
          {form.title}
        </h3>
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-zinc-400 leading-relaxed pt-1">
          {form.desc}
        </p>
      </div>

      {/* Bottom Action */}
      <div className="pt-6 mt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-extrabold text-brand-primary dark:text-emerald-400">
        <span className="group-hover:underline">Start Engagement Form</span>
        <div className="w-7 h-7 rounded-full bg-brand-primary-soft dark:bg-zinc-800 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
          <ArrowRightOutlined className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

/**
 * 1-Column Featured Onboarding Advisory Card (Placed in Column 3)
 */
function FeaturedOnboardingCard() {
  return (
    <div className="relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-gradient-to-br from-[#008043] via-[#006e39] to-[#004d28] dark:from-emerald-950 dark:to-zinc-900 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Subtle Glow Circle */}
      <div className="absolute -top-20 -right-20 w-48 h-48 rounded-full bg-emerald-400/20 blur-2xl pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between gap-4 mb-4">
        <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white text-xl">
          <CustomerServiceOutlined />
        </div>
        <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-200">
          Advisory
        </span>
      </div>

      {/* Middle Content */}
      <div className="relative z-10 space-y-2.5 flex-1">
        <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-emerald-200">
          New Client Assistance
        </span>
        <h3 className="text-lg sm:text-xl font-extrabold text-white leading-snug">
          Need Help Choosing the Right Engagement?
        </h3>
        <p className="text-xs text-emerald-100/90 leading-relaxed pt-1">
          Speak with our registered tax agents to determine whether you need an individual or entity engagement structure.
        </p>

        <div className="space-y-1.5 pt-2 text-xs font-semibold text-emerald-100">
          <div className="flex items-center gap-1.5">
            <CheckCircleFilled className="text-emerald-300 text-xs" />
            <span>100% Online ATO Onboarding</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircleFilled className="text-emerald-300 text-xs" />
            <span>Seamless Tax Agent Transfer</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA Row */}
      <div className="relative z-10 pt-5 mt-4 border-t border-white/20 flex items-center justify-between gap-2">
        <Link href="/book-an-appointment" className="!no-underline">
          <Button
            size="middle"
            className="h-9 px-4 rounded-xl font-extrabold text-xs bg-white text-brand-primary hover:bg-slate-50 border-none shadow-md"
          >
            Book Consultation <ArrowRightOutlined className="text-[10px]" />
          </Button>
        </Link>

        <a
          href="tel:1300328316"
          className="text-xs font-bold text-emerald-100 hover:text-white flex items-center gap-1 !no-underline"
        >
          <PhoneOutlined className="text-xs" /> 1300 328 316
        </a>
      </div>
    </div>
  );
}

/**
 * Client Engagement Forms Main Hub Page
 */
export default function EngagementFormsHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources/engagement-forms" },
    { label: "Engagement Forms" },
  ];

  return (
    <div className="w-full overflow-hidden bg-slate-50/60 dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="ATO Registered Tax Agent Services"
        title="Client Engagement Forms"
        subtitle="Initiate and authorize your professional accounting, tax return, and advisory engagements online with Financially Up Registered Tax Agents."
      />

      {/* 2. Main 3-Column Grid in Single Row */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Col 1: Card 01 Individual Engagement */}
            <EngagementCard form={ENGAGEMENT_FORMS[0]} />

            {/* Col 2: Card 02 Entity Engagement */}
            <EngagementCard form={ENGAGEMENT_FORMS[1]} />

            {/* Col 3: Featured Onboarding Advisory Card */}
            <FeaturedOnboardingCard />
          </div>
        </div>
      </section>
    </div>
  );
}
