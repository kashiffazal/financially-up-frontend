import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsDivision7A from "./components/WhatIsDivision7A";
import WhoNeedsDivision7APlanning from "./components/WhoNeedsDivision7APlanning";
import ComplyingLoansAndRepayments from "./components/ComplyingLoansAndRepayments";
import TrustUpesAfterBendel from "./components/TrustUpesAfterBendel";
import CommonDivision7AIssues from "./components/CommonDivision7AIssues";
import Division7AIssuesIdentified from "./components/Division7AIssuesIdentified";
import HowFinanciallyUpHelpsDiv7A from "./components/HowFinanciallyUpHelpsDiv7A";
import RelatedDivision7ARibbon from "./components/RelatedDivision7ARibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 9)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Division 7A Advice & Planning Australia | Financially Up",
  description:
    "Get Division 7A advice for private company loans, shareholder benefits, repayments and trust interactions. Practical planning with Financially Up.",
  keywords: [
    "Division 7A advice",
    "Division 7A planning Australia",
    "Section 109D loan agreement",
    "shareholder loan deemed dividend",
    "minimum yearly repayment Division 7A",
    "Bendel High Court UPE decision",
    "private company tax accountant Sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/division-7a-planning/",
  },
  openGraph: {
    title: "Division 7A Advice & Planning Australia | Financially Up",
    description:
      "Get Division 7A advice for private company loans, shareholder benefits, repayments and trust interactions. Practical planning with Financially Up.",
    url: "https://financiallyup.com.au/services/tax-planning/division-7a-planning/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the Tax Planning service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Tax Planning", href: "/services/tax-planning" },
  { label: "Division 7A Planning" },
];

/**
 * 6 Exact Frequently Asked Questions from Client Document (Page 9)
 */
const division7APlanningFaqs = [
  {
    key: "1",
    label: "What does Division 7A advice cover?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can cover private company payments, loans, benefits and debt forgiveness involving shareholders or associates, including whether an exclusion or complying loan arrangement may apply.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does every shareholder loan become a deemed dividend?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The outcome depends on the facts, timing, repayment position, loan terms and relevant exclusions. A loan may avoid section 109D treatment if it is repaid or put on complying terms within the applicable rules.
      </p>
    ),
  },
  {
    key: "3",
    label: "What is a minimum yearly repayment?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For a complying Division 7A loan, the law generally requires a calculated minimum repayment in later income years. The amount depends on the loan balance, remaining term and the applicable benchmark interest rate.
      </p>
    ),
  },
  {
    key: "4",
    label: "Did the Bendel decision mean UPEs are no longer relevant to Division 7A?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The High Court held that the UPEs in Bendel were not section 109D loans merely because they remained unpaid. Other Division 7A provisions and different arrangements can still be relevant, so each trust-company arrangement needs to be reviewed on its facts.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can a complying Division 7A loan agreement fix every issue?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A complying agreement can be important for an eligible loan, but other rules, repayment requirements and transaction-specific issues may still apply.
      </p>
    ),
  },
  {
    key: "6",
    label: "When should I seek Division 7A planning?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Before taking money or benefits from a private company, before the company’s lodgement date, and well before 30 June where an existing complying loan has repayment obligations.
      </p>
    ),
  },
];

/**
 * Division7APlanningPage Component
 * ================================
 * Route: /services/tax-planning/division-7a-planning
 * Pillar 3.8: Division 7A Planning (Page 9 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function Division7APlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: division7APlanningFaqs.map((faq) => ({
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
        title="Division 7A Advice and Planning"
        subtitle="Private Company Loans, Shareholder Benefits & Complying Repayments in Australia"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Division 7A can apply when a private company provides payments, loans or debt forgiveness to a shareholder or their associate. Without appropriate management, these transactions can be treated as unfranked dividends for tax purposes, resulting in unexpected tax liabilities for the recipient.
            </span>
            <span className="block mt-2">
              Financially Up provides Division 7A advice and planning for Australian private companies and business owners. We review company transactions, loan accounts, shareholder drawings, trust interactions and existing loan agreements to identify issues, confirm current tax requirements and help you make informed decisions before deadlines pass.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.8 • Private Company Integrity Practice"
        highlights={[
          "Section 109D Loan Agreements & Benchmark Rates",
          "High Court Bendel Decision & Trust UPE Analysis",
          "Minimum Yearly Repayments (MYR) Calculations",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Private Company Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What is Division 7A? */}
      <WhatIsDivision7A />

      {/* 2. Who may need Division 7A planning? */}
      <WhoNeedsDivision7APlanning />

      {/* 3. Complying Division 7A loans and repayments */}
      <ComplyingLoansAndRepayments />

      {/* 4. Current position on trust UPEs after Bendel */}
      <TrustUpesAfterBendel />

      {/* 5. Common Division 7A issues to review */}
      <CommonDivision7AIssues />

      {/* 6. What happens if a Division 7A issue is identified? */}
      <Division7AIssuesIdentified />

      {/* 7. How Financially Up can help & Why choose us */}
      <HowFinanciallyUpHelpsDiv7A />

      {/* 8. Frequently Asked Questions (Verbatim 6 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about Division 7A loans, deemed dividends, benchmark interest rates, and the Bendel decision with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Division 7A Planning Frequently Asked Questions"
        items={division7APlanningFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Division 7A Advisory"
        title="Book an Appointment"
        subtitle="Discuss your company loan accounts, shareholder transactions, repayments, trust interactions and Division 7A planning requirements with Financially Up."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 10. Related Service Ribbon */}
      <RelatedDivision7ARibbon />
    </main>
  );
}
