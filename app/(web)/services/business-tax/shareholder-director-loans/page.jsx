import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsShareholderDirectorLoan from "./components/WhatIsShareholderDirectorLoan";
import WhenDivision7AAffectsCompanyLoan from "./components/WhenDivision7AAffectsCompanyLoan";
import ShareholderLendingToCompany from "./components/ShareholderLendingToCompany";
import CommonShareholderLoanIssues from "./components/CommonShareholderLoanIssues";
import RecordsToKeepShareholderLoans from "./components/RecordsToKeepShareholderLoans";
import HowFinanciallyUpHelpsShareholderLoans from "./components/HowFinanciallyUpHelpsShareholderLoans";
import RelatedShareholderLoanRibbon from "./components/RelatedShareholderLoanRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 10 of Business Tax)
 */
export const metadata = {
  title: "Shareholder and Director Loan Tax | Financially Up",
  description:
    "Get help with shareholder and director loan tax, Division 7A risks, records and repayments from Financially Up. Australia-wide support.",
  keywords: [
    "shareholder loan tax",
    "director loan tax Australia",
    "Division 7A shareholder loans",
    "drawings vs shareholder loan",
    "director drawings tax treatment",
    "private company loans to directors",
    "shareholder lending money to company",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/shareholder-director-loans/",
  },
  openGraph: {
    title: "Shareholder and Director Loan Tax | Financially Up",
    description:
      "Get help with shareholder and director loan tax, Division 7A risks, records and repayments from Financially Up. Australia-wide support.",
    url: "https://financiallyup.com.au/services/business-tax/shareholder-director-loans/",
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
  { label: "Shareholder & Director Loans" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 10)
 */
const shareholderLoanFaqs = [
  {
    key: "1",
    label: "Is money taken from my company automatically a shareholder loan?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. The accounting and tax treatment depends on why the money was paid, who received it and how it is documented. It may be a loan, wage, dividend, reimbursement or another type of transaction.
      </p>
    ),
  },
  {
    key: "2",
    label: "What is Division 7A?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Division 7A is an integrity regime that can treat certain payments, loans and forgiven debts from private companies to shareholders or their associates as dividends for tax purposes.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does every director loan cause a deemed dividend?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The outcome depends on the facts and whether an exclusion or complying arrangement applies. The timing of repayment or loan documentation can be important.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can a shareholder lend money to their company?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. A shareholder can lend funds to a company, but the arrangement and any interest should be recorded correctly. This is different from a company loan to a shareholder.
      </p>
    ),
  },
  {
    key: "5",
    label: "When should I have a shareholder loan account reviewed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A review is useful before finalizing year-end accounts or the company tax return, particularly where the balance is material, private expenses are involved or repayments are uncertain.
      </p>
    ),
  },
];

/**
 * ShareholderDirectorLoansPage Component
 * =====================================
 * Route: /services/business-tax/shareholder-director-loans
 * Pillar 2.9: Shareholder and Director Loans (Page 10 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ShareholderDirectorLoansPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: shareholderLoanFaqs.map((faq) => ({
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
        title="Shareholder & Director Loan Tax Advice"
        subtitle="Tax Treatment, Division 7A Assessment, Account Reconciliation & Compliance for Private Companies"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Money moving between a private company and its shareholders or directors is not automatically a simple loan. The tax treatment depends on who provided the funds, how the transaction is documented, whether repayments are made, and whether Division 7A or other rules apply.
            </span>
            <span className="block mt-2">
              Financially Up helps business owners review shareholder loan tax issues, reconcile loan accounts and understand what needs to be addressed before the company tax return is finalized. This page focuses on loans and drawings between private companies and people connected with them, rather than ordinary commercial borrowing from banks or unrelated lenders.
            </span>
            <span className="block mt-2 font-medium text-slate-700 dark:text-zinc-200">
              The main purpose of this service is to establish and reconcile what the loan account contains. Detailed Division 7A tax analysis remains within the separately scoped Division 7A service.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.9 • Corporate Loans & Drawings"
        highlights={[
          "Drawings vs Genuine Credit Loan Reconciliations",
          "Division 7A Deemed Dividend Exposure Reviews",
          "Written Complying Agreements & Repayment Schedules",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Scope of Service",
            value: "Private company loans, drawings & advances between companies and related parties",
          },
          {
            icon: "percentage",
            label: "Directionality",
            value: "Company-to-shareholder vs. shareholder-to-company credit loan accounts",
          },
          {
            icon: "audit",
            label: "Integrity Rules",
            value: "Division 7A deemed dividend review, benchmark interest & MYR schedules",
          },
          {
            icon: "calendar",
            label: "Retention Standards",
            value: "7-year statutory financial record keeping & ongoing loan agreements",
          },
          {
            icon: "desktop",
            label: "Consultation Formats",
            value: "100% online video conference, phone or in-person consultation",
          },
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Corporate Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. What is a shareholder or director loan? */}
      <WhatIsShareholderDirectorLoan />

      {/* 2. When can Division 7A affect a company loan? */}
      <WhenDivision7AAffectsCompanyLoan />

      {/* 3. What if the shareholder lends money to the company? */}
      <ShareholderLendingToCompany />

      {/* 4. Common shareholder and director loan issues (8 points + relabeling warning) */}
      <CommonShareholderLoanIssues />

      {/* 5. What records should you keep? (7 points + 7-year retention rule) */}
      <RecordsToKeepShareholderLoans />

      {/* 6. How Financially Up can help & Why choose Financially Up? */}
      <HowFinanciallyUpHelpsShareholderLoans />

      {/* 7. Contextual Related Services Ribbon */}
      <RelatedShareholderLoanRibbon />

      {/* 8. Frequently asked questions (5 Verbatim FAQs) */}
      <FaqSection
        title="Frequently asked questions"
        subtitle="Common questions regarding private company shareholder loans, director drawings, Division 7A risks, and accounting reviews."
        faqs={shareholderLoanFaqs}
      />

      {/* 9. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="Bring the loan-account report, company bank statements and any existing agreements so we can identify the next accounting and tax steps."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
