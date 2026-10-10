"use client";

import React from "react";
import { ExclamationCircleOutlined, CalendarOutlined, PercentageOutlined, AppstoreOutlined } from "@ant-design/icons";

/**
 * WhenExemptionBecomesPartial Component
 * Explains how and why the main residence exemption transitions to a partial CGT liability.
 */
export default function WhenExemptionBecomesPartial() {
  const triggerScenarios = [
    {
      title: "Rented Before Moving In",
      desc: "Purchasing a property that was tenanted or let out before you moved in and established it as your genuine home. The earlier investment period is not covered.",
    },
    {
      title: "Part of the Home Used for Income",
      desc: "Operating a business from a dedicated room (where interest deductions could be claimed) or renting out rooms or granny flats on Airbnb or private leases.",
    },
    {
      title: "Moving Out Without 6-Year Rule",
      desc: "Vacating the home and either choosing not to apply the 6-year absence rule, or owning another home where you nominated the new property as your main residence.",
    },
    {
      title: "Absence Period Exceeded",
      desc: "Renting out the home while living elsewhere for longer than the statutory 6-year limit without moving back in to reset the clock.",
    },
    {
      title: "Overlapping Main Residences",
      desc: "Treating another dwelling as your main residence for an overlapping period outside the strict 6-month moving between homes concession.",
    },
    {
      title: "Complex Ownership Changes",
      desc: "Subdividing the backyard, transferring partial title to a partner, or inheriting a dwelling with mixed rental and private occupancy history.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Partial Exemptions
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            When Can the Main Residence Exemption Become Partial?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            If your property timeline involves mixed private and income-producing usage, statutory apportionment applies. Calculating the taxable portion requires precision.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {triggerScenarios.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl p-6 border border-slate-200 shadow-sm hover:border-emerald-500/50 hover:shadow-md transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <ExclamationCircleOutlined className="text-amber-500 text-lg shrink-0" />
                <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Calculation Formula Mechanics */}
        <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            How the ATO Calculates Partial CGT
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
              <CalendarOutlined className="text-2xl text-emerald-600 mb-2" />
              <h4 className="font-bold text-slate-900 mb-1">Non-Main-Residence Days</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                The exact number of days the property was used for income or not treated as your home divided by total ownership days.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
              <PercentageOutlined className="text-2xl text-blue-600 mb-2" />
              <h4 className="font-bold text-slate-900 mb-1">Floorspace Percentage</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                The proportion of the internal square metre floor area set aside for business, tenancy, or commercial activities.
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
              <AppstoreOutlined className="text-2xl text-purple-600 mb-2" />
              <h4 className="font-bold text-slate-900 mb-1">Statutory Cost Base Reset</h4>
              <p className="text-slate-600 text-xs sm:text-sm">
                Special rules (e.g. section 118-192) that substitute market valuation at the date of first income production.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
