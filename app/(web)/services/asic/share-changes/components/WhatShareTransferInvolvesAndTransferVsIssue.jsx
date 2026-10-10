"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button, Alert } from "antd";
import {
  SwapOutlined,
  PlusCircleOutlined,
  TeamOutlined,
  IdcardOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

/**
 * WhatShareTransferInvolvesAndTransferVsIssue Component
 * ====================================================
 * Section 1 of Share Changes (/services/asic/share-changes/):
 * 1. "What does a share transfer ASIC update involve?"
 * 2. "Share transfer versus issuing new shares"
 * 3. 5 Common Share Change Scenarios
 *
 * Implements 100% complete, verbatim content from Page 7 of '7th Pillar ASIC.docx'.
 * Distinct comparison cards (Transfer vs Issue), statutory 28-day notification rules, and scenario cards.
 */
export default function WhatShareTransferInvolvesAndTransferVsIssue() {
  const commonScenarios = [
    {
      icon: <SwapOutlined className="text-emerald-600 dark:text-emerald-400" />,
      title: "Transfer of existing shares between members",
      desc: "Reallocating existing shares from one shareholder to another, documented in the member register.",
    },
    {
      icon: <PlusCircleOutlined className="text-teal-600 dark:text-teal-400" />,
      title: "Issue of new ordinary or other classes of shares",
      desc: "Creating and allocating new share capital to existing or incoming investors.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-blue-600 dark:text-blue-400" />,
      title: "Changes in beneficial ownership status",
      desc: "Recording whether shares are held beneficially or on trust for another party.",
    },
    {
      icon: <IdcardOutlined className="text-purple-600 dark:text-purple-400" />,
      title: "Changes to shareholder details or holdings",
      desc: "Updating registered names, residential addresses, or shareholding quantities.",
    },
    {
      icon: <ExclamationCircleOutlined className="text-amber-600 dark:text-amber-400" />,
      title: "Corrections where company records and ASIC information do not agree",
      desc: "Reconciling historical inconsistencies between the internal register and ASIC portal records.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Equity Governance & Registry
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does a share transfer ASIC update involve?
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A share transfer occurs when existing shares move from one member to another. For a proprietary company, changes to shareholder details and holdings generally need to be reflected in the company&apos;s own register of members and notified to ASIC where required. ASIC states that a transfer of shares, or a change in beneficial ownership status, must be notified within 28 days.
          </p>
          <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
            The ASIC notification is only one part of the process. The company should also make sure its internal share register records the member details, date of the change, shares held and relevant beneficial ownership status. Depending on the company&apos;s constitution, shareholders agreement and circumstances, approvals or other legal documents may also be required. Financially Up does not provide legal advice as part of routine ASIC administration, so an appropriately qualified legal adviser may be needed where the legal effect of a transfer is in question.
          </p>
        </div>

        {/* Comparison: Share Transfer vs Issuing New Shares */}
        <div className="w-full mb-16">
          <div className="text-center mb-8">
            <Tag color="blue" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
              Key Distinction
            </Tag>
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              Share transfer versus issuing new shares
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal max-w-2xl mx-auto">
              A transfer moves existing shares between owners. A share issue creates and allocates new shares. The distinction matters because issuing shares changes the company&apos;s share capital and may affect the ownership percentages of existing shareholders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {/* Transfer Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center">
                    <SwapOutlined className="text-emerald-600 dark:text-emerald-400 text-lg" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                    Share Transfer
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  Moves existing shares between owners. Total company issued capital remains unchanged. Requires updated internal register of members, instrument of transfer, and ASIC notification within 28 days.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
                Notice deadline: <strong>28 days from transfer date</strong>
              </div>
            </div>

            {/* Issue Card */}
            <div className="p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/60 border border-blue-100 dark:border-blue-800/40 flex items-center justify-center">
                    <PlusCircleOutlined className="text-blue-600 dark:text-blue-400 text-lg" />
                  </div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white m-0">
                    Issuing New Shares
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal mb-4">
                  Creates and allocates brand new shares. Increases total share capital and dilutes existing equity percentages. Directors must specify share class, number, issue date, and amount paid or agreed to be paid.
                </p>
              </div>
              <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 text-xs text-slate-500 dark:text-zinc-400">
                ASIC requires companies to notify it within <strong>28 days after issue</strong>
              </div>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal text-center max-w-3xl mx-auto italic">
            “ASIC requires companies to notify it about share issues within 28 days after the issue. The company must also record the issued shares in its member register. Before an issue shares ASIC update is made, directors should be clear about matters such as the number and class of shares, issue date, amount paid or agreed to be paid and the identity of the member receiving the shares.”
          </p>
        </div>

        {/* 5 Common Scenarios */}
        <div className="w-full mb-16">
          <div className="text-center mb-8">
            <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">
              Common Share Change Scenarios
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {commonScenarios.map((s, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/50 transition-colors"
              >
                <div className="w-9 h-9 rounded-lg bg-slate-50 dark:bg-zinc-800 flex items-center justify-center text-base mb-3">
                  {s.icon}
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {s.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-zinc-400 leading-relaxed font-normal m-0">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Action Callout */}
        <div className="w-full rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-emerald-800 to-teal-900 text-white shadow-lg flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl">
            <h3 className="text-lg sm:text-xl font-extrabold text-white mb-1">
              Discuss your proposed share change
            </h3>
            <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed m-0 font-normal">
              Discuss the proposed or completed share change with Financially Up. We can review the company details, identify the ASIC and record-keeping steps involved, and clarify whether separate tax or legal advice may be needed.
            </p>
          </div>
          <Link href="/book-an-appointment" className="shrink-0 w-full sm:w-auto">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="w-full sm:w-auto rounded-xl font-bold bg-white text-emerald-950 hover:bg-emerald-50 border-none h-11"
            >
              Book an Appointment
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
