import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsTaxResidencySection from "./components/WhatIsTaxResidencySection";
import WhyTaxResidencyMattersSection from "./components/WhyTaxResidencyMattersSection";
import TheFourResidencyTestsDetailed from "./components/TheFourResidencyTestsDetailed";
import ResidencyScenariosAndTreaties from "./components/ResidencyScenariosAndTreaties";
import ExpatResidencyAndInfoRequired from "./components/ExpatResidencyAndInfoRequired";
import HowFinanciallyUpHelpsResidency from "./components/HowFinanciallyUpHelpsResidency";
import RelatedTaxResidencyRibbon from "./components/RelatedTaxResidencyRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3)
 */
export const metadata = {
  title: "Tax Residency Advice Australia | Tax Residency Accountant",
  description:
    "Get Australian tax residency advice when arriving, leaving or living across countries. Understand how your facts affect income and CGT reporting.",
  keywords: [
    "tax residency advice australia",
    "tax residency accountant",
    "australian tax resident test",
    "expat tax residency australia",
    "183 day test australia",
    "domicile test tax australia",
    "dual residency tax treaty australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/international-tax/tax-residency/",
  },
  openGraph: {
    title: "Tax Residency Advice Australia | Tax Residency Accountant",
    description:
      "Get Australian tax residency advice when arriving, leaving or living across countries. Understand how your facts affect income and CGT reporting.",
    url: "https://financiallyup.com.au/services/international-tax/tax-residency/",
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
  { label: "Tax Residency" },
];

/**
 * 7 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const taxResidencyFaqs = [
  {
    key: "1",
    label: "How many days can I stay in Australia without becoming a tax resident?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        There is no universal day limit that determines every case. The 183-day test is one residency test, but the resides and domicile tests can produce a residency outcome even where a person spends fewer than 183 days in Australia.
      </p>
    ),
  },
  {
    key: "2",
    label: "If I live overseas for more than two years, am I automatically a non-resident?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Australian tax law does not apply a simple universal two-year rule. Your residency depends on the relevant tests and the facts of your circumstances.
      </p>
    ),
  },
  {
    key: "3",
    label: "If I leave Australia permanently, when does my tax residency end?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The date depends on the facts. Departure itself is important but does not automatically establish the outcome without considering your intentions, overseas living arrangements and continuing connections with Australia.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I be an Australian tax resident while holding a temporary visa?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Tax residency and immigration status are separate. Special temporary-resident tax rules may then need to be considered.
      </p>
    ),
  },
  {
    key: "5",
    label: "Does permanent residency for immigration purposes mean I am a tax resident?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. Immigration status can be relevant background information, but Australian tax residency is determined under tax law.
      </p>
    ),
  },
  {
    key: "6",
    label: "Do I need a tax residency review every year?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. However, residency should be reconsidered when material circumstances change, such as moving countries, returning to Australia, changing employment arrangements or changing where your family lives.
      </p>
    ),
  },
  {
    key: "7",
    label: "Can Financially Up give me a written residency assessment?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The exact form and scope of advice depends on the engagement and complexity of your circumstances. During the initial discussion, we can establish what information is available and whether a formal review or other specialist advice is appropriate.
      </p>
    ),
  },
];

/**
 * TaxResidencyPage Component
 * ==========================
 * Route: /services/international-tax/tax-residency
 * Pillar 14.2: Tax Residency Advice (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function TaxResidencyPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: taxResidencyFaqs.map((faq) => ({
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
        title="Tax Residency Advice Australia"
        subtitle="Specialist Assessments Under the 4 Statutory Tests, Temporary Resident Rules & DTA Tie-Breakers"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Your Australian tax residency affects what income may be taxable in Australia, how foreign income is treated and which tax rules apply when you move between countries.
            </span>
            <span className="block mt-2">
              Tax residency advice Australia is particularly important if you are moving to Australia, leaving Australia, working overseas, returning after living abroad or maintaining significant connections with more than one country.
            </span>
            <span className="block mt-2">
              Financially Up can review the relevant facts and help you understand your Australian tax-residency position and related tax-reporting requirements.
            </span>
          </span>
        }
        parentService={{
          label: "International Tax Hub",
          href: "/services/international-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 14.2 • Residency Practice"
        highlights={[
          "The 4 Statutory Residency Tests",
          "Dual Residency & DTA Tie-Breakers",
          "Worldwide vs Australian-Sourced Scope",
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

      {/* 1. What Is Australian Tax Residency? & Common Misconceptions */}
      <WhatIsTaxResidencySection />

      {/* 2. Why Does Tax Residency Matter? & Worldwide Income */}
      <WhyTaxResidencyMattersSection />

      {/* 3. What Are the Australian Tax Residency Tests? */}
      <TheFourResidencyTestsDetailed />

      {/* 4. Residency Changes, Dual Residency & Treaties */}
      <ResidencyScenariosAndTreaties />

      {/* 5. Tax Residency Advice for Expats & Information Needed */}
      <ExpatResidencyAndInfoRequired />

      {/* 6. How Financially Up Can Help & Why Choose Us */}
      <HowFinanciallyUpHelpsResidency />

      {/* 7. Frequently Asked Questions (Verbatim 7 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about the Australian 183-day test, domicile test, moving abroad, temporary visas, and residency assessments."
        image="/images/services/faq.webp"
        imageAlt="Tax Residency Advice Frequently Asked Questions"
        items={taxResidencyFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Clarify Your Australian Tax Residency"
        title="Book a Tax Residency Consultation"
        subtitle="Australian tax residency can affect your worldwide income, capital gains and tax-return obligations. It should be established from your actual circumstances rather than assumed from your passport, visa or number of travel days. Book an Appointment with Financially Up for a tax residency consultation and review of the relevant Australian tax issues."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore International Tax Hub"
        secondaryButtonHref="/services/international-tax"
      />

      {/* 9. Related International Tax Services Ribbon */}
      <RelatedTaxResidencyRibbon />
    </main>
  );
}
