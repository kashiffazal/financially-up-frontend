"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * QuickServicesSection
 * ====================
 * Home Page Quick Services Navigation.
 * Uses the mutual, reusable ServicesGrid component from `@/components/website/ServicesGrid`.
 */
export default function QuickServicesSection() {
  const services = [
    {
      title: "Individual Tax",
      description: "Fast individual returns & investment property.",
      href: "/individual-services/individual-tax-return",
      icon: "calculator",
    },
    {
      title: "Business Tax",
      description: "Sole trader, partnership, trust & company.",
      href: "/business-services/company-tax-return",
      icon: "bank",
    },
    {
      title: "Business Registration",
      description: "GST, ABN, company & trust setup.",
      href: "/resources/registration-forms/company-registration",
      icon: "file-protect",
    },
    {
      title: "Bookkeeping",
      description: "Accurate books, payroll & reporting.",
      href: "/book-keeping",
      icon: "book",
    },
  ];

  return (
    <ServicesGrid
      sectionId="quick-services"
      services={services}
      columns={4}
      containerClassName="max-w-7xl"
      className="bg-white dark:bg-zinc-950 transition-colors duration-300"
    />
  );
}
