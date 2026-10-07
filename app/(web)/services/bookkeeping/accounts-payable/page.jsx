import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatAreAccountsPayableServices from "./components/WhatAreAccountsPayableServices";
import WhoMayBenefitAccountsPayable from "./components/WhoMayBenefitAccountsPayable";
import WhatAPSupportCanInclude from "./components/WhatAPSupportCanInclude";
import AccountsPayableBookkeepingAndBas from "./components/AccountsPayableBookkeepingAndBas";
import PracticalAPWorkflowAndInternalControls from "./components/PracticalAPWorkflowAndInternalControls";
import InformationNeededAP from "./components/InformationNeededAP";
import WhyChooseFinanciallyUpAP from "./components/WhyChooseFinanciallyUpAP";
import RelatedBookkeepingRibbon from "../components/RelatedBookkeepingRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6 of Bookkeeping)
 */
export const metadata = {
  title: "Accounts Payable Services Australia | Financially Up",
  description:
    "Outsource accounts payable support with Financially Up. Improve bill processing, supplier records, reconciliations and payment-workflow visibility.",
  keywords: [
    "accounts payable services",
    "accounts payable outsourcing Australia",
    "AP management services",
    "supplier bill processing",
    "supplier statement reconciliation",
    "outsourced accounts payable",
    "Xero accounts payable",
    "cloud bill approval",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bookkeeping/accounts-payable/",
  },
  openGraph: {
    title: "Accounts Payable Services Australia | Financially Up",
    description:
      "Outsource accounts payable support with Financially Up. Improve bill processing, supplier records, reconciliations and payment-workflow visibility.",
    url: "https://financiallyup.com.au/services/bookkeeping/accounts-payable/",
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
  { label: "Accounts Payable" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const accountsPayableFaqs = [
  {
    key: "1",
    label: "What is included in accounts payable services?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Depending on scope, services can include supplier-bill entry, coding, document matching, supplier-record maintenance, due-date tracking, payable reconciliation and preparation of information for client-approved payment workflows.
      </p>
    ),
  },
  {
    key: "2",
    label: "What is the difference between outsourced accounts payable and bookkeeping?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Accounts payable focuses on supplier bills and amounts owed. Bookkeeping is broader and may also include bank reconciliations, sales, receipts, payroll-related entries and other ledger activity.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can you approve or pay supplier bills for us?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Payment responsibilities depend on the agreed service and access controls. Financially Up does not assume unrestricted payment authority. Client approval and banking controls should be clearly defined.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can accounts payable outsourcing work with Xero?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Where Xero is used, AP processing can be integrated with the bookkeeping workflow and supplier records, subject to the agreed scope and system access.
      </p>
    ),
  },
  {
    key: "5",
    label: "Does accounts payable support include BAS lodgement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. AP processing can help maintain records relevant to GST, but BAS preparation and lodgement should be separately confirmed as part of the service scope.
      </p>
    ),
  },
];

/**
 * AccountsPayablePage Component
 * ==============================
 * Route: /services/bookkeeping/accounts-payable
 * Pillar 4.5: Accounts Payable Services (Page 6 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AccountsPayablePage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: accountsPayableFaqs.map((faq) => ({
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
        title="Accounts Payable Services"
        subtitle="Supplier Bill Processing, Due Date Tracking & Controlled Payment Workflows"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Accounts payable is the process of recording, reviewing and managing amounts a business owes to suppliers. Financially Up provides accounts payable services for businesses that want a more consistent way to process supplier bills, maintain payable records and keep upcoming obligations visible in their bookkeeping system.
            </span>
            <span className="block mt-2">
              For a growing business, accounts payable can become difficult to manage when invoices arrive through different channels, approvals are unclear or supplier balances no longer match the accounting records. Outsourced accounts payable can create a defined workflow while allowing business owners and managers to retain appropriate approval and payment controls.
            </span>
          </span>
        }
        parentService={{
          label: "Bookkeeping Hub",
          href: "/services/bookkeeping",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 4.5 • Outgoing Payables Management"
        highlights={[
          "Controlled Approval & Payment Workflows",
          "Supplier Statement Reconciliations",
          "Strict Separation of Duties & Controls",
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

      {/* 1. What Are Accounts Payable Services? */}
      <WhatAreAccountsPayableServices />

      {/* 2. Who May Benefit from Outsourced Accounts Payable? */}
      <WhoMayBenefitAccountsPayable />

      {/* 3. What Accounts Payable Support Can Include */}
      <WhatAPSupportCanInclude />

      {/* 4. Accounts Payable, Bookkeeping and BAS Support */}
      <AccountsPayableBookkeepingAndBas />

      {/* 5. A Practical Accounts Payable Workflow & Internal Controls */}
      <PracticalAPWorkflowAndInternalControls />

      {/* 6. What Information May Be Needed? */}
      <InformationNeededAP />

      {/* 7. Why Choose Financially Up */}
      <WhyChooseFinanciallyUpAP />

      {/* 8. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about outsourced accounts payable, internal approval controls, Xero integrations and BAS support with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Accounts Payable Frequently Asked Questions"
        items={accountsPayableFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Book an Appointment with Financially Up to discuss your current supplier-bill process, approval responsibilities, software and transaction volume. We can then define an accounts payable services scope that supports consistent processing while keeping appropriate client controls in place."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore All Bookkeeping Services"
        secondaryButtonHref="/services/bookkeeping"
      />

      {/* 10. Related Bookkeeping Services Ribbon */}
      <RelatedBookkeepingRibbon currentSlug="accounts-payable" />
    </main>
  );
}
