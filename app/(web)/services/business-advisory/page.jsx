import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatBusinessAdvisorDoes from "./components/WhatBusinessAdvisorDoes";
import BusinessAdvisoryServicesGrid from "./components/BusinessAdvisoryServicesGrid";
import WhoMayBenefitAdvisory from "./components/WhoMayBenefitAdvisory";
import ReliableFinancialInformation from "./components/ReliableFinancialInformation";
import WhatBusinessAdvisoryCanFocusOn from "./components/WhatBusinessAdvisoryCanFocusOn";
import WhatInformationAdvisorReviews from "./components/WhatInformationAdvisorReviews";
import HowFinanciallyUpApproachesAdvisory from "./components/HowFinanciallyUpApproachesAdvisory";
import WhyChooseFinanciallyUpAdvisory from "./components/WhyChooseFinanciallyUpAdvisory";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 12th Pillar Business Advisory.docx)
 */
export const metadata = {
  title: "Business Advisor & Advisory Services | Financially Up",
  description:
    "Work with a business advisor to improve financial visibility, planning and decision-making. Financially Up supports businesses across Australia.",
  keywords: [
    "business advisor",
    "business advisory services",
    "cash flow forecasting",
    "budgeting and forecasting",
    "business growth",
    "business valuations",
    "buying and selling a business",
    "KPI reporting",
    "profitability consulting",
    "business benchmarking",
    "succession planning",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-advisory/",
  },
  openGraph: {
    title: "Business Advisor & Advisory Services | Financially Up",
    description:
      "Work with a business advisor to improve financial visibility, planning and decision-making. Financially Up supports businesses across Australia.",
    url: "https://financiallyup.com.au/services/business-advisory/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for Business Advisory
 */
const advisoryBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Business Advisory" },
];

/**
 * 5 Practice Scope Items for Business Advisory
 */
const advisoryScopeItems = [
  {
    icon: "line-chart",
    theme: "emerald",
    title: "Cash Flow & Working Capital",
    description: "Rolling cash visibility, debtor cycle reduction & buffer management",
    tag: "Cash Flow",
  },
  {
    icon: "calculator",
    theme: "blue",
    title: "Budgeting & Financial Modelling",
    description: "Scenario planning, headcount models & rolling forecasts",
    tag: "Forecasting",
  },
  {
    icon: "dollar",
    theme: "amber",
    title: "Profitability & Margin Diagnostics",
    description: "Pricing strategy, unit economics & cost drivers",
    tag: "Margins",
  },
  {
    icon: "fund",
    theme: "purple",
    title: "KPI Reporting & Dashboards",
    description: "Real-time executive metrics, scorecards & monthly cadence",
    tag: "Dashboards",
  },
  {
    icon: "safety",
    theme: "teal",
    title: "Business Valuation & Succession",
    description: "Commercial value review, exit readiness & transition advisory",
    tag: "Valuation",
  },
];

/**
 * Trust & Credential Verification Badges (Non-wrapping single row)
 */
const advisoryVerificationBadges = [
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
 * 4 Exact Frequently Asked Questions from Client Document:
 * '12th Pillar Business Advisory.docx' (Section: Frequently asked questions)
 */
const advisoryFaqs = [
  {
    key: "1",
    label: "What is the difference between a business advisor and an accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Accounting often focuses on recording, reporting and compliance. Business advisory uses that financial information to support planning, performance review and decisions. In practice, the services can work together, but they have different purposes.
      </p>
    ),
  },
  {
    key: "2",
    label: "Do I need business advisory if my business is profitable?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily, but profitability alone does not answer questions about cash flow, margins, capacity or future plans. Advisory can be useful when you want to understand what is driving results and plan the next stage of the business.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can a business advisor help with growth planning?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financial advisory work can help test the financial assumptions behind growth, including sales expectations, staffing, overheads, cash requirements and timing. The commercial decision remains with the business owner.
      </p>
    ),
  },
  {
    key: "4",
    label: "How often should I meet with a business advisor?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It depends on the complexity of the business and the decisions being made. Some businesses need a one-off review, while others benefit from monthly or quarterly meetings tied to management reporting and forecasts.
      </p>
    ),
  },
];

// JSON-LD Schema for Google Search Rich Snippets with Exact Document Content
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is the difference between a business advisor and an accountant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accounting often focuses on recording, reporting and compliance. Business advisory uses that financial information to support planning, performance review and decisions. In practice, the services can work together, but they have different purposes.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need business advisory if my business is profitable?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not necessarily, but profitability alone does not answer questions about cash flow, margins, capacity or future plans. Advisory can be useful when you want to understand what is driving results and plan the next stage of the business.",
      },
    },
    {
      "@type": "Question",
      name: "Can a business advisor help with growth planning?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Financial advisory work can help test the financial assumptions behind growth, including sales expectations, staffing, overheads, cash requirements and timing. The commercial decision remains with the business owner.",
      },
    },
    {
      "@type": "Question",
      name: "How often should I meet with a business advisor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the complexity of the business and the decisions being made. Some businesses need a one-off review, while others benefit from monthly or quarterly meetings tied to management reporting and forecasts.",
      },
    },
  ],
};

/**
 * BusinessAdvisoryMainPage
 * ========================
 * Pillar 12: Business Advisor & Advisory Services Hub Page (/services/business-advisory/).
 *
 * Implements the COMPLETE client content from '12th Pillar Business Advisory.docx',
 * structured into cohesive, responsive sections with strict alternating background palette.
 */
export default function BusinessAdvisoryMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={advisoryBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "Strategic Commercial Guidance • Australia-Wide",
        }}
        title="Business Advisor and"
        titleHighlight="Business Advisory Services"
        description={
          <p className="m-0">
            A business advisor helps you turn financial information into practical decisions about cash flow, profitability, growth, costs and business performance. Financially Up provides business advisory services for owners who want clearer numbers, stronger planning and a more structured way to make decisions.
          </p>
        }
        subDescription={
          <p className="m-0">
            The service is designed for business owners who already have accounting information but need help interpreting what it means, identifying priorities and planning the next steps. It can be especially useful when the business is growing, margins are changing, cash feels tight despite sales, or the owner wants better financial control before making a major decision.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            An initial discussion can help clarify your current position, the decisions you are trying to make and which advisory work would be most useful. Book an Appointment
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#advisory-services-overview",
        }}
        supportingText="Strategic cash flow forecasting, margin optimization, KPI dashboards, and growth advisory."
        scopeTag="Commercial Advisory Scope Overview"
        scopeTitle="Business Advisory Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={advisoryScopeItems}
        verificationBadges={advisoryVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian Business Advisory and Commercial Finance Services"
      />

      {/* 2. What Does a Business Advisor Do? (Lite Brand Gradient) */}
      <WhatBusinessAdvisorDoes />

      {/* 3. Our Business Advisory Services - 9 Card Navigation Grid (Clean White) */}
      <BusinessAdvisoryServicesGrid />

      {/* 4. Who May Benefit from Business Advisory Services? (Lite Brand Gradient) */}
      <WhoMayBenefitAdvisory />

      {/* 5. Business Advisory Starts with Reliable Financial Information (Clean White) */}
      <ReliableFinancialInformation />

      {/* 6. What Can Business Advisory Focus On? (Lite Brand Gradient) */}
      <WhatBusinessAdvisoryCanFocusOn />

      {/* 7. What Information Will a Business Advisor Usually Review? (Clean White) */}
      <WhatInformationAdvisorReviews />

      {/* 8. How Financially Up Approaches Business Advisory (Lite Brand Gradient) */}
      <HowFinanciallyUpApproachesAdvisory />

      {/* 9. Why Choose Financially Up? (Clean White) */}
      <WhyChooseFinanciallyUpAdvisory />

      {/* 10. Frequently Asked Questions (Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Clear answers to common questions about business advisory services, profitability, growth planning, and meeting cadence."
        image="/images/services/faq.webp"
        imageAlt="Business Advisory Frequently Asked Questions"
        items={advisoryFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Dark Brand Accent) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Clearer Numbers for Confident Business Decisions"
        subtitle="If you want clearer financial information and a more structured approach to business decisions, book an appointment with Financially Up to discuss the right advisory scope for your business."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
