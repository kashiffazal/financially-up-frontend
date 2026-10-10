"use client";

import React from "react";
import { Alert } from "antd";
import { GlobalOutlined, HistoryOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

/**
 * RentedBeforeMovingInAndResidency Component
 * Outlines rules for properties rented prior to occupancy, ownership timeline evidence,
 * and foreign resident main residence exemption removal.
 */
export default function RentedBeforeMovingInAndResidency() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Ownership Timeline & Residency
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Prior Rental Periods and Tax Residency Rules
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            The full ownership chronology—from contract exchange to final settlement—governs your true capital gains tax position.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Rented Before Move-in */}
          <div className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-2xl mb-5">
                <HistoryOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Property Rented Before You Move In
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                If a property is tenanted or rented before it ever becomes your main residence, the main residence exemption generally does not cover that initial rental period. Moving in later starts an eligible main residence period, but it does not retrospectively convert the prior investment period into tax-exempt ownership.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When you eventually sell, a partial capital gain is calculated based on days rented versus days occupied as your home. The statutory market valuation rule does not apply in these circumstances, meaning original acquisition costs form the baseline.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Requires Proportional Time Apportionment
            </div>
          </div>

          {/* Foreign Tax Residency */}
          <div className="bg-slate-50 rounded-2xl p-7 sm:p-8 border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center text-2xl mb-5">
                <GlobalOutlined />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">
                Foreign Tax Residents & The Main Residence Exemption
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
                The main residence exemption is subject to strict legislation for foreign tax residents. If you were a non-resident of Australia for tax purposes on the contract date of sale, you generally lose access to the main residence exemption entirely—even if you lived in the home as an Australian resident for decades prior.
              </p>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Very narrow life events exceptions (terminal illness, death, divorce within 6 years of becoming a non-resident) exist, making review of residency status and contract dates essential before executing property contracts.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-200 text-xs font-semibold text-slate-500 uppercase tracking-wider">
              Contract Date Governs Residency Test
            </div>
          </div>
        </div>

        <Alert
          type="warning"
          showIcon
          icon={<ExclamationCircleOutlined className="text-amber-600 text-xl" />}
          title="Contract Exchange Date Governs All CGT Events"
          description={
            <div className="text-slate-700 text-sm leading-relaxed mt-1">
              For Australian tax purposes, the CGT event occurs on the date contracts are signed and exchanged, not the settlement date when titles transfer. Your tax residency status and main residence choices must be verified as of the exchange date.
            </div>
          }
          className="border border-amber-200 bg-amber-50/60 rounded-xl p-5"
        />
      </div>
    </section>
  );
}
