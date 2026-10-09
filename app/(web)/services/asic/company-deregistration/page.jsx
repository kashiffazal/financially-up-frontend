import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsVoluntaryDeregistrationAndCriteria from "./components/WhatIsVoluntaryDeregistrationAndCriteria";
import PreDeregistrationTasksAndVestingRisk from "./components/PreDeregistrationTasksAndVestingRisk";
import DeregistrationTaxObligationsAndProcess from "./components/DeregistrationTaxObligationsAndProcess";
import WhatFinanciallyUpHelpsAndWhyChoose from "./components/WhatFinanciallyUpHelpsAndWhyChoose";
import CompanyDeregistrationRelatedRibbon from "./components/CompanyDeregistrationRelatedRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5 / Pillar 7.4)
 */
export const metadata = {
  title: "Company Deregistration Australia | Financially Up",
  description:
    "Company deregistration support for eligible Australian companies. Review ASIC criteria, final obligations, records and the steps required before closing a company.",
  keywords: [
    "company deregistration",
    "deregister company Australia",
    "voluntary company deregistration ASIC",
    "Form 6010 deregistration",
    "closing a company Australia",
    "ASIC deregistration criteria",
    "company asset vesting ASIC",
    "solvent company closure",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/company-deregistration/",
  },
  openGraph: {
    title: "Company Deregistration Australia | Financially Up",
    description:
      "Company deregistration support for eligible Australian companies. Review ASIC criteria, final obligations, records and the steps required before closing a company.",
    url: "https://financiallyup.com.au/services/asic/company-deregistration/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking back through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ASIC Compliance", href: "/services/asic" },
  { label: "Company Deregistration" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const deregistrationFaqs = [
  {
    key: "1",
    label: "What are the main requirements for voluntary company deregistration?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ASIC currently requires all members to agree, the company to have stopped carrying on business, assets worth less than $1,000, no outstanding liabilities, no legal proceedings, and all ASIC fees and penalties paid. The company&apos;s actual facts should be checked before applying.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I deregister a company that still owes money?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Voluntary deregistration requires the company to have no outstanding liabilities. If debts remain, the company may need another closure pathway and professional advice should be obtained.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I deregister a company that still owns assets?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ASIC requires assets to be worth less than $1,000 for voluntary deregistration, but it also recommends dealing with company assets before deregistration. Property left in the company can vest in ASIC or the Commonwealth after deregistration.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does deregistration cancel the company's tax obligations?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Outstanding tax returns, BAS, registrations or other tax matters should be reviewed separately. The required final steps depend on the company&apos;s activity and tax history.
      </p>
    ),
  },
];

/**
 * CompanyDeregistrationPage Component
 * ==================================
 * Route: /services/asic/company-deregistration
 * Pillar 7.4: Company Deregistration Australia (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CompanyDeregistrationPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: deregistrationFaqs.map((faq) => ({
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
        title="Company Deregistration Australia"
        subtitle="Voluntary Deregistration Support, Due Diligence & Statutory Closure Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Closing a company with ASIC involves more than lodging a single form. If a company is no longer operating, voluntary company deregistration can be a practical way to bring the entity to an end without continuing to incur annual review fees, accounting costs and corporate compliance obligations.
            </span>
            <span className="block mt-2">
              Financially Up assists company directors and business owners with the steps required before deregistering a company. We review whether the company appears to meet ASIC’s deregistration criteria, help identify outstanding tax, accounting or administrative matters, and guide the process so the company is closed with its records in order.
            </span>
          </span>
        }
        parentService={{
          label: "ASIC Compliance Hub",
          href: "/services/asic",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 7.4 • Corporate Secretarial & Governance"
        highlights={[
          "6 ASIC Statutory Criteria Audit",
          "Asset Vesting Risk Prevention",
          "Final Tax & ATO Account Clearances",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Corporate Experience" },
          { value: "2 Months", label: "Notice Period" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is Voluntary Company Deregistration & Criteria? */}
      <WhatIsVoluntaryDeregistrationAndCriteria />

      {/* 2. What Needs to Happen Before Deregistration & Asset Vesting Risks */}
      <PreDeregistrationTasksAndVestingRisk />

      {/* 3. Deregistration Tax Obligations, Procedural Timelines & Ineligibility Pathways */}
      <DeregistrationTaxObligationsAndProcess />

      {/* 4. What Financially Up Can Help With & Records to Prepare */}
      <WhatFinanciallyUpHelpsAndWhyChoose />

      {/* 5. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about voluntary deregistration conditions, liabilities, asset vesting in ASIC, and remaining tax returns."
        image="/images/services/faq.webp"
        imageAlt="Company Deregistration Frequently Asked Questions"
        items={deregistrationFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If your company has stopped trading and you want to close it properly, book an appointment with Financially Up to review eligibility, outstanding obligations and the practical steps before deregistration."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ASIC Compliance Hub"
        secondaryButtonHref="/services/asic"
      />

      {/* 7. Related Service Ribbon linking back to Pillar Hub */}
      <CompanyDeregistrationRelatedRibbon />
    </main>
  );
}
