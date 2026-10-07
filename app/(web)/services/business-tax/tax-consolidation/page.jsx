import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsTaxConsolidation from "./components/WhatIsTaxConsolidation";
import WhichGroupsCanConsolidate from "./components/WhichGroupsCanConsolidate";
import WhatChangesWhenGroupConsolidates from "./components/WhatChangesWhenGroupConsolidates";
import WhenAreConsolidationServicesUseful from "./components/WhenAreConsolidationServicesUseful";
import FormationJoiningAndLeavingGroup from "./components/FormationJoiningAndLeavingGroup";
import RecordsNeededConsolidationReview from "./components/RecordsNeededConsolidationReview";
import HowFinanciallyUpHelpsConsolidation from "./components/HowFinanciallyUpHelpsConsolidation";
import RelatedTaxConsolidationRibbon from "./components/RelatedTaxConsolidationRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 13 of Business Tax)
 */
export const metadata = {
  title: "Tax Consolidation Services Australia | Financially Up",
  description:
    "Tax consolidation services for eligible corporate groups. Get help assessing formation, tax attributes, joining or leaving entities and ongoing compliance.",
  keywords: [
    "tax consolidation services",
    "tax consolidated group Australia",
    "single entity rule ATO",
    "tax cost setting ACA",
    "head company tax return",
    "joining and leaving consolidated group",
    "corporate tax consolidation Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/tax-consolidation/",
  },
  openGraph: {
    title: "Tax Consolidation Services Australia | Financially Up",
    description:
      "Tax consolidation services for eligible corporate groups. Get help assessing formation, tax attributes, joining or leaving entities and ongoing compliance.",
    url: "https://financiallyup.com.au/services/business-tax/tax-consolidation/",
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
  { label: "Tax Consolidation" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 13)
 */
const taxConsolidationFaqs = [
  {
    key: "1",
    label: "Is tax consolidation mandatory for a wholly owned group?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Consolidation is optional for eligible groups, but once a valid choice is made it is irrevocable.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does each subsidiary still lodge its own income tax return after consolidation?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For the period it is a subsidiary member of the consolidated group, the head company is generally the recognized taxpayer for the group&apos;s income-tax liability. Non-membership periods can still require separate treatment.
      </p>
    ),
  },
  {
    key: "3",
    label: "Are transactions between consolidated group members ignored?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For income-tax purposes, intra-group dealings are generally ignored under the single entity rule, subject to specific provisions and exceptions.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does income tax consolidation also consolidate GST?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Income tax consolidation does not automatically consolidate GST or other non-income-tax obligations. Separate grouping rules may apply for other taxes.
      </p>
    ),
  },
  {
    key: "5",
    label: "When should a tax consolidation accountant be involved?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Ideally before forming the group or completing a major acquisition, disposal or restructure, because joining and leaving calculations can affect future tax outcomes.
      </p>
    ),
  },
];

/**
 * TaxConsolidationPage Component
 * ==============================
 * Route: /services/business-tax/tax-consolidation
 * Pillar 2.12: Tax Consolidation (Page 13 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function TaxConsolidationPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: taxConsolidationFaqs.map((faq) => ({
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
        title="Tax Consolidation Services for Corporate Groups"
        subtitle="Head Company Taxation, Single Entity Rule, Tax Cost Setting & Corporate Group Compliance"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Income tax consolidation allows an eligible wholly owned group to be treated as a single entity for income tax purposes, with the head company responsible for the group&apos;s income-tax position. It can simplify some intra-group tax outcomes, but formation, joining and leaving calculations can be technically demanding.
            </span>
            <span className="block mt-2">
              Financially Up provides tax consolidation services for corporate groups that need help assessing whether consolidation is appropriate, preparing formation information, reviewing tax attributes and managing ongoing consolidated-group compliance. The service is distinct from ordinary company tax-return preparation because consolidation changes how the group is treated for income tax purposes.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.12 • Corporate Group Consolidation"
        highlights={[
          "Single Entity Rule (SER) & Head Company Lodgments",
          "Irrevocable Formation & Statutory ATO Notifications",
          "Tax Cost Setting (ACA) on Joining & Leaving Events",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Scope of Service",
            value: "Eligible wholly owned corporate groups, head companies & subsidiary members",
          },
          {
            icon: "percentage",
            label: "Single Entity Rule",
            value: "Subsidiary members treated as parts of the head company for income tax",
          },
          {
            icon: "audit",
            label: "Irrevocable Choice",
            value: "Written choice & ATO notification with irrevocable statutory election",
          },
          {
            icon: "safety",
            label: "Cost Setting & Attributes",
            value: "Tax cost setting on joining/leaving, transferred losses & franking accounts",
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
          { value: "10+ Years", label: "Corporate Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. What is tax consolidation? */}
      <WhatIsTaxConsolidation />

      {/* 2. Which groups can consolidate? */}
      <WhichGroupsCanConsolidate />

      {/* 3. What changes when a group consolidates? */}
      <WhatChangesWhenGroupConsolidates />

      {/* 4. When are tax consolidation services useful? (8 trigger situations) */}
      <WhenAreConsolidationServicesUseful />

      {/* 5. Formation requires more than an election & Joining/leaving the group */}
      <FormationJoiningAndLeavingGroup />

      {/* 6. Records and information we may need (9 records checklist + indefinite retention rule) */}
      <RecordsNeededConsolidationReview />

      {/* 7. How Financially Up can help & Why choose Financially Up? */}
      <HowFinanciallyUpHelpsConsolidation />

      {/* 8. Contextual Related Services Ribbon */}
      <RelatedTaxConsolidationRibbon />

      {/* 9. Frequently asked questions (5 Verbatim FAQs) */}
      <FaqSection
        title="Frequently asked questions"
        subtitle="Key legal and tax considerations regarding Australian income tax consolidation, the single entity rule, and subsidiary compliance."
        faqs={taxConsolidationFaqs}
      />

      {/* 10. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="Provide the current group structure and details of the proposed formation, acquisition, disposal or compliance issue so we can scope the consolidation work required."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
