"use client";

import React from "react";
import { CheckCircleOutlined } from "@ant-design/icons";

/**
 * WhoNeedsNegativeGearingAccountant Component
 * Highlights investor scenarios requiring negative gearing accounting advice.
 */
export default function WhoNeedsNegativeGearingAccountant() {
  const investorScenarios = [
    {
      title: "Multiple or Mixed Rental Portfolios",
      desc: "Owners with both positively and negatively geared properties across Australia, where each asset must maintain independent, verifiable accounting ledgers.",
    },
    {
      title: "Refinanced Mortgages & Redraws",
      desc: "Investors who have refinanced existing loans, accessed redraw facilities, or used loan splits where tracing the exact purpose of borrowed capital is required.",
    },
    {
      title: "Private Loan Borrowing Contamination",
      desc: "Scenarios where loan funds were partly used for personal cars, renovations to private residences, or holidays, creating mixed-purpose debts requiring interest apportionment.",
    },
    {
      title: "Conversion of Former Homes to Rentals",
      desc: "Properties previously occupied as a main residence and converted into rental investments, requiring initial market valuations and CGT cost base resetting.",
    },
    {
      title: "Joint & Co-Ownership Structures",
      desc: "Properties purchased with spouses, business partners, or family members where legal ownership percentages govern the distribution of rental deductions.",
    },
    {
      title: "Major Repairs, Renovations & Improvements",
      desc: "Investors who incurred significant works and need accurate classification between immediate deductible maintenance, capital works write-offs, and capital improvements.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Investor Scenarios
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Who May Need a Negative Gearing Accountant?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Professional support is crucial when loan structures, property history, or renovations make your actual tax position look very different from your bank account balance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investorScenarios.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-emerald-500/50 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircleOutlined className="text-emerald-600 text-lg shrink-0" />
                  <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-white rounded-xl p-6 sm:p-8 border border-emerald-200/80 shadow-sm text-center max-w-4xl mx-auto">
          <p className="text-slate-700 font-medium text-base sm:text-lg">
            Professional accounting ensures that every single dollar claimed as a rental deduction is substantiated, defendable under ATO scrutiny, and correctly reported across all co-owners.
          </p>
        </div>
      </div>
    </section>
  );
}
