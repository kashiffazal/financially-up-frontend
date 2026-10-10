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
  AimOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpBareTrust Component
 * =========================================
 * Section: Why choose Financially Up?
 * Verbatim text from Page 4 of client docx (8th Pillar Trust Services.docx).
 * Highlights 10+ years experience, registered tax agent status, CPA & IPA professionals,
 * and focus on factual ownership alignment over trust labels.
 */
export default function WhyChooseFinanciallyUpBareTrust() {
  const company = useCompany();

  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-brand-emerald" />,
      title: "Registered Tax Agent #26234055",
      desc: "Licensed under the Tax Practitioners Board, ensuring official ATO lodgement authority, safe harbour protections, and agent portal access.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Team",
      desc: "Professional accounting specialists with more than 10 years of experience across accounting, taxation, bookkeeping and business advisory work.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Service",
      desc: "Supporting clients across all states and territories through 100% online video appointments, plus in-person consultations by arrangement.",
    },
    {
      icon: <AimOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Factual Alignment Focus",
      desc: "Our priority is to understand the actual ownership arrangement and keep accounting and tax treatment aligned with the facts rather than relying on trust labels alone.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Trusted Advisors
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why choose Financially Up?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            {company.legalName || "Financially Up"} is a registered tax agent with more than 10 years of experience
            across accounting, taxation, bookkeeping and business advisory work. Our team includes CPA and IPA
            professionals, and we support clients Australia-wide through online and in-person appointments. For bare
            trust matters, our focus is to understand the actual ownership arrangement and keep the accounting and tax
            treatment aligned with the facts rather than relying on the trust label alone.
          </p>
        </div>

        {/* 4 Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Dynamic Action Consultation Callout */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-brand-emerald" />
              Speak with a Bare Trust Specialist Today
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Get clarity on beneficial entitlements, borrowing records, and whether an ATO lodgement exemption applies
              to your holding trust. Contact our team at{" "}
              {company.phone ? (
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  {company.phone}
                </a>
              ) : (
                "our office"
              )}{" "}
              or schedule a consultation online.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0">
            {company.phone && (
              <a
                href={`tel:${company.phone.replace(/\s/g, "")}`}
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
              >
                <PhoneOutlined className="mr-2" />
                {company.phone}
              </a>
            )}
            <Link href="/book-an-appointment" className="w-full sm:w-auto">
              <Button
                type="primary"
                className="brand-btn-primary w-full text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Book an Appointment
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
