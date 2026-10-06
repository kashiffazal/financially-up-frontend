import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatPropertyTaxAccountantHelpsWith from "./components/WhatPropertyTaxAccountantHelpsWith";
import PropertyTaxServicesGrid from "./components/PropertyTaxServicesGrid";
import WhoNeedsPropertyTaxSupport from "./components/WhoNeedsPropertyTaxSupport";
import PropertyInvestingVsDevelopment from "./components/PropertyInvestingVsDevelopment";
import PropertyTaxPillarsComparison from "./components/PropertyTaxPillarsComparison";
import WhenReviewIsUseful from "./components/WhenReviewIsUseful";
import WhatInformationNeededProperty from "./components/WhatInformationNeededProperty";
import HowEngagementWorksProperty from "./components/HowEngagementWorksProperty";
import WhyChooseFinanciallyUpProperty from "./components/WhyChooseFinanciallyUpProperty";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 10th Pillar Property Tax.docx)
 */
export const metadata = {
  title: "Property Tax Accountant Australia | Financially Up",
  description:
    "Property tax accountant support for investors and developers across Australia. Get help with rental income, CGT, GST, records and property tax compliance.",
  keywords: [
    "property tax accountant Australia",
    "investment property tax",
    "negative gearing accountant",
    "property capital gains tax",
    "GST on property development",
    "subdivision tax accountant",
    "6 year absence rule CGT",
    "main residence exemption",
    "property tax depreciation",
    "rental property tax deductions",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/property-tax/",
  },
  openGraph: {
    title: "Property Tax Accountant Australia | Financially Up",
    description:
      "Property tax accountant support for investors and developers across Australia. Get help with rental income, CGT, GST, records and property tax compliance.",
    url: "https://financiallyup.com.au/services/property-tax/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for Property Tax
 */
const propertyBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Property Tax" },
];

/**
 * 5 Practice Scope Items for Property Tax Hub
 */
const propertyScopeItems = [
  {
    icon: "home",
    theme: "emerald",
    title: "Rental Property Tax Schedules",
    description: "Rental income, negative gearing & deductible expense schedules",
    tag: "Rental Returns",
  },
  {
    icon: "line-chart",
    theme: "blue",
    title: "Depreciation & Capital Works",
    description: "Division 40 plant & Division 43 structural building write-offs",
    tag: "Depreciation",
  },
  {
    icon: "dollar",
    theme: "amber",
    title: "Property Capital Gains Tax (CGT)",
    description: "5-element cost base, 50% discount & main residence exemptions",
    tag: "Property CGT",
  },
  {
    icon: "bank",
    theme: "purple",
    title: "Property Development & GST",
    description: "Margin scheme, enterprise registrations & subdivision tax",
    tag: "Development & GST",
  },
  {
    icon: "solution",
    theme: "teal",
    title: "Property Holding Structures",
    description: "Individual, partnership, trust, company & SMSF holding strategies",
    tag: "Structures",
  },
];

/**
 * Trust & Credential Verification Badges (Non-wrapping single row)
 */
const propertyVerificationBadges = [
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
 * 4 Exact Frequently Asked Questions from Client Document (Pillar 10, lines 55–63)
 */
const propertyFaqs = [
  {
    key: "1",
    label: "Do I need a property tax accountant if I only own one rental property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not always, but professional help can be useful where deductions, refinancing, renovations,
        co-ownership, prior-year records or a future sale create uncertainty. The level of work
        should match the complexity of the property and your tax affairs.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can all rental property costs be claimed immediately?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Some expenses may be immediately deductible, while capital costs may instead be dealt
        with through capital works, decline in value rules or the CGT cost base. Treatment depends on
        what the expense was for and when it was incurred.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is property development always subject to GST?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. GST depends on whether the activities amount to an enterprise, registration requirements
        and the nature of the supply. New residential premises and potential residential land can
        involve specific GST rules, but the facts need to be reviewed.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up advise on the best property to buy?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Tax and accounting consequences can be explained within scope, but choosing a particular
        investment or financial product may involve regulated financial product advice. An
        appropriately authorized financial adviser may be required for that advice.
      </p>
    ),
  },
];

// JSON-LD Schema for Google Search Rich Snippets with Exact 4 Document FAQs
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do I need a property tax accountant if I only own one rental property?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always, but professional help can be useful where deductions, refinancing, renovations, co-ownership, prior-year records or a future sale create uncertainty. The level of work should match the complexity of the property and your tax affairs.",
      },
    },
    {
      "@type": "Question",
      name: "Can all rental property costs be claimed immediately?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Some expenses may be immediately deductible, while capital costs may instead be dealt with through capital works, decline in value rules or the CGT cost base. Treatment depends on what the expense was for and when it was incurred.",
      },
    },
    {
      "@type": "Question",
      name: "Is property development always subject to GST?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. GST depends on whether the activities amount to an enterprise, registration requirements and the nature of the supply. New residential premises and potential residential land can involve specific GST rules, but the facts need to be reviewed.",
      },
    },
    {
      "@type": "Question",
      name: "Can Financially Up advise on the best property to buy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax and accounting consequences can be explained within scope, but choosing a particular investment or financial product may involve regulated financial product advice. An appropriately authorized financial adviser may be required for that advice.",
      },
    },
  ],
};

/**
 * PropertyTaxMainPage
 * ===================
 * Pillar 10: Property Tax Accountant Australia Hub Page (/services/property-tax/).
 *
 * Implements 100% of the verbatim content from Page 1 of '10th Pillar Property Tax.docx',
 * structured into 12 responsive, visually stunning sections with alternating backgrounds.
 */
export default function PropertyTaxMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={propertyBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • Australia-Wide",
        }}
        title="Property Tax Accountant"
        titleHighlight="Australia-Wide Advisory"
        description={
          <p className="m-0">
            Property tax can become complicated quickly when you own rental properties, buy and sell investments, develop land, hold property through an entity or need to separate capital costs from deductible expenses. A property tax accountant helps connect the transaction, ownership structure, records and tax treatment so your reporting is based on the facts rather than assumptions.
          </p>
        }
        subDescription={
          <p className="m-0">
            Financially Up supports property investors, landlords, developers and business owners with property-related accounting and tax work across Australia. The scope can include rental property reporting, capital gains tax calculations, GST and development issues, entity accounting and coordination with separately scoped tax planning where required.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            If you have a property purchase, rental portfolio, disposal or development project to review, an initial discussion can clarify the tax issues, records needed and the appropriate service scope.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#property-services-overview",
        }}
        supportingText="Expert property tax, rental schedules, CGT calculations, and development GST advisory."
        scopeTag="Property Tax Scope Overview"
        scopeTitle="Property Tax Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={propertyScopeItems}
        verificationBadges={propertyVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian Property Tax Accountant Services"
      />

      {/* 2. What Does a Property Tax Accountant Help With? (Lite Brand Gradient) */}
      <WhatPropertyTaxAccountantHelpsWith />

      {/* 3. Our Property Tax Services - 10 Card Navigation Grid (Clean White) */}
      <PropertyTaxServicesGrid />

      {/* 4. Who Needs Property Tax Support? (Lite Brand Gradient) */}
      <WhoNeedsPropertyTaxSupport />

      {/* 5. Property Investing vs Property Development (Clean White) */}
      <PropertyInvestingVsDevelopment />

      {/* 6. Rental Reporting, Capital Gains & Strategic Planning (Lite Brand Gradient) */}
      <PropertyTaxPillarsComparison />

      {/* 7. When a Property Tax Review is Especially Useful (Clean White) */}
      <WhenReviewIsUseful />

      {/* 8. Property Records That Make Tax Reporting Easier (Lite Brand Gradient) */}
      <WhatInformationNeededProperty />

      {/* 9. What Happens When You Engage a Property Tax Accountant? (Clean White) */}
      <HowEngagementWorksProperty />

      {/* 10. How Financially Up Can Help (Clean White) */}
      <WhyChooseFinanciallyUpProperty />

      {/* 11. Frequently Asked Questions (Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Clear, factual answers to common questions about rental deductions, immediate expenses, development GST, and property investment advice."
        image="/images/services/faq.webp"
        imageAlt="Property Tax Frequently Asked Questions"
        items={propertyFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 12. Pre-Footer Call to Action Banner (Dark Brand Accent) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Book an appointment with Financially Up to discuss your property circumstances, records and the appropriate accounting or tax service scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact-us"
      />
    </main>
  );
}
