"use client";

import React from "react";
import { Tag } from "antd";
import {
  CompassOutlined,
  GlobalOutlined,
  FileSearchOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * FindingRightGovernmentGrant Component
 * =====================================
 * Section: Finding the Right Government Grant
 * Verbatim text from Page 4 of 15th Pillar R&D Tax Incentive docx.
 */
export default function FindingRightGovernmentGrant() {
  const grantFocusAreas = [
    "Innovation & Research",
    "Commercialization",
    "Export Development",
    "Regional Activity",
    "Energy Efficiency",
    "Workforce Capability",
    "Industry-Specific Programs",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Funding Opportunities
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Finding the Right Government Grant
          </h2>
        </div>

        {/* 2 Main Verbatim Text Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200 dark:border-zinc-800 text-teal-600 dark:text-teal-400">
                  <GlobalOutlined className="text-2xl" />
                </div>
                <div>
                  <Tag color="cyan" className="m-0 font-semibold uppercase text-[11px] mb-1">
                    Multi-Tier Programs
                  </Tag>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Federal, State, Territory &amp; Local Schemes
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-6">
                Australia has federal, state, territory and local government grants and support
                programs. They vary substantially in purpose and availability. A program may support
                innovation, research, commercialization, export development, regional activity, energy
                efficiency, workforce capability or a particular industry. Some opportunities are open
                continuously; others have fixed rounds, closing dates or limited funding.
              </p>
            </div>

            <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-200/60 dark:border-zinc-800">
              {grantFocusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 text-xs rounded-lg bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800 font-medium"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-3xl p-7 sm:p-9 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 flex items-center justify-center border border-slate-200 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400">
                  <CompassOutlined className="text-2xl" />
                </div>
                <div>
                  <Tag color="green" className="m-0 font-semibold uppercase text-[11px] mb-1">
                    Strategic First Step
                  </Tag>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                    Confirm Match Before Starting Writing
                  </h3>
                </div>
              </div>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                The first step is not to start writing. It is to confirm that the opportunity matches
                the business and the proposed project. Official grant information is available through
                government sources, including the business.gov.au grants and programs finder and
                individual program websites. Eligibility, eligible costs and application instructions
                should always be checked against the current opportunity guidelines for the relevant
                round.
              </p>
            </div>

            <div className="bg-emerald-50/60 dark:bg-emerald-950/30 rounded-xl p-4 border border-emerald-100 dark:border-emerald-900/40">
              <p className="text-xs text-emerald-900 dark:text-emerald-200 leading-relaxed font-normal">
                <strong>Public Access Transparency:</strong> Official grant information is available
                free through government websites. Financially Up does not sell access to government
                grant information; our professional service relates to assessment, accounting and
                application support.
              </p>
            </div>
          </div>
        </div>

        {/* Verbatim Disclaimer Banner */}
        <div className="bg-white dark:bg-zinc-900 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex items-center gap-4">
          <InfoCircleOutlined className="text-xl text-slate-400 shrink-0" />
          <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Financially Up does not sell access to government grant information. Our professional
            service relates to assessment, accounting and application support where a business chooses
            to engage us.
          </p>
        </div>
      </div>
    </section>
  );
}
