import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatStructureAccountantHelpsWith from "./components/WhatStructureAccountantHelpsWith";
import BusinessStructuresGrid from "./components/BusinessStructuresGrid";
import CommonStructuresComparison from "./components/CommonStructuresComparison";
import ChoosingBetweenStructures from "./components/ChoosingBetweenStructures";
import SetupAndRegistrations from "./components/SetupAndRegistrations";
import WhenToReviewStructure from "./components/WhenToReviewStructure";
import WhatInformationNeeded from "./components/WhatInformationNeeded";
import WhyChooseFinanciallyUp from "./components/WhyChooseFinanciallyUp";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 6th Pillar Business Structures.docx)
 */
export const metadata = {
  title: "Business Structure Accountant Australia | Financially Up",
  description:
    "Business structure accountant support for Australian businesses, covering setup, registrations, tax implications and ongoing accounting obligations.",
  keywords: [
    "business structure accountant Australia",
    "business structure advice",
    "company registration Australia",
    "ABN registration",
    "business name registration",
    "partnership setup Australia",
    "corporate trustee setup Australia",
    "business restructuring services Australia",
    "sole trader vs company Australia",
    "discretionary trust accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-structures/",
  },
  openGraph: {
    title: "Business Structure Accountant Australia | Financially Up",
    description:
      "Business structure accountant support for Australian businesses, covering setup, registrations, tax implications and ongoing accounting obligations.",
    url: "https://financiallyup.com.au/services/business-structures/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for Business Structures
 */
const businessStructuresBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Business Structures" },
];

/**
 * 5 Practice Scope Items for Business Structures
 */
const businessStructuresScopeItems = [
  {
    icon: "bank",
    theme: "emerald",
    title: "Pty Ltd Company Setup",
    description: "ASIC incorporation, constitutions, share allocations & mandatory director IDs",
    tag: "Company Setup",
  },
  {
    icon: "apartment",
    theme: "blue",
    title: "Discretionary & Unit Trusts",
    description: "Deed reviews, corporate trustee incorporation & tax-effective distributions",
    tag: "Trust Entities",
  },
  {
    icon: "user",
    theme: "teal",
    title: "Partnership & Sole Trader Setup",
    description: "ABN, TFN, partnership agreements, business name registrations & bank setups",
    tag: "Direct Trading",
  },
  {
    icon: "solution",
    theme: "amber",
    title: "Tax & Commercial Alignment",
    description: "Asset protection, corporate tax rates, Division 7A rules & growth flexibility",
    tag: "Strategic Fit",
  },
  {
    icon: "branches",
    theme: "purple",
    title: "Business Restructuring Advice",
    description: "Entity conversions, sole trader to company roll-overs & CGT concessions",
    tag: "Restructuring",
  },
];

/**
 * Trust & Credential Verification Badges
 */
const businessStructuresVerificationBadges = [
  {
    icon: "australia",
    label: "Australia-Wide",
  },
  {
    icon: "compliant",
    label: "ATO & ASIC Compliant",
  },
  {
    icon: "team",
    label: "CPA & IPA Qualified",
  },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Pillar 6)
 */
const businessStructuresFaqs = [
  {
    key: "1",
    label: "Do I need an accountant to choose a business structure?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You can research and register common structures yourself, but professional advice can be
        valuable because the structure affects tax, reporting, ownership and administration. Legal
        advice may also be appropriate where liability, agreements, trusts or asset protection are
        important.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is a company always better than being a sole trader?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A company is a separate legal entity and may suit some businesses, but it also has
        additional setup, corporate and reporting obligations. The right structure depends on the
        business and the owners&apos; circumstances.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I change my business structure later?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, businesses can change structure, but the change may involve new registrations, asset
        transfers and tax or legal consequences. It is usually better to review those consequences
        before implementing the change.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up register the business after the structure is chosen?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up can assist with relevant accounting and tax registrations, including company
        and ABN registration where appropriate. The exact scope depends on the structure and any
        legal documentation required.
      </p>
    ),
  },
  {
    key: "5",
    label: "Does business structure advice include legal advice?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Financially Up can explain accounting and tax implications. Where legal advice,
        agreements, trust deeds or other legal documents are required, an appropriately qualified
        legal adviser may also be needed.
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
      name: "Do I need an accountant to choose a business structure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can research and register common structures yourself, but professional advice can be valuable because the structure affects tax, reporting, ownership and administration. Legal advice may also be appropriate where liability, agreements, trusts or asset protection are important.",
      },
    },
    {
      "@type": "Question",
      name: "Is a company always better than being a sole trader?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A company is a separate legal entity and may suit some businesses, but it also has additional setup, corporate and reporting obligations. The right structure depends on the business and the owners' circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "Can I change my business structure later?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, businesses can change structure, but the change may involve new registrations, asset transfers and tax or legal consequences. It is usually better to review those consequences before implementing the change.",
      },
    },
    {
      "@type": "Question",
      name: "Can Financially Up register the business after the structure is chosen?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Financially Up can assist with relevant accounting and tax registrations, including company and ABN registration where appropriate. The exact scope depends on the structure and any legal documentation required.",
      },
    },
    {
      "@type": "Question",
      name: "Does business structure advice include legal advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Financially Up can explain accounting and tax implications. Where legal advice, agreements, trust deeds or other legal documents are required, an appropriately qualified legal adviser may also be needed.",
      },
    },
  ],
};

/**
 * BusinessStructuresMainPage
 * ==========================
 * Pillar 6: Business Structure Accountant Australia Hub Page (/services/business-structures/).
 *
 * Implements the full client content from '6th Pillar Business Structures.docx',
 * structured into 10 cohesive, responsive sections with strict alternating background palette.
 */
export default function BusinessStructuresMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={businessStructuresBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • Australia-Wide",
        }}
        title="Business Structure Accountant"
        titleHighlight="Australia"
        description={
          <p className="m-0">
            Choosing or setting up a business structure affects how your business is registered, how income is reported, who is responsible for obligations and what administration is required. Financially Up provides business structure services for owners who want practical accounting and tax support when starting a business, establishing an entity or coordinating the registrations that follow.
          </p>
        }
        subDescription={
          <p className="m-0">
            The right structure depends on your activities, ownership, commercial plans, tax position and legal circumstances. A sole trader, partnership, company and trust each operate differently. Financially Up can help you understand the accounting and tax implications, organise the relevant registrations and identify when separate legal or specialist advice should be considered.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            Book an appointment to discuss what you are setting up, who will own and operate the business, the registrations you may need and the appropriate scope of accounting or tax support.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#business-structures-overview",
        }}
        supportingText="Trusted business structure advice and registrations for Australian founders and growing enterprises."
        scopeTag="Entity Scope Overview"
        scopeTitle="Business Structures Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={businessStructuresScopeItems}
        verificationBadges={businessStructuresVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian Business Structure Accountant Services"
      />

      {/* 2. What Does a Business Structure Accountant Help With? (Lite Brand Gradient) */}
      <WhatStructureAccountantHelpsWith />

      {/* 3. Our Business Structure Services - 7 Card Navigation Grid (Clean White) */}
      <BusinessStructuresGrid />

      {/* 4. Four Common Business Structures Compared (Lite Brand Gradient - ProfileCardsGrid) */}
      <CommonStructuresComparison />

      {/* 5. How Do You Choose Between Structures? (Clean White - AdvisoryReassuranceBanner) */}
      <ChoosingBetweenStructures />

      {/* 6. Business Setup & Post-Registration Requirements (Lite Brand Gradient) */}
      <SetupAndRegistrations />

      {/* 7. When Should You Review an Existing Structure? (Clean White) */}
      <WhenToReviewStructure />

      {/* 8. What Information Is Needed for Setup? - 6-Item Checklist (Lite Brand Gradient) */}
      <WhatInformationNeeded />

      {/* 9. Why Choose Financially Up - Credentials & Contact Clarity (Clean White) */}
      <WhyChooseFinanciallyUp />

      {/* 10. Frequently Asked Questions (Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about choosing a business structure, company incorporation, ABN entitlement, restructuring, and legal distinctions."
        image="/images/services/faq.webp"
        imageAlt="Business Structures Frequently Asked Questions"
        items={businessStructuresFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Dark Brand Accent) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If you are starting a business, setting up a new entity or reviewing whether your current structure still fits your needs, book an appointment with Financially Up. We can discuss the structure, registrations and accounting or tax work that may be relevant before you proceed."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
        secondaryButtonHref="/contact"
      />
    </main>
  );
}
