"use client";

import React from "react";
import { Card } from "antd";
import { DollarOutlined, CalculatorOutlined, FileProtectOutlined, FallOutlined } from "@ant-design/icons";

/**
 * WhatDoesNegativeGearingMean Component
 * Explains the tax definition of negative gearing: deductible rental expenses exceeding rental income.
 */
export default function WhatDoesNegativeGearingMean() {
  const cards = [
    {
      icon: <FallOutlined className="text-2xl text-emerald-600" />,
      title: "Net Rental Loss Definition",
      description:
        "A property is commonly described as negatively geared when the income it earns is less than the deductible costs associated with earning that income. For tax purposes, the key figure is the net rental result calculated under statutory tax rules, not simply the difference between rent received and total cash outgoings.",
    },
    {
      icon: <DollarOutlined className="text-2xl text-amber-600" />,
      title: "Principal Repayments Are Non-Deductible",
      description:
        "Loan principal repayments are not a rental deduction. Only the interest component may be deductible to the extent borrowed funds were used for an income-producing purpose and all statutory requirements are satisfied.",
    },
    {
      icon: <CalculatorOutlined className="text-2xl text-blue-600" />,
      title: "Timing of Cost Deductions",
      description:
        "Some property costs are immediately deductible, while others must be written off over time (capital works and plant depreciation) or added to the property’s capital gains tax (CGT) cost base to reduce future tax when sold.",
    },
    {
      icon: <FileProtectOutlined className="text-2xl text-purple-600" />,
      title: "Not a Standalone Concession",
      description:
        "Negative gearing is not a separate discretionary tax concession. It simply describes a situation where allowable rental deductions exceed assessable rental income, producing a tax loss that may be offset against other income under current legislation.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Tax Mechanics
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            What Does Negative Gearing Mean for Tax?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Understanding the distinction between cash shortfall and allowable tax deductions is essential for compliant rental property reporting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-xl"
              styles={{ body: { padding: "28px" } }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
