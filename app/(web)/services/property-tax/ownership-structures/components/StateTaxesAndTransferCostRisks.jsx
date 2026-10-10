"use client";

import React from "react";
import { Alert } from "antd";
import { DollarOutlined, ExclamationCircleOutlined, SafetyCertificateOutlined, SwapOutlined } from "@ant-design/icons";

/**
 * StateTaxesAndTransferCostRisks Component
 * Explains stamp duty (transfer duty), land tax thresholds, and the severe tax trap
 * of transferring an existing property into a trust or company post-purchase.
 */
export default function StateTaxesAndTransferCostRisks() {
  const taxPoints = [
    {
      icon: <DollarOutlined className="text-2xl text-emerald-600" />,
      title: "State Stamp Duty (Transfer Duty)",
      desc: "Stamp duty varies dramatically across states (NSW, VIC, QLD, WA, SA, TAS, ACT, NT). Buying through the wrong entity name and later correcting title can result in double stamp duty if not structured properly at the time of contract execution.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-blue-600" />,
      title: "Land Tax Thresholds & Surcharges",
      desc: "Individual owners generally receive generous state land tax thresholds. Discretionary trusts in many states (such as NSW and Victoria) receive zero tax-free thresholds or face punitive trust surcharges, creating recurring annual cash flow burdens.",
    },
    {
      icon: <SwapOutlined className="text-2xl text-amber-600" />,
      title: "The Transfer Trap: CGT & Duty Triggers",
      desc: "Transferring an existing property you already own into a company or trust is not an administrative bookkeeping entry. It is a legal disposal triggering immediate capital gains tax and ad valorem stamp duty based on market value, even with no cash changing hands.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            State & Transfer Taxes
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Review State Taxes and the Cost of Changing Ownership
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            State duties and annual land taxes can significantly alter the net return of a property investment. Structuring must be decided before the contract of sale is signed.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {taxPoints.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-50 rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-white rounded-xl border border-slate-200 w-fit mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Alert
          type="warning"
          showIcon
          icon={<ExclamationCircleOutlined className="text-amber-600 text-xl" />}
          title="Resolve the Purchaser Entity Before Signing the Contract"
          description={
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed mt-1">
              Once contracts are exchanged, changing the nominated purchaser from an individual to a trust or company can be treated by state revenue offices as a novation or sub-sale, attracting a second round of full stamp duty. Always seek advice before signing.
            </div>
          }
          className="border border-amber-200 bg-amber-50/60 rounded-xl p-5"
        />
      </div>
    </section>
  );
}
