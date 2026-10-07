import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatXeroBookkeepingInvolves from "./components/WhatXeroBookkeepingInvolves";
import WhoNeedsXeroBookkeeper from "./components/WhoNeedsXeroBookkeeper";
import BankReconciliationAndGstRecords from "./components/BankReconciliationAndGstRecords";
import XeroCleanUpAndOngoingSupport from "./components/XeroCleanUpAndOngoingSupport";
import HowFinanciallyUpSupportsXero from "./components/HowFinanciallyUpSupportsXero";
import WhatInformationNeededXero from "./components/WhatInformationNeededXero";
import WhyChooseFinanciallyUpXero from "./components/WhyChooseFinanciallyUpXero";
import RelatedBookkeepingRibbon from "../components/RelatedBookkeepingRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2 of Bookkeeping)
 */
export const metadata = {
  title: "Xero Bookkeeping Services Australia | Financially Up",
  description:
    "Xero bookkeeping services for Australian businesses, including reconciliations, coding, clean-up and ongoing support for accurate cloud-based records.",
  keywords: [
    "Xero bookkeeping services",
    "Xero bookkeeper Australia",
    "Xero bank reconciliation",
    "Xero bookkeeping clean up",
    "outsourced Xero bookkeeping",
    "Xero certified bookkeeper",
    "cloud bookkeeping services Australia",
    "Xero file cleanup",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bookkeeping/xero-bookkeeping/",
  },
  openGraph: {
    title: "Xero Bookkeeping Services Australia | Financially Up",
    description:
      "Xero bookkeeping services for Australian businesses, including reconciliations, coding, clean-up and ongoing support for accurate cloud-based records.",
    url: "https://financiallyup.com.au/services/bookkeeping/xero-bookkeeping/",
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
  { label: "Xero Bookkeeping" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const xeroBookkeepingFaqs = [
  {
    key: "1",
    label: "What does a Xero bookkeeper do?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A Xero bookkeeper maintains and reviews business records in Xero. Depending on scope, this can include transaction coding, bank reconciliation, clean-up and preparation of records for compliance or accounting work.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can you fix a messy Xero file?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Often, yes. The file needs to be reviewed first so the extent of unreconciled transactions, coding issues, historical balances and missing documents can be understood before the work is scoped.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does Xero automatically make my bookkeeping correct?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Software can improve workflow, but transactions still need appropriate coding, supporting records and review. Imported bank data or automation does not determine the correct accounting or tax treatment in every case.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you do my BAS from Xero?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        BAS preparation and lodgement may be provided separately where required. The bookkeeping file needs to contain adequate records to support the figures reported.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can Financially Up provide outsourced Xero bookkeeping?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Ongoing Xero bookkeeping can be provided remotely for businesses across Australia, with the exact frequency and tasks agreed according to your needs.
      </p>
    ),
  },
];

/**
 * XeroBookkeepingPage Component
 * =============================
 * Route: /services/bookkeeping/xero-bookkeeping
 * Pillar 4.1: Xero Bookkeeping Services (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function XeroBookkeepingPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: xeroBookkeepingFaqs.map((faq) => ({
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
        title="Xero Bookkeeping Services"
        subtitle="Certified Cloud Bookkeeping, Reconciliations & File Maintenance Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Xero bookkeeping services help businesses keep day-to-day financial records organised inside Xero so the file can be used confidently for reporting, BAS preparation and year-end accounting. Financially Up supports businesses that already use Xero, are moving to a more structured bookkeeping process, or need help cleaning up an existing file.
            </span>
            <span className="block mt-2">
              Our work is focused on bookkeeping and accounting support. The right setup, workflow and reporting frequency depends on the business, its transaction volume and the records it needs to maintain.
            </span>
          </span>
        }
        parentService={{
          label: "Bookkeeping Hub",
          href: "/services/bookkeeping",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 4.1 • Xero Certified Cloud Bookkeeping"
        highlights={[
          "Xero Certified Bookkeeping Professionals",
          "100% Cloud-Based Digital Workflows",
          "Seamless Integration with BAS & Tax",
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

      {/* 1. What Does Xero Bookkeeping Involve? */}
      <WhatXeroBookkeepingInvolves />

      {/* 2. Who May Need a Xero Bookkeeper? */}
      <WhoNeedsXeroBookkeeper />

      {/* 3. Bank Reconciliation and Transaction Coding + GST Records */}
      <BankReconciliationAndGstRecords />

      {/* 4. Clean-up of an Existing Xero File + Ongoing Support */}
      <XeroCleanUpAndOngoingSupport />

      {/* 5. How Financially Up Can Help with Xero Bookkeeping */}
      <HowFinanciallyUpSupportsXero />

      {/* 6. What Information May Be Needed? */}
      <WhatInformationNeededXero />

      {/* 7. Why Choose Financially Up? */}
      <WhyChooseFinanciallyUpXero />

      {/* 8. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about Xero bookkeeping, file clean-up, bank reconciliations and outsourced workflows with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Xero Bookkeeping Frequently Asked Questions"
        items={xeroBookkeepingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If you need help maintaining, cleaning up or outsourcing your Xero bookkeeping, book an appointment with Financially Up. We can review how the file is being used, identify the main bookkeeping issues and discuss an appropriate ongoing scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore All Bookkeeping Services"
        secondaryButtonHref="/services/bookkeeping"
      />

      {/* 10. Related Bookkeeping Services Ribbon */}
      <RelatedBookkeepingRibbon currentSlug="xero-bookkeeping" />
    </main>
  );
}
