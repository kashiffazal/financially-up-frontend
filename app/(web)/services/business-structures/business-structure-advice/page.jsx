import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBusinessStructuresRibbon from "../components/RelatedBusinessStructuresRibbon";

import WhatDoesStructureAdviceCover from "./components/WhatDoesStructureAdviceCover";
import KeyFactorsChoosingStructure from "./components/KeyFactorsChoosingStructure";
import SoleTraderPartnershipCompanyTrustComparison from "./components/SoleTraderPartnershipCompanyTrustComparison";
import TaxAndCommercialBalanceWhenToReview from "./components/TaxAndCommercialBalanceWhenToReview";
import HowFinanciallyUpHelpsStructureAdvice from "./components/HowFinanciallyUpHelpsStructureAdvice";
import WhyChooseFinanciallyUpStructureAdvice from "./components/WhyChooseFinanciallyUpStructureAdvice";

export const metadata = {
  title: "Business Structure Advice Australia | Financially Up",
  description:
    "Business structure advice for sole traders, partnerships, companies and trusts. Review tax, ownership, compliance and practical setup considerations.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-structures/business-structure-advice/",
  },
  openGraph: {
    title: "Business Structure Advice Australia | Financially Up",
    description:
      "Business structure advice for sole traders, partnerships, companies and trusts. Review tax, ownership, compliance and practical setup considerations.",
    url: "https://financiallyup.com.au/services/business-structures/business-structure-advice/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Structures", href: "/services/business-structures" },
  { label: "Business Structure Advice" },
];

const structureAdviceFaqs = [
  {
    question: "What is the best business structure in Australia?",
    answer:
      "There is no universally best structure. The appropriate choice depends on the business activities, ownership, risk, tax position, administration, financing and future plans. A structure that works well for one business may be unsuitable for another.",
  },
  {
    question: "Should I choose a company because the tax rate may be lower?",
    answer:
      "Not on that factor alone. Companies have different tax, payment, ownership and compliance rules, and money taken from a company can have additional tax consequences. The whole commercial and tax position should be reviewed.",
  },
  {
    question: "Can an accountant help me choose between a company and trust?",
    answer:
      "An accountant can explain tax, accounting, administration and practical implications. Because trusts and companies also involve legal rights and documents, legal advice may be needed for parts of the decision or setup.",
  },
  {
    question: "Can I change my business structure later?",
    answer:
      "Yes, businesses can change structure, but moving assets, contracts, registrations or ownership may create tax, legal and administrative consequences. Review the change before implementation rather than assuming it is a simple registration update.",
  },
  {
    question: "Is this the same as registering a company or partnership?",
    answer:
      "No. Structure advice is the decision and review stage. Registration is the implementation stage after the appropriate entity has been chosen. Financially Up can assist with both where they fall within the agreed service scope.",
  },
];

export default function BusinessStructureAdvicePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Structure Advice for Australian Businesses",
    description:
      "Accountant-led business structure advice for sole traders, partnerships, companies, and trusts across Australia.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Business Structuring & Entity Advisory",
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
          badgeText="Entity Advisory Services"
          title="Business Structure Advice for Australian Businesses"
          description={[
            "Business structure advice helps you understand which legal and operating structure may suit the way your business is owned, run and expected to grow. The decision can affect tax, personal liability, ownership, administration, registrations, profit distribution and the work needed to remain compliant.",
            "Financially Up provides accountant-led business structure advice for people starting a business and for existing owners reviewing whether their current setup still makes sense. We compare the accounting, tax and practical implications of common structures without assuming that one option is automatically better.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Book an Appointment to discuss your business activities, ownership, growth plans and the tax and compliance factors that may influence your structure."
        />

        {/* Pillar 6 Subpages Ribbon */}
        <RelatedBusinessStructuresRibbon currentSlug="business-structure-advice" />

        {/* Section 1: What does business structure advice cover? */}
        <WhatDoesStructureAdviceCover />

        {/* Section 2: Key factors when choosing a business structure */}
        <KeyFactorsChoosingStructure />

        {/* Section 3: Sole trader, partnership, company or trust? */}
        <SoleTraderPartnershipCompanyTrustComparison />

        {/* Section 4: Tax and commercial balance & When to review */}
        <TaxAndCommercialBalanceWhenToReview />

        {/* Section 5: What Financially Up helps with & Information needed */}
        <HowFinanciallyUpHelpsStructureAdvice />

        {/* Section 6: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpStructureAdvice />

        {/* Section 7: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About Business Structure Advice"
          description="Find answers to common questions about entity selection, company vs trust trade-offs, changing structures, and tax rates."
          faqs={structureAdviceFaqs}
        />

        {/* Section 8: Final Call to Action */}
        <CallToActionBanner
          title="Book an Appointment"
          description="If you are starting a business or questioning whether your current setup still fits, book an appointment with Financially Up. We can review your circumstances, explain the relevant business structure considerations and identify the appropriate accounting, registration or specialist next steps."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
