"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  CalendarOutlined,
  GlobalOutlined,
  AuditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * WhyChooseFinanciallyUp Component
 * ================================
 * Section 8: How Financially Up Approaches Tax Planning & Why Choose Us.
 *
 * Demonstrates firm credentials, CPA/IPA accreditation, registered tax agent status (#26234055),
 * 10+ years of Australian tax experience, and transparent scoping process.
 * Consumes dynamic company contact information via `useCompany()`.
 */
export default function WhyChooseFinanciallyUp() {
  const company = useCompany();

  const firmStrengths = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
      title: "Registered Tax Agent & TPB Regulated",
      description:
        "Financially Up is officially registered with the Tax Practitioners Board (TPB #26234055), ensuring all advice adheres strictly to Australian taxation law and ethical standards.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA & IPA Qualified Advisory Team",
      description:
        "Our team includes fully accredited members of CPA Australia and the Institute of Public Accountants (IPA), delivering rigorous technical precision across business and individual tax matters.",
    },
    {
      icon: <GlobalOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "10+ Years of Australian Tax Advisory",
      description:
        "Over a decade guiding Australian businesses and private wealth through economic cycles, regulatory reforms, ATO rulings, capital investments, and group restructures.",
    },
    {
      icon: <CalendarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />,
      title: "Nationwide Online & In-Person Consultations",
      description:
        "We support individuals and corporate clients Australia-wide via secure online video consultations and screen-sharing, alongside in-person meetings at our North Sydney office.",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-3">
          <Tag color="green" className="brand-section-tag">
            Firm Credentials
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Why Choose Financially Up?
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            {company?.legalName || "Financially Up Pty Ltd"} is an Australian accounting, tax, bookkeeping and business advisory firm. We combine registered tax agent status with seasoned commercial judgment to deliver clear, forward-looking advice in plain language.
          </p>
        </div>

        {/* Advisory Process Narrative Box */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 shadow-sm mb-14">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 text-xs font-semibold">
              <AuditOutlined />
              <span>Transparent Advisory Approach</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              How We Approach Tax Planning
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              We start by identifying the specific transaction, concern, or timing point that requires attention. We review the relevant facts and records, clarify which matters fall within tax planning, and explain practical tax implications in plain language.
            </p>
            <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
              Our tax planning support sits alongside tax return preparation, accounting, and bookkeeping, but those services are not interchangeable. Planning informs future decisions; compliance records historical outcomes. Where advice is separately scoped, the scope and fee are agreed before detailed advisory work begins.
            </p>
          </div>
        </div>

        {/* 4 Firm Strengths Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-14">
          {firmStrengths.map((item, idx) => (
            <div
              key={idx}
              className="p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 flex items-start gap-5 hover:border-brand-primary/40 dark:hover:border-emerald-600/40 hover:shadow-md transition-all duration-200"
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
          tag="Advisory Clarity"
          tagIcon="safety"
          title="Discuss Your Tax Planning Position"
          description="Book a consultation with our qualified tax agents to review your business or personal tax position, upcoming transactions, and available records. We'll identify the appropriate tax planning scope and next practical steps."
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
