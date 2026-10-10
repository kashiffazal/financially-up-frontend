"use client";

import React from "react";
import { Alert } from "antd";
import { HistoryOutlined, LineChartOutlined, FileProtectOutlined, QuestionCircleOutlined } from "@ant-design/icons";

/**
 * HomeFirstUsedToProduceIncomeRule Component
 * Explains section 118-192 ITAA 1997 market valuation reset rule when a main residence
 * is converted into an income-producing asset.
 */
export default function HomeFirstUsedToProduceIncomeRule() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Section 118-192 Special Rule
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            The Home First Used to Produce Income Rule
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Where a home first begins producing income after 20 August 1996, the statutory market-value reset rule can substantially alter your future CGT cost base.
          </p>
        </div>

        <div className="bg-gradient-to-br from-emerald-900 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-semibold mb-6 border border-emerald-400/30">
                <HistoryOutlined />
                <span>Statutory Market Value Reset</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                Deemed Acquisition at Market Value
              </h3>
              <p className="text-slate-200 text-base leading-relaxed mb-4">
                Broadly, this rule applies where a later sale would be only partly exempt and a full main residence exemption would have been available if the home had been sold immediately before its first income-producing use.
              </p>
              <p className="text-slate-200 text-base leading-relaxed">
                When all statutory conditions are met, the property is treated for future CGT purposes as having been acquired at its <strong>market value on that exact change-of-use date</strong>, rather than its historical original purchase price.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <LineChartOutlined className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Protects Prior Capital Growth</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      All capital growth accumulated while you lived in the home remains 100% tax-free. Only future capital growth above the market valuation is subject to CGT.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <FileProtectOutlined className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Contemporaneous Valuation Essential</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Because this valuation materially sets the baseline for future CGT calculations, obtaining a professional valuation or kerbside market appraisal at the change date is critical.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <QuestionCircleOutlined className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Does Not Apply to Initial Rentals</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      This rule does not apply if the property was rented immediately upon purchase before you moved in, or if you validly continue full exemption under the 6-year rule.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Alert
          type="info"
          showIcon
          title="Timing is Critical"
          description={
            <div className="text-slate-700 text-sm leading-relaxed mt-1">
              Attempting to reconstruct a retrospective property valuation many years later when the asset is finally sold can lead to ATO disputes and suboptimal cost base adjustments. Financially Up advises obtaining a formal valuation when the tenant first moves in.
            </div>
          }
          className="border border-blue-200 bg-blue-50/60 rounded-xl p-5"
        />
      </div>
    </section>
  );
}
