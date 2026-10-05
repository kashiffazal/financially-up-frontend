"use client";

import React from "react";
import WhyChooseSection from "@/components/website/WhyChooseSection";

/**
 * WhyChooseCompany Component
 * ==========================
 * Section: Why Choose Financially Up for Your Company Tax Returns?
 *
 * Utilizes the mutual reusable WhyChooseSection component from `@/components/website/WhyChooseSection`.
 */
export default function WhyChooseCompany() {
  const whyChoosePoints = [
    {
      step: "01",
      badge: "Expert Knowledge",
      title: "Company-Specific Knowledge",
      desc: "With years of experience in serving PTY LTD companies, we have developed company-specific tax knowledge. We stay up to date with the latest ATO regulations and guidelines to address the unique needs of your business structure.",
      icon: "bank",
    },
    {
      step: "02",
      badge: "Tax Savings",
      title: "Optimizing Tax Efficiency",
      desc: "Maximizing tax efficiency is crucial for companies to minimize tax liabilities and maximize profitability. Our CPA team specializes in identifying strategies, deductions, and credits to ensure your company operates tax-efficiently.",
      icon: "dollar",
    },
    {
      step: "03",
      badge: "Strategic Advice",
      title: "Comprehensive Tax Planning",
      desc: "We go beyond simply lodging your return. We offer year-round strategic corporate tax planning to help you make informed decisions that benefit your company bottom line while proactively minimizing tax risk.",
      icon: "line-chart",
    },
    {
      step: "04",
      badge: "Audit Protection",
      title: "Streamlined Compliance",
      desc: "Maintaining accurate financial statements and fulfilling ASIC & ATO reporting obligations is vital. We prepare compliant statutory accounts, general ledgers, and company returns to eliminate audit risk.",
      icon: "solution",
    },
  ];

  return (
    <WhyChooseSection
      tag="The Financially Up Advantage"
      title="Why Choose Financially Up for Your Company Tax Returns?"
      subtitle="Proactive corporate taxation solutions built specifically for small to medium PTY LTD companies in Australia."
      items={whyChoosePoints}
      columns={4}
      ctaText="Book an Appointment"
      ctaHref="/book-an-appointment"
    />
  );
}

