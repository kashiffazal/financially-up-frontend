"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * CommonStructuresComparison Component
 * ====================================
 * Section 3: Four Common Business Structures Compared.
 *
 * Reuses ProfileCardsGrid (4 columns) to contrast:
 * 1. Sole Trader
 * 2. Partnership
 * 3. Company
 * 4. Trust
 *
 * Injects EntityRoutingBanner into bottom slot for routing between
 * Company Registration and ABN Registration.
 *
 * Background: Lite Brand Gradient.
 */
export default function CommonStructuresComparison() {
  const structureProfiles = [
    {
      id: "sole-trader",
      icon: "user",
      tag: "Individual",
      title: "Sole Trader",
      description:
        "Operated by an individual. Direct control and simple to establish, but the individual has unlimited personal liability for all business debts. Income is reported through your personal tax return.",
      href: "/services/business-structures/abn-registration",
      actionText: "Sole trader ABN",
    },
    {
      id: "partnership",
      icon: "team",
      tag: "Joint Enterprise",
      title: "Partnership",
      description:
        "Two or more people or entities carrying on business together. Lodges an annual partnership return while distributing net profit or loss to partners. Partners generally share joint liability.",
      href: "/services/business-structures/partnership-registration",
      actionText: "Partnership setup",
    },
    {
      id: "company",
      icon: "bank",
      tag: "Pty Ltd",
      title: "Company",
      description:
        "A distinct legal entity registered with ASIC. Offers limited liability protection, corporate tax rates, and ownership via shares. Requires formal director governance and separate company money.",
      href: "/services/business-structures/company-registration",
      actionText: "Company setup",
    },
    {
      id: "trust",
      icon: "apartment",
      tag: "Trustee & Deed",
      title: "Discretionary / Unit Trust",
      description:
        "A trustee holds business assets or operations for beneficiaries under a formal trust deed. Offers distribution flexibility and asset protection, often paired with a corporate trustee.",
      href: "/services/business-structures/corporate-trustee",
      actionText: "Trust & trustee",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="common-structures-comparison"
      tag="Entity Comparison"
      title="Which Business Structures Are Commonly Used?"
      subtitle="In Australia, businesses typically operate as a sole trader, partnership, company, or trust. Each entity carries distinct legal rights, liability exposures, tax rules, and compliance requirements."
      profiles={structureProfiles}
      columns={4}
      className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      bottomBanner={
        <EntityRoutingBanner
          tag="Setup & Registration Pathways"
          description="Ready to establish your structure? Whether you need a proprietary limited company incorporated or an Australian Business Number registered, choose your pathway below."
          buttons={[
            {
              label: "Company Registration (Pty Ltd)",
              href: "/services/business-structures/company-registration",
              type: "primary",
            },
            {
              label: "ABN Registration Service",
              href: "/services/business-structures/abn-registration",
              type: "secondary",
            },
          ]}
        />
      }
    />
  );
}
