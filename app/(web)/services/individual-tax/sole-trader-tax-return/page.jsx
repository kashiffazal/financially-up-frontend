import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsASoleTraderTaxReturn from "./components/WhatIsASoleTraderTaxReturn";
import SoleTradersWeAssist from "./components/SoleTradersWeAssist";
import HowFinanciallyUpCanAssist from "./components/HowFinanciallyUpCanAssist";
import SoleTraderExpensesAndAssets from "./components/SoleTraderExpensesAndAssets";
import PaygGstAndPsiRules from "./components/PaygGstAndPsiRules";
import SoleTraderProcessSteps from "./components/SoleTraderProcessSteps";
import WhyChooseFinanciallyUpSoleTrader from "./components/WhyChooseFinanciallyUpSoleTrader";
import SoleTraderRelatedServiceRibbon from "./components/SoleTraderRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4)
 */
export const metadata = {
  title: "Sole Trader Tax Return Australia | Financially Up",
  description:
    "Sole trader tax return preparation for Australians, including deductions, PAYG, GST and BAS support. Book an appointment with Financially Up.",
  keywords: [
    "sole trader tax return",
    "sole trader tax return Australia",
    "contractor tax return",
    "freelancer tax accountant",
    "tradie tax accountant",
    "sole trader deductions Australia",
    "PAYG instalments sole trader",
    "personal services income PSI accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/sole-trader-tax-return/",
  },
  openGraph: {
    title: "Sole Trader Tax Return Australia | Financially Up",
    description:
      "Sole trader tax return preparation for Australians, including deductions, PAYG, GST and BAS support. Book an appointment with Financially Up.",
    url: "https://financiallyup.com.au/services/individual-tax/sole-trader-tax-return/",
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
  { label: "Sole Trader Tax Return" },
];

/**
 * 6 Tailored Quick Specifications for Sole Trader Tax Returns
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const soleTraderQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Tradies, contractors, freelancers, consultants & sole traders with an ABN",
  },
  {
    icon: "file",
    label: "Tax Reporting Model",
    value: "Business profit & loss integrated into individual tax return (no separate company lodgement)",
  },
  {
    icon: "percentage",
    label: "Compliance & Bas",
    value: "PAYG instalments, GST registration threshold ($75k) & Personal Services Income (PSI)",
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
    label: "Deductions & Assets",
    value: "Motor vehicle expenses, tools, instant write-offs, home-based business & record keeping",
  },
];

/**
 * 6 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const soleTraderFaqs = [
  {
    key: "1",
    label: "How is a sole trader taxed in Australia",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Business income and expenses are reported through the individual&apos;s return. Net business profit or loss is considered with other personal income.
      </p>
    ),
  },
  {
    key: "2",
    label: "What deductions can a sole trader claim",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Eligible expenses must relate to earning assessable income and be supported by records. Mixed expenses are generally apportioned, and some assets are claimed over time.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does a sole trader need to register for GST",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For most businesses, registration is required when current or projected GST turnover reaches $75,000. Different rules can apply, and voluntary registration may be available.
      </p>
    ),
  },
  {
    key: "4",
    label: "What are PAYG instalments",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        They are payments towards expected tax on business and investment income and are credited against the annual assessment.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can I complete the process online",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Australia-wide clients can meet online and provide records digitally. Bookings can be arranged by phone, and in-person appointments are also available.
      </p>
    ),
  },
  {
    key: "6",
    label: "When should I use a sole trader accountant",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Assistance may be useful for mixed income, uncertain deductions, incomplete records, GST or PAYG obligations, PSI or a business loss.
      </p>
    ),
  },
];

/**
 * SoleTraderTaxReturnPage Component
 * =================================
 * Route: /services/individual-tax/sole-trader-tax-return
 * Pillar 1.3: Sole Trader Tax Return Services (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SoleTraderTaxReturnPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: soleTraderFaqs.map((faq) => ({
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
        title="Sole Trader Tax Return Services for Australians"
        subtitle="Tax Return Preparation & Year-Round ATO Compliance for Australian Sole Traders & Contractors"
        description={
          <span className="space-y-3 block">
            <span className="block">
              As a sole trader, you report business income and expenses through your individual tax return rather than lodging a separate company return. Your overall tax position generally reflects your net business profit or loss, other personal income and the Australian tax rules applying to your circumstances.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides sole trader tax return preparation for tradies, contractors, freelancers, consultants and service-based business owners across Australia. We review the information provided, prepare the return and explain the outcome before lodgement.
            </span>
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Appointment:
              </span>
              During the first appointment, we discuss your activities, income, expenses, records and tax obligations, then explain the documents required and next steps.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.3 • Sole Trader & Contractor Tax Practice"
        highlights={[
          "Tradie, Freelancer & Contractor Returns",
          "PAYG Instalments, GST & PSI Guidance",
          "Registered Tax Agent #26242127",
          "100% Online Australia-Wide & In-Person",
        ]}
        quickSpecs={soleTraderQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Sole Trader Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1. What Is a Sole Trader Tax Return */}
      <WhatIsASoleTraderTaxReturn />

      {/* 2. Who This Service Is For */}
      <SoleTradersWeAssist />

      {/* 3. How Financially Up Can Assist */}
      <HowFinanciallyUpCanAssist />

      {/* 4. Business Expenses Assets and Records */}
      <SoleTraderExpensesAndAssets />

      {/* 5. PAYG, GST, BAS and Personal Services Income */}
      <PaygGstAndPsiRules />

      {/* 6. Online Sole Trader Tax Return Process */}
      <SoleTraderProcessSteps />

      {/* 7. About Financially Up / Why Choose Us */}
      <WhyChooseFinanciallyUpSoleTrader />

      {/* 8. Frequently Asked Questions (Verbatim 6 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about sole trader tax returns, business deductions, GST registration, PAYG instalments and PSI rules with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Sole Trader Tax Return Frequently Asked Questions"
        items={soleTraderFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Book an appointment if your individual return includes sole trader income. We will discuss your activities, records and obligations, then explain the relevant service and next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 10. Related Service Ribbon */}
      <SoleTraderRelatedServiceRibbon />
    </main>
  );
}
