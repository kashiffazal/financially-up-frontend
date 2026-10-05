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
      title: "Multi-Source Earners",
      description:
        "Employees and professionals with more than one source of income, work deductions, and tax offsets.",
      href: "/services/individual-tax/individual-tax-return",
      actionText: "Explore service",
    },
    {
      id: "medical-high-income",
      tag: "Pillar 1.2",
      icon: "crown",
      title: "Medical & High Earners",
      description:
        "Doctors, dentists, executives, and consultants with complex salary, bonus, and investment packaging.",
      href: "/services/individual-tax/high-income-professionals",
      actionText: "Explore service",
    },
    {
      id: "property-investors",
      tag: "Pillar 1.4",
      icon: "home",
      title: "Property & Asset Investors",
      description:
        "Rental property, share portfolio, and managed-fund investors seeking deduction and CGT optimization.",
      href: "/services/individual-tax/investment-property-tax-accountant",
      actionText: "Explore service",
    },
    {
      id: "complex-assets",
      tag: "Pillar 1.5–1.7",
      icon: "line-chart",
      title: "Complex Asset Owners",
      description:
        "Individuals navigating capital gains, foreign income, employee share schemes, or crypto transactions.",
      href: "/services/individual-tax/capital-gains-tax",
      actionText: "Explore service",
    },
    {
      id: "contractors-sole-traders",
      tag: "Pillar 1.3",
      icon: "shop",
      title: "Contractors & Sole Traders",
      description:
        "Sole traders and contractors reporting business income and managing quarterly GST obligations.",
      href: "/services/individual-tax/sole-trader-tax-return",
      actionText: "Explore service",
    },
    {
      id: "overdue-amendments",
      tag: "Pillar 1.10–1.11",
      icon: "clock",
      title: "Overdue & Amendments",
      description:
        "Individuals with prior-year returns, missing ATO records, or lodgements requiring correction.",
      href: "/services/individual-tax/prior-year-overdue-tax-returns",
      actionText: "Explore service",
    },
    {
      id: "executors-estates",
      tag: "Pillar 1.12",
      icon: "safety",
      title: "Executors & Estates",
      description:
        "Executors and legal representatives preparing date-of-death or deceased estate trust tax returns.",
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
          subtitle="Our individual tax practice is tailored for individuals across Australia who need expert preparation or personal tax advisory, including:"
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
