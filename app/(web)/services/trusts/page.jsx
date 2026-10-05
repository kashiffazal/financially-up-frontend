import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatTrustAccountantDoes from "./components/WhatTrustAccountantDoes";
import TrustServicesGrid from "./components/TrustServicesGrid";
import TrustTypesComparison from "./components/TrustTypesComparison";
import June30DistributionNotice from "./components/June30DistributionNotice";
import TrustVsCompanyTaxation from "./components/TrustVsCompanyTaxation";
import CommonTrustAccountingIssues from "./components/CommonTrustAccountingIssues";
import WhatInformationNeededTrusts from "./components/WhatInformationNeededTrusts";
import WhyChooseFinanciallyUpTrusts from "./components/WhyChooseFinanciallyUpTrusts";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Trust Accountant & Trust Accounting Services | Financially Up",
  description:
    "Need a trust accountant? Financially Up supports trust accounting, tax returns, distributions and compliance for trusts across Australia.",
  keywords: [
    "trust accountant",
    "trust accounting services Australia",
    "family trust accountant",
    "unit trust accounting",
    "trust tax returns",
    "trust distributions 30 June",
    "bare trust accounting",
    "corporate trustee services",
    "trust restructuring",
    "discretionary trust tax return",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/",
  },
  openGraph: {
    title: "Trust Accountant & Trust Accounting Services | Financially Up",
    description:
      "Need a trust accountant? Financially Up supports trust accounting, tax returns, distributions and compliance for trusts across Australia.",
    url: "https://financiallyup.com.au/services/trusts/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for Trust Accounting
 */
const trustBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Trust Accounting" },
];

/**
 * 5 Practice Scope Items for Trust Accounting
 */
const trustScopeItems = [
  {
    icon: "user",
    theme: "emerald",
    title: "Family & Discretionary Trusts",
    description: "Beneficiary accounting, balance sheets & distribution schedules",
    tag: "Family Trusts",
  },
  {
    icon: "line-chart",
    theme: "blue",
    title: "Unit Trusts & Fixed Entitlements",
    description: "Unit registers, proportional distribution & capital allocations",
    tag: "Unit Trusts",
  },
  {
    icon: "calendar",
    theme: "amber",
    title: "June 30 Distribution Resolutions",
    description: "Year-end resolution drafting support & pre-30 June tax planning",
    tag: "30 June Planning",
  },
  {
    icon: "bank",
    theme: "purple",
    title: "Corporate Trustee Governance",
    description: "Pty Ltd trustee accounting, ASIC reviews & legal asset separation",
    tag: "Trustees",
  },
  {
    icon: "file-text",
    theme: "teal",
    title: "Trust Tax Returns & Compliance",
    description: "Section 95 net income calculation, franking credits & CGT discounts",
    tag: "Tax Returns",
  },
];

/**
 * Trust & Credential Verification Badges
 */
const trustVerificationBadges = [
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
 * 4 Exact Frequently Asked Questions from Client Document (Pillar 8)
 */
const trustFaqs = [
  {
    key: "1",
    label: "Does every trust need a trust tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, a trustee must lodge a trust tax return each year regardless of the amount of net
        income, unless the ATO advises that a return is not required. Different return forms apply to
        some specialised trusts. A trust accountant can review the trust&apos;s circumstances and
        confirm the applicable reporting requirement.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is a trust the same as a company?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A company is a separate legal entity owned by shareholders, while a trust is an
        arrangement under which a trustee holds and administers trust property for beneficiaries.
        Their legal, accounting and tax obligations differ.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can Financially Up prepare trust distribution resolutions?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We can assist with the accounting and tax information relevant to distribution decisions and
        can help coordinate the annual process. The trustee must act under the trust deed, and legal
        drafting or interpretation may require a lawyer. The exact service scope should be agreed
        before year-end.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you take over a trust from another accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can review the available prior-year accounts, tax returns, trust deed and current
        accounting records, identify missing information and agree on the work needed to bring the
        trust&apos;s accounting and compliance into order.
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
      name: "Does every trust need a trust tax return?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generally, a trustee must lodge a trust tax return each year regardless of the amount of net income, unless the ATO advises that a return is not required. Different return forms apply to some specialised trusts. A trust accountant can review the trust's circumstances and confirm the applicable reporting requirement.",
      },
    },
    {
      "@type": "Question",
      name: "Is a trust the same as a company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A company is a separate legal entity owned by shareholders, while a trust is an arrangement under which a trustee holds and administers trust property for beneficiaries. Their legal, accounting and tax obligations differ.",
      },
    },
    {
      "@type": "Question",
      name: "Can Financially Up prepare trust distribution resolutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We can assist with the accounting and tax information relevant to distribution decisions and can help coordinate the annual process. The trustee must act under the trust deed, and legal drafting or interpretation may require a lawyer. The exact service scope should be agreed before year-end.",
      },
    },
    {
      "@type": "Question",
      name: "Can you take over a trust from another accountant?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We can review the available prior-year accounts, tax returns, trust deed and current accounting records, identify missing information and agree on the work needed to bring the trust's accounting and compliance into order.",
      },
    },
  ],
};

/**
 * TrustMainPage
 * =============
 * Pillar 8: Trust Accountant & Trust Accounting Services Hub Page (/services/trusts/).
 *
 * Implements the full client content from '8th Pillar Trust Services.docx',
 * structured into 10 cohesive, responsive sections with strict alternating background palette.
 */
export default function TrustMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={trustBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • Australia-Wide",
        }}
        title="Trust Accountant & Accounting"
        titleHighlight="Australia-Wide Advisory"
        description={
          <p className="m-0">
            A trust can separate legal ownership from beneficial interests, but it also creates ongoing accounting, tax and administrative responsibilities. A trust accountant helps trustees keep accurate records, understand the tax position of the trust, prepare required reporting and coordinate annual compliance so decisions are supported by reliable information.
          </p>
        }
        subDescription={
          <p className="m-0">
            Financially Up provides trust accounting services for trustees, family groups, business owners and investors across Australia. Our work can include trust accounts, tax-return preparation, distribution-related accounting, beneficiary reporting and coordination of related tax matters.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            Need help with your trust accounts, annual tax returns, or June 30 distribution planning? Book an appointment to discuss your trust deed, current records, and upcoming deadlines.
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#trust-services-overview",
        }}
        supportingText="Trusted accounting, distribution planning, and tax compliance for Australian private trusts."
        scopeTag="Trust Scope Overview"
        scopeTitle="Trust Accounting Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={trustScopeItems}
        verificationBadges={trustVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian Trust Accountant Services"
      />

      {/* 2. What Does a Trust Accountant Do? (Lite Brand Gradient) */}
      <WhatTrustAccountantDoes />

      {/* 3. Our Trust Services - 10 Card Navigation Grid (Clean White) */}
      <TrustServicesGrid />

      {/* 4. Four Common Trust Types Compared (Lite Brand Gradient - ProfileCardsGrid) */}
      <TrustTypesComparison />

      {/* 5. June 30 Distribution Resolutions & Timing Rules (Clean White - AdvisoryReassuranceBanner) */}
      <June30DistributionNotice />

      {/* 6. Trust Taxation vs Company Taxation (Lite Brand Gradient) */}
      <TrustVsCompanyTaxation />

      {/* 7. Common Trust Accounting Issues We Help Identify (Clean White) */}
      <CommonTrustAccountingIssues />

      {/* 8. What Records Are Needed for Trust Accounting? - 6-Item Checklist (Lite Brand Gradient) */}
      <WhatInformationNeededTrusts />

      {/* 9. Why Choose Financially Up - Credentials & Contact Clarity (Clean White) */}
      <WhyChooseFinanciallyUpTrusts />

      {/* 10. Frequently Asked Questions (Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about trust tax returns, company differences, distribution resolution requirements, and changing accountants."
        image="/images/services/faq.webp"
        imageAlt="Trust Accounting Frequently Asked Questions"
        items={trustFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Dark Brand Accent) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Get Practical Trust Accounting Support"
        subtitle="Book an appointment with Financially Up to review your trust deed, prepare annual financial accounts, or plan your upcoming June 30 beneficiary distributions."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
