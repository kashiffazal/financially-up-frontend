"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * TrustTypesComparison Component
 * ===============================
 * Section 3: Four Common Trust Types Compared.
 *
 * Reuses ProfileCardsGrid (4 columns) to contrast:
 * 1. Family Discretionary Trust
 * 2. Unit Trust (Fixed)
 * 3. Bare Trust (SMSF LRBA)
 * 4. Corporate Trustee Structure
 *
 * Injects EntityRoutingBanner into bottom slot for routing between
 * Family Trust and Unit Trust accounting services.
 *
 * Background: Lite Brand Gradient.
 */
export default function TrustTypesComparison() {
  const trustProfiles = [
    {
      id: "family-discretionary",
      icon: "user",
      tag: "Discretionary",
      title: "Family Discretionary Trust",
      description:
        "The trustee exercises discretion over how annual income and capital are allocated among family beneficiaries, offering asset protection and flexibility.",
      href: "/services/trusts/family-trust",
      actionText: "Family trusts",
    },
    {
      id: "unit-trust-fixed",
      icon: "line-chart",
      tag: "Fixed Units",
      title: "Unit Trust (Fixed)",
      description:
        "Beneficiaries hold defined units that specify fixed proportions of trust income and capital, ideal for unrelated co-investors and property syndicates.",
      href: "/services/trusts/unit-trust",
      actionText: "Unit trusts",
    },
    {
      id: "bare-trust-holding",
      icon: "home",
      tag: "SMSF Borrowing",
      title: "Bare Trust (Holding Trust)",
      description:
        "The trustee holds legal title to a single asset exclusively on behalf of one beneficiary, used for SMSF Limited Recourse Borrowing Arrangements.",
      href: "/services/trusts/bare-trust",
      actionText: "Bare trusts",
    },
    {
      id: "corporate-trustee",
      icon: "bank",
      tag: "Pty Ltd Trustee",
      title: "Corporate Trustee",
      description:
        "A dedicated proprietary company acts as trustee, providing perpetual succession, limited liability, and preventing costly asset transfers if trustees retire.",
      href: "/services/trusts/corporate-trustee",
      actionText: "Corporate trustee",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="trust-types-comparison"
      tag="Trust Models"
      title="Which Trust Structure Fits Your Objectives?"
      subtitle="In Australia, private trusts serve distinct commercial and family purposes. Understanding deed terms, beneficiary rights, and trustee governance ensures your structure remains compliant and tax-effective."
      profiles={trustProfiles}
      columns={4}
      className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      bottomBanner={
        <EntityRoutingBanner
          tag="Trust Structure & Advisory Pathways"
          description="Ready to review or establish your trust's accounting? Whether you manage a family discretionary trust or a commercial unit trust, select your pathway below."
          buttons={[
            {
              label: "Family Trust Accounting",
              href: "/services/trusts/family-trust",
              type: "primary",
            },
            {
              label: "Unit Trust Accounting",
              href: "/services/trusts/unit-trust",
              type: "secondary",
            },
          ]}
        />
      }
    />
  );
}
