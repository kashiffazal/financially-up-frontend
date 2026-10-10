"use client";

import React from "react";
import { useCompany } from "@/context/SettingsContext";
import {
  AuditOutlined,
  HistoryOutlined,
  CalculatorOutlined,
  FolderOpenOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * WhatFinanciallyUpReviewsSixYearRule Component
 * Outlines professional advice scope, records required for the 6-year absence rule,
 * and credentials (Registered Tax Agent, CPA/IPA qualified, 10+ years experience).
 */
export default function WhatFinanciallyUpReviewsSixYearRule() {
  const company = useCompany();

  const services = [
    {
      icon: <HistoryOutlined className="text-2xl text-emerald-600" />,
      title: "Timeline & Occupancy Reconstruction",
      desc: "Detailed audit of move-in dates, rental lease commencement dates, tenant turnover, and proof of genuine main residence establishment.",
    },
    {
      icon: <CalculatorOutlined className="text-2xl text-blue-600" />,
      title: "Dual-Residence Choice Modelling",
      desc: "Comparative modelling of capital growth between your former home and newly occupied dwellings to identify the most tax-advantageous main residence election.",
    },
    {
      icon: <AuditOutlined className="text-2xl text-purple-600" />,
      title: "Statutory Apportionment & Reporting",
      desc: "Exact calculation of taxable vs exempt days where rental absence exceeded six continuous years, including 50% CGT discount calculations.",
    },
  ];

  const recordsList = [
    "Original purchase contract, vendor statement, and settlement adjustment sheet",
    "Sale contract showing contract exchange date and settlement adjustment statement",
    "Evidence of move-in date (utility connection notices, electoral enrolment, mail updates)",
    "Tenancy agreements and annual rental statements from property management agents",
    "Evidence of move-out dates and records of any secondary periods moving back into the property",
    "Details and purchase dates of any other home owned or occupied during the absence period",
    "Professional kerbside or certified valuation report on the date the property was first rented",
    "Loan statements, council rates, and insurance notices over the relevant ownership period",
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scope of Assistance */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Professional Guidance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            How {company?.legalName || "Financially Up"} Can Help
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            The six-year rule is a fact-sensitive CGT provision. Our approach is to establish the timeline first, identify the available choices, and calculate the exact tax reporting position without overstating the exemption.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 bg-slate-50 w-fit rounded-xl border border-slate-100 mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Records to Prepare */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FolderOpenOutlined className="text-2xl text-emerald-600" />
            <h3 className="text-2xl font-bold text-slate-900">
              Records to Prepare for 6-Year Rule Advice
            </h3>
          </div>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            Gathering comprehensive records ensures that every eligible day of absence is substantiated and defendable under Australian Taxation Office review:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {recordsList.map((rec, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3 bg-slate-50 rounded-xl border border-slate-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span className="text-slate-700 text-sm">{rec}</span>
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
              {company?.legalName || "Financially Up"} is a registered tax agent with more than 10 years of experience across Australian taxation and property accounting. Our team includes CPA and IPA professionals supporting clients Australia-wide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <TeamOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">CPA & IPA Certified</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Expert knowledge of Section 118-145 absence rules, election choices, and cost base rules.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <SafetyCertificateOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">10+ Years Experience</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Hundreds of complex capital gains tax returns, valuation reconciliations, and audit reviews.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <GlobalOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">Australia-Wide Service</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Convenient online video consultations and in-person meetings for clients across all states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
