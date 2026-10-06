import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatAtoHelpIncludes from "./components/WhatAtoHelpIncludes";
import AtoHelpServicesGrid from "./components/AtoHelpServicesGrid";
import WhenToGetAtoHelp from "./components/WhenToGetAtoHelp";
import AtoNoticesAndDeadlines from "./components/AtoNoticesAndDeadlines";
import HowFinanciallyUpHelpsAto from "./components/HowFinanciallyUpHelpsAto";
import WhatInformationNeededAto from "./components/WhatInformationNeededAto";
import AtoResolutionProcess from "./components/AtoResolutionProcess";
import AfterFirstReview from "./components/AfterFirstReview";
import WhyChooseFinanciallyUpAto from "./components/WhyChooseFinanciallyUpAto";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "ATO Help Australia | Tax Agent Support | Financially Up",
  description:
    "Need help dealing with the ATO? Financially Up assists with tax notices, lodgements, account issues, debt and audit matters across Australia.",
  keywords: [
    "ATO help Australia",
    "ATO debt help",
    "ATO audit support",
    "overdue tax returns",
    "ATO penalty remission",
    "voluntary disclosure ATO",
    "ATO payment plan",
    "director penalty notice DPN",
    "ATO representation",
    "overdue BAS lodgement",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/",
  },
  openGraph: {
    title: "ATO Help Australia | Tax Agent Support | Financially Up",
    description:
      "Need help dealing with the ATO? Financially Up assists with tax notices, lodgements, account issues, debt and audit matters across Australia.",
    url: "https://financiallyup.com.au/services/ato-help/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for ATO Help
 */
const atoBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "ATO Help" },
];

/**
 * 5 Practice Scope Items for ATO Help
 */
const atoScopeItems = [
  {
    icon: "bank",
    theme: "emerald",
    title: "ATO Debt & Payment Plans",
    description: "GIC remission, interest negotiation & structured instalments",
    tag: "Debt & Plans",
  },
  {
    icon: "audit",
    theme: "blue",
    title: "ATO Audit & Review Defence",
    description: "Information requests, data-matching queries & workpapers",
    tag: "Audit Defence",
  },
  {
    icon: "calendar",
    theme: "amber",
    title: "Overdue Returns & BAS Catch-Up",
    description: "Multi-year lodgement catch-up & safe harbour provisions",
    tag: "Catch-Up",
  },
  {
    icon: "safety",
    theme: "purple",
    title: "Penalty & Interest Remissions",
    description: "FTL penalties, general interest charge (GIC) remission",
    tag: "Remissions",
  },
  {
    icon: "team",
    theme: "teal",
    title: "Tax Agent Representation",
    description: "Authorised portal access & client-to-agent nominations",
    tag: "Representation",
  },
];

/**
 * Trust & Credential Verification Badges
 */
const atoVerificationBadges = [
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
    label: "CPA & IPA Qualified",
  },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Pillar 11: 1- ATO Help Australia)
 */
const atoFaqs = [
  {
    key: "1",
    label: "Can a tax agent speak to the ATO for me?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, where the agent is properly appointed and recorded for the relevant tax affairs. The
        authority and digital access available depend on the client type, the obligations involved
        and the appointment completed.
      </p>
    ),
  },
  {
    key: "2",
    label: "What if I have several overdue ATO issues at once?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Start by listing all outstanding lodgements, debts, notices and deadlines. Urgent
        correspondence can then be addressed while the underlying tax work is prioritised and brought
        up to date.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does ATO help include legal representation?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. Financially Up provides tax and accounting assistance within scope. Formal
        legal representation, litigation or insolvency work may require an appropriately qualified
        specialist.
      </p>
    ),
  },
  {
    key: "4",
    label: "Should I wait until I have every document before asking for help?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. If a deadline is approaching, review the notice early. Missing records can then be
        identified and the appropriate response plan considered.
      </p>
    ),
  },
];

/**
 * JSON-LD Schema for Google Search Rich Snippets
 */
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can a tax agent speak to the ATO for me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, where the agent is properly appointed and recorded for the relevant tax affairs. The authority and digital access available depend on the client type, the obligations involved and the appointment completed.",
      },
    },
    {
      "@type": "Question",
      name: "What if I have several overdue ATO issues at once?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Start by listing all outstanding lodgements, debts, notices and deadlines. Urgent correspondence can then be addressed while the underlying tax work is prioritised and brought up to date.",
      },
    },
    {
      "@type": "Question",
      name: "Does ATO help include legal representation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not automatically. Financially Up provides tax and accounting assistance within scope. Formal legal representation, litigation or insolvency work may require an appropriately qualified specialist.",
      },
    },
    {
      "@type": "Question",
      name: "Should I wait until I have every document before asking for help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. If a deadline is approaching, review the notice early. Missing records can then be identified and the appropriate response plan considered.",
      },
    },
  ],
};

/**
 * AtoHelpMainPage
 * ===============
 * Pillar 11: ATO Help Australia Hub Page (/services/ato-help/).
 *
 * Implements 100% verbatim client content from '11th Pillar ATO Help.docx' (1- ATO Help Australia),
 * structured into 11 responsive sections with strict alternating background palette:
 * - Section 1: Hero (Dark / Brand Hero)
 * - Section 2: What Does ATO Help Include? (Lite Brand Gradient)
 * - Section 3: Our ATO Help Services - 10 Sub-Service Navigation Grid (Clean White)
 * - Section 4: When Should You Get Help with the ATO? (Lite Brand Gradient)
 * - Section 5: Start with the Notice, Deadline and Underlying Records (Clean White)
 * - Section 6: How Financially Up Can Assist with ATO Matters (Lite Brand Gradient)
 * - Section 7: What Should You Have Ready? (Clean White)
 * - Section 8: A Practical Process for Resolving an ATO Issue (Lite Brand Gradient)
 * - Section 9: What Happens After the First Review? (Clean White)
 * - Section 10: Why Choose Financially Up? (Lite Brand Gradient)
 * - Section 11: Frequently Asked Questions (Clean White)
 * - Section 12: Call to Action Banner (Dark Brand Accent)
 */
export default function AtoHelpMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship ServiceHero with Exact H1 & Verbatim Lead Text */}
      <ServiceHero
        breadcrumbs={atoBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • Australia-Wide",
        }}
        title="ATO Help"
        titleHighlight="Australia"
        description={
          <p className="m-0">
            If you have received an ATO letter, have overdue lodgements, are unsure about an account
            balance or need help responding to the Australian Taxation Office, the right starting
            point is to identify exactly what the ATO is asking for and what deadline or tax issue is
            involved. Financially Up provides ATO help in Australia for individuals and businesses that
            want a registered tax agent to review the issue, organise the underlying tax work and
            communicate with the ATO where authorised.
          </p>
        }
        subDescription={
          <p className="m-0">
            ATO support can range from straightforward administration to a complex tax matter. This
            page covers broad ATO assistance. Dedicated services are available for ATO debt help and
            ATO audit support where the issue requires a more focused response.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            Need help understanding an ATO notice or unresolved tax issue? Book an Appointment.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#ato-services-overview",
        }}
        supportingText="Registered tax agent advocacy, lodgement catch-up, and debt resolution before the ATO."
        scopeTag="ATO Advocacy Scope"
        scopeTitle="Tax Administration Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={atoScopeItems}
        verificationBadges={atoVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="ATO Help Australia Tax Agent Support"
      />

      {/* 2. What Does ATO Help Include? (Lite Brand Gradient) */}
      <WhatAtoHelpIncludes />

      {/* 3. Our ATO Help Services - 10 Card Sub-Service Grid (Clean White) */}
      <AtoHelpServicesGrid />

      {/* 4. When Should You Get Help with the ATO? (Lite Brand Gradient) */}
      <WhenToGetAtoHelp />

      {/* 5. Start with the Notice, Deadline and Underlying Records (Clean White) */}
      <AtoNoticesAndDeadlines />

      {/* 6. How Financially Up Can Assist with ATO Matters (Lite Brand Gradient) */}
      <HowFinanciallyUpHelpsAto />

      {/* 7. What Should You Have Ready? (Clean White) */}
      <WhatInformationNeededAto />

      {/* 8. A Practical Process for Resolving an ATO Issue (Lite Brand Gradient) */}
      <AtoResolutionProcess />

      {/* 9. What Happens After the First Review? (Clean White) */}
      <AfterFirstReview />

      {/* 10. Why Choose Financially Up? (Lite Brand Gradient) */}
      <WhyChooseFinanciallyUpAto />

      {/* 11. Frequently Asked Questions (Clean White) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about tax agent authority, multiple overdue issues, legal representation limits, and deadline timing."
        image="/images/services/faq.webp"
        imageAlt="ATO Help Frequently Asked Questions"
        items={atoFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 12. Pre-Footer Call to Action Banner (Dark Brand Accent) with Exact Document Verbatim Text */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="Book an Appointment"
        subtitle="If you have an ATO notice, overdue lodgement or unresolved tax issue, we can review the position and clarify the next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
