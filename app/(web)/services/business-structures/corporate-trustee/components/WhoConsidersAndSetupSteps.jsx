"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CheckCircleOutlined,
  ArrowRightOutlined,
  BankOutlined,
  TeamOutlined,
  IdcardOutlined,
} from "@ant-design/icons";

/**
 * WhoConsidersAndSetupSteps Component
 * Covers 'Who may consider a corporate trustee setup?' and 'What does corporate trustee company setup involve?'
 * from Page 7 of 6th Pillar Business Structures.docx.
 */
export default function WhoConsidersAndSetupSteps() {
  const targetGroups = [
    {
      title: "Family Wealth Groups",
      desc: "Family groups establishing discretionary trusts for intergenerational wealth planning.",
    },
    {
      title: "Property & Investment Structures",
      desc: "Entities acquiring property or shares requiring clear, long-term legal ownership.",
    },
    {
      title: "Business Operators",
      desc: "Trading trusts operating commercial businesses where personal liability insulation is vital.",
    },
    {
      title: "Existing Trust Reviews",
      desc: "Established trusts transitioning from individual human trustees to a corporate entity.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/70 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Part 1: Who may consider */}
        <div className="mb-16">
          <div className="max-w-3xl mb-10">
            <Tag color="cyan" className="brand-section-tag font-bold tracking-wider uppercase text-xs mb-3">
              Application & Relevance
            </Tag>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
              Who may consider a corporate trustee setup?
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              A corporate trustee may be considered when establishing a new trust or when reviewing how an existing trust is administered. It is commonly relevant to family groups, property or investment structures, business owners and other arrangements where a trust is part of the ownership or operating structure.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {targetGroups.map((group, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs"
              >
                <div className="w-10 h-10 rounded-xl bg-teal-50 dark:bg-teal-950/40 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                  <TeamOutlined className="text-lg" />
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {group.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {group.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Part 2: What does setup involve? */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-xs">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  <BankOutlined className="text-xl" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  What does corporate trustee company setup involve?
                </h3>
              </div>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                A corporate trustee company setup usually begins with confirming that a company is appropriate for the proposed trustee role. If a new company is required, it must be registered with ASIC. The proposed directors must understand their company-law responsibilities, and people who are required to have a director identification number must apply for their own director ID.
              </p>

              <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                The trust itself is then established or reviewed under its trust deed. A trust is not registered with ASIC as a company, although a company acting as trustee is registered on the companies register. If the trust carries on an enterprise, it may be entitled to an ABN, and a trust should generally have its own TFN for its tax affairs. These registrations are made by the trustee in its capacity as trustee and are separate from any registration the trustee company may need in its own right.
              </p>

              <div className="pt-2 space-y-2 text-sm">
                <p className="text-slate-600 dark:text-zinc-300">
                  If you also need the company itself established, see our{" "}
                  <Link
                    href="/services/business-structures/company-registration"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    Company Registration service
                    <ArrowRightOutlined className="text-xs" />
                  </Link>
                  .
                </p>

                <p className="text-slate-600 dark:text-zinc-300">
                  If the broader question is whether a company trustee fits the intended ownership and operating structure, our{" "}
                  <Link
                    href="/services/business-structures/business-structure-advice"
                    className="font-semibold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1"
                  >
                    Business Structure Advice page
                    <ArrowRightOutlined className="text-xs" />
                  </Link>{" "}
                  explains the factors that may need to be reviewed before setup.
                </p>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/60 border border-slate-200 dark:border-zinc-700/80 space-y-3">
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  Dual Registration Structure:
                </h4>
                <div className="space-y-2 text-xs text-slate-600 dark:text-zinc-300">
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-700">
                    <strong className="text-slate-900 dark:text-white block mb-0.5">Trustee Company (Pty Ltd)</strong>
                    <span>Registered with ASIC. Holds ACN. Acts as legal representative.</span>
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-700">
                    <strong className="text-slate-900 dark:text-white block mb-0.5">The Trust Relationship</strong>
                    <span>Established by Trust Deed. Holds TFN & ABN in trustee capacity.</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
