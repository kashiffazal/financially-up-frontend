import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhenAccountantHelps from "./components/WhenAccountantHelps";
import ServicesGrid from "./components/ServicesGrid";
import WhoWeHelp from "./components/WhoWeHelp";
import ProcessSteps from "./components/ProcessSteps";
import PreDecisionAdvice from "./components/PreDecisionAdvice";
import WhatToExpect from "./components/WhatToExpect";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document)
 */
export const metadata = {
  title: "Individual Tax Accountant Australia | Financially Up",
  description:
    "Need an individual tax accountant in Australia? Financially Up Pty Ltd assists with individual tax services, investments, property, CGT, foreign income and more.",
  keywords: [
    "individual tax accountant",
    "individual tax return accountant",
    "individual tax return Australia",
    "personal tax return accountant",
    "online individual tax return",
    "individual tax services",
    "individual tax accountant Australia",
    "personal tax accountant",
    "tax accountant for individuals",
    "registered tax accountant",
    "online tax accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/",
  },
  openGraph: {
    title: "Individual Tax Accountant Australia | Financially Up",
    description:
      "Need an individual tax accountant in Australia? Financially Up Pty Ltd assists with individual tax services, investments, property, CGT, foreign income and more.",
    url: "https://financiallyup.com.au/services/individual-tax/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for Individual Tax
 */
const individualTaxBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Individual Tax" },
];

/**
 * 5 Practice Scope Items for Individual Tax (Exact offerings from client doc)
 */
const individualTaxScopeItems = [
  {
    icon: "wallet",
    theme: "emerald",
    title: "Salary, Wages & Executive Income",
    description: "Professional allowances, work deductions & PAYG",
    tag: "PAYG",
  },
  {
    icon: "home",
    theme: "teal",
    title: "Rental Properties, CGT & Crypto",
    description: "Negative gearing, depreciation schedules & capital gains",
    tag: "CGT",
  },
  {
    icon: "shop",
    theme: "cyan",
    title: "Sole Traders & Multi-Stream Earners",
    description: "ABN income, PSI rules, expense claims & GST offsets",
    tag: "ABN",
  },
  {
    icon: "history",
    theme: "amber",
    title: "Overdue Returns & Amendments",
    description: "Prior-year lodgements, missing records & ATO reviews",
    tag: "Prior Years",
  },
  {
    icon: "calendar",
    theme: "purple",
    title: "Flexible Consultations",
    description: "100% online video meetings or in-person appointments",
    tag: "Online & In-Person",
  },
];

/**
 * Trust & Credential Verification Badges
 */
const individualTaxVerificationBadges = [
  {
    icon: "australia",
    label: "Australia-Wide",
  },
  {
    icon: "compliant",
    label: "100% ATO Compliant",
  },
  {
    icon: "team",
    label: "Dedicated CPA Team",
  },
];

/**
 * 9 Exact Frequently Asked Questions from Client Document (Pillar 1)
 */
const individualTaxFaqs = [
  {
    key: "1",
    label: "Can I lodge my own individual tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Individuals can use ATO online services, including myTax, to
        prepare and lodge their own returns. You may prefer an accountant when
        your affairs are complex, you are uncertain about the treatment of an
        item or you want advice as well as return preparation.
      </p>
    ),
  },
  {
    key: "2",
    label: "What documents will I need?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The requirements depend on your circumstances. Common records include
        income statements, bank interest, dividend or managed-fund statements,
        rental property income and expenses, work-related expense records,
        private health insurance information, capital gains records, crypto
        asset transaction reports and foreign income documents. We will confirm
        the records relevant to your matter.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can Financially Up prepare my tax return online?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up assists clients across Australia online. You can
        book through the website or arrange an appointment by phone. Online
        meetings are conducted through Outlook Calendar online meeting links,
        and in-person appointments are available if you prefer to meet face to
        face.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you help with overdue returns or amendments?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can review the outstanding years or the return already lodged,
        identify the information required and prepare the relevant return or
        amendment. Further work, including responses to ATO correspondence, will
        be confirmed separately where needed.
      </p>
    ),
  },
  {
    key: "5",
    label:
      "Do you handle investment property, foreign income and crypto assets?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. These matters form part of Financially Up’s individual tax service
        offering. The scope and fee will depend on the number and complexity of
        the transactions, the quality of the records and whether separate advice
        is required.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can Financially Up help with broader financial advice?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up provides broader financial advice in addition to
        tax-related advice. The scope of any advice will be confirmed before
        work begins, including whether the matter should be handled as a
        separate engagement.
      </p>
    ),
  },
  {
    key: "7",
    label: "How much does the service cost?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Fees depend on the work required and the complexity of your
        circumstances. We provide upfront, transparent fee quotes before
        commencing work so there are no unexpected costs.
      </p>
    ),
  },
  {
    key: "8",
    label: "How long will my tax return take?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Timing depends on the complexity of the return, whether all records have
        been provided and the firm’s current workload. We will provide an
        estimated timeframe once your documentation has been reviewed.
      </p>
    ),
  },
  {
    key: "9",
    label: "How can I check whether a tax agent is registered?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You can check a tax agent’s registration through the Tax Practitioners
        Board public register.
      </p>
    ),
  },
];

// JSON-LD Schema for Google Rich Search Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can I lodge my own individual tax return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Individuals can use ATO online services, including myTax, to prepare and lodge their own returns. You may prefer an accountant when your affairs are complex, you are uncertain about the treatment of an item or you want advice as well as return preparation.",
      },
    },
    {
      "@type": "Question",
      name: "What documents will I need?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The requirements depend on your circumstances. Common records include income statements, bank interest, dividend or managed-fund statements, rental property income and expenses, work-related expense records, private health insurance information, capital gains records, crypto asset transaction reports and foreign income documents. We will confirm the records relevant to your matter.",
      },
    },
    {
      "@type": "Question",
      name: "Can Financially Up prepare my tax return online?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Financially Up assists clients across Australia online. You can book through the website or arrange an appointment by phone. Online meetings are conducted through Outlook Calendar online meeting links, and in-person appointments are available if you prefer to meet face to face.",
      },
    },
    {
      "@type": "Question",
      name: "Can you help with overdue returns or amendments?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can review the outstanding years or the return already lodged, identify the information required and prepare the relevant return or amendment. Further work, including responses to ATO correspondence, will be confirmed separately where needed.",
      },
    },
    {
      "@type": "Question",
      name: "Do you handle investment property, foreign income and crypto assets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. These matters form part of Financially Up’s individual tax service offering. The scope and fee will depend on the number and complexity of the transactions, the quality of the records and whether separate advice is required.",
      },
    },
    {
      "@type": "Question",
      name: "Can Financially Up help with broader financial advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Financially Up provides broader financial advice in addition to tax-related advice. The scope of any advice will be confirmed before work begins, including whether the matter should be handled as a separate engagement.",
      },
    },
    {
      "@type": "Question",
      name: "How much does the service cost?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Fees depend on the work required and the complexity of your circumstances. We provide upfront, transparent fee quotes before commencing work so there are no unexpected costs.",
      },
    },
    {
      "@type": "Question",
      name: "How long will my tax return take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timing depends on the complexity of the return, whether all records have been provided and the firm’s current workload. We will provide an estimated timeframe once your documentation has been reviewed.",
      },
    },
    {
      "@type": "Question",
      name: "How can I check whether a tax agent is registered?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can check a tax agent’s registration through the Tax Practitioners Board public register.",
      },
    },
  ],
};

/**
 * IndividualTaxMainPage
 * =====================
 * Pillar 1: Individual Tax Main Hub Page (/services/individual-tax/).
 * Assembles all modular sections using the exact professional client copy,
 * the central FaqSection, and the relocated CallToActionBanner as Pre-Footer.
 */
export default function IndividualTaxMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={individualTaxBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • Australia-Wide",
        }}
        title="Individual Tax Accountant"
        titleHighlight="for Australians"
        description={
          <p className="m-0">
            Your tax return can become more difficult when you have investments,
            rental property, capital gains, foreign income, employee shares,
            crypto assets, several income sources or sole trader income.{" "}
            Financially Up Pty Ltd helps individuals understand their
            obligations, prepare accurate tax returns and obtain tax advice that
            reflects their circumstances.
          </p>
        }
        subDescription={
          <p className="m-0">
            We assist clients Australia-wide. Appointments can be booked online
            through the website or arranged over the phone.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            If your matter needs advice beyond preparing an annual return,
            including broader financial advice, we will identify the required
            scope before the work begins.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Start My Tax Return",
          href: "/resources/engagement-forms/individual-engagement-form",
        }}
        supportingText="Join countless Australians who experience a stress-free tax lodgement with us."
        scopeTag="Practice Scope Overview"
        scopeTitle="Individual Tax Practice"
        scopeStatus="2024–25 Open"
        scopeItems={individualTaxScopeItems}
        verificationBadges={individualTaxVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian Individual Tax Accountant"
      />

      {/* 2. When an Individual Tax Accountant May Help & 5 Core Scope Items */}
      <WhenAccountantHelps />

      {/* 3. Our Individual Tax Services - 12 Card Navigation Grid */}
      <ServicesGrid />

      {/* 4. Who We Help - 7 Target Profiles & Corporate Entity Redirection */}
      <WhoWeHelp />

      {/* 5. How the Process Works - 5-Step Visual Pathway */}
      <ProcessSteps />

      {/* 6. Tax Advice Before Important Decisions */}
      <PreDecisionAdvice />

      {/* 7. What You Can Expect - 6 Commitments & Australian Office Verification */}
      <WhatToExpect />

      {/* 8. Frequently Asked Questions (Central FaqSection with 9 Exact FAQs; supports showSideColumn toggle) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about individual tax return preparation, record keeping, online meetings, and ATO lodgement."
        image="/images/services/faq.webp"
        imageAlt="Individual Tax Return Frequently Asked Questions"
        items={individualTaxFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Moved to components/website/CallToActionBanner) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Speak With an Individual Tax Accountant"
        subtitle="Book an appointment online, discuss your circumstances or get clear advice about your return before lodging."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
