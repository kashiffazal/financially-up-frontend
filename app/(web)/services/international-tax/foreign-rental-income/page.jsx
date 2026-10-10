import SubServiceHero from "@/components/website/SubServiceHero";
import WhoReportsAndOwnership from "./components/WhoReportsAndOwnership";
import RentalIncomeAndDeductionsReview from "./components/RentalIncomeAndDeductionsReview";
import CurrencyConversionAndPriorResidency from "./components/CurrencyConversionAndPriorResidency";
import ForeignRentalRecordsAndHelp from "./components/ForeignRentalRecordsAndHelp";
import RelatedForeignRentalRibbon from "./components/RelatedForeignRentalRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5)
 */
export const metadata = {
  title: "Foreign Rental Property Tax Australia | Financially Up",
  description:
    "Own rental property overseas? Financially Up reviews foreign rent, expenses, ownership, currency conversion and foreign tax for your Australian return.",
  keywords: [
    "foreign rental property tax Australia",
    "overseas rental property tax accountant",
    "foreign rental income australia",
    "foreign property depreciation ato",
    "foreign rental property deduction rules",
    "overseas property tax return sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/international-tax/foreign-rental-income/",
  },
  openGraph: {
    title: "Foreign Rental Property Tax Australia | Financially Up",
    description:
      "Own rental property overseas? Financially Up reviews foreign rent, expenses, ownership, currency conversion and foreign tax for your Australian return.",
    url: "https://financiallyup.com.au/services/international-tax/foreign-rental-income/",
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
  { label: "Foreign Rental Income" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const foreignRentalFaqs = [
  {
    key: "1",
    label: "Is overseas rent taxable if I never transfer it to Australia",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For an Australian resident, overseas rent generally needs to be considered whether it remains abroad or is transferred. Residency and any applicable exceptions must be checked first.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I use the net rental profit from my foreign tax return",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. Australian rules for income, deductions, timing and currency conversion can produce a different result. We work from the underlying records.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can foreign tax be claimed as a rental expense",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Foreign income tax is considered under the foreign income tax offset rules where eligible. It should not simply be included with ordinary property expenses.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I claim expenses while family members use the property",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Private or below-market use can affect deductions and require apportionment. The dates, rent charged and surrounding arrangement need to be reviewed.
      </p>
    ),
  },
  {
    key: "5",
    label: "Does a foreign rental loss equal the Australian tax loss",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. The Australian result is calculated using Australian income, deduction and currency-conversion rules rather than importing the foreign country's net figure.
      </p>
    ),
  },
];

/**
 * ForeignRentalIncomePage Component
 * =================================
 * Route: /services/international-tax/foreign-rental-income
 * Pillar 14.4: Foreign Rental Property Tax (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ForeignRentalIncomePage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: foreignRentalFaqs.map((faq) => ({
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
        title="Foreign Rental Property Tax in Australia"
        subtitle="Australian Tax Treatment of Overseas Real Estate, Deductions, Currency Translation & FITO Offsets"
        description={
          <span className="space-y-3 block">
            <span className="block">
              If you are an Australian tax resident and own a property overseas, the rental income generally needs to be considered in your Australian tax return. The property may also be taxed where it is located. Reporting it correctly requires a review of residency, ownership, rent, expenses, currency conversion and any foreign tax paid.
            </span>
            <span className="block mt-2">
              Financially Up helps owners make sense of foreign rental property tax in Australia. We review the underlying records and explain which facts affect the Australian calculation.
            </span>
          </span>
        }
        parentService={{
          label: "International Tax Hub",
          href: "/services/international-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 14.4 • Real Estate Practice"
        highlights={[
          "Worldwide Real Estate Reporting",
          "Australian Deduction Rules Alignment",
          "Currency Conversion Working Papers",
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

      {/* 1. Who needs to report overseas rent & How ownership affects calculation */}
      <WhoReportsAndOwnership />

      {/* 2. What rental income needs to be identified & Which expenses need closer review */}
      <RentalIncomeAndDeductionsReview />

      {/* 3. Currency conversion, Properties predating residency & Foreign tax paid */}
      <CurrencyConversionAndPriorResidency />

      {/* 4. Records to bring & How Financially Up can help */}
      <ForeignRentalRecordsAndHelp />

      {/* 5. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about overseas rental income, net foreign profit figures, expense deductions, and foreign tax credits."
        image="/images/services/faq.webp"
        imageAlt="Foreign Rental Property Tax Frequently Asked Questions"
        items={foreignRentalFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Report your overseas property accurately"
        title="Book an Appointment with Financially Up"
        subtitle="Book an Appointment with Financially Up to review the property, your residency, the records available and the Australian return work required."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore International Tax Hub"
        secondaryButtonHref="/services/international-tax"
      />

      {/* 7. Related International Tax Services Ribbon */}
      <RelatedForeignRentalRibbon />
    </main>
  );
}
