import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBookkeepingRibbon from "../components/RelatedBookkeepingRibbon";

// Page Components
import WhatIsBankReconciliation from "./components/WhatIsBankReconciliation";
import WhoNeedsBankReconciliation from "./components/WhoNeedsBankReconciliation";
import WhatBankReconciliationIncludes from "./components/WhatBankReconciliationIncludes";
import BankReconTaxAndReporting from "./components/BankReconTaxAndReporting";
import BankReconciliationWorkflow from "./components/BankReconciliationWorkflow";
import InformationNeededBankRecon from "./components/InformationNeededBankRecon";
import WhyChooseFinanciallyUpBankRecon from "./components/WhyChooseFinanciallyUpBankRecon";

export const metadata = {
  title: "Bank Reconciliation Services Australia | Financially Up",
  description:
    "Keep business accounts accurate with bank reconciliation services that match bank activity to your bookkeeping records and identify discrepancies.",
  keywords: [
    "bank reconciliation services",
    "bank account reconciliation Australia",
    "reconcile business bank accounts",
    "bookkeeping reconciliation",
    "bank feed matching Xero",
    "credit card reconciliation",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bookkeeping/bank-reconciliation/",
  },
  openGraph: {
    title: "Bank Reconciliation Services Australia | Financially Up",
    description:
      "Keep business accounts accurate with bank reconciliation services that match bank activity to your bookkeeping records and identify discrepancies.",
    url: "https://financiallyup.com.au/services/bookkeeping/bank-reconciliation/",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Bank Reconciliation" },
];

export default function BankReconciliationPage() {
  const faqs = [
    {
      question: "How often should business bank accounts be reconciled?",
      answer:
        "It depends on transaction volume and how current you need your records to be. Many businesses reconcile regularly as part of monthly bookkeeping, while high-volume businesses may benefit from more frequent review.",
    },
    {
      question: "Can you reconcile several bank accounts and credit cards?",
      answer:
        "Yes. Multiple accounts can be included in the scope, provided the required statements, feeds and accounting access are available.",
    },
    {
      question: "What if my bank balance does not match the bookkeeping software?",
      answer:
        "The difference needs to be investigated. Common causes include missing transactions, duplicate entries, incorrect opening balances, transfers recorded incorrectly or transactions matched to the wrong item.",
    },
    {
      question: "Does bank reconciliation replace keeping invoices and receipts?",
      answer:
        "No. Reconciliation confirms that bookkeeping entries align with bank activity, but supporting records may still be required for tax, GST and business record-keeping purposes.",
    },
    {
      question: "Can you fix old unreconciled periods?",
      answer:
        "Yes, depending on the condition of the records. If there is a significant backlog or many historical errors, the work may be scoped as catch-up bookkeeping or bookkeeping clean-up.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema.org FAQ Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white dark:bg-neutral-900">
        {/* Hero Section */}
        <SubServiceHero
          parentService={{
            label: "Bookkeeping Hub",
            href: "/services/bookkeeping",
          }}
          breadcrumbs={breadcrumbs}
          badge="Bank Reconciliation Services"
          title="Bank Reconciliation Services for Accurate Business Books"
          subtitle="Compare accounting records with bank and credit-card statements to confirm money received and paid is recorded accurately."
          description={`Bank reconciliation services compare the transactions in your accounting records with the activity shown on your bank and credit-card statements. The aim is to confirm that money received and paid has been recorded correctly and to identify missing, duplicated or incorrectly allocated entries.

Financially Up provides bank account reconciliation services for businesses that want cleaner records, more reliable reporting and a consistent bookkeeping process. Reconciliation can be provided as a standalone task or as part of ongoing bookkeeping support.`}
          appointmentNote="We can review your current accounting file, the accounts that need reconciling, how far records are up to date and whether you need ongoing or catch-up reconciliation support."
          ctaText="Book an Appointment"
          ctaLink="/book-an-appointment"
        />

        {/* What is Bank Reconciliation & ATO Records */}
        <WhatIsBankReconciliation />

        {/* Who May Need Outsourced Bank Reconciliation */}
        <WhoNeedsBankReconciliation />

        {/* What Our Services Can Include */}
        <WhatBankReconciliationIncludes />

        {/* GST / Tax Records & Supporting Management Reporting */}
        <BankReconTaxAndReporting />

        {/* 4-Step Outsourcing Process */}
        <BankReconciliationWorkflow />

        {/* What Information Needed */}
        <InformationNeededBankRecon />

        {/* Why Choose Financially Up */}
        <WhyChooseFinanciallyUpBankRecon />

        {/* Related Bookkeeping Services Ribbon */}
        <RelatedBookkeepingRibbon currentSlug="bank-reconciliation" />

        {/* Frequently Asked Questions */}
        <FaqSection
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about business bank reconciliation services and account matching."
        />

        {/* Call to Action Banner */}
        <CallToActionBanner
          title="Book an Appointment"
          description="If your accounts are not reconciling, your bookkeeping is falling behind or you want a consistent monthly process, book an appointment with Financially Up. We can review the accounts involved, the condition of the records and the appropriate bank reconciliation service scope."
          buttonText="Book an Appointment"
          buttonLink="/book-an-appointment"
        />
      </main>
    </>
  );
}
