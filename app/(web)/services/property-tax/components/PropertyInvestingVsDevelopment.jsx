"use client";

import React from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  HomeOutlined,
  BankOutlined,
  DollarOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import AdvisoryReassuranceBanner from "@/components/website/AdvisoryReassuranceBanner";

/**
 * PropertyInvestingVsDevelopment Component
 * ========================================
 * Section: "Property investing and property development are not taxed the same way"
 * Directly implements verbatim text from Page 1 of '10th Pillar Property Tax.docx'.
 *
 * Background: Clean White with Dark Mode compatibility.
 */
export default function PropertyInvestingVsDevelopment() {
  const comparisonFrameworks = [
    {
      icon: <HomeOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
      title: "Long-Term Investment Property",
      tag: "Capital Account (CGT)",
      description:
        "Held to generate ongoing rental income and long-term capital appreciation. Governed by rental schedule deductions and Capital Gains Tax provisions, including the 50% CGT discount for individuals and trusts.",
      highlights: [
        "Annual gross rental income declared",
        "Deductions for eligible running expenses",
        "CGT calculation upon sale (with 50% discount if held > 12 months)",
      ],
    },
    {
      icon: <BankOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
      title: "Development or Profit-Making Ventures",
      tag: "Revenue Account (Ordinary Income)",
      description:
        "Undertaken with the intention or purpose of resale at a profit or in the course of a business. Proceeds are assessed as ordinary income with no 50% CGT discount, and construction costs treated as trading stock or work in progress.",
      highlights: [
        "Profits taxed as ordinary income at marginal or corporate rates",
        "No general 50% CGT discount available",
        "Development costs capitalized until sale",
      ],
    },
    {
      icon: <DollarOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
      title: "GST Considerations on Property",
      tag: "Enterprise & Supplies",
      description:
        "GST depends on whether activities amount to an enterprise, registration thresholds, and the nature of the supply. Sales of new residential premises or potential residential land commonly trigger GST obligations and withholding rules.",
      highlights: [
        "Enterprise registration requirement if turnover exceeds threshold",
        "GST margin scheme eligibility assessments",
        "Purchaser GST withholding compliance at settlement",
      ],
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Verbatim H2 and Paragraphs from Document */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 space-y-4">
          <Tag color="green" className="brand-section-tag">
            Tax Characterisation
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-[1.2]">
            Property investing and property development are not taxed the same way
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            A key first step is understanding the character of the property activity. Long-term investment property is commonly dealt with under rental income and capital gains tax rules. A development or profit-making venture may instead produce ordinary income, and GST can become relevant depending on the facts.
          </p>

          <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 font-normal leading-relaxed">
            The distinction is important because tax outcomes can differ materially. Intention, scale, repetition, development activity, how the property is financed and the way the project is carried out can all matter. A property sale should not automatically be treated as a capital gain simply because real estate is involved.
          </p>
        </div>

        {/* 3 Comparative Framework Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {comparisonFrameworks.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-200/80 dark:border-zinc-800 hover:border-teal-500/50 hover:shadow-md transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-800 shadow-2xs flex items-center justify-center">
                    {item.icon}
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-white dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-zinc-300">
                    {item.tag}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal mb-4">
                  {item.description}
                </p>

                <ul className="space-y-2 border-t border-slate-200/60 dark:border-zinc-800 pt-3">
                  {item.highlights.map((h, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300">
                      <CheckCircleOutlined className="text-teal-600 dark:text-teal-400 mt-0.5 shrink-0 text-xs" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Advisory Reassurance Banner */}
        <AdvisoryReassuranceBanner
          tag="Property Tax Characterisation Advisory"
          tagIcon="safety"
          title="Determine Your Property Tax Character Before You Transact"
          description="Avoid surprise ATO audits, reclassification of capital gains as ordinary income, and uncollected GST liabilities. Book an appointment with Financially Up to review your project."
          primaryButton={{
            text: "Book Property Consultation",
            href: "/services/property-tax/property-development-tax",
          }}
          showPhone={true}
        />
      </div>
    </section>
  );
}
