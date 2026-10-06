"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  CalendarOutlined,
  CloudUploadOutlined,
  AuditOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * 4 Engagement Steps for Services
 */
const PROCESS_STEPS = [
  {
    step: "01",
    title: "Select Service & Connect",
    subtitle: "Online Booking or Phone Call",
    description:
      "Choose the service you need and book a discovery consult online or by phone. We discuss your circumstances and provide transparent, fixed-fee terms before any work begins.",
    icon: <CalendarOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
  },
  {
    step: "02",
    title: "Secure Document Upload",
    subtitle: "Encrypted Digital Portal",
    description:
      "Share your income statements, records, cloud accounting access, or ATO notices directly through our bank-grade portal without cumbersome paper handling.",
    icon: <CloudUploadOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
  },
  {
    step: "03",
    title: "Expert Analysis & Prep",
    subtitle: "CPA-Led Preparation",
    description:
      "Our registered tax agents meticulously review your documents, calculate deductions, test compliance against current ATO/ASIC rulings, and draft your returns.",
    icon: <AuditOutlined className="text-2xl text-cyan-600 dark:text-cyan-400" />,
  },
  {
    step: "04",
    title: "Electronic Sign-off & Lodge",
    subtitle: "Instant Digital Submission",
    description:
      "Review the finalized figures, approve with one-click digital signing from your phone or computer, and we lodge directly with the ATO or ASIC.",
    icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />,
  },
];

/**
 * ServicesProcessSteps Component
 * ==============================
 * Displays the 4-step engagement roadmap showing clients exactly how easy it is
 * to get started with Financially Up.
 */
export default function ServicesProcessSteps() {
  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/80 transition-colors duration-300 border-t border-slate-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            How We Work
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A Seamless 4-Step Engagement Process
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            Experience stress-free accounting and taxation. We have streamlined every stage
            from onboarding to lodgement for maximum speed, accuracy, and convenience.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/50 transition-all duration-300"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <span className="text-2xl font-black text-brand-primary dark:text-emerald-400 tracking-tight">
                    {step.step}
                  </span>
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-100 dark:border-emerald-800/50 flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-1">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-emerald-700 dark:text-emerald-400 mb-3">
                  {step.subtitle}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              {/* Step indicator footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                Stage {idx + 1} of 4
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Row using Ant Design Button */}
        <div className="mt-12 text-center">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="rounded-xl font-semibold text-sm h-12 px-6 shadow-md shadow-brand-primary/20 hover:scale-[1.02] transition-transform"
            >
              Start Your Engagement Today
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
