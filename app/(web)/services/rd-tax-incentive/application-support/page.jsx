import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import TwoStageApplicationProcess from "./components/TwoStageApplicationProcess";
import PracticalRdWorkflow from "./components/PracticalRdWorkflow";
import WhatApplicationSupportIncludes from "./components/WhatApplicationSupportIncludes";
import RdRecordsAndApportionment from "./components/RdRecordsAndApportionment";
import KeyRulesAndDeadlines from "./components/KeyRulesAndDeadlines";
import HowFinanciallyUpHelpsApplication from "./components/HowFinanciallyUpHelpsApplication";
import WhyChooseFinanciallyUpAppSupport from "./components/WhyChooseFinanciallyUpAppSupport";
import RelatedServiceRibbon from "./components/RelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5 of 15th Pillar R&D Tax Incentive.docx)
 */
export const metadata = {
  title: "R&D Tax Incentive Application Support Australia | Financially Up",
  description:
    "R&D Tax Incentive application support for registration, records and claim preparation. Organize activity evidence, costs and deadlines with Financially Up.",
  keywords: [
    "R&D tax incentive application support",
    "AusIndustry R&D application",
    "R&D customer portal registration",
    "R&D registration support Australia",
    "R&D contemporaneous records",
    "overseas finding R&D",
    "R&D tax schedule ATO",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/rd-tax-incentive/application-support/",
  },
  openGraph: {
    title: "R&D Tax Incentive Application Support Australia | Financially Up",
    description:
      "R&D Tax Incentive application support for registration, records and claim preparation. Organize activity evidence, costs and deadlines with Financially Up.",
    url: "https://financiallyup.com.au/services/rd-tax-incentive/application-support/",
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
  { label: "Application Support" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const appSupportFaqs = [
  {
    key: "1",
    label: "When is an R&D Tax Incentive application due?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The standard registration deadline is 10 months after the end of the company’s income year in which
        the activities took place. Limited extension rules exist, but businesses should plan around the statutory deadline.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does registration mean the activities have been approved as eligible?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The program is self-assessed. Registration does not, by itself, confirm that the activities or
        expenditure meet every requirement, and claims may be reviewed.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need a registration number before claiming the R&D tax offset?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. The Department issues the number after registration, and it is entered in the R&D Tax
        Incentive schedule associated with the company tax return.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can a business claim R&D expenditure below $20,000?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Usually the company needs at least $20,000 of eligible notional deductions, but specific
        exceptions can apply, including certain expenditure to a registered research service provider and
        eligible CRC contributions.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can overseas R&D be included?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Potentially, but special requirements apply. An overseas finding is generally required and must
        be applied for before the relevant income year ends. It does not replace annual R&D registration.
      </p>
    ),
  },
];

/**
 * RdTaxApplicationSupportPage Component
 * =====================================
 * Route: /services/rd-tax-incentive/application-support
 * Pillar 15.4: R&D Tax Incentive Application Support (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function RdTaxApplicationSupportPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: appSupportFaqs.map((faq) => ({
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
        title="R&D Tax Incentive Application Support"
        subtitle="Customer Portal Registration, Activity Descriptions, Evidence Organization & Tax Schedule Compliance"
        description={
          <span className="space-y-3 block">
            <span className="block">
              The Research and Development Tax Incentive is a self-assessment program. A company
              seeking the incentive needs to consider whether it is an eligible R&amp;D entity, whether its
              activities meet the program requirements and whether expenditure included in the tax claim
              is eligible, correctly calculated and properly supported.
            </span>
            <span className="block mt-2">
              R&amp;D tax incentive application support brings technical activity information,
              contemporaneous records and accounting data together before registration and the company
              tax claim are prepared. It can be particularly useful where a business is applying for the
              first time, has several R&amp;D activities or needs a more reliable process for documenting
              the claim.
            </span>
          </span>
        }
        parentService={{
          label: "R&D Tax Incentive Hub",
          href: "/services/rd-tax-incentive",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 15.4 • Application & Registration Support"
        highlights={[
          "Two-Stage Portal & ATO Lodgement Support",
          "Contemporaneous Evidence & Apportionment",
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

      {/* 1. How Does the R&D Tax Incentive Application Process Work? */}
      <TwoStageApplicationProcess />

      {/* 2. A Practical R&D Application Workflow */}
      <PracticalRdWorkflow />

      {/* 3. What Does R&D Tax Incentive Application Support Include? */}
      <WhatApplicationSupportIncludes />

      {/* 4. What Records Should Be Kept for an R&D Claim? */}
      <RdRecordsAndApportionment />

      {/* 5. Key Rules and Deadlines: $20,000 Rule, Overseas R&D & 10-Month Deadline */}
      <KeyRulesAndDeadlines />

      {/* 6. How Financially Up Can Help */}
      <HowFinanciallyUpHelpsApplication />

      {/* 7. Why Choose Financially Up? */}
      <WhyChooseFinanciallyUpAppSupport />

      {/* 8. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about application deadlines, self-assessment registration, registration numbers, thresholds, and overseas activities."
        image="/images/services/faq.webp"
        imageAlt="R&D Tax Incentive Application Support FAQs"
        items={appSupportFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Get R&D Tax Incentive Application Support"
        title="Book an Appointment"
        subtitle="A well-supported R&D claim requires more than a year-end calculation. Activity descriptions, contemporaneous evidence, registration timing and accounting records all need to work together. Book an Appointment to discuss your R&D activities, registration deadline, records and the support required for your application and tax claim."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore R&D Tax Incentive"
        secondaryButtonHref="/services/rd-tax-incentive"
      />

      {/* 10. Contextual Service Ribbon */}
      <RelatedServiceRibbon />
    </main>
  );
}
