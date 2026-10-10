"use client";

import React from "react";
import Link from "next/link";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedPropertyNegativeGearingRibbon Component
 * Cross-links to complementary property tax services across the hub.
 */
export default function RelatedPropertyNegativeGearingRibbon() {
  const relatedServices = [
    {
      title: "Investment Property Tax",
      slug: "/services/property-tax/investment-property-tax",
      desc: "Comprehensive annual tax return preparation for residential and commercial property investors.",
    },
    {
      title: "Property Capital Gains Tax",
      slug: "/services/property-tax/property-capital-gains-tax",
      desc: "Calculate cost base, apply the 50% CGT discount, and minimise tax liabilities on sale.",
    },
    {
      title: "6-Year Absence Rule",
      slug: "/services/property-tax/6-year-rule",
      desc: "Treat your former home as your main residence while earning rental income up to 6 years.",
    },
    {
      title: "Ownership Structures",
      slug: "/services/property-tax/ownership-structures",
      desc: "Strategic structuring using trusts, companies, and partnerships before purchasing property.",
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
