"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  ApartmentOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhyChooseFinanciallyUpCompany Component
 * =======================================
 * Section: Why Choose Financially Up
 * Features 100% complete, verbatim content from Page 2 of client docx.
 * 4 Pillars of assurance highlighting CPA/IPA credentials, 10+ years, and connected accounting.
 */
export default function WhyChooseFinanciallyUpCompany() {
  const credentials = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-brand-primary dark:text-emerald-400" />,
      title: "Registered Tax Agent",
      desc: "Financially Up is a registered tax agent (TPB #26234055), granting access to extended ATO lodgement dates and direct portal representation.",
    },
    {
      icon: <ClockCircleOutlined className="text-2xl text-teal-600 dark:text-teal-400" />,
      title: "More Than 10 Years of Experience",
      desc: "More than a decade of specialized Australian business tax, compliance, and corporate financial accounting expertise.",
    },
    {
      icon: <TeamOutlined className="text-2xl text-blue-600 dark:text-blue-400" />,
      title: "CPA and IPA Members",
      desc: "Our senior advisory team includes qualified CPA and IPA professionals maintaining the highest professional and ethical accounting standards.",
    },
    {
      icon: <ApartmentOutlined className="text-2xl text-purple-600 dark:text-purple-400" />,
      title: "Connected Accounting & Tax",
      desc: "The service is designed to keep company accounting and company tax connected. That makes it easier to identify when an issue is simply a year-end adjustment and when it needs additional tax advice.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Practitioner Credentials
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Why Choose Financially Up
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up is a registered tax agent with more than 10 years of experience providing accounting and tax services. The team includes CPA and IPA members and supports clients Australia-wide through online meetings, phone appointments and in-person appointments where preferred.
          </p>
        </div>

        {/* 4 Credentials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {credentials.map((cred, idx) => (
            <div
              key={idx}
              className="bg-white dark:bg-zinc-900 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-400/60 transition-all duration-300"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-5">
                  {cred.icon}
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-3 leading-snug">
                  {cred.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
                  {cred.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center gap-1.5 text-xs text-brand-primary dark:text-emerald-400 font-semibold">
                <CheckCircleOutlined className="text-xs" /> Verified Practitioner
              </div>
            </div>
          ))}
        </div>

        {/* Australia-Wide Flexible Support Banner */}
        <div className="bg-slate-900 text-white rounded-2xl p-7 sm:p-9 shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-400">
              <GlobalOutlined /> Australia-Wide Delivery
            </span>
            <h4 className="text-lg font-bold text-white">
              Online Video Meetings or In-Person Appointments
            </h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-normal">
              Whether you are located in Sydney, Melbourne, Brisbane, Perth, Adelaide or regional Australia, we provide seamless video appointments with screen sharing and electronic document review.
            </p>
          </div>
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              className="bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold text-xs rounded-xl shadow-xs shrink-0 h-11 px-6"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
