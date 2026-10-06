import SubServiceHero from "@/components/website/SubServiceHero";
import WhenHighIncomeBecomesComplex from "./components/WhenHighIncomeBecomesComplex";
import PreparationVsPlanning from "./components/PreparationVsPlanning";
import HighIncomeCommonScenarios from "./components/HighIncomeCommonScenarios";
import HighIncomeRequiredDocuments from "./components/HighIncomeRequiredDocuments";
import HighIncomeProcessSteps from "./components/HighIncomeProcessSteps";
import WhyChooseFinanciallyUpHighIncome from "./components/WhyChooseFinanciallyUpHighIncome";
import HighIncomeRelatedServiceRibbon from "./components/HighIncomeRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3)
 */
export const metadata = {
  title: "High Income Tax Accountant Australia | Financially Up",
  description:
    "Tax return preparation and planning support for high-income professionals and executives Australia-wide. Book an appointment with Financially Up.",
  keywords: [
    "high income tax accountant",
    "tax accountant for high income earners",
    "executive tax return Australia",
    "high earner tax planning",
    "employee share scheme tax accountant",
    "complex individual tax return",
    "tax accountant Sydney",
    "executive remuneration tax",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/high-income-professionals/",
  },
  openGraph: {
    title: "High Income Tax Accountant Australia | Financially Up",
    description:
      "Tax return preparation and planning support for high-income professionals and executives Australia-wide. Book an appointment with Financially Up.",
    url: "https://financiallyup.com.au/services/individual-tax/high-income-professionals/",
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
  { label: "High Income Professionals" },
];

/**
 * 6 Tailored Quick Specifications for High-Income Professionals
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const highIncomeQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Executives, professionals, high earners, multi-source income & equity holders",
  },
  {
    icon: "trophy",
    label: "Executive Packages",
    value: "Bonuses, commissions, salary packaging & employee share schemes (ESS)",
  },
  {
    icon: "lineChart",
    label: "Portfolio Oversight",
    value: "Rental properties, share trading, crypto assets & capital gains calculations",
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
    label: "Proactive Tax Planning",
    value: "Pre-year-end strategy, investment timing & forward-looking advisory scope",
  },
];

/**
 * 6 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const highIncomeFaqs = [
  {
    key: "1",
    label: "Do I need a high income tax accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. Specialist assistance may help when remuneration, investments, capital gains or substantial deductions make your return difficult or time-consuming.
      </p>
    ),
  },
  {
    key: "2",
    label: "What makes a high-income tax return more complex?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Complexity usually comes from income sources, remuneration arrangements, investments, transactions and deductions—not income level alone.
      </p>
    ),
  },
  {
    key: "3",
    label: "What is the difference between tax return preparation and tax planning?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Tax return preparation reports income, deductions and transactions from a completed financial year. Tax planning considers how proposed decisions or changing circumstances may affect a future tax position. Planning is separately scoped where required.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you help with tax planning for high income earners?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can consider prospective matters within our authorized scope. The work depends on your circumstances, and no particular outcome is guaranteed.
      </p>
    ),
  },
  {
    key: "5",
    label: "What records do executives need for bonuses or employee shares?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Records may include ATO income statements, remuneration documents, employee share scheme statements and transaction records. We will confirm what applies.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can the service be completed online?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Clients Australia-wide can book online or by phone, meet online and provide records remotely. In-person appointments are available by arrangement.
      </p>
    ),
  },
];

/**
 * HighIncomeProfessionalsPage Component
 * =====================================
 * Route: /services/individual-tax/high-income-professionals
 * Pillar 1.2: High Income Tax Accountant (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function HighIncomeProfessionalsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: highIncomeFaqs.map((faq) => ({
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
        title="High Income Tax Accountant for Professionals and Executives"
        subtitle="Tax Return Preparation & Strategic Advisory for High-Income Professionals & Executives Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              When your income and financial arrangements become more complex, preparing an individual tax return may involve more than reporting salary and claiming routine deductions. Bonuses, executive remuneration, employee share interests, investments, rental properties, capital gains and changing employment arrangements can all affect what must be reviewed and reported.
            </span>
            <span className="block mt-2">
              If you need a high income tax accountant, Financially Up Pty Ltd supports professionals, executives and other individuals across Australia with complex tax affairs. We prepare individual tax returns and consider whether proactive tax planning is relevant to your circumstances.
            </span>
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your First Appointment:
              </span>
              During your first appointment, we will discuss your income, investments, employment arrangements and areas of concern. We will then explain the relevant service scope, the information required and the next steps.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.2 • Executive & High Earner Tax Practice"
        highlights={[
          "Executive Remuneration & ESS Analysis",
          "Pre-Year-End Proactive Tax Planning",
          "Registered Tax Agent #26242127",
          "100% Online Australia-Wide & In-Person",
        ]}
        quickSpecs={highIncomeQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Executive Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1. When High Income Tax Situations Become More Complex */}
      <WhenHighIncomeBecomesComplex />

      {/* 2. High Income Tax Return Preparation and Planning */}
      <PreparationVsPlanning />

      {/* 3. Common Situations We Can Assist With */}
      <HighIncomeCommonScenarios />

      {/* 4. What Documents May Be Required */}
      <HighIncomeRequiredDocuments />

      {/* 5. How the Process Works */}
      <HighIncomeProcessSteps />

      {/* 6. About Financially Up / Why Choose Us */}
      <WhyChooseFinanciallyUpHighIncome />

      {/* 7. Frequently Asked Questions (Verbatim 6 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about high-income tax returns, executive remuneration, ESS statements, tax planning and lodgement with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="High Income Tax Accountant Frequently Asked Questions"
        items={highIncomeFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If your income includes executive remuneration, multiple sources, investments or other complex tax matters, book an appointment to discuss the assistance you may need. The first appointment is used to understand your circumstances, determine the appropriate service scope and explain the documents and next steps. Appointments can be booked online or arranged by phone, with online and in-person meeting options available."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 9. Related Service Ribbon */}
      <HighIncomeRelatedServiceRibbon />
    </main>
  );
}
