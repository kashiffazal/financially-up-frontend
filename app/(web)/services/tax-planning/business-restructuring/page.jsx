import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenIsRestructureRelevant from "./components/WhenIsRestructureRelevant";
import TaxImplicationsOfRestructuring from "./components/TaxImplicationsOfRestructuring";
import ChoosingOrChangingStructure from "./components/ChoosingOrChangingStructure";
import CommonRestructuringIssuesToReview from "./components/CommonRestructuringIssuesToReview";
import SmallBusinessRestructuringAdvice from "./components/SmallBusinessRestructuringAdvice";
import WhatInformationNeededRestructuring from "./components/WhatInformationNeededRestructuring";
import HowFinanciallyUpHelpsRestructuring from "./components/HowFinanciallyUpHelpsRestructuring";
import RelatedRestructuringRibbon from "./components/RelatedRestructuringRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 11)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Business Restructuring Advice Australia | Financially Up",
  description:
    "Review business restructure tax implications, ownership, assets and compliance before making changes. Practical restructuring advice from Financially Up.",
  keywords: [
    "business restructuring advice",
    "business restructure tax Australia",
    "small business restructure rollover",
    "sole trader to company transfer tax",
    "Subdivision 328-G rollover",
    "business reorganization accountant",
    "corporate restructuring advice Sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/business-restructuring/",
  },
  openGraph: {
    title: "Business Restructuring Advice Australia | Financially Up",
    description:
      "Review business restructure tax implications, ownership, assets and compliance before making changes. Practical restructuring advice from Financially Up.",
    url: "https://financiallyup.com.au/services/tax-planning/business-restructuring/",
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
  { label: "Business Restructuring" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 11)
 */
const businessRestructuringFaqs = [
  {
    key: "1",
    label: "Does restructuring a business automatically reduce tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A restructure may be undertaken for commercial, ownership, administrative or risk reasons. Tax is one consideration, and the outcome depends on the specific transactions and rules that apply.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I move my sole trader business into a company without tax consequences?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. Transferring business assets can create tax consequences. Roll-over relief may be available in some circumstances, but eligibility needs to be checked before the transfer.
      </p>
    ),
  },
  {
    key: "3",
    label: "What is the small business restructure roll-over?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is an income-tax roll-over that can apply to eligible transfers of active business assets as part of a genuine restructure of an ongoing small business, where the statutory conditions are satisfied.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can a restructure create GST or stamp duty?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Potentially. GST treatment depends on the transaction, and state or territory duty rules can also apply. Income-tax roll-over relief does not automatically remove these other consequences.
      </p>
    ),
  },
  {
    key: "5",
    label: "Do I need a lawyer for a business restructure?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Often, legal advice or documents are required for company, trust, contract, ownership or employment changes. Financially Up can address the tax and accounting aspects and identify when separate legal advice should be obtained.
      </p>
    ),
  },
];

/**
 * BusinessRestructuringPage Component
 * ===================================
 * Route: /services/tax-planning/business-restructuring
 * Pillar 3.10: Business Restructuring (Page 11 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BusinessRestructuringPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: businessRestructuringFaqs.map((faq) => ({
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
        title="Business Restructuring Advice"
        subtitle="Strategic Tax, Commercial & Entity Restructuring for Growing Australian Businesses"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Business restructuring advice helps business owners understand the tax, accounting and commercial implications of changing how a business is owned or operated. A restructure may involve moving from one entity type to another, changing ownership, transferring assets, bringing in or removing owners, or simplifying an arrangement that no longer suits the business.
            </span>
            <span className="block mt-2">
              The tax outcome depends on the existing structure, the assets being moved, ownership, GST status, financing and the purpose of the restructure. A change that looks simple commercially can create capital gains tax, GST, duty, accounting or documentation consequences if it is implemented without a proper review.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.10 • Corporate Restructure Practice"
        highlights={[
          "Small Business Restructure Rollover (SBRR)",
          "Sole Trader to Company / Trust Conversions",
          "Asset Transfer Tax & Duty Mitigation",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Business Advisory Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. When may a business restructure be relevant? */}
      <WhenIsRestructureRelevant />

      {/* 2. What are the tax implications of restructuring? */}
      <TaxImplicationsOfRestructuring />

      {/* 3. Choosing or changing a business structure */}
      <ChoosingOrChangingStructure />

      {/* 4. Common restructuring issues to review before acting */}
      <CommonRestructuringIssuesToReview />

      {/* 5. Small business restructuring advice */}
      <SmallBusinessRestructuringAdvice />

      {/* 6. What information may be needed? */}
      <WhatInformationNeededRestructuring />

      {/* 7. How Financially Up can help & Why choose us */}
      <HowFinanciallyUpHelpsRestructuring />

      {/* 8. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about business restructuring tax consequences, SBRR rollovers, stamp duty, and legal requirements with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Business Restructuring Advice Frequently Asked Questions"
        items={businessRestructuringFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Business Restructuring Advisory"
        title="Book an Appointment"
        subtitle="Discuss your current structure, proposed changes, ownership, assets and business objectives with Financially Up before the restructure is implemented."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 10. Related Service Ribbon */}
      <RelatedRestructuringRibbon />
    </main>
  );
}
