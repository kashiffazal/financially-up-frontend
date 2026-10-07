import SubServiceHero from "@/components/website/SubServiceHero";
import TaxResidencyAndWorldwideIncome from "./components/TaxResidencyAndWorldwideIncome";
import ForeignTaxPaidAndFito from "./components/ForeignTaxPaidAndFito";
import ForeignRentalDividendsAndInterest from "./components/ForeignRentalDividendsAndInterest";
import AudCurrencyConversionsAndRecords from "./components/AudCurrencyConversionsAndRecords";
import HowFinanciallyUpHelpsForeign from "./components/HowFinanciallyUpHelpsForeign";
import ForeignRelatedServiceRibbon from "./components/ForeignRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 9)
 */
export const metadata = {
  title: "Foreign Income Tax Accountant in Australia | Financially Up",
  description:
    "Foreign income tax accountant for Australians with overseas income, foreign tax paid, rental property, investments and tax return needs.",
  keywords: [
    "foreign income tax accountant",
    "overseas income tax return Australia",
    "foreign income tax offset FITO",
    "Australian tax residency accountant",
    "foreign rental property tax Australia",
    "overseas pension tax Australia",
    "double tax agreement Australia",
    "expat tax accountant Sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/foreign-income-tax-accountant/",
  },
  openGraph: {
    title: "Foreign Income Tax Accountant in Australia | Financially Up",
    description:
      "Foreign income tax accountant for Australians with overseas income, foreign tax paid, rental property, investments and tax return needs.",
    url: "https://financiallyup.com.au/services/individual-tax/foreign-income-tax-accountant/",
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
  { label: "Foreign Income Tax Accountant" },
];

/**
 * 6 Tailored Quick Specifications for Foreign Income Tax
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const foreignQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Expats, dual residents, temporary residents & Australian investors with overseas assets",
  },
  {
    icon: "file",
    label: "Tax Reporting Model",
    value: "Worldwide assessable income in Australian dollars under domestic tax legislation",
  },
  {
    icon: "percentage",
    label: "Offset Mechanics",
    value: "Foreign Income Tax Offset (FITO) relief for qualifying taxes paid offshore",
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
    label: "FX Translation",
    value: "RBA & ATO official foreign currency translation rates applied to each receipt",
  },
];

/**
 * 7 Exact Frequently Asked Questions from Client Document (Page 9)
 */
const foreignFaqs = [
  {
    key: "1",
    label: "Do I need to declare foreign income in Australia?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Australian tax residents generally declare worldwide income. Different rules apply to foreign and temporary residents, so residency and the income type should be reviewed first.
      </p>
    ),
  },
  {
    key: "2",
    label: "What if I already paid tax overseas?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You may be eligible for a FITO if qualifying foreign tax was paid on income included in your Australian assessable income. The offset is subject to eligibility requirements and limits.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is foreign rental income taxable in Australia?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An Australian resident generally reports overseas rent and may claim eligible expenses under Australian rules. Private use, capital costs, foreign tax and currency conversion may affect the result.
      </p>
    ),
  },
  {
    key: "4",
    label: "Are foreign dividends and interest taxable?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Australian residents generally report foreign dividends and interest in Australian dollars, usually at the gross amount before foreign withholding tax.
      </p>
    ),
  },
  {
    key: "5",
    label: "Does a tax treaty mean I do not pay Australian tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. A treaty may allocate taxing rights or provide double-tax relief, but the result depends on the agreement, your residency and the income type.
      </p>
    ),
  },
  {
    key: "6",
    label: "How do I convert overseas income into Australian dollars?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Use the rate and translation method permitted for the relevant amount. Keep evidence of the foreign amount, transaction date, exchange-rate source and calculation.
      </p>
    ),
  },
  {
    key: "7",
    label: "When should I use a foreign income tax accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Professional assistance may help when you have several countries or currencies, foreign tax paid, overseas property or investments, a residency change, treaty questions or incomplete records.
      </p>
    ),
  },
];

/**
 * ForeignIncomeTaxAccountantPage Component
 * ========================================
 * Route: /services/individual-tax/foreign-income-tax-accountant
 * Pillar 1.8: Foreign Income Tax Accountant (Page 9 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ForeignIncomeTaxAccountantPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: foreignFaqs.map((faq) => ({
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
        title="Foreign Income Tax Accountant for Australian Individuals"
        subtitle="Worldwide Income Reporting, Foreign Tax Offsets (FITO), Tax Treaties & Expat Tax Returns"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Foreign income can make an Australian tax return more complicated. Overseas salary, dividends, bank interest, rental income, pensions, investment accounts, property disposals and foreign tax already paid may all require review under Australian rules.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides foreign income tax accountant services for Australian individuals who need help determining what to report and how to prepare their Australian return. We assist clients Australia-wide with foreign-income tax return preparation, review of overseas records and separately scoped tax advice where appropriate.
            </span>
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Appointment:
              </span>
              At your first appointment, we can discuss your tax residency circumstances, countries and income sources, foreign tax paid, overseas property or investments, available records and the next steps. Appointments can be booked online or by phone, with online meetings available Australia-wide and in-person meetings where available.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.8 • Foreign Income & Expat Tax Practice"
        highlights={[
          "Worldwide Income & Tax Residency Audits",
          "Foreign Income Tax Offsets (FITO & $1k Cap)",
          "DTA Double Tax Agreement Treaty Scoping",
          "Registered Tax Agent #26242127",
        ]}
        quickSpecs={foreignQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Foreign Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1 & 2. How is foreign income taxed in Australia? & Why tax residency matters */}
      <TaxResidencyAndWorldwideIncome />

      {/* 3. What if you paid tax overseas? */}
      <ForeignTaxPaidAndFito />

      {/* 4. Foreign rental income, dividends and interest */}
      <ForeignRentalDividendsAndInterest />

      {/* 5 & 6. Converting foreign amounts into Australian dollars & Records to keep */}
      <AudCurrencyConversionsAndRecords />

      {/* 7. How a foreign income tax accountant can help */}
      <HowFinanciallyUpHelpsForeign />

      {/* 8. Frequently Asked Questions (Verbatim 7 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about declaring overseas income, foreign tax offsets, currency conversions and tax treaties with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Foreign Income Tax Accountant Frequently Asked Questions"
        items={foreignFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Book an appointment to discuss your residency circumstances, overseas income, foreign tax documents and available records. Financially Up will explain the information required, the proposed service scope and the next steps for preparing your Australian tax return."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 10. Related Service Ribbon */}
      <ForeignRelatedServiceRibbon />
    </main>
  );
}
