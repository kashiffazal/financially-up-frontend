import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatSmsfAccountantDoes from "./components/WhatSmsfAccountantDoes";
import SmsfServicesGrid from "./components/SmsfServicesGrid";
import WhoNeedsSmsfSupport from "./components/WhoNeedsSmsfSupport";
import KeyAnnualSmsfTasks from "./components/KeyAnnualSmsfTasks";
import WhatRecordsTrusteesKeep from "./components/WhatRecordsTrusteesKeep";
import SmsfAccountingVsFinancialAdvice from "./components/SmsfAccountingVsFinancialAdvice";
import HowFinanciallyUpHelpsSmsf from "./components/HowFinanciallyUpHelpsSmsf";
import WhyChooseFinanciallyUpSmsf from "./components/WhyChooseFinanciallyUpSmsf";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 9th Pillar SMSF.docx)
 */
export const metadata = {
  title: "SMSF Accountant & Accounting Services | Financially Up",
  description:
    "SMSF accountant support for annual accounts, tax, compliance and trustee administration. Practical Australia-wide assistance from Financially Up.",
  keywords: [
    "SMSF accountant",
    "SMSF accounting services",
    "SMSF accounting services Australia",
    "SMSF annual return",
    "SMSF audit coordination",
    "self-managed super fund accounting",
    "SMSF property accounting",
    "SMSF establishment",
    "superannuation fund tax return",
    "SMSF administration Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/smsf/",
  },
  openGraph: {
    title: "SMSF Accountant & Accounting Services | Financially Up",
    description:
      "SMSF accountant support for annual accounts, tax, compliance and trustee administration. Practical Australia-wide assistance from Financially Up.",
    url: "https://financiallyup.com.au/services/smsf/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for SMSF Accounting Hub
 */
const smsfBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "SMSF Accountant & Accounting Services" },
];

/**
 * 5 Practice Scope Items for SMSF Accounting
 */
const smsfScopeItems = [
  {
    icon: "file-text",
    theme: "emerald",
    title: "SMSF Financial Statements",
    description: "Operating statements, statements of financial position & market values",
    tag: "Financial Accounts",
  },
  {
    icon: "line-chart",
    theme: "blue",
    title: "SMSF Annual Return (SAR)",
    description: "ATO tax lodgements, tax liabilities & member allocations",
    tag: "Tax Return",
  },
  {
    icon: "audit",
    theme: "amber",
    title: "Independent Audit Coordination",
    description: "Liaison with ASIC-registered approved SMSF auditors",
    tag: "Audit Liaison",
  },
  {
    icon: "home",
    theme: "purple",
    title: "Property & Asset Valuations",
    description: "Rental records, lease reviews & 30 June market valuation evidence",
    tag: "Asset Valuations",
  },
  {
    icon: "wallet",
    theme: "teal",
    title: "Administration & Establishment",
    description: "Setup support, member contributions & retirement-phase reporting",
    tag: "Administration",
  },
];

/**
 * Trust & Credential Verification Badges (Non-wrapping single row)
 */
const smsfVerificationBadges = [
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
 * 4 Exact Frequently Asked Questions from Client Document (9th Pillar SMSF.docx)
 */
const smsfFaqs = [
  {
    key: "1",
    label: "Does every SMSF need an annual audit?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. An SMSF must be audited each income year by an independent approved SMSF auditor registered with ASIC, even if the fund had no contributions or benefit payments during the year. The audit must be completed before the SMSF annual return is lodged.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can an SMSF accountant also be the fund auditor?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The audit must satisfy independence requirements. In practice, the accounting and audit functions need to be structured so the approved auditor is independent of the work being audited.
      </p>
    ),
  },
  {
    key: "3",
    label: "What if my SMSF bookkeeping is behind?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The records can usually be reviewed and brought up to date, but the work required depends on how complete the bank, investment, contribution and member records are. It is useful to address missing information before the annual audit is due.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up tell me what investments my SMSF should buy?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Accounting and tax support is different from regulated financial product advice. If you need recommendations about particular investments or whether an SMSF is suitable for you, an appropriately authorized financial adviser may be required.
      </p>
    ),
  },
];

// JSON-LD Schema for Google Search Rich Snippets
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does every SMSF need an annual audit?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. An SMSF must be audited each income year by an independent approved SMSF auditor registered with ASIC, even if the fund had no contributions or benefit payments during the year. The audit must be completed before the SMSF annual return is lodged.",
      },
    },
    {
      "@type": "Question",
      name: "Can an SMSF accountant also be the fund auditor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The audit must satisfy independence requirements. In practice, the accounting and audit functions need to be structured so the approved auditor is independent of the work being audited.",
      },
    },
    {
      "@type": "Question",
      name: "What if my SMSF bookkeeping is behind?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The records can usually be reviewed and brought up to date, but the work required depends on how complete the bank, investment, contribution and member records are. It is useful to address missing information before the annual audit is due.",
      },
    },
    {
      "@type": "Question",
      name: "Can Financially Up tell me what investments my SMSF should buy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Accounting and tax support is different from regulated financial product advice. If you need recommendations about particular investments or whether an SMSF is suitable for you, an appropriately authorized financial adviser may be required.",
      },
    },
  ],
};

/**
 * SmsfMainPage
 * ============
 * Pillar 9: SMSF Accountant & Accounting Services Hub Page (/services/smsf/).
 *
 * Implements 100% of the verbatim client content from Section 1 of '9th Pillar SMSF.docx',
 * structured into cohesive, responsive sections with strict alternating background palette.
 */
export default function SmsfMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={smsfBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "Registered Tax Agents • Australia-Wide Support",
        }}
        title="SMSF Accountant &"
        titleHighlight="Accounting Services"
        description={
          <p className="m-0">
            Running a self-managed super fund means the trustees are responsible for the fund&apos;s records, tax, annual reporting and compliance with superannuation law. An SMSF accountant helps turn the fund&apos;s transactions and investment records into reliable annual accounts, tax reporting and information that can be provided to the independent auditor.
          </p>
        }
        subDescription={
          <p className="m-0">
            Financially Up provides SMSF accounting services for trustees who want practical support with annual accounts, the SMSF annual return and ongoing administration. We can also assist with SMSF setup and establishment and dedicated SMSF accounting where the fund needs a more focused service.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            If you already have an SMSF, are establishing one or need help bringing annual records up to date, an initial discussion can clarify the fund&apos;s position, outstanding work and the appropriate accounting scope.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#smsf-services-overview",
        }}
        supportingText="Trusted SMSF accounting, annual returns, and audit coordination for Australian trustees."
        scopeTag="Superannuation Scope Overview"
        scopeTitle="SMSF Accounting Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={smsfScopeItems}
        verificationBadges={smsfVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian SMSF Accounting Services"
      />

      {/* 2. What Does an SMSF Accountant Do? (Lite Brand Gradient) */}
      <WhatSmsfAccountantDoes />

      {/* 3. Our SMSF Accounting Services - 8 Sub-Services Grid (Clean White) */}
      <SmsfServicesGrid />

      {/* 4. Who May Need SMSF Accounting Support? (Lite Brand Gradient) */}
      <WhoNeedsSmsfSupport />

      {/* 5. Key Annual SMSF Accounting & Compliance Tasks (Clean White) */}
      <KeyAnnualSmsfTasks />

      {/* 6. What Records Should SMSF Trustees Keep? (Lite Brand Gradient) */}
      <WhatRecordsTrusteesKeep />

      {/* 7. SMSF Accounting is Different from Investment Advice (Clean White) */}
      <SmsfAccountingVsFinancialAdvice />

      {/* 8. How Financially Up Can Help (Lite Brand Gradient) */}
      <HowFinanciallyUpHelpsSmsf />

      {/* 9. Why Choose Financially Up? (Clean White) */}
      <WhyChooseFinanciallyUpSmsf />

      {/* 10. Frequently Asked Questions (Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about mandatory annual audits, auditor independence, bookkeeping backlogs, and financial advice boundaries."
        image="/images/services/faq.webp"
        imageAlt="SMSF Accounting Frequently Asked Questions"
        items={smsfFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Dark Brand Accent) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="Need an SMSF Accountant?"
        subtitle="If you need an SMSF accountant for annual accounts, tax reporting, audit preparation or ongoing accounting support, book an appointment with Financially Up to discuss your fund and the records available."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
