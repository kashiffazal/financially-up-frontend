import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenBusinessNeedsGrowthAdvice from "./components/WhenBusinessNeedsGrowthAdvice";
import WhatGrowthPlanningInvolves from "./components/WhatGrowthPlanningInvolves";
import ProfitCashFlowAndCapacity from "./components/ProfitCashFlowAndCapacity";
import WhatGrowthReviewLooksAt from "./components/WhatGrowthReviewLooksAt";
import HowFinanciallyUpSupportsGrowth from "./components/HowFinanciallyUpSupportsGrowth";
import WhatToBringToGrowthDiscussion from "./components/WhatToBringToGrowthDiscussion";
import WhyChooseFinanciallyUpGrowth from "./components/WhyChooseFinanciallyUpGrowth";
import GrowthRelatedServicesRibbon from "./components/GrowthRelatedServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: Page 4 (4- Business Growth)
 */
export const metadata = {
  title: "Business Growth Consultant Australia | Financially Up",
  description:
    "Ready to grow your business? Financially Up helps review margins, cash flow and capacity, then build a practical growth plan grounded in your numbers.",
  keywords: [
    "business growth consultant",
    "small business growth consultant",
    "business growth services Australia",
    "business expansion planning",
    "margin and capacity review",
    "business advisory Australia",
    "practical growth planning",
    "working capital management",
    "financial growth advisor",
  ],
  alternates: {
    canonical:
      "https://financiallyup.com.au/services/business-advisory/business-growth/",
  },
  openGraph: {
    title: "Business Growth Consultant Australia | Financially Up",
    description:
      "Ready to grow your business? Financially Up helps review margins, cash flow and capacity, then build a practical growth plan grounded in your numbers.",
    url: "https://financiallyup.com.au/services/business-advisory/business-growth/",
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
  { label: "Business Growth" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 4: Business Growth)
 */
const growthFaqs = [
  {
    key: "1",
    label: "Can an accountant help with business growth?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. An accountant can analyze margins, cash flow, funding needs and
        financial performance, and help you monitor a practical plan. Marketing,
        finance applications and legal work may require separate specialists.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does higher turnover mean the business is growing well?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. The additional sales need to support costs, cash
        requirements and an acceptable return for the risks taken.
      </p>
    ),
  },
  {
    key: "3",
    label: "What if my bookkeeping is behind?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We first identify which information is reliable and what needs updating.
        A growth decision should not rely on figures known to be incomplete.
      </p>
    ),
  },
  {
    key: "4",
    label: "How often should a growth plan be reviewed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Review it when material assumptions change and at intervals suited to
        the decision. A new contract or location usually calls for more frequent
        checks during the early stages.
      </p>
    ),
  },
];

/**
 * BusinessGrowthSubpage Component
 * ===============================
 * Route: /services/business-advisory/business-growth
 * Pillar 12.3: Business Growth Consultant Services (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BusinessGrowthSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: growthFaqs.map((faq) => ({
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
        title="Business Growth Consultant for Practical Growth Planning"
        subtitle="Review Margins, Cash Flow & Capacity to Scale with Clear Financial Confidence"
        description={
          <span className="space-y-3 block">
            <span className="block">
              More sales do not always mean more cash or profit. Growth can
              stretch staff, stock, systems and funding before the extra revenue
              is collected. Business growth consulting starts by understanding
              what is working, where profit is lost and what the business can
              support next.
            </span>
            <span className="block mt-2">
              Financially Up works with owners who want to expand with clearer
              financial information. As your business growth consultant, we
              review performance, test the assumptions behind a proposed move
              and help turn priorities into measurable actions.
            </span>
            <span className="block mt-2 text-xs font-medium text-emerald-800 dark:text-emerald-300">
              Book an Appointment to discuss your current results and the
              decision ahead.
            </span>
          </span>
        }
        parentService={{
          label: "Business Advisory Hub",
          href: "/services/business-advisory",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 12.3 • Sustainable Business Expansion"
        highlights={[
          "Working Capital & Capacity Diagnostic",
          "Assumption-Backed Expansion Forecasts",
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

      {/* 1. When Does a Business Need Growth Advice? */}
      <WhenBusinessNeedsGrowthAdvice />

      {/* 2. What Does Business Growth Planning Involve? */}
      <WhatGrowthPlanningInvolves />

      {/* 3. Profit, Cash Flow and Capacity are Different Questions */}
      <ProfitCashFlowAndCapacity />

      {/* 4. What Might a Growth Review Look At? */}
      <WhatGrowthReviewLooksAt />

      {/* 5. How Financially Up Supports the Decision */}
      <HowFinanciallyUpSupportsGrowth />

      {/* 6. What to Bring to the First Discussion */}
      <WhatToBringToGrowthDiscussion />

      {/* 7. Why Choose Financially Up for Business Growth Planning? */}
      <WhyChooseFinanciallyUpGrowth />

      {/* 8. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about business growth consulting, turnover vs profit, bookkeeping prerequisites, and review frequency."
        image="/images/services/faq.webp"
        imageAlt="Business Growth Consulting Frequently Asked Questions"
        items={growthFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Plan the Next Move with Your Numbers"
        title="Book an Appointment"
        subtitle="Bring the opportunity and your recent results to Financially Up. We can help assess the financial position, test the plan and agree practical measures for the next stage."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Business Advisory Services"
        secondaryButtonHref="/services/business-advisory"
      />

      {/* 10. Related Services Ribbon (Verbatim cross-links) */}
      <GrowthRelatedServicesRibbon />
    </main>
  );
}
