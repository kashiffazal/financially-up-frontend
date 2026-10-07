import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBusinessStructuresRibbon from "../components/RelatedBusinessStructuresRibbon";

import WhatIsPartnershipRegistration from "./components/WhatIsPartnershipRegistration";
import PartnershipAdviceAndRegistrations from "./components/PartnershipAdviceAndRegistrations";
import PartnershipAgreementsAndTaxation from "./components/PartnershipAgreementsAndTaxation";
import AccountingSetupForPartnershipAndScope from "./components/AccountingSetupForPartnershipAndScope";
import WhyChooseFinanciallyUpPartnership from "./components/WhyChooseFinanciallyUpPartnership";

export const metadata = {
  title: "Partnership Setup Australia | Financially Up",
  description:
    "Partnership setup support covering ABN, TFN, business name, tax registrations and accounting considerations for Australian business partners.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-structures/partnership-registration/",
  },
  openGraph: {
    title: "Partnership Setup Australia | Financially Up",
    description:
      "Partnership setup support covering ABN, TFN, business name, tax registrations and accounting considerations for Australian business partners.",
    url: "https://financiallyup.com.au/services/business-structures/partnership-registration/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Structures", href: "/services/business-structures" },
  { label: "Partnership Registration" },
];

const partnershipFaqs = [
  {
    question: "Do partnerships need an ABN and TFN?",
    answer:
      "A partnership carrying on a business generally needs its own ABN and TFN. The partners’ personal TFNs are still relevant to their own tax affairs, but the partnership is separately identified for its business and tax reporting.",
  },
  {
    question: "Does a partnership have to register for GST?",
    answer:
      "GST registration depends on the partnership’s circumstances, including its GST turnover and the type of enterprise. Registration may be compulsory in some cases and voluntary in others. The current requirements should be checked for the business concerned.",
  },
  {
    question: "Is a partnership agreement compulsory?",
    answer:
      "A written partnership agreement is not compulsory for every ordinary partnership, but it can be valuable for setting clear expectations and reducing uncertainty between partners. Legal review is recommended where the agreement governs significant rights or obligations.",
  },
  {
    question: "Can a partnership trade under a business name?",
    answer:
      "Yes. If the partnership trades under a name other than the legal names of all partners, a registered business name will generally be required. The business name is linked to the partnership’s ABN.",
  },
  {
    question: "What happens if a partner joins or leaves?",
    answer:
      "Partner changes can affect registrations, the partnership agreement, tax, ownership and the ABN position. The treatment depends on the facts, so the change should be reviewed rather than treated as a simple administrative update.",
  },
];

export default function PartnershipRegistrationPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Partnership Setup Australia",
    description:
      "Partnership setup and registration services in Australia covering ABN, TFN, business names, GST, and accounting frameworks.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Partnership Setup & Tax Registration",
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
          badgeText="Partnership Business Setup"
          title="Partnership Setup Australia"
          description={[
            "A partnership setup in Australia usually involves two or more people or entities carrying on a business together and sharing income or losses. The practical setup commonly includes agreeing how the business will operate, obtaining the partnership's registrations, setting up accounting records and understanding the tax and legal responsibilities of the partners.",
            "Financially Up can help business partners establish the accounting and tax side of a partnership correctly from the start. This may include reviewing the proposed structure, assisting with ABN and tax registrations, arranging a business name where needed and setting up the records required for ongoing accounting and compliance.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Book an Appointment to discuss the proposed partnership, the people involved and the registrations and accounting setup that may be required."
        />

        {/* Pillar 6 Subpages Ribbon */}
        <RelatedBusinessStructuresRibbon currentSlug="partnership-registration" />

        {/* Section 1: What is involved in partnership registration? */}
        <WhatIsPartnershipRegistration />

        {/* Section 2: Structure advice before registering & Registrations */}
        <PartnershipAdviceAndRegistrations />

        {/* Section 3: Partnership agreements & Flow-through taxation */}
        <PartnershipAgreementsAndTaxation />

        {/* Section 4: 7-step accounting setup checklist & How we help */}
        <AccountingSetupForPartnershipAndScope />

        {/* Section 5: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpPartnership />

        {/* Section 6: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About Partnership Setup"
          description="Find answers to common questions about partnership tax file numbers, ABNs, partnership agreements, and partner transitions."
          faqs={partnershipFaqs}
        />

        {/* Section 7: Final Call to Action */}
        <CallToActionBanner
          title="Book an Appointment"
          description="If you are planning a partnership setup in Australia, book an appointment with Financially Up. We can review the proposed structure, confirm the relevant tax and registration steps and help establish the accounting framework for the new business."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
