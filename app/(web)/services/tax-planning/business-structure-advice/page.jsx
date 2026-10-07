import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatBusinessStructureAdviceInvolves from "./components/WhatBusinessStructureAdviceInvolves";
import StructureTypesComparison from "./components/StructureTypesComparison";
import FactorsToConsiderChoosingStructure from "./components/FactorsToConsiderChoosingStructure";
import TaxAndComplianceImplications from "./components/TaxAndComplianceImplications";
import WhenStructureNeedsReview from "./components/WhenStructureNeedsReview";
import AssetProtectionAndLegalConsiderations from "./components/AssetProtectionAndLegalConsiderations";
import WhatInformationUsefulForReview from "./components/WhatInformationUsefulForReview";
import HowFinanciallyUpHelpsStructure from "./components/HowFinanciallyUpHelpsStructure";
import RelatedBusinessStructureRibbon from "./components/RelatedBusinessStructureRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Business Structure Advice Australia | Financially Up",
  description:
    "Business structure advice for sole traders, partnerships, companies and trusts, with practical tax and compliance considerations.",
  keywords: [
    "business structure advice",
    "business structure advice Australia",
    "sole trader vs company Australia",
    "trust structure advice",
    "small business restructure rollover",
    "company setup tax advice",
    "business tax planning Sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/business-structure-advice/",
  },
  openGraph: {
    title: "Business Structure Advice Australia | Financially Up",
    description:
      "Business structure advice for sole traders, partnerships, companies and trusts, with practical tax and compliance considerations.",
    url: "https://financiallyup.com.au/services/tax-planning/business-structure-advice/",
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
  { label: "Business Structure Advice" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const businessStructureAdviceFaqs = [
  {
    key: "1",
    label: "Which business structure is best for tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        There is no universally best structure. The appropriate choice depends on ownership, income, risk, administration, growth plans and other factors. Tax should be considered together with legal and commercial consequences.
      </p>
    ),
  },
  {
    key: "2",
    label: "Should I operate as a sole trader or company?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A sole trader and a company have different legal, tax and reporting obligations. A company is a separate legal entity, while a sole trader operates personally. The right choice depends on your circumstances.
      </p>
    ),
  },
  {
    key: "3",
    label: "When should I review my business structure?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Before a major change such as bringing in an owner, acquiring significant assets, expanding, taking on investors or transferring the business is a useful time to review structure.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I change my business structure later?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, businesses can change structure, but transfers can create tax, registration, legal and administrative consequences. The implications should be reviewed before implementation.
      </p>
    ),
  },
  {
    key: "5",
    label: "Does business structure advice include legal advice?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Financially Up can provide tax and accounting guidance within scope. Legal documents, asset-protection advice and legal rights or obligations may require a lawyer.
      </p>
    ),
  },
];

/**
 * BusinessStructureAdvicePage Component
 * =====================================
 * Route: /services/tax-planning/business-structure-advice
 * Pillar 3.5: Business Structure Advice (Page 6 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BusinessStructureAdvicePage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: businessStructureAdviceFaqs.map((faq) => ({
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
        title="Business Structure Advice for Australian Businesses"
        subtitle="Strategic Entity Evaluation, Compliance Mapping & Restructuring Advice for Australian Businesses"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Business structure advice helps you compare the tax, accounting, compliance and practical implications of operating as a sole trader, partnership, company or trust. The right structure depends on the business, owners, growth plans, risk profile and how profits and assets are expected to be managed.
            </span>
            <span className="block mt-2">
              Financially Up provides business structure advice from an accounting and tax perspective for new businesses and existing owners considering a change. We do not treat one structure as universally better, and legal or regulated financial advice is separately obtained where required.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.5 • Entity Advisory Practice"
        highlights={[
          "Sole Trader vs Company vs Trust Modeling",
          "Asset Protection & Risk Review",
          "Small Business Restructure Rollover Analysis",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Australian Advisory Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What does business structure advice involve? */}
      <WhatBusinessStructureAdviceInvolves />

      {/* 2. Sole trader, partnership, company or trust? */}
      <StructureTypesComparison />

      {/* 3. Factors to consider when choosing a structure */}
      <FactorsToConsiderChoosingStructure />

      {/* 4. Tax and compliance implications */}
      <TaxAndComplianceImplications />

      {/* 5. When might a business structure need review? */}
      <WhenStructureNeedsReview />

      {/* 6. Asset protection and legal considerations */}
      <AssetProtectionAndLegalConsiderations />

      {/* 7. What information is useful for a structure review? */}
      <WhatInformationUsefulForReview />

      {/* 8. How Financially Up can help & Why choose us */}
      <HowFinanciallyUpHelpsStructure />

      {/* 9. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about entity selection, sole trader vs company comparison, restructuring timing, and legal boundaries with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Business Structure Advice Frequently Asked Questions"
        items={businessStructureAdviceFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Business Structure Advisory"
        title="Book an Appointment"
        subtitle="Discuss your circumstances with Financially Up and clarify the relevant tax and accounting issues, what information is needed and whether further planning or specialist advice should be separately scoped."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 11. Related Service Ribbon */}
      <RelatedBusinessStructureRibbon />
    </main>
  );
}
