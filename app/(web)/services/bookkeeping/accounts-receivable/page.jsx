import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatAreAccountsReceivableServices from "./components/WhatAreAccountsReceivableServices";
import WhoMayBenefitAccountsReceivable from "./components/WhoMayBenefitAccountsReceivable";
import WhatFinanciallyUpCanHelpWithAR from "./components/WhatFinanciallyUpCanHelpWithAR";
import AccurateRecordsAndCashFlowVisibility from "./components/AccurateRecordsAndCashFlowVisibility";
import HowARProcessWorks from "./components/HowARProcessWorks";
import InformationNeededAR from "./components/InformationNeededAR";
import WhyChooseFinanciallyUpAR from "./components/WhyChooseFinanciallyUpAR";
import RelatedBookkeepingRibbon from "../components/RelatedBookkeepingRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 7 of Bookkeeping)
 */
export const metadata = {
  title: "Accounts Receivable Services Australia | Financially Up",
  description:
    "Outsource accounts receivable with invoicing, debtor tracking and payment follow-up support for Australian businesses. Book an appointment.",
  keywords: [
    "accounts receivable services",
    "outsourced accounts receivable",
    "debtor management Australia",
    "sales invoice processing",
    "aged receivables reporting",
    "customer payment allocation",
    "invoicing services Australia",
    "debtor ledger reconciliation",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bookkeeping/accounts-receivable/",
  },
  openGraph: {
    title: "Accounts Receivable Services Australia | Financially Up",
    description:
      "Outsource accounts receivable with invoicing, debtor tracking and payment follow-up support for Australian businesses. Book an appointment.",
    url: "https://financiallyup.com.au/services/bookkeeping/accounts-receivable/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the Bookkeeping service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Accounts Receivable" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 7)
 */
const accountsReceivableFaqs = [
  {
    key: "1",
    label: "What is included in accounts receivable services?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The scope can include sales invoice processing, recording and allocating receipts, customer account reconciliation, aged receivables monitoring and routine payment follow-up. The exact tasks are agreed with you before work begins.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can you take over accounts receivable from my internal team?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can provide outsourced accounts receivable for all or selected tasks. A clear handover process is important so invoice approvals, customer communication and exceptions remain controlled.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do accounts receivable services include debt collection?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Routine reminders and follow-up can be included in the bookkeeping scope. Formal debt recovery, legal enforcement and disputed-debt work may require a separate provider or legal advice.
      </p>
    ),
  },
  {
    key: "4",
    label: "How often should accounts receivable be reviewed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The appropriate frequency depends on invoice volume, payment terms and the business. Many businesses benefit from regular review so unpaid invoices and allocation issues are identified promptly.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can you help if my customer balances are already messy?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can review receivables records, reconcile customer accounts and identify discrepancies. If the broader bookkeeping file needs historical correction, a bookkeeping clean-up may need to be scoped separately.
      </p>
    ),
  },
];

/**
 * AccountsReceivablePage Component
 * ================================
 * Route: /services/bookkeeping/accounts-receivable
 * Pillar 4.6: Accounts Receivable Services (Page 7 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AccountsReceivablePage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: accountsReceivableFaqs.map((faq) => ({
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
        title="Accounts Receivable Services for Australian Businesses"
        subtitle="Customer Invoicing, Debtor Management, Allocation & Cash-Flow Visibility"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Keeping on top of customer invoices and outstanding balances is essential for reliable cash flow, but accounts receivable can become time-consuming as a business grows. Financially Up provides accounts receivable services that help businesses maintain accurate customer records, issue and track invoices, monitor overdue balances and keep receivables organized.
            </span>
            <span className="block mt-2">
              Our service is suited to business owners who want consistent accounts receivable support without managing every administrative step internally. The scope can be adjusted around your existing systems, approval processes and customer relationships.
            </span>
          </span>
        }
        parentService={{
          label: "Bookkeeping Hub",
          href: "/services/bookkeeping",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 4.6 • Incoming Receivables Management"
        highlights={[
          "Timely Sales Invoicing & Dispatch",
          "Accurate Debtor Receipt Allocation",
          "Actionable Aged Receivables Visibility",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Bookkeeping Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What Are Accounts Receivable Services? */}
      <WhatAreAccountsReceivableServices />

      {/* 2. Who May Benefit from Outsourced Accounts Receivable? */}
      <WhoMayBenefitAccountsReceivable />

      {/* 3. What Can Financially Up Help With? */}
      <WhatFinanciallyUpCanHelpWithAR />

      {/* 4. Accurate Records Matter & Cash-Flow Visibility */}
      <AccurateRecordsAndCashFlowVisibility />

      {/* 5. How the Accounts Receivable Process Works */}
      <HowARProcessWorks />

      {/* 6. Information We May Need From You */}
      <InformationNeededAR />

      {/* 7. Why Choose Financially Up */}
      <WhyChooseFinanciallyUpAR />

      {/* 8. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about outsourced accounts receivable, payment allocation, debtor follow-ups and ledger clean-up with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Accounts Receivable Frequently Asked Questions"
        items={accountsReceivableFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If customer invoicing and debtor follow-up are taking too much time or your receivables ledger needs more structure, Financially Up can help. Book an appointment to discuss your current process, software, outstanding balances and the accounts receivable support that would suit your business."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore All Bookkeeping Services"
        secondaryButtonHref="/services/bookkeeping"
      />

      {/* 10. Related Bookkeeping Services Ribbon */}
      <RelatedBookkeepingRibbon currentSlug="accounts-receivable" />
    </main>
  );
}
