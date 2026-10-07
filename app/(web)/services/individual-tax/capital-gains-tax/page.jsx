import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsCgtAndWhenItApplies from "./components/WhatIsCgtAndWhenItApplies";
import HowCapitalGainIsCalculated from "./components/HowCapitalGainIsCalculated";
import PropertyCgtAndMainResidence from "./components/PropertyCgtAndMainResidence";
import SharesLossesDiscountInheritance from "./components/SharesLossesDiscountInheritance";
import ComplexCgtSituations from "./components/ComplexCgtSituations";
import HowFinanciallyUpHelpsCgt from "./components/HowFinanciallyUpHelpsCgt";
import CgtRelatedServiceRibbon from "./components/CgtRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6)
 */
export const metadata = {
  title: "Capital Gains Tax Accountant Australia | Financially Up",
  description:
    "Need a capital gains tax accountant? Financially Up helps Australians with CGT calculations, property sales, cost-base reviews and tax returns.",
  keywords: [
    "capital gains tax accountant",
    "CGT accountant Australia",
    "property capital gains tax",
    "calculate capital gains tax Australia",
    "CGT 6 year rule main residence",
    "50 percent CGT discount Australia",
    "shares capital gains tax accountant",
    "cost base review property sale",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/capital-gains-tax/",
  },
  openGraph: {
    title: "Capital Gains Tax Accountant Australia | Financially Up",
    description:
      "Need a capital gains tax accountant? Financially Up helps Australians with CGT calculations, property sales, cost-base reviews and tax returns.",
    url: "https://financiallyup.com.au/services/individual-tax/capital-gains-tax/",
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
  { label: "Individual Tax", href: "/services/individual-tax" },
  { label: "Capital Gains Tax" },
];

/**
 * 6 Tailored Quick Specifications for Capital Gains Tax
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const cgtQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Homeowners, property investors, share traders & multi-asset investors",
  },
  {
    icon: "file",
    label: "Tax Reporting Model",
    value: "Net capital gains declared in individual tax return at marginal tax rate",
  },
  {
    icon: "bank",
    label: "Cost-Base Elements",
    value: "Purchase costs, incidental costs, ownership costs, improvements & title costs",
  },
  {
    icon: "desktop",
    label: "Delivery Format",
    value: "100% online video meetings (Outlook Calendar) or in-person by arrangement",
  },
  {
    icon: "send",
    label: "ATO Lodgement",
    value: "Direct electronic ATO portal lodgement by Registered Tax Agent #26242127",
  },
  {
    icon: "safety",
    label: "Concessions & Rules",
    value: "Main residence exemption, 6-year absence rule, first income date valuation & 50% CGT discount",
  },
];

/**
 * 10 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const cgtFaqs = [
  {
    key: "1",
    label: "What does a capital gains tax accountant do?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A CGT accountant reviews the asset, ownership and use history, capital proceeds, cost-base records and relevant CGT rules. The work may include calculating a gain or loss, preparing tax-return disclosures or providing separately scoped advice.
      </p>
    ),
  },
  {
    key: "2",
    label: "When does CGT apply?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        CGT may apply when a CGT event happens, including when an individual sells, transfers or otherwise disposes of a relevant asset. Whether a taxable gain results depends on the asset, available records and the applicable exemptions, losses and concessions.
      </p>
    ),
  },
  {
    key: "3",
    label: "How is a capital gain calculated?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A capital gain generally starts with capital proceeds less the relevant cost base. The wider calculation may then involve exemptions or concessions, capital losses and an eligible CGT discount before the resulting net capital gain is included in assessable income.
      </p>
    ),
  },
  {
    key: "4",
    label: "How does CGT apply when selling an investment property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The calculation may consider the purchase and sale amounts, eligible transaction and ownership costs, capital improvements, periods of private use, ownership interests, capital losses and any available CGT discount or exemption.
      </p>
    ),
  },
  {
    key: "5",
    label: "How does CGT apply when a former home becomes a rental property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A former home may qualify for a full or partial main residence exemption, the conditional six-year absence rule or the first-used-to-produce-income market value rule. The applicable treatment depends on the property&apos;s dates, use history and the taxpayer&apos;s circumstances.
      </p>
    ),
  },
  {
    key: "6",
    label: "Do I qualify for the CGT discount?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An eligible individual may generally qualify for a 50% CGT discount on an eligible capital gain where the asset has been owned for at least 12 months and the other conditions are satisfied. The discount is not automatic and is not a reduction in the tax rate.
      </p>
    ),
  },
  {
    key: "7",
    label: "Can capital losses reduce my capital gains?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Capital losses can generally reduce capital gains and are applied before an eligible CGT discount. They are not generally deducted from salary or ordinary income, and unused net capital losses may generally be carried forward.
      </p>
    ),
  },
  {
    key: "8",
    label: "How does CGT apply to jointly owned property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Each legal owner generally reports their share of a capital gain or capital loss according to their ownership interest. Ownership changes, beneficial ownership or other arrangements may require further review.
      </p>
    ),
  },
  {
    key: "9",
    label: "What records should I keep for CGT?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Keep acquisition and disposal documents, contracts, settlement statements, eligible cost records, improvement invoices, ownership information and valuations where relevant. These records generally need to be kept for at least five years after the CGT event, with longer requirements possible for carried-forward losses.
      </p>
    ),
  },
  {
    key: "10",
    label: "How are inherited assets treated for CGT purposes?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Inheritance does not necessarily trigger CGT for the beneficiary at the time the asset is received. CGT may arise on a later disposal, and the cost base or available exemption can depend on the asset, the deceased person&apos;s acquisition and use, and the beneficiary&apos;s circumstances.
      </p>
    ),
  },
];

/**
 * CapitalGainsTaxPage Component
 * ==============================
 * Route: /services/individual-tax/capital-gains-tax
 * Pillar 1.5: Capital Gains Tax Accountant (Page 6 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CapitalGainsTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cgtFaqs.map((faq) => ({
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
        title="Capital Gains Tax Accountant"
        subtitle="CGT Calculations, Property Sales, Share Portfolios & Cost-Base Reviews Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Selling property, shares or another investment can create capital gains tax consequences that are easy to miscalculate. Financially Up Pty Ltd assists Australian homeowners, property investors, joint owners and individual investors with understanding CGT, reviewing cost-base information, calculating capital gains or capital losses, and preparing the relevant tax return disclosures where appropriate.
            </span>
            <span className="block mt-2">
              Working with a capital gains tax accountant can be particularly useful when an asset has changed use, records are incomplete, a property was once your home, ownership is shared, capital losses are available or more than one CGT event has occurred. The treatment can depend on the asset, ownership history, use of the asset, residency and your individual circumstances.
            </span>
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Appointment:
              </span>
              Your first appointment can cover the asset being sold or considered for sale, purchase and sale details, ownership history, how the asset has been used, available records, potential CGT considerations and appropriate next steps. A specific CGT outcome cannot be confirmed until your circumstances and documents have been reviewed.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.5 • Capital Gains Tax Practice"
        highlights={[
          "Property, Shares & Crypto Disposals",
          "50% CGT Discount & Loss Offsets",
          "Cost-Base & Improvement Substantiation",
          "Registered Tax Agent #26242127",
        ]}
        quickSpecs={cgtQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "CGT Advisory Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1 & 2. What Is Capital Gains Tax? & When Does CGT Apply? */}
      <WhatIsCgtAndWhenItApplies />

      {/* 3 & 4. How Is a Capital Gain Calculated? & Understanding the Cost Base */}
      <HowCapitalGainIsCalculated />

      {/* 5 & 6. Property CGT & Main Residence and Former Home CGT */}
      <PropertyCgtAndMainResidence />

      {/* 7, 8, 9 & 10. Shares, Capital Losses, CGT Discount & Inherited Assets */}
      <SharesLossesDiscountInheritance />

      {/* 11. Complex CGT Situations Where Advice Can Help */}
      <ComplexCgtSituations />

      {/* 12 & 13. How Financially Up Can Help & Records to Keep */}
      <HowFinanciallyUpHelpsCgt />

      {/* 14. Frequently Asked Questions (Verbatim 10 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about capital gains tax calculations, property sales, main residence exemptions, the 50% discount and records with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Capital Gains Tax Frequently Asked Questions"
        items={cgtFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 15. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Professional assistance can help where you are preparing to report a CGT event, need a capital gain or loss reviewed, or want to understand potential CGT considerations before selling an asset. The appropriate scope can be confirmed after Financially Up reviews the asset, circumstances and available records. Book an appointment with Financially Up Pty Ltd to discuss a property, shares, an inherited asset or another CGT matter."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 16. Related Service Ribbon */}
      <CgtRelatedServiceRibbon />
    </main>
  );
}
