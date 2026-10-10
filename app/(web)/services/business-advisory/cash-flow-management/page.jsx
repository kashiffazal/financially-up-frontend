import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsCashFlowForecasting from "./components/WhatIsCashFlowForecasting";
import WhenBusinessNeedsForecasting from "./components/WhenBusinessNeedsForecasting";
import WhatGoesIntoCashFlowForecast from "./components/WhatGoesIntoCashFlowForecast";
import BudgetVsForecastAndScenarioSupport from "./components/BudgetVsForecastAndScenarioSupport";
import CashFlowTaxObligationsPaydaySuper from "./components/CashFlowTaxObligationsPaydaySuper";
import RecordsToPrepareForForecast from "./components/RecordsToPrepareForForecast";
import HowFinanciallyUpHelpsCashFlow from "./components/HowFinanciallyUpHelpsCashFlow";
import CashFlowRelatedServicesRibbon from "./components/CashFlowRelatedServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: Page 2 (2- Cash Flow Management)
 */
export const metadata = {
  title: "Cash Flow Forecasting & Management Services | Financially Up",
  description:
    "Cash flow forecasting for Australian businesses. Understand upcoming cash needs, test scenarios and plan for payments with Financially Up.",
  keywords: [
    "cash flow forecasting",
    "cash flow management services",
    "cash flow forecast Australia",
    "small business cash flow",
    "working capital management",
    "cash flow planning",
    "business advisory",
    "rolling cash flow forecast",
    "business financial modeling",
  ],
  alternates: {
    canonical:
      "https://financiallyup.com.au/services/business-advisory/cash-flow-management/",
  },
  openGraph: {
    title: "Cash Flow Forecasting & Management Services | Financially Up",
    description:
      "Cash flow forecasting for Australian businesses. Understand upcoming cash needs, test scenarios and plan for payments with Financially Up.",
    url: "https://financiallyup.com.au/services/business-advisory/cash-flow-management/",
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
  { label: "Services", href: "/#services-overview" },
  { label: "Business Advisory", href: "/services/business-advisory" },
  { label: "Cash Flow Management" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 2: Cash Flow Management)
 */
const cashFlowFaqs = [
  {
    key: "1",
    label: "How far ahead should a cash flow forecast go?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        There is no single period that suits every business. A business under
        short-term cash pressure may need a detailed rolling forecast, while a
        stable business may use a monthly forecast over a longer period. The
        period should match the decision-making need.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can a profitable business have cash flow problems?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Profit records income and expenses under accounting rules, while
        cash flow tracks when money actually enters and leaves the business.
        Delayed customer payments, stock purchases, tax payments, loan principal
        and capital expenditure can create cash pressure even when the business
        reports a profit.
      </p>
    ),
  },
  {
    key: "3",
    label: "How often should a cash flow forecast be updated?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Update frequency depends on volatility and risk. Monthly updates may be
        sufficient for some businesses; weekly updates can be more useful when
        cash is tight or receipts and payments are changing quickly.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up help if my cash flow forecast shows a shortfall?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We can help analyze the drivers, update assumptions and model practical
        scenarios within our accounting and advisory scope. Decisions about
        finance products, lending approvals or legal restructuring may require a
        lender, appropriately authorised adviser or legal professional.
      </p>
    ),
  },
];

/**
 * CashFlowManagementSubpage Component
 * ===================================
 * Route: /services/business-advisory/cash-flow-management
 * Pillar 12.1: Cash Flow Forecasting & Management Services (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CashFlowManagementSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cashFlowFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.label,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.children.props.children,
      },
    })),
  };

  return (
    <main className="w-full">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 0. Dedicated Sub-Service Hero with Verbatim Lead Copy */}
      <SubServiceHero
        title="Cash Flow Forecasting and Management Services"
        subtitle="Strategic Working Capital Visibility & Forward Liquidity Planning Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Cash flow forecasting estimates the money expected to move into
              and out of your business over future weeks or months. It helps
              business owners see potential shortfalls, surpluses and payment
              pressure before the bank balance becomes the only warning signal.
            </span>
            <span className="block mt-2">
              Financially Up provides cash flow forecasting and cash flow
              management services for businesses that need better visibility
              over customer receipts, supplier payments, wages, tax obligations,
              finance commitments and planned spending. The goal is to create a
              realistic forward view that can be updated as actual results
              change.
            </span>
            <span className="block mt-2 text-xs font-medium text-emerald-800 dark:text-emerald-300">
              If cash feels tight, uneven or difficult to predict, an initial
              discussion can help identify the main cash drivers and the
              appropriate forecasting period.
            </span>
          </span>
        }
        parentService={{
          label: "Business Advisory Hub",
          href: "/services/business-advisory",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 12.1 • Working Capital & Liquidity"
        highlights={[
          "13-Week Rolling or Monthly Models",
          "Working Capital & Buffer Diagnostic",
          "100% Online or In-Person Consultations",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Commercial Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is Cash Flow Forecasting? */}
      <WhatIsCashFlowForecasting />

      {/* 2. When May a Business Need Cash Flow Forecasting Services? */}
      <WhenBusinessNeedsForecasting />

      {/* 3. What Goes into a Useful Cash Flow Forecast? */}
      <WhatGoesIntoCashFlowForecast />

      {/* 4. Cash Flow Forecasting vs Budget & Scenario Decision Support */}
      <BudgetVsForecastAndScenarioSupport />

      {/* 5. Cash Flow and Tax Obligations (Payday Super 2026) */}
      <CashFlowTaxObligationsPaydaySuper />

      {/* 6. What Records Should You Prepare? */}
      <RecordsToPrepareForForecast />

      {/* 7. How Financially Up Can Help */}
      <HowFinanciallyUpHelpsCashFlow />

      {/* 8. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about cash flow forecasting horizons, frequency, profit vs cash gaps, and advisory support."
        image="/images/services/faq.webp"
        imageAlt="Cash Flow Forecasting Frequently Asked Questions"
        items={cashFlowFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Take Control of Your Cash"
        title="Book an Appointment"
        subtitle="If you need better visibility over upcoming cash requirements, book an appointment with Financially Up to discuss cash flow forecasting and the information needed to get started."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Business Advisory Services"
        secondaryButtonHref="/services/business-advisory"
      />

      {/* 10. Related Services Ribbon (Verbatim cross-links) */}
      <CashFlowRelatedServicesRibbon />
    </main>
  );
}
