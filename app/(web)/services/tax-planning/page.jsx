import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatTaxPlanningInvolves from "./components/WhatTaxPlanningInvolves";
import TaxPlanningServicesGrid from "./components/TaxPlanningServicesGrid";
import WhoBenefitsTaxPlanning from "./components/WhoBenefitsTaxPlanning";
import WhenToSeekAdvice from "./components/WhenToSeekAdvice";
import BusinessVsPersonalPlanning from "./components/BusinessVsPersonalPlanning";
import CommonAreasAndYearEnd from "./components/CommonAreasAndYearEnd";
import WhatInformationNeeded from "./components/WhatInformationNeeded";
import WhyChooseFinanciallyUp from "./components/WhyChooseFinanciallyUp";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document:
 * '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx' (Page 1)
 */
export const metadata = {
  title: "Tax Planning Services Australia | Financially Up",
  description:
    "Practical tax planning services for Australian individuals and businesses, covering timing, structure, obligations, records and year-end decisions.",
  keywords: [
    "tax planning services",
    "tax planning accountant",
    "business tax planning",
    "personal tax planning",
    "year end tax planning",
    "pre 30 june tax review",
    "cgt tax planning",
    "division 7a tax planning",
    "trust distribution planning",
    "business structure advice",
    "high income tax planning",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/",
  },
  openGraph: {
    title: "Tax Planning Services Australia | Financially Up",
    description:
      "Practical tax planning services for Australian individuals and businesses, covering timing, structure, obligations, records and year-end decisions.",
    url: "https://financiallyup.com.au/services/tax-planning/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for Tax Planning Hub
 */
const taxPlanningBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Tax Planning" },
];

/**
 * 5 Practice Scope Items for Hero sidebar
 */
const taxPlanningScopeItems = [
  {
    icon: "bank",
    theme: "emerald",
    title: "Business Tax Planning",
    description: "Companies, trusts, partnerships, cash flow & retained profits",
    tag: "Business",
  },
  {
    icon: "user",
    theme: "blue",
    title: "Personal & High-Income Planning",
    description: "Multi-source earnings, salary packaging, investments & deductions",
    tag: "Personal",
  },
  {
    icon: "calendar",
    theme: "teal",
    title: "Pre-Year-End & Timing Reviews",
    description: "Proactive evaluations before 30 June statutory deadlines pass",
    tag: "Year-End",
  },
  {
    icon: "line-chart",
    theme: "amber",
    title: "Capital Gains & Asset Timing",
    description: "Property, shares, small business CGT concessions & cost base reviews",
    tag: "CGT Timing",
  },
  {
    icon: "solution",
    theme: "purple",
    title: "Structure & Restructure Advice",
    description: "Division 7A loans, trust distributions & commercial expansion",
    tag: "Structure",
  },
];

/**
 * Trust & Credential Verification Badges for Hero
 */
const taxPlanningVerificationBadges = [
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
 * 5 Exact Frequently Asked Questions from Client Document (Pillar 3, Page 1 - Verbatim)
 */
const taxPlanningFaqs = [
  {
    key: "1",
    label: "What is tax planning?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Tax planning is the process of considering the tax consequences of
        income, transactions and decisions before they occur or before relevant
        timing points pass. It should be based on current law, accurate records
        and the taxpayer&apos;s actual circumstances.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is tax planning the same as preparing a tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A tax return mainly reports completed transactions for an income
        year. Tax planning is forward-looking and considers the implications of
        decisions before they are finalised where possible.
      </p>
    ),
  },
  {
    key: "3",
    label: "When is the best time to use tax planning services?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Tax planning can be useful throughout the year, particularly before
        major transactions or business changes. A pre-year-end review can also
        be helpful because some decisions need to be made or documented within
        a particular income year.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can tax planning guarantee a lower tax bill?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Tax outcomes depend on income, deductions, transactions, structure,
        timing and the rules that apply. The purpose of planning is to
        understand the position and consider legitimate options, not to
        guarantee a particular result.
      </p>
    ),
  },
  {
    key: "5",
    label: "Do I need a tax planning accountant or a financial adviser?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It depends on the question. Financially Up can provide tax and
        accounting support within scope. Investment product recommendations,
        personal financial advice or legal advice may require a separately
        qualified professional.
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
      name: "What is tax planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax planning is the process of considering the tax consequences of income, transactions and decisions before they occur or before relevant timing points pass. It should be based on current law, accurate records and the taxpayer's actual circumstances.",
      },
    },
    {
      "@type": "Question",
      name: "Is tax planning the same as preparing a tax return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A tax return mainly reports completed transactions for an income year. Tax planning is forward-looking and considers the implications of decisions before they are finalised where possible.",
      },
    },
    {
      "@type": "Question",
      name: "When is the best time to use tax planning services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tax planning can be useful throughout the year, particularly before major transactions or business changes. A pre-year-end review can also be helpful because some decisions need to be made or documented within a particular income year.",
      },
    },
    {
      "@type": "Question",
      name: "Can tax planning guarantee a lower tax bill?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Tax outcomes depend on income, deductions, transactions, structure, timing and the rules that apply. The purpose of planning is to understand the position and consider legitimate options, not to guarantee a particular result.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a tax planning accountant or a financial adviser?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the question. Financially Up can provide tax and accounting support within scope. Investment product recommendations, personal financial advice or legal advice may require a separately qualified professional.",
      },
    },
  ],
};

/**
 * TaxPlanningMainPage
 * ===================
 * Pillar 3: Tax Planning & Advisory Main Hub Page (/services/tax-planning/).
 *
 * Implements 100% VERBATIM content from Page 1 of:
 * '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'.
 *
 * Structured into clean, responsive sections with modern Tailwind CSS aesthetics,
 * Ant Design component integration, dark-mode support, and mutual component reuse.
 */
export default function TaxPlanningMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={taxPlanningBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • Australia-Wide",
        }}
        title="Tax Planning Services"
        titleHighlight="for Individuals and Businesses"
        description={
          <p className="m-0">
            Tax planning is about considering the tax consequences of decisions
            before they are locked in. Financially Up provides tax planning
            services for Australian individuals and businesses that want a
            clearer view of upcoming tax obligations, legitimate planning
            opportunities and the records needed to support their position.
          </p>
        }
        subDescription={
          <p className="m-0">
            Unlike tax return preparation, which mainly reports what has already
            happened, tax planning looks forward. It may involve reviewing
            income, deductions, entity structure, investments, asset
            transactions, cash flow and timing before the end of the financial
            year or before a major transaction. The right approach depends on
            your circumstances and the tax rules that apply at the time.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            Talk with Financially Up about your current tax position, upcoming
            transactions, business or personal circumstances, available records
            and the areas that may need planning before year end.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#tax-planning-services",
        }}
        supportingText="Trusted forward-looking tax advisory for Australian business owners, investors, and families."
        scopeTag="Practice Scope Overview"
        scopeTitle="Tax Advisory Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={taxPlanningScopeItems}
        verificationBadges={taxPlanningVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian Tax Planning Services"
      />

      {/* 2. What Do Tax Planning Services Involve? (Section 1) */}
      <WhatTaxPlanningInvolves />

      {/* 3. Our Tax Planning Services - 11 Sub-Services Hub Navigation */}
      <TaxPlanningServicesGrid />

      {/* 4. Who May Benefit From Tax Planning? (Section 2) */}
      <WhoBenefitsTaxPlanning />

      {/* 5. When Should You Speak With a Tax Planning Advisor? (Section 3) */}
      <WhenToSeekAdvice />

      {/* 6. Business and Personal Tax Planning (Section 4) */}
      <BusinessVsPersonalPlanning />

      {/* 7. Common Areas Reviewed & Year-End Tax Planning (Sections 5 & 6) */}
      <CommonAreasAndYearEnd />

      {/* 8. What Information May Be Needed? (Section 7) */}
      <WhatInformationNeeded />

      {/* 9. How Financially Up Approaches Tax Planning & Why Choose Us (Sections 8 & 9) */}
      <WhyChooseFinanciallyUp />

      {/* 10. Frequently Asked Questions (Section 10 - Central FaqSection with 5 Verbatim FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about tax planning services, pre-30 June reviews, timing rules, and advisory boundaries."
        image="/images/services/faq.webp"
        imageAlt="Tax Planning Services Frequently Asked Questions"
        items={taxPlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Closing Call to Action: Book an Appointment (Section 11) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Discuss your business or personal tax position, upcoming decisions and the records available. Financially Up can identify the appropriate tax planning scope and next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
