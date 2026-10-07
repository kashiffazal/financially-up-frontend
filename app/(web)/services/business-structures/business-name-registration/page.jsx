import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBusinessStructuresRibbon from "../components/RelatedBusinessStructuresRibbon";

import WhenNeedBusinessName from "./components/WhenNeedBusinessName";
import ChecklistBeforeBusinessNameRegistration from "./components/ChecklistBeforeBusinessNameRegistration";
import AbnConnectionAndTradeMarkDistinction from "./components/AbnConnectionAndTradeMarkDistinction";
import WhatFinanciallyUpHelpsBusinessName from "./components/WhatFinanciallyUpHelpsBusinessName";
import WhyChooseFinanciallyUpBusinessName from "./components/WhyChooseFinanciallyUpBusinessName";

export const metadata = {
  title: "Business Name Registration Australia | Financially Up",
  description:
    "Business name registration support for Australian businesses, including ASIC registration, ABN checks and practical setup guidance before you start trading.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-structures/business-name-registration/",
  },
  openGraph: {
    title: "Business Name Registration Australia | Financially Up",
    description:
      "Business name registration support for Australian businesses, including ASIC registration, ABN checks and practical setup guidance before you start trading.",
    url: "https://financiallyup.com.au/services/business-structures/business-name-registration/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Structures", href: "/services/business-structures" },
  { label: "Business Name Registration" },
];

const businessNameFaqs = [
  {
    question: "Can I register a business name without an ABN?",
    answer:
      "You generally need an ABN or an ABN application reference number before you can register a business name with ASIC. If you have not applied yet, the ABN step may need to come first.",
  },
  {
    question: "Is a business name the same as a company name?",
    answer:
      "No. A company is a separate legal entity registered with ASIC and has a company name. A business name is a trading name used by an individual or entity. A company may also register a separate business name if it trades under a name other than its company name.",
  },
  {
    question: "Can I have more than one business name under one ABN?",
    answer:
      "Yes, more than one registered business name can be linked to an ABN where appropriate. Each business name is still separately registered and maintained.",
  },
  {
    question: "Does business name registration give me trade mark protection?",
    answer:
      "No. Registering a business name is not the same as registering a trade mark. If exclusive brand rights are important, separate intellectual-property advice may be appropriate.",
  },
  {
    question: "Do business names need to be renewed?",
    answer:
      "Yes. ASIC business names are registered for a chosen registration period and need to be renewed to remain registered. Keep the registered contact details current so renewal and regulatory notices are received.",
  },
];

export default function BusinessNameRegistrationPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Business Name Registration in Australia",
    description:
      "ASIC business name registration support for Australian businesses, covering name availability, ABN linking, entity alignment, and compliance.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Business Name & ASIC Trading Name Registration",
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
          badgeText="ASIC Trading Name Registration"
          title="Business Name Registration in Australia"
          description={[
            "A business name registration allows you to carry on business under a name that is different from your legal name. In Australia, most businesses using a separate trading name need to register that name with ASIC. The right setup also means checking the entity behind the name, its ABN and whether the proposed name is available.",
            "Financially Up can help with business name registration as part of a practical business setup process. We can review who should hold the name, confirm the relevant ABN position, assist with the registration steps and make sure the registration fits the business structure you are actually using.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Book an Appointment to discuss your business name, entity structure and registration requirements before you begin trading under the new name."
        />

        {/* Pillar 6 Subpages Ribbon */}
        <RelatedBusinessStructuresRibbon currentSlug="business-name-registration" />

        {/* Section 1: When do you need to register a business name? */}
        <WhenNeedBusinessName />

        {/* Section 2: What should be checked before ASIC registration? */}
        <ChecklistBeforeBusinessNameRegistration />

        {/* Section 3: ABN connection & Trademark brand protection distinction */}
        <AbnConnectionAndTradeMarkDistinction />

        {/* Section 4: What our service helps with & Information needed */}
        <WhatFinanciallyUpHelpsBusinessName />

        {/* Section 5: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpBusinessName />

        {/* Section 6: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About Business Name Registration"
          description="Find answers to common questions about registering trading names with ASIC, ABN requirements, trademarks, and renewal cycles."
          faqs={businessNameFaqs}
        />

        {/* Section 7: Final Call to Action */}
        <CallToActionBanner
          title="Book an Appointment"
          description="If you need help registering a business name or want to make sure the name is being registered to the right entity, book an appointment with Financially Up. We can review the structure, ABN position and registration steps, then confirm the appropriate scope of assistance."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
