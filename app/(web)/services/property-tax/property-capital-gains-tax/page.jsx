import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenDoesPropertyCgtApply from "./components/WhenDoesPropertyCgtApply";
import HowPropertyCgtIsCalculated from "./components/HowPropertyCgtIsCalculated";
import CgtDiscountEligibilityRules from "./components/CgtDiscountEligibilityRules";
import FormerHomeMainResidenceRules from "./components/FormerHomeMainResidenceRules";
import SellingInvestmentPropertyContext from "./components/SellingInvestmentPropertyContext";
import ClearanceCertificateWithholding from "./components/ClearanceCertificateWithholding";
import RecordsToBringCgtAppointment from "./components/RecordsToBringCgtAppointment";
import HowFinanciallyUpHelpsCgt from "./components/HowFinanciallyUpHelpsCgt";
import RelatedPropertyCgtRibbon from "./components/RelatedPropertyCgtRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5 of 10th Pillar Property Tax.docx)
 */
export const metadata = {
  title: "Property Capital Gains Tax Accountant | Financially Up",
  description:
    "Selling property? Get help reviewing the cost base, exemptions, CGT calculation and current clearance-certificate requirements with Financially Up.",
  keywords: [
    "property capital gains tax",
    "property CGT accountant",
    "capital gains on real estate Australia",
    "CGT clearance certificate 2025",
    "50% CGT discount property",
    "property cost base calculation",
    "capital gains tax rental property",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/property-tax/property-capital-gains-tax/",
  },
  openGraph: {
    title: "Property Capital Gains Tax Accountant | Financially Up",
    description:
      "Selling property? Get help reviewing the cost base, exemptions, CGT calculation and current clearance-certificate requirements with Financially Up.",
    url: "https://financiallyup.com.au/services/property-tax/property-capital-gains-tax/",
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
  { label: "Property Capital Gains Tax Advice" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const propertyCgtFaqs = [
  {
    key: "1",
    label: "Do I pay CGT when I sell my home?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An eligible main residence can be fully exempt. A partial gain may arise where it was not your main residence for the entire relevant period, was used to produce income, or another limitation applies.
      </p>
    ),
  },
  {
    key: "2",
    label: "Which income year includes my property sale?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For a sale under contract, the CGT event generally occurs when the contract is entered into rather than at settlement.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can renovation costs reduce my capital gain?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Eligible capital-improvement costs may form part of the cost base. The work, records, prior deductions and other exclusions must be reviewed before an amount is included.
      </p>
    ),
  },
  {
    key: "4",
    label: "Is the CGT discount automatic after 12 months?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The ownership period, taxpayer type, residency history and other eligibility conditions must be checked, and capital losses are applied before the discount.
      </p>
    ),
  },
];

/**
 * PropertyCapitalGainsTaxPage Component
 * =====================================
 * Route: /services/property-tax/property-capital-gains-tax
 * Pillar 10.4: Property Capital Gains Tax (Page 5 of 10th Pillar Property Tax.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function PropertyCapitalGainsTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: propertyCgtFaqs.map((faq) => ({
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
        title="Property Capital Gains Tax Advice"
        subtitle="Cost Base Reconstruction, 50% CGT Discounts, Main Residence Exemptions & Clearance Certificates Across Australia"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Selling property can create a capital gain or capital loss, but the difference between the purchase price and sale price is not the complete calculation. Acquisition and selling costs, improvements, prior deductions, ownership, residency and the property's use must all be considered.
            </span>
            <span className="block mt-2">
              Financially Up provides property capital gains tax calculation, reporting and separately scoped advice for Australian property owners. Book an Appointment before settlement or tax-return preparation to review the transaction and available records.
            </span>
          </span>
        }
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.4 • Property Tax Practice"
        highlights={[
          "5-Element Cost Base Reconstruction",
          "50% General CGT Discount Optimization",
          "Mandatory 2025+ ATO Clearance Certificates",
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

      {/* 1. When Does Property Capital Gains Tax Apply */}
      <WhenDoesPropertyCgtApply />

      {/* 2. How Is a Property Capital Gain Calculated */}
      <HowPropertyCgtIsCalculated />

      {/* 3. Is the CGT Discount Available */}
      <CgtDiscountEligibilityRules />

      {/* 4. What if the Property Was Once Your Home */}
      <FormerHomeMainResidenceRules />

      {/* 5. What if You Are Selling an Investment Property */}
      <SellingInvestmentPropertyContext />

      {/* 6. Do Australian Resident Sellers Need a Clearance Certificate */}
      <ClearanceCertificateWithholding />

      {/* 7. Records to Bring to Your CGT Appointment */}
      <RecordsToBringCgtAppointment />

      {/* 8. How Financially Up Can Help */}
      <HowFinanciallyUpHelpsCgt />

      {/* 9. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about calculating capital gains tax on Australian property, eligible deductions, clearances, and the 50% discount."
        image="/images/services/faq.webp"
        imageAlt="Property Capital Gains Tax Frequently Asked Questions"
        items={propertyCgtFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Review Your Property Sale"
        subtitle="Bring your contracts, ownership and use history, prior rental schedules and major expense records. Financially Up can identify gaps, prepare a supported calculation and explain the reporting steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />

      {/* 11. Related Service Ribbon */}
      <RelatedPropertyCgtRibbon />
    </main>
  );
}
