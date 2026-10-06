"use client";

import React from "react";
import ProfileCardsGrid from "@/components/website/ProfileCardsGrid";
import EntityRoutingBanner from "@/components/website/EntityRoutingBanner";

/**
 * WhoNeedsBasServices Component
 * =============================
 * Section 3 of BAS, GST & Payroll Hub:
 * "Who may need BAS services?"
 *
 * Content is 100% VERBATIM from the professional SEO specialist document:
 * '5th Pillar BAS, GST & Payroll.docx' (Page 1).
 *
 * Background: Lite Brand Gradient.
 */
export default function WhoNeedsBasServices() {
  /**
   * The 5 Verbatim Business Categories from Document Section 2
   */
  const beneficiaryProfiles = [
    {
      id: "sole-traders-small-business",
      icon: "user",
      tag: "Sole Traders",
      title: "Sole Traders & Small Businesses Registered for GST",
      description:
        "Sole traders and small businesses registered for GST who require reliable calculation of taxable sales, GST collected, and claimable business credits.",
      href: "/services/bas-payroll/bas-lodgement",
      actionText: "BAS Lodgement",
    },
    {
      id: "companies-trusts-partnerships",
      icon: "bank",
      tag: "Entities",
      title: "Companies, Trusts & Partnerships",
      description:
        "Companies, trusts and partnerships with regular activity-statement obligations, reconciling entity-level trading, expenses and PAYG instalments.",
      href: "/services/bas-payroll/bas-lodgement",
      actionText: "Entity BAS",
    },
    {
      id: "employers-payg-withholding",
      icon: "team",
      tag: "Employers",
      title: "Employers Reporting PAYG Withholding",
      description:
        "Employers reporting PAYG withholding through their activity statements alongside wages, superannuation, and Single Touch Payroll records.",
      href: "/services/bas-payroll/payroll-services",
      actionText: "Payroll Services",
    },
    {
      id: "reconciling-gst-bas",
      icon: "calculator",
      tag: "Reconciliation",
      title: "Businesses Reconciling GST or BAS Figures",
      description:
        "Businesses that need support reconciling GST or BAS figures, ensuring figures in accounting software accurately align with bank transactions and tax invoices.",
      href: "/services/bas-payroll/gst-registration",
      actionText: "GST Support",
    },
    {
      id: "outstanding-activity-statements",
      icon: "clock",
      tag: "Catch-Up",
      title: "Owners With Outstanding Activity Statements",
      description:
        "Owners who have fallen behind and need to organise outstanding activity statements, addressing past periods systematically with ATO coordination.",
      href: "/services/bas-payroll/ias",
      actionText: "Catch-Up Lodgement",
    },
  ];

  return (
    <ProfileCardsGrid
      sectionId="who-needs-bas-services"
      tag="Client Profiles"
      title="Who may need BAS services?"
      subtitle="BAS services can be useful for businesses that are already GST registered, businesses with PAYG withholding obligations, growing businesses whose transaction volumes have increased, and owners who no longer want to manage activity statements themselves. They can also help where bookkeeping is up to date but the owner wants a professional review before lodgement."
      profiles={beneficiaryProfiles}
      columns={3}
      className="py-16 md:py-24 bg-gradient-to-b from-brand-bg-lighter via-white to-brand-bg-lighter/40 dark:from-zinc-900/60 dark:via-zinc-950 dark:to-zinc-900/40 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
      bottomBanner={
        <EntityRoutingBanner
          tag="Reporting & Registration Pathways"
          description="Whether you need help with regular activity statement lodgement or reviewing your GST registration thresholds, our team provides practical support."
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
