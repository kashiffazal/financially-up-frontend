"use client";

import React from "react";
import { Button } from "antd";
import {
  ApartmentOutlined,
  CheckCircleOutlined,
  SafetyCertificateOutlined,
  BankOutlined,
  BranchesOutlined,
  FileProtectOutlined,
  EyeOutlined,
  ArrowRightOutlined,
} from "@ant-design/icons";
import Link from "next/link";

/**
 * WhatStructureAccountantHelpsWith Component
 * ==========================================
 * Section 1 of Business Structures Hub:
 * Explains how a business structure accountant translates practical differences between
 * common Australian business structures into accounting, tax, and registration steps.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhatStructureAccountantHelpsWith() {
  const corePillars = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Entity Setup & Registrations",
      description:
        "Guiding you through ASIC incorporation, ABN entitlement, TFN issuance, business names, GST, and PAYG withholding registrations.",
      tag: "Establishment",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Tax & Compliance Alignment",
      description:
        "Understanding corporate tax rates, distribution mechanics, director loan rules (Div 7A), and keeping business money distinct from personal funds.",
      tag: "Tax Architecture",
    },
    {
      icon: <BranchesOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Growth & Restructure Advisory",
      description:
        "Evaluating structure viability before trading begins, adding equity partners, moving assets, or rolling from sole trader to company.",
      tag: "Commercial Scaling",
    },
  ];

  const structuralCheckpoints = [
    "Personal liability exposure vs limited liability protection",
    "Single operator simplicity vs multi-owner equity governance",
    "Asset protection for family homes, intellectual property, and equipment",
    "Tax treatment of business earnings, losses, salaries, and distributions",
    "Ongoing ASIC annual review fees and corporate administration",
    "Ability to introduce future investors, key employees, or silent partners",
    "Distinction between Company Name, Business Name, ACN, and ABN",
    "Identification of when formal legal drafting (trust deeds, shareholder agreements) is required",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Accounting & Registration Foundations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What Does a Business Structure Accountant Help With?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed">
            A business structure accountant helps translate the practical differences between common business structures into the{" "}
            <span className="font-semibold text-slate-900 dark:text-white">
              accounting, tax, and registration steps
            </span>{" "}
            relevant to your situation. This is critical before you begin trading, add owners, establish a company or trust, or transition between structures.
          </p>
        </div>

        {/* 3 Core Pillars Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {corePillars.map((pillar, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {pillar.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {pillar.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Box: Tax Is Only One Part of the Decision */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold mb-4">
                <FileProtectOutlined />
                <span>Holistic Commercial Evaluation</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Tax Consequences Are Only One Part of the Decision
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-4">
                In Australia, common structures include sole trader, partnership, company, and trust. Government guidance emphasizes that structure affects tax, personal liability, control, setup costs, and ongoing administration.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed mb-6">
                Financially Up assists with the accounting and tax side of setup, ensuring registrations match your operating model. If you are still deciding between options, our pre-decision review helps evaluate commercial trade-offs before any irreversible registration is submitted.
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link href="/book-an-appointment">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPosition="end"
                    className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
                  >
                    Discuss Your Structure
                  </Button>
                </Link>
                <Link href="#business-structures-overview">
                  <Button
                    size="large"
                    icon={<EyeOutlined />}
                    className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    Explore All Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Checkpoints Grid */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800/80">
              <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
                <span>Key Decision Factors</span>
              </h4>
              <ul className="space-y-2.5">
                {structuralCheckpoints.map((checkpoint, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-1.5 shrink-0" />
                    <span>{checkpoint}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
