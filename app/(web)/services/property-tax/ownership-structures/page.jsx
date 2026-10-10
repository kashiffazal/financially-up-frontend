import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

import WhatIsPropertyOwnershipStructure from "./components/WhatIsPropertyOwnershipStructure";
import PersonalAndCoOwnershipTaxImplications from "./components/PersonalAndCoOwnershipTaxImplications";
import TrustOwnershipMechanicsAndTax from "./components/TrustOwnershipMechanicsAndTax";
import CompanyOwnershipCommercialDevelopment from "./components/CompanyOwnershipCommercialDevelopment";
import StateTaxesAndTransferCostRisks from "./components/StateTaxesAndTransferCostRisks";
import WhatWeReviewBeforeCommitment from "./components/WhatWeReviewBeforeCommitment";
import RelatedOwnershipStructuresRibbon from "./components/RelatedOwnershipStructuresRibbon";

export const metadata = {
  title: "Property Ownership Structure Accountant | Financially Up",
  description:
    "Compare tax and accounting implications of owning property personally, jointly, through a trust or company. Discuss your plans with Financially Up.",
  alternates: {
    canonical: "/services/property-tax/ownership-structures",
  },
  openGraph: {
    title: "Property Ownership Structure Accountant | Financially Up",
    description:
      "Compare tax and accounting implications of owning property personally, jointly, through a trust or company. Discuss your plans with Financially Up.",
    url: "/services/property-tax/ownership-structures",
    type: "website",
  },
};

export default function OwnershipStructuresPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Property Tax", href: "/services/property-tax" },
    { label: "Ownership Structures" },
  ];

  const ownershipStructuresFaqs = [
    {
      key: "1",
      title: "Is a trust always better for an investment property?",
      content:
        "No. A trust may offer features relevant to a particular family or investment plan, but establishment and administration costs, losses, distributions, land tax and the trust deed all need to be considered. The answer depends on the property and your circumstances.",
    },
    {
      key: "2",
      title: "Does a company get the 50% CGT discount?",
      content:
        "No. Companies are not entitled to the general CGT discount. That can be significant where a long-term property sale is anticipated, although CGT is only one factor in choosing a structure.",
    },
    {
      key: "3",
      title: "Can I transfer a property to a trust after buying it?",
      content:
        "Potentially, but a transfer may trigger CGT and state or territory transfer duty, and market value rules may apply. Finance and legal documents may also need to change. Obtain tax and legal advice before changing ownership.",
    },
    {
      key: "4",
      title: "Should the accountant decide whose name goes on the contract?",
      content:
        "An accountant can explain the tax and accounting consequences of the options. Your solicitor should advise on legal ownership, contracts and trust deeds. A lender and, where necessary, an authorized financial adviser should address finance and investment advice.",
    },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        name: "Property Ownership Structure Tax Advisory",
        provider: {
          "@type": "AccountingService",
          name: "Financially Up",
          url: "https://financiallyup.com.au",
        },
        description:
          "Strategic property ownership structure tax advice for Australian property acquisitions. Compare individual, trust, company, and joint ownership options.",
        areaServed: "Australia",
        serviceType: "Property Ownership Structure Tax Advice",
      },
      {
        "@type": "FAQPage",
        mainEntity: ownershipStructuresFaqs.map((f) => ({
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
        title="Property Ownership Structure Accountant"
        subtitle="Individual, Joint, Trust & Company Tax Comparison"
        description="Who owns a property affects how its income, expenses and eventual sale are reported. Choosing a name for the contract without reviewing the broader structure can leave costly issues to resolve later. The right approach depends on the property's purpose, the other owners, financing, tax position and plans for holding or selling it. Financially Up provides property ownership tax advice to people acquiring an investment property, business premises or development site. We review the tax and accounting implications of proposed ownership arrangements so you can make an informed decision alongside your solicitor, lender and, where appropriate, an authorized financial adviser."
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.9 • Property Tax Practice"
        highlights={[
          "Individual vs Trust vs Corporate Comparison",
          "50% CGT Discount & Quarantined Loss Modelling",
          "State Stamp Duty & Land Tax Surcharge Prevention",
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
      <WhatIsPropertyOwnershipStructure />
      <PersonalAndCoOwnershipTaxImplications />
      <TrustOwnershipMechanicsAndTax />
      <CompanyOwnershipCommercialDevelopment />
      <StateTaxesAndTransferCostRisks />
      <WhatWeReviewBeforeCommitment />

      {/* Verbatim FAQs */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Clear answers on property structures, tax rates, trusts, and contract names."
        items={ownershipStructuresFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* Cross-linking Ribbon */}
      <RelatedOwnershipStructuresRibbon />

      {/* Pre-Footer CTA Banner */}
      <CallToActionBanner
        tag="Pre-Contract Advisory"
        title="Discuss Your Property Transaction"
        subtitle="A property ownership structure accountant can help identify the tax trade-offs while there is still time to make a considered choice. Book an Appointment with Financially Up and bring the proposed purchase, ownership and finance details."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />
    </main>
  );
}
