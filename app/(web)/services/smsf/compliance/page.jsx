import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatSmsfComplianceInvolves from "./components/WhatSmsfComplianceInvolves";
import KeyAreasReviewedInComplianceCheck from "./components/KeyAreasReviewedInComplianceCheck";
import InvestmentStrategyAndTrusteeDecisions from "./components/InvestmentStrategyAndTrusteeDecisions";
import RelatedPartyRulesAndHandlingBreaches from "./components/RelatedPartyRulesAndHandlingBreaches";
import ComplianceReviewDocumentsAndWhyChoose from "./components/ComplianceReviewDocumentsAndWhyChoose";
import RelatedSmsfRibbon from "../components/RelatedSmsfRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 8 of 9th Pillar SMSF.docx)
 */
export const metadata = {
  title: "SMSF Compliance Services Australia | Financially Up",
  description:
    "SMSF compliance support for trustees covering records, investment rules, annual obligations and issues identified before accounting, audit and lodgement.",
  keywords: [
    "SMSF compliance",
    "SMSF compliance review",
    "SMSF investment strategy",
    "sole purpose test SMSF",
    "SMSF in-house assets",
    "SMSF related party rules",
    "superannuation compliance Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/smsf/compliance/",
  },
  openGraph: {
    title: "SMSF Compliance Services Australia | Financially Up",
    description:
      "SMSF compliance support for trustees covering records, investment rules, annual obligations and issues identified before accounting, audit and lodgement.",
    url: "https://financiallyup.com.au/services/smsf/compliance/",
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
  { label: "SMSF Compliance" },
];

/**
 * 6 Quick Specifications for SMSF Compliance
 */
const smsfComplianceQuickSpecs = [
  {
    icon: "safety",
    label: "Statutory Rule",
    value: "Sole purpose test & legal separation between personal and super fund assets",
  },
  {
    icon: "lineChart",
    label: "Investment Policy",
    value: "Documented written strategy reviewing risk, liquidity, and insurance",
  },
  {
    icon: "team",
    label: "Arm's-Length Rule",
    value: "Commercial terms for related-party leases and statutory 5% in-house asset cap",
  },
  {
    icon: "clock",
    label: "Record Lifespan",
    value: "5 years for accounting ledgers; 10 years for trustee governance files",
  },
  {
    icon: "file",
    label: "Breach Rectification",
    value: "Early diagnostic review and ATO voluntary disclosure coordination",
  },
  {
    icon: "audit",
    label: "Audit Assurance",
    value: "Independent approved auditor appointed 45 days prior to SAR due date",
  },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 8)
 */
const smsfComplianceFaqs = [
  {
    key: "1",
    label: "Who is responsible for SMSF compliance?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The trustees are responsible for managing the SMSF and complying with superannuation and tax obligations. Engaging accountants, administrators or advisers does not transfer those trustee responsibilities.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does every SMSF need an annual audit?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. An approved SMSF auditor must audit the fund’s financial statements and compliance each income year before the SMSF annual return is lodged.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can Financially Up do an SMSF compliance review before year-end?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. A review can be useful when trustees are planning a transaction, have changed investments, are unsure about records or want to identify issues before annual accounting and audit.
      </p>
    ),
  },
  {
    key: "4",
    label: "What happens if my SMSF breaches a rule?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The consequences depend on the rule, facts and seriousness of the matter. An independent auditor may have reporting obligations, and some issues may require specialist advice or engagement with the ATO.
      </p>
    ),
  },
];

/**
 * SmsfComplianceSubpage Component
 * ===============================
 * Route: /services/smsf/compliance
 * Pillar 9.7: SMSF Compliance Services for Trustees (Page 8 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SmsfComplianceSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Who is responsible for SMSF compliance?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The trustees are responsible for managing the SMSF and complying with superannuation and tax obligations. Engaging accountants, administrators or advisers does not transfer those trustee responsibilities.",
        },
      },
      {
        "@type": "Question",
        name: "Does every SMSF need an annual audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. An approved SMSF auditor must audit the fund’s financial statements and compliance each income year before the SMSF annual return is lodged.",
        },
      },
      {
        "@type": "Question",
        name: "Can Financially Up do an SMSF compliance review before year-end?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. A review can be useful when trustees are planning a transaction, have changed investments, are unsure about records or want to identify issues before annual accounting and audit.",
        },
      },
      {
        "@type": "Question",
        name: "What happens if my SMSF breaches a rule?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The consequences depend on the rule, facts and seriousness of the matter. An independent auditor may have reporting obligations, and some issues may require specialist advice or engagement with the ATO.",
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
        badge="SMSF Compliance"
        title="SMSF Compliance Services for Trustees"
        subtitle="SMSF compliance means operating the fund in accordance with its trust deed, superannuation law and the reporting obligations that apply to self-managed super funds. Trustees are responsible for the fund’s decisions, even when accountants, administrators or advisers assist with the work."
        bodyText={
          <span>
            Financially Up provides SMSF compliance support by reviewing accounting records, identifying transactions or documentation that may need attention, helping trustees prepare for annual accounting and audit, and coordinating tax and reporting work within our scope. We do not replace the trustees’ legal responsibilities, an independent SMSF auditor or regulated financial product advice.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Initial Compliance Review:
              </span>
              If you are unsure whether your SMSF records or transactions are in order, an initial compliance review can help identify what should be checked before year-end, audit or lodgement.
            </div>
          </span>
        }
        parentService={{
          label: "SMSF Hub",
          href: "/services/smsf",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 9.7 • SMSF Practice"
        highlights={[
          "Sole Purpose & Asset Separation Checks",
          "Written Investment Strategy Documentation",
          "Related-Party & Arm's-Length Dealing Audit",
          "Proactive Discrepancy & Breach Rectification",
        ]}
        quickSpecs={smsfComplianceQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Compliance Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What does SMSF compliance involve? */}
      <WhatSmsfComplianceInvolves />

      {/* 2. Key areas reviewed in an SMSF compliance check (8 checkpoints) */}
      <KeyAreasReviewedInComplianceCheck />

      {/* 3. Investment strategy and trustee decisions */}
      <InvestmentStrategyAndTrusteeDecisions />

      {/* 4. Related-party & arm’s-length issues & What if a breach occurred? */}
      <RelatedPartyRulesAndHandlingBreaches />

      {/* 5. Documents that help with review & Why choose Financially Up */}
      <ComplianceReviewDocumentsAndWhyChoose />

      {/* 6. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about trustee responsibilities, mandatory annual audits, pre-year-end reviews, and managing rule breaches."
        image="/images/services/faq.webp"
        imageAlt="SMSF Compliance Frequently Asked Questions"
        items={smsfComplianceFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="SMSF Compliance Review"
        subtitle="If you want to check your SMSF’s accounting and compliance position before audit or lodgement, book an appointment with Financially Up to discuss the fund and the records available."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore SMSF Services"
        secondaryButtonHref="/services/smsf"
      />

      {/* 8. Related SMSF Ribbon */}
      <RelatedSmsfRibbon currentSlug="compliance" />
    </main>
  );
}
