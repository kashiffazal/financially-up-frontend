import SubServiceHero from "@/components/website/SubServiceHero";
import WhenCanDivision7AApply from "./components/WhenCanDivision7AApply";
import Division7ALoansLodgmentDay from "./components/Division7ALoansLodgmentDay";
import MinimumYearlyRepaymentsCompliance from "./components/MinimumYearlyRepaymentsCompliance";
import PaymentsExpensesDebtForgiveness from "./components/PaymentsExpensesDebtForgiveness";
import TrustsUpeBendelDecision from "./components/TrustsUpeBendelDecision";
import RecordsForDivision7AReview from "./components/RecordsForDivision7AReview";
import HowFinanciallyUpHelpsDivision7A from "./components/HowFinanciallyUpHelpsDivision7A";
import RelatedDivision7ARibbon from "./components/RelatedDivision7ARibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 9 of Business Tax)
 */
export const metadata = {
  title: "Division 7A Accountant & Tax Advice | Financially Up",
  description:
    "Division 7A accountant support for private companies, shareholders and associates. Get help reviewing loans, payments, repayments and compliance.",
  keywords: [
    "Division 7A accountant",
    "Division 7A loan agreement",
    "deemed dividend ATO",
    "minimum yearly repayments Division 7A",
    "shareholder loan tax Australia",
    "private company loans tax",
    "Bendel decision UPE Division 7A",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/division-7a/",
  },
  openGraph: {
    title: "Division 7A Accountant & Tax Advice | Financially Up",
    description:
      "Division 7A accountant support for private companies, shareholders and associates. Get help reviewing loans, payments, repayments and compliance.",
    url: "https://financiallyup.com.au/services/business-tax/division-7a/",
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
  { label: "Division 7A" },
];

/**
 * 7 Exact Frequently Asked Questions from Client Document (Page 9)
 */
const division7aFaqs = [
  {
    key: "1",
    label: "What is a Division 7A deemed dividend?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is an amount that tax law can treat as an unfranked dividend where a private company provides certain payments, loans or forgiven debts to a shareholder or associate and the relevant conditions are met.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does every director loan fall under Division 7A?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Division 7A depends on factors including who received the benefit, the nature of the transaction, timing, repayments and available exclusions. A loan account should be reviewed on its facts.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can a Division 7A loan be repaid before the company lodges its return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Repayment before the company&apos;s relevant lodgment day can be important, but the rules include conditions and anti-avoidance provisions. The repayment history should be reviewed rather than relying on the closing balance alone.
      </p>
    ),
  },
  {
    key: "4",
    label: "What is a complying Division 7A loan agreement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is a written loan arrangement that meets relevant Division 7A requirements, including requirements concerning interest and loan terms. It generally needs to be in place before the company&apos;s lodgment day for the year the loan was made.
      </p>
    ),
  },
  {
    key: "5",
    label: "What are minimum yearly repayments?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        They are required annual repayments for relevant complying Division 7A loans. The calculation depends on the loan balance, remaining term and the applicable benchmark interest rate.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can Division 7A apply to trusts?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, depending on the transactions involved. An unpaid present entitlement is not, merely because it remains unpaid, a section 109D loan following the High Court&apos;s decision in Bendel. Separate loans, payments, interposed-entity arrangements or benefits may still engage Division 7A or other tax rules.
      </p>
    ),
  },
  {
    key: "7",
    label: "Can a Division 7A accountant fix a missed repayment?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The available options depend on the facts, timing and ATO rules. An accountant can review the position and explain possible next steps, but a particular outcome, Commissioner discretion or penalty treatment cannot be guaranteed.
      </p>
    ),
  },
];

/**
 * Division7APage Component
 * =========================
 * Route: /services/business-tax/division-7a
 * Pillar 2.8: Division 7A (Page 9 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function Division7APage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: division7aFaqs.map((faq) => ({
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
        title="Division 7A Accountant for Private Company Loans and Payments"
        subtitle="Specialist Review of Shareholder Loans, Complying Loan Agreements, Minimum Repayments & Tax Compliance"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Division 7A is an Australian tax integrity regime that can treat certain payments, loans or forgiven debts provided by a private company to a shareholder or their associate as an unfranked dividend. It is designed to prevent private-company profits being accessed outside the ordinary dividend framework without the appropriate tax treatment. Any deemed dividend is generally limited by the private company&apos;s distributable surplus.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides Division 7A services for private companies, shareholders and business groups, including reviews of company-to-shareholder transactions, loan accounts, repayments and year-end compliance. Detailed advice is separately scoped because the rules depend on the facts.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.8 • Tax Integrity & Corporate Loans"
        highlights={[
          "Complying Loan Agreements & Benchmark Rates",
          "Minimum Yearly Repayments (MYR) Calculations",
          "High Court Bendel Decision Trust & UPE Analysis",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Regime Scope",
            value: "Private company loans, payments, debt forgiveness & deemed dividends",
          },
          {
            icon: "audit",
            label: "Mitigation Method",
            value: "Written complying loan agreements, ATO benchmark rate & MYRs",
          },
          {
            icon: "percentage",
            label: "Standard Terms",
            value: "7-year unsecured terms or 25-year secured real property terms",
          },
          {
            icon: "calendar",
            label: "Critical Milestone",
            value: "Company tax return lodgment day & mandatory annual June 30 repayments",
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
          { value: "10+ Years", label: "Specialist Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. When Can Division 7A Apply? */}
      <WhenCanDivision7AApply />

      {/* 2. Division 7A Loans and the Company Lodgment Day */}
      <Division7ALoansLodgmentDay />

      {/* 3. Minimum Yearly Repayments and Ongoing Compliance */}
      <MinimumYearlyRepaymentsCompliance />

      {/* 4. Payments, Private Expenses and Debt Forgiveness */}
      <PaymentsExpensesDebtForgiveness />

      {/* 5. Trusts, Unpaid Entitlements and More Complex Arrangements (High Court Bendel Decision) */}
      <TrustsUpeBendelDecision />

      {/* 6. What Information Is Useful for a Division 7A Review? (10 checklist records) */}
      <RecordsForDivision7AReview />

      {/* 7. How Financially Up Can Help & Why Choose Financially Up? */}
      <HowFinanciallyUpHelpsDivision7A />

      {/* 8. Contextual Related Services Ribbon */}
      <RelatedDivision7ARibbon />

      {/* 9. Frequently Asked Questions (7 Verbatim FAQs) */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about Division 7A deemed dividends, complying loan agreements, repayment deadlines, and trust entitlements."
        faqs={division7aFaqs}
      />

      {/* 10. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="If you need a Division 7A accountant to review private-company loans, shareholder transactions or repayment requirements, book an appointment with Financially Up to discuss the facts and next steps."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
