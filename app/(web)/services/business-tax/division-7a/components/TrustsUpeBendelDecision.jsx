"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  SafetyCertificateOutlined,
  ApartmentOutlined,
  FileSearchOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";

/**
 * TrustsUpeBendelDecision Component
 * =================================
 * Section: Trusts, Unpaid Entitlements and More Complex Arrangements
 * Verbatim copy from Page 9 of client docx.
 * Covers:
 * - Trust interaction with private-company beneficiaries
 * - High Court 2026 decision in Commissioner of Taxation v Bendel (UPE is not merely a loan for s 109D)
 * - Interposed entities, separate loans, and assessment from complete records.
 */
export default function TrustsUpeBendelDecision() {
  const complexAspects = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Trust Beneficiary Entitlements",
      desc: "Following the High Court's 2026 decision in Commissioner of Taxation v Bendel, an unpaid present entitlement (UPE) owed by a trust to a private company beneficiary is not, merely because it remains unpaid, a loan for section 109D.",
    },
    {
      icon: <ApartmentOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Separate Loans & Interposed Entities",
      desc: "Separate loans, payments, interposed-entity arrangements or other benefits involving the trust, company, shareholders or associates may still require Division 7A review, and other tax provisions can also be relevant.",
    },
    {
      icon: <FileSearchOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Complete Records vs Generic Checklists",
      desc: "These matters should be assessed from the complete records rather than reduced to a generic director-loan checklist, reviewing underlying trust deeds, distribution minutes, and cash flows.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            High Court 2026 Bendel Decision & Trusts
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Trusts, Unpaid Entitlements and More Complex Arrangements
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Division 7A can interact with trusts and private-company beneficiaries, but the treatment depends on the legal and transaction history. Following the High Court&apos;s 2026 decision in Commissioner of Taxation v Bendel, an unpaid present entitlement owed by a trust to a private company beneficiary is not, merely because it remains unpaid, a loan for section 109D.
          </p>
        </div>

        {/* 3 Interactive Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {complexAspects.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full Verbatim Summary Callout */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-teal-500/10 via-white to-slate-50 dark:from-teal-950/20 dark:via-zinc-900 dark:to-zinc-950 border border-teal-500/20 dark:border-teal-500/30 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <SafetyCertificateOutlined className="text-teal-600 dark:text-teal-400" />
              Tailored Legal and Tax Review for Trust Groups
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Separate loans, payments, interposed-entity arrangements or other benefits involving the trust, company, shareholders or associates may still require Division 7A review, and other tax provisions can also be relevant. These matters should be assessed from the complete records rather than reduced to a generic director-loan checklist.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/book-an-appointment">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                Discuss Trust Arrangements
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
