import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenDoesCompanyChangeDirector from "./components/WhenDoesCompanyChangeDirector";
import RemovingDirectorAnd28DayPeriod from "./components/RemovingDirectorAnd28DayPeriod";
import WhatInformationNeededAndConnectedChanges from "./components/WhatInformationNeededAndConnectedChanges";
import HowFinanciallyUpHelpsDirectorsAndWhyChoose from "./components/HowFinanciallyUpHelpsDirectorsAndWhyChoose";
import DirectorChangesRelatedRibbon from "./components/DirectorChangesRelatedRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6 / Pillar 7.5)
 */
export const metadata = {
  title: "Change Director ASIC | Director Changes | Financially Up",
  description:
    "Change director details with ASIC correctly and on time. Financially Up assists with director appointments, cessations, records and related company updates.",
  keywords: [
    "change director ASIC",
    "director appointment ASIC",
    "director resignation ASIC",
    "remove company director Australia",
    "director ID requirement",
    "ASIC Form 484 director change",
    "sole director resignation Australia",
    "ASIC officeholder updates",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/director-changes/",
  },
  openGraph: {
    title: "Change Director ASIC | Director Changes | Financially Up",
    description:
      "Change director details with ASIC correctly and on time. Financially Up assists with director appointments, cessations, records and related company updates.",
    url: "https://financiallyup.com.au/services/asic/director-changes/",
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
  { label: "Director Changes" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const directorChangesFaqs = [
  {
    key: "1",
    label: "How quickly must a company notify ASIC of a director change?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ASIC states that appointments, resignations and retirements of company officeholders generally need to be notified within 28 days. Late notification can lead to late fees and, for director cessations, can affect the date recorded on the register.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does a new director need a director ID before appointment?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. ASIC states that a person must apply for a director ID before becoming a company director. Director IDs are issued by Australian Business Registry Services.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can the only director of a company resign?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A sole director cannot resign or retire if doing so would leave the company without a director. Another director generally needs to be appointed or the company may need to consider an appropriate closure process.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up remove a director if there is a shareholder dispute?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up can assist with routine ASIC administration where the company has validly made the change. A contested removal or dispute about governance, resolutions or director rights may require legal advice before any ASIC update is lodged.
      </p>
    ),
  },
];

/**
 * DirectorChangesPage Component
 * ==============================
 * Route: /services/asic/director-changes
 * Pillar 7.5: Change Director ASIC (Page 6 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function DirectorChangesPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: directorChangesFaqs.map((faq) => ({
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
        title="Change Director ASIC"
        subtitle="Director Appointments, Resignations & Statutory ASIC Lodgements Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              When a company appoints a director, a director resigns or retires, or an officeholder change needs to be recorded, the company must update ASIC correctly and within the required timeframe. A director-change service helps make sure the corporate records, effective dates and ASIC notification are handled consistently.
            </span>
            <span className="block mt-2">
              Financially Up can assist with routine director appointments and cessations where the company has made the required decision and supporting records are available. This service focuses on company administration and ASIC updates. It does not replace legal advice about disputed removals, director duties, shareholder conflicts or the validity of corporate resolutions.
            </span>
          </span>
        }
        parentService={{
          label: "ASIC Compliance Hub",
          href: "/services/asic",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 7.5 • Corporate Secretarial & Governance"
        highlights={[
          "28-Day Cessation Override Protection",
          "Director ID Verification (ABRS)",
          "Written Consent & Minute Compliance",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Corporate Experience" },
          { value: "28 Days", label: "Statutory Notification" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. When Does a Company Need to Change Director & Adding or Appointing */}
      <WhenDoesCompanyChangeDirector />

      {/* 2. Removing a Director, Sole Director Restriction & 28-day Date Override Rule */}
      <RemovingDirectorAnd28DayPeriod />

      {/* 3. Information Needed & Connected Company Changes */}
      <WhatInformationNeededAndConnectedChanges />

      {/* 4. How Financially Up Can Help & Records to Have Ready */}
      <HowFinanciallyUpHelpsDirectorsAndWhyChoose />

      {/* 5. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about director notification deadlines, mandatory Director IDs, sole director resignation rules, and contested removals."
        image="/images/services/faq.webp"
        imageAlt="Change Director Frequently Asked Questions"
        items={directorChangesFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If your company needs to appoint, cease or update a director, book an appointment with Financially Up to review the change, supporting records and ASIC notification requirements."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ASIC Compliance Hub"
        secondaryButtonHref="/services/asic"
      />

      {/* 7. Related Service Ribbon linking back to Form 484 */}
      <DirectorChangesRelatedRibbon />
    </main>
  );
}
