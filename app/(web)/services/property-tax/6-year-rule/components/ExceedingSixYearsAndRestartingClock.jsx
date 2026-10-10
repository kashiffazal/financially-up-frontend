"use client";

import React from "react";
import { WarningOutlined, RedoOutlined, AlertOutlined } from "@ant-design/icons";

/**
 * ExceedingSixYearsAndRestartingClock Component
 * Examines what happens when rental absence surpasses 6 years and the legal
 * requirements to legitimately reset the 6-year absence clock.
 */
export default function ExceedingSixYearsAndRestartingClock() {
  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Exceeding 6 Years */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center text-2xl mb-6">
                <WarningOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                What Happens After Six Years of Rental Use?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                If an income-producing absence continues past six continuous years and you do not move back in, the exemption automatically ceases on the 6th anniversary of the rental commencement. A subsequent sale will be partly exempt and partly taxable.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                The taxable portion is not calculated by simply taking the gain after the 6-year date. Instead, it is governed by statutory apportionment: days beyond the 6-year period divided by the total relevant ownership or market-value deemed acquisition days, multiplied by the overall net capital gain.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Eligible individuals remain entitled to the 50% CGT discount on the taxable portion provided the asset was owned for at least 12 months.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Statutory Proportional Apportionment
            </div>
          </div>

          {/* Restarting the Clock */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-6">
                <RedoOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Can the Six-Year Period Restart?
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Yes. Where you physically move back into the dwelling and genuinely re-establish it as your main residence, and subsequently move out again, a brand new six-year income-producing absence period can potentially commence.
              </p>
              <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-4 mb-4">
                <div className="flex items-start gap-3">
                  <AlertOutlined className="text-amber-700 text-lg mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-amber-900 text-sm">No Artificial "Short Visits"</h4>
                    <p className="text-amber-800 text-xs leading-relaxed mt-1">
                      There is no magic rule that spending a few weeks or a vacation at the property resets the clock. The ATO requires verifiable proof of genuine domestic resumption: reconnecting personal utilities, moving personal furniture back, and updating electoral enrolments.
                    </p>
                  </div>
                </div>
              </div>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Financially Up assists clients in documenting substantive occupancy evidence to withstand potential ATO scrutiny upon subsequent sale.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Genuine Re-Establishment Required
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
