import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBusinessStructuresRibbon from "../components/RelatedBusinessStructuresRibbon";

import WhatDoesCompanyRegistrationInvolve from "./components/WhatDoesCompanyRegistrationInvolve";
import InformationNeededBeforeRegistration from "./components/InformationNeededBeforeRegistration";
import PtyLtdCompanyAndNameDifferences from "./components/PtyLtdCompanyAndNameDifferences";
import WhatHappensAfterIncorporation from "./components/WhatHappensAfterIncorporation";
import CommonCompanySetupIssues from "./components/CommonCompanySetupIssues";
import WhyChooseFinanciallyUpCompanyReg from "./components/WhyChooseFinanciallyUpCompanyReg";

export const metadata = {
  title: "Company Registration Australia | Financially Up",
  description:
    "Company registration Australia support for Pty Ltd setup, ASIC registration, director details, shares, ABN and related accounting registrations.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-structures/company-registration/",
  },
  openGraph: {
    title: "Company Registration Australia | Financially Up",
    description:
      "Company registration Australia support for Pty Ltd setup, ASIC registration, director details, shares, ABN and related accounting registrations.",
    url: "https://financiallyup.com.au/services/business-structures/company-registration/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Structures", href: "/services/business-structures" },
  { label: "Company Registration" },
];

const companyRegistrationFaqs = [
  {
    question: "Can I register a company myself in Australia?",
    answer:
      "Yes. Eligible company types can be registered through the Business Registration Service. Professional assistance can be useful where you want help checking the entity details, ownership information and related tax registrations before submission.",
  },
  {
    question: "Do directors need a director ID before company registration?",
    answer:
      "A person who plans to become a director must apply for a director ID before appointment. Company registration should therefore be coordinated with the proposed directors' director ID obligations.",
  },
  {
    question: "Does a company automatically get an ABN?",
    answer:
      "A company registered with ASIC is entitled to an ABN, but the ABN is a separate business identifier and needs to be applied for. The company will also need any other tax registrations relevant to its activities.",
  },
  {
    question: "Is registering a business name the same as registering a company?",
    answer:
      "No. The companies register and business names register are separate. A company may need a business name if it trades under a name other than its registered company name.",
  },
  {
    question: "Does company registration include legal documents?",
    answer:
      "No. Company incorporation and tax registrations do not include legal documents such as shareholders' agreements. Where legal drafting or advice is required, that work may need to be completed by an appropriately qualified legal adviser.",
  },
];

export default function CompanyRegistrationPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Company Registration Australia",
    description:
      "Company registration in Australia for Pty Ltd setup, ASIC registration, director details, shares, ABN and related accounting registrations.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Company Incorporation & ASIC Registration",
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
          badgeText="ASIC Incorporation Services"
          title="Company Registration Australia"
          description={[
            "Company registration in Australia creates a separate legal entity that is registered on the Australian companies register managed by ASIC. For business owners who have decided that a company structure is appropriate, Financially Up can assist with the practical setup process and the accounting and tax registrations that follow.",
            "Registering a company is more than choosing a name. The application needs accurate details about the proposed company, addresses, directors, shareholders and share structure. Directors also have legal obligations once appointed, so the structure should be understood before registration is completed.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Book an Appointment to discuss the proposed company, owners and directors, intended business activities and the registrations you may need after the company is established."
        />

        {/* Pillar 6 Subpages Ribbon */}
        <RelatedBusinessStructuresRibbon currentSlug="company-registration" />

        {/* Section 1: What does company registration involve? */}
        <WhatDoesCompanyRegistrationInvolve />

        {/* Section 2: What information is needed before you register a company? */}
        <InformationNeededBeforeRegistration />

        {/* Section 3: Registering a Pty Ltd company & Name distinctions */}
        <PtyLtdCompanyAndNameDifferences />

        {/* Section 4: What happens after company incorporation? & Tax compliance separation */}
        <WhatHappensAfterIncorporation />

        {/* Section 5: Common company setup issues & How Financially Up helps */}
        <CommonCompanySetupIssues />

        {/* Section 6: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpCompanyReg />

        {/* Section 7: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About Company Registration"
          description="Find answers to common questions about registering a Pty Ltd company in Australia, director IDs, ABNs, and legal requirements."
          faqs={companyRegistrationFaqs}
        />

        {/* Section 8: Final Call to Action */}
        <CallToActionBanner
          title="Book an Appointment"
          description="If you are ready to register a company or want help making sure the proposed company details and related registrations are organised correctly, book an appointment with Financially Up. We can discuss the setup, the information required and the ongoing accounting or tax services that may be relevant."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
