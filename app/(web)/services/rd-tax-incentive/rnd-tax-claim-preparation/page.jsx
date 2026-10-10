import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatMustBeInPlace from "./components/WhatMustBeInPlace";
import HowProjectCostsReconciled from "./components/HowProjectCostsReconciled";
import UsefulSupportingDocuments from "./components/UsefulSupportingDocuments";
import PreparationProcessWorkflow from "./components/PreparationProcessWorkflow";
import WhyChooseFinanciallyUpRdClaim from "./components/WhyChooseFinanciallyUpRdClaim";
import RelatedServiceRibbon from "./components/RelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2 of 15th Pillar R&D Tax Incentive.docx)
 */
export const metadata = {
  title: "R&D Tax Claim Preparation | Financially Up",
  description:
    "Prepare an R&D tax claim using traceable project costs and records. Get help reconciling expenditure, registration details and the company tax return.",
  keywords: [
    "R&D tax claim preparation",
    "R&D tax claim accountant",
    "R&D tax offset Australia",
    "AusIndustry R&D schedule",
    "notional deductions calculation",
    "R&D expenditure reconciliation",
    "overseas finding R&D",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/rd-tax-incentive/rnd-tax-claim-preparation/",
  },
  openGraph: {
    title: "R&D Tax Claim Preparation | Financially Up",
    description:
      "Prepare an R&D tax claim using traceable project costs and records. Get help reconciling expenditure, registration details and the company tax return.",
    url: "https://financiallyup.com.au/services/rd-tax-incentive/rnd-tax-claim-preparation/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking back through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "R&D Tax Incentive", href: "/services/rd-tax-incentive" },
  { label: "R&D Tax Claim Preparation" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const rdClaimFaqs = [
  {
    key: "1",
    label: "Can I claim all wages paid to a development team?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Wages must be assessed and allocated to eligible activities on evidence. Routine
        development and other work should not be counted simply because the staff work in the same team.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I lodge the R&D claim before registering activities?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The company needs to meet the program&apos;s registration requirements and use the relevant
        registration information in the company claim. We check the sequence and timing for your year.
      </p>
    ),
  },
  {
    key: "3",
    label: "What if I cannot find old timesheets?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We review what contemporaneous project and payroll evidence exists and whether an allocation
        can be supported. Missing records may limit a claim; figures should not be invented.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does the R&D tax offset always produce a cash refund?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The type and amount of offset depend on the current rules and the company&apos;s
        circumstances. The claim needs a full tax calculation.
      </p>
    ),
  },
];

/**
 * RdTaxClaimPreparationPage Component
 * ====================================
 * Route: /services/rd-tax-incentive/rnd-tax-claim-preparation
 * Pillar 15.1: R&D Tax Claim Preparation (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function RdTaxClaimPreparationPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rdClaimFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.label,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.children.props.children,
      },
    })),
  };

  return (
    <main className="w-full">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 0. Dedicated Sub-Service Hero with Verbatim Lead Copy */}
      <SubServiceHero
        title="R&D Tax Claim Preparation with Clear Supporting Records"
        subtitle="Traceable Financial Reconciliations, AusIndustry Coordination & ATO Return Support"
        description={
          <span className="space-y-3 block">
            <span className="block">
              R&amp;D tax claim preparation turns registered activities and financial records into a
              supportable company tax claim. It requires more than adding up development invoices:
              expenditure must be connected to eligible activities, reconciled to the accounts and
              assessed under the R&amp;D tax rules before the offset is included in the company return.
            </span>
            <span className="block mt-2">
              Financially Up works with companies that have registered, or are preparing to register,
              R&amp;D activities and need help with the tax and accounting stage. Book an Appointment
              to discuss the income year, registration status and records. We will identify the next
              step and the scope of claim assistance appropriate to your circumstances.
            </span>
          </span>
        }
        parentService={{
          label: "R&D Tax Incentive Hub",
          href: "/services/rd-tax-incentive",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 15.1 • R&D Claim Accounting"
        highlights={[
          "Traceable Ledger & Payroll Allocations",
          "10-Month AusIndustry Registration Deadline",
          "Registered Tax Agent #26234055",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "R&D Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What must be in place before a claim is lodged? */}
      <WhatMustBeInPlace />

      {/* 2. How are project costs reconciled? */}
      <HowProjectCostsReconciled />

      {/* 3. What supporting documents are useful? */}
      <UsefulSupportingDocuments />

      {/* 4. What does the preparation process involve? */}
      <PreparationProcessWorkflow />

      {/* 5. Why work with Financially Up? */}
      <WhyChooseFinanciallyUpRdClaim />

      {/* 6. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="R&D Tax Claim Preparation FAQs"
        subtitle="Common questions about eligible wages, registration timing, timesheets, and cash refund calculations."
        image="/images/services/faq.webp"
        imageAlt="R&D Tax Claim Preparation FAQs"
        items={rdClaimFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Prepare a claim you can explain"
        title="Book an Appointment"
        subtitle="Book an Appointment with Financially Up to review your activity registration, cost records and the R&D tax claim preparation needed for your company return."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore R&D Tax Incentive"
        secondaryButtonHref="/services/rd-tax-incentive"
      />

      {/* 8. Contextual Service Ribbon */}
      <RelatedServiceRibbon />
    </main>
  );
}
