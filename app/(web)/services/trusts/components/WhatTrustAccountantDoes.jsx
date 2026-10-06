"use client";

import React from "react";
import { Button } from "antd";
import {
  AuditOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  FileTextOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  FolderOpenOutlined,
  ScheduleOutlined,
  ExclamationCircleOutlined,
  TeamOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatTrustAccountantDoes Component
 * =================================
 * Section 2: What does a trust accountant do?
 *
 * Implements verbatim content from '8th Pillar Trust Services.docx' (Page 1: 1- Trust Services).
 * Outlines the trust accountant's core responsibilities under Australian trust law,
 * displaying the exact 7 typical accounting work tasks with rich interactive cards.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatTrustAccountantDoes() {
  /**
   * The exact 7 typical trust accounting work items from client document
   */
  const typicalWorkItems = [
    {
      title: "preparing or reviewing annual trust accounts and reconciliations",
      icon: <FolderOpenOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      tag: "Accounts & Ledger",
    },
    {
      title: "classifying trust income, expenses, assets and liabilities",
      icon: <AuditOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      tag: "Classification",
    },
    {
      title: "preparing trust tax returns where required",
      icon: <FileTextOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />,
      tag: "Tax Return",
    },
    {
      title: "preparing beneficiary distribution information from the final tax position",
      icon: <ScheduleOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      tag: "Beneficiaries",
    },
    {
      title: "reviewing accounting records used to support trustee distribution decisions",
      icon: <CheckCircleOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      tag: "Trustee Records",
    },
    {
      title: "identifying issues that may require separate tax planning, legal advice or specialist review",
      icon: <ExclamationCircleOutlined className="text-rose-600 dark:text-rose-400 text-lg" />,
      tag: "Specialist Scope",
    },
    {
      title: "coordinating trust records with related companies, beneficiaries or other entities where relevant.",
      icon: <TeamOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      tag: "Entity Coordination",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Trust Administration & Practice
            </span>
          </div>

          {/* Exact H2 Heading from Document */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does a trust accountant do?
          </h2>

          {/* Exact Verbatim Introductory Paragraph from Document */}
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A trust accountant helps translate the financial activity of a trust into accurate
            accounting records and tax reporting. Unlike an individual taxpayer, a trust involves a
            trustee who administers trust property for beneficiaries under a trust deed. Tax outcomes
            can depend on the trust&apos;s income, the deed, beneficiary entitlements, trustee
            resolutions, capital gains, franked distributions and other facts.
          </p>
        </div>

        {/* 7 Typical Trust Accounting Work Items - Responsive Card Grid */}
        <div className="mb-14">
          <div className="flex items-center gap-2 mb-6">
            <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />
            <h3 className="text-lg font-bold text-slate-900 dark:text-white m-0">
              Typical trust accounting work may include:
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {typicalWorkItems.map((item, index) => (
              <div
                key={index}
                className="group p-5 sm:p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-xs hover:shadow-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {item.icon}
                    </div>
                    <span className="text-[11px] font-semibold px-2.5 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                      {item.tag}
                    </span>
                  </div>
                  <p className="text-sm sm:text-base font-medium text-slate-800 dark:text-zinc-200 leading-snug group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors m-0 capitalize-first">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verbatim Referral Banner to Trust Tax Returns Service */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-teal-200/80 dark:border-teal-800/60 p-6 sm:p-8 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-teal-700 dark:text-teal-300 uppercase tracking-wider">
              <FileTextOutlined />
              <span>Annual ATO Lodgement Specialist Scope</span>
            </div>
            <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
              For a page focused specifically on annual return preparation and lodgement, see our{" "}
              <Link
                href="/services/business-tax/trust-tax-returns"
                className="text-teal-600 dark:text-teal-400 hover:underline font-extrabold"
              >
                Trust Tax Returns
              </Link>{" "}
              service.
            </p>
          </div>

          <Link href="/services/business-tax/trust-tax-returns" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPlacement="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
            >
              View Trust Tax Returns
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
