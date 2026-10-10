import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenFinanceDashboardHelps from "./components/WhenFinanceDashboardHelps";
import WhatBelongsOnUsefulDashboard from "./components/WhatBelongsOnUsefulDashboard";
import FromDataToManagementAction from "./components/FromDataToManagementAction";
import HowFinanciallyUpHelpsDashboards from "./components/HowFinanciallyUpHelpsDashboards";
import WhatToBringAndDashboardScope from "./components/WhatToBringAndDashboardScope";
import RelatedServiceRibbonDashboards from "./components/RelatedServiceRibbonDashboards";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Subpage 6)
 */
export const metadata = {
  title: "Finance Dashboard Services for Business | Financially Up",
  description:
    "See the financial measures behind your decisions. Financially Up helps design and maintain dashboards that present results, cash and trends with useful context.",
  keywords: [
    "finance dashboard services",
    "financial kpi dashboard",
    "business intelligence accounting",
    "xero dashboard reporting",
    "executive finance dashboard australia",
    "cash flow dashboard",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/virtual-cfo/dashboards/",
  },
  openGraph: {
    title: "Finance Dashboard Services for Business | Financially Up",
    description:
      "See the financial measures behind your decisions. Financially Up helps design and maintain dashboards that present results, cash and trends with useful context.",
    url: "https://financiallyup.com.au/services/virtual-cfo/dashboards/",
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
  { label: "Dashboards" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document
 */
const dashboardFaqs = [
  {
    key: "1",
    label: "What is the difference between a dashboard and a financial statement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A financial statement sets out an organization’s financial performance or position. A dashboard selects measures, comparisons and trends for regular decisions. The dashboard should draw on dependable records and be read alongside fuller reports when needed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can a dashboard update automatically?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It may be possible with compatible systems, but automation does not fix incorrect coding, late entries or unclear definitions. The setup and checks depend on your data and platform.
      </p>
    ),
  },
  {
    key: "3",
    label: "Which measures should a small business include?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Usually a few measures covering cash, sales quality, margin and the main operational driver. The right measures depend on the business model and the decisions the owner faces.
      </p>
    ),
  },
  {
    key: "4",
    label: "Is a financial KPI dashboard enough for board meetings?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Sometimes a short dashboard helps directors scan results, but material decisions often require commentary, supporting figures and clear assumptions in a board pack.
      </p>
    ),
  },
];

/**
 * DashboardsPage Component
 * ========================
 * Route: /services/virtual-cfo/dashboards
 * Subpage 6 of Pillar 13 (Virtual CFO)
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function DashboardsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: dashboardFaqs.map((faq) => ({
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
        title="Finance Dashboard Services for Clearer Decisions"
        subtitle="Visualise Key Performance Indicators, Working Capital & Trends in Real Time"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Finance dashboard services bring selected business figures into one clear view so owners and managers can see what has changed and what needs attention. A dashboard might show revenue, gross margin, cash and overdue receivables beside budget or prior-period results. Its value comes from reliable data, agreed definitions and a regular conversation about what the figures mean.
            </span>
            <span className="block mt-2">
              Financially Up helps businesses decide what a dashboard should answer, prepare the underlying information and design a reporting view suited to its users.
            </span>
            <span className="block mt-2">
              Book an Appointment to discuss your current reports, the decisions you make and the data available.
            </span>
          </span>
        }
        parentService={{
          label: "Virtual CFO Hub",
          href: "/services/virtual-cfo",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 13.6 • Visual Analytics & KPIs"
        highlights={[
          "Live Working Capital & Liquidity Visibility",
          "Clean Reconciled Source Data & Fair Comparisons",
          "Australia-Wide Online & In-Person",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "Real-Time", label: "Executive Views" },
          { value: "Agreed", label: "KPI Definitions" },
          { value: "CPA & IPA", label: "Specialist Advisors" },
          { value: "10+ Years", label: "Financial Expertise" },
        ]}
      />

      {/* 1. When does a finance dashboard help? */}
      <WhenFinanceDashboardHelps />

      {/* 2. What belongs on a useful dashboard? */}
      <WhatBelongsOnUsefulDashboard />

      {/* 3. From accounting data to management action */}
      <FromDataToManagementAction />

      {/* 4. How Financially Up helps & Related services */}
      <HowFinanciallyUpHelpsDashboards />

      {/* 5. What to bring to the first appointment & Service scope */}
      <WhatToBringAndDashboardScope />

      {/* 6. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about financial dashboards, automation caveats, small business metrics, and board packs."
        image="/images/services/faq.webp"
        imageAlt="Finance Dashboard Services Frequently Asked Questions"
        items={dashboardFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Make the Numbers Easier to Use"
        title="Book an Appointment"
        subtitle="Book an Appointment with Financially Up to discuss what your decision makers need to see, whether your records support it and an appropriate scope for finance dashboard services."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Virtual CFO Services"
        secondaryButtonHref="/services/virtual-cfo"
      />

      {/* 8. Related Service Ribbon */}
      <RelatedServiceRibbonDashboards />
    </main>
  );
}
