import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenToStartSuccessionPlanning from "./components/WhenToStartSuccessionPlanning";
import WhatBelongsInSuccessionPlan from "./components/WhatBelongsInSuccessionPlan";
import HandoverSaleOrAnotherPathway from "./components/HandoverSaleOrAnotherPathway";
import TaxAndLegalIssuesSuccession from "./components/TaxAndLegalIssuesSuccession";
import HowFinanciallyUpSupportsSuccession from "./components/HowFinanciallyUpSupportsSuccession";
import WhatToBringFirstMeetingSuccession from "./components/WhatToBringFirstMeetingSuccession";
import SuccessionRelatedServicesRibbon from "./components/SuccessionRelatedServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: Page 10 (10- Succession Planning)
 */
export const metadata = {
  title: "Business Succession Planning Services | Financially Up",
  description:
    "Prepare for a business handover or exit. Financially Up helps owners review financial readiness, transition options and tax questions with suitable specialists.",
  keywords: [
    "business succession planning services",
    "succession planning accountant",
    "family business succession planning",
    "business succession planning consultant",
    "small business exit strategy Australia",
    "business transition planning Sydney",
    "small business CGT concessions succession",
    "business advisory Australia",
  ],
  alternates: {
    canonical:
      "https://financiallyup.com.au/services/business-advisory/succession-planning/",
  },
  openGraph: {
    title: "Business Succession Planning Services | Financially Up",
    description:
      "Prepare for a business handover or exit. Financially Up helps owners review financial readiness, transition options and tax questions with suitable specialists.",
    url: "https://financiallyup.com.au/services/business-advisory/succession-planning/",
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
  { label: "Business Advisory", href: "/services/business-advisory" },
  { label: "Succession Planning" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 10: Succession Planning)
 */
const successionFaqs = [
  {
    key: "1",
    label: "Is succession planning only for owners near retirement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. It can help any owner who wants continuity if they step away,
        transfer a stake or receive an unexpected offer.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I hand my business to a family member without a sale?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A transfer may be possible, but ownership documents, funding, tax and
        family expectations still need careful review. A gift does not
        automatically remove tax consequences.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need a business valuation first?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You may need an indication of value to compare options, but the type and
        formality of valuation depend on the intended transaction and who will
        rely on it.
      </p>
    ),
  },
  {
    key: "4",
    label: "How is succession planning different from selling a business?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Succession planning prepares ownership and management continuity over
        time. A sale is one possible outcome and involves its own negotiation,
        due diligence and transaction work.
      </p>
    ),
  },
];

/**
 * Schema.org Structured Data
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Business Succession Planning Services",
      serviceType: "Business Advisory / Succession & Transition Planning",
      description:
        "Financially Up provides business succession planning, ownership handover advisory, family business transitions, and tax-effective exit strategies across Australia.",
      provider: {
        "@type": "AccountingService",
        name: "Financially Up",
        url: "https://financiallyup.com.au",
        telephone: "+61-1300-328-316",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Level 5, 100 Walker St",
          addressLocality: "North Sydney",
          addressRegion: "NSW",
          postalCode: "2060",
          addressCountry: "AU",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Is succession planning only for owners near retirement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. It can help any owner who wants continuity if they step away, transfer a stake or receive an unexpected offer.",
          },
        },
        {
          "@type": "Question",
          name: "Can I hand my business to a family member without a sale?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "A transfer may be possible, but ownership documents, funding, tax and family expectations still need careful review. A gift does not automatically remove tax consequences.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need a business valuation first?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "You may need an indication of value to compare options, but the type and formality of valuation depend on the intended transaction and who will rely on it.",
          },
        },
        {
          "@type": "Question",
          name: "How is succession planning different from selling a business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Succession planning prepares ownership and management continuity over time. A sale is one possible outcome and involves its own negotiation, due diligence and transaction work.",
          },
        },
      ],
    },
  ],
};

/**
 * Business Succession Planning Page Component
 * ============================================
 * Dedicated subpage for Pillar 12: Business Advisory
 * Route: /services/business-advisory/succession-planning
 */
export default function SuccessionPlanningPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SubServiceHero Component */}
      <SubServiceHero
        title="Business Succession Planning Services"
        subtitle="Business Succession Planning"
        description={[
          "Business succession planning services help an owner prepare for someone else to take over, whether through a family handover, an internal transition or a future sale. The work starts before a transfer date is fixed: the business may need clearer records, a realistic assessment of value, capable successors and time to address tax and funding questions.",
          "Financially Up supports the accounting and business planning side of succession. We help you assess financial readiness, compare possible pathways and identify where legal or other specialist advice is needed. Book an Appointment to discuss your plans and how far along you are.",
        ]}
        parentService={{
          label: "Business Advisory Hub",
          href: "/services/business-advisory",
        }}
        breadcrumbs={breadcrumbs}
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Advisory Hub"
        secondaryButtonHref="/services/business-advisory"
        badge="Business Succession Advisory"
        features={[
          "Ownership & Management Handover",
          "Family Business Succession Governance",
          "Tax & CGT Concession Verification",
          "Scenario Modelling & Readiness Audit",
        ]}
      />

      {/* Section 1: When should an owner start succession planning? */}
      <WhenToStartSuccessionPlanning />

      {/* Section 2: What belongs in a succession plan? */}
      <WhatBelongsInSuccessionPlan />

      {/* Section 3: Handover, sale or another pathway? */}
      <HandoverSaleOrAnotherPathway />

      {/* Section 4: What tax and legal issues may arise? */}
      <TaxAndLegalIssuesSuccession />

      {/* Section 5: How Financially Up supports the process */}
      <HowFinanciallyUpSupportsSuccession />

      {/* Section 6: What should you bring to the first meeting? */}
      <WhatToBringFirstMeetingSuccession />

      {/* Section 7: Related Advisory Services Ribbon */}
      <SuccessionRelatedServicesRibbon />

      {/* Section 8: Succession planning FAQs */}
      <FaqSection
        title="Succession Planning FAQs"
        subtitle="Common Questions"
        description="Clear answers regarding retirement timing, family gifting vs sales, business valuations, and the distinction between succession and selling."
        faqList={successionFaqs}
      />

      {/* Section 9: Call to Action Banner */}
      <CallToActionBanner
        title="Prepare for the next chapter"
        description="Book an Appointment with Financially Up to discuss your preferred transition, the financial records available, possible tax questions and which specialist advisers may need to be involved."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
      />
    </>
  );
}
