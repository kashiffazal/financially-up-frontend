"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  HomeOutlined,
  UserSwitchOutlined,
  IdcardOutlined,
  TeamOutlined,
  PieChartOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatCompanyDetailsCanBeChanged Component
 * ========================================
 * Section 1 of Change Company Details (/services/asic/company-changes/):
 * "What company details can be changed with ASIC?"
 *
 * Implements 100% complete, verbatim content from Page 3 of '7th Pillar ASIC.docx'.
 * 7 common Form 484 update cards + consultation callout and Form 484 scope distinction alert.
 */
export default function WhatCompanyDetailsCanBeChanged() {
  const commonUpdates = [
    {
      icon: <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "registered office or principal place of business changes",
      detail:
        "Updating the registered office address or operational premises on the ASIC register, including occupier consent records where applicable.",
    },
    {
      icon: <UserSwitchOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "appointment or cessation of directors and secretaries",
      detail:
        "Notifying ASIC when company officeholders join or resign, backed by prior Director ID verification and signed written consents.",
    },
    {
      icon: <IdcardOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "changes to officeholder or member names",
      detail:
        "Updating legal names of existing directors, secretaries, or members following official changes, marriage, or deed poll documentation.",
    },
    {
      icon: <TeamOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      title: "certain changes to the members register",
      detail:
        "Recording updates to proprietary company top 20 member details, address changes, or beneficial ownership changes on the ASIC record.",
    },
    {
      icon: <PieChartOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "changes to share structure",
      detail:
        "Lodge notifications for new share issues, transfers between members, cancellations, or changes to total share capital and classes.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "updates to ultimate holding company details",
      detail:
        "Recording changes when a company becomes controlled by an ultimate holding entity, changes holding company name, ACN, or country of origin.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "changes to special purpose company status where applicable.",
      detail:
        "Notifying ASIC regarding eligibility changes for home unit, superannuation trustee, or charitable special purpose companies.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Form 484 Lodgement Scope
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What company details can be changed with ASIC?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            ASIC’s Form 484 process is used for several common company updates. Depending on the event, this can include:
          </p>
        </div>

        {/* 7 Scope Items Cards + High-Intent Booking Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {commonUpdates.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/60 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[10px] font-bold text-slate-400 dark:text-zinc-500 uppercase tracking-widest">
                    Update 0{idx + 1}
                  </span>
                </div>

                <div className="flex items-start gap-2 mb-2">
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 text-sm mt-0.5 shrink-0" />
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white leading-snug capitalize-first">
                    {item.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed pl-5 font-normal">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}

          {/* 8th Card: Consultation CTA Card */}
          <div className="flex flex-col justify-between rounded-2xl p-6 bg-gradient-to-br from-emerald-800 to-teal-900 text-white shadow-lg border border-emerald-700/60 relative overflow-hidden group">
            <div className="relative z-10">
              <span className="text-[10px] font-extrabold text-emerald-200 uppercase tracking-widest block mb-1.5">
                Review & Lodge
              </span>
              <h3 className="text-base sm:text-lg font-extrabold text-white mb-2 leading-snug">
                Company Change Consultation
              </h3>
              <p className="text-xs text-emerald-100/90 leading-relaxed mb-4 font-normal">
                If a company change has already occurred or is about to occur, an initial discussion can identify the relevant ASIC update, supporting information and whether tax, accounting or legal review should occur before lodgement.
              </p>
            </div>
            <div className="relative z-10">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="w-full rounded-xl font-bold bg-white text-emerald-900 hover:bg-emerald-50 hover:text-emerald-950 border-none h-10 transition-all text-xs"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Regulatory Distinction Note */}
        <Alert
          type="info"
          showIcon
          icon={<InfoCircleOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />}
          className="rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/80 dark:bg-emerald-950/40 p-4 sm:p-5"
          title={
            <span className="text-sm font-bold text-slate-900 dark:text-white">
              Not Every Company Event Uses Form 484
            </span>
          }
          description={
            <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 mt-1 font-normal">
              Not every company event is handled through Form 484. For example, changing a company name follows a different ASIC process. The correct lodgement should be identified from the actual event rather than assuming every corporate update uses the same form.
            </p>
          }
        />
      </div>
    </section>
  );
}
