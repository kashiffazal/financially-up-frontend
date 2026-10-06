"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  BranchesOutlined,
  AuditOutlined,
  TeamOutlined,
  ArrowRightOutlined,
  BookOutlined,
  FileTextOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * BasComplianceNotice Component
 * ==============================
 * Section 4 of BAS, GST & Payroll Hub:
 * "GST, BAS and payroll are related - but they are not the same service"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '5th Pillar BAS, GST & Payroll.docx' (Page 1).
 *
 * Background: Clean White.
 */
export default function BasComplianceNotice() {
  /**
   * The 3 Distinct Connected Areas directly from Document Paragraph 1
   */
  const connectedAreas = [
    {
      icon: <BranchesOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "GST Registration",
      description:
        "Determines whether a business generally needs to account for GST on taxable sales and may claim GST credits on eligible purchases.",
      tag: "Registration Status",
      href: "/services/bas-payroll/gst-registration",
      actionText: "GST Registration",
    },
    {
      icon: <AuditOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "BAS Preparation",
      description:
        "The reporting process used for GST and other activity-statement obligations, reconciling transaction figures for ATO submission.",
      tag: "Reporting Mechanism",
      href: "/services/bas-payroll/bas-lodgement",
      actionText: "BAS Lodgement",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Payroll Processing",
      description:
        "Involves paying employees and maintaining payroll records; parts of payroll, such as PAYG withholding, may feed into the BAS.",
      tag: "Employee Obligations",
      href: "/services/bas-payroll/payroll-services",
      actionText: "Payroll Services",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <Tag color="green" className="brand-section-tag">
            <SafetyCertificateOutlined className="mr-1" /> Scope Demarcation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            GST, BAS and payroll are related - but they are not the same service
          </h2>
          {/* Document Paragraph 1 - Verbatim */}
          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            GST registration determines whether a business generally needs to
            account for GST on taxable sales and may claim GST credits on
            eligible purchases. BAS preparation is the reporting process used
            for GST and other activity-statement obligations. Payroll involves
            paying employees and maintaining payroll records; parts of payroll,
            such as PAYG withholding, may feed into the BAS.
          </p>
        </div>

        {/* 3 Connected Scope Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {connectedAreas.map((area, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-xs flex items-center justify-center">
                    {area.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {area.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {area.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 dark:border-zinc-800">
                <Link
                  href={area.href}
                  className="text-xs font-bold text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore {area.actionText}</span>
                  <ArrowRightOutlined className="text-[10px]" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Highlight Narrative Box: Paragraphs 2 & 3 - Verbatim */}
        <div className="p-6 sm:p-8 rounded-2xl bg-slate-50/70 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs mb-12">
          <div className="max-w-4xl mx-auto space-y-4">
            {/* Document Paragraph 2 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0">
              Financially Up can assist across these connected areas, but the
              scope depends on what your business actually needs. Ongoing
              bookkeeping, payroll processing, BAS preparation and broader tax
              advice can be scoped separately so responsibilities are clear.
            </p>

            {/* Document Paragraph 3 - Verbatim */}
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed m-0">
              If day-to-day records need attention before BAS work begins, our{" "}
              <Link
                href="/services/bookkeeping"
                className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                Bookkeeping services
              </Link>{" "}
              can help keep transactions and reconciliations current. For a
              page focused specifically on preparing and lodging activity
              statements, see our{" "}
              <Link
                href="/services/bas-payroll/bas-lodgement"
                className="font-semibold text-teal-600 dark:text-teal-400 hover:underline"
              >
                BAS Lodgement service
              </Link>
              .
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <Link href="/services/bookkeeping">
                <Button
                  icon={<BookOutlined />}
                  className="h-10 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all text-xs sm:text-sm"
                >
                  Bookkeeping Services
                </Button>
              </Link>
              <Link href="/services/bas-payroll/bas-lodgement">
                <Button
                  icon={<FileTextOutlined />}
                  type="primary"
                  className="h-10 rounded-xl font-semibold shadow-xs hover:scale-[1.02] active:scale-[0.99] transition-all text-xs sm:text-sm"
                >
                  BAS Lodgement Service
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="ATO Registered Agent Reassurance"
          tagIcon="safety"
          title="Clear Compliance Scoping & Lodgement Support"
          description="We review your bookkeeping, verify tax invoice substantiation, and lodge activity statements with accuracy. Catch-up work, payroll operations, and tax advisory are scoped transparently so you know exactly what is included."
          primaryButtonText="Book an Appointment"
          primaryButtonHref="/book-an-appointment"
          secondaryButtonText="Call"
        />
      </div>
    </section>
  );
}
