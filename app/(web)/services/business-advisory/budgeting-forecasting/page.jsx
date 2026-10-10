import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsBudgetVsForecast from "./components/WhatIsBudgetVsForecast";
import WhoNeedsBudgetingServices from "./components/WhoNeedsBudgetingServices";
import WhatSmallBusinessBudgetIncludes from "./components/WhatSmallBusinessBudgetIncludes";
import DynamicForecastingAndVarianceAnalysis from "./components/DynamicForecastingAndVarianceAnalysis";
import ScenarioPlanningForDecisions from "./components/ScenarioPlanningForDecisions";
import RecordsNeededForBudgeting from "./components/RecordsNeededForBudgeting";
import HowFinanciallyUpHelpsBudgeting from "./components/HowFinanciallyUpHelpsBudgeting";
import BudgetingRelatedServicesRibbon from "./components/BudgetingRelatedServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: Page 3 (3- Budgeting & Forecasting)
 */
export const metadata = {
  title: "Budgeting Services for Small Business | Financially Up",
  description:
    "Budgeting services for small business, including forecasts, scenario planning and budget-versus-actual reviews to support clearer financial decisions.",
  keywords: [
    "budgeting services for small business",
    "financial forecasting services",
    "business budgeting services",
    "small business budget Australia",
    "business forecasting accountant",
    "budget versus actual reporting",
    "rolling forecast Australia",
    "scenario planning small business",
    "business advisory",
  ],
  alternates: {
    canonical:
      "https://financiallyup.com.au/services/business-advisory/budgeting-forecasting/",
  },
  openGraph: {
    title: "Budgeting Services for Small Business | Financially Up",
    description:
      "Budgeting services for small business, including forecasts, scenario planning and budget-versus-actual reviews to support clearer financial decisions.",
    url: "https://financiallyup.com.au/services/business-advisory/budgeting-forecasting/",
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
  { label: "Budgeting & Forecasting" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 3: Budgeting & Forecasting)
 */
const budgetingFaqs = [
  {
    key: "1",
    label: "How often should a small business prepare a budget?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Many businesses prepare an annual budget and review it during the year.
        Business.gov.au suggests writing a budget annually and considering a
        mid-year review, while forecasts can be updated more frequently as
        circumstances change.
      </p>
    ),
  },
  {
    key: "2",
    label: "What is a rolling forecast?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A rolling forecast is updated regularly so the business continues to
        look forward over a consistent future period. As one month or quarter is
        completed, another future period is added and assumptions are refreshed.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can budgeting services help with a business loan application?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A budget or forecast can help explain expected revenue, costs, cash flow
        and repayment capacity, and lenders may request projections. Approval
        and lending terms remain decisions for the lender.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do I need accurate bookkeeping before preparing a forecast?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Reliable current data makes forecasting more useful. If records are
        incomplete or unreconciled, the assumptions may be less reliable, so
        bookkeeping or accounting clean-up may be needed first.
      </p>
    ),
  },
];

/**
 * BudgetingForecastingSubpage Component
 * =====================================
 * Route: /services/business-advisory/budgeting-forecasting
 * Pillar 12.2: Budgeting & Forecasting Services (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BudgetingForecastingSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: budgetingFaqs.map((faq) => ({
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
        title="Budgeting Services for Small Business"
        subtitle="Strategic Financial Modeling, Dynamic Forecasts & Variance Analysis Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Budgeting services for small business help owners convert business
              goals into financial targets for revenue, costs, profit and cash.
              A useful budget gives the business a plan; a forecast then updates
              expectations as actual results, market conditions and assumptions
              change.
            </span>
            <span className="block mt-2">
              Financially Up provides business budgeting services and financial
              forecasting services for owners who want more structure around
              planning, performance monitoring and decision-making. The work can
              support annual planning, growth decisions, cost control, cash
              management and regular management reviews.
            </span>
            <span className="block mt-2 text-xs font-medium text-emerald-800 dark:text-emerald-300">
              An initial discussion can identify the decisions your budget needs
              to support, the right planning period and the financial
              information available to build it.
            </span>
          </span>
        }
        parentService={{
          label: "Business Advisory Hub",
          href: "/services/business-advisory",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 12.2 • Financial Planning & Modeling"
        highlights={[
          "Annual Budgets & 12-Month Rolling Forecasts",
          "Decision-Focused Budget-vs-Actual Variance Analysis",
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

      {/* 1. What is the Difference Between a Budget and a Forecast? */}
      <WhatIsBudgetVsForecast />

      {/* 2. Who May Need Budgeting and Forecasting Services? */}
      <WhoNeedsBudgetingServices />

      {/* 3. What Should a Small Business Budget Include? */}
      <WhatSmallBusinessBudgetIncludes />

      {/* 4. Financial Forecasting Updated as Circumstances Change & Budget-vs-Actual Variance Reporting */}
      <DynamicForecastingAndVarianceAnalysis />

      {/* 5. Scenario Planning for Business Decisions */}
      <ScenarioPlanningForDecisions />

      {/* 6. What Records and Information Are Needed? */}
      <RecordsNeededForBudgeting />

      {/* 7. How Financially Up Can Help & Why Choose Financially Up */}
      <HowFinanciallyUpHelpsBudgeting />

      {/* 8. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about budgeting cycles, rolling forecasts, loan application projections, and bookkeeping prerequisites."
        image="/images/services/faq.webp"
        imageAlt="Budgeting and Forecasting Frequently Asked Questions"
        items={budgetingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Plan Your Financial Future"
        title="Book an Appointment"
        subtitle="If you want a clearer financial plan and a practical way to update it as the business changes, book an appointment with Financially Up to discuss budgeting and forecasting services."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Business Advisory Services"
        secondaryButtonHref="/services/business-advisory"
      />

      {/* 10. Related Services Ribbon (Verbatim cross-links) */}
      <BudgetingRelatedServicesRibbon />
    </main>
  );
}
