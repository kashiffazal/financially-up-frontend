"use client";

import React from "react";
import { UserOutlined, PercentageOutlined, FileProtectOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

/**
 * PersonalAndCoOwnershipTaxImplications Component
 * Details personal title holding, tenancy in common vs joint tenancy,
 * and the strict ATO rule that tax returns follow legal percentage title.
 */
export default function PersonalAndCoOwnershipTaxImplications() {
  const points = [
    {
      icon: <UserOutlined className="text-2xl text-emerald-600" />,
      title: "Individual Sole Ownership",
      desc: "Simplicity and accessibility. Rental income and all deductible property outgoings flow directly to the individual owner's tax return. Individual owners qualify for the general 50% CGT discount after holding the property for at least 12 months.",
    },
    {
      icon: <PercentageOutlined className="text-2xl text-blue-600" />,
      title: "Strict Legal Interest Apportionment",
      desc: "For co-owned property, rental income and deductions strictly mirror each owner's legal title percentage. An informal agreement where the higher-earning partner pays the mortgage or takes all deductions is rejected by the ATO unless legal title reflects it.",
    },
    {
      icon: <FileProtectOutlined className="text-2xl text-purple-600" />,
      title: "Tenants in Common vs. Joint Tenants",
      desc: "Tenants in common can own unequal shares (e.g. 99%/1% or 70%/30%) and bequeath their share via their Will. Joint tenants own equal, indivisible shares with automatic survivorship rights upon death.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-amber-600" />,
      title: "Solicitor & Legal Document Alignment",
      desc: "We examine title documents, proposed ownership percentages, mortgage loan terms, and intended usage. A solicitor advises on legal ownership forms, co-ownership deeds, and partner rights.",
    },
  ];

  return (
    <section className="py-16 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-100/60 px-3.5 py-1.5 rounded-full border border-emerald-300">
            Personal Holding
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            Owning Property Personally or with Another Person
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            Individual and co-ownership are the most common investment vehicles in Australia, but getting the title percentages right at contract signing is vital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {points.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
