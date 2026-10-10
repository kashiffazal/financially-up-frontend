"use client";

import React from "react";
import { useCompany } from "@/context/SettingsContext";
import {
  AuditOutlined,
  CalculatorOutlined,
  FolderOpenOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  GlobalOutlined,
} from "@ant-design/icons";

/**
 * WhatFinanciallyUpReviewsMainResidence Component
 * Explains how Financially Up assists home sellers, records required for CGT calculations,
 * and qualifications (Registered Tax Agent, CPA/IPA professionals, 10+ years experience).
 */
export default function WhatFinanciallyUpReviewsMainResidence() {
  const company = useCompany();

  const services = [
    {
      icon: <AuditOutlined className="text-2xl text-emerald-600" />,
      title: "Timeline & Occupancy Reconstruction",
      desc: "Detailed audit of purchase contract dates, settlement, moving-in dates, periods of private residency, absences, and tenant tenancy agreements.",
    },
    {
      icon: <CalculatorOutlined className="text-2xl text-blue-600" />,
      title: "Full vs. Partial Exemption Apportionment",
      desc: "Mathematical calculation of non-main-residence days, floor space apportionment, 6-year rule elections, and application of the 50% CGT discount.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-purple-600" />,
      title: "Cost Base & Valuation Verification",
      desc: "Application of statutory market-value reset rules (Section 118-192), acquisition expenses, capital improvement invoices, and holding cost additions.",
    },
  ];

  const recordsList = [
    "Original purchase contract, vendor statement, and settlement adjustment sheet",
    "Sale contract showing contract date (CGT event date) and settlement sheet",
    "Official proof of move-in and move-out dates (utility bills, AEC electoral records)",
    "Tenancy agreements and property management rental summaries for all lease periods",
    "Contemporaneous market valuation when the home was first rented out",
    "Invoices and receipts for major structural improvements, renovations, and extensions",
    "Records of holding costs (interest, rates, insurance) during non-income periods",
    "Evidence of business or Airbnb use, including floor plans and income records",
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Scope of Service */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Professional Approach
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            How {company?.legalName || "Financially Up"} Can Help
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Our work is fact-led. We do not assume a property is fully exempt simply because it was called a family home, and we do not assume a later rental period automatically creates tax. We review your actual timeline and apply the exact legislative rules.
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

        {/* Records Required */}
        <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-sm mb-16">
          <div className="flex items-center gap-3 mb-6">
            <FolderOpenOutlined className="text-2xl text-emerald-600" />
            <h3 className="text-2xl font-bold text-slate-900">
              Records a Home Sale CGT Accountant May Need
            </h3>
          </div>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            Where a home was owned for years, gathering these records before settlement or tax time prevents surprises and locks in cost-base additions that can save thousands in tax:
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
              {company?.legalName || "Financially Up"} is a registered tax agent with more than 10 years of experience across Australian property taxation and accounting. Our team includes CPA and IPA professionals supporting property owners nationwide.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <TeamOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">CPA & IPA Certified</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Deep technical mastery of CGT Division 118, Section 118-192 valuations, and absence rules.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <SafetyCertificateOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">10+ Years Experience</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Hundreds of complex property tax returns, audit defences, and private rulings handled.
              </p>
            </div>
            <div className="bg-emerald-900/40 border border-emerald-800 rounded-2xl p-6">
              <GlobalOutlined className="text-3xl text-emerald-400 mb-3" />
              <h4 className="text-lg font-bold text-white mb-1">Australia-Wide Service</h4>
              <p className="text-emerald-300 text-xs sm:text-sm">
                Seamless online consultations and in-person appointments for clients across all states.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
