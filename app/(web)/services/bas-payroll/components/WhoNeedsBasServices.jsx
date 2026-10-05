"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoNeedsBasServices Component
 * =============================
 * Section 3: Who May Need BAS & Payroll Services?
 *
 * Reuses ProfileCardsGrid for 6 target business profiles,
 * and EntityRoutingBanner for routing between BAS Lodgement and GST Registration.
 * Background: Lite Brand Gradient.
 */
export default function WhoNeedsBasServices() {
  const beneficiaryProfiles = [
    {
      id: "sole-traders-gst",
      icon: "user",
      tag: "Sole Traders",
      title: "GST-Registered Sole Traders",
      description:
        "Independent contractors and tradespeople meeting or approaching the $75,000 threshold who need simple, accurate quarterly BAS preparation.",
      href: "/services/bas-payroll/bas-lodgement",
      actionText: "BAS lodgement",
    },
    {
      id: "commercial-entities",
      icon: "bank",
      tag: "Companies & Trusts",
      title: "Corporate & Trust Entities",
      description:
        "Proprietary limited companies, discretionary trusts, and partnerships with complex trading income, input credits, and quarterly PAYG instalments.",
      href: "/services/bas-payroll/bas-lodgement",
      actionText: "Entity BAS",
    },
    {
      id: "employers-payg",
      icon: "team",
      tag: "Employers",
      title: "Employers With PAYG Withholding",
      description:
        "Businesses employing staff who must remit tax withheld from employee wages (Labels W1 and W2) and coordinate Single Touch Payroll filings.",
      href: "/services/bas-payroll/payroll-services",
      actionText: "Payroll support",
    },
    {
      id: "gst-reconciliations",
      icon: "calculator",
      tag: "Reconciliation",
      title: "Businesses Reconciling GST Figures",
      description:
        "Enterprises seeking a thorough pre-lodgement review of sales and purchases to ensure every claimed credit has a valid ATO-compliant tax invoice.",
      href: "/services/bas-payroll/gst-registration",
      actionText: "GST advice",
    },
    {
      id: "overdue-activity-statements",
      icon: "clock",
      tag: "Overdue Periods",
      title: "Overdue & Catch-Up Activity Statements",
      description:
        "Business owners who have fallen behind on multiple quarters or monthly IAS lodgements and need an orderly catch-up process with ATO liaison.",
      href: "/services/bas-payroll/ias",
      actionText: "Catch-up lodgement",
    },
    {
      id: "pre-lodgement-review",
      icon: "safety",
      tag: "Quality Control",
      title: "Owners Seeking Registered Review",
      description:
        "Businesses with internal bookkeepers who want a registered tax agent to review GST coding, resolve discrepancies, and lodge on their behalf.",
      href: "/services/bas-payroll/employer-compliance",
      actionText: "Compliance review",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-needs-bas-services"
      tag="Client Profiles"
      title="Who May Need BAS & Payroll Support?"
      subtitle="BAS services are designed for businesses that are already GST registered, employers with PAYG withholding obligations, and owners seeking peace of mind through professional lodgement."
      profiles={beneficiaryProfiles}
      columns={3}
      className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      bottomBanner={
        <EntityRoutingBanner
          tag="Reporting & Registration Pathways"
          description="Whether you require ongoing quarterly activity statement lodgement or assistance registering your business for GST, select your pathway below."
          buttons={[
            {
              label: "BAS Lodgement Service",
              href: "/services/bas-payroll/bas-lodgement",
              type: "primary",
            },
            {
              label: "GST Registration Service",
              href: "/services/bas-payroll/gst-registration",
              type: "secondary",
            },
          ]}
        />
      }
    />
  );
}
