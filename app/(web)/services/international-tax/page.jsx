import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatInternationalTaxCovers from "./components/WhatInternationalTaxCovers";
import InternationalTaxServicesGrid from "./components/InternationalTaxServicesGrid";
import WhenNeedInternationalTaxAccountant from "./components/WhenNeedInternationalTaxAccountant";
import InternationalTaxForExpats from "./components/InternationalTaxForExpats";
import TaxResidencyFourTests from "./components/TaxResidencyFourTests";
import DoubleTaxAgreementsAndFito from "./components/DoubleTaxAgreementsAndFito";
import WhatInformationNeededInternational from "./components/WhatInformationNeededInternational";
import HowFinanciallyUpHelpsInternational from "./components/HowFinanciallyUpHelpsInternational";
import WhyChooseFinanciallyUpInternational from "./components/WhyChooseFinanciallyUpInternational";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 14th Pillar International Tax.docx)
 */
export const metadata = {
  title: "International Tax Accountant Australia | Financially Up",
  description:
    "Get help with Australian and overseas tax matters, including foreign income, tax residency, tax offsets and cross-border reporting obligations.",
  keywords: [
    "international tax accountant",
    "international tax Australia",
    "foreign income tax Australia",
    "Australian tax residency",
    "foreign income tax offset FITO",
    "foreign rental property tax",
    "expat tax Australia",
    "temporary resident tax Australia",
    "capital gains international tax",
    "double tax agreement Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/international-tax/",
  },
  openGraph: {
    title: "International Tax Accountant Australia | Financially Up",
    description:
      "Get help with Australian and overseas tax matters, including foreign income, tax residency, tax offsets and cross-border reporting obligations.",
    url: "https://financiallyup.com.au/services/international-tax/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for International Tax
 */
const internationalBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "International Tax" },
];

/**
 * 5 Practice Scope Items for International Tax
 */
const internationalScopeItems = [
  {
    icon: "compass",
    theme: "emerald",
    title: "Tax Residency Assessments",
    description: "Resides, domicile, 183-day & superannuation statutory tests",
    tag: "Residency",
  },
  {
    icon: "dollar",
    theme: "blue",
    title: "Worldwide Income & Assets",
    description: "Foreign wages, pensions, dividends & overseas rental schedules",
    tag: "Worldwide Income",
  },
  {
    icon: "calculator",
    theme: "amber",
    title: "Foreign Tax Offsets (FITO)",
    description: "Division 770 foreign tax credit relief & DTA treaty limits",
    tag: "FITO Relief",
  },
  {
    icon: "line-chart",
    theme: "purple",
    title: "Expat & Cross-Border CGT",
    description: "Deemed disposals, offshore assets & residency transitions",
    tag: "Expat CGT",
  },
  {
    icon: "global",
    theme: "teal",
    title: "Currency Conversion & Reporting",
    description: "ATO approved exchange rates & cross-border tax schedules",
    tag: "Advisory",
  },
];

/**
 * Trust & Credential Verification Badges (Non-wrapping single row)
 */
const internationalVerificationBadges = [
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
    label: "CPA & IPA Qualified",
  },
];

/**
 * 6 Exact Frequently Asked Questions from Client Document (14th Pillar International Tax.docx)
 */
const internationalFaqs = [
  {
    key: "1",
    label: "Do Australian residents pay tax on overseas income?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Australian residents for tax purposes are generally required to declare assessable income
        from both Australian and foreign sources. Exceptions and special rules can apply, including
        rules for certain temporary residents and exempt income.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is my visa status the same as my Australian tax residency?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Immigration status and tax residency are separate concepts. A person can hold a temporary
        visa and still be an Australian resident for tax purposes, although special temporary-resident
        tax rules may also be relevant.
      </p>
    ),
  },
  {
    key: "3",
    label: "If I paid tax overseas, do I still declare the income in Australia?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Where the foreign income is assessable in Australia, it generally still needs to be reported
        even if foreign tax has already been paid. You may be entitled to a foreign income tax offset,
        depending on the circumstances.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do I pay Australian tax just because I transfer overseas money to Australia?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The transfer of money itself does not normally determine whether an amount is taxable. The
        underlying source and nature of the money, when it was derived and your tax residency are
        more important.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can Financially Up prepare tax returns involving foreign income?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can assist with Australian tax-return matters involving foreign income where the work
        falls within our service scope and sufficient records are available.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can you advise on tax laws in another country?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Our service focuses on Australian taxation and accounting. Where domestic foreign-country tax
        advice is required, you should obtain advice from an appropriately qualified professional in
        that jurisdiction.
      </p>
    ),
  },
];

// JSON-LD Schema for Google Search Rich Snippets (Exact 6 FAQs from document)
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do Australian residents pay tax on overseas income?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Australian residents for tax purposes are generally required to declare assessable income from both Australian and foreign sources. Exceptions and special rules can apply, including rules for certain temporary residents and exempt income.",
      },
    },
    {
      "@type": "Question",
      name: "Is my visa status the same as my Australian tax residency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Immigration status and tax residency are separate concepts. A person can hold a temporary visa and still be an Australian resident for tax purposes, although special temporary-resident tax rules may also be relevant.",
      },
    },
    {
      "@type": "Question",
      name: "If I paid tax overseas, do I still declare the income in Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Where the foreign income is assessable in Australia, it generally still needs to be reported even if foreign tax has already been paid. You may be entitled to a foreign income tax offset, depending on the circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "Do I pay Australian tax just because I transfer overseas money to Australia?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The transfer of money itself does not normally determine whether an amount is taxable. The underlying source and nature of the money, when it was derived and your tax residency are more important.",
      },
    },
    {
      "@type": "Question",
      name: "Can Financially Up prepare tax returns involving foreign income?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can assist with Australian tax-return matters involving foreign income where the work falls within our service scope and sufficient records are available.",
      },
    },
    {
      "@type": "Question",
      name: "Can you advise on tax laws in another country?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our service focuses on Australian taxation and accounting. Where domestic foreign-country tax advice is required, you should obtain advice from an appropriately qualified professional in that jurisdiction.",
      },
    },
  ],
};

/**
 * InternationalTaxMainPage
 * ========================
 * Pillar 14: International Tax Hub Page (/services/international-tax/).
 *
 * Implements the exact, word-for-word client content from '14th Pillar International Tax.docx',
 * structured into cohesive, responsive sections with strict alternating background palette:
 * - 1. ServiceHero (Dark Hero overlay)
 * - 2. What Is International Tax? (Lite Brand Gradient)
 * - 3. Our International Tax Services (Clean White - 7 Card Grid)
 * - 4. When Might You Need an International Tax Accountant? (Lite Brand Gradient - 5 Scenarios)
 * - 5. International Tax for Expats (Clean White - 8 Review Considerations)
 * - 6. Australian Tax Residency and International Tax (Lite Brand Gradient - 4 Statutory Tests)
 * - 7. Foreign Income and Double Taxation (Clean White - Dual-Pillar FITO & DTA)
 * - 8. Currency Conversion and Record Keeping (Lite Brand Gradient - 12 Records)
 * - 9. How Financially Up Can Help & What to Expect (Clean White - 9 Points & 5 Steps)
 * - 10. Why Choose Financially Up? (Lite Brand Gradient - 5 Core Differentiators)
 * - 11. Frequently Asked Questions (Clean White - 6 Exact FAQs)
 * - 12. Discuss Your International Tax Position (Dark Brand Accent Pre-Footer CTA)
 */
export default function InternationalTaxMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship ServiceHero with exact H1 and paragraphs from document */}
      <ServiceHero
        breadcrumbs={internationalBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "Cross-Border & Expat Tax Specialists • Australia-Wide",
        }}
        title="International Tax Accountant for"
        titleHighlight="Australian and Cross-Border Tax Matters"
        description={
          <p className="m-0">
            International tax can become complex when your income, investments, business interests or personal circumstances extend beyond Australia. An international tax accountant can help you understand how Australian tax rules apply to your circumstances, what needs to be reported and where further specialist advice may be required.
          </p>
        }
        subDescription={
          <p className="m-0">
            Financially Up provides international tax assistance for individuals, expatriates, investors and businesses dealing with Australian and overseas tax issues. We help identify the relevant Australian tax implications, organise information for tax reporting and address cross-border matters in a practical and structured way.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            Book an Appointment to discuss your circumstances, your connection with Australia and the international tax matters requiring attention.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#international-services-overview",
        }}
        supportingText="Australian tax residency determinations, foreign income reporting, FITO offsets, and expat tax."
        scopeTag="Cross-Border Tax Scope Overview"
        scopeTitle="International Tax Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={internationalScopeItems}
        verificationBadges={internationalVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian International Tax and Expat Accounting Services"
      />

      {/* 2. What Is International Tax? (Lite Brand Gradient) */}
      <WhatInternationalTaxCovers />

      {/* 3. Our International Tax Services - 7 Card Navigation Grid (Clean White) */}
      <InternationalTaxServicesGrid />

      {/* 4. When Might You Need an International Tax Accountant? - 5 Scenarios (Lite Brand Gradient) */}
      <WhenNeedInternationalTaxAccountant />

      {/* 5. International Tax for Expats - 8 Review Considerations (Clean White) */}
      <InternationalTaxForExpats />

      {/* 6. Australian Tax Residency and International Tax - 4 Statutory Tests (Lite Brand Gradient) */}
      <TaxResidencyFourTests />

      {/* 7. Foreign Income and Double Taxation - FITO & Double Tax Relief (Clean White) */}
      <DoubleTaxAgreementsAndFito />

      {/* 8. Currency Conversion and Record Keeping - 12 Useful Records (Lite Brand Gradient) */}
      <WhatInformationNeededInternational />

      {/* 9. International Tax Services Australia - How Financially Up Can Help & What to Expect (Clean White) */}
      <HowFinanciallyUpHelpsInternational />

      {/* 10. Why Choose Financially Up? - Credentials & 5 Core Differentiators (Lite Brand Gradient) */}
      <WhyChooseFinanciallyUpInternational />

      {/* 11. Frequently Asked Questions - 6 Exact FAQs from Document (Clean White) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about overseas income, Australian tax residency, foreign tax offsets, and currency transfers."
        image="/images/services/faq.webp"
        imageAlt="International Tax Frequently Asked Questions"
        items={internationalFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 12. Pre-Footer Call to Action Banner (Dark Brand Accent - Verbatim from document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Discuss Your International Tax Position"
        subtitle="Cross-border tax issues are easier to manage when residency, foreign income and overseas tax information are considered together rather than after a problem arises."
        bodyText="Book an Appointment with Financially Up to discuss your circumstances, identify the Australian tax issues involved and determine the appropriate scope of assistance."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact-us"
      />
    </main>
  );
}
