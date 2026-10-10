"use client";

import React from "react";
import { Tag } from "antd";
import {
  DesktopOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * ApplyingForTrustTfn Component
 * =============================
 * Section: Applying for a trust TFN
 * Verbatim text from Page 10 of client docx (8th Pillar Trust Services.docx).
 * Explains online TFN lodgement, simultaneous ABN/TFN applications,
 * registered tax agent services, and associate identification details.
 */
export default function ApplyingForTrustTfn() {
  const steps = [
    {
      icon: <DesktopOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Online Application & Simultaneous Lodgement",
      desc: "Companies, trusts, partnerships and many other organizations can generally apply for a TFN online. For most trusts, the TFN application can be completed at the same time as the ABN application.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Registered Tax Agent Representation",
      desc: "A registered tax agent can also apply for a TFN on a client's behalf through the available tax professional services, ensuring proper identity verification and registration tracking.",
    },
    {
      icon: <TeamOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Accurate Associate & Identifying Details",
      desc: "The Australian Business Register indicates that associate details can include names, dates of birth and TFNs; where an individual does not provide a TFN, other identifying information may be required.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Application Process
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Applying for a trust TFN
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Companies, trusts, partnerships and many other organizations can generally apply for a TFN online. For most
            trusts, the TFN application can be completed at the same time as the ABN application. A registered tax agent
            can also apply for a TFN on a client&apos;s behalf through the available tax professional services.
          </p>
        </div>

        {/* 3 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Associate Identification Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Trust, Trustee & Associate Requirements
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A trust TFN application generally requires accurate information about the trust, trustee, authorized
              contacts and relevant associates. The Australian Business Register indicates that associate details can
              include names, dates of birth and TFNs; where an individual does not provide a TFN, other identifying
              information may be required. The exact information depends on the trust and application method.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
