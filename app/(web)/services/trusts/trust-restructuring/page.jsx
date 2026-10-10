import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatDoesTrustRestructuringInvolve from "./components/WhatDoesTrustRestructuringInvolve";
import WhenMightTrustNeedRestructuringAdvice from "./components/WhenMightTrustNeedRestructuringAdvice";
import KeyTaxIssuesBeforeRestructure from "./components/KeyTaxIssuesBeforeRestructure";
import TrustVariationAndCgtResettlementRisk from "./components/TrustVariationAndCgtResettlementRisk";
import HowFinanciallyUpHelpsRestructure from "./components/HowFinanciallyUpHelpsRestructure";
import WhatInformationShouldYouPrepare from "./components/WhatInformationShouldYouPrepare";
import WhyChooseFinanciallyUpRestructure from "./components/WhyChooseFinanciallyUpRestructure";
import RelatedTrustRestructuringRibbon from "./components/RelatedTrustRestructuringRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 7 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Trust Restructuring Accountant Australia | Financially Up",
  description:
    "Trust restructuring accountant support for deed, trustee, control and tax changes. Review implications before changing an existing trust arrangement.",
  keywords: [
    "trust restructuring accountant",
    "trust deed variation tax",
    "CGT resettlement TD 2012/21",
    "trust restructuring Australia",
    "family trust succession tax",
    "trust loss rules control test",
    "unit trust restructure",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/trust-restructuring/",
  },
  openGraph: {
    title: "Trust Restructuring Accountant Australia | Financially Up",
    description:
      "Trust restructuring accountant support for deed, trustee, control and tax changes. Review implications before changing an existing trust arrangement.",
    url: "https://financiallyup.com.au/services/trusts/trust-restructuring/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Trusts", href: "/services/trusts" },
  { label: "Trust Restructuring Accountant" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 7)
 */
const trustRestructuringFaqs = [
  {
    key: "1",
    label: "Does changing a trust always trigger capital gains tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The tax outcome depends on the legal and economic effect of the change. A valid amendment under an existing
        deed power does not automatically create a new trust for CGT purposes, but asset transfers or more substantial
        changes can have different consequences. The specific proposal should be reviewed before implementation.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can Financially Up prepare the deed to restructure a trust?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up can assist with the accounting and tax implications of a trust restructure. Drafting or
        confirming the legal validity of trust deeds is legal work and may require an appropriately qualified legal
        adviser.
      </p>
    ),
  },
  {
    key: "3",
    label: "What is the difference between trust restructuring and changing the trustee?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Changing a trustee is one specific governance change. Trust restructuring is broader and may involve the deed,
        control, unit holdings, beneficiaries, assets or related entities. A trustee change can be part of a
        restructure, but it does not cover every restructuring issue.
      </p>
    ),
  },
  {
    key: "4",
    label: "Should I restructure a trust before selling or transferring an asset?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        If a proposed transaction may involve a restructure, it is generally better to review the tax and legal
        implications before documents are signed or ownership changes. Timing can affect CGT, duty and other outcomes
        depending on the circumstances.
      </p>
    ),
  },
];

/**
 * TrustRestructuringPage Component
 * ================================
 * Route: /services/trusts/trust-restructuring
 * Pillar 8.6: Trust Restructuring Accountant (Page 7 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function TrustRestructuringPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trustRestructuringFaqs.map((faq) => ({
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
        title="Trust Restructuring Accountant"
        subtitle="Deed Variations, Control Changes, CGT Resettlement Review & Structural Reorganizations"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Changing an existing trust can affect tax, control, ownership, compliance and legal rights. A trust
              restructuring accountant helps assess the accounting and tax implications before a proposed change is
              implemented, so the restructure is considered in the context of the trust deed, assets, beneficiaries and
              wider group.
            </span>
            <span className="block mt-2">
              Trust restructuring can include changes to how a trust is governed or operated, changes to a trustee or
              appointer, amendments to trust terms, changes to unit holdings, succession arrangements or a broader
              reorganization involving trust assets. The tax outcome depends on exactly what changes and how the
              documents are implemented. A restructure should not be treated as a routine administrative amendment
              simply because the trust continues to use the same name.
            </span>
            <span className="block mt-2">
              If you are considering changes to a family trust, unit trust or related structure, an initial discussion
              can help identify the proposed change, the records and documents that need review, and whether tax,
              accounting or legal advice should be separately scoped.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.6 • Trust Restructuring Practice"
        highlights={[
          "CGT Resettlement Risk Analysis (TD 2012/21)",
          "Trust Loss Rules & Family Trust Election Tests",
          "Deed Power Verification & Legal Coordination",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Trust Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What does trust restructuring involve? */}
      <WhatDoesTrustRestructuringInvolve />

      {/* 2. When might a trust need restructuring advice? */}
      <WhenMightTrustNeedRestructuringAdvice />

      {/* 3. Key tax issues before a trust restructure */}
      <KeyTaxIssuesBeforeRestructure />

      {/* 4. Trust variation and CGT resettlement risk */}
      <TrustVariationAndCgtResettlementRisk />

      {/* 5. How Financially Up can help */}
      <HowFinanciallyUpHelpsRestructure />

      {/* 6. What information should you prepare? */}
      <WhatInformationShouldYouPrepare />

      {/* 7. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpRestructure />

      {/* 8. Related Services Ribbon */}
      <RelatedTrustRestructuringRibbon />

      {/* 9. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Trust Restructuring"
        description="Clear answers regarding CGT resettlement risks, legal deed drafting, trustee changes, and asset transaction timing."
        items={trustRestructuringFaqs}
      />

      {/* 10. Call to Action Banner */}
      <CallToActionBanner
        title="Planning Changes to Your Trust Structure?"
        subtitle="If your trust arrangement needs to change, book an appointment with Financially Up to discuss the existing structure, the proposed outcome and the tax and accounting issues that should be reviewed before implementation."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
