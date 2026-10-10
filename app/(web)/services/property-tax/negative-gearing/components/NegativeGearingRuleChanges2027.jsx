"use client";

import React from "react";
import { ClockCircleOutlined, CheckCircleFilled, ExclamationCircleFilled, CalendarOutlined } from "@ant-design/icons";

/**
 * NegativeGearingRuleChanges2027 Component
 * Details the legislated reforms effective 1 July 2027, grandfathering rules,
 * qualifying new residential build exemptions, and quarantine rules for established homes.
 */
export default function NegativeGearingRuleChanges2027() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-amber-800 text-sm font-semibold tracking-wider uppercase bg-amber-50 px-3.5 py-1.5 rounded-full border border-amber-200">
            Legislative Update
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Negative Gearing Rules Change from 1 July 2027
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            The treatment of residential rental losses changes from 1 July 2027. Understanding the cutoff dates, exemptions, and ring-fencing provisions is vital for existing and future property investors.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 via-slate-850 to-slate-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-800 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-400/20 text-amber-300 px-3.5 py-1 rounded-full text-xs font-semibold mb-6 border border-amber-400/30">
                <ClockCircleOutlined />
                <span>Effective 1 July 2027</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-5 leading-tight">
                Grandfathering & Ring-Fencing Framework
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                Properties held at <strong className="text-white font-semibold">7:30 pm AEST on 12 May 2026</strong> are grandfathered from the negative-gearing restriction, and qualifying new residential builds can continue to access full negative gearing against other assessable income.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                For established residential property acquired after that time, losses arising from <strong className="text-white font-semibold">1 July 2027</strong> generally cannot reduce non-residential income such as salary. They may instead be applied against residential property income, including relevant capital gains, with excess amounts carried forward under the new rules.
              </p>
            </div>

            <div className="flex flex-col justify-center space-y-4">
              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircleFilled className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Grandfathered Properties</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Properties held at or before 7:30 pm AEST on 12 May 2026 remain fully eligible to offset salary and other personal income.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircleFilled className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Qualifying New Builds</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      New residential builds continue to access negative gearing deductions against all forms of assessable personal income.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/80 border border-slate-700/80 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <ExclamationCircleFilled className="text-amber-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Post-Cutoff Established Properties</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Losses can only offset residential rental income and property CGT, with unused excess losses carried forward into future tax years.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-slate-400 text-sm">
              <CalendarOutlined className="text-amber-400 text-base" />
              <span>
                <strong className="text-white">Note for Current Returns:</strong> These reforms do not apply to the 2025–26 tax return.
              </span>
            </div>
            <p className="text-slate-400 text-xs sm:text-sm text-right">
              Acquisition dates and property classifications should be formally documented now.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
