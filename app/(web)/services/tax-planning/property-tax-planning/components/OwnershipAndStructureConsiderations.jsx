"use client";

import React from "react";
import { Tag } from "antd";
import {
  ApartmentOutlined,
  UserOutlined,
  TeamOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * OwnershipAndStructureConsiderations Component
 * ==============================================
 * Section 4: Ownership and structure considerations.
 * Verbatim text from Page 5 of '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Examines how ownership structures dictate rental reporting, deductions, and CGT,
 * highlighting the boundary between taxation input and formal legal title / asset protection advice.
 */
export default function OwnershipAndStructureConsiderations() {
  const structureTypes = [
    {
      title: "Individual Ownership",
      icon: <UserOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      taxImplications: "100% of rental net profit or loss returned by the individual. Eligible for 50% CGT discount after 12 months. Negative gearing offsets personal salary.",
    },
    {
      title: "Joint Tenants vs Tenants in Common",
      icon: <TeamOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      taxImplications: "Tenants in common allows unequal equity shares (e.g., 90/10) to direct taxable rental income or deductions, while preserving proportional CGT liability on sale.",
    },
    {
      title: "Discretionary (Family) Trusts",
      icon: <ApartmentOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      taxImplications: "Trustee determines annual net income distribution to beneficiaries. 50% CGT discount passed through to individuals. Losses are trapped within the trust.",
    },
    {
      title: "Company Structures",
      icon: <BankOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
      taxImplications: "Taxed at corporate rates (25% or 30%). Ineligible for the 50% CGT discount. Useful in specific commercial scenarios or corporate beneficiary integration.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 relative border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="green" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Structural Alignment
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Ownership and Structure Considerations
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Ownership affects who returns rental income, who claims relevant expenses and who may later make a capital gain or loss. Joint ownership, companies and trusts can each produce different tax, legal and administrative outcomes.
          </p>
          <p className="mt-3 text-xs sm:text-sm text-slate-500 dark:text-zinc-400 leading-relaxed font-normal">
            Financially Up can provide tax and accounting input on ownership options, but property title, asset-protection, estate-planning and legal consequences should be considered with an appropriately qualified legal adviser before a structure is established or changed.
          </p>
        </div>

        {/* 4 Structures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-10">
          {structureTypes.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:border-emerald-400/60 transition-colors flex items-start gap-4"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-100 dark:border-emerald-800/40 flex items-center justify-center shrink-0">
                {item.icon}
              </div>
              <div className="space-y-1.5">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-normal leading-relaxed">
                  {item.taxImplications}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Legal Boundary Notice */}
        <div className="rounded-2xl bg-blue-50/80 dark:bg-blue-950/30 border border-blue-200/80 dark:border-blue-800/50 p-5 sm:p-6 flex items-start gap-3.5 w-full">
          <InfoCircleOutlined className="text-blue-600 dark:text-blue-400 text-lg mt-0.5 shrink-0" />
          <p className="text-xs sm:text-sm text-blue-900 dark:text-blue-200 leading-relaxed font-normal">
            <strong>Legal &amp; Title Consultation Required:</strong> While Financially Up evaluates the Australian taxation outcomes of property structures, transferring property title, amending deeds, or formalising trust establishments requires qualified legal representation to avoid unintended stamp duty or adverse asset protection consequences.
          </p>
        </div>
      </div>
    </section>
  );
}
