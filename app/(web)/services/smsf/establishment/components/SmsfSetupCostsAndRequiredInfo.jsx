"use client";

import React from "react";
import { Tag } from "antd";
import {
  FileTextOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

/**
 * SmsfSetupCostsAndRequiredInfo Component
 * =======================================
 * Implements verbatim SEO content from Page 3 of 9th Pillar SMSF.docx:
 * - SMSF setup fees and establishment costs (capital vs deductible treatment)
 * - What information is needed to set up an SMSF? (7 checklist items)
 */
export default function SmsfSetupCostsAndRequiredInfo() {
  const checklistItems = [
    {
      title: "Proposed fund name and intended members",
      desc: "Selecting the compliant legal fund name and confirming member identities (up to six members).",
    },
    {
      title: "Full identification and tax details for each proposed member/trustee",
      desc: "Tax File Numbers (TFN), dates of birth, residential addresses, and certified photo ID documents.",
    },
    {
      title: "The proposed individual-trustee or corporate-trustee structure",
      desc: "Confirmation of whether individual trustees or a dedicated proprietary corporate trustee will be established.",
    },
    {
      title: "Director ID information where a corporate trustee is being used",
      desc: "Verified Australian Director Identification Numbers for all proposed corporate trustee directors.",
    },
    {
      title: "Contact and address details for registrations",
      desc: "Principal place of business, formal registered office address, and primary contact details for ATO/ASIC registries.",
    },
    {
      title: "Information needed for the fund bank account and electronic service address",
      desc: "Authorized bank signatory mandates and choice of SuperStream Electronic Service Address (ESA) provider.",
    },
    {
      title: "Details of existing super funds if members later plan to request rollovers",
      desc: "Current superannuation fund names, member account numbers, and Australian Business Numbers (ABNs).",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <Tag color="orange" className="brand-section-tag mb-3 font-bold tracking-wider uppercase text-xs">
            Fee Structures & Prerequisites
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            SMSF setup fees and establishment costs
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            SMSF setup fees vary with the structure and work required. A corporate trustee generally has company-establishment and ongoing ASIC costs in addition to SMSF establishment work, while legal-document and specialist advice costs can also vary. We can confirm the service scope and applicable fees after reviewing the proposed setup.
          </p>
        </div>

        {/* Tax Deductibility Callout */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800/40 flex items-center justify-center shrink-0">
              <DollarOutlined className="text-2xl text-amber-600 dark:text-amber-400" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Tax Treatment of SMSF Establishment Costs
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                For tax purposes, establishment costs need to be distinguished from ordinary ongoing administration costs. The ATO notes that costs incurred to establish an SMSF or make lasting structural changes are generally capital in nature and are not deductible under the general deduction rules. The treatment of a particular cost depends on what the expenditure is actually for.
              </p>
            </div>
          </div>
        </div>

        {/* Required Information Checklist Section */}
        <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 dark:from-zinc-900 dark:to-emerald-950/20 rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-zinc-800">
          <div className="max-w-3xl mb-8">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800/40 flex items-center justify-center mb-3">
              <FileTextOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              What information is needed to set up an SMSF?
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
              Having these 7 core details organized simplifies the establishment workflow and avoids delays with the ATO or banking providers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
            {checklistItems.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-3.5 p-5 rounded-2xl bg-white dark:bg-zinc-950 border border-slate-200/80 dark:border-zinc-800 shadow-2xs hover:border-emerald-400/60 transition-colors"
              >
                <div className="w-7 h-7 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                  {idx + 1}
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
