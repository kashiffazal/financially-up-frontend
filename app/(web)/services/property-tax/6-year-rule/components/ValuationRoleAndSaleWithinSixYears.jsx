"use client";

import React from "react";
import { Alert } from "antd";
import { DollarCircleOutlined, CheckCircleFilled, CalendarOutlined, FileTextOutlined } from "@ant-design/icons";

/**
 * ValuationRoleAndSaleWithinSixYears Component
 * Details the role of market valuations (Section 118-192), selling within 6 years,
 * and contract exchange date as the operative CGT event date.
 */
export default function ValuationRoleAndSaleWithinSixYears() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Valuations & Timing
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Market Valuations and Selling Within the 6-Year Window
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Understanding how property market valuations interact with the absence rule ensures you don't overpay tax or misreport eligible capital gains.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Selling Within 6 Years */}
          <div className="bg-emerald-50/40 rounded-2xl p-7 sm:p-8 border border-emerald-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold">
                  <CheckCircleFilled />
                </span>
                <h3 className="text-xl font-bold text-slate-900">Sold Within Six Years</h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                If you lived in the property as your genuine main residence, moved out, leased it to tenants, and executed a sale contract within six years of the first rental day, you may elect to treat it as your main residence for the entire absence.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Assuming all other conditions are satisfied and no competing main residence exemption is claimed for another property, this produces a <strong>100% tax-free sale with zero CGT payable</strong>.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-emerald-200 text-xs font-bold text-emerald-800 uppercase tracking-wider">
              100% Capital Gains Exemption Achieved
            </div>
          </div>

          {/* When Valuation Matters */}
          <div className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="w-10 h-10 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center text-xl font-bold">
                  <DollarCircleOutlined />
                </span>
                <h3 className="text-xl font-bold text-slate-900">When Market Valuation Matters</h3>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                When a former home was first rented after 20 August 1996 and the eventual sale is only <em>partially exempt</em> (e.g. because rental absence exceeded 6 years or you claimed another home), Section 118-192 resets your cost base to market value on that first rental date.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                However, if the property is 100% exempt under the 6-year rule, that deemed market value reset does not create a tax calculation.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-bold text-slate-600 uppercase tracking-wider">
              Essential Safeguard for Partial Claims
            </div>
          </div>
        </div>

        <Alert
          type="warning"
          showIcon
          icon={<CalendarOutlined className="text-amber-600 text-xl" />}
          title="Contract Date is the Critical CGT Event Date"
          description={
            <div className="text-slate-700 text-sm leading-relaxed mt-1">
              The CGT event for a property disposal occurs on the date the contract of sale is signed and exchanged by both parties, not the subsequent settlement date. This contract exchange date must fall within the 6-year window to ensure full exemption.
            </div>
          }
          className="border border-amber-200 bg-amber-50/60 rounded-xl p-5"
        />
      </div>
    </section>
  );
}
