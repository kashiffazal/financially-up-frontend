"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * CommonStructuresComparison Component
 * ====================================
 * Section 3: Which business structures are commonly used?
 *
 * Implements verbatim copy from Paragraphs 19 to 27 of '6th Pillar Business Structures.docx'.
 * Reuses ProfileCardsGrid (4 columns) to contrast:
 * 1. Sole trader (H3, Paras 20-21)
 * 2. Partnership (H3, Paras 22-23)
 * 3. Company (H3, Paras 24-25)
 * 4. Trust (H3, Paras 26-27)
 *
 * Background: Lite Brand Gradient with alternating palette.
 */
export default function CommonStructuresComparison() {
  /**
   * The 4 commonly used structures with verbatim descriptions from document
   */
  const structureProfiles = [
    {
      id: "sole-trader",
      icon: "user",
      tag: "Individual",
      title: "Sole trader",
      description:
        "A sole trader structure is operated by an individual. It is generally straightforward to establish, and the individual is responsible for the business's debts and obligations. Business income and expenses are reported through the individual's tax affairs. A sole trader may still need an ABN, GST registration, PAYG registrations or other registrations depending on the circumstances.",
      href: "/services/business-structures/abn-registration",
      actionText: "Sole trader ABN setup",
    },
    {
      id: "partnership",
      icon: "team",
      tag: "Partnership Entity",
      title: "Partnership",
      description:
        "A partnership involves two or more people carrying on business together and sharing income or losses under the partnership arrangement. A partnership generally has its own ABN and tax file number and lodges a partnership tax return, while each partner is taxed on their share of partnership income. Partnership rights and responsibilities can also depend on the applicable state or territory law and any partnership agreement.",
      href: "/services/business-structures/partnership-registration",
      actionText: "Partnership setup",
    },
    {
      id: "company",
      icon: "bank",
      tag: "Corporate Entity",
      title: "Company",
      description:
        "A company is a separate legal entity registered with ASIC. It has its own legal and tax obligations, and company money is not simply the personal money of its shareholders or directors. Establishing a company also creates ongoing corporate administration responsibilities. If a company is the intended structure, Financially Up can assist with company registration and coordinate the accounting registrations needed after incorporation.",
      href: "/services/business-structures/company-registration",
      actionText: "Company registration",
    },
    {
      id: "trust",
      icon: "apartment",
      tag: "Trust Structure",
      title: "Trust",
      description:
        "A trust is an arrangement under which a trustee holds and manages property or business activities for beneficiaries in accordance with the trust deed and applicable law. Trusts can be more complex to establish and administer. Legal documentation, including the trust deed, should be prepared or reviewed by an appropriately qualified legal adviser where required. Financially Up can assist with the related accounting, tax and registration steps once the structure is appropriately established.",
      href: "/services/business-structures/corporate-trustee",
      actionText: "Corporate trustee setup",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="common-structures-comparison"
      tag="Entity Comparison"
      title="Which business structures are commonly used?"
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
