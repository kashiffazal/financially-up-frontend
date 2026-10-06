import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatVirtualCfoDoes from "./components/WhatVirtualCfoDoes";
import VirtualCfoServicesGrid from "./components/VirtualCfoServicesGrid";
import WhoNeedsVirtualCfo from "./components/WhoNeedsVirtualCfo";
import CashFlowBudgetsForecasts from "./components/CashFlowBudgetsForecasts";
import ManagementReportingDecisions from "./components/ManagementReportingDecisions";
import WhatVirtualCfoDoesNotReplace from "./components/WhatVirtualCfoDoesNotReplace";
import WhatInformationNeededCfo from "./components/WhatInformationNeededCfo";
import WhyChooseFinanciallyUpCfo from "./components/WhyChooseFinanciallyUpCfo";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 13th Pillar Virtual CFO.docx)
 */
export const metadata = {
  title: "Virtual CFO Services Australia | Financially Up",
  description:
    "Virtual CFO support for growing Australian businesses. Get clearer reporting, cash flow visibility, forecasting and commercially focused finance support.",
  keywords: [
    "virtual cfo",
    "virtual cfo Australia",
    "virtual cfo for small business",
    "outsourced cfo services",
    "management reporting services",
    "cash flow forecasting",
    "financial modelling",
    "board reporting services",
    "three way forecasting",
    "fractional CFO Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/virtual-cfo/",
  },
  openGraph: {
    title: "Virtual CFO Services Australia | Financially Up",
    description:
      "Virtual CFO support for growing Australian businesses. Get clearer reporting, cash flow visibility, forecasting and commercially focused finance support.",
    url: "https://financiallyup.com.au/services/virtual-cfo/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for Virtual CFO
 */
const cfoBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Virtual CFO" },
];

/**
 * 5 Practice Scope Items for Virtual CFO
 */
const cfoScopeItems = [
  {
    icon: "fund",
    theme: "emerald",
    title: "Management Reporting",
    description: "Monthly commentary, performance tracking & KPI selection",
    tag: "Reporting",
  },
  {
    icon: "line-chart",
    theme: "blue",
    title: "Cash Flow & Runway",
    description: "Working-capital visibility & timing pressure management",
    tag: "Liquidity",
  },
  {
    icon: "calculator",
    theme: "amber",
    title: "Budgets & Variances",
    description: "Budget preparation & budget-versus-actual analysis",
    tag: "Budgets",
  },
  {
    icon: "dollar",
    theme: "purple",
    title: "Profitability & Margins",
    description: "Margin analysis, pricing decisions & cost reviews",
    tag: "Margins",
  },
  {
    icon: "team",
    theme: "teal",
    title: "Financial Modelling & Boards",
    description: "Scenario modelling for growth, hiring & board reports",
    tag: "Governance",
  },
];

/**
 * Trust & Credential Verification Badges (Non-wrapping single row)
 */
const cfoVerificationBadges = [
  {
    icon: "australia",
    label: "Australia-Wide",
  },
  {
    icon: "compliant",
    label: "Registered Tax Agent",
  },
  {
    icon: "team",
    label: "CPA & IPA Qualified",
  },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (13th Pillar Virtual CFO.docx - Section 1)
 */
const cfoFaqs = [
  {
    key: "1",
    label: "Is a virtual CFO the same as a full-time CFO?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A virtual or fractional CFO provides senior finance support on an external, part-time or
        agreed-scope basis. The amount of involvement can be scaled to the business rather than
        requiring a permanent full-time executive role.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can a virtual CFO work with my existing bookkeeper or accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. In many businesses the role works best when bookkeeping, tax compliance and management
        reporting are coordinated but remain clearly defined. Financially Up can work with existing
        systems and advisers where appropriate.
      </p>
    ),
  },
  {
    key: "3",
    label: "How often should management reports be reviewed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The useful frequency depends on the business. Monthly reporting is common, but a business
        with fast-moving cash flow or major change may need more frequent review. The reporting cycle
        should match the decisions management needs to make.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does a virtual CFO guarantee better profits or cash flow?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Forecasting and financial analysis can improve visibility and support better-informed
        decisions, but business outcomes depend on many commercial factors. Forecasts are based on
        assumptions and should be updated as circumstances change.
      </p>
    ),
  },
];

/**
 * JSON-LD Schema for Google Search Rich Snippets
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is a virtual CFO the same as a full-time CFO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A virtual or fractional CFO provides senior finance support on an external, part-time or agreed-scope basis. The amount of involvement can be scaled to the business rather than requiring a permanent full-time executive role.",
      },
    },
    {
      "@type": "Question",
      name: "Can a virtual CFO work with my existing bookkeeper or accountant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. In many businesses the role works best when bookkeeping, tax compliance and management reporting are coordinated but remain clearly defined. Financially Up can work with existing systems and advisers where appropriate.",
      },
    },
    {
      "@type": "Question",
      name: "How often should management reports be reviewed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The useful frequency depends on the business. Monthly reporting is common, but a business with fast-moving cash flow or major change may need more frequent review. The reporting cycle should match the decisions management needs to make.",
      },
    },
    {
      "@type": "Question",
      name: "Does a virtual CFO guarantee better profits or cash flow?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Forecasting and financial analysis can improve visibility and support better-informed decisions, but business outcomes depend on many commercial factors. Forecasts are based on assumptions and should be updated as circumstances change.",
      },
    },
  ],
};

/**
 * VirtualCfoMainPage
 * ==================
 * Pillar 13: Virtual CFO Services Australia Hub Page (/services/virtual-cfo/).
 *
 * Implements 100% verbatim client content from '13th Pillar Virtual CFO.docx' (Section 1: 1- Virtual CFO),
 * structured into 11 responsive sections with strict alternating background palette:
 * - Section 1: Hero (Dark / Brand Hero)
 * - Section 2: What Does a Virtual CFO Do? (Lite Brand Gradient)
 * - Section 3: Our Virtual CFO Services - 7 Sub-Service Navigation Grid (Clean White)
 * - Section 4: Who May Benefit from Virtual CFO Services? (Lite Brand Gradient)
 * - Section 5: Cash Flow, Budgets and Forecasts (Clean White)
 * - Section 6: Management Reporting That Supports Decisions (Lite Brand Gradient)
 * - Section 7: What a Virtual CFO Service Does Not Replace (Clean White)
 * - Section 8: What Information Is Useful at the Start? (Lite Brand Gradient)
 * - Section 9: Why Choose Financially Up? (Clean White)
 * - Section 10: Frequently Asked Questions (Lite Brand Gradient)
 * - Section 11: Call to Action Banner (Dark Brand Accent)
 */
export default function VirtualCfoMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship ServiceHero with Exact H1 & Verbatim Lead Text */}
      <ServiceHero
        breadcrumbs={cfoBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "Senior Finance Leadership • Australia-Wide",
        }}
        title="Virtual CFO for"
        titleHighlight="Growing Businesses"
        description={
          <p className="m-0">
            A virtual CFO gives a business ongoing senior finance support without employing a full-time chief financial officer. The role is practical: turn accounting data into clearer management information, build useful forecasts and budgets, improve financial visibility and help owners make better-informed business decisions.
          </p>
        }
        subDescription={
          <p className="m-0">
            Financially Up provides virtual CFO support for businesses that have moved beyond basic compliance but do not yet need, or do not want, a permanent in-house CFO. The service can sit alongside your accountant, bookkeeper and internal team, with the scope adjusted to the decisions and reporting rhythm your business actually needs.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            If you need more visibility over cash flow, profitability or financial performance, an initial discussion can help define the right level of CFO support. Book an Appointment
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#cfo-services-overview",
        }}
        supportingText="Reliable numbers, useful analysis and a clear reporting rhythm that supports management decisions."
        scopeTag="Virtual CFO Practice"
        scopeTitle="Senior Finance Direction"
        scopeStatus="2024–25 Ready"
        scopeItems={cfoScopeItems}
        verificationBadges={cfoVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Virtual CFO for Growing Businesses Australia"
      />

      {/* 2. What Does a Virtual CFO Do? (Lite Brand Gradient) */}
      <WhatVirtualCfoDoes />

      {/* 3. Our Virtual CFO Services - 7 Card Navigation Grid (Clean White) */}
      <VirtualCfoServicesGrid />

      {/* 4. Who May Benefit from Virtual CFO Services? (Lite Brand Gradient) */}
      <WhoNeedsVirtualCfo />

      {/* 5. Cash Flow, Budgets and Forecasts (Clean White) */}
      <CashFlowBudgetsForecasts />

      {/* 6. Management Reporting That Supports Decisions (Lite Brand Gradient) */}
      <ManagementReportingDecisions />

      {/* 7. What a Virtual CFO Service Does Not Replace (Clean White) */}
      <WhatVirtualCfoDoesNotReplace />

      {/* 8. What Information Is Useful at the Start? (Lite Brand Gradient) */}
      <WhatInformationNeededCfo />

      {/* 9. Why Choose Financially Up? (Clean White) */}
      <WhyChooseFinanciallyUpCfo />

      {/* 10. Frequently Asked Questions (Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about virtual CFOs versus full-time CFOs, working with existing bookkeepers, reporting frequency, and forecasting expectations."
        image="/images/services/faq.webp"
        imageAlt="Virtual CFO Frequently Asked Questions"
        items={cfoFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Dark Brand Accent) with Exact Document Verbatim Statement */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="Stronger Financial Visibility for Your Business"
        subtitle="If your business needs stronger financial visibility without employing a full-time CFO, speak with Financially Up about a practical virtual CFO scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
