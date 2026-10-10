import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatFamilyTrustAccountantHelps from "./components/WhatFamilyTrustAccountantHelps";
import FamilyTrustDistributionsTiming from "./components/FamilyTrustDistributionsTiming";
import TaxPlanningVsReturnPreparation from "./components/TaxPlanningVsReturnPreparation";
import WhatInformationNeededFamilyTrust from "./components/WhatInformationNeededFamilyTrust";
import SettingUpFamilyTrust from "./components/SettingUpFamilyTrust";
import CommonFamilyTrustIssues from "./components/CommonFamilyTrustIssues";
import WhyChooseFinanciallyUpFamilyTrust from "./components/WhyChooseFinanciallyUpFamilyTrust";
import RelatedFamilyTrustRibbon from "./components/RelatedFamilyTrustRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Family Trust Accountant & Tax Services | Financially Up",
  description:
    "Family trust accountant support for accounting, tax returns, distributions and compliance. Financially Up assists family trusts across Australia.",
  keywords: [
    "family trust accountant",
    "family trust tax returns",
    "discretionary trust accounting",
    "trust distribution 30 June",
    "family trust election",
    "family trust setup accountant",
    "corporate trustee family trust",
    "Section 95 trust net income",
    "Division 7A trust entitlements",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/family-trust/",
  },
  openGraph: {
    title: "Family Trust Accountant & Tax Services | Financially Up",
    description:
      "Family trust accountant support for accounting, tax returns, distributions and compliance. Financially Up assists family trusts across Australia.",
    url: "https://financiallyup.com.au/services/trusts/family-trust/",
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
  { label: "Family Trust Accountant" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const familyTrustFaqs = [
  {
    key: "1",
    label: "Does a family trust pay tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It depends on the circumstances. Beneficiaries may be assessed on trust income to which they are
        presently entitled, while the trustee can be assessed in other situations. The outcome depends on
        the deed, trustee decisions, beneficiaries and the nature of the income.
      </p>
    ),
  },
  {
    key: "2",
    label: "When should family trust distributions be considered?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For discretionary trusts, distribution decisions should generally be addressed before 30 June,
        and the trust deed may require action earlier. Waiting until the tax return is being prepared can
        be too late for some decisions.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need a family trust accountant every year?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        If the trust is active, annual accounting and tax review is usually important because financial
        records, distribution decisions and beneficiary reporting need to align. The actual lodgement
        and service requirements depend on the trust’s circumstances.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you help if the family trust records are behind?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can review the available bookkeeping, prior accounts, tax returns and trust documents,
        identify gaps and agree on a catch-up scope before preparing the current-year work.
      </p>
    ),
  },
];

/**
 * FamilyTrustPage Component
 * =========================
 * Route: /services/trusts/family-trust
 * Pillar 8.1: Family Trust Accountant (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function FamilyTrustPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: familyTrustFaqs.map((faq) => ({
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
        title="Family Trust Accountant"
        subtitle="Annual Accounts, Tax Compliance, 30 June Resolutions & Advisory for Australian Family Trusts"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A family trust is commonly a discretionary trust used to hold investments, operate a business or manage
              assets for a family group. A family trust accountant helps the trustee keep reliable records, prepare the
              annual tax position and deal with beneficiary distributions and reporting in a way that reflects the trust
              deed and current tax rules.
            </span>
            <span className="block mt-2">
              Financially Up provides family trust accounting services for trustees and family groups across Australia.
              We can assist with annual accounts, family trust tax return preparation, beneficiary distribution
              information, record keeping and related tax compliance. Family trust tax advice or planning can also be
              scoped where a decision needs to be considered before year-end or before a transaction occurs.
            </span>
            <span className="block mt-2">
              If you need help with an existing trust or want to understand the accounting and tax work involved, Book
              an Appointment. We can review the trust’s circumstances, available records and the appropriate service scope.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.1 • Family Trust Practice"
        highlights={[
          "100% ATO & Trust Deed Compliant",
          "Discretionary Distribution & 30 June Resolutions",
          "CPA & IPA Qualified Tax Agents",
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

      {/* 1. What a Family Trust Accountant Helps With */}
      <WhatFamilyTrustAccountantHelps />

      {/* 2. Distributions Require Timely Attention (30 June Deadlines) */}
      <FamilyTrustDistributionsTiming />

      {/* 3. Tax Planning vs Tax Return Preparation */}
      <TaxPlanningVsReturnPreparation />

      {/* 4. What Information Does a Family Trust Accountant Need? */}
      <WhatInformationNeededFamilyTrust />

      {/* 5. Setting Up a Family Trust */}
      <SettingUpFamilyTrust />

      {/* 6. Common Family Trust Accounting Issues & Division 7A / Bendel */}
      <CommonFamilyTrustIssues />

      {/* 7. Why Choose Financially Up */}
      <WhyChooseFinanciallyUpFamilyTrust />

      {/* 8. Related Trust Services Ribbon */}
      <RelatedFamilyTrustRibbon />

      {/* 9. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Family Trusts"
        description="Clear, reliable answers to key questions about discretionary trusts, beneficiary tax, and year-end deadlines."
        items={familyTrustFaqs}
      />

      {/* 10. Call to Action Banner */}
      <CallToActionBanner
        title="Need Help With Your Family Trust?"
        subtitle="For help with a family trust tax return, annual accounts, distributions or family trust tax planning, Book an Appointment. We can clarify what work is required now and what should be addressed before the next year-end or major transaction."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
