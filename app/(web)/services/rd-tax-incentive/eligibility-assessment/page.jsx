import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhoCanBeEligible from "./components/WhoCanBeEligible";
import WhatMakesActivityCoreRd from "./components/WhatMakesActivityCoreRd";
import WhenSupportingWorkIncluded from "./components/WhenSupportingWorkIncluded";
import ExpenditureAndRecordsAssessment from "./components/ExpenditureAndRecordsAssessment";
import PostReviewAndWhatToBring from "./components/PostReviewAndWhatToBring";
import WhyChooseFinanciallyUpRdEligibility from "./components/WhyChooseFinanciallyUpRdEligibility";
import RelatedServiceRibbon from "./components/RelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3 of 15th Pillar R&D Tax Incentive.docx)
 */
export const metadata = {
  title: "R&D Tax Incentive Eligibility Assessment | Financially Up",
  description:
    "Check whether your company and R&D activities may qualify. Financially Up reviews the entity, experiments, supporting work, records and proposed expenditure.",
  keywords: [
    "R&D tax incentive eligibility assessment",
    "eligible R&D entity",
    "core R&D activities",
    "supporting R&D activities",
    "R&D tax eligibility check",
    "AusIndustry advance finding",
    "contemporaneous R&D records",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/rd-tax-incentive/eligibility-assessment/",
  },
  openGraph: {
    title: "R&D Tax Incentive Eligibility Assessment | Financially Up",
    description:
      "Check whether your company and R&D activities may qualify. Financially Up reviews the entity, experiments, supporting work, records and proposed expenditure.",
    url: "https://financiallyup.com.au/services/rd-tax-incentive/eligibility-assessment/",
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
  { label: "R&D Tax Incentive", href: "/services/rd-tax-incentive" },
  { label: "Eligibility Assessment" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const rdEligibilityFaqs = [
  {
    key: "1",
    label: "Does building new software automatically qualify?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Software work must meet the same activity tests; ordinary development or a new feature
        does not automatically establish an eligible experiment.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can a company assess eligibility after the year ends?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can review work already done, but registration deadlines and the need for contemporaneous
        evidence still apply. A later review cannot create records of experiments that did not occur.
      </p>
    ),
  },
  {
    key: "3",
    label: "Are supporting activities enough on their own?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        They must be linked to eligible core R&D activities and may face additional tests. Supporting
        work alone does not establish eligibility.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does a positive eligibility review guarantee ATO acceptance?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The company self-assesses and the regulators may review registration, activities,
        expenditure and records. We explain the limits of the evidence and any unresolved issues.
      </p>
    ),
  },
];

/**
 * RdTaxEligibilityAssessmentPage Component
 * ========================================
 * Route: /services/rd-tax-incentive/eligibility-assessment
 * Pillar 15.2: R&D Tax Incentive Eligibility Assessment (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function RdTaxEligibilityAssessmentPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: rdEligibilityFaqs.map((faq) => ({
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
        title="R&D Tax Incentive Eligibility Assessment"
        subtitle="Rigorous Assessment of Claimant Entities, Core Experiments, Supporting Work & Contemporaneous Evidence"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An R&amp;D tax incentive eligibility assessment examines whether a company, its activities
              and its proposed expenditure may meet the Australian program&apos;s requirements. The right
              time to ask is before assuming that an innovative product or a large development budget
              qualifies. The assessment helps identify evidence gaps and decisions that need specialist
              review before registration or a tax claim.
            </span>
            <span className="block mt-2">
              Financially Up can help you organise the facts and assess the tax and accounting aspects
              within an agreed scope. We may involve or recommend appropriately qualified technical
              expertise where the science or technology requires it. Book an Appointment to describe the
              project, its uncertain outcome and the records created so far.
            </span>
          </span>
        }
        parentService={{
          label: "R&D Tax Incentive Hub",
          href: "/services/rd-tax-incentive",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 15.2 • Statutory Eligibility Review"
        highlights={[
          "Core vs Supporting Activity Review",
          "Entity Structure & Risk-Bearing Checks",
          "Registered Tax Agent #26234055",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "R&D Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. Who can be eligible? */}
      <WhoCanBeEligible />

      {/* 2. What makes an activity core R&D? */}
      <WhatMakesActivityCoreRd />

      {/* 3. When can supporting work be included? */}
      <WhenSupportingWorkIncluded />

      {/* 4. How do expenditure and records affect the assessment? */}
      <ExpenditureAndRecordsAssessment />

      {/* 5. What happens after the review? & What to bring to the first appointment */}
      <PostReviewAndWhatToBring />

      {/* 6. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpRdEligibility />

      {/* 7. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="R&D Tax Incentive Eligibility FAQs"
        subtitle="Common questions regarding software development, post-year-end assessments, supporting activities, and ATO reviews."
        image="/images/services/faq.webp"
        imageAlt="R&D Tax Incentive Eligibility FAQs"
        items={rdEligibilityFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Check the project before preparing a claim"
        title="Book an Appointment"
        subtitle="Book an Appointment with Financially Up to discuss the company, experimental work and records and agree the scope for an R&D tax incentive eligibility assessment."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore R&D Tax Incentive"
        secondaryButtonHref="/services/rd-tax-incentive"
      />

      {/* 9. Contextual Service Ribbon */}
      <RelatedServiceRibbon />
    </main>
  );
}
