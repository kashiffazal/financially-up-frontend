"use client";

import React from "react";
import Link from "next/link";
import { Tag, Alert, Button } from "antd";
import {
  ClockCircleOutlined,
  CheckCircleOutlined,
  HomeOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";

/**
 * WhenToUpdateAndRegisteredOfficeChange Component
 * ==============================================
 * Section 2 of Change Company Address (/services/asic/address-changes/):
 * 1. "When do you need to update company address ASIC details?" (6 triggers)
 * 2. "What is involved in a registered office change Australia?"
 *
 * Implements 100% complete, verbatim content from Page 8 of '7th Pillar ASIC.docx'.
 * Clean White alternating section, 28-day statutory rule, trigger checklist, and occupier consent guidance.
 */
export default function WhenToUpdateAndRegisteredOfficeChange() {
  const triggers = [
    "The business moves to a new operating location",
    "The registered office moves to a new accountant or adviser",
    "The company stops using a former accountant’s or agent’s address",
    "The business closes one site and makes another location its principal place of business",
    "The registered office and business premises were incorrectly recorded as the same address",
    "A previous address remains on ASIC records after a relocation",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Subsection 1: When do you need to update company address ASIC details? */}
        <div className="w-full mb-16 sm:mb-20">
          <div className="text-center mb-10">
            <Tag color="volcano" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              28-Day Statutory Notification
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              When do you need to update company address ASIC details?
            </h2>
          </div>

          <div className="bg-slate-50 dark:bg-zinc-900/80 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6 mb-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              ASIC company information should be updated when the actual details change rather than waiting for the next annual review. ASIC guidance states that a company must generally update its details within 28 days of the change. Late lodgement fees can apply if the notification is made after the required timeframe.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {triggers.map((trigger, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800"
                >
                  <CheckCircleOutlined className="text-brand-primary dark:text-emerald-400 mt-1 shrink-0 text-sm" />
                  <span className="text-xs sm:text-sm text-slate-800 dark:text-zinc-200 font-medium">
                    {trigger}
                  </span>
                </div>
              ))}
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal pt-3 border-t border-slate-200/70 dark:border-zinc-800 m-0">
              If several details are changing together - for example, an address, director and shareholder information - our broader{" "}
              <Link href="/services/asic/company-changes" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                Company Changes service
              </Link>{" "}
              can help coordinate the separate updates.
            </p>
          </div>
        </div>

        {/* Subsection 2: What is involved in a registered office change Australia? */}
        <div className="w-full">
          <div className="text-center mb-10">
            <Tag color="cyan" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
              Registered Office Requirements
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
              What is involved in a registered office change Australia?
            </h2>
          </div>

          <div className="bg-white dark:bg-zinc-900 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800 shadow-xs space-y-6">
            <p className="text-sm sm:text-base md:text-lg text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              A registered office change is more than entering a new address. The company should first confirm that the new address satisfies ASIC requirements and, if the company does not occupy the premises, that consent to use the address has been obtained and retained. The effective date of the change should also be clear.
            </p>
            <p className="text-sm sm:text-base text-slate-700 dark:text-zinc-300 leading-relaxed font-normal">
              If the address belongs to an ASIC registered agent, the appointment of the agent and the company address arrangements should be consistent. Financially Up can also assist through our{" "}
              <Link href="/services/asic/registered-agent" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">
                ASIC Registered Agent service
              </Link>{" "}
              where ongoing agent support is required.
            </p>

            <Alert
              type="info"
              showIcon
              icon={<SafetyCertificateOutlined className="text-lg text-emerald-600 dark:text-emerald-400" />}
              className="rounded-2xl border border-emerald-200/80 dark:border-emerald-800/60 bg-emerald-50/70 dark:bg-emerald-950/30 p-4 sm:p-5"
              title={
                <span className="text-sm font-bold text-slate-900 dark:text-white">
                  Occupier Written Consent Requirement
                </span>
              }
              description={
                <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-300 leading-relaxed m-0 mt-1 font-normal">
                  Under the Corporations Act, if a company uses an external address (such as an accounting firm), written occupier consent must be signed and retained in company records prior to submitting Form 484 to ASIC.
                </p>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
}
