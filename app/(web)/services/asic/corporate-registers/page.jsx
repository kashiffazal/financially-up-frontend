import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatRecordsCompanyKeepsAndShareRegister from "./components/WhatRecordsCompanyKeepsAndShareRegister";
import WhyRegisterMaintenanceMattersAndCommonProblems from "./components/WhyRegisterMaintenanceMattersAndCommonProblems";
import WhatFinanciallyUpMaintainsAndReconstruction from "./components/WhatFinanciallyUpMaintainsAndReconstruction";
import CorporateRegistersRelatedRibbon from "./components/CorporateRegistersRelatedRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 10 / Pillar 7.9)
 */
export const metadata = {
  title: "Company Registers Australia & Corporate Record Maintenance | Financially Up",
  description:
    "Financially Up helps maintain company registers, shareholder records, resolutions and corporate records so company information stays organized and consistent.",
  keywords: [
    "company registers Australia",
    "corporate record maintenance",
    "register of members Australia",
    "share register maintenance ASIC",
    "reconstruct company register",
    "statutory company records",
    "proprietary company registers",
    "beneficial ownership register",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/corporate-registers/",
  },
  openGraph: {
    title: "Company Registers Australia & Corporate Record Maintenance | Financially Up",
    description:
      "Financially Up helps maintain company registers, shareholder records, resolutions and corporate records so company information stays organized and consistent.",
    url: "https://financiallyup.com.au/services/asic/corporate-registers/",
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
  { label: "Corporate Registers" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 10)
 */
const corporateRegistersFaqs = [
  {
    key: "1",
    label: "Is the ASIC register the same as the company’s own register?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. ASIC maintains the public companies register, but companies also have their own statutory and corporate records. For example, companies with members must maintain their own register of members.
      </p>
    ),
  },
  {
    key: "2",
    label: "Who is responsible for keeping company records?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Company officeholders are responsible for ensuring the company keeps required records. An accountant or other service provider can assist with maintenance and storage, but the directors&apos; responsibilities remain.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can company registers be kept electronically?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Company records can be kept digitally, provided the company can meet the applicable record-keeping and access requirements. ASIC notes that records kept electronically should be capable of being reproduced in hard copy.
      </p>
    ),
  },
  {
    key: "4",
    label: "What if our share register does not match ASIC?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The reason for the mismatch should be investigated before making changes. It may reflect an unlodged share change, an internal record-keeping error or an older transaction that needs supporting evidence. Financially Up can help review the available information and identify the next steps.
      </p>
    ),
  },
];

/**
 * CorporateRegistersPage Component
 * ================================
 * Route: /services/asic/corporate-registers
 * Pillar 7.9: Company Registers Australia & Corporate Record Maintenance (Page 10 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CorporateRegistersPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: corporateRegistersFaqs.map((faq) => ({
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
        title="Company Registers Australia & Corporate Record Maintenance"
        subtitle="Register of Members, Shareholder Records, Board Resolutions & Statutory Governance Records"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Company registers are the internal records that document key information about a company, its members and important corporate decisions. Keeping them current is separate from updating ASIC. A company can have accurate information on the public ASIC register but still have incomplete internal records - or the reverse. Financially Up can help maintain and organize company records so the internal register and ASIC information are consistent.
            </span>
            <span className="block mt-2">
              A company register service can be particularly useful for Australian owner-managed companies, family groups, growing businesses and companies that have changed accountants or advisers and discovered gaps in older records. The aim is not to create documents that never existed, but to organize the evidence available, identify inconsistencies and keep future records in a more reliable form.
            </span>
          </span>
        }
        parentService={{
          label: "ASIC Compliance Hub",
          href: "/services/asic",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 7.9 • Corporate Secretarial & Governance"
        highlights={[
          "Register of Members Management",
          "Internal Records & ASIC Alignment Checks",
          "Historical Record Reconstruction",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Corporate Experience" },
          { value: "Corp Act", label: "Compliant Records" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What records should a company keep & What is included in a share register */}
      <WhatRecordsCompanyKeepsAndShareRegister />

      {/* 2. Why company register maintenance matters & Common problems with records */}
      <WhyRegisterMaintenanceMattersAndCommonProblems />

      {/* 3. What Financially Up can help maintain, Reconstruction & Ongoing Management */}
      <WhatFinanciallyUpMaintainsAndReconstruction />

      {/* 4. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about statutory registers, director responsibilities, electronic corporate records, and resolving discrepancies with ASIC."
        image="/images/services/faq.webp"
        imageAlt="Corporate Registers Frequently Asked Questions"
        items={corporateRegistersFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 5. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If your company register is incomplete, outdated or inconsistent with ASIC, book an appointment with Financially Up to discuss a company register maintenance or reconstruction service."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ASIC Compliance Hub"
        secondaryButtonHref="/services/asic"
      />

      {/* 6. Related Service Ribbon linking back to Registered Agent */}
      <CorporateRegistersRelatedRibbon />
    </main>
  );
}
