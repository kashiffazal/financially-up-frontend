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
 */
export default function WhoWeHelp() {
  /**
   * The 6 Target Business Profiles from client documentation
   */
  const businessProfiles = [
    {
      id: "sme",
      icon: "shop",
      tag: "SMEs",
      title: "Small & Medium Businesses",
      description:
        "Established enterprises seeking unified, end-to-end accounting, tax compliance, BAS reporting, and strategic tax planning in one place.",
      href: "/services/business-tax/business-tax-compliance",
      actionText: "Learn more",
    },
    {
      id: "companies",
      icon: "bank",
      tag: "Pty Ltd",
      title: "Trading & Holding Companies",
      description:
        "Proprietary limited companies requiring annual company tax returns, financial statements, Division 7A management, and franking account reconciliations.",
      href: "/services/business-tax/company-tax-returns",
      actionText: "Learn more",
    },
    {
      id: "trusts",
      icon: "apartment",
      tag: "Trusts",
      title: "Family & Unit Trusts",
      description:
        "Trust entities that need statutory trust tax returns, balance sheets, and distribution resolutions documented before the mandatory 30 June deadline.",
      href: "/services/business-tax/trust-tax-returns",
      actionText: "Learn more",
    },
    {
      id: "sole-traders",
      icon: "user",
      tag: "Sole Traders",
      title: "Independent Contractors & Traders",
      description:
        "Sole traders whose commercial business activity, expenses, and GST are reported through their individual tax return business schedule.",
      href: "/services/business-tax/sole-trader-tax",
      actionText: "Learn more",
    },
    {
      id: "scaling",
      icon: "rise",
      tag: "Growth",
      title: "Growing Commercial Enterprises",
      description:
        "Businesses that have expanded beyond basic bookkeeping software and require clearer year-end reporting, cashflow analysis, and balance sheet integrity.",
      href: "/services/business-tax/business-financial-statements",
      actionText: "Learn more",
    },
    {
      id: "planning",
      icon: "solution",
      tag: "Planning",
      title: "Proactive Business Owners",
      description:
        "Directors and owners seeking accurate tax compliance completed alongside practical discussions regarding tax timing, asset write-offs, and distributions.",
      href: "/services/business-tax/year-end-accounting",
      actionText: "Learn more",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-we-help"
      tag="Client Profiles"
      title="Who We Help"
      subtitle="Financially Up works with business owners across Australia who need ongoing accounting and tax support or help bringing year-end records into a position that can be used for tax reporting."
      profiles={businessProfiles}
      columns={3}
      bottomBanner={
        <EntityRoutingBanner
          tag="Specific Annual Returns"
          description="If your enquiry relates specifically to annual company tax reporting or discretionary trust distribution resolutions, explore our specialized service pathways below."
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
