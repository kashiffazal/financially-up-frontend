"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedOwnershipStructuresRibbon Component
 * Cross-links to complementary property tax services across the hub.
 */
export default function RelatedOwnershipStructuresRibbon() {
  const relatedServices = [
    {
      title: "Property Through SMSF",
      slug: "/services/property-tax/property-through-smsf",
      desc: "Acquire residential and commercial real estate using a Self-Managed Super Fund (LRBA rules).",
    },
    {
      title: "Property Capital Gains Tax",
      slug: "/services/property-tax/property-capital-gains-tax",
      desc: "Calculate cost base, apply the 50% CGT discount, and minimise tax liabilities on sale.",
    },
    {
      title: "Property Development Tax",
      slug: "/services/property-tax/property-development-tax",
      desc: "Tax structuring for dual-occupancy, multi-unit developments, trading stock vs capital.",
    },
    {
      title: "Investment Property Tax",
      slug: "/services/property-tax/investment-property-tax",
      desc: "Annual rental returns, deduction claims, and depreciation schedules for Australian investors.",
    },
  ];

  return (
    <section className="py-14 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8">
          <div>
            <span className="text-emerald-700 text-xs font-bold uppercase tracking-wider bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200">
              Connected Services
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
              Explore Related Property Tax Solutions
            </h2>
          </div>
          <Link
            href="/services/property-tax"
            className="inline-flex items-center gap-1.5 text-emerald-700 font-bold hover:text-emerald-800 text-sm mt-3 md:mt-0 transition-colors"
          >
            View All Property Tax Services
            <ArrowRightOutlined />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedServices.map((service, idx) => (
            <Link
              key={idx}
              href={service.slug}
              className="group bg-slate-50 hover:bg-white rounded-xl p-6 border border-slate-200 hover:border-emerald-500 hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {service.desc}
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-emerald-700 text-xs font-bold group-hover:translate-x-1 transition-transform">
                Read service guide <ArrowRightOutlined />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
