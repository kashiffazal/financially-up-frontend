"use client";

import React from "react";
import { Card } from "antd";
import { UserOutlined, UsergroupAddOutlined, ApartmentOutlined, BankOutlined } from "@ant-design/icons";

/**
 * WhatIsPropertyOwnershipStructure Component
 * Defines legal vs beneficial ownership and compares the core property holding vehicles in Australia.
 */
export default function WhatIsPropertyOwnershipStructure() {
  const structures = [
    {
      icon: <UserOutlined className="text-2xl text-emerald-600" />,
      title: "Individual Ownership",
      desc: "Held in a single person's legal name. Income and deductions flow directly onto their individual tax return at marginal tax rates, eligible for the 50% CGT discount after 12 months.",
    },
    {
      icon: <UsergroupAddOutlined className="text-2xl text-blue-600" />,
      title: "Co-Ownership (Joint / Tenants in Common)",
      desc: "Held jointly or with fixed percentage shares. Rental profits, losses, and CGT obligations strictly follow registered title percentages rather than who pays the mortgage.",
    },
    {
      icon: <ApartmentOutlined className="text-2xl text-purple-600" />,
      title: "Trust Ownership (Discretionary / Unit)",
      desc: "Held by a corporate or individual trustee on trust for beneficiaries. Provides distribution flexibility and asset protection, but losses are quarantined within the trust.",
    },
    {
      icon: <BankOutlined className="text-2xl text-amber-600" />,
      title: "Company Ownership",
      desc: "Held by an incorporated entity. Flat company tax rate (25% or 30%) with capped exposure, but forfeits the general 50% CGT discount on capital growth.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Ownership Vehicles
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            What Is a Property Ownership Structure?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            A property ownership structure identifies who legally holds title to the real estate and, where separate, who holds the beneficial interest. Each option carries distinct tax, legal, and operational consequences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {structures.map((item, idx) => (
            <Card
              key={idx}
              className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl flex flex-col justify-between"
              styles={{ body: { padding: "24px" } }}
            >
              <div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 w-fit mb-4">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 sm:p-8 text-center max-w-4xl mx-auto">
          <p className="text-slate-700 font-medium text-base sm:text-lg leading-relaxed">
            <strong>There is no universally best structure.</strong> An arrangement that suits a long-term residential rental may be entirely unsuitable for a commercial development project or premises used by an operating family business. Intended use, funding, and exit strategy must be analyzed before committing.
          </p>
        </div>
      </div>
    </section>
  );
}
