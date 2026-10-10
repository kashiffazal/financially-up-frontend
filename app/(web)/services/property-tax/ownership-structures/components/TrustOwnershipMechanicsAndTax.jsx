"use client";

import React from "react";
import { Alert } from "antd";
import { ApartmentOutlined, CheckCircleOutlined, CloseCircleOutlined, FileTextOutlined } from "@ant-design/icons";

/**
 * TrustOwnershipMechanicsAndTax Component
 * Explains discretionary and unit trusts for real estate holding,
 * covering income distributions, CGT streaming, and the critical trust loss trap.
 */
export default function TrustOwnershipMechanicsAndTax() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Fiduciary Vehicles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Could a Trust Own the Property?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            A trustee can acquire real estate for a family discretionary trust or unit trust, offering asset protection and distribution flexibility, but requiring strict governance.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Trust Advantages */}
          <div className="bg-emerald-50/40 rounded-2xl p-7 sm:p-8 border border-emerald-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CheckCircleOutlined className="text-emerald-600 text-2xl" />
              Strategic Trust Advantages
            </h3>
            <ul className="space-y-4 text-slate-700 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>
                  <strong>Distribution Flexibility:</strong> Annual net rental income can be streamed to family beneficiaries in lower marginal tax brackets in accordance with the trust deed.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>
                  <strong>50% CGT Discount Pass-Through:</strong> Eligible trusts can flow capital gains through to individual beneficiaries, preserving the statutory 50% CGT discount.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500 mt-2 shrink-0" />
                <span>
                  <strong>Asset Protection & Succession:</strong> Property held in a trust is legally separate from personal bankruptcy risks, enabling multi-generational wealth preservation without transfer stamp duty.
                </span>
              </li>
            </ul>
          </div>

          {/* Trust Pitfalls & Limitations */}
          <div className="bg-rose-50/40 rounded-2xl p-7 sm:p-8 border border-rose-200">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <CloseCircleOutlined className="text-rose-600 text-2xl" />
              Key Trust Constraints & Pitfalls
            </h3>
            <ul className="space-y-4 text-slate-700 text-sm sm:text-base">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>
                  <strong>Quarantined Rental Losses:</strong> If a trust property is negatively geared, the tax loss CANNOT be distributed to beneficiaries to offset their salary. Losses are trapped inside the trust until future profits arise.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>
                  <strong>Higher State Land Tax:</strong> In many Australian states (e.g. NSW, VIC), trusts receive zero land tax threshold or are subject to significant trust land tax surcharges.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 rounded-full bg-rose-500 mt-2 shrink-0" />
                <span>
                  <strong>Annual Compliance Costs:</strong> Requires separate accounting books, trust tax return lodgement, annual distribution minutes, and ASIC corporate trustee fees.
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Alert
          type="info"
          showIcon
          icon={<FileTextOutlined className="text-blue-600 text-xl" />}
          title="Trust Structure Modelling by Financially Up"
          description={
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed mt-1">
              As property trust structure accountants, Financially Up models your expected income, cash flow, debt servicing, and state land tax thresholds to verify whether a trust makes mathematical and commercial sense for your specific acquisition.
            </div>
          }
          className="border border-blue-200 bg-blue-50/60 rounded-xl p-5"
        />
      </div>
    </section>
  );
}
