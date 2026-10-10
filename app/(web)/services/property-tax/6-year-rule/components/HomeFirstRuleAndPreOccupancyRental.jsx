"use client";

import React from "react";
import { Alert } from "antd";
import { CheckCircleOutlined, CloseCircleOutlined, ExclamationCircleOutlined } from "@ant-design/icons";

/**
 * HomeFirstRuleAndPreOccupancyRental Component
 * Details the strict prerequisite that a property must be established as a main residence
 * before any absence period can qualify for the 6-year rule.
 */
export default function HomeFirstRuleAndPreOccupancyRental() {
  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Mandatory Prerequisite
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            The Property Generally Needs to Have Been Your Home First
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            The statutory six-year absence concession applies exclusively to a <em>former</em> main residence. You cannot use the rule backwards to wipe out prior investment tax liabilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {/* Compliant Pathway */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-emerald-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center text-xl font-bold">
                <CheckCircleOutlined />
              </span>
              <h3 className="text-xl font-bold text-slate-900">Valid Absence Exemption</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              You purchase or settle on a home, move into it immediately as soon as practicable, establish domestic utility accounts, connect internet, enroll on the electoral roll, and reside there with your family.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              When you later relocate (for work, travel, or family reasons) and rent out the dwelling, that subsequent vacancy qualifies as a valid absence period eligible for up to 6 years of income-producing CGT exemption.
            </p>
          </div>

          {/* Non-Compliant / Pre-Occupancy Rental */}
          <div className="bg-white rounded-2xl p-7 sm:p-8 border border-rose-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-10 h-10 rounded-xl bg-rose-100 text-rose-700 flex items-center justify-center text-xl font-bold">
                <CloseCircleOutlined />
              </span>
              <h3 className="text-xl font-bold text-slate-900">Pre-Occupancy Investment Phase</h3>
            </div>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-4">
              You buy a property with existing tenants in place or advertise it immediately as a rental investment. You collect rent for 2, 5, or 10 years before the tenants vacate and you finally move in.
            </p>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Moving in later establishes future main residence status, but it <strong>never</strong> makes the earlier rental period retrospectively tax-free. When you sell, the initial investment days remain permanently taxable on a proportional basis.
            </p>
          </div>
        </div>

        <Alert
          type="info"
          showIcon
          icon={<ExclamationCircleOutlined className="text-blue-600 text-xl" />}
          title="Segregating Ownership Periods"
          description={
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed mt-1">
              Financially Up conducts precise timeline audits to clearly separate the taxable investment period prior to initial occupancy from any subsequent legitimate absence period under the 6-year rule.
            </div>
          }
          className="border border-blue-200 bg-blue-50/60 rounded-xl p-5"
        />
      </div>
    </section>
  );
}
