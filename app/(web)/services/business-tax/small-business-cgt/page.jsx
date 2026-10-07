import SubServiceHero from "@/components/website/SubServiceHero";
import WhatAreSmallBusinessCgtConcessions from "./components/WhatAreSmallBusinessCgtConcessions";
import WhoMayQualifyCgtConcessions from "./components/WhoMayQualifyCgtConcessions";
import ActiveAssetTestExplained from "./components/ActiveAssetTestExplained";
import HowTheFourConcessionsDiffer from "./components/HowTheFourConcessionsDiffer";
import CommonSituationsCgtAdvice from "./components/CommonSituationsCgtAdvice";
import RecordsRequestedCgtReview from "./components/RecordsRequestedCgtReview";
import HowFinanciallyUpHelpsCgt from "./components/HowFinanciallyUpHelpsCgt";
import RelatedSmallBusinessCgtRibbon from "./components/RelatedSmallBusinessCgtRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 12 of Business Tax)
 */
export const metadata = {
  title: "Small Business CGT Advice Australia | Financially Up",
  description:
    "Small business CGT advice for business sales and active assets. Assess eligibility for CGT concessions, records and tax-return treatment.",
  keywords: [
    "small business CGT advice",
    "small business CGT concessions",
    "15-year exemption CGT",
    "50% active asset reduction",
    "retirement exemption CGT Australia",
    "small business rollover CGT",
    "maximum net asset value test",
    "active asset test ATO",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/small-business-cgt/",
  },
  openGraph: {
    title: "Small Business CGT Advice Australia | Financially Up",
    description:
      "Small business CGT advice for business sales and active assets. Assess eligibility for CGT concessions, records and tax-return treatment.",
    url: "https://financiallyup.com.au/services/business-tax/small-business-cgt/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the business tax hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Tax", href: "/services/business-tax" },
  { label: "Small Business CGT" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 12)
 */
const smallBusinessCgtFaqs = [
  {
    key: "1",
    label: "Do all small businesses qualify for the CGT concessions?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Eligibility depends on the statutory conditions, including the relevant turnover or net-asset pathway, active-asset requirements and any additional conditions for the concession being claimed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can a company use the 50% general CGT discount?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Companies are generally not entitled to the general 50% CGT discount, although an eligible company may qualify for particular small business CGT concessions.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can commercial property qualify as an active asset?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It may, depending on how the property is used and the detailed active-asset rules. Property mainly used to derive rent can raise different issues.
      </p>
    ),
  },
  {
    key: "4",
    label: "Should I get small business CGT concessions advice before selling?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Where possible, yes. Eligibility can depend on ownership, timing and connected-entity information that is easier to review before contracts and restructuring decisions are finalized.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can more than one small business CGT concession apply?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Potentially. The concessions can interact, but each relevant condition must be satisfied and the order of application matters.
      </p>
    ),
  },
];

/**
 * SmallBusinessCgtPage Component
 * ==============================
 * Route: /services/business-tax/small-business-cgt
 * Pillar 2.11: Small Business CGT (Page 12 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SmallBusinessCgtPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: smallBusinessCgtFaqs.map((faq) => ({
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
        title="Small Business CGT Advice"
        subtitle="Division 152 Concessions, Eligibility Assessments, Active Asset Testing & Transaction Structuring"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Selling a business, business asset or ownership interest can create a capital gain, but eligible small businesses may have access to specific CGT concessions. The rules are detailed and eligibility depends on the entity, asset, ownership structure, turnover or net assets, active-asset history and the particular concession being considered.
            </span>
            <span className="block mt-2">
              Financially Up provides small business CGT advice for business owners who want to understand the tax position before or after a transaction. The work can include reviewing the proposed sale, testing relevant conditions, modelling available concessions and preparing the tax-return calculations where the transaction proceeds.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.11 • Division 152 CGT Practice"
        highlights={[
          "The 4 Core Division 152 Small Business Concessions",
          "$2M Turnover & $6M Maximum Net Asset Value Testing",
          "Active Asset & Commercial Property Eligibility Reviews",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Scope of Service",
            value: "Sale of businesses, goodwill, commercial property, shares & trust interests",
          },
          {
            icon: "percentage",
            label: "Qualification Pathways",
            value: "$2M aggregated turnover test or $6M maximum net asset value test (MNAVT)",
          },
          {
            icon: "audit",
            label: "Four Core Concessions",
            value: "15-year exemption, 50% active asset reduction, retirement & rollover",
          },
          {
            icon: "safety",
            label: "Active Asset Standards",
            value: "Business usage duration & excluding assets mainly used to derive passive rent",
          },
          {
            icon: "desktop",
            label: "Consultation Formats",
            value: "100% online video conference, phone or in-person consultation",
          },
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Advisory Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. What are the small business CGT concessions? */}
      <WhatAreSmallBusinessCgtConcessions />

      {/* 2. Who may qualify? */}
      <WhoMayQualifyCgtConcessions />

      {/* 3. The active asset test */}
      <ActiveAssetTestExplained />

      {/* 4. How the four concessions differ */}
      <HowTheFourConcessionsDiffer />

      {/* 5. Common situations where advice is useful (8 scenarios + legal disclaimer) */}
      <CommonSituationsCgtAdvice />

      {/* 6. Records we may request (8 checklist items) */}
      <RecordsRequestedCgtReview />

      {/* 7. How Financially Up can help & Why choose Financially Up? */}
      <HowFinanciallyUpHelpsCgt />

      {/* 8. Contextual Related Services Ribbon */}
      <RelatedSmallBusinessCgtRibbon />

      {/* 9. Frequently asked questions (5 Verbatim FAQs) */}
      <FaqSection
        title="Frequently asked questions"
        subtitle="Key questions regarding Australian small business CGT concessions, active assets, company discounts, and transaction timing."
        faqs={smallBusinessCgtFaqs}
      />

      {/* 10. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="Bring details of the asset or business, ownership structure, proposed transaction and recent financial information so we can assess what CGT work is required."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
