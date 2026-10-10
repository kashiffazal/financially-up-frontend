import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatDoesCorporateTrusteeAccountantDo from "./components/WhatDoesCorporateTrusteeAccountantDo";
import CorporateTrusteeForFamilyTrust from "./components/CorporateTrusteeForFamilyTrust";
import CompanyAsTrusteeSetup from "./components/CompanyAsTrusteeSetup";
import OngoingAccountingAndComplianceIssues from "./components/OngoingAccountingAndComplianceIssues";
import CorporateTrusteeTaxAdviceAndAnnualTax from "./components/CorporateTrusteeTaxAdviceAndAnnualTax";
import WhatFinanciallyUpHelpsCorporateTrustee from "./components/WhatFinanciallyUpHelpsCorporateTrustee";
import RecordsToProvideCorporateTrustee from "./components/RecordsToProvideCorporateTrustee";
import WhyChooseFinanciallyUpCorporateTrustee from "./components/WhyChooseFinanciallyUpCorporateTrustee";
import RelatedCorporateTrusteeRibbon from "./components/RelatedCorporateTrusteeRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Corporate Trustee Accountant Australia | Financially Up",
  description:
    "Accounting and tax support where a company acts as trustee. Keep trust and company records aligned, manage compliance and understand trustee-company obligations.",
  keywords: [
    "corporate trustee accountant",
    "company as trustee accounting",
    "corporate trustee family trust",
    "corporate trustee setup Australia",
    "trustee company ASIC compliance",
    "trustee company tax return",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/corporate-trustee/",
  },
  openGraph: {
    title: "Corporate Trustee Accountant Australia | Financially Up",
    description:
      "Accounting and tax support where a company acts as trustee. Keep trust and company records aligned, manage compliance and understand trustee-company obligations.",
    url: "https://financiallyup.com.au/services/trusts/corporate-trustee/",
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
  { label: "Corporate Trustee Accountant" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const corporateTrusteeFaqs = [
  {
    key: "1",
    label: "Is a corporate trustee the same as the trust?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The company is the legal entity appointed as trustee. It holds and manages trust property in its trustee
        capacity, while the trust relationship governs how that property is held for beneficiaries.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does a corporate trustee need its own company tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically merely because it acts as trustee. The company’s own tax obligations depend on whether it
        derives income or carries on activities in its own right. The trust’s tax reporting is considered separately.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does the trustee company still have ASIC obligations?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. A company used only as a trustee remains a registered company and must keep its ASIC details current,
        maintain its directors and deal with annual review obligations.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up set up a company as trustee?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up can assist with company registration and accounting/tax implementation within scope. Legal
        documents that appoint the company as trustee or amend the trust deed may require a lawyer.
      </p>
    ),
  },
];

/**
 * CorporateTrusteePage Component
 * ==============================
 * Route: /services/trusts/corporate-trustee
 * Pillar 8.4: Corporate Trustee Accountant (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CorporateTrusteePage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: corporateTrusteeFaqs.map((faq) => ({
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
        title="Corporate Trustee Accountant"
        subtitle="Company as Trustee Accounting, Asset Separation, ASIC Compliance & Governance Coordination"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A corporate trustee is a company appointed to act as trustee of a trust. The trust and the trustee
              company are different: the trust is the relationship under which assets are held for beneficiaries,
              while the company is the legal entity that performs the trustee role. Keeping those records separate and
              consistent is important for accounting, tax and ASIC compliance.
            </span>
            <span className="block mt-2">
              Financially Up provides corporate trustee accounting services for existing family trusts, unit trusts and
              other trust arrangements. We can assist with trust accounting, company records, tax registrations, annual
              compliance coordination and the practical administration needed when a company acts as trustee. Legal
              advice about trustee powers, deed amendments or disputes is separately scoped.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.4 • Corporate Trustee Practice"
        highlights={[
          "Capacity & Entity Ledger Demarcation",
          "ASIC Company Statement & Registry Compliance",
          "Division 7A & Beneficiary Entitlement Alignment",
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

      {/* 1. What does a corporate trustee accountant do? */}
      <WhatDoesCorporateTrusteeAccountantDo />

      {/* 2. Corporate trustee for a family trust */}
      <CorporateTrusteeForFamilyTrust />

      {/* 3. Company as trustee setup: what needs to be coordinated? */}
      <CompanyAsTrusteeSetup />

      {/* 4. Ongoing accounting and compliance issues */}
      <OngoingAccountingAndComplianceIssues />

      {/* 5. Corporate trustee tax advice and annual tax work */}
      <CorporateTrusteeTaxAdviceAndAnnualTax />

      {/* 6. What Financially Up can help with */}
      <WhatFinanciallyUpHelpsCorporateTrustee />

      {/* 7. What records should you provide? */}
      <RecordsToProvideCorporateTrustee />

      {/* 8. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpCorporateTrustee />

      {/* 9. Related Services Ribbon */}
      <RelatedCorporateTrusteeRibbon />

      {/* 10. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Corporate Trustees"
        description="Clear answers regarding legal distinctions, tax return necessity, ASIC compliance, and corporate setup support."
        items={corporateTrusteeFaqs}
      />

      {/* 11. Call to Action Banner */}
      <CallToActionBanner
        title="Need Help With Your Corporate Trustee?"
        subtitle="Whether you need accounting support for an existing corporate trustee structure, assistance setting up a new trustee company, or guidance aligning your trust and company records, Book an Appointment with our specialist team today."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
