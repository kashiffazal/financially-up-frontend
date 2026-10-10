"use client";

import React from "react";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * WhenMightTrustNeedRestructuringAdvice Component
 * ===============================================
 * Section: When might a trust need restructuring advice?
 * Verbatim text from Page 7 of client docx (8th Pillar Trust Services.docx).
 * Covers commercial, family, and investment triggers, alongside 7 specific restructuring scenarios.
 */
export default function WhenMightTrustNeedRestructuringAdvice() {
  const triggers = [
    "a family trust needs governance changes because the people controlling the structure have changed",
    "an individual trustee is being replaced with a corporate trustee or another trustee",
    "the appointer or guardian role needs to change under the trust deed",
    "unit holdings or investor interests in a unit trust are changing",
    "assets may be transferred, sold or moved as part of a wider restructure",
    "the trust has carried-forward losses, family trust elections or other tax history that could be affected by a change in control",
    "an older deed no longer reflects the way the group operates and legal amendments are being considered.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Restructuring Triggers
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When might a trust need restructuring advice?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Trust restructuring advice may be relevant when the current arrangement no longer matches the family,
            business or investment circumstances. Common triggers include succession planning, retirement of a trustee
            or appointer, moving to a corporate trustee, admitting or exiting unit holders, simplifying an older
            structure, responding to a relationship or ownership change, or preparing for a transaction involving trust
            assets.
          </p>
        </div>

        {/* 7 Restructuring Triggers Checklist */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {triggers.map((text, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/60 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-normal capitalize-first">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
