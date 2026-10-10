import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatDoesSmsfAuditCover from "./components/WhatDoesSmsfAuditCover";
import WhatIsIncludedInAuditPreparation from "./components/WhatIsIncludedInAuditPreparation";
import HowFinanciallyUpCoordinatesAudit from "./components/HowFinanciallyUpCoordinatesAudit";
import CommonAuditDelaysAndAuditFindings from "./components/CommonAuditDelaysAndAuditFindings";
import WhyChooseFinanciallyUpAuditCoord from "./components/WhyChooseFinanciallyUpAuditCoord";
import RelatedSmsfRibbon from "../components/RelatedSmsfRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 7 of 9th Pillar SMSF.docx)
 */
export const metadata = {
  title: "SMSF Audit Preparation & Coordination | Financially Up",
  description:
    "SMSF audit coordination for annual compliance. Prepare records, liaise with an independent auditor and resolve audit queries before lodging your SMSF return.",
  keywords: [
    "SMSF audit",
    "SMSF audit preparation",
    "SMSF audit coordination",
    "approved SMSF auditor",
    "SMSF compliance audit",
    "SMSF annual audit Australia",
    "ASIC registered SMSF auditor",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/smsf/audit-coordination/",
  },
  openGraph: {
    title: "SMSF Audit Preparation & Coordination | Financially Up",
    description:
      "SMSF audit coordination for annual compliance. Prepare records, liaise with an independent auditor and resolve audit queries before lodging your SMSF return.",
    url: "https://financiallyup.com.au/services/smsf/audit-coordination/",
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
  { label: "SMSF Audit Coordination" },
];

/**
 * 6 Quick Specifications for SMSF Audit Coordination
 */
const smsfAuditQuickSpecs = [
  {
    icon: "audit",
    label: "Statutory Mandate",
    value: "Annual financial and SISA compliance audit required for all registered SMSFs",
  },
  {
    icon: "calendar",
    label: "Appointment Rule",
    value: "Auditor must be appointed at least 45 days before the SAR lodgement due date",
  },
  {
    icon: "safety",
    label: "Independence",
    value: "Conducted independently by an ASIC-approved auditor; accountant cannot audit own file",
  },
  {
    icon: "file",
    label: "Audit Workpapers",
    value: "7 verified schedules covering bank reconciliations, valuations, and member records",
  },
  {
    icon: "clock",
    label: "Sequencing Rule",
    value: "Audit report must be completed and signed prior to lodging the SMSF annual return",
  },
  {
    icon: "team",
    label: "Query Support",
    value: "Direct liaison with independent auditor to clarify accounting schedules and evidence",
  },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 7)
 */
const smsfAuditFaqs = [
  {
    key: "1",
    label: "Does Financially Up perform the independent SMSF audit?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Under this service, Financially Up prepares the accounts and coordinates the audit process. The statutory audit is completed by an approved SMSF auditor who satisfies the applicable independence requirements.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can the SMSF annual return be lodged before the audit is finished?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The financial and compliance audit must be completed before the SMSF annual return is lodged.
      </p>
    ),
  },
  {
    key: "3",
    label: "How early should I start SMSF audit preparation?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Trustees must appoint the approved auditor no later than 45 days before the annual return due date. In practice, starting earlier is sensible if the fund has property, related-party arrangements, complex investments or missing records.
      </p>
    ),
  },
  {
    key: "4",
    label: "What if our previous SMSF audit is still outstanding?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Outstanding audits and annual returns should be addressed promptly. The work required depends on which years are outstanding and what records remain available.
      </p>
    ),
  },
];

/**
 * SmsfAuditCoordinationSubpage Component
 * =====================================
 * Route: /services/smsf/audit-coordination
 * Pillar 9.6: SMSF Audit Preparation and Coordination (Page 7 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SmsfAuditCoordinationSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does Financially Up perform the independent SMSF audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Under this service, Financially Up prepares the accounts and coordinates the audit process. The statutory audit is completed by an approved SMSF auditor who satisfies the applicable independence requirements.",
        },
      },
      {
        "@type": "Question",
        name: "Can the SMSF annual return be lodged before the audit is finished?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The financial and compliance audit must be completed before the SMSF annual return is lodged.",
        },
      },
      {
        "@type": "Question",
        name: "How early should I start SMSF audit preparation?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Trustees must appoint the approved auditor no later than 45 days before the annual return due date. In practice, starting earlier is sensible if the fund has property, related-party arrangements, complex investments or missing records.",
        },
      },
      {
        "@type": "Question",
        name: "What if our previous SMSF audit is still outstanding?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Outstanding audits and annual returns should be addressed promptly. The work required depends on which years are outstanding and what records remain available.",
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
        badge="Audit Coordination"
        title="SMSF Audit Preparation and Coordination"
        subtitle="Every self-managed super fund must have an annual financial and compliance audit completed by an approved SMSF auditor before the fund lodges its SMSF annual return. SMSF audit coordination is the work of getting the fund records, financial statements and supporting evidence ready, responding to audit queries and keeping the accounting, audit and lodgement process moving in the right order."
        bodyText={
          <span>
            Financially Up can prepare the accounting records and audit file, coordinate with an independent approved SMSF auditor and assist trustees with accounting or tax matters raised during the process. The statutory audit is not included as work performed by Financially Up under this service; it must be completed by an appropriately registered auditor who satisfies the independence requirements.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Initial Consultation:
              </span>
              If your SMSF accounts are being prepared for year-end or you have an audit approaching, we can review what is ready, what is missing and what needs to happen before lodgement.
            </div>
          </span>
        }
        parentService={{
          label: "SMSF Hub",
          href: "/services/smsf",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 9.6 • SMSF Practice"
        highlights={[
          "Dual Scope: Financial & SISA Compliance Audit",
          "45-Day Statutory Lead Time Coordination",
          "7-Point Audit Workpaper Pack Assembled",
          "Prompt Query Resolution with ASIC Auditors",
        ]}
        quickSpecs={smsfAuditQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Audit Coordination Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What does an SMSF audit cover? & When should auditor be appointed? */}
      <WhatDoesSmsfAuditCover />

      {/* 2. What is included in SMSF audit preparation? (7 items) */}
      <WhatIsIncludedInAuditPreparation />

      {/* 3. How Financially Up coordinates the SMSF annual audit */}
      <HowFinanciallyUpCoordinatesAudit />

      {/* 4. Common causes of SMSF audit delays & What if auditor identifies issue? */}
      <CommonAuditDelaysAndAuditFindings />

      {/* 5. Why choose Financially Up for SMSF audit coordination? */}
      <WhyChooseFinanciallyUpAuditCoord />

      {/* 6. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about independent audit requirements, return lodgement sequences, appointment timeframes, and overdue prior audits."
        image="/images/services/faq.webp"
        imageAlt="SMSF Audit Coordination Frequently Asked Questions"
        items={smsfAuditFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="SMSF Audit Preparation & Coordination"
        subtitle="Need help preparing for your SMSF annual audit? Book an appointment with Financially Up to review the accounts, audit records and next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore SMSF Services"
        secondaryButtonHref="/services/smsf"
      />

      {/* 8. Related SMSF Ribbon */}
      <RelatedSmsfRibbon currentSlug="audit-coordination" />
    </main>
  );
}
