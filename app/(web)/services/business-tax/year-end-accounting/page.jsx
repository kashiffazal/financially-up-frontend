import SubServiceHero from "@/components/website/SubServiceHero";
import WhatDoesYearEndAccountingInvolve from "./components/WhatDoesYearEndAccountingInvolve";
import YearEndVsFinancialStatements from "./components/YearEndVsFinancialStatements";
import WhyAccurateYearEndRecordsMatter from "./components/WhyAccurateYearEndRecordsMatter";
import CommonYearEndIssuesReviewed from "./components/CommonYearEndIssuesReviewed";
import RecordsNeededYearEndAccounting from "./components/RecordsNeededYearEndAccounting";
import HowFinanciallyUpHelpsYearEnd from "./components/HowFinanciallyUpHelpsYearEnd";
import RelatedYearEndServicesRibbon from "./components/RelatedYearEndServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 7 of Business Tax)
 */
export const metadata = {
  title: "Year End Accounting Services Australia | Financially Up",
  description:
    "Year end accounting for Australian businesses. Get help with reconciliations, annual accounts, adjustments, financial statements and tax-ready records.",
  keywords: [
    "year end accounting",
    "annual accounts preparation",
    "year end accountant Australia",
    "EOFY accounting services",
    "balance sheet reconciliation",
    "trial balance finalization",
    "tax-ready accounts",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/year-end-accounting/",
  },
  openGraph: {
    title: "Year End Accounting Services Australia | Financially Up",
    description:
      "Year end accounting for Australian businesses. Get help with reconciliations, annual accounts, adjustments, financial statements and tax-ready records.",
    url: "https://financiallyup.com.au/services/business-tax/year-end-accounting/",
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
  { label: "Year-End Accounting" },
];

/**
 * 6 Exact Frequently Asked Questions from Client Document (Page 7)
 */
const yearEndAccountingFaqs = [
  {
    key: "1",
    label: "What is year end accounting?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is the process of reviewing, reconciling and finalizing a business&apos;s accounting records for the financial year so reliable annual figures are available for reporting and tax work.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is year-end accounting the same as preparing a tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Year-end accounting finalizes the accounting records. A tax return then applies the relevant tax rules to the entity&apos;s information and may require tax adjustments beyond the accounting result.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need year end financial statements?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Many businesses prepare annual financial statements for tax, management, owners, lenders or other purposes. Formal statutory reporting obligations depend on the entity and its circumstances.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you work from cloud accounting software?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. The work can generally be based on the business&apos;s accounting system and supporting records. The amount of reconciliation required depends on how complete and accurate the file is.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can you help if the books are not fully reconciled?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can review the available records, identify unreconciled balances and outline the information or catch-up work required before finalization.
      </p>
    ),
  },
  {
    key: "6",
    label: "When should year-end accounting start?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can begin once the relevant financial year has ended and sufficient records are available. Some issues are easier to resolve if bookkeeping and balance-sheet accounts are reviewed regularly during the year rather than only at year end.
      </p>
    ),
  },
];

/**
 * YearEndAccountingPage Component
 * ===============================
 * Route: /services/business-tax/year-end-accounting
 * Pillar 2.6: Year-End Accounting (Page 7 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function YearEndAccountingPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: yearEndAccountingFaqs.map((faq) => ({
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
        title="Year End Accounting Services for Australian Businesses"
        subtitle="Annual Ledger Reconciliations, Balance Sheet Close & Tax-Ready Financial Statements"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Year end accounting is the process of reviewing, reconciling and finalizing a business&apos;s accounting records at the end of its financial year. It creates a reliable set of year-end figures that can support financial statements, business tax returns and the next year&apos;s opening balances.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides year end accounting services for companies, trusts, partnerships and sole traders across Australia. We can review the accounting file, reconcile key balances, identify missing or unusual items, prepare year-end adjustments and coordinate the records needed for annual tax and reporting work.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.6 • Annual Accounts Practice"
        highlights={[
          "General Ledger & Balance Sheet Reconciliations",
          "Year-End Adjustments & Trial Balance Finalization",
          "Online Video Appointments (Outlook Calendar) & In-Person",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Core Objective",
            value: "Reviewing, reconciling & finalizing annual general ledger accounts",
          },
          {
            icon: "percentage",
            label: "Applicable Entities",
            value: "Pty Ltd companies, trusts, business partnerships & sole traders",
          },
          {
            icon: "audit",
            label: "EOFY Close Scope",
            value: "Bank reconciliations, accruals, prepayments & trial balance finalization",
          },
          {
            icon: "safety",
            label: "Statutory Compliance",
            value: "ASIC 7-year record rules & ATO 5-year tax substantiation",
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
          { value: "10+ Years", label: "EOFY Close Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. What Does Year End Accounting Involve? (9 scopes) */}
      <WhatDoesYearEndAccountingInvolve />

      {/* 2. Year-End Accounting vs Business Financial Statements */}
      <YearEndVsFinancialStatements />

      {/* 3. Why Accurate Year-End Records Matter (Forward-flowing impact & ASIC) */}
      <WhyAccurateYearEndRecordsMatter />

      {/* 4. Common Year-End Issues We Help Review (8 issues + Division 7A) */}
      <CommonYearEndIssuesReviewed />

      {/* 5. What Records May Be Needed? (10 categories + 5-yr/7-yr retention) */}
      <RecordsNeededYearEndAccounting />

      {/* 6. How Financially Up Can Help & Why Choose Financially Up? */}
      <HowFinanciallyUpHelpsYearEnd />

      {/* 7. Contextual Related Services Ribbon */}
      <RelatedYearEndServicesRibbon />

      {/* 8. Frequently Asked Questions (6 Verbatim FAQs) */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about Australian year-end accounting, annual reconciliations, ledger close, and timing."
        faqs={yearEndAccountingFaqs}
      />

      {/* 9. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="If you need year end accounting services, book an appointment with Financially Up to discuss your records, reporting requirements and the work needed to finalize the financial year."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
