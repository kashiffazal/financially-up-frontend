"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  EnvironmentOutlined,
  TeamOutlined,
  PhoneOutlined,
  CalendarOutlined,
  ArrowRightOutlined,
  BranchesOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * WhyChooseFinanciallyUpRestructure Component
 * Covers 'Why choose Financially Up?' from Page 8 of 6th Pillar Business Structures.docx.
 * Dynamically references company data via useCompany().
 */
export default function WhyChooseFinanciallyUpRestructure() {
  const company = useCompany();

  const highlights = [
    {
      title: "Registered Tax Agent",
      desc: `${company.legalName || "Financially Up Pty Ltd"} brings over a decade of verified taxation, structural advisory, and business transition experience.`,
      icon: <SafetyCertificateOutlined className="text-emerald-600 dark:text-emerald-400 text-xl" />,
    },
    {
      title: "CPA & IPA Members",
      desc: "Our senior accounting team holds formal CPA Australia and IPA professional qualifications.",
      icon: <TeamOutlined className="text-teal-600 dark:text-teal-400 text-xl" />,
    },
    {
      title: "Australia-Wide Support",
      desc: "Online remote appointments across all Australian states alongside face-to-face consultations at our North Sydney office.",
      icon: <EnvironmentOutlined className="text-blue-600 dark:text-blue-400 text-xl" />,
    },
    {
      title: "Integrated Transition Scope",
      desc: "From tax consequences and opening balance journals to entity registrations, we coordinate the full practical accounting scope.",
      icon: <BranchesOutlined className="text-indigo-600 dark:text-indigo-400 text-xl" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs">
              <SafetyCertificateOutlined className="mr-1.5" />
              Trusted Registered Tax Agent
            </Tag>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              Why choose Financially Up?
            </h2>

            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up Pty Ltd is a registered tax agent with more than 10 years of experience across taxation, accounting, bookkeeping and business advisory services. Our professional team includes CPA and IPA members, and we support clients across Australia through online and in-person appointments.
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white font-semibold shadow-md transition-all"
              >
                <CalendarOutlined />
                Book an Appointment
                <ArrowRightOutlined className="text-xs" />
              </Link>
              
              {company.phone && (
                <a
                  href={`tel:${company.phone.replace(/\s/g, "")}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-800 dark:text-zinc-200 font-semibold hover:border-emerald-500 transition-all shadow-xs"
                >
                  <PhoneOutlined className="text-brand-primary dark:text-emerald-400" />
                  {company.phone}
                </a>
              )}
            </div>
          </div>

          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/50 dark:border-zinc-700/50 flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <CheckCircleOutlined /> Verified Standard
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
