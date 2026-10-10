"use client";

import React from "react";
import { Alert } from "antd";
import { CheckOutlined, CloseOutlined, WarningOutlined } from "@ant-design/icons";

/**
 * RentalLossesDeductibleExpenses Component
 * Contrasts allowable rental operating deductions vs non-deductible or capital expenses,
 * highlighting private-use apportionment rules.
 */
export default function RentalLossesDeductibleExpenses() {
  const deductibleItems = [
    "Loan interest on funds used to purchase or improve the rental",
    "Council rates, water rates, and government charges",
    "Property management fees, leasing commissions, and advertising",
    "Landlord insurance, building, and public liability premiums",
    "Routine gardening, pest control, and standard cleaning",
    "Body corporate fees and strata administrative fund levies",
    "Legitimate ongoing repairs arising during income-producing periods",
  ];

  const nonDeductibleItems = [
    "Loan principal repayments reducing your mortgage balance",
    "Initial repairs to rectify defects existing at the time of purchase",
    "Full capital expenditure on renovations and structural improvements",
    "Borrowing expenses on private loans secured against the rental",
    "Travel expenses to inspect residential investment properties",
    "Private living costs and non-income related outgoings",
    "Subsidised losses from non-commercial rent charged to family/friends",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Deduction Rules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Rental Losses Are Based on Deductible Expenses, Not Cash Flow
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            A common mistake is treating every payment made towards a property as an automatic tax deduction. Tax treatment strictly depends on what each expense was incurred for.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Allowable Deductions */}
          <div className="bg-emerald-50/40 border border-emerald-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-emerald-950 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 text-sm font-bold">
                ✓
              </span>
              Generally Deductible Operating Expenses
            </h3>
            <p className="text-emerald-800 text-sm mb-6">
              Claimable when the property is tenanted or genuinely available for rent at market rates:
            </p>
            <ul className="space-y-3.5">
              {deductibleItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 text-sm">
                  <CheckOutlined className="text-emerald-600 font-bold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Non-Deductible / Capital Items */}
          <div className="bg-rose-50/40 border border-rose-200 rounded-2xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-rose-950 mb-3 flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-rose-100 flex items-center justify-center text-rose-700 text-sm font-bold">
                ✕
              </span>
              Non-Deductible or Capital Outgoings
            </h3>
            <p className="text-rose-800 text-sm mb-6">
              Expenditures that cannot be claimed as immediate deductions against ordinary rental income:
            </p>
            <ul className="space-y-3.5">
              {nonDeductibleItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-slate-800 text-sm">
                  <CloseOutlined className="text-rose-500 font-bold shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Private Use & Non-Commercial Rent Alert */}
        <Alert
          type="warning"
          showIcon
          icon={<WarningOutlined className="text-amber-600 text-xl" />}
          title="Private Use, Holiday Homes & Non-Commercial Leases"
          description={
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed mt-1">
              If a property is used privately for part of the year, rented to family or friends on non-commercial terms (below genuine market rates), or not actively marketed and genuinely available for rent, deductions must be proportionally restricted or capped at rental income received. Our accountants review the underlying facts to prevent ATO non-compliance.
            </div>
          }
          className="border border-amber-200 bg-amber-50/60 rounded-xl p-5"
        />
      </div>
    </section>
  );
}
