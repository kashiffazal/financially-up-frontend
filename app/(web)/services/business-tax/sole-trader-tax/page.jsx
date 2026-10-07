import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsASoleTraderTaxReturn from "./components/WhatIsASoleTraderTaxReturn";
import SoleTraderBusinessIncomeExpenses from "./components/SoleTraderBusinessIncomeExpenses";
import SoleTraderGstBasPayg from "./components/SoleTraderGstBasPayg";
import SoleTraderRecordKeeping from "./components/SoleTraderRecordKeeping";
import HowSoleTraderDiffersIndividual from "./components/HowSoleTraderDiffersIndividual";
import HowFinanciallyUpHelpsSoleTraders from "./components/HowFinanciallyUpHelpsSoleTraders";
import RelatedSoleTraderServicesRibbon from "./components/RelatedSoleTraderServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5 of Business Tax)
 */
export const metadata = {
  title: "Sole Trader Tax Return & Accounting | Financially Up",
  description:
    "Sole trader tax return and accounting support for Australian businesses. Get help with business income, expenses, GST, BAS, records and year-end tax.",
  keywords: [
    "sole trader tax return",
    "sole trader tax accountant",
    "sole trader accounting Australia",
    "ABN tax return",
    "sole trader business deductions",
    "sole trader BAS GST",
    "lodge sole trader tax return",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/sole-trader-tax/",
  },
  openGraph: {
    title: "Sole Trader Tax Return & Accounting | Financially Up",
    description:
      "Sole trader tax return and accounting support for Australian businesses. Get help with business income, expenses, GST, BAS, records and year-end tax.",
    url: "https://financiallyup.com.au/services/business-tax/sole-trader-tax/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the business tax hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Tax", href: "/services/business-tax" },
  { label: "Sole Trader Tax" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const soleTraderTaxFaqs = [
  {
    key: "1",
    label: "Does a sole trader lodge a separate business tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A sole trader generally reports business income and expenses in their individual income tax return. The business may still have separate BAS, GST, payroll or other reporting obligations depending on its circumstances.
      </p>
    ),
  },
  {
    key: "2",
    label: "What expenses can a sole trader claim?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A business expense may be deductible where it meets the relevant tax rules and is connected with earning business income. Private components need to be excluded, and some costs may need to be depreciated or treated under specific rules rather than claimed immediately.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need GST registration as a sole trader?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        GST registration depends on your turnover, activities and other circumstances. Some businesses are required to register once the relevant threshold or specific registration rules apply.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you help if I have both a job and sole trader income?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Salary or wage income and sole trader business activity can be reported in the same individual tax return, while the business section is prepared using the appropriate business records.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can Financially Up help with bookkeeping as well as tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up provides bookkeeping and accounting services in addition to taxation. The bookkeeping or catch-up work can be scoped separately based on the condition of your records.
      </p>
    ),
  },
];

/**
 * SoleTraderTaxPage Component
 * ===========================
 * Route: /services/business-tax/sole-trader-tax
 * Pillar 2.4: Sole Trader Tax (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SoleTraderTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: soleTraderTaxFaqs.map((faq) => ({
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
        title="Sole Trader Tax Return & Business Accounting"
        subtitle="Annual Return Preparation, Business Deductions, GST/BAS & Compliance for Australian Sole Traders"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A sole trader reports business income and expenses through their individual tax return rather than lodging a separate business income tax return. That sounds simple, but the return can become more involved when you have business assets, GST, BAS, vehicle or home-based costs, contractors, multiple income streams or incomplete records.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides sole trader tax return preparation and ongoing business accounting support for sole traders across Australia. This page focuses on the business side of sole trader tax: recording business activity correctly, preparing year-end figures and meeting related tax and accounting obligations.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.4 • Sole Trader Practice"
        highlights={[
          "Business Schedule Integration in Individual Tax Return",
          "Vehicle, Home Office & Equipment Deductions Apportionment",
          "Online Video Appointments (Outlook Calendar) & In-Person",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Entity Type",
            value: "Individual carrying on an active enterprise (ABN)",
          },
          {
            icon: "percentage",
            label: "Tax Structure",
            value: "Business schedule reported inside Individual Income Tax Return",
          },
          {
            icon: "audit",
            label: "Deductions & Apportionment",
            value: "Business-use percentages, vehicle logbooks & home office",
          },
          {
            icon: "safety",
            label: "Statutory Compliance",
            value: "GST, BAS, PAYG instalments & employer superannuation",
          },
          {
            icon: "desktop",
            label: "Consultation Formats",
            value: "100% online video conference, phone or in person",
          },
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Sole Trader Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. How Does a Sole Trader Tax Return Work? */}
      <WhatIsASoleTraderTaxReturn />

      {/* 2. Business Income and Expenses (Apportionment & 9 Review Areas) */}
      <SoleTraderBusinessIncomeExpenses />

      {/* 3. GST, BAS and PAYG Considerations */}
      <SoleTraderGstBasPayg />

      {/* 4. Record Keeping for Sole Traders (9 Categories + 5-year retention) */}
      <SoleTraderRecordKeeping />

      {/* 5. How This Page Differs From a Basic Individual Tax Return */}
      <HowSoleTraderDiffersIndividual />

      {/* 6. How Financially Up Can Help & Why Choose Financially Up? */}
      <HowFinanciallyUpHelpsSoleTraders />

      {/* 7. Contextual Related Services Ribbon */}
      <RelatedSoleTraderServicesRibbon />

      {/* 8. Frequently Asked Questions (5 Verbatim FAQs) */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about Australian sole trader tax returns, deductions, GST registration, multiple income streams and bookkeeping."
        faqs={soleTraderTaxFaqs}
      />

      {/* 9. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="If your business records, deductions, BAS or year-end tax position need review, book an appointment with Financially Up to discuss the work required for your sole trader tax return and ongoing accounting needs."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
