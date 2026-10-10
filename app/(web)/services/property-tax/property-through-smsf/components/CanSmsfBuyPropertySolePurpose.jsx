"use client";

import React from "react";
import { Card } from "antd";
import { SafetyCertificateOutlined, LineChartOutlined, DollarOutlined, AuditOutlined } from "@ant-design/icons";

/**
 * CanSmsfBuyPropertySolePurpose Component
 * Explains fund trust deed alignment, the statutory Sole Purpose Test,
 * and investment strategy compliance under superannuation law.
 */
export default function CanSmsfBuyPropertySolePurpose() {
  const requirements = [
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-emerald-600" />,
      title: "The Strict Sole Purpose Test",
      description:
        "Under Section 62 of the SIS Act, the SMSF must be maintained for the sole purpose of providing retirement benefits to members (or death benefits to their dependants). Buying real estate to provide immediate accommodation, holiday usage, or personal financial advantages to members breaches this core test.",
    },
    {
      icon: <LineChartOutlined className="text-2xl text-blue-600" />,
      title: "Investment Strategy & Diversification",
      description:
        "The property acquisition must align directly with the fund’s written investment strategy, considering asset diversification, liquidity to pay pensions and tax outgoings, projected rental yields, and cash flow risk management.",
    },
    {
      icon: <DollarOutlined className="text-2xl text-purple-600" />,
      title: "Fund Cash Flow & Benefit Payments",
      description:
        "Trustees must prove the fund can fund holding costs, council rates, insurances, emergency repairs, and ongoing member pension drawdowns without being forced to liquidate assets unexpectedly.",
    },
    {
      icon: <AuditOutlined className="text-2xl text-amber-600" />,
      title: "Arm's Length Commercial Terms",
      description:
        "All transactions, lease agreements, and contractor works must be conducted strictly on genuine commercial, arm’s length market terms and fully supported by verifiable third-party documentation.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Superannuation Compliance
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Can an SMSF Buy Property?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Yes, subject to the fund's trust deed, written investment strategy, and Australian superannuation law. The acquisition must be executed solely for retirement wealth accumulation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {requirements.map((item, idx) => (
            <Card
              key={idx}
              className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl"
              styles={{ body: { padding: "28px" } }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
