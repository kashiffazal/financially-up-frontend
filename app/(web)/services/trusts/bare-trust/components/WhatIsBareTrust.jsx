"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  SwapOutlined,
  AuditOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatIsBareTrust Component
 * =========================
 * Section: What is a bare trust?
 * Verbatim text from Page 4 of client docx (8th Pillar Trust Services.docx).
 * Explains legal title vs beneficial interest, absolute entitlement under CGT rules,
 * and entity enterprise determination for GST purposes.
 */
export default function WhatIsBareTrust() {
  const concepts = [
    {
      icon: <SwapOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Legal vs Beneficial Title",
      desc: "The trustee holds bare legal title to the asset without independent beneficial rights, acting strictly in accordance with the directions of the beneficial owner.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Absolute Entitlement for CGT",
      desc: "Where a beneficiary is absolutely entitled to an asset as against the trustee, acts done by the trustee in relation to that asset are generally treated as if they were done by the beneficiary.",
    },
    {
      icon: <AuditOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Enterprise GST Assessment",
      desc: "GST treatment separately depends on which entity carries on the enterprise and makes the relevant supply or acquisition, rather than assuming a universal outcome.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Core Foundations
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What is a bare trust?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A bare trust is different from a discretionary family trust. In a bare trust, the trustee generally holds legal
            title but has no independent beneficial interest in the asset and usually acts in accordance with the
            beneficiary&apos;s directions. The ATO&apos;s guidance recognizes that bare trust arrangements need to be analyzed based
            on their legal and factual features rather than by label alone.
          </p>
        </div>

        {/* 3 Key Concepts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {concepts.map((item, idx) => (
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

        {/* Verbatim Explanation Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-start md:items-center gap-5">
          <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/40 border border-teal-200 dark:border-teal-800 flex items-center justify-center shrink-0">
            <CheckCircleOutlined className="text-xl text-teal-600 dark:text-teal-400" />
          </div>
          <div className="space-y-1">
            <h4 className="text-base font-bold text-slate-900 dark:text-white">
              Facts Dictate Tax Treatment Over Trust Labels
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              This matters because income tax, capital gains tax and GST outcomes depend on the actual arrangement. For
              CGT, where a beneficiary is absolutely entitled to an asset as against the trustee, acts done by the
              trustee in relation to that asset are generally treated as if they were done by the beneficiary. GST
              treatment can separately depend on which entity carries on the enterprise and makes the relevant supply or
              acquisition. A bare trust should therefore not be assumed to have one universal tax outcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
