"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoBenefitsBookkeeping Component
 * =================================
 * Section 3: Who Benefits from Professional Bookkeeping?
 *
 * Utilizes the mutual ProfileCardsGrid component for the 6 target business profiles,
 * and the mutual EntityRoutingBanner component for routing to specialized pathways (Xero vs Monthly).
 * Uses Lite Brand Gradient background.
 */
export default function WhoBenefitsBookkeeping() {
  /**
   * The 6 Target Beneficiary Profiles from official Pillar 4 client documentation
   */
  const beneficiaryProfiles = [
    {
      id: "small-businesses",
      icon: "shop",
      tag: "Small Businesses",
      title: "Small Businesses Needing Structure",
      description:
        "Owners who want regular, organised financial records without spending late nights sorting receipts, reconciling bank lines, or tracking down paperwork.",
      href: "/services/bookkeeping/monthly-bookkeeping",
      actionText: "Monthly routine",
    },
    {
      id: "diy-to-outsourced",
      icon: "user",
      tag: "DIY to Outsourced",
      title: "Owners Transitioning From DIY",
      description:
        "Founders moving away from manual spreadsheets and DIY data entry to a structured, outsourced bookkeeping process that frees up valuable commercial time.",
      href: "/services/bookkeeping/xero-bookkeeping",
      actionText: "Outsourced setup",
    },
    {
      id: "unreconciled-backlogs",
      icon: "clock",
      tag: "Overdue Books",
      title: "Businesses With Account Backlogs",
      description:
        "Enterprises with months of unreconciled bank or credit-card feeds, suspense balances, or duplicate entries that need systematic catch-up support.",
      href: "/services/bookkeeping/catch-up-bookkeeping",
      actionText: "Catch-up help",
    },
    {
      id: "bas-tax-readiness",
      icon: "safety",
      tag: "Compliance Ready",
      title: "Businesses Preparing for BAS & Tax",
      description:
        "Companies, trusts, and sole traders that need cleaner, accurate bookkeeping records before their accountant prepares quarterly BAS or annual tax returns.",
      href: "/services/bookkeeping/bookkeeping-clean-up",
      actionText: "Clean-up review",
    },
    {
      id: "growing-enterprises",
      icon: "rise",
      tag: "Scaling Operations",
      title: "Growing Commercial Enterprises",
      description:
        "Businesses whose transaction volume has expanded beyond basic data entry, requiring repeatable workflows for supplier bills and customer receipts.",
      href: "/services/bookkeeping/accounts-payable",
      actionText: "AP/AR workflow",
    },
    {
      id: "visibility-seekers",
      icon: "solution",
      tag: "Cash-Flow Insight",
      title: "Owners Seeking Clear Visibility",
      description:
        "Directors who need accurate, up-to-date figures on sales, expenses, debtor aging, and bank balances before making operational and staffing decisions.",
      href: "/services/bookkeeping/reporting",
      actionText: "Reporting view",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-benefits-bookkeeping"
      tag="Target Businesses"
      title="Who Benefits From Professional Bookkeeping?"
      subtitle="Professional bookkeeping services are useful when business owners are spending too much time maintaining records, are unsure whether accounts are up to date, or need more reliable information before speaking with their accountant or adviser."
      profiles={beneficiaryProfiles}
      columns={3}
      className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      bottomBanner={
        <EntityRoutingBanner
          tag="Software & Routine Pathways"
          description="Whether you require tailored support inside Xero or a predictable monthly bookkeeping schedule, explore our specialized pathways below."
          buttons={[
            {
              label: "Xero Bookkeeping",
              href: "/services/bookkeeping/xero-bookkeeping",
              type: "primary",
            },
            {
              label: "Monthly Bookkeeping",
              href: "/services/bookkeeping/monthly-bookkeeping",
              type: "secondary",
            },
          ]}
        />
      }
    />
  );
}
