"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoNeedsSmsfSupport Component
 * =============================
 * Section 3: Who Needs SMSF Accounting Support?
 *
 * Reuses ProfileCardsGrid for 5 target trustee profiles,
 * and EntityRoutingBanner for routing between Annual Accounting and Setup.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhoNeedsSmsfSupport() {
  const trusteeProfiles = [
    {
      id: "self-directed-investors",
      icon: "line-chart",
      tag: "Active Investors",
      title: "Self-Directed Trustees",
      description:
        "Trustees managing direct shares, term deposits, and managed funds who want reliable annual financial accounts, tax returns, and audit coordination.",
      href: "/services/smsf/accounting",
      actionText: "Annual accounts",
    },
    {
      id: "property-trustees",
      icon: "home",
      tag: "Real Estate",
      title: "Funds Holding Property & LRBA",
      description:
        "SMSFs holding commercial premises or residential rental property, requiring annual market valuations, lease agreements, and bare trust loan schedules.",
      href: "/services/smsf/property",
      actionText: "Property accounting",
    },
    {
      id: "pension-members",
      icon: "wallet",
      tag: "Retirement Phase",
      title: "Trustees Paying Pensions",
      description:
        "Members entering retirement requiring tax-exempt pension calculations, minimum annual drawdown management, and Transfer Balance Cap (TBAR) reporting.",
      href: "/services/smsf/administration",
      actionText: "Pension management",
    },
    {
      id: "new-fund-founders",
      icon: "bank",
      tag: "New Establishments",
      title: "Newly Established Funds",
      description:
        "Founders setting up an SMSF who need corporate trustee setup, fund deed execution, ABN/TFN registrations, and seamless rollover from APRA super funds.",
      href: "/services/smsf/establishment",
      actionText: "Setup new fund",
    },
    {
      id: "overdue-funds",
      icon: "clock",
      tag: "Backlog & Audit",
      title: "Overdue Funds & Audit Rectification",
      description:
        "Funds with historical accounting backlogs, missed tax returns, or Auditor Contravention Reports (ACRs) needing comprehensive reconciliation.",
      href: "/services/smsf/compliance",
      actionText: "Audit rectification",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-needs-smsf-support"
      tag="Trustee Profiles"
      title="Who Needs SMSF Accounting Support?"
      subtitle="Our SMSF accounting practice supports self-directed investors, commercial landlords, retiring professionals, and new fund trustees seeking clarity and compliance."
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
