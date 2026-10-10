import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhyDistributionsNeededBefore30June from "./components/WhyDistributionsNeededBefore30June";
import WhatDistributionPlanningInvolves from "./components/WhatDistributionPlanningInvolves";
import TrustDeedComesFirst from "./components/TrustDeedComesFirst";
import PresentEntitlementAndResolutions from "./components/PresentEntitlementAndResolutions";
import TaxIssuesAffectingDistributionDecision from "./components/TaxIssuesAffectingDistributionDecision";
import CompanyBeneficiariesAndUnpaidEntitlements from "./components/CompanyBeneficiariesAndUnpaidEntitlements";
import InformationToPrepareDistributionReview from "./components/InformationToPrepareDistributionReview";
import HowFinanciallyUpHelpsDistributions from "./components/HowFinanciallyUpHelpsDistributions";
import WhyChooseFinanciallyUpDistributions from "./components/WhyChooseFinanciallyUpDistributions";
import RelatedDistributionPlanningRibbon from "./components/RelatedDistributionPlanningRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 11 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Trust Distribution Planning Australia | Financially Up",
  description:
    "Trust distribution planning for trustees and family trusts. Review beneficiary entitlements, resolutions, tax issues and year-end records before 30 June.",
  keywords: [
    "trust distribution planning",
    "trust distribution resolution 30 June",
    "family trust distribution minute",
    "present entitlement trust",
    "section 100A trust reimbursement",
    "Division 7A trust UPE Bendel",
    "trustee resolution tax",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/distribution-planning/",
  },
  openGraph: {
    title: "Trust Distribution Planning Australia | Financially Up",
    description:
      "Trust distribution planning for trustees and family trusts. Review beneficiary entitlements, resolutions, tax issues and year-end records before 30 June.",
    url: "https://financiallyup.com.au/services/trusts/distribution-planning/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Trusts", href: "/services/trusts" },
  { label: "Distribution Planning" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 11)
 */
const distributionPlanningFaqs = [
  {
    key: "1",
    label: "When should trust distribution planning start?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is sensible to begin before 30 June, particularly where the trust has significant income, capital gains,
        company beneficiaries, multiple family members or unusual transactions. The trust deed may require the
        trustee to act before 30 June, so the deed should be checked early.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can a trust distribution resolution be made after 30 June?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A trustee generally cannot wait until after year end and then retrospectively make a beneficiary presently
        entitled as at 30 June. The ATO expects the relevant entitlement to be created by the end of the income year,
        subject to the trust deed and specific rules that may apply to particular amounts.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does the distribution resolution need an exact dollar amount?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not always. The ATO accepts that a clear methodology, such as a specified percentage or a defined amount plus
        the balance, can be effective if the trust deed permits it. The wording must still be clear and consistent with
        the deed.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can a family trust distribute to any family member?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Only if the person is a valid beneficiary under the trust deed and any other relevant tax rules are satisfied.
        Family trust elections and other trust provisions can also affect the tax consequences, so beneficiary
        eligibility should be checked rather than assumed.
      </p>
    ),
  },
  {
    key: "5",
    label: "Is trust distribution planning the same as preparing the trust tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Distribution planning occurs before or around year end so the trustee can make and document decisions. The
        trust tax return is prepared after year end using the final accounts, taxable income and valid distribution
        outcomes.
      </p>
    ),
  },
];

/**
 * TrustDistributionPlanningPage Component
 * =======================================
 * Route: /services/trusts/distribution-planning
 * Pillar 8.10: Trust Distribution Planning for Trustees (Page 11 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function TrustDistributionPlanningPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: distributionPlanningFaqs.map((faq) => ({
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
        title="Trust Distribution Planning for Trustees"
        subtitle="30 June Distribution Resolutions, Present Entitlement, Section 100A Integrity & Corporate Beneficiaries"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Trust distribution planning is the year-end process of reviewing a trust&apos;s deed, expected income,
              eligible beneficiaries and tax circumstances before the trustee makes distribution decisions. For
              discretionary and family trusts, the timing and wording of trustee resolutions can affect who is
              presently entitled to trust income and how the trust&apos;s taxable income is ultimately assessed.
            </span>
            <span className="block mt-2">
              Financially Up can assist trustees with the accounting and tax work needed to support an informed
              distribution decision, including reviewing estimated trust results, beneficiary tax information,
              prior-year positions and related tax issues. The trustee must still act under the trust deed and
              applicable law, and legal advice may be required where the deed, trustee powers or beneficiary rights are
              unclear.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.10 • 30 June Distribution Resolutions & Tax Governance"
        highlights={[
          "30 June Valid Trustee Distribution Resolutions",
          "Section 100A Reimbursement Agreement Review",
          "Corporate Beneficiaries & Bendel UPE / Div 7A Analysis",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Trust Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. Why trust distributions need to be considered before 30 June */}
      <WhyDistributionsNeededBefore30June />

      {/* 2. What does trust distribution planning involve? */}
      <WhatDistributionPlanningInvolves />

      {/* 3. The trust deed comes first */}
      <TrustDeedComesFirst />

      {/* 4. Present entitlement and clear trustee resolutions */}
      <PresentEntitlementAndResolutions />

      {/* 5. Tax issues that can affect a distribution decision */}
      <TaxIssuesAffectingDistributionDecision />

      {/* 6. Company beneficiaries and unpaid entitlements */}
      <CompanyBeneficiariesAndUnpaidEntitlements />

      {/* 7. Information to prepare for a distribution review */}
      <InformationToPrepareDistributionReview />

      {/* 8. How Financially Up can help */}
      <HowFinanciallyUpHelpsDistributions />

      {/* 9. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpDistributions />

      {/* 10. Related Services Ribbon */}
      <RelatedDistributionPlanningRibbon />

      {/* 11. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Trust Distribution Planning"
        description="Clear answers regarding planning timelines, post-30 June resolutions, calculation methodologies, family member eligibility, and tax return relationships."
        items={distributionPlanningFaqs}
      />

      {/* 12. Call to Action Banner */}
      <CallToActionBanner
        title="Plan Your 30 June Trust Distributions with Confidence"
        subtitle="Review expected accounting income, beneficiary eligibility, Section 100A considerations and trustee resolution documentation before the 30 June deadline."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
