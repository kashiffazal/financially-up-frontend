"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoNeedsAsicSupport Component
 * =============================
 * Section 3: Who Needs ASIC Compliance Support?
 *
 * Reuses ProfileCardsGrid for 6 target company profiles,
 * and EntityRoutingBanner for routing between Registered Agent and Company Changes.
 *
 * Background: Lite Brand Gradient.
 */
export default function WhoNeedsAsicSupport() {
  const companyProfiles = [
    {
      id: "ptyltd-directors",
      icon: "bank",
      tag: "Proprietary Companies",
      title: "Pty Ltd Company Directors",
      description:
        "Directors managing Australian proprietary companies who want annual statements reviewed, invoice due dates tracked, and solvency resolutions documented.",
      href: "/services/asic/annual-reviews",
      actionText: "Annual reviews",
    },
    {
      id: "multi-entity-groups",
      icon: "apartment",
      tag: "Corporate Groups",
      title: "Multi-Entity Groups & Holdings",
      description:
        "Business owners operating multiple corporate entities, holding companies, or corporate trustees requiring unified registered agent administration.",
      href: "/services/asic/registered-agent",
      actionText: "Group administration",
    },
    {
      id: "officeholder-changes",
      icon: "user",
      tag: "Director Appointments",
      title: "Companies With Officeholder Changes",
      description:
        "Businesses appointing or retiring directors, requiring verified Director IDs, signed written consents, and ASIC notification within 28 days.",
      href: "/services/asic/director-changes",
      actionText: "Director updates",
    },
    {
      id: "shareholders-investors",
      icon: "gift",
      tag: "Equity & Ownership",
      title: "Businesses Updating Share Capital",
      description:
        "Enterprises issuing new shares, transferring equity between founders or incoming investors, requiring member register updates and Form 484 lodgement.",
      href: "/services/asic/share-changes",
      actionText: "Share updates",
    },
    {
      id: "overdue-reviews",
      icon: "clock",
      tag: "Overdue & Backlog",
      title: "Overdue Annual Statements",
      description:
        "Companies that have missed review deadlines, incurred late lodgement penalties, or need historical company registers brought back into compliance.",
      href: "/services/asic/company-changes",
      actionText: "Catch-up lodgement",
    },
    {
      id: "registered-address-clients",
      icon: "home",
      tag: "Centralised Agent",
      title: "Directors Seeking a Stable Agent Address",
      description:
        "Founders who prefer not to publish home addresses and want ASIC correspondence, invoices, and legal notices received and handled professionally.",
      href: "/services/asic/registered-agent",
      actionText: "Agent representation",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-needs-asic-support"
      tag="Corporate Profiles"
      title="Who Needs ASIC Compliance Support?"
      subtitle="ASIC compliance services are designed for company directors seeking peace of mind, corporate groups coordinating multiple entities, and businesses undergoing officeholder or equity changes."
      profiles={companyProfiles}
      columns={3}
      className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      bottomBanner={
        <EntityRoutingBanner
          tag="Corporate Representation Pathways"
          description="Whether you need ongoing registered agent administration to centralise ASIC correspondence or a one-off company detail update, choose your pathway below."
          buttons={[
            {
              label: "ASIC Registered Agent Service",
              href: "/services/asic/registered-agent",
              type: "primary",
            },
            {
              label: "Company Changes (Form 484)",
              href: "/services/asic/company-changes",
              type: "secondary",
            },
          ]}
        />
      }
    />
  );
}
