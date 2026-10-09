import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatCompanyDetailsCanBeChanged from "./components/WhatCompanyDetailsCanBeChanged";
import LodgementTimeframesAndEffectiveDates from "./components/LodgementTimeframesAndEffectiveDates";
import SpecificChangesBreakdown from "./components/SpecificChangesBreakdown";
import Form484ServiceProcessAndInformation from "./components/Form484ServiceProcessAndInformation";
import TaxAccountingImpactAndWhyChoose from "./components/TaxAccountingImpactAndWhyChoose";
import CompanyChangesRelatedRibbon from "./components/CompanyChangesRelatedRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3 / Pillar 7.2)
 */
export const metadata = {
  title: "Change Company Details with ASIC | Financially Up",
  description:
    "Need to change company details with ASIC? Get help with addresses, officeholders, share information and other common company updates and lodgements.",
  keywords: [
    "change company details ASIC",
    "ASIC Form 484",
    "update company details Australia",
    "ASIC director change",
    "ASIC registered office change",
    "ASIC share change Form 484",
    "statutory 28 day ASIC lodgement",
    "ASIC corporate compliance",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/company-changes/",
  },
  openGraph: {
    title: "Change Company Details with ASIC | Financially Up",
    description:
      "Need to change company details with ASIC? Get help with addresses, officeholders, share information and other common company updates and lodgements.",
    url: "https://financiallyup.com.au/services/asic/company-changes/",
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
  { label: "Company Changes (Form 484)" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const companyChangesFaqs = [
  {
    key: "1",
    label: "What is ASIC Form 484 used for?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Form 484 is used to notify ASIC of various changes to company details, including addresses, officeholders and certain share, member, ultimate holding company and special-purpose status changes.
      </p>
    ),
  },
  {
    key: "2",
    label: "What is the deadline for ASIC company changes?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Many common company changes must be notified within 28 days after the change occurs. The applicable requirement should be checked for the specific event because not every ASIC filing follows the same timeframe.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I backdate a company change with ASIC?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The effective date reported to ASIC should be the date the event actually occurred and should be supported by the company’s records. If a past change was not notified on time, late fees or additional steps may apply. The underlying records should be reviewed rather than selecting a date simply to make the register appear current.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do I need a director ID before adding a new director?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. ASIC states that a person becoming a director must apply for a director ID before they are appointed.
      </p>
    ),
  },
  {
    key: "5",
    label: "Does changing shareholder details with ASIC complete the share transaction?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The ASIC notification records relevant company information, but the underlying share transaction and company registers must also be properly documented. Tax, duty or legal issues may need separate review.
      </p>
    ),
  },
];

/**
 * CompanyChangesPage Component
 * ============================
 * Route: /services/asic/company-changes
 * Pillar 7.2: Change Company Details (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CompanyChangesPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: companyChangesFaqs.map((faq) => ({
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
        title="Change Company Details with ASIC"
        subtitle="Form 484 Lodgements, Officeholder Updates & Statutory Company Changes Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              If your company’s registered details change, ASIC may need to be notified. Common updates include changes to company addresses, directors or secretaries, member details and share information. Many of these changes are lodged through the ASIC company-change process commonly associated with Form 484.
            </span>
            <span className="block mt-2">
              Financially Up provides a change company details service for directors who want the ASIC filing reviewed and lodged accurately against the company’s underlying records. The right process depends on what changed, when it changed and whether the event has wider tax, accounting or legal consequences.
            </span>
          </span>
        }
        parentService={{
          label: "ASIC Compliance Hub",
          href: "/services/asic",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 7.2 • Corporate Secretarial & Governance"
        highlights={[
          "Strict 28-Day Lodgement Window",
          "Form 484 Portal Submissions",
          "Reconciliation with Corporate Registers",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Corporate Experience" },
          { value: "28 Days", label: "Statutory Deadline" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What Company Details Can Be Changed With ASIC? */}
      <WhatCompanyDetailsCanBeChanged />

      {/* 2. How Long Do You Have to Update Company Details & Effective Dates */}
      <LodgementTimeframesAndEffectiveDates />

      {/* 3. Specific Changes: Directors, Addresses, Shares */}
      <SpecificChangesBreakdown />

      {/* 4. How Our ASIC Form 484 Service Works & Information Required */}
      <Form484ServiceProcessAndInformation />

      {/* 5. Company Changes Can Affect Tax/Accounting Records & Why Choose Us */}
      <TaxAccountingImpactAndWhyChoose />

      {/* 6. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about Form 484 lodgements, statutory 28-day notification deadlines, backdating rules, and director IDs."
        image="/images/services/faq.webp"
        imageAlt="Change Company Details Frequently Asked Questions"
        items={companyChangesFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If you need to update company details with ASIC, book an appointment with Financially Up to review the change, required records, lodgement timing and any related accounting or tax issues."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ASIC Compliance Hub"
        secondaryButtonHref="/services/asic"
      />

      {/* 8. Related Service Ribbon linking back to Pillar Hub */}
      <CompanyChangesRelatedRibbon />
    </main>
  );
}
