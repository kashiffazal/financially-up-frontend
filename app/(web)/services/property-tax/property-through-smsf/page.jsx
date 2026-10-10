import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

import CanSmsfBuyPropertySolePurpose from "./components/CanSmsfBuyPropertySolePurpose";
import ResidentialVsBusinessRealProperty from "./components/ResidentialVsBusinessRealProperty";
import LrbaBorrowingRulesAugust2026 from "./components/LrbaBorrowingRulesAugust2026";
import SmsfPropertyTaxAndNaliRisks from "./components/SmsfPropertyTaxAndNaliRisks";
import RecordsAndAuditorRequirementsSmsf from "./components/RecordsAndAuditorRequirementsSmsf";
import HowFinanciallyUpHelpsSmsfTrustees from "./components/HowFinanciallyUpHelpsSmsfTrustees";
import RelatedPropertySmsfRibbon from "./components/RelatedPropertySmsfRibbon";

export const metadata = {
  title: "Property Through SMSF Accountant | Financially Up",
  description:
    "Considering property through an SMSF? Review tax reporting, related-party rules and current borrowing restrictions with Financially Up before committing.",
  alternates: {
    canonical: "/services/property-tax/property-through-smsf",
  },
  openGraph: {
    title: "Property Through SMSF Accountant | Financially Up",
    description:
      "Considering property through an SMSF? Review tax reporting, related-party rules and current borrowing restrictions with Financially Up before committing.",
    url: "/services/property-tax/property-through-smsf",
    type: "website",
  },
};

export default function PropertyThroughSmsfPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Property Tax", href: "/services/property-tax" },
    { label: "Property Through SMSF" },
  ];

  const smsfPropertyFaqs = [
    {
      key: "1",
      title: "Can my SMSF buy a residential rental property?",
      content:
        "An SMSF may be able to acquire and rent residential property if the transaction complies with superannuation law and there is no prohibited personal or related-party use. For a new LRBA entered into from 10 August 2026 to finance real property acquired after that date, the property must be business real property, so an ordinary residential rental will generally not qualify for that borrowing exception.",
    },
    {
      key: "2",
      title: "Can my SMSF buy my business premises from me?",
      content:
        "A related-party acquisition of business real property may be permitted where the statutory conditions are met, including acquisition at market value. The property's actual use, valuation, contract and fund documents should be checked before proceeding.",
    },
    {
      key: "3",
      title: "Can my business rent property owned by my SMSF?",
      content:
        "Potentially, where the property is business real property and the lease satisfies the applicable rules. The lease and payments should be on commercial, arm's length terms and supported by records.",
    },
    {
      key: "4",
      title: "Does an accountant recommend that I buy property through my SMSF?",
      content:
        "Financially Up can explain the tax, accounting and reporting implications. Whether an SMSF or a particular property is an appropriate investment may involve financial product advice from an appropriately authorized adviser.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "SMSF Property Tax and Accounting Services",
        provider: {
          "@type": "AccountingService",
          name: "Financially Up",
          url: "https://financiallyup.com.au",
        },
        description:
          "Specialised SMSF property tax, compliance, and accounting services in Australia. Advise on Business Real Property, LRBA regulations, and annual audit coordination.",
        areaServed: "Australia",
        serviceType: "Self Managed Super Fund Property Tax Advisory",
      },
      {
        "@type": "FAQPage",
        mainEntity: smsfPropertyFaqs.map((f) => ({
          "@type": "Question",
          name: f.title,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.content,
          },
        })),
      },
    ],
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <SubServiceHero
        title="Property Through SMSF Accountant"
        subtitle="Superannuation Compliance, Sole Purpose Test, LRBAs & Tax Reporting"
        description="An SMSF can hold property where the fund's deed and superannuation rules permit it. The purchase, ownership and any borrowing must be arranged for the fund's retirement purpose. Errors in the contract, ownership documents or related-party dealings can create compliance and tax problems that may be difficult to correct after settlement. Financially Up provides SMSF property tax and accounting support to trustees considering an acquisition or managing property already held by their fund. We can identify reporting and compliance questions and work alongside your legal adviser, lender, auditor and appropriately authorized financial adviser."
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.10 • Property Tax Practice"
        highlights={[
          "Business Real Property (BRP) Arm's Length Leases",
          "August 2026 LRBA Borrowing Reform Compliance",
          "Non-Arm's Length Income (NALI) Penalty Prevention",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Property Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* Main Subpage Sections */}
      <CanSmsfBuyPropertySolePurpose />
      <ResidentialVsBusinessRealProperty />
      <LrbaBorrowingRulesAugust2026 />
      <SmsfPropertyTaxAndNaliRisks />
      <RecordsAndAuditorRequirementsSmsf />
      <HowFinanciallyUpHelpsSmsfTrustees />

      {/* Verbatim FAQs */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Clear answers on SMSF property purchases, business premises, LRBA borrowing, and compliance."
        items={smsfPropertyFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* Cross-linking Ribbon */}
      <RelatedPropertySmsfRibbon />

      {/* Pre-Footer CTA Banner */}
      <CallToActionBanner
        tag="SMSF Trustee Consultation"
        title="Discuss Your Property Transaction"
        subtitle="Tax, superannuation, legal and financing rules interact at the start of an SMSF property transaction. Book an Appointment with Financially Up to review the available documents and identify the next steps with your legal, audit and financial advisers."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />
    </main>
  );
}
