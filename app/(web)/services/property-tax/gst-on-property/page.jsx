import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import IsGstPayableOnPropertySale from "./components/IsGstPayableOnPropertySale";
import ExistingVsNewResidentialGst from "./components/ExistingVsNewResidentialGst";
import ChangeInIntendedUseAdjustments from "./components/ChangeInIntendedUseAdjustments";
import VacantLandSubdivisionGst from "./components/VacantLandSubdivisionGst";
import GstMarginSchemeDetailed from "./components/GstMarginSchemeDetailed";
import GstWithholdingAtSettlement from "./components/GstWithholdingAtSettlement";
import CommercialPropertyAndFarmlandGst from "./components/CommercialPropertyAndFarmlandGst";
import WhatFinanciallyUpReviewsGst from "./components/WhatFinanciallyUpReviewsGst";
import RelatedPropertyGstRibbon from "./components/RelatedPropertyGstRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6 of 10th Pillar Property Tax.docx)
 */
export const metadata = {
  title: "GST on Property in Australia | Financially Up",
  description:
    "Buying, selling or developing property? Financially Up can review GST treatment, credits, the margin scheme and settlement obligations before you proceed.",
  keywords: [
    "GST on property Australia",
    "GST margin scheme accountant",
    "new residential premises GST",
    "GST withholding at settlement",
    "property development GST",
    "going concern commercial property",
    "vacant land GST",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/property-tax/gst-on-property/",
  },
  openGraph: {
    title: "GST on Property in Australia | Financially Up",
    description:
      "Buying, selling or developing property? Financially Up can review GST treatment, credits, the margin scheme and settlement obligations before you proceed.",
    url: "https://financiallyup.com.au/services/property-tax/gst-on-property/",
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
  { label: "GST on Property" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const gstPropertyFaqs = [
  {
    key: "1",
    label: "Is GST charged on the sale of an existing home?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The sale of existing residential premises is generally input taxed, so GST is not added to the price. The property's history and use should still be checked.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can one property development create a GST obligation?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. A one-off activity can amount to an enterprise. Purpose, scale, commercial character, registration requirements and the proposed sale must be reviewed.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I claim GST credits for building a rental property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Costs connected with input-taxed residential rent generally do not support GST credits. A different intended or actual use can require apportionment or adjustments.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does GST withholding replace the seller's activity statement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Withholding changes how part of the purchase price is paid at settlement. The supplier must still account for the taxable sale under the usual GST reporting rules.
      </p>
    ),
  },
];

/**
 * GstOnPropertyPage Component
 * ===========================
 * Route: /services/property-tax/gst-on-property
 * Pillar 10.5: GST on Property (Page 6 of 10th Pillar Property Tax.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function GstOnPropertyPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: gstPropertyFaqs.map((faq) => ({
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
        title="GST on Property in Australia"
        subtitle="Taxable Supplies, Margin Scheme Calculations, Input Tax Credits & Settlement Withholding Notices"
        description={
          <span className="space-y-3 block">
            <span className="block">
              GST on property in Australia depends on the property's character, how it is used, the nature of the transaction and whether the seller is carrying on an enterprise. An established home, new dwelling, commercial property and vacant development land can each receive different treatment.
            </span>
            <span className="block mt-2">
              Financially Up provides property GST advice for owners, investors and developers. Book an Appointment before contract terms, project budgets or a change in use are finalized.
            </span>
          </span>
        }
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.5 • Property Tax Practice"
        highlights={[
          "New vs Existing Residential Classification",
          "GST Margin Scheme Calculations & Agreements",
          "Purchaser Settlement Withholding Compliance",
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

      {/* 1. Is GST Payable When Property Is Sold */}
      <IsGstPayableOnPropertySale />

      {/* 2. Existing and New Residential Premises */}
      <ExistingVsNewResidentialGst />

      {/* 3. What if the Intended Use Changes */}
      <ChangeInIntendedUseAdjustments />

      {/* 4. GST on Vacant Land and Subdivision Projects */}
      <VacantLandSubdivisionGst />

      {/* 5. What Is the GST Margin Scheme */}
      <GstMarginSchemeDetailed />

      {/* 6. How Does GST Withholding at Settlement Work */}
      <GstWithholdingAtSettlement />

      {/* 7. Can Commercial Property or Farmland Be GST-Free */}
      <CommercialPropertyAndFarmlandGst />

      {/* 8. What Financially Up Reviews */}
      <WhatFinanciallyUpReviewsGst />

      {/* 9. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about GST on Australian property, input-taxed residential premises, margin schemes, and purchaser withholding."
        image="/images/services/faq.webp"
        imageAlt="GST on Property Frequently Asked Questions"
        items={gstPropertyFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Discuss Your Property Transaction"
        subtitle="Bring the proposed contract, acquisition documents, ownership structure and a summary of how the property has been or will be used. Financially Up can identify the GST questions, review the available information and explain what should be resolved before you proceed."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />

      {/* 11. Related Service Ribbon */}
      <RelatedPropertyGstRibbon />
    </main>
  );
}
