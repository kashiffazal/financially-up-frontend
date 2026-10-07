import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatCgtPlanningInvolves from "./components/WhatCgtPlanningInvolves";
import WhenToSeekCgtAdvice from "./components/WhenToSeekCgtAdvice";
import KeyCgtPlanningConsiderations from "./components/KeyCgtPlanningConsiderations";
import TimingMattersInCgtPlanning from "./components/TimingMattersInCgtPlanning";
import PropertySharesAndBusinessAssets from "./components/PropertySharesAndBusinessAssets";
import WhatRecordsNeededCgt from "./components/WhatRecordsNeededCgt";
import HowFinanciallyUpHelpsCgt from "./components/HowFinanciallyUpHelpsCgt";
import RelatedCgtPlanningRibbon from "./components/RelatedCgtPlanningRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 8)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Capital Gains Tax Advice & CGT Planning | Financially Up",
  description:
    "Get capital gains tax advice before selling property, shares or business assets. Financially Up provides practical CGT planning across Australia.",
  keywords: [
    "capital gains tax advice",
    "CGT planning Australia",
    "CGT event A1 contract date",
    "50 percent CGT discount rules",
    "small business CGT concessions",
    "property capital gains tax Sydney",
    "carried forward capital losses",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/cgt-planning/",
  },
  openGraph: {
    title: "Capital Gains Tax Advice & CGT Planning | Financially Up",
    description:
      "Get capital gains tax advice before selling property, shares or business assets. Financially Up provides practical CGT planning across Australia.",
    url: "https://financiallyup.com.au/services/tax-planning/cgt-planning/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the Tax Planning service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Tax Planning", href: "/services/tax-planning" },
  { label: "CGT Planning" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 8)
 */
const cgtPlanningFaqs = [
  {
    key: "1",
    label: "When should I get capital gains tax advice?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Ideally before entering into a significant sale, transfer or restructuring transaction. Early advice can clarify the likely CGT event, timing, records and rules before the transaction becomes fixed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I choose which financial year a capital gain falls into?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not simply by choosing a preferred date. The timing is determined by the relevant CGT event rules. For a disposal under a contract, CGT event A1 generally occurs when the contract is entered into rather than at settlement. Other CGT events can have different timing.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can capital losses reduce my salary income?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally no. Capital losses are generally applied against capital gains. Unused net capital losses may generally be carried forward for use against future capital gains, subject to applicable rules.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does the 50% CGT discount always apply after 12 months?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The discount has eligibility requirements and can depend on the taxpayer, asset and circumstances. Holding an asset for 12 months is only one part of the analysis.
      </p>
    ),
  },
  {
    key: "5",
    label: "Is CGT planning different from a CGT calculation?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Planning considers the tax implications before or around a proposed transaction. A CGT calculation determines the gain or loss for reporting after the relevant facts are known.
      </p>
    ),
  },
];

/**
 * CgtPlanningPage Component
 * =========================
 * Route: /services/tax-planning/cgt-planning
 * Pillar 3.7: CGT Planning (Page 8 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CgtPlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cgtPlanningFaqs.map((faq) => ({
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
        title="Capital Gains Tax Advice and CGT Planning"
        subtitle="Proactive CGT Analysis Before Contracts, Transfers & Disposals Are Locked In"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Capital gains tax advice is most useful before a sale, transfer or other CGT event is locked in. A proactive review can help you understand the likely tax treatment, the records needed, the timing of the CGT event and whether any exemptions, discounts, capital losses or concessions may be relevant to your circumstances.
            </span>
            <span className="block mt-2">
              CGT planning does not mean finding a way to avoid tax. It means understanding the tax consequences of a proposed transaction early enough to make informed decisions and to avoid relying on assumptions about timing, ownership or eligibility.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.7 • Capital Gains Advisory Practice"
        highlights={[
          "Contract Date vs Settlement Date (Event A1)",
          "50% CGT Discount & Eligibility Review",
          "Small Business CGT Concessions Analysis",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "CGT Advisory Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What does CGT planning involve? */}
      <WhatCgtPlanningInvolves />

      {/* 2. When should you seek capital gains tax advice? */}
      <WhenToSeekCgtAdvice />

      {/* 3. Key CGT planning considerations */}
      <KeyCgtPlanningConsiderations />

      {/* 4. Timing matters in CGT planning */}
      <TimingMattersInCgtPlanning />

      {/* 5. Property, shares and business assets */}
      <PropertySharesAndBusinessAssets />

      {/* 6. What records may be needed? */}
      <WhatRecordsNeededCgt />

      {/* 7. How Financially Up can help & Why choose us */}
      <HowFinanciallyUpHelpsCgt />

      {/* 8. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about CGT event timing, 50% discount conditions, capital losses, and planning advice with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="CGT Planning Frequently Asked Questions"
        items={cgtPlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Capital Gains Tax Advisory"
        title="Book an Appointment"
        subtitle="Discuss a proposed property, share, investment or business-asset transaction with Financially Up and identify the CGT issues that should be reviewed before you proceed."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 10. Related Service Ribbon */}
      <RelatedCgtPlanningRibbon />
    </main>
  );
}
