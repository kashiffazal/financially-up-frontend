"use client";

import React from "react";
import { Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

/**
 * WhenMightYouChangeAppointor Component
 * =====================================
 * Section: When might you need to change the appointor of a family trust?
 * Verbatim text from Page 9 of client docx (8th Pillar Trust Services.docx).
 * Features 7 trigger events across succession planning, intergenerational transfer,
 * incapacity, relationship changes, and structural modernization.
 */
export default function WhenMightYouChangeAppointor() {
  const triggers = [
    "the current appointor wants to retire from the role",
    "the appointor has died or lost capacity and the deed contains a succession mechanism",
    "the family is implementing an estate or succession plan",
    "control of the trust is moving to the next generation",
    "a relationship or ownership change means the governance arrangement needs review",
    "the deed contains outdated or impractical appointor succession provisions",
    "a broader trust restructure is being implemented.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Trigger Events
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When might you need to change the appointor of a family trust?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Appointor changes generally occur as part of planned intergenerational succession, estate planning, or to
            resolve unworkable legacy deed clauses.
          </p>
        </div>

        {/* 7 Triggers Checklist Grid */}
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
