"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  FileProtectOutlined,
  ApartmentOutlined,
  CheckCircleOutlined,
  AuditOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatIsBusinessTaxCompliance Component
 * =====================================
 * Section: What Is Business Tax Compliance?
 * Features 100% complete, verbatim content from Page 8 of client docx.
 * Explains entity-specific obligations, unified compliance, and pre-lodgment checks.
 */
export default function WhatIsBusinessTaxCompliance() {
  const compliancePillars = [
    {
      icon: <ApartmentOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Entity-Specific Requirements",
      desc: "Those obligations differ by entity type and activity. A company has different income-tax reporting from a sole trader; a GST-registered business has BAS requirements; and an employer has PAYG withholding and superannuation obligations.",
    },
    {
      icon: <FileProtectOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Unified Compliance Strategy",
      desc: "A tax compliance accountant can help bring these obligations together, ensuring that BAS filings, payroll declarations, and annual income tax returns are synchronized rather than handled in isolation.",
    },
    {
      icon: <AuditOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Pre-Submission Data Verification",
      desc: "Checking that available accounting information accurately supports all lodgments and proactively identifying complex issues that require separate tax advice before submission.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax Compliance Fundamentals
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Is Business Tax Compliance?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Business tax compliance means identifying and meeting the tax obligations that apply to a business. Those obligations differ by entity type and activity.
          </p>
        </div>

        {/* 2-Column Responsive Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Left Column: Verbatim Editorial Explanation */}
          <div className="lg:col-span-6 space-y-6">
            <div className="bg-slate-50/80 dark:bg-zinc-800/80 p-6 sm:p-8 rounded-2xl border border-slate-200/80 dark:border-zinc-700/80 shadow-sm space-y-4">
              <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2.5">
                <FileProtectOutlined className="text-teal-600 dark:text-teal-400" />
                Coordinated Business Tax Obligations
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Business tax compliance means identifying and meeting the tax obligations that apply to a business. Those obligations differ by entity type and activity. A company has different income-tax reporting from a sole trader; a GST-registered business has BAS requirements; and an employer can have PAYG withholding and superannuation-related obligations in addition to its annual income tax work.
              </p>
              <div className="h-px bg-slate-200 dark:bg-zinc-700 my-2" />
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A tax compliance accountant can help bring these obligations together, check that the available accounting information supports the lodgments and identify issues that need separate tax advice before submission.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  className="brand-btn-primary text-xs sm:text-sm font-semibold rounded-xl"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                >
                  Book Compliance Consultation
                </Button>
              </Link>
              <Link href="/services/business-tax">
                <Button
                  type="default"
                  className="brand-btn-outline text-xs sm:text-sm font-semibold rounded-xl"
                >
                  Explore Business Tax Hub
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Column: 3 Structured Highlights */}
          <div className="lg:col-span-6 space-y-4">
            {compliancePillars.map((item, idx) => (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-800/90 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md group flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 dark:bg-teal-500/20 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                    {item.title}
                  </h4>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
