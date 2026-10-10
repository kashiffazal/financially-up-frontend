import SubServiceHero from "@/components/website/SubServiceHero";
import WhenFitoAppliesAndEligibility from "./components/WhenFitoAppliesAndEligibility";
import FitoCalculationAndOffsetLimit from "./components/FitoCalculationAndOffsetLimit";
import CurrencyAndDelayedForeignTax from "./components/CurrencyAndDelayedForeignTax";
import FitoRecordsAndHowWeHelp from "./components/FitoRecordsAndHowWeHelp";
import RelatedFitoRibbon from "./components/RelatedFitoRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6)
 */
export const metadata = {
  title: "Foreign Income Tax Offset Accountant | Financially Up",
  description:
    "Paid tax overseas? Financially Up reviews the related income, payment evidence, currency conversion and foreign income tax offset limit for your return.",
  keywords: [
    "foreign income tax offset accountant",
    "FITO accountant australia",
    "foreign tax offset limit calculation",
    "relief from double taxation australia",
    "foreign tax credit claim ato",
    "Section 770-10 ITAA 1997",
    "double tax agreement offset sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/international-tax/foreign-tax-offset/",
  },
  openGraph: {
    title: "Foreign Income Tax Offset Accountant | Financially Up",
    description:
      "Paid tax overseas? Financially Up reviews the related income, payment evidence, currency conversion and foreign income tax offset limit for your return.",
    url: "https://financiallyup.com.au/services/international-tax/foreign-tax-offset/",
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
  { label: "Foreign Tax Offset" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const fitoFaqs = [
  {
    key: "1",
    label: "Is foreign tax paid automatically credited in Australia",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The income and tax must satisfy the Australian rules, and the FITO limit may apply. Evidence of payment and the connection to assessable income are essential.
      </p>
    ),
  },
  {
    key: "2",
    label: "What if foreign tax was paid after I lodged",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A later amendment may be available under the special FITO timing rules. We need the Australian income year, payment date, foreign assessment and proof of payment before deciding the next step.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can foreign tax be claimed if the income is exempt in Australia",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, the foreign tax must relate to income or gains included in Australian assessable income, although specific rules and exceptions require review on the facts.
      </p>
    ),
  },
  {
    key: "4",
    label: "Is the offset the same as a deduction",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A deduction reduces taxable income. A tax offset reduces Australian tax payable, subject to the FITO eligibility and limit rules.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can unused foreign tax be carried forward",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        FITO that cannot be claimed because of the Australian limit is generally not carried forward. The calculation should therefore be completed carefully for the correct income year.
      </p>
    ),
  },
];

/**
 * ForeignTaxOffsetPage Component
 * ==============================
 * Route: /services/international-tax/foreign-tax-offset
 * Pillar 14.5: Foreign Tax Offset (Page 6 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ForeignTaxOffsetPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: fitoFaqs.map((faq) => ({
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
        title="Foreign Income Tax Offset Accountant"
        subtitle="Section 770-10 Double Taxation Relief, FITO Limit Calculations & Post-Lodgement Amendments"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A foreign income tax offset, often called FITO, may reduce Australian income tax where qualifying foreign income tax was paid on income or gains included in Australian assessable income. It can help relieve double taxation, but the amount available depends on the income, the foreign tax, the Australian calculation and any applicable limit. Paying tax overseas does not create an automatic refund of the same amount.
            </span>
            <span className="block mt-2">
              Financially Up connects foreign income and foreign tax documents to the Australian return. As a foreign income tax offset accountant, we check what the payment relates to before calculating a claim.
            </span>
          </span>
        }
        parentService={{
          label: "International Tax Hub",
          href: "/services/international-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 14.5 • Double Tax Relief Practice"
        highlights={[
          "Statutory Relief under Section 770-10",
          "$1,000 De Minimis vs Limit Method",
          "4-Year Amendment Window for Delayed Foreign Tax",
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

      {/* 1. When a foreign income tax offset may apply & Which foreign taxes need checking */}
      <WhenFitoAppliesAndEligibility />

      {/* 2. How the offset amount is calculated & The FITO Limit */}
      <FitoCalculationAndOffsetLimit />

      {/* 3. Currency conversion & Foreign tax paid after Australian return */}
      <CurrencyAndDelayedForeignTax />

      {/* 4. Records that support a FITO claim & How Financially Up can help */}
      <FitoRecordsAndHowWeHelp />

      {/* 5. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about FITO eligibility, post-lodgement claims, exempt income, offset deductions, and carry-forward rules."
        image="/images/services/faq.webp"
        imageAlt="Foreign Income Tax Offset Frequently Asked Questions"
        items={fitoFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Check the income and foreign tax together"
        title="Book an Appointment with Financially Up"
        subtitle="Book an Appointment with Financially Up to discuss your foreign income, tax documents and whether a foreign income tax offset can be supported in your Australian return."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore International Tax Hub"
        secondaryButtonHref="/services/international-tax"
      />

      {/* 7. Related International Tax Services Ribbon */}
      <RelatedFitoRibbon />
    </main>
  );
}
