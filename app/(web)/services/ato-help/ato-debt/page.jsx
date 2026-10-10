import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenYouCannotPayFull from "./components/WhenYouCannotPayFull";
import PaymentPlansAndThreshold from "./components/PaymentPlansAndThreshold";
import CheckDebtBeforeProposing from "./components/CheckDebtBeforeProposing";
import WhatAtoCanAskFor from "./components/WhatAtoCanAskFor";
import KeepFutureLodgementsCurrent from "./components/KeepFutureLodgementsCurrent";
import DebtRecoveryActionEscalation from "./components/DebtRecoveryActionEscalation";
import HowFinanciallyUpHelpsDebt from "./components/HowFinanciallyUpHelpsDebt";
import WhatRecordsToPrepareDebt from "./components/WhatRecordsToPrepareDebt";
import WhyChooseFinanciallyUpDebt from "./components/WhyChooseFinanciallyUpDebt";
import RelatedAtoDebtRibbon from "./components/RelatedAtoDebtRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "ATO Debt Help Australia | Financially Up",
  description:
    "ATO debt help for individuals and businesses. Review tax debts, lodgements, payment options and ATO correspondence with a registered tax agent.",
  keywords: [
    "ATO debt help",
    "ATO debt help Australia",
    "ATO payment plan",
    "tax debt payment plan",
    "ATO debt negotiation",
    "director penalty notice DPN",
    "ATO garnishee notice",
    "General Interest Charge GIC remission",
    "overdue tax debt Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/ato-debt/",
  },
  openGraph: {
    title: "ATO Debt Help Australia | Financially Up",
    description:
      "ATO debt help for individuals and businesses. Review tax debts, lodgements, payment options and ATO correspondence with a registered tax agent.",
    url: "https://financiallyup.com.au/services/ato-help/ato-debt/",
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
  { label: "ATO Help", href: "/services/ato-help" },
  { label: "ATO Debt Help" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const atoDebtFaqs = [
  {
    key: "1",
    label: "Can I set up an ATO payment plan online?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Eligible taxpayers with debt of $200,000 or less may be able to use ATO online services. Eligibility, account type and any existing arrangement affect the available option.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does interest stop under a payment plan?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. GIC generally continues to accrue on the unpaid balance. Paying the debt down sooner usually reduces the amount on which future interest is calculated.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can an accountant negotiate with the ATO for me?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A registered tax agent can assist with authorised client tax matters and eligible payment-plan administration. The ATO decides whether to accept, vary or cancel an arrangement.
      </p>
    ),
  },
  {
    key: "4",
    label: "What if I cannot keep up with my existing plan?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Review the position before missing further instalments. Changed cash flow, new liabilities or earlier defaults may affect the options, and the ATO may request updated financial information.
      </p>
    ),
  },
];

/**
 * AtoDebtHelpPage Component
 * =========================
 * Route: /services/ato-help/ato-debt
 * Pillar 11.1: ATO Debt Help (Page 2 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AtoDebtHelpPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: atoDebtFaqs.map((faq) => ({
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
        title="ATO Debt Help"
        subtitle="Practical Tax Debt Reviews, Sustainable Payment Plans & ATO Liaison for Individuals & Businesses"
        description={
          <span className="space-y-3 block">
            <span className="block">
              ATO debt help is for individuals and businesses that owe tax and need to understand the balance, bring lodgements up to date and work out a realistic way to deal with the debt. A tax debt does not disappear because it is difficult to pay. Delay can increase interest and the risk of recovery action.
            </span>
            <span className="block mt-2">
              Financially Up can review the debt, identify whether outstanding returns or activity statements contribute to the balance, and assist with ATO communication and payment-plan administration where appropriate. Payment arrangements are subject to ATO acceptance and the taxpayer’s circumstances; no particular arrangement or outcome can be guaranteed.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.1 • Debt Resolution Practice"
        highlights={[
          "Registered Tax Agent #26234055",
          "ATO Payment Plans up to $200k & Above",
          "DPN & Garnishee Notice Escalation Support",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What should you do if you cannot pay an ATO debt in full? */}
      <WhenYouCannotPayFull />

      {/* 2. ATO payment plans and the $200,000 online threshold */}
      <PaymentPlansAndThreshold />

      {/* 3. Check the debt before proposing a payment plan */}
      <CheckDebtBeforeProposing />

      {/* 4. What information can the ATO ask for? */}
      <WhatAtoCanAskFor />

      {/* 5. Keep future lodgements and payments current */}
      <KeepFutureLodgementsCurrent />

      {/* 6. What if the debt is already in recovery action? */}
      <DebtRecoveryActionEscalation />

      {/* 7. How Financially Up can help with ATO debt */}
      <HowFinanciallyUpHelpsDebt />

      {/* 8. What records should you prepare? */}
      <WhatRecordsToPrepareDebt />

      {/* 9. Why choose Financially Up for ATO Debt Help */}
      <WhyChooseFinanciallyUpDebt />

      {/* 10. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="Frequently Asked Questions"
        description="Common questions about ATO debt management, $200,000 online payment plans, daily compounding interest, and tax agent negotiations."
        items={atoDebtFaqs}
      />

      {/* 11. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready to Resolve Your ATO Debt?"
        title="Have an ATO Debt or Payment-Plan Problem?"
        subtitle="If an ATO debt is affecting your cash flow or you are unsure what the balance includes, we can review the position and help you prepare the next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 12. Sibling Service Ribbon */}
      <RelatedAtoDebtRibbon />
    </main>
  );
}
