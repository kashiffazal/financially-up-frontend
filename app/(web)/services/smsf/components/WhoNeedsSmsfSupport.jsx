"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoNeedsSmsfSupport Component
 * =============================
 * Section 4: Who may need SMSF accounting support?
 *
 * Implements 100% exact copy from "Who may need SMSF accounting support?" in 9th Pillar SMSF.docx.
 *
 * Features:
 * - Verbatim introductory paragraph explaining self-directed trustee needs.
 * - 5 exact trustee scenarios represented word-for-word in an interactive grid.
 * - EntityRoutingBanner directing trustees to either annual accounting or new fund setup.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhoNeedsSmsfSupport() {
  // 5 exact scenarios verbatim from 9th Pillar SMSF.docx
  const trusteeProfiles = [
    {
      id: "annual-accounts-trustees",
      icon: "line-chart",
      tag: "Annual Accounts",
      title: "Annual Accounts & Tax Reporting",
      description:
        "trustees who want annual SMSF accounts and tax reporting prepared from investment and bank records",
      href: "/services/smsf/accounting",
      actionText: "Annual accounts",
    },
    {
      id: "multi-asset-property-funds",
      icon: "home",
      tag: "Property & Investments",
      title: "Multi-Asset & Property Reconciliations",
      description:
        "funds with investment property, listed investments, managed funds, cash or other assets that need year-end reconciliation and valuation support",
      href: "/services/smsf/property",
      actionText: "Property & valuation",
    },
    {
      id: "retirement-phase-members",
      icon: "wallet",
      tag: "Retirement Phase",
      title: "Retirement-Phase Benefit Management",
      description:
        "trustees approaching or already paying retirement-phase benefits where member balances and reporting need careful attention",
      href: "/services/smsf/administration",
      actionText: "Pension reporting",
    },
    {
      id: "new-smsf-foundations",
      icon: "bank",
      tag: "First-Year Funds",
      title: "First-Year Fund Accounting",
      description:
        "new SMSFs that need an accounting process established from the first year",
      href: "/services/smsf/establishment",
      actionText: "Setup accounting",
    },
    {
      id: "catchup-overdue-funds",
      icon: "clock",
      tag: "Overdue & Catch-Up",
      title: "Incomplete or Delayed Records",
      description:
        "existing funds whose records are incomplete, inconsistent or behind schedule",
      href: "/book-an-appointment",
      actionText: "Bring records up to date",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-needs-smsf-support"
      tag="Trustee Profiles"
      title="Who may need SMSF accounting support?"
      subtitle="SMSF accounting support can be useful for trustees who manage investments themselves but want the fund's records and reporting handled professionally. It may also be relevant where the fund has several investment types, property, pensions, rollovers, member contributions or historical bookkeeping that needs to be reconciled before year-end work can be completed."
      profiles={trusteeProfiles}
      columns={3}
      className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      bottomBanner={
        <EntityRoutingBanner
          tag="Superannuation Pathways"
          description="Whether you require complete annual accounting and audit coordination for an active fund or want to establish a new compliant SMSF, select your pathway below."
          buttons={[
            {
              label: "Annual SMSF Accounting",
              href: "/services/smsf/accounting",
              type: "primary",
            },
            {
              label: "SMSF Setup & Establishment",
              href: "/services/smsf/establishment",
              type: "secondary",
            },
          ]}
        />
      }
    />
  );
}
