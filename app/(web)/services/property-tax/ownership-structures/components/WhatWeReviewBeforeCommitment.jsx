"use client";

import React from "react";
import { useCompany } from "@/context/SettingsContext";
import {
  FileSearchOutlined,
  QuestionCircleOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
  FolderOpenOutlined,
} from "@ant-design/icons";

/**
 * WhatWeReviewBeforeCommitment Component
 * Details the 6-point property acquisition structuring checklist and firm credentials.
 */
export default function WhatWeReviewBeforeCommitment() {
  const company = useCompany();

  const checklistQuestions = [
    "What property will be acquired, and in which Australian state or territory?",
    "Will it be leased as a residential rental, used by an operating business, developed, or subdivided?",
    "Who will provide the cash deposit, equity, and service ongoing bank debt?",
    "Who is intended to receive net rental income and claim negative gearing deductions?",
    "What are the anticipated holding timeframe, ultimate exit strategy, and family succession plans?",
    "Are there existing family trusts, corporate beneficiary buckets, or related-party debt structures?",
  ];

  const documentsNeeded = [
    "Draft contract for sale of land and vendor Section 32 / disclosure statements",
    "Proposed purchaser entity details and percentage ownership splits",
    "Lender pre-approval terms, loan borrowing capacity, and servicing guarantees",
    "Trust deeds, variations, and corporate trustee constitutions for existing trusts",
    "Company ASIC extracts and current company register documents",
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Core Review Questions */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Structuring Review
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            What We Review Before You Commit
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            A property structuring review starts with the practical commercial and financial realities you actually face:
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {checklistQuestions.map((q, idx) => (
              <div key={idx} className="flex items-start gap-3.5 p-4 bg-slate-50 rounded-xl border border-slate-100">
                <span className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  {idx + 1}
                </span>
                <span className="text-slate-800 text-sm sm:text-base font-medium">{q}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bring to the Meeting */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FolderOpenOutlined className="text-2xl text-emerald-600" />
            <h3 className="text-2xl font-bold text-slate-900">What to Bring to Your Structuring Review</h3>
          </div>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            Bring the draft contract, proposed ownership details, borrowing information, and existing documents. We compare tax and accounting implications and coordinate seamlessly with your solicitor and lender:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {documentsNeeded.map((doc, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-100">
                <FileSearchOutlined className="text-emerald-600 text-base shrink-0 mt-0.5" />
                <span className="text-slate-700 text-sm">{doc}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Financially Up */}
        <div className="bg-emerald-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-emerald-900">
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-widest bg-emerald-900/60 px-3.5 py-1 rounded-full border border-emerald-700/50">
              Registered Tax Agent
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-4">
              Why Choose {company?.legalName || "Financially Up"}?
            </h3>
            <p className="text-emerald-200 text-sm sm:text-base mt-3 leading-relaxed">
              {company?.legalName || "Financially Up"} is a registered tax agent with more than 10 years of experience. Our professional accounting and tax team includes CPA and IPA members, supporting clients Australia-wide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <TeamOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">CPA & IPA Certified</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Deep expertise in entity tax structuring, trust deeds, corporate tax, and CGT discounts.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <SafetyCertificateOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">10+ Years Experience</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Strategic advice across high-value residential portfolios, commercial assets & developments.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <GlobalOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">Australia-Wide Service</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Convenient online video consultations and in-person appointments for clients across all states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
