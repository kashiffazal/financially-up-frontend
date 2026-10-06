import React from "react";
import ServiceHero from "@/components/website/ServiceHero";
import WhatAsicComplianceCovers from "./components/WhatAsicComplianceCovers";
import AsicServicesGrid from "./components/AsicServicesGrid";
import AnnualReviewAndSolvency from "./components/AnnualReviewAndSolvency";
import AsicLodgementsAndChanges from "./components/AsicLodgementsAndChanges";
import WhenToSeekAsicSupport from "./components/WhenToSeekAsicSupport";
import AsicVsTaxCompliance from "./components/AsicVsTaxCompliance";
import WhatInformationNeededAsic from "./components/WhatInformationNeededAsic";
import WhyChooseFinanciallyUpAsic from "./components/WhyChooseFinanciallyUpAsic";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: '7th Pillar ASIC.docx' (Section 1)
 */
export const metadata = {
  title: "ASIC Compliance Services Australia | Financially Up",
  description:
    "ASIC compliance services for Australian companies, including annual reviews, company updates, lodgements and registered agent support.",
  keywords: [
    "ASIC compliance services Australia",
    "ASIC registered agent",
    "company changes Form 484",
    "business name renewal Australia",
    "voluntary company deregistration",
    "director changes ASIC",
    "share transfers ASIC",
    "annual review solvency resolution",
    "corporate secretarial services",
    "Australian Securities and Investments Commission compliance",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/",
  },
  openGraph: {
    title: "ASIC Compliance Services Australia | Financially Up",
    description:
      "ASIC compliance services for Australian companies, including annual reviews, company updates, lodgements and registered agent support.",
    url: "https://financiallyup.com.au/services/asic/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration for ASIC Compliance Hub
 */
const asicBreadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "ASIC Compliance" },
];

/**
 * 5 Practice Scope Items for Hero sidebar
 */
const asicScopeItems = [
  {
    icon: "calendar",
    theme: "emerald",
    title: "ASIC Annual Reviews",
    description: "Annual statement verification, review fee due dates & solvency resolutions",
    tag: "Annual Reviews",
  },
  {
    icon: "file-text",
    theme: "blue",
    title: "Company Detail Changes",
    description: "Form 484 notifications, director & address updates within 28 days",
    tag: "Form 484",
  },
  {
    icon: "safety",
    theme: "teal",
    title: "Registered Agent Services",
    description: "Official ASIC correspondence address & agent portal lodgements",
    tag: "Agent Services",
  },
  {
    icon: "solution",
    theme: "amber",
    title: "Share Issues & Transfers",
    description: "Member register updates, share transfers & corporate secretarial",
    tag: "Share Capital",
  },
  {
    icon: "bank",
    theme: "purple",
    title: "Corporate Register Maintenance",
    description: "Minutes, director consents, constitutions & solvency records",
    tag: "Registers",
  },
];

/**
 * Trust & Credential Verification Badges
 */
const asicVerificationBadges = [
  {
    icon: "australia",
    label: "Australia-Wide",
  },
  {
    icon: "compliant",
    label: "ASIC & ATO Compliant",
  },
  {
    icon: "team",
    label: "CPA & IPA Qualified",
  },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (7th Pillar ASIC.docx, Section 1)
 */
const asicFaqs = [
  {
    key: "1",
    label: "What are ASIC compliance services?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ASIC compliance services assist a company with keeping its registered information and required corporate filings up to date. The exact scope depends on the company and may include annual review administration, company-detail changes, common ASIC lodgements and registered-agent support.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is ASIC compliance the same as company tax compliance?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. ASIC compliance relates to company registration information and corporate obligations, while company tax compliance relates to tax returns, tax payments and other ATO requirements. Some events affect both, so the records should be coordinated.
      </p>
    ),
  },
  {
    key: "3",
    label: "How quickly do company changes need to be reported to ASIC?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ASIC requires many common company-detail changes to be notified within 28 days. Different rules can apply to particular filings, so the relevant event and form should be checked rather than assuming every change has the same deadline.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can an accountant lodge ASIC changes for my company?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A company can authorise appropriate representatives or appoint a registered agent to carry out certain ASIC-related tasks. Directors still retain their own legal responsibilities and must ensure the information provided for lodgement is accurate.
      </p>
    ),
  },
  {
    key: "5",
    label: "Do ASIC services include legal advice?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Financially Up can assist with accounting, tax and corporate compliance administration within scope. Legal advice or legal documentation may require an appropriately qualified legal adviser.
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
      name: "What are ASIC compliance services?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ASIC compliance services assist a company with keeping its registered information and required corporate filings up to date. The exact scope depends on the company and may include annual review administration, company-detail changes, common ASIC lodgements and registered-agent support.",
      },
    },
    {
      "@type": "Question",
      name: "Is ASIC compliance the same as company tax compliance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. ASIC compliance relates to company registration information and corporate obligations, while company tax compliance relates to tax returns, tax payments and other ATO requirements. Some events affect both, so the records should be coordinated.",
      },
    },
    {
      "@type": "Question",
      name: "How quickly do company changes need to be reported to ASIC?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ASIC requires many common company-detail changes to be notified within 28 days. Different rules can apply to particular filings, so the relevant event and form should be checked rather than assuming every change has the same deadline.",
      },
    },
    {
      "@type": "Question",
      name: "Can an accountant lodge ASIC changes for my company?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A company can authorise appropriate representatives or appoint a registered agent to carry out certain ASIC-related tasks. Directors still retain their own legal responsibilities and must ensure the information provided for lodgement is accurate.",
      },
    },
    {
      "@type": "Question",
      name: "Do ASIC services include legal advice?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Financially Up can assist with accounting, tax and corporate compliance administration within scope. Legal advice or legal documentation may require an appropriately qualified legal adviser.",
      },
    },
  ],
};

/**
 * AsicMainPage
 * ============
 * 7th Pillar: ASIC Compliance Services Australia Hub Page (/services/asic/).
 *
 * Implements 100% complete, verbatim content from '7th Pillar ASIC.docx' (Section 1),
 * structured into cohesive, responsive sections with strict alternating background palette.
 */
export default function AsicMainPage() {
  return (
    <main className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors">
      {/* Structured Data: FAQPage JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 1. Hero Section using Flagship Mutual ServiceHero */}
      <ServiceHero
        breadcrumbs={asicBreadcrumbs}
        statusBadge={{
          icon: "safety",
          text: "ATO Registered Tax Agents • ASIC Registered Agent",
        }}
        title="ASIC Compliance Services Australia"
        titleHighlight="Corporate Records & Filings"
        description={
          <p className="m-0">
            Running a company involves ongoing ASIC obligations as well as tax and accounting responsibilities. ASIC compliance services help company directors keep corporate records current, respond to annual review requirements, lodge company changes and manage routine ASIC correspondence without treating company administration as an afterthought.
          </p>
        }
        subDescription={
          <p className="m-0">
            Financially Up supports Australian companies with practical ASIC company compliance services alongside accounting and tax work. The scope can include reviewing annual statements, coordinating company changes, assisting with common ASIC lodgements and maintaining a clearer link between the company register and the records used for accounting and tax compliance.
          </p>
        }
        scopeNotice={
          <p className="m-0">
            If you need help bringing ASIC records up to date or managing ongoing company administration, an initial discussion can identify the outstanding items, relevant deadlines and the appropriate service scope. Book an Appointment
          </p>
        }
        primaryButton={{
          text: "Book an Appointment",
          href: "/book-an-appointment",
          icon: "arrow-right",
        }}
        secondaryButton={{
          text: "Explore Services",
          href: "#asic-services-overview",
        }}
        supportingText="Trusted corporate secretarial and ASIC compliance for Australian company directors."
        scopeTag="Corporate Scope Overview"
        scopeTitle="ASIC Compliance Practice"
        scopeStatus="2024–25 Ready"
        scopeItems={asicScopeItems}
        verificationBadges={asicVerificationBadges}
        backgroundImage="/images/services/page-hero-bg.jpg"
        backgroundAlt="Australian ASIC Compliance Services"
      />

      {/* 2. What Do ASIC Compliance Services Cover? (Lite Brand Gradient) */}
      <WhatAsicComplianceCovers />

      {/* 3. Our ASIC Compliance Services - Sub-service Navigation Grid (Clean White) */}
      <AsicServicesGrid />

      {/* 4. Annual Company Reviews and Keeping ASIC Details Current (Lite Brand Gradient) */}
      <AnnualReviewAndSolvency />

      {/* 5. ASIC Lodgements and Company Changes (Clean White) */}
      <AsicLodgementsAndChanges />

      {/* 6. When Should a Company Seek Help With ASIC Compliance? (Lite Brand Gradient) */}
      <WhenToSeekAsicSupport />

      {/* 7. ASIC Compliance, Tax and Accounting are Connected but Different (Clean White) */}
      <AsicVsTaxCompliance />

      {/* 8. Information We May Need (Lite Brand Gradient) */}
      <WhatInformationNeededAsic />

      {/* 9. Why Choose Financially Up for ASIC Company Compliance Services? (Clean White) */}
      <WhyChooseFinanciallyUpAsic />

      {/* 10. Frequently Asked Questions (Lite Brand Gradient) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about ASIC compliance services, annual reviews, 28-day notification deadlines, and registered agent support."
        image="/images/services/faq.webp"
        imageAlt="ASIC Compliance Frequently Asked Questions"
        items={asicFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 11. Pre-Footer Call to Action Banner (Dark Brand Accent) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="Book an Appointment"
        subtitle="If you need ongoing ASIC compliance support or help resolving specific company filings, book an appointment with Financially Up to discuss the company, current records and the work required. Book an Appointment"
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Us"
      />
    </main>
  );
}
