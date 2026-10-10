"use client";

import React from "react";
import { ToolOutlined, HomeOutlined, ApartmentOutlined } from "@ant-design/icons";

/**
 * RepairsVsCapitalWorksGearing Component
 * Outlines the critical classification between immediate deductible repairs,
 * capital works deductions, and capital base additions.
 */
export default function RepairsVsCapitalWorksGearing() {
  const categories = [
    {
      icon: <ToolOutlined className="text-2xl text-emerald-600" />,
      title: "Immediate Repairs & Maintenance",
      badge: "100% Tax Year Deduction",
      badgeColor: "bg-emerald-50 text-emerald-700 border-emerald-200",
      description:
        "Deductible in full within the financial year incurred when they relate to ordinary wear and tear, breakdown, or accidental damage arising while the property is actively rented or tenanted.",
      examples: [
        "Replacing broken window panes or leaking tap washers",
        "Repairing storm-damaged fence palings or roof tiles",
        "Electrical or plumbing servicing and routine repairs",
      ],
    },
    {
      icon: <ApartmentOutlined className="text-2xl text-blue-600" />,
      title: "Depreciating Assets (Plant & Equipment)",
      badge: "Division 40 Decline in Value",
      badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
      description:
        "Removable mechanical or electronic items that decline in value over their effective statutory lifespan under Division 40 rules.",
      examples: [
        "New air conditioners, hot water systems, and solar panels",
        "Stoves, cooktops, ovens, and rangehoods",
        "New carpets, vinyl flooring, and window blinds",
      ],
    },
    {
      icon: <HomeOutlined className="text-2xl text-amber-600" />,
      title: "Capital Works & Initial Repairs",
      badge: "Division 43 (2.5% p.a.) or CGT Base",
      badgeColor: "bg-amber-50 text-amber-700 border-amber-200",
      description:
        "Structural improvements, additions, or initial repairs to fix pre-existing defects present when acquiring the property cannot be claimed immediately.",
      examples: [
        "Initial repairs carried out shortly after purchase",
        "Complete kitchen or bathroom remodels and structural extensions",
        "Retaining walls, driveways, pergolas, and new roof structures",
      ],
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Expenditure Classification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Repairs, Capital Works and Depreciating Assets
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            The ATO actively audits property claims for misclassified capital expenditure. Incorrectly claiming initial repairs or improvements as immediate deductions can overstate rental losses and trigger severe penalties.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {categories.map((cat, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">{cat.icon}</div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${cat.badgeColor}`}>
                    {cat.badge}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{cat.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">{cat.description}</p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-2">
                  Typical Examples
                </span>
                <ul className="space-y-1.5 text-xs sm:text-sm text-slate-700">
                  {cat.examples.map((ex, exIdx) => (
                    <li key={exIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shrink-0" />
                      <span>{ex}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center text-slate-600 text-sm sm:text-base max-w-3xl mx-auto">
          Financially Up conducts item-by-item invoice reviews of major property expenditure to ensure deductions are claimed strictly under their compliant legislative category.
        </div>
      </div>
    </section>
  );
}
