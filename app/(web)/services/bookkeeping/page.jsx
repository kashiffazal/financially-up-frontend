import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatBookkeepingIncludes from "./components/WhatBookkeepingIncludes";
import BookkeepingServicesGrid from "./components/BookkeepingServicesGrid";
import WhoBenefitsBookkeeping from "./components/WhoBenefitsBookkeeping";
import BookkeepingCompliance from "./components/BookkeepingCompliance";
import OnlineAndOutsourced from "./components/OnlineAndOutsourced";
import HowFinanciallyUpHelps from "./components/HowFinanciallyUpHelps";
import WhatInformationNeeded from "./components/WhatInformationNeeded";
import WhyChooseFinanciallyUp from "./components/WhyChooseFinanciallyUp";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 4th Pillar Bookkeeping.docx)
 */
export const metadata = {
  title: "Bookkeeping Services Australia | Financially Up",
  description:
    "Professional bookkeeping services for Australian businesses. Keep records organised, reconciled and ready for reporting, BAS and tax work.",
  keywords: [
    "bookkeeping services",
    "bookkeeping services Australia",
    "xero bookkeeping services",
    "monthly bookkeeping services",
    "catch up bookkeeping",
    "bookkeeping clean up",
    "accounts payable services",
    "accounts receivable bookkeeping",
    "bank reconciliation services",
    "small business bookkeeping",
    "outsourced bookkeeping Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bookkeeping/",
  },
  openGraph: {
    title: "Bookkeeping Services Australia | Financially Up",
    description:
      "Professional bookkeeping services for Australian businesses. Keep records organised, reconciled and ready for reporting, BAS and tax work.",
    url: "https://financiallyup.com.au/services/bookkeeping/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for Bookkeeping
 */
const bookkeepingBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Bookkeeping" },
];

/**
 * 5 Practice Scope Items for Bookkeeping
 */
const bookkeepingScopeItems = [
  {
    icon: "bank",
    theme: "emerald",
    title: "Bank & Credit-Card Reconciliations",
    description: "Daily and monthly electronic bank feed matching & variance audits",
    tag: "Reconciliation",
  },
  {
    icon: "solution",
    theme: "blue",
    title: "Cloud Accounting Software",
    description: "Certified setup & workflows in Xero, MYOB & QuickBooks Online",
    tag: "Cloud Software",
  },
  {
    icon: "history",
    theme: "amber",
    title: "Catch-Up & Clean-Up Bookkeeping",
    description: "Resolving overdue transaction backlogs, suspense lines & errors",
    tag: "Catch-Up",
  },
  {
    icon: "wallet",
    theme: "teal",
    title: "Accounts Payable & Receivable",
    description: "Supplier bill processing, payment runs, customer invoices & aging",
    tag: "AP / AR",
  },
  {
    icon: "calculator",
    theme: "purple",
    title: "BAS & Tax-Ready Accounts",
    description: "Organised underlying financial records supporting tax compliance",
    tag: "Tax Ready",
  },
];

/**
 * Trust & Credential Verification Badges
 */
const bookkeepingVerificationBadges = [
  {
    icon: "australia",
    label: "Australia-Wide",
  },
  {
    icon: "compliant",
    label: "100% ATO Compliant",
  },
  {
    icon: "team",
    label: "CPA & IPA Supervised",
  },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Pillar 4)
 */
const bookkeepingFaqs = [
  {
    key: "1",
    label: "What is the difference between bookkeeping and accounting?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Bookkeeping focuses on recording, organising and reconciling transactions.
        Accounting can involve financial statements, tax work, analysis and advice
        based on those records. The services often work together, but they are not the same.
      </p>
    ),
  },
  {
    key: "2",
    label: "How often should bookkeeping be done?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The right frequency depends on transaction volume, GST or payroll obligations,
        reporting needs and how current you need the records to be. Some businesses are
        suited to monthly bookkeeping, while higher-volume businesses may need more
        frequent attention.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can you take over bookkeeping that is behind?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, catch-up or clean-up work may be possible. The first step is to review the
        accounting file, available source documents and how far the records are behind
        before confirming the scope.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do bookkeeping services include BAS lodgement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. Bookkeeping prepares and maintains the underlying records.
        BAS preparation and lodgement can be provided as a separately scoped compliance
        service where required.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can bookkeeping be done remotely?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up provides online bookkeeping Australia-wide. The process can
        use cloud accounting software and electronic document sharing, depending on your
        systems and service scope.
      </p>
    ),
  },
];

// JSON-LD Schema for Google Search Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between bookkeeping and accounting?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Bookkeeping focuses on recording, organising and reconciling transactions. Accounting can involve financial statements, tax work, analysis and advice based on those records. The services often work together, but they are not the same.",
      },
    },
    {
      "@type": "Question",
      name: "How often should bookkeeping be done?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The right frequency depends on transaction volume, GST or payroll obligations, reporting needs and how current you need the records to be. Some businesses are suited to monthly bookkeeping, while higher-volume businesses may need more frequent attention.",
      },
    },
    {
      "@type": "Question",
      name: "Can you take over bookkeeping that is behind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, catch-up or clean-up work may be possible. The first step is to review the accounting file, available source documents and how far the records are behind before confirming the scope.",
      },
    },
    {
      "@type": "Question",
      name: "Do bookkeeping services include BAS lodgement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. Bookkeeping prepares and maintains the underlying records. BAS preparation and lodgement can be provided as a separately scoped compliance service where required.",
      },
    },
    {
      "@type": "Question",
      name: "Can bookkeeping be done remotely?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Financially Up provides online bookkeeping Australia-wide. The process can use cloud accounting software and electronic document sharing, depending on your systems and service scope.",
      },
    },
  ],
};

/**
 * BookkeepingMainPage
 * ===================
 * Pillar 4: Bookkeeping Services Main Hub Page (/services/bookkeeping/).
 *
 * Implements the full client content from '4th Pillar Bookkeeping.docx',
 * structured into 10 cohesive, responsive sections with strict alternating background palette.
 */
export default function BookkeepingMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={bookkeepingBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • Australia-Wide",
        }}
        title="Bookkeeping Services"
        titleHighlight="for Australian Businesses"
        description={
          <p className="m-0">
            Reliable bookkeeping gives a business a clear, current record of what has happened financially. Financially Up provides bookkeeping services for business owners who want their transactions organised, bank accounts reconciled and records maintained in a way that supports day-to-day decisions, BAS preparation and year-end accounting.
          </p>
        }
        subDescription={
          <p className="m-0">
            Our service is suitable for sole traders, companies, partnerships and trusts that need regular bookkeeping support, a cleaner accounting file or an outsourced bookkeeping process. The exact scope depends on your business, transaction volume, accounting software and reporting needs.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            Book an appointment to discuss the state of your books, the systems you currently use and what level of ongoing support would be practical.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#bookkeeping-services-overview",
        }}
        supportingText="Trusted professional bookkeeping for Australian companies, trusts, partnerships and sole traders."
        scopeTag="Practice Scope Overview"
        scopeTitle="Bookkeeping Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={bookkeepingScopeItems}
        verificationBadges={bookkeepingVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian Bookkeeping Services"
      />

      {/* 2. What Do Bookkeeping Services Include? (Lite Brand Gradient) */}
      <WhatBookkeepingIncludes />

      {/* 3. Our Bookkeeping Services - 8 Card Navigation Grid (Clean White) */}
      <BookkeepingServicesGrid />

      {/* 4. Who Benefits From Professional Bookkeeping? (Lite Brand Gradient - ProfileCardsGrid) */}
      <WhoBenefitsBookkeeping />

      {/* 5. Small Business Bookkeeping That Supports Compliance & ATO 5-Year Rule (Clean White) */}
      <BookkeepingCompliance />

      {/* 6. Online and Outsourced Bookkeeping Services (Lite Brand Gradient) */}
      <OnlineAndOutsourced />

      {/* 7. How Financially Up Can Help - 6 Operational Pillars (Clean White) */}
      <HowFinanciallyUpHelps />

      {/* 8. What Information May Be Needed? - 6-Item Checklist (Lite Brand Gradient) */}
      <WhatInformationNeeded />

      {/* 9. Why Choose Financially Up - Credentials & Contact Clarity (Clean White) */}
      <WhyChooseFinanciallyUp />

      {/* 10. Frequently Asked Questions (Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about bookkeeping services, software setup, frequency, catch-up work, and BAS coordination."
        image="/images/services/faq.webp"
        imageAlt="Bookkeeping Services Frequently Asked Questions"
        items={bookkeepingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Dark Brand Accent) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Organise Your Financial Records Today"
        subtitle="If your business needs organised records, regular reconciliations or a more reliable bookkeeping process, book an appointment with Financially Up. We will discuss your current setup and confirm an appropriate service scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
