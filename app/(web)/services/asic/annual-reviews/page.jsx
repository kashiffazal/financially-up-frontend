import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatHappensDuringAnnualReview from "./components/WhatHappensDuringAnnualReview";
import WhenAnnualReviewHelpsAndScope from "./components/WhenAnnualReviewHelpsAndScope";
import KeepCompanyRecordsCurrentAndWhyChoose from "./components/KeepCompanyRecordsCurrentAndWhyChoose";
import AnnualReviewsRelatedRibbon from "./components/AnnualReviewsRelatedRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 9 / Pillar 7.8)
 */
export const metadata = {
  title: "ASIC Annual Review Service for Companies | Financially Up",
  description:
    "Financially Up helps companies manage ASIC annual reviews, annual statements, company-detail checks, review fees and solvency-resolution requirements.",
  keywords: [
    "ASIC annual review",
    "company annual review ASIC",
    "ASIC annual statement",
    "solvency resolution Australia",
    "ASIC review fee due date",
    "annual company review service",
    "ASIC corporate secretarial",
    "positive solvency declaration",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/annual-reviews/",
  },
  openGraph: {
    title: "ASIC Annual Review Service for Companies | Financially Up",
    description:
      "Financially Up helps companies manage ASIC annual reviews, annual statements, company-detail checks, review fees and solvency-resolution requirements.",
    url: "https://financiallyup.com.au/services/asic/annual-reviews/",
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
  { label: "Annual Reviews" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 9)
 */
const annualReviewFaqs = [
  {
    key: "1",
    label: "When is a company’s ASIC annual review date?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For most companies, the annual review date is the anniversary of the company&apos;s registration. ASIC usually sends the annual statement shortly after that date.
      </p>
    ),
  },
  {
    key: "2",
    label: "What do I need to do when the annual statement arrives?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You generally need to pay the annual review fee, check the company details and update them where required, and deal with the solvency-resolution requirement. The exact steps can vary depending on the company&apos;s circumstances.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need to lodge a positive solvency resolution with ASIC?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, no. The company keeps its own record of a positive solvency resolution. ASIC notification is required in specified situations, including a negative resolution or failure to pass the required resolution within the relevant period.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I wait until the annual review to update company details?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Company details should be updated when the underlying change occurs. ASIC generally requires changes to company details to be notified within 28 days.
      </p>
    ),
  },
];

/**
 * AnnualReviewsPage Component
 * ===========================
 * Route: /services/asic/annual-reviews
 * Pillar 7.8: ASIC Annual Review Service (Page 9 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AnnualReviewsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: annualReviewFaqs.map((faq) => ({
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
        title="ASIC Annual Review Service"
        subtitle="Annual Statement Verification, Solvency Resolutions & Fee Due Date Tracking Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An ASIC annual review is the yearly compliance process that follows a company’s annual review date, usually the anniversary of its registration. ASIC issues an annual statement showing the company details on the register and an invoice for the annual review fee. Directors then need to review the information, deal with any required updates and address the company’s solvency-resolution obligation.
            </span>
            <span className="block mt-2">
              Financially Up can help manage the practical steps around the company annual review ASIC process, including reviewing the annual statement, identifying outdated company details and helping with relevant ASIC updates. The company and its directors remain responsible for meeting their legal obligations, even where an accountant or registered agent assists with administration.
            </span>
          </span>
        }
        parentService={{
          label: "ASIC Compliance Hub",
          href: "/services/asic",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 7.8 • Corporate Secretarial & Governance"
        highlights={[
          "3 Core Annual Review Obligations",
          "Solvency Resolution Record Keeping",
          "2-Month Review Fee Due Date Alert",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Corporate Experience" },
          { value: "2 Months", label: "Solvency Window" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What Happens During an ASIC Annual Review (3 Core Steps) */}
      <WhatHappensDuringAnnualReview />

      {/* 2. When an Annual Review Service Helps & Scope of Assistance */}
      <WhenAnnualReviewHelpsAndScope />

      {/* 3. Keep Company Records Current & Why Choose Financially Up */}
      <KeepCompanyRecordsCurrentAndWhyChoose />

      {/* 4. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about annual review dates, annual statement actions, positive solvency resolutions, and the 28-day update rule."
        image="/images/services/faq.webp"
        imageAlt="ASIC Annual Review Frequently Asked Questions"
        items={annualReviewFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 5. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If your company’s annual review is due or you need help checking an ASIC annual statement, book an appointment with Financially Up."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ASIC Compliance Hub"
        secondaryButtonHref="/services/asic"
      />

      {/* 6. Related Service Ribbon linking back to Registered Agent */}
      <AnnualReviewsRelatedRibbon />
    </main>
  );
}
