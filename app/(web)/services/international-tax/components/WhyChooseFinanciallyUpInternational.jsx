"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  VideoCameraOutlined,
  EnvironmentOutlined,
  CommentOutlined,
  AuditOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhyChooseFinanciallyUpInternational Component
 * ============================================
 * Section 10: Why Choose Financially Up?
 *
 * Implements the exact copy from Section 1 of the SEO document:
 * - Registered tax agent status, CPA/IPA accredited members, 10+ years experience
 * - The 5 core value pillars from the document
 * - Dynamic company context via `useCompany()`
 *
 * Background: Lite Brand Gradient
 */
export default function WhyChooseFinanciallyUpInternational() {
  const company = useCompany();

  /**
   * The 5 Core Value Pillars (Exact from document)
   */
  const valuePillars = [
    {
      icon: <GlobalOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Australia-wide service",
      description:
        "Comprehensive cross-border taxation and accounting services accessible to individuals, expatriates, and businesses across all Australian states and territories.",
    },
    {
      icon: <VideoCameraOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Online appointments",
      description:
        "Secure virtual consultations via video conference, providing seamless tax advice no matter your international time zone or location.",
    },
    {
      icon: <EnvironmentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "In-person appointments where available",
      description:
        "Face-to-face meetings available at our primary office in North Sydney for clients seeking in-person consultations.",
    },
    {
      icon: <CommentOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Practical explanations of complex tax matters",
      description:
        "Demystifying cross-border double tax treaties, residency statutory tests, and foreign tax credits into clear, actionable advice.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Assistance tailored to the actual facts of your circumstances",
      description:
        "Personalised reviews based strictly on the genuine facts of your cross-border connection, residency timing, and foreign asset portfolio.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Why Choose Financially Up?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            {company?.legalName || "Financially Up Pty Ltd"} is a registered tax agent providing taxation, accounting and advisory services to clients across Australia. Our team includes CPA and IPA members and brings more than 10 years of experience across taxation and accounting matters.
          </p>
        </div>

        {/* 5 Value Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {valuePillars.map((item, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between ${
                idx === 4 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed m-0 font-normal">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="International Tax Advisory Consultation"
          tagIcon="safety"
          title="Discuss Your Cross-Border Circumstances With Our Team"
          description="Whether you have moved to Australia, are earning income overseas, or have paid tax abroad, book an appointment to discuss your international tax obligations."
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
