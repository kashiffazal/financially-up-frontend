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
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpKpi Component
 * ====================================
 * Section 7: Why choose Financially Up?
 * Source: 12th Pillar Business Advisory.docx (Lines 376-377)
 *
 * Implements 100% complete, verbatim SEO text detailing our 10+ years commercial experience,
 * CPA and IPA members, Australia-wide online and in-person appointments, and dynamic useCompany hook.
 */
export default function WhyChooseFinanciallyUpKpi() {
  const company = useCompany();

  const credentials = [
    {
      icon: (
        <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
      title: "Commercial Accounting & Advisory",
      subtitle: "Integrated Financial Intelligence",
    },
    {
      icon: (
        <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
      title: "CPA & IPA Qualified Team",
      subtitle: "10+ Years Dedicated Experience",
    },
    {
      icon: (
        <GlobalOutlined className="text-2xl text-blue-600 dark:text-blue-400" />
      ),
      title: "Australia-Wide Appointments",
      subtitle: "Online & In-Person Sessions",
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
            Accreditation &amp; Practical Value
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Financially Up?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up Pty Ltd brings accounting and business advisory work
            together. Our team includes CPA and IPA members and has more than 10
            years of experience. We offer online and in-person appointments to
            businesses across Australia. We focus on reports that an owner can
            understand and use, with scope and reporting frequency agreed to
            suit the business.
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
