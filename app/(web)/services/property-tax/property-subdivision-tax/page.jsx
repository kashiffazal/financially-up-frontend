import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import DoesSubdivisionTriggerTax from "./components/DoesSubdivisionTriggerTax";
import CgtVsOrdinaryIncomeSubdivision from "./components/CgtVsOrdinaryIncomeSubdivision";
import CostBaseApportionmentMethods from "./components/CostBaseApportionmentMethods";
import BackyardBlockExemptionRules from "./components/BackyardBlockExemptionRules";
import GstOnSubdividedLots from "./components/GstOnSubdividedLots";
import RecordsToKeepSubdivision from "./components/RecordsToKeepSubdivision";
import HowFinanciallyUpHelpsSubdivision from "./components/HowFinanciallyUpHelpsSubdivision";
import RelatedPropertySubdivisionRibbon from "./components/RelatedPropertySubdivisionRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4 of 10th Pillar Property Tax.docx)
 */
export const metadata = {
  title: "Property Subdivision Tax Advice | Financially Up",
  description:
    "Subdividing land? Understand the potential CGT, income tax and GST consequences before you sell. Discuss your property plans with Financially Up.",
  keywords: [
    "property subdivision tax",
    "subdivision tax advice Australia",
    "subdividing land CGT",
    "subdivision ordinary income tax",
    "subdivided lot GST",
    "backyard subdivision tax",
    "cost base allocation subdivision",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/property-tax/property-subdivision-tax/",
  },
  openGraph: {
    title: "Property Subdivision Tax Advice | Financially Up",
    description:
      "Subdividing land? Understand the potential CGT, income tax and GST consequences before you sell. Discuss your property plans with Financially Up.",
    url: "https://financiallyup.com.au/services/property-tax/property-subdivision-tax/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Property Tax", href: "/services/property-tax" },
  { label: "Property Subdivision Tax Advice" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const propertySubdivisionFaqs = [
  {
    key: "1",
    label: "Is tax payable when I divide land into two titles?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Subdivision alone generally does not trigger a CGT event if ownership does not change. Tax consequences commonly arise when a lot is sold, although GST registration, project accounting and record-keeping issues may need attention earlier.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is the sale of a subdivided block always a capital gain?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Depending on the purpose, scale and commercial character of the activities, sale proceeds may be ordinary income rather than solely a capital gain. GST must be assessed separately.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does the main-residence exemption cover a vacant lot sold separately?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, no. The exemption for adjacent land ordinarily depends on the land being disposed of with the eligible dwelling as part of the same CGT event and on the other conditions being met.
      </p>
    ),
  },
  {
    key: "4",
    label: "When should I seek subdivision tax advice?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Seek advice before substantial works begin or contracts are prepared. At that stage, the intended activity, GST position, record keeping and expected tax treatment can be reviewed while commercial decisions remain open.
      </p>
    ),
  },
];

/**
 * PropertySubdivisionTaxPage Component
 * ====================================
 * Route: /services/property-tax/property-subdivision-tax
 * Pillar 10.3: Property Subdivision Tax Advice (Page 4 of 10th Pillar Property Tax.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function PropertySubdivisionTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: propertySubdivisionFaqs.map((faq) => ({
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
        title="Property Subdivision Tax Advice"
        subtitle="CGT, Ordinary Income, Cost Base Apportionment & GST on Land Subdivisions Across Australia"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Subdividing land can change how a later sale is taxed. The outcome depends on why you acquired the property, what you intend to do, the scale and commercial character of the work, and whether the activities amount to an enterprise. A sale may involve capital gains tax (CGT), ordinary income tax, GST or more than one set of rules.
            </span>
            <span className="block mt-2">
              Financially Up can review the property subdivision tax issues before substantial work begins or a sale contract is prepared. Book an Appointment to discuss the ownership history, proposed lots, development work, expected sales and available records.
            </span>
          </span>
        }
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.3 • Property Tax Practice"
        highlights={[
          "CGT vs Ordinary Income Characterisation",
          "Cost Base Apportionment Across Lots",
          "GST on Subdivided Land & Backyard Blocks",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Property Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. Does Subdividing Land Trigger Tax */}
      <DoesSubdivisionTriggerTax />

      {/* 2. Is the Sale Taxed Under CGT or as Ordinary Income */}
      <CgtVsOrdinaryIncomeSubdivision />

      {/* 3. How Is the Cost of the Original Land Divided */}
      <CostBaseApportionmentMethods />

      {/* 4. What Happens When Land Beside Your Home Is Sold */}
      <BackyardBlockExemptionRules />

      {/* 5. Could GST Apply to a Subdivided Lot */}
      <GstOnSubdividedLots />

      {/* 6. What Records Should You Keep */}
      <RecordsToKeepSubdivision />

      {/* 7. How Financially Up Can Help */}
      <HowFinanciallyUpHelpsSubdivision />

      {/* 8. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about subdividing land in Australia, CGT cost allocations, backyard blocks, and GST consequences."
        image="/images/services/faq.webp"
        imageAlt="Property Subdivision Tax Frequently Asked Questions"
        items={propertySubdivisionFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Discuss Your Subdivision Plans"
        subtitle="Bring your purchase documents, ownership history, proposed plans, estimated costs and intended sale arrangements. Financially Up can identify the tax issues, explain the information required and outline the next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />

      {/* 10. Related Service Ribbon */}
      <RelatedPropertySubdivisionRibbon />
    </main>
  );
}
