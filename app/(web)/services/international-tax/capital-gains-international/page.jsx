import SubServiceHero from "@/components/website/SubServiceHero";
import OverseasCgtScopeAndProperty from "./components/OverseasCgtScopeAndProperty";
import ResidencyChangesAndEventI1 from "./components/ResidencyChangesAndEventI1";
import CalculationRulesDiscountAndShares from "./components/CalculationRulesDiscountAndShares";
import DoubleTaxOnGainsAndRecords from "./components/DoubleTaxOnGainsAndRecords";
import RelatedInternationalCgtRibbon from "./components/RelatedInternationalCgtRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 7)
 */
export const metadata = {
  title: "Capital Gains Tax on Foreign Property Australia | Financially Up",
  description:
    "Get help with Australian CGT on overseas property or shares, including residency changes, cost base, currency conversion, records and foreign tax paid.",
  keywords: [
    "capital gains tax foreign property Australia",
    "international capital gains tax accountant",
    "CGT event I1 australia",
    "deemed acquisition market value residency",
    "cgt discount foreign resident period",
    "foreign shares cgt australia",
    "cgt foreign property sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/international-tax/capital-gains-international/",
  },
  openGraph: {
    title: "Capital Gains Tax on Foreign Property Australia | Financially Up",
    description:
      "Get help with Australian CGT on overseas property or shares, including residency changes, cost base, currency conversion, records and foreign tax paid.",
    url: "https://financiallyup.com.au/services/international-tax/capital-gains-international/",
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
  { label: "International Tax", href: "/services/international-tax" },
  { label: "Capital Gains (International)" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 7)
 */
const internationalCgtFaqs = [
  {
    key: "1",
    label: "Do I owe Australian CGT if the property sale money stays overseas?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Where an Australian tax resident has a taxable gain, leaving the proceeds overseas generally does not remove the Australian CGT question. Residency and any applicable exceptions must be assessed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does Australia use my original purchase price if I bought the property before moving here?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not always. Certain assets may be deemed acquired at market value when you become an Australian tax resident, subject to exceptions. The residency date and asset type need review.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I claim the full CGT discount after living overseas?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. Foreign or temporary residency periods can affect the available discount, and the relevant dates and eligibility rules must be checked.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does foreign tax paid on a gain always cancel Australian tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Any Australian foreign income tax offset depends on qualifying tax, Australian assessable income and the applicable limit.
      </p>
    ),
  },
];

/**
 * CapitalGainsInternationalPage Component
 * =======================================
 * Route: /services/international-tax/capital-gains-international
 * Pillar 14.6: Capital Gains (International) (Page 7 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CapitalGainsInternationalPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: internationalCgtFaqs.map((faq) => ({
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
        title="Capital Gains Tax on Foreign Property in Australia"
        subtitle="Australian CGT on Overseas Real Estate & Shares, Market Value Resets, CGT Event I1 & FITO Relief"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Capital gains tax on foreign property in Australia depends first on your tax residency when a relevant CGT event occurs. An Australian tax resident may need to report a gain or loss on an overseas property, foreign shares or another asset even if the sale proceeds stay abroad. A foreign resident is generally taxed in Australia on gains from taxable Australian property, subject to the applicable rules.
            </span>
            <span className="block mt-2">
              Financially Up helps individuals work through the Australian CGT calculation where an asset, owner or residency history crosses borders. We review dates, ownership, supporting costs and foreign tax before preparing a return or providing advice within an agreed scope.
            </span>
          </span>
        }
        parentService={{
          label: "International Tax Hub",
          href: "/services/international-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 14.6 • International CGT Practice"
        highlights={[
          "Worldwide Asset Disposals",
          "Deemed Market Value on Arrival / Event I1 on Departure",
          "CGT Discount Apportionment & Foreign Tax Offsets",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. Does Australia tax the sale of an overseas property? */}
      <OverseasCgtScopeAndProperty />

      {/* 2. Why do changes in residency matter so much? & Event I1 */}
      <ResidencyChangesAndEventI1 />

      {/* 3. How is the Australian gain calculated? Foreign homes, discount & shares */}
      <CalculationRulesDiscountAndShares />

      {/* 4. What if another country taxes the gain? & Records to review */}
      <DoubleTaxOnGainsAndRecords />

      {/* 5. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about offshore capital gains tax, proceeds kept abroad, cost base resets, and CGT discount rules."
        image="/images/services/faq.webp"
        imageAlt="International Capital Gains Tax Frequently Asked Questions"
        items={internationalCgtFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Review the residency timeline before calculating the gain"
        title="Book an Appointment with Financially Up"
        subtitle="Book an Appointment with Financially Up to discuss the asset, your residency history, sale documents and the Australian CGT work required."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore International Tax Hub"
        secondaryButtonHref="/services/international-tax"
      />

      {/* 7. Related International Tax Services Ribbon */}
      <RelatedInternationalCgtRibbon />
    </main>
  );
}
