"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoBenefitsBookkeeping Component
 * =================================
 * Section 3: Who benefits from professional bookkeeping?
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '4th Pillar Bookkeeping.docx' (Page 1).
 */
export default function WhoBenefitsBookkeeping() {
  /**
   * The 6 exact beneficiary bullet points from Page 1 of the client document
   */
  const beneficiaryProfiles = [
    {
      id: "small-businesses",
      icon: "shop",
      tag: "Regular Records",
      title: "Small businesses that want regular, organised financial records",
      description:
        "Businesses wanting structured financial data maintained consistently without falling behind on daily paperwork and receipts.",
      href: "/services/bookkeeping/monthly-bookkeeping",
      actionText: "Monthly routine",
    },
    {
      id: "diy-to-outsourced",
      icon: "user",
      tag: "Moving from DIY",
      title: "Owners moving from DIY bookkeeping to an outsourced process",
      description:
        "Founders transitioning away from manual spreadsheets and personal data entry to a dependable professional workflow.",
      href: "/services/bookkeeping/xero-bookkeeping",
      actionText: "Outsourced setup",
    },
    {
      id: "unreconciled-transactions",
      icon: "clock",
      tag: "Unreconciled Feeds",
      title: "Businesses with unreconciled bank or credit-card transactions",
      description:
        "Operations with backlogs of bank lines, merchant deposits, or card charges that need orderly matching and resolution.",
      href: "/services/bookkeeping/catch-up-bookkeeping",
      actionText: "Catch-up help",
    },
    {
      id: "cleaner-records-bas-tax",
      icon: "safety",
      tag: "BAS & Tax Prep",
      title: "Businesses that need cleaner records before BAS or tax preparation",
      description:
        "Ensuring the accounting file is reconciled and validated before accountants prepare activity statements or annual tax returns.",
      href: "/services/bookkeeping/bookkeeping-clean-up",
      actionText: "Clean-up review",
    },
    {
      id: "repeatable-workflow",
      icon: "rise",
      tag: "Repeatable Process",
      title: "Growing businesses that want a repeatable bookkeeping workflow",
      description:
        "Expanding commercial businesses requiring reliable standard operating routines for supplier bills, customer invoicing, and reviews.",
      href: "/services/bookkeeping/monthly-bookkeeping",
      actionText: "Repeatable routine",
    },
    {
      id: "clearer-visibility",
      icon: "solution",
      tag: "Financial Visibility",
      title: "Owners who want clearer visibility over income, expenses and outstanding items",
      description:
        "Business owners who need dependable records to see what has been earned, what has been spent, and what remains outstanding.",
      href: "/services/bookkeeping/reporting",
      actionText: "Reporting view",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-benefits-bookkeeping"
      tag="Target Businesses"
      title="Who benefits from professional bookkeeping?"
      subtitle="Professional bookkeeping services are useful when business owners are spending too much time maintaining records, are unsure whether accounts are up to date, or need more reliable information before speaking with their accountant or adviser. They can also help when a business has grown beyond a simple spreadsheet or irregular data entry."
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
