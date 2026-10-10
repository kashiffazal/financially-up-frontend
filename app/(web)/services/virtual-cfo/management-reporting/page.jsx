import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsManagementReporting from "./components/WhatIsManagementReporting";
import MonthlyReportingScopeList from "./components/MonthlyReportingScopeList";
import MonthlyVsYearEndReporting from "./components/MonthlyVsYearEndReporting";
import BudgetVsActualVarianceAnalysis from "./components/BudgetVsActualVarianceAnalysis";
import CashFlowManagementReporting from "./components/CashFlowManagementReporting";
import UsefulReportCharacteristics from "./components/UsefulReportCharacteristics";
import RecordsAndAccessNeededReporting from "./components/RecordsAndAccessNeededReporting";
import WhyChooseFinanciallyUpReporting from "./components/WhyChooseFinanciallyUpReporting";
import RelatedServiceRibbonReporting from "./components/RelatedServiceRibbonReporting";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Subpage 2)
 */
export const metadata = {
  title: "Management Reporting Services | Financially Up",
  description:
    "Management reporting services that turn accounting data into useful monthly insights, KPIs, variance analysis and clearer business performance information.",
  keywords: [
    "management reporting services",
    "monthly management reports",
    "kpi reporting accountants",
    "variance analysis australia",
    "management accounts small business",
    "budget vs actual reporting",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/virtual-cfo/management-reporting/",
  },
  openGraph: {
    title: "Management Reporting Services | Financially Up",
    description:
      "Management reporting services that turn accounting data into useful monthly insights, KPIs, variance analysis and clearer business performance information.",
    url: "https://financiallyup.com.au/services/virtual-cfo/management-reporting/",
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
  { label: "Virtual CFO", href: "/services/virtual-cfo" },
  { label: "Management Reporting" },
];

/**
 * 3 Exact Frequently Asked Questions from Client Document
 */
const managementReportingFaqs = [
  {
    key: "1",
    label: "What is included in a management accounting report?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The content depends on the business. Common elements include profit and loss results, balance-sheet movements, cash flow, budget comparisons, KPIs and commentary on material variances. The best report is one designed around the decisions management actually makes.
      </p>
    ),
  },
  {
    key: "2",
    label: "How often should management reports be prepared?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Monthly management reporting is common because it gives a regular decision cycle without being excessively frequent for many businesses. Some businesses may need weekly cash information or quarterly strategic reporting as well.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can management reports be prepared if my bookkeeping is behind?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        They can be practical only as reliable as the underlying records. If bookkeeping is materially incomplete or unreconciled, the records may need to be brought up to date before meaningful reporting can be produced.
      </p>
    ),
  },
];

/**
 * ManagementReportingPage Component
 * =================================
 * Route: /services/virtual-cfo/management-reporting
 * Subpage 2 of Pillar 13 (Virtual CFO)
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ManagementReportingPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: managementReportingFaqs.map((faq) => ({
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
        title="Management Reporting Services"
        subtitle="Actionable Monthly Insights, Variance Analysis & Decision-Ready Metrics"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Management reporting services turn accounting data into regular, decision-focused reports for business owners and managers. Instead of waiting until year end to understand performance, management reports can show how revenue, margins, costs, cash flow and other key measures are tracking throughout the year.
            </span>
            <span className="block mt-2">
              Financially Up can prepare or improve monthly management reporting so the information is consistent, understandable and relevant to the way the business is run. The service is designed for internal management use and is different from statutory financial reporting, tax-return preparation or an audit.
            </span>
            <span className="block mt-2">
              If your accounting system produces plenty of data but not enough useful insight, an initial discussion can help define the reports and KPIs that matter to your business.
            </span>
          </span>
        }
        parentService={{
          label: "Virtual CFO Hub",
          href: "/services/virtual-cfo",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 13.2 • Performance Reporting"
        highlights={[
          "Monthly Feedback Loops & Variance Checks",
          "Custom Operational & Financial KPIs",
          "Australia-Wide Online & In-Person",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "Monthly", label: "Reporting Cadence" },
          { value: "10+ Years", label: "Financial Experience" },
          { value: "CPA & IPA", label: "Specialist Team" },
          { value: "Australia-Wide", label: "Advisory Service" },
        ]}
      />

      {/* 1. What is management reporting? */}
      <WhatIsManagementReporting />

      {/* 2. What can monthly management reporting include? */}
      <MonthlyReportingScopeList />

      {/* 3. Why monthly reporting can be more useful than year-end reporting alone */}
      <MonthlyVsYearEndReporting />

      {/* 4. Budget versus actual and variance analysis */}
      <BudgetVsActualVarianceAnalysis />

      {/* 5. Cash flow and management reporting & Statutory differences */}
      <CashFlowManagementReporting />

      {/* 6. What makes a useful management report? */}
      <UsefulReportCharacteristics />

      {/* 7. What Financially Up can help with & Records needed */}
      <RecordsAndAccessNeededReporting />

      {/* 8. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpReporting />

      {/* 9. Frequently Asked Questions (Verbatim 3 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about monthly reporting packs, KPI selection, and bookkeeping dependencies."
        image="/images/services/faq.webp"
        imageAlt="Management Reporting Services Frequently Asked Questions"
        items={managementReportingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Turn Accounting Data into Decision-Ready Insight"
        title="Book an Appointment"
        subtitle="For clearer monthly management reporting, speak with Financially Up about the reports and KPIs your business needs."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Virtual CFO Services"
        secondaryButtonHref="/services/virtual-cfo"
      />

      {/* 11. Related Service Ribbon */}
      <RelatedServiceRibbonReporting />
    </main>
  );
}
