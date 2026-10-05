"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  MessageOutlined,
  ProfileOutlined,
  CheckSquareOutlined,
  FileSearchOutlined,
  GlobalOutlined,
  ScheduleOutlined,
  SafetyCertificateOutlined,
  EnvironmentOutlined,
  PhoneOutlined,
  MailOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import WhyChooseSection from "@/components/website/WhyChooseSection";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhatToExpect Component
 * ======================
 * Section 7: What you can expect.
 *
 * Employs the mutual, reusable WhyChooseSection component from `@/components/website/WhyChooseSection`
 * configured with 3 columns for Financially Up's 6 core service commitments.
 *
 * Positioned underneath is the authoritative Australian TPB Registered Practice & Office verification
 * banner which dynamically consumes centralized variables via `useCompany()` from `@/context/SettingsContext`.
 */
export default function WhatToExpect() {
  const company = useCompany();

  /**
   * The 6 Core Practice Commitments
   * Formatted for WhyChooseSection consumption.
   */
  const commitments = [
    {
      step: "01",
      badge: "Clarity & Advisory",
      title: "Plain English Tax Advice",
      desc: "Tax legislation can be dense and intimidating. We translate complex deduction rules, capital gains laws, and ATO determinations into straightforward, actionable guidance you can understand and trust.",
      icon: (
        <MessageOutlined className="text-2xl text-[var(--brand-primary)] dark:text-emerald-400" />
      ),
    },
    {
      step: "02",
      badge: "Individual Review",
      title: "Tailored Circumstance Review",
      desc: "We never take a cookie-cutter approach. Our certified CPA accountants meticulously examine your individual records, employment conditions, investments, and work patterns to ensure all lawful deductions are optimized.",
      icon: (
        <ProfileOutlined className="text-2xl text-[var(--brand-primary)] dark:text-emerald-400" />
      ),
    },
    {
      step: "03",
      badge: "Governance & Control",
      title: "Client Lodgement Approval",
      desc: "You retain full visibility and authority over your tax affairs. Before submitting anything to the ATO, we provide an itemized draft return with every calculation clearly explained for your review and written approval.",
      icon: (
        <CheckSquareOutlined className="text-2xl text-[var(--brand-primary)] dark:text-emerald-400" />
      ),
    },
    {
      step: "04",
      badge: "Scope Transparency",
      title: "Upfront Scope & Fee Certainty",
      desc: "No surprises or hidden fees. If your circumstances involve separate schedules, cross-border issues, or require an advisory engagement, we clearly identify the scope and exact pricing before commencing.",
      icon: (
        <FileSearchOutlined className="text-2xl text-[var(--brand-primary)] dark:text-emerald-400" />
      ),
    },
    {
      step: "05",
      badge: "National Reach",
      title: "Australia-Wide Online Service",
      desc: "We assist individuals, professionals, and expats across every Australian state and territory through our secure digital portal, encrypted document sharing, and remote appointment infrastructure.",
      icon: (
        <GlobalOutlined className="text-2xl text-[var(--brand-primary)] dark:text-emerald-400" />
      ),
    },
    {
      step: "06",
      badge: "Consultation Options",
      title: "Flexible Appointment Formats",
      desc: "Consult with your tax accountant in the way that suits your schedule. Choose from high-definition online video meetings, structured phone consultations, or in-person sessions at our North Sydney office.",
      icon: (
        <ScheduleOutlined className="text-2xl text-[var(--brand-primary)] dark:text-emerald-400" />
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-slate-50/70 to-slate-100/50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors duration-300 relative overflow-hidden">
      {/* Ambient background decoration */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[var(--brand-primary)]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[var(--brand-border-hover)]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* 1. Practice Commitments Grid via Mutual WhyChooseSection Component */}
        <WhyChooseSection
          sectionId="what-to-expect"
          tag="Practice Commitments"
          title="What You Can Expect"
          subtitle="We operate with complete clarity, strict compliance with the Tax Agent Services Act 2009, and an unwavering commitment to accurate, defensible tax lodgements."
          items={commitments}
          columns={3}
          ctaText={null}
          ctaHref={null}
          className="p-0 bg-transparent dark:bg-transparent border-none"
          containerClassName="w-full !px-0"
        />

        {/* 2. Official Australian TPB Registration & Practice Verification Card */}
        <div className="mt-12 sm:mt-14 p-7 sm:p-9 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/90 dark:border-zinc-800 shadow-lg relative overflow-hidden">
          {/* Subtle Ambient Background Wash */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-[var(--brand-primary)]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            {/* Left: Practice Credentials & Compliance Overview */}
            <div className="space-y-3 max-w-3xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--brand-primary-soft)] dark:bg-emerald-950/60 text-[var(--brand-primary)] dark:text-emerald-400 text-xs font-bold uppercase tracking-wider border border-[var(--brand-primary)]/20">
                <SafetyCertificateOutlined className="text-sm" />
                <span>Verified Professional Standing & Registration</span>
              </div>

              <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight m-0">
                {company.legalName || "Financially Up Pty Ltd"} — Registered
                Australian Tax Practice
              </h3>

              <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-300 flex flex-wrap items-center gap-x-3 gap-y-1">
                <span>
                  ABN:{" "}
                  <strong className="text-slate-900 dark:text-zinc-100">
                    {company.abn || "84 659 717 263"}
                  </strong>
                </span>
                <span className="text-slate-300 dark:text-zinc-700">•</span>
                <span>Registered Tax Agent</span>
                <span className="text-slate-300 dark:text-zinc-700">•</span>
                <span>Tax Practitioners Board (TPB) Regulated</span>
              </div>

              <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 m-0 leading-relaxed font-normal">
                Operating in strict adherence to the Tax Agent Services Act 2009
                (TASA) and the TPB Code of Professional Conduct. All advice,
                reviews, and ATO lodgements are prepared by certified
                professionals backed by comprehensive professional indemnity
                coverage.
              </p>
            </div>

            {/* Right: Contact Chips & Booking Action */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full lg:w-auto shrink-0">
              {company.address && (
                <div className="flex items-center gap-3 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/60 text-xs font-medium text-slate-700 dark:text-zinc-300">
                  <div className="w-8 h-8 rounded-lg bg-[var(--brand-primary-soft)] dark:bg-emerald-950/60 text-[var(--brand-primary)] dark:text-emerald-400 flex items-center justify-center shrink-0">
                    <EnvironmentOutlined className="text-sm" />
                  </div>
                  <span className="truncate max-w-[260px] sm:max-w-xs">
                    {company.address}
                  </span>
                </div>
              )}

              <div className="flex flex-wrap sm:flex-nowrap gap-3">
                {company.phone && (
                  <a
                    href={`tel:${company.phone.replace(/\s/g, "")}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/60 text-xs font-bold text-slate-800 dark:text-zinc-200 hover:text-[var(--brand-primary)] dark:hover:text-emerald-400 hover:border-[var(--brand-border-hover)] transition-all"
                  >
                    <PhoneOutlined className="text-[var(--brand-primary)] dark:text-emerald-400 text-sm" />
                    <span>{company.phone}</span>
                  </a>
                )}

                {company.email && (
                  <a
                    href={`mailto:${company.email}`}
                    className="flex-1 inline-flex items-center justify-center gap-2 p-3 rounded-xl bg-slate-50 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/60 text-xs font-bold text-slate-800 dark:text-zinc-200 hover:text-[var(--brand-primary)] dark:hover:text-emerald-400 hover:border-[var(--brand-border-hover)] transition-all"
                  >
                    <MailOutlined className="text-[var(--brand-primary)] dark:text-emerald-400 text-sm" />
                    <span>Email Us</span>
                  </a>
                )}
              </div>

              <Link href="/book-an-appointment" className="w-full">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="w-full h-11 rounded-xl font-bold text-xs bg-[var(--brand-primary)] hover:bg-[var(--brand-primary-hover)] border-none shadow-md shadow-[var(--brand-primary)]/20"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
