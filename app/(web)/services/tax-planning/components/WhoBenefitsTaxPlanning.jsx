"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoBenefitsTaxPlanning Component
 * =================================
 * Section 3: Who May Benefit From Tax Planning?
 *
 * Utilizes the mutual ProfileCardsGrid component for the 6 target beneficiary profiles,
 * and the mutual EntityRoutingBanner component for routing between Business and Personal planning pathways.
 */
export default function WhoBenefitsTaxPlanning() {
  /**
   * The 6 Target Beneficiary Profiles from official Pillar 3 client documentation
   */
  const beneficiaryProfiles = [
    {
      id: "business-owners",
      icon: "shop",
      tag: "Business Owners",
      title: "Commercial Business Owners",
      description:
        "Owners of companies, trusts, and partnerships who want to understand expected tax liabilities, PAYG obligations, and cash-flow implications well before year-end.",
      href: "/services/tax-planning/business-tax-planning",
      actionText: "Business planning",
    },
    {
      id: "multi-income",
      icon: "user",
      tag: "Multi-Source Income",
      title: "Multiple Income Stream Earners",
      description:
        "Individuals deriving revenue from executive salary, consulting, dividends, trusts, or rental portfolios where proactive tax timing prevents unexpected tax bills.",
      href: "/services/tax-planning/personal-tax-planning",
      actionText: "Personal planning",
    },
    {
      id: "cgt-assets",
      icon: "line-chart",
      tag: "CGT Assets",
      title: "Property & Asset Sellers",
      description:
        "Individuals and companies contemplating the sale of real estate, company shares, crypto, or business assets where cost bases and CGT discounts must be reviewed before contract exchange.",
      href: "/services/tax-planning/cgt-planning",
      actionText: "CGT review",
    },
    {
      id: "superannuation",
      icon: "safety",
      tag: "Superannuation",
      title: "Superannuation Contributors",
      description:
        "Taxpayers reviewing concessional contributions, carry-forward caps, Division 293 thresholds, and the strict ATO 30 June notice of intent documentation requirements.",
      href: "/services/tax-planning/year-end-planning",
      actionText: "Super review",
    },
    {
      id: "restructuring",
      icon: "apartment",
      tag: "Structure & Growth",
      title: "Ownership & Structure Changes",
      description:
        "Enterprises introducing new shareholders, acquiring substantial equipment, or reviewing whether their original setup still provides tax efficiency and asset protection.",
      href: "/services/tax-planning/business-structure-advice",
      actionText: "Structure advice",
    },
    {
      id: "proactive-planners",
      icon: "solution",
      tag: "Strategic Mindset",
      title: "Proactive Decision Makers",
      description:
        "Clients seeking to move beyond reactive annual tax return preparation towards a structured, forward-looking review of upcoming financial transactions and decisions.",
      href: "/services/tax-planning/high-income-tax-planning",
      actionText: "Proactive review",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-benefits-tax-planning"
      tag="Target Beneficiaries"
      title="Who May Benefit From Tax Planning?"
      subtitle="Tax planning may be useful when income, business activity or investments are changing, or when a decision made now could affect a later tax return. It is particularly relevant before significant transactions or changes in structure or ownership."
      profiles={beneficiaryProfiles}
      columns={3}
      className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      bottomBanner={
        <EntityRoutingBanner
          tag="Tailored Advisory Pathways"
          description="Tax planning requires a focused scope matched to your taxpayer type. Select your primary focus below to explore our dedicated corporate or personal planning frameworks."
          buttons={[
            {
              label: "Business Tax Planning",
              href: "/services/tax-planning/business-tax-planning",
              type: "primary",
            },
            {
              label: "Personal Tax Planning",
              href: "/services/tax-planning/personal-tax-planning",
              type: "secondary",
            },
          ]}
        />
      }
    />
  );
}
