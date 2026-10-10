import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsIncludedInSmsfAdministration from "./components/WhatIsIncludedInSmsfAdministration";
import CommonAdministrationTasksDuringYear from "./components/CommonAdministrationTasksDuringYear";
import TrusteeRecordRetentionRules from "./components/TrusteeRecordRetentionRules";
import AnnualAuditAndLodgementWorkflow from "./components/AnnualAuditAndLodgementWorkflow";
import TrusteeResponsibilityAndWhyChoose from "./components/TrusteeResponsibilityAndWhyChoose";
import RelatedSmsfRibbon from "../components/RelatedSmsfRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6 of 9th Pillar SMSF.docx)
 */
export const metadata = {
  title: "SMSF Administration Services | Financially Up",
  description:
    "SMSF administration services for records, transaction processing, annual compliance coordination and audit preparation. Practical support for trustees Australia-wide.",
  keywords: [
    "SMSF administration",
    "SMSF administrator Australia",
    "SMSF record keeping",
    "catch up SMSF administration",
    "SMSF member reporting",
    "SMSF bookkeeping",
    "self managed super fund administration",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/smsf/administration/",
  },
  openGraph: {
    title: "SMSF Administration Services | Financially Up",
    description:
      "SMSF administration services for records, transaction processing, annual compliance coordination and audit preparation. Practical support for trustees Australia-wide.",
    url: "https://financiallyup.com.au/services/smsf/administration/",
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
  { label: "SMSF Administration" },
];

/**
 * 6 Quick Specifications for SMSF Administration
 */
const smsfAdministrationQuickSpecs = [
  {
    icon: "file",
    label: "Service Modes",
    value: "Ongoing routine processing and catch-up administration for backlogs",
  },
  {
    icon: "clock",
    label: "Processing Cadence",
    value: "Periodic updates tailored to portfolio velocity and complex assets",
  },
  {
    icon: "calendar",
    label: "Retention Baselines",
    value: "5 years for accounting records; 10 years for trustee governance files",
  },
  {
    icon: "team",
    label: "Member Tracking",
    value: "Contributions categorization and retirement-phase pension drawdowns",
  },
  {
    icon: "safety",
    label: "Fiduciary Rule",
    value: "Trustees retain ultimate legal responsibility; no investment advice taken",
  },
  {
    icon: "audit",
    label: "Audit File Pack",
    value: "Full workpapers ready for approved auditor 45 days prior to SAR due date",
  },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const smsfAdministrationFaqs = [
  {
    key: "1",
    label: "Do I still need annual accounting if I use an SMSF administrator?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Administration keeps the records current, while annual accounting uses those records to prepare the financial statements, tax calculations and SMSF annual return. Both functions can be scoped together where appropriate.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can the same firm prepare the accounts and audit the SMSF?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The audit must be independent. Financially Up can prepare the accounts and audit file, but an approved SMSF auditor who satisfies the applicable independence requirements must perform the audit.
      </p>
    ),
  },
  {
    key: "3",
    label: "How often should SMSF administration be updated?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The appropriate frequency depends on the fund&apos;s activity and complexity. A straightforward fund may suit periodic updates, while active investments, property, borrowing or pensions may justify more frequent processing.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up take over overdue or incomplete SMSF records?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, subject to a review of the available records and the work required. Catch-up administration may involve reconciling earlier transactions, obtaining missing statements and preparing the records so accounting and audit work can proceed.
      </p>
    ),
  },
  {
    key: "5",
    label: "When must the SMSF auditor be appointed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Trustees must appoint an approved SMSF auditor at least 45 days before the SMSF annual return is due. Earlier preparation is advisable where records are incomplete or the fund has complex investments.
      </p>
    ),
  },
];

/**
 * SmsfAdministrationSubpage Component
 * ===================================
 * Route: /services/smsf/administration
 * Pillar 9.5: SMSF Administration Services for Trustees (Page 6 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SmsfAdministrationSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I still need annual accounting if I use an SMSF administrator?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Administration keeps the records current, while annual accounting uses those records to prepare the financial statements, tax calculations and SMSF annual return. Both functions can be scoped together where appropriate.",
        },
      },
      {
        "@type": "Question",
        name: "Can the same firm prepare the accounts and audit the SMSF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The audit must be independent. Financially Up can prepare the accounts and audit file, but an approved SMSF auditor who satisfies the applicable independence requirements must perform the audit.",
        },
      },
      {
        "@type": "Question",
        name: "How often should SMSF administration be updated?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The appropriate frequency depends on the fund's activity and complexity. A straightforward fund may suit periodic updates, while active investments, property, borrowing or pensions may justify more frequent processing.",
        },
      },
      {
        "@type": "Question",
        name: "Can Financially Up take over overdue or incomplete SMSF records?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, subject to a review of the available records and the work required. Catch-up administration may involve reconciling earlier transactions, obtaining missing statements and preparing the records so accounting and audit work can proceed.",
        },
      },
      {
        "@type": "Question",
        name: "When must the SMSF auditor be appointed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trustees must appoint an approved SMSF auditor at least 45 days before the SMSF annual return is due. Earlier preparation is advisable where records are incomplete or the fund has complex investments.",
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
        badge="SMSF Administration"
        title="SMSF Administration Services for Trustees"
        subtitle="SMSF administration is the ongoing record keeping and compliance coordination that keeps a self-managed super fund organized between year-end deadlines. It supports accurate transaction records, current member information, timely document collection and a clearer path to the annual accounts, independent audit and SMSF annual return."
        bodyText={
          <span>
            Financially Up Pty Ltd provides ongoing and catch-up SMSF administration services for trustees Australia-wide. Trustees remain legally responsible for the fund and continue to make its investment and benefit-payment decisions. Our role is to maintain the accounting and compliance workflow within the agreed scope.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Initial Consultation:
              </span>
              If your SMSF records are difficult to manage or have fallen behind, the first appointment can establish what is current, what is missing and whether ongoing or catch-up administration is appropriate.
            </div>
          </span>
        }
        parentService={{
          label: "SMSF Hub",
          href: "/services/smsf",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 9.5 • SMSF Practice"
        highlights={[
          "Ongoing Bank & Investment Reconciliation",
          "Member Contributions & Pension Drawdowns Tracking",
          "5-Year & 10-Year Document Retention Systems",
          "Seamless Independent Audit Handover",
        ]}
        quickSpecs={smsfAdministrationQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Admin Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is included in SMSF administration? & Administration vs accounting vs audit */}
      <WhatIsIncludedInSmsfAdministration />

      {/* 2. Common SMSF administration tasks during the year (9 tasks) */}
      <CommonAdministrationTasksDuringYear />

      {/* 3. What records must SMSF trustees retain? (5-year vs 10-year) */}
      <TrusteeRecordRetentionRules />

      {/* 4. How does the annual audit and lodgement workflow operate? & Complex assets */}
      <AnnualAuditAndLodgementWorkflow />

      {/* 5. Trustee responsibility, How Financially Up helps & Why choose us */}
      <TrusteeResponsibilityAndWhyChoose />

      {/* 6. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about ongoing administration vs annual accounting, auditor independence, processing frequency, and overdue backlogs."
        image="/images/services/faq.webp"
        imageAlt="SMSF Administration Frequently Asked Questions"
        items={smsfAdministrationFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="SMSF Administration Services"
        subtitle="Book an appointment to discuss the fund's records, investment activity, annual compliance workflow and the level of ongoing or catch-up support required."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore SMSF Services"
        secondaryButtonHref="/services/smsf"
      />

      {/* 8. Related SMSF Ribbon */}
      <RelatedSmsfRibbon currentSlug="administration" />
    </main>
  );
}
