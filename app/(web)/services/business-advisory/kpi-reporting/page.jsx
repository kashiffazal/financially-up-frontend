import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsBusinessKpiReport from "./components/WhatIsBusinessKpiReport";
import WhenKpiReportingHelps from "./components/WhenKpiReportingHelps";
import ChoosingMeasuresReflectRealBusiness from "./components/ChoosingMeasuresReflectRealBusiness";
import WhatKpiDashboardCanShow from "./components/WhatKpiDashboardCanShow";
import HowFinanciallyUpHelpsKpiReporting from "./components/HowFinanciallyUpHelpsKpiReporting";
import WhatToExpectAndWhatToBringKpi from "./components/WhatToExpectAndWhatToBringKpi";
import WhyChooseFinanciallyUpKpi from "./components/WhyChooseFinanciallyUpKpi";
import KpiRelatedServicesRibbon from "./components/KpiRelatedServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: Page 7 (7- KPI Reporting)
 */
export const metadata = {
  title: "KPI Reporting Services for Business | Financially Up",
  description:
    "Turn business figures into useful decisions. Financially Up helps define relevant KPIs, build clear reports and review what the results mean for your business.",
  keywords: [
    "KPI reporting services",
    "KPI reporting accountant",
    "management KPI reporting",
    "business KPI dashboard",
    "financial KPI reporting Australia",
    "small business KPI tracking",
    "business advisory Sydney",
    "operational KPI reporting",
  ],
  alternates: {
    canonical:
      "https://financiallyup.com.au/services/business-advisory/kpi-reporting/",
  },
  openGraph: {
    title: "KPI Reporting Services for Business | Financially Up",
    description:
      "Turn business figures into useful decisions. Financially Up helps define relevant KPIs, build clear reports and review what the results mean for your business.",
    url: "https://financiallyup.com.au/services/business-advisory/kpi-reporting/",
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
  { label: "Business Advisory", href: "/services/business-advisory" },
  { label: "KPI Reporting" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 7: KPI Reporting)
 */
const kpiFaqs = [
  {
    key: "1",
    label: "What is the difference between KPI reporting and financial statements?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financial statements summarize financial results and position. KPI
        reporting selects measures tied to decisions, sometimes combining
        financial and operational information. Both rely on consistent
        underlying records.
      </p>
    ),
  },
  {
    key: "2",
    label: "Which KPIs should a small business track?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Usually a small set covering sales quality, margin, cash and the main
        operational drivers. The useful mix depends on the industry, business
        model and current priorities.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need special dashboard software?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. We can discuss a suitable format based on your systems,
        data quality and who needs the report. Clear definitions and regular
        review matter more than a particular tool.
      </p>
    ),
  },
  {
    key: "4",
    label: "How often should we review KPIs?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Use a frequency that lets you act before a problem grows. Some measures
        need weekly review; others are more meaningful monthly or quarterly.
      </p>
    ),
  },
];

/**
 * Schema.org Structured Data
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "KPI Reporting Services for Business",
      serviceType: "Management Reporting / Business Advisory",
      description:
        "Financially Up provides executive KPI reporting, financial dashboards, and operational performance analysis across Australia.",
      provider: {
        "@type": "AccountingService",
        name: "Financially Up",
        url: "https://financiallyup.com.au",
        telephone: "+61-1300-328-316",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Level 5, 100 Walker St",
          addressLocality: "North Sydney",
          addressRegion: "NSW",
          postalCode: "2060",
          addressCountry: "AU",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is the difference between KPI reporting and financial statements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Financial statements summarize financial results and position. KPI reporting selects measures tied to decisions, sometimes combining financial and operational information. Both rely on consistent underlying records.",
          },
        },
        {
          "@type": "Question",
          name: "Which KPIs should a small business track?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Usually a small set covering sales quality, margin, cash and the main operational drivers. The useful mix depends on the industry, business model and current priorities.",
          },
        },
        {
          "@type": "Question",
          name: "Do I need special dashboard software?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not necessarily. We can discuss a suitable format based on your systems, data quality and who needs the report. Clear definitions and regular review matter more than a particular tool.",
          },
        },
        {
          "@type": "Question",
          name: "How often should we review KPIs?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Use a frequency that lets you act before a problem grows. Some measures need weekly review; others are more meaningful monthly or quarterly.",
          },
        },
      ],
    },
  ],
};

/**
 * KPI Reporting Page Component
 * ============================
 * Dedicated subpage for Pillar 12: Business Advisory
 * Route: /services/business-advisory/kpi-reporting
 */
export default function KpiReportingPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SubServiceHero Component */}
      <SubServiceHero
        title="KPI Reporting Services for Clearer Business Decisions"
        subtitle="KPI Reporting Services"
        description={[
          "KPI reporting services turn selected business data into measures you can review and act on. A useful report shows whether the business is progressing towards its goals, where results have changed and which questions need attention. It should help you decide what to investigate, rather than leave you with another spreadsheet to file away.",
          "Financially Up helps owners and managers choose measures that suit their business, establish a reliable reporting process and discuss what the numbers mean. Book an Appointment to talk through your current reports, decisions and available data.",
        ]}
        parentService={{
          label: "Business Advisory Hub",
          href: "/services/business-advisory",
        }}
        breadcrumbs={breadcrumbs}
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Advisory Hub"
        secondaryButtonHref="/services/business-advisory"
        badge="Executive KPI Reporting"
        features={[
          "Decision-Driven Metric Selection",
          "Financial & Operational KPIs",
          "Actual vs Target Variance Analysis",
          "Interconnected Advisory Pathways",
        ]}
      />

      {/* Section 1: What is a business KPI report? */}
      <WhatIsBusinessKpiReport />

      {/* Section 2: When does KPI reporting help? */}
      <WhenKpiReportingHelps />

      {/* Section 3: Choosing measures that reflect the real business */}
      <ChoosingMeasuresReflectRealBusiness />

      {/* Section 4: What can a KPI dashboard show? */}
      <WhatKpiDashboardCanShow />

      {/* Section 5: How Financially Up can help */}
      <HowFinanciallyUpHelpsKpiReporting />

      {/* Section 6: What to expect and what to bring */}
      <WhatToExpectAndWhatToBringKpi />

      {/* Section 7: Why choose Financially Up? */}
      <WhyChooseFinanciallyUpKpi />

      {/* Section 8: Related Advisory Services Ribbon */}
      <KpiRelatedServicesRibbon />

      {/* Section 9: KPI reporting FAQs */}
      <FaqSection
        title="KPI Reporting FAQs"
        subtitle="Common Questions"
        description="Clear answers regarding the difference between financial statements and KPIs, small business metrics, dashboard tools, and review frequency."
        faqList={kpiFaqs}
      />

      {/* Section 10: Call to Action Banner */}
      <CallToActionBanner
        title="Make your reports useful"
        description="Book an Appointment with Financially Up to review what you currently measure, which decisions the information needs to support and what a practical KPI reporting scope would involve."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
      />
    </>
  );
}
