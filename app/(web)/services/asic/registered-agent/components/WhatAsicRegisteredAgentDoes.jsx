"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  CheckCircleOutlined,
  MailOutlined,
  CalendarOutlined,
  FileDoneOutlined,
  FolderOpenOutlined,
  SyncOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

/**
 * WhatAsicRegisteredAgentDoes Component
 * =====================================
 * Section 1 of ASIC Registered Agent Service (/services/asic/registered-agent/):
 * "What does an ASIC registered agent do?"
 *
 * Implements 100% complete, verbatim content from Page 2 of '7th Pillar ASIC.docx'.
 * Responsive 3-column card layout with brand gradient background, micro-interactions,
 * and statutory regulatory notice for Form 362 appointment process.
 */
export default function WhatAsicRegisteredAgentDoes() {
  /**
   * The 5 verbatim practice scope items from official client document
   */
  const scopeItems = [
    {
      icon: <MailOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "receiving and monitoring ASIC correspondence for the company",
      detail:
        "Direct receipt and proactive monitoring of official ASIC annual statements, notices, and compliance alerts at our registered agent address.",
    },
    {
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "helping review annual statements and identifying details that need updating",
      detail:
        "Systematic review of registered company records against internal documentation to identify changes required before annual invoice due dates.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "lodging common company changes when the required information and approvals are available",
      detail:
        "Preparing and lodging statutory Form 484 and other ASIC updates once valid board decisions, director consents, and IDs are verified.",
    },
    {
      icon: <FolderOpenOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "maintaining a clearer record of ASIC correspondence and completed lodgements",
      detail:
        "Centralising historical lodgement confirmations, ASIC transactions, and corporate documentation for seamless governance and audits.",
    },
    {
      icon: <SyncOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "coordinating corporate changes with accounting or tax records where relevant.",
      detail:
        "Ensuring corporate register updates align smoothly with business financial statements, tax schedules, payroll records, and ASIC registers.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Practice Scope & Governance
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does an ASIC registered agent do?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            ASIC describes a registered agent as a person or business appointed by a company to perform certain tasks on the company’s behalf. Once properly appointed, an agent can use ASIC’s registered agent portal to view company details and complete common lodgements for companies they represent.
          </p>
          <p className="mt-2 text-xs sm:text-sm font-semibold text-emerald-800 dark:text-emerald-400 uppercase tracking-wider">
            In practice, an ongoing registered agent service may assist with:
          </p>
        </div>

        {/* 5 Scope Items Cards + 1 High-Intent Appointment Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {scopeItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Agent Scope 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-start gap-2.5 mb-3">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-1 shrink-0" />
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug capitalize-first">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed pl-6 font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}

          {/* 6th Card: Consultation Call to Action */}
          <div className="flex flex-col justify-between rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-emerald-800 to-teal-900 text-white shadow-lg border border-emerald-700/60 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[11px] font-extrabold text-emerald-200 uppercase tracking-widest block mb-2">
                Initial Discussion
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-white mb-2 leading-snug">
                Appoint Financially Up as Your ASIC Agent
              </h3>
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed mb-6 font-normal">
                If you are considering appointing Financially Up as your ASIC agent for company administration, an initial discussion can confirm the company details, current ASIC position and the scope of ongoing support required.
              </p>
            </div>
            <div className="relative z-10">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full rounded-xl font-bold bg-white text-emerald-900 hover:bg-emerald-50 hover:text-emerald-950 border-none h-11 transition-all"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Statutory Note on Form 362 Appointment Process */}
        <Alert
          type="info"
          showIcon
          icon={<SafetyCertificateOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />}
          className="rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/80 dark:bg-emerald-950/40 p-4 sm:p-5"
          title={
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Official ASIC Appointment Process (Form 362)
            </span>
          }
          description={
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 mt-1 font-normal">
              A company can appoint a registered agent through ASIC’s prescribed process. ASIC currently uses Form 362 for appointing or ceasing a registered agent, signed by a company officeholder.
            </p>
          }
        />
      </div>
    </section>
  );
}
