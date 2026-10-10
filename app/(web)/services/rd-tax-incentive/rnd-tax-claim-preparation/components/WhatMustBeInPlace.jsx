"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  SafetyCertificateOutlined,
  ClockCircleOutlined,
  FileSearchOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhatMustBeInPlace Component
 * ============================
 * Section: What must be in place before a claim is lodged?
 * Verbatim text from Page 2 of 15th Pillar R&D Tax Incentive docx.
 */
export default function WhatMustBeInPlace() {
  const requirements = [
    {
      icon: (
        <SafetyCertificateOutlined className="text-2xl text-emerald-600 dark:text-emerald-400" />
      ),
      badge: "Stage Alignment",
      title: "Entity & Activity Registration",
      description:
        "A company must consider whether it is an eligible R&D entity, whether its activities meet the program's requirements and whether eligible notional deductions have been incurred. Activities are registered with the Department of Industry, Science and Resources; the tax offset is claimed with the ATO through the company income tax return and R&D Tax Incentive schedule. The registration number and relevant income year need to match the claim.",
    },
    {
      icon: (
        <ClockCircleOutlined className="text-2xl text-amber-600 dark:text-amber-400" />
      ),
      badge: "Strict Deadline",
      title: "10-Month Statutory Registration Date",
      description:
        "The statutory application deadline for activity registration is generally 10 months after the end of the income year in which the activities were undertaken. This date is separate from the company tax return lodgement process. An extension request is subject to the Department’s rules and supporting evidence; if a deadline is close or has passed, we review the actual position promptly rather than imply that a late application will automatically be accepted.",
    },
    {
      icon: (
        <FileSearchOutlined className="text-2xl text-teal-600 dark:text-teal-400" />
      ),
      badge: "Scope & Evidence",
      title: "Testing Eligibility & Evidence Focus",
      description:
        "An R&D tax incentive eligibility assessment is appropriate where the activity or entity position has not yet been tested. The broader R&D tax incentive overview explains how registration and the ATO claim fit together. This page focuses on preparing financial evidence and the offset calculation once the relevant activities and scope have been identified.",
      actionLink: {
        href: "/services/rd-tax-incentive/eligibility-assessment",
        label: "Explore Eligibility Assessment",
      },
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50/60 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs"
          >
            Prerequisites &amp; Deadlines
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What must be in place before a claim is lodged?
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Before an R&amp;D tax offset can be included in the company income tax return,
            statutory registration and financial substantiation requirements must be rigorously addressed.
          </p>
        </div>

        {/* 3 Pillar Requirement Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {requirements.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between bg-white dark:bg-zinc-900 rounded-2xl p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md hover:border-emerald-500/40 transition-all duration-300 group"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 flex items-center justify-center border border-emerald-100 dark:border-emerald-800/40">
                    {item.icon}
                  </div>
                  <Tag
                    color="blue"
                    className="m-0 text-[11px] font-semibold uppercase tracking-wider rounded-full px-2.5 py-0.5 border-none bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300"
                  >
                    {item.badge}
                  </Tag>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              {item.actionLink && (
                <div className="mt-6 pt-5 border-t border-slate-100 dark:border-zinc-800">
                  <Link href={item.actionLink.href}>
                    <Button
                      type="link"
                      className="p-0 text-emerald-600 dark:text-emerald-400 hover:text-emerald-700 font-semibold inline-flex items-center gap-1.5 h-auto text-xs sm:text-sm"
                      icon={<ArrowRightOutlined className="text-xs" />}
                      iconPlacement="end"
                    >
                      {item.actionLink.label}
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
