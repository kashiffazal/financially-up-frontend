"use client";

import React from "react";
import { SwapOutlined, ShopOutlined, LaptopOutlined } from "@ant-design/icons";

/**
 * BuyingBeforeSellingAndPartialUse Component
 * Covers overlapping homes during a move and income-earning activities within a family residence.
 */
export default function BuyingBeforeSellingAndPartialUse() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Overlapping Homes Concession */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center text-2xl mb-6">
                <SwapOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Buying Another Home Before Selling the Old One
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                There are limited statutory rules that can allow two dwellings to be treated as your main residence for an overlapping period of up to 6 months when moving from one home to another, provided the old home was your main residence for at least 3 continuous months in the 12 months prior and was not used to produce income during that 12-month period.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Outside those strict rules, you generally cannot treat two properties as your main residence for the same period. Where there is a long overlap, a former home is rented out, or you must choose which property receives the exemption for a period, the CGT outcome should be evaluated strategically before lodging tax returns.
              </p>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Section 118-140 Moving Between Homes Concession
            </div>
          </div>

          {/* Income-Producing Use Inside the Home */}
          <div className="bg-white rounded-2xl p-7 sm:p-9 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-2xl mb-6">
                <ShopOutlined />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                Using Part of Your Home to Earn Income
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                Using part of a home to produce assessable income directly impacts the exemption for that specific portion. This situation typically arises when you rent out a bedroom, operate short-stay accommodation (e.g. Airbnb), or designate an exclusive area as a place of business where mortgage interest is or could be deductible.
              </p>
              <div className="bg-slate-50 rounded-xl p-4 border border-slate-200 mb-4">
                <div className="flex items-start gap-3">
                  <LaptopOutlined className="text-emerald-600 text-xl mt-0.5 shrink-0" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">Working From Home vs. Place of Business</h4>
                    <p className="text-slate-600 text-xs leading-relaxed mt-1">
                      Occasionally working remotely from home on salary does not automatically forfeit CGT exemption. The CGT clawback strictly targets areas with "place of business" status where interest deductibility applies.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 pt-5 border-t border-slate-100 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Floorspace & Time Apportionment Rules Apply
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
