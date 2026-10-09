"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  BankOutlined,
  ApartmentOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  TeamOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";

/**
 * SettingUpFamilyTrust Component
 * ==============================
 * Section: Setting up a family trust
 * Verbatim text from Page 2 of client docx.
 * Balanced view of trust setup considerations, tax implications, registrations,
 * and direct cross-link to Corporate Trustee service.
 */
export default function SettingUpFamilyTrust() {
  const considerations = [
    {
      icon: <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      title: "Trustee & Control Structure",
      desc: "Individual vs corporate trustee, appointor succession rights, and administrative decision-making powers.",
    },
    {
      icon: <TeamOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      title: "Beneficiary Classes",
      desc: "Primary, general, and default beneficiaries identified within the legal definitions of the trust deed.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      title: "Asset Protection & Succession",
      desc: "Intergenerational wealth transfer, estate-planning alignment, and legal ownership separation.",
    },
    {
      icon: <DollarCircleOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      title: "Costs & Administration",
      desc: "Ongoing annual ASIC review fees (for corporate trustees), accounting costs, and annual ATO reporting.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Structure Evaluation & Setup
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Setting up a family trust
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            People searching for a family trust setup accountant are often deciding whether a trust is suitable before
            anything has been established. Tax is only one factor. The trustee structure, beneficiaries, control,
            succession, asset ownership, administration costs and legal objectives can all matter.
          </p>
        </div>

        {/* 4 Factor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {considerations.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Balanced Practice Philosophy */}
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 mb-12">
          <div className="space-y-4 max-w-4xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-brand-emerald" />
              How Financially Up Assists with New Family Trusts
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can explain the accounting and tax implications of using a family trust, assist with
              registrations and coordinate the accounting setup once the structure has been legally established. We do
              not present a family trust as universally preferable to a company, partnership or individual ownership.
              Legal advice may be required for the trust deed and broader asset-protection or estate-planning objectives.
            </p>
          </div>
        </div>

        {/* Verbatim Link Card: Corporate Trustee Service */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-blue-200/80 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <Tag color="blue" className="font-semibold text-xs">
              Governance Architecture
            </Tag>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BankOutlined className="text-blue-600 dark:text-blue-400" />
              Will a Proprietary Company Act as Trustee?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              If a company will act as trustee, our{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">Corporate Trustee</strong> page
              explains the company-side setup and compliance considerations.
            </p>
          </div>
          <div className="shrink-0 w-full md:w-auto">
            <Link href="/services/trusts/corporate-trustee">
              <Button
                type="primary"
                className="brand-btn-primary w-full md:w-auto text-xs sm:text-sm font-semibold rounded-xl"
                icon={<ArrowRightOutlined />}
                iconPosition="end"
              >
                View Corporate Trustee
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
