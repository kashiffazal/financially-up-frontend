import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatTrustDistributionPlanningInvolves from "./components/WhatTrustDistributionPlanningInvolves";
import WhyTimingAndDeedMatter from "./components/WhyTimingAndDeedMatter";
import BeneficiariesAndTaxConsequences from "./components/BeneficiariesAndTaxConsequences";
import StreamingCapitalGainsAndFrankedDistributions from "./components/StreamingCapitalGainsAndFrankedDistributions";
import WhatInformationNeededTrustPlanning from "./components/WhatInformationNeededTrustPlanning";
import HowFinanciallyUpHelpsTrustPlanning from "./components/HowFinanciallyUpHelpsTrustPlanning";
import RelatedTrustPlanningRibbon from "./components/RelatedTrustPlanningRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 10)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Trust Distribution Tax Advice & Planning | Financially Up",
  description:
    "Plan trust distributions with clear tax advice on beneficiaries, resolutions, streaming and records. Australia-wide support from Financially Up.",
  keywords: [
    "trust distribution tax advice",
    "family trust distribution planning",
    "trustee resolution 30 June",
    "capital gains streaming trust",
    "franked distributions trust specific entitlement",
    "family trust election FTE Australia",
    "trust tax accountant Sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/trust-distribution-planning/",
  },
  openGraph: {
    title: "Trust Distribution Tax Advice & Planning | Financially Up",
    description:
      "Plan trust distributions with clear tax advice on beneficiaries, resolutions, streaming and records. Australia-wide support from Financially Up.",
    url: "https://financiallyup.com.au/services/tax-planning/trust-distribution-planning/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the Tax Planning service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Tax Planning", href: "/services/tax-planning" },
  { label: "Trust Distribution Planning" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 10)
 */
const trustDistributionPlanningFaqs = [
  {
    key: "1",
    label: "When should trust distribution planning be done?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Ideally before the trustee needs to make the relevant distribution decision for the income year. The exact timing depends on the trust deed and the tax rules applying to the type of entitlement being created.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does every trust distribution have to be paid in cash by 30 June?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Payment and present entitlement are different concepts. A valid entitlement may exist without immediate cash payment, depending on the deed, resolution and circumstances.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can a trustee distribute income to any family member?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. The person or entity must be an eligible beneficiary under the trust deed, and tax rules or elections may affect the consequences of a distribution.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can capital gains or franked dividends be streamed to a particular beneficiary?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Potentially, where the deed permits it and the specific entitlement requirements are satisfied and properly recorded. The position should be reviewed before relying on streaming.
      </p>
    ),
  },
  {
    key: "5",
    label: "Is trust distribution planning the same as preparing a trust tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Planning considers the trustee’s decisions before they are finalized. The trust tax return reports the resulting tax position after the year has ended.
      </p>
    ),
  },
];

/**
 * TrustDistributionPlanningPage Component
 * =======================================
 * Route: /services/tax-planning/trust-distribution-planning
 * Pillar 3.9: Trust Distribution Planning (Page 10 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function TrustDistributionPlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trustDistributionPlanningFaqs.map((faq) => ({
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
        title="Trust Distribution Tax Advice and Planning"
        subtitle="Proactive Trustee Distribution Planning, Deed Compliance & Streaming for Australian Family Trusts"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Trust distribution tax advice helps trustees plan and document how trust income may be distributed, while considering the trust deed, beneficiary circumstances and current tax rules. The aim is to make informed decisions before entitlements are created, rather than trying to reconstruct the position after year-end.
            </span>
            <span className="block mt-2">
              Financially Up assists trustees, family groups and business owners with trust distribution planning, including review of trust income, proposed beneficiaries, distribution resolutions, capital gains and franked distributions where relevant. This service is separate from preparing the annual trust tax return, although the two processes need to align.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.9 • Fiduciary Advisory Practice"
        highlights={[
          "Pre-30 June Trustee Resolutions & Deeds",
          "Capital Gains & Franked Distribution Streaming",
          "Family Trust Election (FTE) & Section 100A Review",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Trust Tax Planning Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What does trust distribution planning involve? */}
      <WhatTrustDistributionPlanningInvolves />

      {/* 2. Why timing and the trust deed matter */}
      <WhyTimingAndDeedMatter />

      {/* 3. Beneficiaries, present entitlement and tax consequences */}
      <BeneficiariesAndTaxConsequences />

      {/* 4. Streaming capital gains and franked distributions */}
      <StreamingCapitalGainsAndFrankedDistributions />

      {/* 5. What information may be needed? */}
      <WhatInformationNeededTrustPlanning />

      {/* 6. How Financially Up can help & Why choose us */}
      <HowFinanciallyUpHelpsTrustPlanning />

      {/* 7. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about trust distribution timing, cash payment vs present entitlement, streaming rules, and deed requirements with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Trust Distribution Planning Frequently Asked Questions"
        items={trustDistributionPlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Trust Distribution Advisory"
        title="Book an Appointment"
        subtitle="Discuss the trust deed, expected income, proposed beneficiaries, distribution timing and documentation with Financially Up before the relevant decisions are finalized."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 9. Related Service Ribbon */}
      <RelatedTrustPlanningRibbon />
    </main>
  );
}
