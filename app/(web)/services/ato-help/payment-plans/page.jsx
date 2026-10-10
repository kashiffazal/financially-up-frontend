import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsAtoPaymentPlan from "./components/WhatIsAtoPaymentPlan";
import WhenToSeekPaymentPlanHelp from "./components/WhenToSeekPaymentPlanHelp";
import OnlinePaymentPlanThreshold from "./components/OnlinePaymentPlanThreshold";
import WhatInformationNeededPaymentPlan from "./components/WhatInformationNeededPaymentPlan";
import SustainablePaymentProposal from "./components/SustainablePaymentProposal";
import ExistingPaymentPlanDefault from "./components/ExistingPaymentPlanDefault";
import HowFinanciallyUpHelpsPaymentPlan from "./components/HowFinanciallyUpHelpsPaymentPlan";
import WhyChooseFinanciallyUpPaymentPlan from "./components/WhyChooseFinanciallyUpPaymentPlan";
import RelatedPaymentPlansRibbon from "./components/RelatedPaymentPlansRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 7 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "ATO Payment Plan Help | Financially Up",
  description:
    "Unable to pay an ATO debt in full? Financially Up can review your account, help plan affordable instalments and assist with a payment arrangement.",
  keywords: [
    "ATO payment plan help",
    "tax debt payment plan",
    "ATO payment arrangement",
    "pay tax debt instalments",
    "ATO debt repayment plan",
    "GIC tax debt plan",
    "ATO payment plan accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/payment-plans/",
  },
  openGraph: {
    title: "ATO Payment Plan Help | Financially Up",
    description:
      "Unable to pay an ATO debt in full? Financially Up can review your account, help plan affordable instalments and assist with a payment arrangement.",
    url: "https://financiallyup.com.au/services/ato-help/payment-plans/",
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
  { label: "Payment Plans" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 7)
 */
const paymentPlanFaqs = [
  {
    key: "1",
    label: "Does an ATO payment plan stop interest?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. GIC generally continues on the unpaid balance. Paying the debt sooner usually reduces the amount on which future interest is calculated.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I pay weekly instead of monthly?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ATO payment plans may use weekly, fortnightly or monthly instalments. The amount, frequency and period must be available for the account, acceptable to the ATO and sustainable for you.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I have to lodge and pay new BAS while paying old debt?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. A payment plan does not remove ongoing lodgement or payment obligations. New liabilities must be planned for separately.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up guarantee approval?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. We can prepare accurate information and assist with the request, but the ATO decides whether to accept or vary an arrangement and on what terms.
      </p>
    ),
  },
];

/**
 * PaymentPlansPage Component
 * ==========================
 * Route: /services/ato-help/payment-plans
 * Pillar 11.6: ATO Payment Plan Help (Page 7 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function PaymentPlansPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: paymentPlanFaqs.map((faq) => ({
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
        title="ATO Payment Plan Help"
        subtitle="Structured Tax Debt Arrangements, Sustainable Instalment Plans & Account Reconciliation"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An ATO tax debt can be difficult to manage when the full amount is due at once. A payment plan may allow an eligible taxpayer to pay an agreed amount by instalments over a fixed period, subject to the ATO’s assessment and available service options. The arrangement must deal with the existing balance without making future tax obligations unaffordable.
            </span>
            <span className="block mt-2">
              Financially Up provides ATO payment plan help to individuals and businesses that need to understand their debt, available cash flow and proposed repayments. We can reconcile the account, identify outstanding lodgements, help prepare a realistic proposal and assist with ATO communication within the agreed engagement.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.6 • ATO Payment Arrangement Support"
        highlights={[
          "Registered Tax Agent #26234055",
          "Eligible Online Portal Help (≤$200,000)",
          "Realistic Cash-Flow Feasibility Testing",
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

      {/* 1. What is an ATO payment plan? */}
      <WhatIsAtoPaymentPlan />

      {/* 2. When should you seek help? */}
      <WhenToSeekPaymentPlanHelp />

      {/* 3. Can you use the ATO online payment-plan service? */}
      <OnlinePaymentPlanThreshold />

      {/* 4. What information may be needed? */}
      <WhatInformationNeededPaymentPlan />

      {/* 5. What makes a payment proposal sustainable? */}
      <SustainablePaymentProposal />

      {/* 6. What if you already have a payment plan? */}
      <ExistingPaymentPlanDefault />

      {/* 7. How Financially Up can help */}
      <HowFinanciallyUpHelpsPaymentPlan />

      {/* 8. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpPaymentPlan />

      {/* 9. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="ATO Payment Plan FAQs"
        description="Clear guidance on general interest charges, repayment frequencies, concurrent lodgements, and approval criteria."
        items={paymentPlanFaqs}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Workable Next Steps"
        title="Unable to Pay an ATO Debt in Full?"
        subtitle="Bring your latest ATO account details and an overview of current income, essential costs and upcoming tax obligations. We can help you assess a workable next step and prepare a supportable instalment plan."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 11. Sibling Service Ribbon */}
      <RelatedPaymentPlansRibbon />
    </main>
  );
}
