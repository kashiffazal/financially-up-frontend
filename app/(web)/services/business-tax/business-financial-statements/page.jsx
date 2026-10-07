import SubServiceHero from "@/components/website/SubServiceHero";
import WhatAreBusinessFinancialStatements from "./components/WhatAreBusinessFinancialStatements";
import WhatFinancialStatementPrepInvolves from "./components/WhatFinancialStatementPrepInvolves";
import FinancialReportingForDecisions from "./components/FinancialReportingForDecisions";
import WhenMightYouNeedFinancialStatements from "./components/WhenMightYouNeedFinancialStatements";
import RecordsNeededForFinancialStatements from "./components/RecordsNeededForFinancialStatements";
import HowFinanciallyUpHelpsFinancialStatements from "./components/HowFinanciallyUpHelpsFinancialStatements";
import RelatedFinancialStatementsRibbon from "./components/RelatedFinancialStatementsRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6 of Business Tax)
 */
export const metadata = {
  title: "Financial Statement Preparation for Business | Financially Up",
  description:
    "Financial statement preparation for Australian businesses, including profit and loss, balance sheet and reporting support for tax and management needs.",
  keywords: [
    "financial statement preparation",
    "business financial statements",
    "profit and loss statement accountant",
    "balance sheet preparation Australia",
    "management reporting services",
    "year end financial accounts",
    "business financial reports",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/business-financial-statements/",
  },
  openGraph: {
    title: "Financial Statement Preparation for Business | Financially Up",
    description:
      "Financial statement preparation for Australian businesses, including profit and loss, balance sheet and reporting support for tax and management needs.",
    url: "https://financiallyup.com.au/services/business-tax/business-financial-statements/",
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
  { label: "Business Financial Statements" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const financialStatementsFaqs = [
  {
    key: "1",
    label: "What financial statements does a business usually prepare?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Common reports include a profit and loss statement and balance sheet. Other reports or supporting schedules may be needed depending on the business, reporting purpose and entity type.
      </p>
    ),
  },
  {
    key: "2",
    label: "Are financial statements the same as a tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Financial statements summarize accounting information, while a tax return reports information required under tax law. The accounting figures often support tax-return preparation, but tax adjustments may still be required.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do you prepare management reports as well?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, management reporting can be separately scoped where a business needs regular financial information, budget comparisons or performance analysis beyond standard year-end statements.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you prepare statements if my bookkeeping is incomplete?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Potentially, but reconciliation or catch-up accounting may be needed first. We can review the records and identify the work required before the statements are finalized.
      </p>
    ),
  },
  {
    key: "5",
    label: "Are the financial statements audited?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not unless an audit or assurance engagement is separately required, agreed and appropriately provided. Standard financial statement preparation should not be described as an audit.
      </p>
    ),
  },
];

/**
 * BusinessFinancialStatementsPage Component
 * =========================================
 * Route: /services/business-tax/business-financial-statements
 * Pillar 2.5: Business Financial Statements (Page 6 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BusinessFinancialStatementsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: financialStatementsFaqs.map((faq) => ({
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
        title="Business Financial Statement Preparation & Reporting"
        subtitle="Structured Profit & Loss, Balance Sheets, Cash-Flow & Management Accounts for Australian Enterprises"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Financial statement preparation turns your business records into structured reports that show financial performance and position. Depending on the purpose, this may include a profit and loss statement, balance sheet and supporting schedules used for tax preparation, management review, finance applications or other business needs.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides financial reporting services for businesses across Australia. We work from your accounting records to prepare clear year-end or periodic reports, identify reconciliation issues and help ensure the figures are suitable for the agreed reporting purpose.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.5 • Financial Reporting Practice"
        highlights={[
          "Profit & Loss and Balance Sheet Preparation",
          "Lender & Finance Application Ready Reports",
          "Online Video Appointments (Outlook Calendar) & In-Person",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Core Reports",
            value: "Profit & Loss statements, Balance Sheets & supporting schedules",
          },
          {
            icon: "percentage",
            label: "Reporting Purposes",
            value: "Annual tax preparation, banking, finance applications & management",
          },
          {
            icon: "audit",
            label: "Preparation Scope",
            value: "General ledger review, bank reconciliations & year-end adjustments",
          },
          {
            icon: "safety",
            label: "Professional Standards",
            value: "Compiled by qualified CPA & IPA practitioners (non-audit basis)",
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
          { value: "10+ Years", label: "Reporting Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. What Are Business Financial Statements? */}
      <WhatAreBusinessFinancialStatements />

      {/* 2. What Does Financial Statement Preparation Involve? (9 scopes) */}
      <WhatFinancialStatementPrepInvolves />

      {/* 3. Financial Reporting for Better Business Decisions */}
      <FinancialReportingForDecisions />

      {/* 4. When Might You Need Financial Statements? (7 triggers + non-audit disclosure) */}
      <WhenMightYouNeedFinancialStatements />

      {/* 5. Records and Information We May Need (10 categories + retention rules) */}
      <RecordsNeededForFinancialStatements />

      {/* 6. How Financially Up Can Help & Why Choose Financially Up? */}
      <HowFinanciallyUpHelpsFinancialStatements />

      {/* 7. Contextual Related Services Ribbon */}
      <RelatedFinancialStatementsRibbon />

      {/* 8. Frequently Asked Questions (5 Verbatim FAQs) */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about Australian financial statement preparation, profit and loss reports, balance sheets, and management accounting."
        faqs={financialStatementsFaqs}
      />

      {/* 9. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="If you need financial statements prepared for tax, management, finance or another business purpose, book an appointment with Financially Up to discuss the reporting purpose, available records and appropriate scope."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
