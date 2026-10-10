"use client";

import React from "react";
import { Tag } from "antd";
import {
  CheckCircleOutlined,
  InfoCircleOutlined,
  AlertOutlined,
} from "@ant-design/icons";

/**
 * KeyBareTrustTaxConsiderations Component
 * =======================================
 * Section: Key tax and accounting considerations
 * Verbatim text from Page 4 of client docx (8th Pillar Trust Services.docx).
 * Features 7 key checklist considerations, the ATO transparent trust lodgement exemption,
 * and state duty / land tax legal considerations.
 */
export default function KeyBareTrustTaxConsiderations() {
  const considerations = [
    "Who is the legal owner and who is the beneficial owner of the asset.",
    "Whether the beneficiary is absolutely entitled to the asset and can direct the trustee in relation to it.",
    "Who derives income and incurs expenses connected with the asset.",
    "Whether GST applies and which entity is carrying on the relevant enterprise or making the relevant supply or acquisition.",
    "How financing, loan accounts, settlement adjustments and property expenses should be recorded.",
    "Whether a tax return or other lodgement is required for the trust arrangement or whether the relevant amounts belong in the beneficiary’s tax reporting.",
    "Whether a later transfer, sale, change of trustee or change in beneficial ownership may have tax or duty consequences.",
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Tax & Accounting Review
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Key tax and accounting considerations
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Evaluating a bare trust structure requires a thorough assessment of ownership rights, cash flows, and
            regulatory requirements across both trustee and beneficiary entities.
          </p>
        </div>

        {/* 7 Consideration Bullets */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-12">
          {considerations.map((text, idx) => (
            <div
              key={idx}
              className="p-5 sm:p-6 rounded-2xl bg-slate-50/70 dark:bg-zinc-800/80 border border-slate-200/80 dark:border-zinc-700/80 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-teal-50 dark:bg-teal-950/50 border border-teal-200 dark:border-teal-800/60 flex items-center justify-center shrink-0 mt-0.5">
                <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 text-sm" />
              </div>
              <p className="text-xs sm:text-sm text-slate-700 dark:text-zinc-200 leading-relaxed font-normal">
                {text}
              </p>
            </div>
          ))}
        </div>

        {/* Verbatim Fact-Dependent & ATO Exemption Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-brand-bg-lighter via-white to-slate-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-zinc-950 border border-slate-200 dark:border-zinc-800 shadow-sm space-y-4">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 flex items-center justify-center shrink-0">
              <InfoCircleOutlined className="text-lg text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900 dark:text-white">
                ATO Lodgement Exemption & Statutory Realities
              </h4>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                These points are fact-dependent. Trustees generally have annual trust-return obligations, but the ATO
                provides a limited lodgement exemption for certain transparent trusts and secured-purchase trusts where
                the applicable conditions are met. A return may still be required if the trustee has a relevant tax
                liability or the exemption otherwise does not apply. State or territory duty and land-tax matters may
                also require separate specialist or legal advice.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
