"use client";

import React from "react";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  CalendarOutlined,
  ClockCircleOutlined,
} from "@ant-design/icons";

/**
 * PracticalRdWorkflow Component
 * ==============================
 * Section: A Practical R&D Application Workflow
 * Verbatim text from Page 5 of 15th Pillar R&D Tax Incentive docx.
 */
export default function PracticalRdWorkflow() {
  const checkpoints = [
    {
      num: "01",
      title: "Entity & Deadline Confirmation",
      text: "confirm the applicant entity, income year and registration deadline",
    },
    {
      num: "02",
      title: "Core vs Supporting Segregation",
      text: "identify the projects and separate possible core and supporting R&D activities",
    },
    {
      num: "03",
      title: "Contemporaneous Evidence Collection",
      text: "collect contemporaneous records showing the purpose, process, experiments and outcomes",
    },
    {
      num: "04",
      title: "Accurate Activity Descriptions",
      text: "prepare clear activity descriptions that reflect what actually occurred in that income year",
    },
    {
      num: "05",
      title: "Cost Mapping to Activities",
      text: "map staff, contractor and other costs to the registered activities",
    },
    {
      num: "06",
      title: "Documented Apportionment Method",
      text: "document any allocation or apportionment method and reconcile it to the accounts",
    },
    {
      num: "07",
      title: "Customer Portal Registration Submission",
      text: "submit the registration and retain the application, supporting material and registration number",
    },
    {
      num: "08",
      title: "Company Return & Tax Schedule Alignment",
      text: "prepare the R&D tax schedule and company return using consistent figures and descriptions",
    },
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
            Methodical Implementation
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            A Practical R&amp;D Application Workflow
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A coordinated workflow reduces gaps between the technical description and accounting calculation.
          </p>
        </div>

        {/* 8 Step Workflow Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {checkpoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between hover:border-emerald-500/40 transition-colors group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black text-slate-300 dark:text-zinc-700 font-mono group-hover:text-emerald-500 transition-colors">
                    {item.num}
                  </span>
                  <CheckCircleOutlined className="text-emerald-600 dark:text-emerald-400 text-sm" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal capitalize">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* First Claim Year-End Timing Tip */}
        <div className="bg-emerald-50/60 dark:bg-emerald-950/30 rounded-2xl p-6 sm:p-7 border border-emerald-200/80 dark:border-emerald-900/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-900/60 flex items-center justify-center shrink-0 text-emerald-800 dark:text-emerald-300">
            <CalendarOutlined className="text-lg" />
          </div>
          <p className="text-xs sm:text-sm text-emerald-950 dark:text-emerald-200 leading-relaxed font-normal">
            <strong className="font-semibold text-emerald-950 dark:text-emerald-100">
              Proactive Claim Advisory:
            </strong>{" "}
            For a first claim, start before year-end. The company can improve records while work is under way, identify overseas activity in time and avoid a last-minute registration.
          </p>
        </div>
      </div>
    </section>
  );
}
