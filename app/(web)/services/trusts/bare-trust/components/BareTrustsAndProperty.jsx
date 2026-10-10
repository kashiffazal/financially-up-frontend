"use client";

import React from "react";
import Link from "next/link";
import { Tag } from "antd";
import {
  HomeOutlined,
  DollarOutlined,
  CalculatorOutlined,
  FileDoneOutlined,
  ArrowRightOutlined,
  ApartmentOutlined,
} from "@ant-design/icons";

/**
 * BareTrustsAndProperty Component
 * ===============================
 * Section: Bare trusts and property
 * Verbatim text from Page 4 of client docx (8th Pillar Trust Services.docx).
 * Explains property bookkeeping requirements (settlement, loans, interest, rent, capital vs repairs)
 * and links to Investment Property Tax and Trust Services Hub.
 */
export default function BareTrustsAndProperty() {
  const propertyItems = [
    {
      icon: <DollarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Purchase Price & Settlement Adjustments",
      desc: "Capturing conveyancing settlement statements, council and water rates apportionments, stamp duty, and legal fees into proper capital accounts.",
    },
    {
      icon: <CalculatorOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "Borrowing Costs & Mortgage Interest",
      desc: "Distinguishing borrowing setup fees from ongoing deductible interest expenses across trustee loan documentation and beneficiary repayment accounts.",
    },
    {
      icon: <HomeOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
      title: "Rental Income & Operational Outgoings",
      desc: "Tracking residential or commercial property rental returns, agency commission, strata levies, land taxes, and property management expenses.",
    },
    {
      icon: <FileDoneOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
      title: "Repairs vs Capital Expenditure",
      desc: "Accurately categorizing immediate deductible repairs versus Division 40 capital allowances and Division 43 capital works write-offs.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950/60 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs">
            Real Estate & Investments
          </Tag>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Bare trusts and property
          </h2>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            Property is one of the more common reasons people look for a bare trust property accountant. The bookkeeping
            needs to reflect the underlying transaction: purchase price, settlement adjustments, borrowing costs,
            interest, rental income where applicable, repairs or capital expenditure, and any amounts paid directly by the
            beneficiary on behalf of the trustee.
          </p>
        </div>

        {/* Property Bookkeeping Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {propertyItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-400 dark:hover:border-teal-500/50 transition-all duration-300 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Verbatim Cross-Linking Callout Box */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl space-y-2">
              <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">
                Integration With Broader Property & Trust Structures
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                If the arrangement is part of a broader property investment structure, our{" "}
                <Link
                  href="/services/individual-tax/investment-property-tax"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Investment Property Tax
                </Link>{" "}
                service may be relevant for the beneficiary&apos;s annual rental-property reporting. For a broader trust
                structure rather than a bare trust, see our{" "}
                <Link
                  href="/services/trusts"
                  className="text-teal-600 dark:text-teal-400 font-semibold hover:underline"
                >
                  Trust Services
                </Link>{" "}
                overview.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/services/individual-tax/investment-property-tax"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-slate-700 dark:text-zinc-200 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 dark:hover:bg-zinc-700 transition-colors"
              >
                Investment Property Tax <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
              <Link
                href="/services/trusts"
                className="inline-flex items-center justify-center px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold text-white bg-teal-600 hover:bg-teal-700 transition-colors shadow-sm"
              >
                Trust Services Hub <ArrowRightOutlined className="ml-2 text-xs" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
