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
  ApartmentOutlined,
  PhoneOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpCorporateTrustee Component
 * ===============================================
 * Section: Why choose Financially Up?
 * Verbatim text from Page 5 of client docx (8th Pillar Trust Services.docx).
 * Features registered tax agent credentials, CPA/IPA team, Australia-wide delivery,
 * and unified yet strictly separated trust & corporate trustee accounting.
 */
export default function WhyChooseFinanciallyUpCorporateTrustee() {
  const company = useCompany();

  const advantages = [
    {
      icon: <SafetyCertificateOutlined className="text-xl text-brand-emerald" />,
      title: "Registered Tax Agent #26234055",
      desc: "Fully certified by the Tax Practitioners Board, providing official lodgement authority, safe harbour protections, and ATO portal coordination.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Professionals",
      desc: "More than 10 years of experience across accounting, taxation, bookkeeping, trust administration and business advisory services.",
    },
    {
      icon: <GlobalOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide Support",
      desc: "Seamless 100% online video appointments across all states, plus in-person consultations by arrangement at our offices.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Unified Yet Separated Structure",
      desc: "We look at the trust and trustee company together while keeping their separate accounting, tax and corporate obligations clear.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
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
            {company.legalName || "Financially Up"} is a registered tax agent with more than 10 years of experience.
            Our team includes CPA and IPA professionals and supports clients Australia-wide through online and in-person
            appointments. We can look at the trust and the trustee company together while keeping their separate
            accounting, tax and corporate obligations clear.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {advantages.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
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

        {/* Contact Action Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="space-y-2 max-w-2xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-brand-emerald" />
              Speak with a Corporate Trustee Specialist
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Get expert guidance on trustee company compliance, annual review requirements, and trust bookkeeping.
              Call us at{" "}
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
              or book online.
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
