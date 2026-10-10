import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsIncludedTrustTaxPreparation from "./components/WhatIsIncludedTrustTaxPreparation";
import WhoNeedsTrustTaxReturnAccountant from "./components/WhoNeedsTrustTaxReturnAccountant";
import KeyIssuesReviewedBeforeLodgement from "./components/KeyIssuesReviewedBeforeLodgement";
import TrustDistributionsAndAnnualReturn from "./components/TrustDistributionsAndAnnualReturn";
import HowFinanciallyUpHelpsTrustTax from "./components/HowFinanciallyUpHelpsTrustTax";
import RecordsToProvideTrustTaxPreparation from "./components/RecordsToProvideTrustTaxPreparation";
import TrustTaxReturnVsTaxPlanning from "./components/TrustTaxReturnVsTaxPlanning";
import WhyChooseFinanciallyUpTrustTax from "./components/WhyChooseFinanciallyUpTrustTax";
import RelatedTrustTaxRibbon from "./components/RelatedTrustTaxRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Trust Tax Return Accountant Australia | Financially Up",
  description:
    "Trust tax return preparation for Australian trusts. Financially Up reviews accounts, beneficiary distributions, tax records and ATO reporting requirements.",
  keywords: [
    "trust tax return accountant",
    "lodge trust tax return Australia",
    "Section 95 net income calculation",
    "family trust tax return",
    "unit trust tax return",
    "trust statement of distribution",
    "overdue trust tax returns",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/trust-tax-returns/",
  },
  openGraph: {
    title: "Trust Tax Return Accountant Australia | Financially Up",
    description:
      "Trust tax return preparation for Australian trusts. Financially Up reviews accounts, beneficiary distributions, tax records and ATO reporting requirements.",
    url: "https://financiallyup.com.au/services/trusts/trust-tax-returns/",
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
  { label: "Trust Tax Return Accountant" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const trustTaxFaqs = [
  {
    key: "1",
    label: "Does every trust have to lodge a trust tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, a trustee must lodge a trust tax return each year regardless of the amount of net income, unless the
        ATO advises that a return is not required or a specific exemption applies. Different return forms apply to some
        specialized trusts, so the trust&apos;s circumstances should be checked before deciding that no return is
        needed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Who pays tax on trust income?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The answer depends on the trust, beneficiary entitlements and the tax rules applying to the income. In many
        cases, beneficiaries are assessed on their share of trust net income, while the trustee can be assessed in
        particular circumstances. The annual return records the relevant distribution and tax information.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I need the trust deed to prepare the return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The deed is often important because it helps establish how trust income is determined, who can benefit and what
        powers the trustee has. Prior variations and trustee resolutions can also be relevant.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you prepare overdue trust tax returns?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, Financially Up can review prior-year records and scope overdue trust return work. The records required and
        the number of years involved will determine the work needed before lodgement.
      </p>
    ),
  },
];

/**
 * TrustTaxReturnsPage Component
 * =============================
 * Route: /services/trusts/trust-tax-returns
 * Pillar 8.5: Trust Tax Return Accountant (Page 6 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function TrustTaxReturnsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trustTaxFaqs.map((faq) => ({
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
        title="Trust Tax Return Accountant"
        subtitle="Annual Trust Accounts Reconciliation, Section 95 Net Income, Statements of Distribution & ATO Lodgement"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A trust tax return reports the trust&apos;s income, deductions, tax information and beneficiary
              distribution details to the ATO. A trustee generally lodges a return for each income year unless the ATO
              advises that a return is not required or a specific exemption applies. Preparing the return properly
              starts with accurate trust accounts and a clear understanding of the trust deed, trustee resolutions,
              beneficiary entitlements and the transactions that occurred during the year.
            </span>
            <span className="block mt-2">
              Financially Up assists trustees with the accounting, reconciliation and preparation work needed to
              complete an accurate trust tax return. Our registered tax agents work with family discretionary trusts,
              unit trusts, investment trusts and other private trust structures across Australia. Where broader
              tax-planning advice, distribution strategy or restructuring is needed, that work can be scoped separately
              from annual return preparation.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.5 • Trust Tax Return Practice"
        highlights={[
          "Section 95 Net Taxable Income Calculation",
          "10-Point Pre-Lodgement Technical Quality Review",
          "Electronic Lodgement via Registered Tax Agent Portal",
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

      {/* 1. What is included in trust tax return preparation? */}
      <WhatIsIncludedTrustTaxPreparation />

      {/* 2. Who may need a trust tax return accountant? */}
      <WhoNeedsTrustTaxReturnAccountant />

      {/* 3. Key issues reviewed before lodgement */}
      <KeyIssuesReviewedBeforeLodgement />

      {/* 4. Trust distributions and the annual return */}
      <TrustDistributionsAndAnnualReturn />

      {/* 5. How Financially Up can help */}
      <HowFinanciallyUpHelpsTrustTax />

      {/* 6. Records to provide for trust tax preparation */}
      <RecordsToProvideTrustTaxPreparation />

      {/* 7. Trust tax return versus tax planning */}
      <TrustTaxReturnVsTaxPlanning />

      {/* 8. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpTrustTax />

      {/* 9. Related Services Ribbon */}
      <RelatedTrustTaxRibbon />

      {/* 10. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Trust Tax Returns"
        description="Clear answers regarding lodgement obligations, taxpayer liabilities, deed requirements, and overdue returns."
        items={trustTaxFaqs}
      />

      {/* 11. Call to Action Banner */}
      <CallToActionBanner
        title="Need to Prepare Your Trust Tax Return?"
        subtitle="Whether you need current-year trust tax preparation, overdue return catch-up, or a full reconciliation of beneficiary distribution accounts, Book an Appointment with our registered tax agent team today."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
