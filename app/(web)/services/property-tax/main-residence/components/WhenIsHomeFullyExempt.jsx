"use client";

import React from "react";
import { Card } from "antd";
import { HomeOutlined, CheckCircleOutlined, CompassOutlined, FileTextOutlined } from "@ant-design/icons";

/**
 * WhenIsHomeFullyExempt Component
 * Details the criteria for a full main residence CGT exemption under Australian tax law.
 */
export default function WhenIsHomeFullyExempt() {
  const criteria = [
    {
      icon: <HomeOutlined className="text-2xl text-emerald-600" />,
      title: "Residency & Sole Home for Entire Ownership",
      description:
        "A dwelling can generally qualify for a full main residence exemption when you satisfy the residency requirements, it has been the home of you and your family for the whole ownership period, and it has not been used to produce assessable income.",
    },
    {
      icon: <CompassOutlined className="text-2xl text-blue-600" />,
      title: "Up to Two Hectares of Surrounding Land",
      description:
        "The exemption can extend to the dwelling and up to two hectares (approx. 4.94 acres) of associated land used strictly for private domestic purposes. Different tax outcomes apply to larger acreage, subdivided parcels, income-producing land, or foreign tax residents.",
    },
    {
      icon: <FileTextOutlined className="text-2xl text-purple-600" />,
      title: "Circumstances of Genuine Occupation",
      description:
        "Whether a property was genuinely your main residence is determined objectively from all circumstances. There is no single legal document that automatically decides the issue; the ATO evaluates the full factual matrix of occupation.",
    },
  ];

  const occupancyIndicators = [
    "You and your immediate family physically lived at the property",
    "Your personal belongings, furniture, and family effects were moved in",
    "Your official postal mailing address was updated across banks and services",
    "Your Australian Electoral Commission (AEC) enrolment was registered there",
    "Utility accounts (electricity, gas, internet, water) were connected in your name",
    "The overall intention and continuous pattern of domestic occupation",
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            CGT Exemption Rules
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            When Is a Home Generally Fully Exempt from CGT?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            In straightforward cases, selling your family home attracts 0% capital gains tax. However, eligibility relies on satisfying strict statutory tests throughout your entire period of ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {criteria.map((item, idx) => (
            <Card
              key={idx}
              className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl"
              styles={{ body: { padding: "28px" } }}
            >
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 w-fit mb-5">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{item.description}</p>
            </Card>
          ))}
        </div>

        {/* Factual Matrix of Occupancy */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 sm:p-10">
          <h3 className="text-xl font-bold text-slate-900 mb-3">
            Factual Indicators of Genuine Main Residence
          </h3>
          <p className="text-slate-600 text-sm sm:text-base mb-6 leading-relaxed">
            The Australian Taxation Office examines the verifiable lifestyle facts rather than subjective intent alone. Key evidentiary factors include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {occupancyIndicators.map((factor, idx) => (
              <div key={idx} className="flex items-start gap-3 p-3.5 bg-white rounded-xl border border-slate-200 shadow-sm">
                <CheckCircleOutlined className="text-emerald-600 text-base shrink-0 mt-0.5" />
                <span className="text-slate-800 text-sm font-medium">{factor}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
