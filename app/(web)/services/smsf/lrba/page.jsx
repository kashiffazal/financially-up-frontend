import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsAnLrbaAndStructure from "./components/WhatIsAnLrbaAndStructure";
import August2026LrbaRuleChanges from "./components/August2026LrbaRuleChanges";
import SingleAcquirableAssetAndRepairsVsImprovements from "./components/SingleAcquirableAssetAndRepairsVsImprovements";
import RelatedPartyLoansAndArmLengthTerms from "./components/RelatedPartyLoansAndArmLengthTerms";
import AnnualLrbaComplianceAndRecords from "./components/AnnualLrbaComplianceAndRecords";
import RelatedSmsfRibbon from "../components/RelatedSmsfRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5 of 9th Pillar SMSF.docx)
 */
export const metadata = {
  title: "SMSF LRBA Accountant & Compliance Support | Financially Up",
  description:
    "SMSF LRBA accountant support for borrowing records, property accounting, annual compliance and related-party loan review. Australia-wide SMSF assistance.",
  keywords: [
    "SMSF LRBA accountant",
    "limited recourse borrowing arrangement",
    "SMSF borrowing compliance",
    "SMSF property loan accounting",
    "SMSF related party loan",
    "bare trust accounting SMSF",
    "PCG 2016/5 SMSF safe harbor",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/smsf/lrba/",
  },
  openGraph: {
    title: "SMSF LRBA Accountant & Compliance Support | Financially Up",
    description:
      "SMSF LRBA accountant support for borrowing records, property accounting, annual compliance and related-party loan review. Australia-wide SMSF assistance.",
    url: "https://financiallyup.com.au/services/smsf/lrba/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking back through the SMSF hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "SMSF", href: "/services/smsf" },
  { label: "SMSF LRBA" },
];

/**
 * 6 Quick Specifications for SMSF LRBA
 */
const smsfLrbaQuickSpecs = [
  {
    icon: "safety",
    label: "Statutory Basis",
    value: "Section 67A & 67B Superannuation Industry (Supervision) Act 1993",
  },
  {
    icon: "bank",
    label: "Holding Trust",
    value: "Separate bare trust holding legal title; SMSF holds beneficial interest",
  },
  {
    icon: "calendar",
    label: "2026 Reforms",
    value: "Borrowings from 10 Aug 2026 restricted to business real property only",
  },
  {
    icon: "stock",
    label: "Single Asset",
    value: "Single acquirable asset only; borrowed funds cannot fund improvements",
  },
  {
    icon: "percentage",
    label: "Related Party Loans",
    value: "ATO PCG 2016/5 safe harbor benchmarking preventing 45% NALI penalty tax",
  },
  {
    icon: "file",
    label: "Audit File Pack",
    value: "Executed loan deeds, bare trust records, interest schedules & valuations",
  },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const smsfLrbaFaqs = [
  {
    key: "1",
    label: "Can an SMSF borrow to buy property after 10 August 2026?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A new LRBA can still be used to acquire real property, but the property generally must be business real property at the time the arrangement is entered into and throughout the LRBA. Transitional rules apply to certain earlier arrangements and binding contracts.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can an existing residential-property LRBA continue?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An LRBA entered into before 10 August 2026 is generally unaffected by the new business real property restriction, and refinancing that earlier arrangement may also be unaffected. The documents and timing should be reviewed before any variation or refinance.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can borrowed money be used to renovate the property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Borrowed money may be used for certain acquisition expenses and to maintain or repair the asset, but not to improve it. The distinction depends on the work proposed, so advice should be obtained before funds are committed.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can a family member lend money to the SMSF?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A related-party loan may be possible, but the arrangement must satisfy the LRBA rules and its terms and conduct need appropriate arm&apos;s-length support. Tax and legal implications should be reviewed before the loan is implemented.
      </p>
    ),
  },
  {
    key: "5",
    label: "Does Financially Up arrange SMSF loans?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Financially Up provides accounting, tax and compliance support. Loan approval, credit assistance, legal documentation and financial product advice are separate services requiring the relevant authorized or qualified professional.
      </p>
    ),
  },
];

/**
 * SmsfLrbaSubpage Component
 * =========================
 * Route: /services/smsf/lrba
 * Pillar 9.4: SMSF LRBA Accountant and Compliance Services (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SmsfLrbaSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can an SMSF borrow to buy property after 10 August 2026?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A new LRBA can still be used to acquire real property, but the property generally must be business real property at the time the arrangement is entered into and throughout the LRBA. Transitional rules apply to certain earlier arrangements and binding contracts.",
        },
      },
      {
        "@type": "Question",
        name: "Can an existing residential-property LRBA continue?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An LRBA entered into before 10 August 2026 is generally unaffected by the new business real property restriction, and refinancing that earlier arrangement may also be unaffected. The documents and timing should be reviewed before any variation or refinance.",
        },
      },
      {
        "@type": "Question",
        name: "Can borrowed money be used to renovate the property?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Borrowed money may be used for certain acquisition expenses and to maintain or repair the asset, but not to improve it. The distinction depends on the work proposed, so advice should be obtained before funds are committed.",
        },
      },
      {
        "@type": "Question",
        name: "Can a family member lend money to the SMSF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "A related-party loan may be possible, but the arrangement must satisfy the LRBA rules and its terms and conduct need appropriate arm's-length support. Tax and legal implications should be reviewed before the loan is implemented.",
        },
      },
      {
        "@type": "Question",
        name: "Does Financially Up arrange SMSF loans?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Financially Up provides accounting, tax and compliance support. Loan approval, credit assistance, legal documentation and financial product advice are separate services requiring the relevant authorized or qualified professional.",
        },
      },
    ],
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
        badge="SMSF LRBA"
        title="SMSF LRBA Accountant and Compliance Services"
        subtitle="An SMSF is generally prohibited from borrowing, but a limited recourse borrowing arrangement can provide an exception where the statutory conditions are met. An SMSF LRBA accountant records the asset, holding arrangement, borrowing, repayments, income and expenses consistently and prepares the information required for the fund's annual accounts, audit and SMSF annual return."
        bodyText={
          <span>
            Financially Up Pty Ltd provides accounting, tax and compliance support for existing and proposed LRBAs. We do not provide loan approval, credit assistance, legal documents or financial product advice about whether borrowing suits your retirement strategy. Those matters may require a lender, lawyer or authorized financial adviser.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Initial Discussion:
              </span>
              If your SMSF has an LRBA or is considering one, the first appointment can identify the arrangement date, asset, lender, records, compliance work and specialist input that may be required.
            </div>
          </span>
        }
        parentService={{
          label: "SMSF Hub",
          href: "/services/smsf",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 9.4 • SMSF Practice"
        highlights={[
          "Section 67A SIS Act Structure Verification",
          "10 August 2026 Business Real Property Rules",
          "Repairs vs Capital Improvements Separation",
          "Related-Party Loan & PCG 2016/5 Benchmarking",
        ]}
        quickSpecs={smsfLrbaQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Borrowing Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is an LRBA? & Why LRBA accounting needs separate attention */}
      <WhatIsAnLrbaAndStructure />

      {/* 2. What changed for real-property LRBAs from 10 August 2026? */}
      <August2026LrbaRuleChanges />

      {/* 3. Single acquirable asset, repairs and improvements */}
      <SingleAcquirableAssetAndRepairsVsImprovements />

      {/* 4. Related-party loans and arm’s-length dealing (PCG 2016/5) */}
      <RelatedPartyLoansAndArmLengthTerms />

      {/* 5. Annual LRBA compliance records, How we help, & Why choose us */}
      <AnnualLrbaComplianceAndRecords />

      {/* 6. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about the 10 August 2026 borrowing changes, grandfathered residential loans, repairs vs improvements, and related-party financing."
        image="/images/services/faq.webp"
        imageAlt="SMSF LRBA Frequently Asked Questions"
        items={smsfLrbaFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="SMSF LRBA Compliance"
        subtitle="Book an appointment to review the borrowing records, arrangement date, asset, annual accounting position and any issue that should be addressed before audit or lodgement."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore SMSF Services"
        secondaryButtonHref="/services/smsf"
      />

      {/* 8. Related SMSF Ribbon */}
      <RelatedSmsfRibbon currentSlug="lrba" />
    </main>
  );
}
