"use client";

import React from "react";
import { Tag } from "antd";
import {
  CalendarOutlined,
  HeartOutlined,
  TeamOutlined,
  SwapOutlined,
  BankOutlined,
  CheckCircleOutlined,
  SolutionOutlined,
} from "@ant-design/icons";

/**
 * WhenToStartSuccessionPlanning Component
 * ========================================
 * Section 1: When should an owner start succession planning?
 * Source: 12th Pillar Business Advisory.docx (Lines 506-509)
 *
 * Implements 100% complete, verbatim SEO text explaining early planning,
 * unplanned exit triggers, owner dependency risks, and business.gov.au operational readiness.
 */
export default function WhenToStartSuccessionPlanning() {
  const triggerEvents = [
    {
      icon: <CalendarOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Planned Retirement",
      desc: "Setting a deliberate timeline to step back, monetize equity, and secure post-transition lifestyle income.",
    },
    {
      icon: <HeartOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Health or Personal Shifts",
      desc: "Protecting business continuity, family wealth, and staff stability against unexpected personal events.",
    },
    {
      icon: <TeamOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Family Conversations",
      desc: "Navigating next-generation aspirations, equity sharing, and commercial capability across family members.",
    },
    {
      icon: <SwapOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Buyer or Co-Owner Inquiries",
      desc: "Responding with confidence to third-party acquisition inquiries or internal partner buyouts.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Timing &amp; Preparedness
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            When Should an Owner Start Succession Planning?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Start while you still have choices and time to act. A planned
            retirement, health concern, family conversation, approach from a
            buyer or change in ownership can prompt a review. Preparing early
            also helps if circumstances require an earlier-than-expected exit.
            The Australian Government advises keeping succession plans current
            as personal and business circumstances change.
          </p>
        </div>

        {/* 4 Trigger Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {triggerEvents.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-950/70 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                {item.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal m-0">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Owner Reliance & Knowledge Transfer Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-2xs mb-8">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">
              De-risking Owner Reliance
            </h3>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal mb-6">
              For a small business, the owner may hold customer relationships,
              approvals and practical knowledge that are hard to hand over at
              short notice. A succession plan considers how the business will
              continue, who will make decisions and which obligations need to be
              addressed during a transition.
            </p>
            <div className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-700 dark:text-emerald-400">
              <CheckCircleOutlined />
              <span>
                Systematizing commercial goodwill increases transferable enterprise value.
              </span>
            </div>
          </div>
        </div>

        {/* business.gov.au Operational Readiness Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-emerald-50/60 via-slate-50/40 to-white dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-950/40 border border-emerald-200/80 dark:border-emerald-800/50">
          <div className="flex items-start gap-4">
            <BankOutlined className="text-2xl sm:text-3xl text-emerald-600 dark:text-emerald-400 shrink-0 mt-1" />
            <div>
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                Operational Readiness (business.gov.au Recommendations)
              </h4>
              <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal m-0">
                Operational readiness matters as much as the proposed ownership
                change. Business.gov.au recommends documenting policies,
                procedures and processes, planning for a sudden transition and
                keeping the succession plan current. Capturing key contacts,
                system access, delegated authorities and recurring obligations
                can reduce reliance on the owner and give a successor a clearer
                starting point.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
