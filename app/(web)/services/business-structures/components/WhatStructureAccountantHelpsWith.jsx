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
 * Implements verbatim copy from Paragraphs 15 to 18 of '6th Pillar Business Structures.docx'.
 *
 * Background: Lite Brand Gradient with alternating palette.
 */
export default function WhatStructureAccountantHelpsWith() {
  /**
   * Three core focus areas directly extracted from Paragraph 18:
   * 1. Entity & Tax Registrations
   * 2. Record-Keeping Foundations & Compliance
   * 3. Pre-Establishment Structure Advice
   */
  const coreFocusAreas = [
    {
      icon: <BankOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Entity & Tax Registrations",
      description:
        "Coordinating entity setups, ABNs, TFNs, business names, GST, and PAYG withholding registrations to ensure complete consistency.",
      tag: "Setup & Registration",
    },
    {
      icon: <SafetyCertificateOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Record-Keeping & Compliance",
      description:
        "Establishing foundational bookkeeping systems and structuring how the entity connects directly with future tax returns and statutory lodgements.",
      tag: "Accounting Foundations",
    },
    {
      icon: <BranchesOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Pre-Decision Structure Advice",
      description:
        "Evaluating and comparing operating options in detail before a structure is established or changed, avoiding costly subsequent reorganisations.",
      tag: "Evaluation Scope",
    },
  ];

  /**
   * Core considerations from Paragraph 17 of the document:
   */
  const governmentGuidancePoints = [
    "Tax treatment and rates applicable to each structure",
    "Personal liability exposure and separation of business debts",
    "Operational control, ownership rights and decision-making",
    "Initial entity setup complexity and ongoing administration",
    "Distinction between accounting consequences and legal rights",
    "Asset protection requirements requiring qualified legal advice",
    "Record-keeping foundations for future ATO lodgements",
    "Evaluating options before a structure is formally established or changed",
  ];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header: Verbatim Heading 2 (Para 15) & Paragraph 16 */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 dark:bg-teal-950/40 border border-teal-200/80 dark:border-teal-800/60 mb-4">
            <ApartmentOutlined className="text-teal-600 dark:text-teal-400 text-xs sm:text-sm" />
            <span className="text-xs font-semibold text-teal-800 dark:text-teal-300 tracking-wide uppercase">
              Accounting & Registration Foundations
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            What does a business structure accountant help with?
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            A business structure accountant helps translate the practical differences between common business structures into the accounting, tax and registration steps relevant to your situation. This is particularly useful before you begin trading, add owners, establish a company or trust, or move from one structure to another.
          </p>
        </div>

        {/* 3 Core Focus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {coreFocusAreas.map((item, index) => (
            <div
              key={index}
              className="group p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 hover:border-teal-500/50 dark:hover:border-teal-500/50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-zinc-800 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-slate-100 dark:bg-zinc-800 text-slate-600 dark:text-zinc-400">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Deep Dive Box: Verbatim Paragraphs 17 & 18 */}
        <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm p-6 sm:p-8 lg:p-10 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Narrative: Verbatim Paragraphs 17 & 18 */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 text-xs font-semibold">
                <FileProtectOutlined />
                <span>Accounting & Specialist Scope</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                Understanding the Impact of Business Structure
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                In Australia, common structures include sole trader, partnership, company and trust. Government guidance notes that structure can affect tax, personal liability, control, setup and ongoing administration. The accounting consequences are only one part of the decision; legal rights, asset protection and ownership arrangements may require advice from an appropriately qualified legal adviser.
              </p>
              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Financially Up can assist with the accounting and tax side of setup, including entity registrations, tax registrations, record-keeping foundations and the way the chosen structure connects with future tax returns and compliance. If you are still deciding between structures, our business structure advice service focuses more specifically on evaluating the options before a structure is established or changed.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link href="/book-an-appointment">
                  <Button
                    type="primary"
                    size="large"
                    icon={<ArrowRightOutlined />}
                    iconPlacement="end"
                    className="h-11 px-6 rounded-xl font-semibold shadow-md shadow-brand-primary/20 hover:scale-[1.02] active:scale-[0.99] transition-all"
                  >
                    Book an Appointment
                  </Button>
                </Link>
                <Link href="#business-structures-overview">
                  <Button
                    size="large"
                    icon={<EyeOutlined />}
                    className="h-11 px-5 rounded-xl font-semibold border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-200 hover:bg-slate-100 dark:hover:bg-zinc-800 transition-all"
                  >
                    Explore Services
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right Checkpoints Grid */}
            <div className="lg:col-span-5 bg-slate-50 dark:bg-zinc-950/60 rounded-xl p-5 sm:p-6 border border-slate-200/80 dark:border-zinc-800/80">
              <h4 className="text-xs font-bold text-slate-800 dark:text-zinc-200 uppercase tracking-wider mb-4 flex items-center gap-2">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400" />
                <span>Statutory & Accounting Considerations</span>
              </h4>
              <ul className="space-y-2.5">
                {governmentGuidancePoints.map((checkpoint, idx) => (
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
