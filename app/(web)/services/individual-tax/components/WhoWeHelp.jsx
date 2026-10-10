"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined, BankOutlined } from "@ant-design/icons";
import ServicesGrid from "@/components/website/ServicesGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoWeHelp Component
 * ===================
 * Section 4: Who we help.
 *
 * Utilizes the mutual ServicesGrid component with 4 columns (8 cards total:
 * 7 client target profiles + 1 featured consultation CTA card to perfectly balance the grid).
 */
export default function WhoWeHelp() {
  const targetProfiles = [
    {
      id: "multi-source-earners",
      tag: "Pillar 1.1",
      icon: "user",
      title: "Multiple Income Sources",
      description:
        "employees and professionals with more than one source of income",
      href: "/services/individual-tax/individual-tax-returns",
      actionText: "Explore service",
    },
    {
      id: "medical-high-income",
      tag: "Pillar 1.2",
      icon: "crown",
      title: "High-Income Professionals",
      description:
        "doctors, dentists, consultants, executives and other high-income professionals",
      href: "/services/individual-tax/high-income-professionals",
      actionText: "Explore service",
    },
    {
      id: "property-investors",
      tag: "Pillar 1.4",
      icon: "home",
      title: "Property & Asset Investors",
      description:
        "property, share and managed-fund investors",
      href: "/services/individual-tax/investment-property-tax-accountant",
      actionText: "Explore service",
    },
    {
      id: "complex-assets",
      tag: "Pillar 1.5–1.7",
      icon: "line-chart",
      title: "Capital Gains & Asset Disposals",
      description:
        "individuals with capital gains, foreign income, employee shares or crypto assets",
      href: "/services/individual-tax/capital-gains-tax",
      actionText: "Explore service",
    },
    {
      id: "contractors-sole-traders",
      tag: "Pillar 1.3",
      icon: "shop",
      title: "Sole Traders & Contractors",
      description:
        "sole traders and contractors",
      href: "/services/individual-tax/sole-trader-tax-return",
      actionText: "Explore service",
    },
    {
      id: "overdue-amendments",
      tag: "Pillar 1.10–1.11",
      icon: "clock",
      title: "Overdue Returns & Amendments",
      description:
        "people with overdue returns or a return that may need amendment",
      href: "/services/individual-tax/prior-year-overdue-tax-returns",
      actionText: "Explore service",
    },
    {
      id: "executors-estates",
      tag: "Pillar 1.12",
      icon: "safety",
      title: "Executors & Legal Representatives",
      description:
        "executors and legal personal representatives requiring tax assistance",
      href: "/services/individual-tax/deceased-estate-tax-returns",
      actionText: "Explore service",
    },
    {
      id: "cta-bespoke-advice",
      isCta: true,
      tag: "Bespoke Scope",
      icon: "calendar",
      title: "Need Bespoke Advice?",
      description:
        "Speak directly with an Australian tax accountant to evaluate your exact circumstances and scope.",
      href: "/book-an-appointment",
      actionText: "Book an Appointment",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-slate-50/60 dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* 1. Header and 4-Column Grid via Mutual ServicesGrid */}
        <ServicesGrid
          sectionId="who-we-help"
          tag="Target Client Profiles"
          title="Who we help"
          subtitle="This service is suitable for individuals who need help with an annual return or a personal tax matter, including:"
          services={targetProfiles}
          columns={4}
          actionText="Explore service"
          className="p-0 bg-transparent dark:bg-transparent"
          containerClassName="w-full !px-0"
        />

        {/* 2. Cross-Service Corporate Entity Redirection Notice */}
        <EntityRoutingBanner
          className="mt-12"
          tag="Corporate & Entity Practice Routing"
          description="If your enquiry concerns a company, trust, partnership, SMSF, broader financial advice or broader business accounting, we will direct you to the relevant Financially Up service."
          buttons={[
            {
              label: "Business Tax",
              href: "/services/business-tax",
              type: "primary",
            },
            {
              label: "Trust Services",
              href: "/services/business-tax/trust-tax-returns",
              type: "secondary",
            },
          ]}
        />
      </div>
    </section>
  );
}
