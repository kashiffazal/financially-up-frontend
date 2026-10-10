"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  ApartmentOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
  TeamOutlined,
  DollarCircleOutlined,
  SlidersOutlined,
} from "@ant-design/icons";

/**
 * SettingUpUnitTrust Component
 * ============================
 * Section: Setting up a unit trust
 * Verbatim text from Page 3 of client docx.
 * Outlines commercial co-investment factors, multi-class units, accounting framework,
 * and direct cross-link to Corporate Trustee service.
 */
export default function SettingUpUnitTrust() {
  const structureFactors = [
    {
      icon: <TeamOutlined className="text-teal-600 dark:text-teal-400 text-lg" />,
      title: "Governance & Voting Rights",
      desc: "Defining investor voting thresholds, trustee appointment mechanics, and decision-making governance rules.",
    },
    {
      icon: <SlidersOutlined className="text-blue-600 dark:text-blue-400 text-lg" />,
      title: "Unit Classes & Entitlements",
      desc: "Structuring ordinary, preference, or non-voting units with varied dividend and capital repayment rights.",
    },
    {
      icon: <DollarCircleOutlined className="text-purple-600 dark:text-purple-400 text-lg" />,
      title: "Debt vs Equity Funding",
      desc: "Unit subscription capital vs unitholder loan facilities, interest deductibility, and repayment terms.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-amber-600 dark:text-amber-400 text-lg" />,
      title: "Succession & Exit Strategies",
      desc: "Pre-emption rights, compulsory buy-out mechanisms, and dispute resolution terms in unit-holder deeds.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Co-Investment Structure Setup
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Setting up a unit trust
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A person searching for a unit trust setup accountant is often deciding how investors or business
            participants should hold interests. The tax and accounting position is only part of that decision. The
            deed, governance, voting rights, unit classes, funding, asset protection, succession and legal obligations
            can all matter.
          </p>
        </div>

        {/* 4 Factor Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {structureFactors.map((item, idx) => (
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

        {/* Verbatim Setup Role & Legal Boundary */}
        <div className="p-8 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700 mb-12">
          <div className="space-y-4 max-w-4xl">
            <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <CheckCircleOutlined className="text-brand-emerald" />
              Accounting Framework & Registration Coordination
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Financially Up can assist with registrations and establish the accounting framework once the legal
              structure has been settled. The deed and legal rights should be prepared or reviewed by an appropriately
              qualified legal adviser.
            </p>
          </div>
        </div>

        {/* Verbatim Link Card: Corporate Trustee Service */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-blue-200/80 dark:border-zinc-800 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <Tag color="blue" className="font-semibold text-xs">
              Pty Ltd Trustee Entity
            </Tag>
            <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <BankOutlined className="text-blue-600 dark:text-blue-400" />
              Will a Proprietary Company Act as Trustee?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              Where a company will act as trustee, see our{" "}
              <strong className="font-semibold text-slate-900 dark:text-white">Corporate Trustee</strong> service for
              the company-side setup and ongoing ASIC considerations.
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
