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
  FileTextOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhatToBringFirstMeetingSuccession Component
 * ============================================
 * Section 6: What should you bring to the first meeting? & Accreditation
 * Source: 12th Pillar Business Advisory.docx (Lines 529-531)
 *
 * Implements 100% complete, verbatim SEO text detailing preparation records,
 * successor identification details, 10+ years experience, CPA & IPA standing,
 * online and in-person sessions Australia-wide, and dynamic useCompany hook.
 */
export default function WhatToBringFirstMeetingSuccession() {
  const company = useCompany();

  const preparationChecklist = [
    "Most recent statutory financial statements & management accounts",
    "Details of existing legal ownership structure & share registers",
    "Any current shareholder, unitholder, or partnership agreements",
    "Clear outline of all business assets, liabilities, and debt commitments",
    "Your preferred transition timeframe & targeted retirement date",
    "Successor details: current operational role and what has been discussed to date",
  ];

  const credentials = [
    {
      icon: (
        <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Objective Accounting Grounding",
      subtitle: "Aligned Strictly to Owner Goals",
    },
    {
      icon: (
        <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
      title: "CPA & IPA Specialists",
      subtitle: "10+ Years Dedicated Commercial Advisory",
    },
    {
      icon: (
        <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Australia-Wide Service",
      subtitle: "Online & In-Person Appointments",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Preparation &amp; Accreditation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Should You Bring to the First Meeting?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Bring your most recent financial statements, details of the
            ownership structure, any existing shareholder or partnership
            arrangements, an outline of the assets and debts, and your preferred
            timeframe. If a potential successor has already been identified,
            explain their role and what has been discussed. We can identify
            missing information and agree the next practical step without
            requiring every decision to be made at once.
          </p>
        </div>

        {/* 6 Preparation Items Checklist */}
        <div className="mb-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {preparationChecklist.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3 p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
              >
                <FileTextOutlined className="text-emerald-600 dark:text-emerald-400 mt-1 shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 font-medium leading-relaxed">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Narrative Box: 10+ Years Experience & Legal Collaboration */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 mb-12 text-center max-w-4xl mx-auto">
          <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
            Financially Up Pty Ltd has more than 10 years of experience and a
            team including CPA and IPA members. We provide online and in-person
            appointment options across Australia. We keep the accounting work
            grounded in the owner&apos;s objectives and acknowledge when a
            transition also needs legal or other specialist input.
          </p>
        </div>

        {/* 3 Credential Badges Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full mb-12">
          {credentials.map((cred, i) => (
            <div
              key={i}
              className="text-center p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs"
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

        {/* Action Buttons */}
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
