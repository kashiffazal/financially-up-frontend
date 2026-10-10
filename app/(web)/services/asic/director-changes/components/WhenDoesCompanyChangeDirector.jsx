"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  UserSwitchOutlined,
  IdcardOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhenDoesCompanyChangeDirector Component
 * =======================================
 * Section 1 of Change Director ASIC (/services/asic/director-changes/):
 * 1. "When does a company need to change director details with ASIC?"
 * 2. "Adding or appointing a director"
 *
 * Implements 100% complete, verbatim content from Page 6 of '7th Pillar ASIC.docx'.
 * Responsive appointment cards, mandatory Director ID rules, and Australian residency requirements.
 */
export default function WhenDoesCompanyChangeDirector() {
  const appointmentPrerequisites = [
    {
      icon: <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Company Constitution & Rules",
      desc: "Check that the appointment is made strictly in accordance with the company constitution or applicable replaceable rules.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Signed Written Consent",
      desc: "ASIC requires the company to obtain and keep the person&apos;s written and signed consent before formal appointment.",
    },
    {
      icon: <IdcardOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Mandatory Director ID (ABRS)",
      desc: "A proposed director must apply for and hold a Director ID before being appointed. The individual must apply personally.",
    },
    {
      icon: <GlobalOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Australian Resident Director Rule",
      desc: "For a proprietary company, at least one director must ordinarily reside in Australia. Board composition must comply.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Officeholder Governance & Compliance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When does a company need to change director details with ASIC?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A director change usually arises when a new director is appointed, an existing director resigns or retires, members remove a director in accordance with the applicable rules, or an earlier notification needs to be corrected. ASIC states that a company must tell it within 28 days when a new director or secretary is appointed, or when an existing officeholder resigns or retires.
          </p>
        </div>

        {/* Subsection: Adding or appointing a director */}
        <div className="w-full mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Adding or appointing a director
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto">
              Before a person is appointed as a director, the company should check that the appointment is made in accordance with its constitution or applicable replaceable rules. ASIC also requires the company to obtain and keep the person&apos;s written and signed consent before appointment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {appointmentPrerequisites.map((p, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/50 transition-colors"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-lg mb-3">
                  {p.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {p.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>

          <Alert
            type="info"
            showIcon
            icon={<IdcardOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />}
            className="rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/70 dark:bg-emerald-950/30 p-4 sm:p-5"
            title={
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                Individual Director ID Application Rule
              </span>
            }
            description={
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 mt-1 font-normal">
                A proposed director must have a director identification number before being appointed. Director IDs are issued and administered by Australian Business Registry Services. The individual applies for their own director ID; the company or accountant does not apply for it on their behalf.
              </p>
            }
          />
        </div>

        {/* Action Callout */}
        <div className="w-full rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              Adding or removing a director?
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed m-0 font-normal">
              If your company is adding or removing a director, an initial discussion can clarify the change date, company records, director ID position and what needs to be notified to ASIC.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0 w-full sm:w-auto">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="w-full sm:w-auto rounded-xl font-bold bg-white text-emerald-950 hover:bg-emerald-50 border-none h-11"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
