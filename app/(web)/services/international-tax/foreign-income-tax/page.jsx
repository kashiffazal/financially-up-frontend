import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsForeignIncomeGrid from "./components/WhatIsForeignIncomeGrid";
import WorldwideIncomeDeclaration from "./components/WorldwideIncomeDeclaration";
import ForeignIncomeCategoriesDetail from "./components/ForeignIncomeCategoriesDetail";
import DoubleTaxAndFitoSection from "./components/DoubleTaxAndFitoSection";
import CurrencyAndSpecialRules from "./components/CurrencyAndSpecialRules";
import ForeignIncomeDocumentsList from "./components/ForeignIncomeDocumentsList";
import HowFinanciallyUpHelpsForeignIncome from "./components/HowFinanciallyUpHelpsForeignIncome";
import RelatedInternationalTaxRibbon from "./components/RelatedInternationalTaxRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2)
 */
export const metadata = {
  title: "Foreign Income Tax Australia | Foreign Income Accountant",
  description:
    "Get help reporting overseas income, converting foreign amounts, reviewing foreign tax offsets and preparing an Australian return with foreign income.",
  keywords: [
    "foreign income tax australia",
    "foreign income accountant",
    "overseas income tax return",
    "foreign income tax offset australia",
    "FITO tax accountant",
    "foreign rental property tax",
    "expat foreign income australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/international-tax/foreign-income-tax/",
  },
  openGraph: {
    title: "Foreign Income Tax Australia | Foreign Income Accountant",
    description:
      "Get help reporting overseas income, converting foreign amounts, reviewing foreign tax offsets and preparing an Australian return with foreign income.",
    url: "https://financiallyup.com.au/services/international-tax/foreign-income-tax/",
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
  { label: "Foreign Income Tax" },
];

/**
 * 7 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const foreignIncomeFaqs = [
  {
    key: "1",
    label: "Do I need to declare foreign income if I did not bring the money into Australia?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        If you are an Australian resident for tax purposes, assessable foreign income generally cannot be excluded merely because the money stayed overseas.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is foreign income taxable if tax was already paid overseas?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It may still be assessable in Australia. If qualifying foreign tax was paid, you may be entitled to a foreign income tax offset.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is all foreign income taxable in Australia?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The treatment depends on your tax residency, the type of income, any exemptions, temporary-resident rules and applicable tax treaties.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do I declare the net amount received after foreign tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, foreign income reporting involves identifying the relevant gross income and foreign tax paid rather than simply entering the net cash received. The precise reporting method depends on the income type.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can I claim expenses relating to foreign income?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Potentially. The expense must satisfy the relevant Australian deduction rules. The deductions allowed overseas are not necessarily the same as those allowed in Australia.
      </p>
    ),
  },
  {
    key: "6",
    label: "What exchange rate should I use?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Australian tax rules require foreign amounts to be converted into Australian dollars. The appropriate rate depends on the circumstances and can involve a transaction-date rate or an accepted average rate.
      </p>
    ),
  },
  {
    key: "7",
    label: "Can Financially Up amend a tax return where foreign income was left out?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Where appropriate and within the applicable amendment rules, we can assist with reviewing an Australian tax return and preparing an amendment where foreign income or foreign tax information was omitted or incorrectly reported.
      </p>
    ),
  },
];

/**
 * ForeignIncomeTaxPage Component
 * ===============================
 * Route: /services/international-tax/foreign-income-tax
 * Pillar 14.1: Foreign Income Tax (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ForeignIncomeTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: foreignIncomeFaqs.map((faq) => ({
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
        title="Foreign Income Tax Australia - Reporting Overseas Income Correctly"
        subtitle="Australian Tax Treatment of Worldwide Earnings, Foreign Tax Offsets (FITO) & Currency Translation"
        description={
          <span className="space-y-3 block">
            <span className="block">
              If you are an Australian resident for tax purposes and receive income from overseas, that income may need to be included in your Australian tax return even when the money remains overseas or foreign tax has already been paid.
            </span>
            <span className="block mt-2">
              Foreign income tax Australia rules can apply to overseas employment, investments, rental properties, pensions, businesses and other foreign-source amounts. Financially Up assists individuals with understanding and reporting foreign income for Australian tax purposes, including the treatment of foreign tax already paid.
            </span>
          </span>
        }
        parentService={{
          label: "International Tax Hub",
          href: "/services/international-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 14.1 • Cross-Border Tax Practice"
        highlights={[
          "Worldwide Assessable Income Review",
          "Foreign Income Tax Offset (FITO)",
          "ATO Foreign Currency Conversion",
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

      {/* 1. What Is Foreign Income for Australian Tax Purposes? */}
      <WhatIsForeignIncomeGrid />

      {/* 2. Do Australian Residents Need to Declare Foreign Income? */}
      <WorldwideIncomeDeclaration />

      {/* 3. What Foreign Income May Need to Be Reported? */}
      <ForeignIncomeCategoriesDetail />

      {/* 4. Double Taxation & Foreign Income Tax Offsets (FITO) */}
      <DoubleTaxAndFitoSection />

      {/* 5. Currency Conversion, Bank Transfers & Cross-Border Rules */}
      <CurrencyAndSpecialRules />

      {/* 6. Documents to Provide for a Foreign Income Tax Return */}
      <ForeignIncomeDocumentsList />

      {/* 7. How Financially Up Can Help & Why Choose Us */}
      <HowFinanciallyUpHelpsForeignIncome />

      {/* 8. Frequently Asked Questions (Verbatim 7 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about foreign income taxation in Australia, FITO claims, exchange rates, and amending prior returns."
        image="/images/services/faq.webp"
        imageAlt="Foreign Income Tax Frequently Asked Questions"
        items={foreignIncomeFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Get Help With Foreign Income Tax in Australia"
        title="Book an Appointment with Financially Up"
        subtitle="Foreign income should be reviewed together with your residency status, overseas tax paid and supporting documentation. Book an Appointment with Financially Up to discuss your overseas income and determine what information and Australian tax work may be required."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore International Tax Hub"
        secondaryButtonHref="/services/international-tax"
      />

      {/* 10. Related International Tax Services Ribbon */}
      <RelatedInternationalTaxRibbon />
    </main>
  );
}
