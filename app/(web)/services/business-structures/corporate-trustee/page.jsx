import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBusinessStructuresRibbon from "../components/RelatedBusinessStructuresRibbon";

import WhatIsCorporateTrustee from "./components/WhatIsCorporateTrustee";
import WhoConsidersAndSetupSteps from "./components/WhoConsidersAndSetupSteps";
import KeyConsiderationsCorporateTrustee from "./components/KeyConsiderationsCorporateTrustee";
import HowFinanciallyUpHelpsCorporateTrustee from "./components/HowFinanciallyUpHelpsCorporateTrustee";
import WhyChooseFinanciallyUpCorporateTrustee from "./components/WhyChooseFinanciallyUpCorporateTrustee";

export const metadata = {
  title: "Corporate Trustee Setup Australia | Financially Up",
  description:
    "Corporate trustee setup Australia for trusts, including company registration, tax registrations and accounting setup with clear professional scope.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-structures/corporate-trustee/",
  },
  openGraph: {
    title: "Corporate Trustee Setup Australia | Financially Up",
    description:
      "Corporate trustee setup Australia for trusts, including company registration, tax registrations and accounting setup with clear professional scope.",
    url: "https://financiallyup.com.au/services/business-structures/corporate-trustee/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Structures", href: "/services/business-structures" },
  { label: "Corporate Trustee Setup" },
];

const corporateTrusteeFaqs = [
  {
    question: "Is a corporate trustee required for a family trust?",
    answer:
      "No. A trust may have an individual trustee or a company trustee, depending on the trust deed and the circumstances. A corporate trustee can be appropriate in some structures, but it is not automatically required.",
  },
  {
    question: "Does a corporate trustee automatically need its own ABN?",
    answer:
      "Not merely because it acts as trustee. The trust may need or be entitled to an ABN for its enterprise, with the trustee registering in its trustee capacity. The company may need a separate ABN only if its own activities require one. The correct registration position should be checked for the actual arrangement.",
  },
  {
    question: "Can Financially Up prepare the trust deed?",
    answer:
      "Our stated service scope covers accounting, tax, registration and advisory matters. A trust deed is a legal document, so preparation or legal interpretation may require an appropriately qualified legal adviser. We can coordinate the accounting and tax setup with the legal documents.",
  },
];

export default function CorporateTrusteePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Corporate Trustee Setup Australia",
    description:
      "Corporate trustee setup services in Australia for family, unit, and discretionary trusts, including company registration and trust tax setup.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Corporate Trustee & Trust Governance Advisory",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-100">
        {/* Hero Section */}
        <SubServiceHero
          parentService={{
            label: "Business Structures Hub",
            href: "/services/business-structures",
          }}
          breadcrumbs={breadcrumbs}
          badgeText="Trustee Company Governance"
          title="Corporate Trustee Setup Australia"
          description={[
            "A corporate trustee setup involves establishing a company to act as trustee of a trust and then making sure the company, trust registrations and accounting records are set up consistently. For business owners and family groups, the important point is that the company and the trust arrangement are not the same thing: the company is a separate legal entity acting as trustee, while the trust is a legal relationship governed by the trust deed and applicable law.",
            "Financially Up can assist with the accounting, tax-registration and company-registration aspects of a corporate trustee structure. Where a trust deed, asset-protection advice or other legal documentation is required, an appropriately qualified legal adviser may also be needed. This separation of roles helps ensure the structure is established for the right reasons rather than simply registering a company and assuming the rest is automatic.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="If you are considering a corporate trustee, an initial discussion can help clarify the proposed trust, the company setup, registrations, tax and accounting requirements, and whether legal input is needed before implementation."
        />

        {/* Pillar 6 Subpages Ribbon */}
        <RelatedBusinessStructuresRibbon currentSlug="corporate-trustee" />

        {/* Section 1: What is a corporate trustee? */}
        <WhatIsCorporateTrustee />

        {/* Section 2: Who may consider & What setup involves */}
        <WhoConsidersAndSetupSteps />

        {/* Section 3: Key considerations before establishing a corporate trustee */}
        <KeyConsiderationsCorporateTrustee />

        {/* Section 4: What Financially Up helps with & Information needed */}
        <HowFinanciallyUpHelpsCorporateTrustee />

        {/* Section 5: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpCorporateTrustee />

        {/* Section 6: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About Corporate Trustees"
          description="Find answers to common questions about company trustees for family trusts, separate ABN rules, and trust deed legal requirements."
          faqs={corporateTrusteeFaqs}
        />

        {/* Section 7: Final Call to Action */}
        <CallToActionBanner
          title="Book an Appointment"
          description="If you want to set up a corporate trustee or review an existing trustee arrangement, book an appointment with Financially Up to discuss the proposed structure, registrations, accounting setup and the appropriate professional scope."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
