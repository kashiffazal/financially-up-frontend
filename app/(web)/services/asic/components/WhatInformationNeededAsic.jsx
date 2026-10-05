"use client";

import React from "react";
import { Tag, Button } from "antd";
import {
  SolutionOutlined,
  CheckCircleOutlined,
  KeyOutlined,
  HomeOutlined,
  UserOutlined,
  IdcardOutlined,
  GiftOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatInformationNeededAsic Component
 * ===================================
 * Section 7: What Information Is Needed for ASIC Compliance?
 *
 * Detailed checklist of the 6 essential documentation items required
 * to maintain or update corporate records with ASIC.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatInformationNeededAsic() {
  const checklistCards = [
    {
      icon: <KeyOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Corporate Key & Annual Statement",
      tag: "Access Credentials",
      items: [
        "Company 9-digit Australian Company Number (ACN)",
        "Official 9-character ASIC Corporate Key",
        "Most recent ASIC annual review statement",
        "Details of existing registered agent if switching agents",
      ],
    },
    {
      icon: <HomeOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Current Addresses & Occupier Consent",
      tag: "Address Data",
      items: [
        "Updated registered office address",
        "Current principal place of business address",
        "Written occupier consent if office is not company premises",
        "Director residential addresses for the private register",
      ],
    },
    {
      icon: <UserOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Officeholder Details & Consents",
      tag: "Director Governance",
      items: [
        "Full legal names, dates and places of birth of all officers",
        "Written signed consent to act as director or secretary",
        "Effective dates of appointments or resignations",
        "Confirmation of Australian residency for at least one director",
      ],
    },
    {
      icon: <IdcardOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Active Director IDs (ABRS)",
      tag: "Statutory Identity",
      items: [
        "15-digit Director ID verified from myGovID / ABRS",
        "Confirmation Director ID was obtained prior to appointment",
        "Matching legal name on Director ID and ASIC register",
        "Verification for foreign resident directors where applicable",
      ],
    },
    {
      icon: <GiftOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Share Transfers & Allotments",
      tag: "Equity Records",
      items: [
        "Executed share transfer forms or subscription agreements",
        "Number, value, and class of shares being transferred or issued",
        "Full legal names and addresses of new shareholders",
        "Updated register of members and beneficial ownership disclosures",
      ],
    },
    {
      icon: <FileDoneOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
      title: "Board Minutes & Resolutions",
      tag: "Corporate Authority",
      items: [
        "Signed minutes of directors' meetings approving changes",
        "Documented solvency resolutions (positive or negative)",
        "Special resolutions for company name or constitution changes",
        "Records of shareholder approvals where required by constitution",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <SolutionOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Corporate Onboarding
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Records Should You Have Ready?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            Having key records organised allows our registered agents to verify details, lodge Form 484 updates, and ensure your ASIC corporate register remains compliant without delays.
          </p>
        </div>

        {/* 6 Checklist Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {checklistCards.map((card, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm hover:border-teal-500/40 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-11 h-11 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center">
                    {card.icon}
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400 font-mono">
                    {card.tag}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-4">
                  {card.title}
                </h3>
                <ul className="space-y-2.5">
                  {card.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed"
                    >
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-1 shrink-0 text-xs" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Helper */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 shadow-sm">
          <div>
            <h4 className="text-base font-bold text-slate-900 dark:text-white m-0">
              Need help obtaining your corporate key or resolving ASIC discrepancies?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 m-0 mt-1">
              Book an appointment with Financially Up. We&apos;ll review your company extract and resolve outstanding items.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20"
            >
              Book Corporate Review
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
