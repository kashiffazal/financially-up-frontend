"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  CalendarOutlined,
  GlobalOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhyChooseFinanciallyUpProperty Component
 * ========================================
 * Section: "How Financially Up can help"
 * Implements the exact H2 and verbatim paragraphs from lines 52–54 of
 * '10th Pillar Property Tax.docx'.
 *
 * Demonstrates firm credentials, CPA/IPA accreditation, registered tax agent status (#26234055),
 * and 10+ years of property tax experience. Consumes dynamic company variables via `useCompany()`.
 *
 * Background: Clean White with Dark Mode compatibility.
 */
export default function WhyChooseFinanciallyUpProperty() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      description:
        "Financially Up is officially registered with the Tax Practitioners Board (TPB #26234055), legally authorised to lodge property returns, development BAS, and represent clients before the ATO.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "CPA & IPA Qualified Team",
      description:
        "Our team includes accredited members of CPA Australia and the Institute of Public Accountants (IPA), combining rigorous technical standards with practical property tax insights.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "10+ Years of Experience",
      description:
        "Over a decade supporting property investors, landlords, developers, and business entities with property-related accounting, CGT calculations, and GST compliance.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Australia-Wide & In-Person Appointments",
      description:
        "We support property owners across all states and territories through secure online appointments, as well as offering in-person consultations at our offices.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim H2 and Lead Paragraphs from Document */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials & Advisory Scope
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            How Financially Up can help
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            Financially Up can review the property activity, identify the relevant accounting and tax issues, prepare or reconcile records, assist with returns and reporting within scope, and explain where further planning or specialist legal or financial advice may be needed.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            We are a registered tax agent with more than 10 years of experience, and our team includes CPA and IPA professionals. We support clients Australia-wide through online appointments and also offer in-person appointments.
          </p>
        </div>

        {/* 4 Firm Credentials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {firmStrengths.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-5 hover:border-teal-500/40 dark:hover:border-teal-500/40 hover:shadow-md transition-all duration-200"
            >
              <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 flex items-center justify-center shrink-0 shadow-2xs">
                {item.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0 tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Clarity Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Property Tax Consultation"
          tagIcon="safety"
          title={`Partner with Qualified Australian Property Tax Accountants`}
          description="Whether you own a single rental property, manage an extensive investment portfolio, or are undertaking a property development project, book an appointment with Financially Up."
          primaryButton={{
            text: "Book an Appointment",
            href: "/book-an-appointment",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
