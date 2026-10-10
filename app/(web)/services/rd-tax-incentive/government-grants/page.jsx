import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatGrantConsultantDoes from "./components/WhatGrantConsultantDoes";
import FindingRightGovernmentGrant from "./components/FindingRightGovernmentGrant";
import CheckedBeforeApplying from "./components/CheckedBeforeApplying";
import WhatMakesApplicationEffective from "./components/WhatMakesApplicationEffective";
import FinancialBudgetsAndPostApproval from "./components/FinancialBudgetsAndPostApproval";
import HowFinanciallyUpHelpsGrants from "./components/HowFinanciallyUpHelpsGrants";
import WhyChooseFinanciallyUpGrants from "./components/WhyChooseFinanciallyUpGrants";
import RelatedServiceRibbon from "./components/RelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4 of 15th Pillar R&D Tax Incentive.docx)
 */
export const metadata = {
  title: "Government Grant Consultant Australia | Grant Application Support",
  description:
    "Government grant support for Australian businesses. Assess eligibility, organize evidence and prepare a clear, compliant application with Financially Up.",
  keywords: [
    "government grant consultant Australia",
    "government grant application support",
    "business grants Australia",
    "grant writing services Australia",
    "R&D grant support",
    "AusIndustry grant application",
    "commercialisation grant Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/rd-tax-incentive/government-grants/",
  },
  openGraph: {
    title: "Government Grant Consultant Australia | Grant Application Support",
    description:
      "Government grant support for Australian businesses. Assess eligibility, organize evidence and prepare a clear, compliant application with Financially Up.",
    url: "https://financiallyup.com.au/services/rd-tax-incentive/government-grants/",
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
  { label: "Government Grants" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const grantFaqs = [
  {
    key: "1",
    label: "Can a consultant guarantee that my government grant will be approved?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Grant decisions are made by the relevant administering authority. Professional support can
        improve the structure, evidence and completeness of an application, but it cannot guarantee approval.
      </p>
    ),
  },
  {
    key: "2",
    label: "Do I need to pay to access government grant information?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Official grant information is available free through government websites. An adviser may
        charge for consulting, accounting or application-preparation services, not for special access to public grant information.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can you write the entire grant application for us?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The scope depends on the grant and the information available. We can assist with drafting and
        review, but the applicant must provide accurate facts, evidence and declarations and approve the final submission.
      </p>
    ),
  },
  {
    key: "4",
    label: "Is government grant funding taxable?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The income-tax and GST treatment depends on the payment, program terms and recipient’s
        circumstances. Obtain advice on the specific grant rather than assuming a standard treatment.
      </p>
    ),
  },
];

/**
 * GovernmentGrantsPage Component
 * ==============================
 * Route: /services/rd-tax-incentive/government-grants
 * Pillar 15.3: Government Grants (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function GovernmentGrantsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: grantFaqs.map((faq) => ({
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
        title="Government Grant Consultant Australia"
        subtitle="Professional Grant Application Preparation, Eligibility Due Diligence & Project Budgeting"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Government grants can help eligible businesses fund specific projects, innovation,
              commercialization, capability development, expansion or other activities supported by a
              particular program. Every grant has its own objectives, eligibility rules, evidence
              requirements, funding limits and application process. A government grant consultant in
              Australia can help you assess whether an opportunity is relevant, organize the required
              information and prepare an application that addresses the published criteria clearly and accurately.
            </span>
            <span className="block mt-2">
              Financially Up supports businesses with grant-readiness, application preparation and
              required financial information. We help you understand current guidelines, present the
              project coherently and identify issues before submission.
            </span>
          </span>
        }
        parentService={{
          label: "R&D Tax Incentive Hub",
          href: "/services/rd-tax-incentive",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 15.3 • Grant Advisory & Application Support"
        highlights={[
          "Guideline & Merit Criteria Alignment",
          "Project Budget & Ledger Reconciliation",
          "Registered Tax Agent #26234055",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Professional Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What Does a Government Grant Consultant Do? */}
      <WhatGrantConsultantDoes />

      {/* 2. Finding the Right Government Grant */}
      <FindingRightGovernmentGrant />

      {/* 3. What Should Be Checked Before Applying? */}
      <CheckedBeforeApplying />

      {/* 4. Grant Writing Services Australia - What Makes an Application Effective? */}
      <WhatMakesApplicationEffective />

      {/* 5. Financial Information and Project Budgets & What Happens If a Grant Is Approved? */}
      <FinancialBudgetsAndPostApproval />

      {/* 6. How Financially Up Can Help */}
      <HowFinanciallyUpHelpsGrants />

      {/* 7. Why Choose Financially Up? */}
      <WhyChooseFinanciallyUpGrants />

      {/* 8. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about consultant guarantees, free public information, full grant writing, and grant taxation."
        image="/images/services/faq.webp"
        imageAlt="Government Grants Frequently Asked Questions"
        items={grantFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Discuss Your Government Grant Application"
        title="Book an Appointment"
        subtitle="If you have identified an opportunity or want to assess whether your business is ready to apply, Financially Up can help you review the requirements, organize supporting information and define the appropriate application-support scope."
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
