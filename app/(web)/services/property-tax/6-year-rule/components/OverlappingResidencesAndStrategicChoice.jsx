"use client";

import React from "react";
import { SwapOutlined, CheckCircleOutlined, CalculatorOutlined } from "@ant-design/icons";

/**
 * OverlappingResidencesAndStrategicChoice Component
 * Explains the prohibition against claiming two main residences concurrently
 * and the strategic election required between retaining the old home or claiming the new home.
 */
export default function OverlappingResidencesAndStrategicChoice() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Strategic Election
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            You Generally Cannot Claim Two Main Residences for the Same Period
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Australian tax law generally permits only one main residence exemption per family unit at any single point in time. Choosing to cover your old home affects your new home.
          </p>
        </div>

        <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 sm:p-12 shadow-xl mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-emerald-500/20 text-emerald-300 px-3.5 py-1 rounded-full text-xs font-semibold mb-6 border border-emerald-400/30">
                <SwapOutlined />
                <span>The Dual-Home Dilemma</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
                A Strategic Choice, Not an Automatic Default
              </h3>
              <p className="text-slate-300 text-base leading-relaxed mb-4">
                If you buy a second home and move into it while continuing to rent out your former home, you face a genuine statutory choice. If you elect to apply the six-year rule to keep your former home fully exempt, your new home will accrue a partial CGT exposure for those overlapping years.
              </p>
              <p className="text-slate-300 text-base leading-relaxed">
                The best tax outcome cannot be deduced simply from headline purchase prices or current market values. Acquisition dates, capital growth trajectories, ownership duration, and long-term sale intentions must be mathematically evaluated.
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CalculatorOutlined className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Capital Growth Modelling</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      Compare actual or projected capital gains between the former home and the newly acquired residence to determine where the exemption provides maximum dollar savings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-5">
                <div className="flex items-start gap-3">
                  <CheckCircleOutlined className="text-emerald-400 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-white text-base">Timing of the Election</h4>
                    <p className="text-slate-300 text-sm mt-1">
                      You do not have to notify the ATO when you move out. The formal choice is made on the tax return for the income year in which the first property is sold.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
