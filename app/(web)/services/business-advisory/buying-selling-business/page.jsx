import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatSellersShouldPrepare from "./components/WhatSellersShouldPrepare";
import WhatBuyersShouldCheckDueDiligence from "./components/WhatBuyersShouldCheckDueDiligence";
import TransactionStructuresAndTaxGoingConcern from "./components/TransactionStructuresAndTaxGoingConcern";
import EmployeesHandoverAndPostSettlement from "./components/EmployeesHandoverAndPostSettlement";
import HowFinanciallyUpSupportsTransactions from "./components/HowFinanciallyUpSupportsTransactions";
import WhatToBringToTransactionMeeting from "./components/WhatToBringToTransactionMeeting";
import WhyChooseFinanciallyUpTransactions from "./components/WhyChooseFinanciallyUpTransactions";
import TransactionRelatedServicesRibbon from "./components/TransactionRelatedServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: Page 6 (6- Buying and Selling a Business)
 */
export const metadata = {
  title: "Business Sale Advisor | Buying and Selling a Business",
  description:
    "Buying or selling a business? Financially Up reviews financial records, transaction structure and tax considerations before you commit to a transaction.",
  keywords: [
    "business sale advisor",
    "buying a business accountant",
    "selling a business accountant",
    "business due diligence Australia",
    "business purchase financial review",
    "going concern GST business sale",
    "small business CGT concessions",
    "business advisory Sydney Australia",
  ],
  alternates: {
    canonical:
      "https://financiallyup.com.au/services/business-advisory/buying-selling-business/",
  },
  openGraph: {
    title: "Business Sale Advisor | Buying and Selling a Business",
    description:
      "Buying or selling a business? Financially Up reviews financial records, transaction structure and tax considerations before you commit to a transaction.",
    url: "https://financiallyup.com.au/services/business-advisory/buying-selling-business/",
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
  { label: "Buying and Selling a Business" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 6: Buying and Selling a Business)
 */
const transactionFaqs = [
  {
    key: "1",
    label: "Should I sign a contract before financial due diligence?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Seek legal and accounting advice before committing. The effect of
        conditions and the time available for due diligence depend on the
        contract drafted for the transaction.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does a business sale always include GST?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Treatment depends on what is sold and the relevant conditions. A
        qualifying GST-free going concern requires more than simply calling the
        business operational.
      </p>
    ),
  },
  {
    key: "3",
    label: "Are small business CGT concessions automatic when I sell?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. They have detailed conditions relating to the entity, asset and
        transaction. Eligibility needs a separate review.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up negotiate the sale or draft the agreement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We provide accounting, tax and financial analysis within the agreed
        scope. A broker may manage marketing or negotiation, and a lawyer should
        advise on and draft legal documents.
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
      name: "Business Sale Advisor and Acquisition Due Diligence",
      serviceType: "Business Advisory / Transaction Services",
      description:
        "Financially Up provides accounting, tax, and due diligence advisory for business purchases and sales across Australia.",
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
          name: "Should I sign a contract before financial due diligence?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Seek legal and accounting advice before committing. The effect of conditions and the time available for due diligence depend on the contract drafted for the transaction.",
          },
        },
        {
          "@type": "Question",
          name: "Does a business sale always include GST?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Treatment depends on what is sold and the relevant conditions. A qualifying GST-free going concern requires more than simply calling the business operational.",
          },
        },
        {
          "@type": "Question",
          name: "Are small business CGT concessions automatic when I sell?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. They have detailed conditions relating to the entity, asset and transaction. Eligibility needs a separate review.",
          },
        },
        {
          "@type": "Question",
          name: "Can Financially Up negotiate the sale or draft the agreement?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We provide accounting, tax and financial analysis within the agreed scope. A broker may manage marketing or negotiation, and a lawyer should advise on and draft legal documents.",
          },
        },
      ],
    },
  ],
};

/**
 * Buying and Selling a Business Page Component
 * ============================================
 * Dedicated subpage for Pillar 12: Business Advisory
 * Route: /services/business-advisory/buying-selling-business
 */
export default function BuyingSellingBusinessPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SubServiceHero Component */}
      <SubServiceHero
        title="Business Sale Advisor for Buyers and Sellers"
        subtitle="Buying & Selling a Business"
        description={[
          "Buying or selling a business involves more than agreeing on a price. Financial records must support the claims made about performance, the contract must identify what changes hands, and both sides need to understand tax, funding and transition obligations. Key decisions often become difficult to change once terms are signed.",
          "Financially Up provides accounting and tax support for business acquisitions and sales. As a business sale advisor, we help sellers prepare reliable figures and help buyers examine the financial information presented to them. We work alongside lawyers, brokers, lenders and other specialists where their services are required. Book an Appointment before accepting or making a binding offer.",
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
        badge="Business Sale Advisory"
        features={[
          "Pre-Sale Financial Verification",
          "Buyer Due Diligence Review",
          "Asset vs Share Sale Analysis",
          "GST Going Concern & CGT Rules",
        ]}
      />

      {/* Section 1: What should a seller prepare? */}
      <WhatSellersShouldPrepare />

      {/* Section 2: What should a buyer check? */}
      <WhatBuyersShouldCheckDueDiligence />

      {/* Section 3: Asset sale, share sale or another arrangement? */}
      <TransactionStructuresAndTaxGoingConcern />

      {/* Section 4: What about employees and the handover? */}
      <EmployeesHandoverAndPostSettlement />

      {/* Section 5: How Financially Up supports the transaction */}
      <HowFinanciallyUpSupportsTransactions />

      {/* Section 6: What to bring to the first meeting */}
      <WhatToBringToTransactionMeeting />

      {/* Section 7: Why choose Financially Up for a business sale or acquisition? */}
      <WhyChooseFinanciallyUpTransactions />

      {/* Section 8: Related Advisory Services Ribbon */}
      <TransactionRelatedServicesRibbon />

      {/* Section 9: Buying and selling business FAQs */}
      <FaqSection
        title="Buying and Selling Business FAQs"
        subtitle="Common Questions"
        description="Clear answers regarding due diligence, contract conditions, GST going concern rules, CGT concessions, and advisory scope."
        faqList={transactionFaqs}
      />

      {/* Section 10: Call to Action Banner */}
      <CallToActionBanner
        title="Discuss the deal before committing"
        description="The earlier we see the records and proposed terms, the more useful the review can be. Financially Up can help you identify financial and tax questions to resolve before the transaction progresses. Book an Appointment."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
      />
    </>
  );
}
