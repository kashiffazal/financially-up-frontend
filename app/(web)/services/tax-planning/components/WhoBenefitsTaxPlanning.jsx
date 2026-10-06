"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoBenefitsTaxPlanning Component
 * =================================
 * Section 2: Who May Benefit From Tax Planning?
 *
 * Utilizes the mutual ProfileCardsGrid component for the 6 target beneficiary profiles,
 * and the mutual EntityRoutingBanner component for routing between Business and Personal planning pathways.
 *
 * All content is 100% VERBATIM from the professional SEO specialist document:
 * '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx' (Page 1).
 */
export default function WhoBenefitsTaxPlanning() {
  /**
   * The 6 Target Beneficiary Profiles from official Pillar 3 client documentation (Verbatim)
   */
  const beneficiaryProfiles = [
    {
      id: "business-owners",
      icon: "shop",
      tag: "Business Owners",
      title: "Business Owners",
      description:
        "Business owners who want to understand expected tax liabilities and cash-flow implications before year end.",
      href: "/services/tax-planning/business-tax-planning",
      actionText: "Business tax planning",
    },
    {
      id: "multiple-income-sources",
      icon: "user",
      tag: "Multiple Income Streams",
      title: "Multiple Income Sources",
      description:
        "Individuals with salary, investment, rental or other income from several sources.",
      href: "/services/tax-planning/personal-tax-planning",
      actionText: "Personal tax planning",
    },
    {
      id: "cgt-asset-sales",
      icon: "line-chart",
      tag: "Asset Disposals",
      title: "Property & Asset Sellers",
      description:
        "People considering the sale of property, shares or another CGT asset.",
      href: "/services/tax-planning/cgt-planning",
      actionText: "CGT planning",
    },
    {
      id: "superannuation-contributions",
      icon: "safety",
      tag: "Superannuation",
      title: "Superannuation Contributors",
      description:
        "Taxpayers reviewing superannuation contributions where tax rules and contribution caps may be relevant.",
      href: "/services/tax-planning/year-end-planning",
      actionText: "Year-end review",
    },
    {
      id: "ownership-structure-changes",
      icon: "apartment",
      tag: "Business Evolution",
      title: "Structure & Ownership Changes",
      description:
        "Businesses considering changes to ownership, structure, asset purchases or how profits are retained or distributed.",
      href: "/services/tax-planning/business-structure-advice",
      actionText: "Structure advice",
    },
    {
      id: "proactive-decision-makers",
      icon: "solution",
      tag: "Strategic Review",
      title: "Proactive Clients",
      description:
        "Clients who want to move from reactive tax-return preparation to a more proactive review of upcoming decisions.",
      href: "/services/tax-planning/high-income-tax-planning",
      actionText: "Proactive planning",
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
