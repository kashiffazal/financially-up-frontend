"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoWeHelp Component
 * ===================
 * Section 3: Who We Help (Business Tax Hub).
 *
 * Utilizes the mutual ProfileCardsGrid component for the 6 target business profiles,
 * and the mutual EntityRoutingBanner component for corporate entity practice routing.
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '2nd pillar Business Tax Final Pages.docx'.
 */
export default function WhoWeHelp() {
  /**
   * The 6 Target Business Profiles from client documentation (verbatim)
   */
  const businessProfiles = [
    {
      id: "sme",
      icon: "shop",
      tag: "SMEs",
      title: "Small and Medium Businesses",
      description:
        "Small and medium-sized businesses that want accounting and tax support in one place.",
      href: "/services/business-tax/business-tax-compliance",
      actionText: "Tax & accounting support",
    },
    {
      id: "companies",
      icon: "bank",
      tag: "Companies",
      title: "Australian Companies",
      description:
        "Companies requiring annual company tax and accounting work.",
      href: "/services/business-tax/company-tax-returns",
      actionText: "Company tax returns",
    },
    {
      id: "trusts",
      icon: "apartment",
      tag: "Trusts",
      title: "Trust Entities",
      description:
        "Trusts that need trust tax returns, accounts and distribution reporting.",
      href: "/services/business-tax/trust-tax-returns",
      actionText: "Trust tax returns",
    },
    {
      id: "sole-traders",
      icon: "user",
      tag: "Sole Traders",
      title: "Sole Traders",
      description:
        "Sole traders whose business activity is reported through their individual return.",
      href: "/services/business-tax/sole-trader-tax",
      actionText: "Sole trader tax",
    },
    {
      id: "growing",
      icon: "rise",
      tag: "Growth",
      title: "Growing Businesses",
      description:
        "Businesses that have grown beyond basic bookkeeping and need clearer year-end reporting.",
      href: "/services/business-tax/business-financial-statements",
      actionText: "Year-end reporting",
    },
    {
      id: "planning",
      icon: "solution",
      tag: "Planning",
      title: "Business Owners",
      description:
        "Owners who want tax compliance completed alongside practical tax planning discussions.",
      href: "/services/business-tax/year-end-accounting",
      actionText: "Tax planning discussions",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-we-help"
      tag="Client Profiles"
      title="Who We Help"
      subtitle={
        <span className="block space-y-2">
          <span className="block">
            Financially Up works with business owners who need ongoing
            accounting and tax support or help bringing year-end records into a
            position that can be used for tax reporting.
          </span>
          <span className="block text-slate-500 dark:text-zinc-400">
            This can include businesses with straightforward operations as well
            as businesses with multiple income streams, employees, GST
            obligations, asset purchases, loans between related parties or more
            involved ownership structures.
          </span>
        </span>
      }
      profiles={businessProfiles}
      columns={3}
      className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-b border-slate-100 dark:border-zinc-800 transition-colors"
      bottomBanner={
        <EntityRoutingBanner
          tag="Entity Tax Reporting"
          description="For company-specific annual tax reporting, see our Company Tax Returns. For trusts, see our Trust Tax Returns."
          buttons={[
            {
              label: "Company Tax Returns",
              href: "/services/business-tax/company-tax-returns",
              type: "primary",
            },
            {
              label: "Trust Tax Returns",
              href: "/services/business-tax/trust-tax-returns",
              type: "secondary",
            },
          ]}
        />
      }
    />
  );
}
