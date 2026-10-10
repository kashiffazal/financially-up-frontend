"use client";

import React from "react";
import { Alert } from "antd";
import { DollarOutlined, WarningOutlined, ToolOutlined, CheckCircleOutlined } from "@ant-design/icons";

/**
 * SmsfPropertyTaxAndNaliRisks Component
 * Details SMSF tax rates (15% accumulation vs 0% retirement phase),
 * LRBA restrictions on property improvements vs repairs, and NALI penalties.
 */
export default function SmsfPropertyTaxAndNaliRisks() {
  const points = [
    {
      icon: <DollarOutlined className="text-2xl text-emerald-600" />,
      title: "Concessional SMSF Tax Rates",
      desc: "Net rental income is taxed at a concessional 15% during the accumulation phase. Net capital gains on properties held longer than 12 months receive a 1/3 discount, resulting in an effective 10% CGT rate. In retirement pension phase, income and capital gains may be 0% exempt up to transfer balance limits.",
    },
    {
      icon: <ToolOutlined className="text-2xl text-blue-600" />,
      title: "LRBA Repair vs. Improvement Rules",
      desc: "Under LRBA single acquirable asset rules, borrowed funds can be used to repair and maintain the property, but CANNOT be used to fundamentally alter or improve the asset (e.g. subdividing, building an extension, or changing character) until the loan is fully extinguished.",
    },
    {
      icon: <WarningOutlined className="text-2xl text-rose-600" />,
      title: "Non-Arm's Length Income (NALI) Penalty",
      desc: "If related-party lease rents are discounted, expenses are not charged, or related-party borrowing does not comply with ATO safe-harbour terms (PCG 2016/5), the ATO taxes all related net rental income and capital gains at the top marginal penalty tax rate of 45%.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Tax Mechanics & Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Tax and Reporting During SMSF Property Ownership
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            While superannuation provides significant tax concessions, non-arm’s length dealings or breaching borrowing rules can trigger severe tax consequences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 w-fit mb-5">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <Alert
          type="error"
          showIcon
          icon={<WarningOutlined className="text-rose-600 text-xl" />}
          title="Strict Evidence of Arm's Length Terms Required"
          description={
            <div className="text-slate-700 text-sm sm:text-base leading-relaxed mt-1">
              Transactions with related parties must be executed on strict arm's length commercial terms. Written commercial lease agreements, annual third-party market rental appraisals, proof of timely rent payments, and formal debt documentation are mandatory to defend against NALI penalties during the mandatory annual independent fund audit.
            </div>
          }
          className="border border-rose-200 bg-rose-50/60 rounded-xl p-5"
        />
      </div>
    </section>
  );
}
