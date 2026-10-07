import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsAnEssAndHowItWorks from "./components/WhatIsAnEssAndHowItWorks";
import CessationOfEmploymentAndEssStatements from "./components/CessationOfEmploymentAndEssStatements";
import EssTaxVsCgtTwoStages from "./components/EssTaxVsCgtTwoStages";
import ComplexEssSituationsAndRecords from "./components/ComplexEssSituationsAndRecords";
import HowFinanciallyUpHelpsEss from "./components/HowFinanciallyUpHelpsEss";
import EssRelatedServiceRibbon from "./components/EssRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 10)
 */
export const metadata = {
  title: "Employee Share Scheme Tax Accountant | Financially Up",
  description:
    "Get help with employee share scheme tax, ESS statements, deferred taxing points, employee shares and CGT. Australia-wide appointments.",
  keywords: [
    "employee share scheme tax",
    "ESS tax accountant",
    "employee share scheme Australia",
    "tax deferred scheme",
    "ESS statement ATO",
    "RSU tax Australia",
    "employee share CGT discount",
    "deferred taxing point",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/employee-share-schemes/",
  },
  openGraph: {
    title: "Employee Share Scheme Tax Accountant | Financially Up",
    description:
      "Get help with employee share scheme tax, ESS statements, deferred taxing points, employee shares and CGT. Australia-wide appointments.",
    url: "https://financiallyup.com.au/services/individual-tax/employee-share-schemes/",
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
  { label: "Employee Share Schemes" },
];

/**
 * 6 Tailored Quick Specifications for Employee Share Schemes
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const essQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Employees receiving shares, performance rights, RSUs, options or stapled securities",
  },
  {
    icon: "stock",
    label: "Tax Regimes",
    value: "Upfront concessional/non-concessional schemes & eligible tax-deferred schemes",
  },
  {
    icon: "clock",
    label: "Taxing Points",
    value: "Grant date, deferred vesting, cessation of restrictions, or 30-day disposal rule",
  },
  {
    icon: "file",
    label: "Reporting Flow",
    value: "Annual employer ESS statements reconciled against ATO portal pre-fill data",
  },
  {
    icon: "percentage",
    label: "CGT Integration",
    value: "Market value cost base reset at deferred taxing point preventing double taxation",
  },
  {
    icon: "safety",
    label: "Professional Advice",
    value: "Registered Tax Agent #26242127 lodgement with clear, transparent fee scopes",
  },
];

/**
 * 7 Exact Frequently Asked Questions from Client Document (Page 10)
 */
const essFaqs = [
  {
    key: "1",
    label: "How is employee share scheme tax treated in Australia?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The ESS discount is generally assessable upfront or at a deferred taxing point. The correct timing depends on the plan, the interest provided and whether the relevant legislative conditions are met.
      </p>
    ),
  },
  {
    key: "2",
    label: "When is the deferred taxing point?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It depends on the interest and scheme. Forfeiture risk, genuine disposal restrictions, exercise conditions and the statutory maximum period may be relevant. Vesting or exercise alone should not be assumed to determine the date.
      </p>
    ),
  },
  {
    key: "3",
    label: "What is an ESS statement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is an employer statement containing ESS information reported for your tax return. Check it against the scheme documents and your actual vesting, exercise and disposal history.
      </p>
    ),
  },
  {
    key: "4",
    label: "What happens when I sell employee shares?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A sale may trigger CGT. The calculation should use the cost base and acquisition time established under the ESS rules and consider the special 30-day rule where relevant.
      </p>
    ),
  },
  {
    key: "5",
    label: "Will the ESS discount be taxed again under CGT?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The rules generally reset or establish the CGT cost base using the value already recognized under the ESS provisions, so later CGT ordinarily applies only to a subsequent value change. The calculation still requires the correct dates and market values.
      </p>
    ),
  },
  {
    key: "6",
    label: "What happens if I leave my employer?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Employment ending on or after 1 July 2022 is not itself a deferred taxing point under the current rules. Other events caused by leaving, such as vesting, restrictions ending, forfeiture or sale, may still be relevant.
      </p>
    ),
  },
  {
    key: "7",
    label: "When should I use an ESS tax accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Professional assistance may help with multiple grants, tax-deferred interests, options or rights, foreign-company shares, missing statements, uncertain taxing points or disposals close to the taxing point.
      </p>
    ),
  },
];

/**
 * Page Component: Employee Share Scheme Tax Accountant (Pillar 1.9)
 */
export default function EmployeeShareSchemesPage() {
  // JSON-LD Structured Data for FAQ Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How is employee share scheme tax treated in Australia?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ESS discount is generally assessable upfront or at a deferred taxing point. The correct timing depends on the plan, the interest provided and whether the relevant legislative conditions are met.",
        },
      },
      {
        "@type": "Question",
        name: "When is the deferred taxing point?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It depends on the interest and scheme. Forfeiture risk, genuine disposal restrictions, exercise conditions and the statutory maximum period may be relevant. Vesting or exercise alone should not be assumed to determine the date.",
        },
      },
      {
        "@type": "Question",
        name: "What is an ESS statement?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "It is an employer statement containing ESS information reported for your tax return. Check it against the scheme documents and your actual vesting, exercise and disposal history.",
        },
      },
      {
        "@type": "Question",
        name: "What happens when I sell employee shares?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A sale may trigger CGT. The calculation should use the cost base and acquisition time established under the ESS rules and consider the special 30-day rule where relevant.",
        },
      },
      {
        "@type": "Question",
        name: "Will the ESS discount be taxed again under CGT?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The rules generally reset or establish the CGT cost base using the value already recognized under the ESS provisions, so later CGT ordinarily applies only to a subsequent value change. The calculation still requires the correct dates and market values.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if I leave my employer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Employment ending on or after 1 July 2022 is not itself a deferred taxing point under the current rules. Other events caused by leaving, such as vesting, restrictions ending, forfeiture or sale, may still be relevant.",
        },
      },
      {
        "@type": "Question",
        name: "When should I use an ESS tax accountant?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional assistance may help with multiple grants, tax-deferred interests, options or rights, foreign-company shares, missing statements, uncertain taxing points or disposals close to the taxing point.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <SubServiceHero
        badge="Employee Share Schemes"
        title="Employee Share Scheme Tax Accountant"
        subtitle="If you receive shares, rights, options or other interests through your employer, the tax treatment can differ from an ordinary share investment. Employee share scheme tax may involve an assessable discount, an upfront or deferred taxing point, an employer ESS statement and a later capital gains tax calculation when the interest is disposed of."
        bodyText={
          <span>
            Financially Up Pty Ltd assists Australian employees with reviewing ESS information and preparing individual tax returns involving employee shares. We can identify required records, distinguish ESS income from later CGT and explain when separately scoped advice may be appropriate.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Appointment:
              </span>
              At your first appointment, we can discuss your ESS statement, plan documents, vesting or exercise history, disposal records and tax-return requirements. Book online or by phone; online meetings are available Australia-wide, with in-person meetings where available.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.9 • Employee Share Scheme Tax Practice"
        highlights={[
          "Upfront vs Deferred Taxing Points",
          "Post-1 July 2022 Cessation Rules",
          "ESS Discount vs CGT Separation",
          "Special 30-Day Disposal Rule Analysis",
        ]}
        quickSpecs={essQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "ESS & Equity Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1 & 2. What is an employee share scheme? & How employee share scheme tax works */}
      <WhatIsAnEssAndHowItWorks />

      {/* 3 & 4. What happens if employment ends? & ESS statements and tax return reporting */}
      <CessationOfEmploymentAndEssStatements />

      {/* 5. ESS tax and CGT are separate calculations */}
      <EssTaxVsCgtTwoStages />

      {/* 6 & 7. When ESS matters become more complicated & Records to keep */}
      <ComplexEssSituationsAndRecords />

      {/* 8. How Financially Up can help */}
      <HowFinanciallyUpHelpsEss />

      {/* 9. Frequently Asked Questions (Verbatim 7 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about employee share schemes, ESS statements, deferred taxing points, options, RSUs and CGT with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Employee Share Scheme Tax Accountant Frequently Asked Questions"
        items={essFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Book an Appointment to discuss your ESS statement, scheme documents, taxing-point information, employee share disposals and available records. Financially Up will outline the information required, the proposed service scope and the next steps for your Australian tax return."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 11. Related Service Ribbon */}
      <EssRelatedServiceRibbon />
    </main>
  );
}
