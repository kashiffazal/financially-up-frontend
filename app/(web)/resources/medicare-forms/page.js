"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  MedicineBoxOutlined,
  CustomerServiceOutlined,
  CheckCircleFilled,
  PhoneOutlined,
} from "@ant-design/icons";
import PageHero from "@/components/website/PageHero";

/**
 * Medicare Forms Data Definition
 */
const MEDICARE_FORMS = [
  {
    num: "01",
    tag: "LEVY REDUCTION & EXEMPTION",
    title: "Medicare Exemption Application Form",
    desc: "Apply for Medicare Levy Exemption certificate, reduction claims, and tax offset determinations with registered ATO tax agents.",
    href: "/resources/medicare-forms/medicare-exemption-form",
    icon: <MedicineBoxOutlined className="text-xl text-brand-primary dark:text-emerald-400" />,
  },
];

/**
 * Standard Medicare Card Component
 */
function MedicareCard({ form }) {
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
        <span className="group-hover:underline">Start Exemption Application</span>
        <div className="w-7 h-7 rounded-full bg-brand-primary-soft dark:bg-zinc-800 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
          <ArrowRightOutlined className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

/**
 * 2-Column Featured Medicare Exemption Advisory Card
 */
function FeaturedMedicareAdvisoryCard() {
  return (
    <div className="md:col-span-2 lg:col-span-2 relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#008043] via-[#006e39] to-[#004d28] dark:from-emerald-950 dark:to-zinc-900 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Glow Circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white text-xl">
            <CustomerServiceOutlined />
          </div>
          <div>
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-emerald-200">
              Medicare Levy Surcharge Guidance
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Are You Eligible for a Medicare Levy Exemption?
            </h3>
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="relative z-10 space-y-4 my-2">
        <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
          Temporary visa holders (including 482, 485, 500), foreign residents, and non-Medicare cardholders may be fully exempt from paying the 2% Medicare Levy. Speak with our registered tax agents to calculate your tax savings and prepare your official Medicare Exemption Statement.
        </p>

        {/* Guarantees */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-emerald-100 pt-1">
          <div className="flex items-center gap-1.5">
            <CheckCircleFilled className="text-emerald-300 text-xs" />
            <span>Save Up To 2% of Taxable Income</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircleFilled className="text-emerald-300 text-xs" />
            <span>Category 1, 2 & 3 Support</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircleFilled className="text-emerald-300 text-xs" />
            <span>Official ATO Tax Return Lodgement</span>
          </div>
        </div>
      </div>

      {/* CTA Row */}
      <div className="relative z-10 pt-5 mt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
        <Link href="/book-an-appointment" className="!no-underline">
          <Button
            size="large"
            className="h-11 px-6 rounded-xl font-extrabold text-xs sm:text-sm bg-white text-brand-primary hover:bg-slate-50 border-none shadow-md hover:scale-105 transition-all duration-200"
          >
            Book Medicare Review <ArrowRightOutlined className="text-xs" />
          </Button>
        </Link>

        <a
          href="tel:1300328316"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-100 hover:text-white transition-colors !no-underline"
        >
          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white text-xs">
            <PhoneOutlined />
          </div>
          <span>Call 1300 328 316</span>
        </a>
      </div>
    </div>
  );
}

/**
 * Medicare Forms Hub Page
 */
export default function MedicareFormsHubPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Resources", href: "/resources/medicare-forms" },
    { label: "Medicare Forms" },
  ];

  return (
    <div className="w-full overflow-hidden bg-slate-50/60 dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      {/* 1. Page Hero */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="ATO & Medicare Levy Services"
        title="Medicare Forms & Exemption Services"
        subtitle="Apply for Medicare Levy Exemption certificates, reductions, and tax surcharge offsets with registered Australian tax agents."
      />

      {/* 2. Main 3-Column Grid */}
      <section className="py-16 sm:py-20">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Card 01: Medicare Exemption */}
            <MedicareCard form={MEDICARE_FORMS[0]} />

            {/* Featured 2-Column Medicare Advisory Card */}
            <FeaturedMedicareAdvisoryCard />
          </div>
        </div>
      </section>
    </div>
  );
}
