import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsBusinessTaxCompliance from "./components/WhatIsBusinessTaxCompliance";
import TaxReturnsAnnualCompliance from "./components/TaxReturnsAnnualCompliance";
import GstBasPaygObligations from "./components/GstBasPaygObligations";
import RecordKeepingSupportingInfo from "./components/RecordKeepingSupportingInfo";
import CommonTaxComplianceIssues from "./components/CommonTaxComplianceIssues";
import TaxComplianceProcessWorkflow from "./components/TaxComplianceProcessWorkflow";
import HowFinanciallyUpHelpsCompliance from "./components/HowFinanciallyUpHelpsCompliance";
import RelatedTaxComplianceRibbon from "./components/RelatedTaxComplianceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 8 of Business Tax)
 */
export const metadata = {
  title: "Tax Compliance Services for Business | Financially Up",
  description:
    "Tax compliance services for Australian businesses, including returns, BAS/GST, PAYG and record reviews. Practical support to keep obligations organized.",
  keywords: [
    "tax compliance services",
    "business tax compliance Australia",
    "BAS agent services",
    "overdue tax returns business",
    "ATO compliance review",
    "business tax accountant",
    "tax return lodgment Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/business-tax-compliance/",
  },
  openGraph: {
    title: "Tax Compliance Services for Business | Financially Up",
    description:
      "Tax compliance services for Australian businesses, including returns, BAS/GST, PAYG and record reviews. Practical support to keep obligations organized.",
    url: "https://financiallyup.com.au/services/business-tax/business-tax-compliance/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the business tax hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Tax", href: "/services/business-tax" },
  { label: "Business Tax Compliance" },
];

/**
 * 6 Exact Frequently Asked Questions from Client Document (Page 8)
 */
const taxComplianceFaqs = [
  {
    key: "1",
    label: "What does a tax compliance accountant do?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A tax compliance accountant helps identify, prepare and manage the returns and reporting obligations that apply to a business, using the business&apos;s accounting and supporting records.
      </p>
    ),
  },
  {
    key: "2",
    label: "Are tax compliance services only for companies?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Companies, trusts, partnerships and sole traders can all have tax compliance obligations, although the returns and reporting requirements differ by structure and activity.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does every business need to lodge a BAS?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. BAS requirements depend on registrations and obligations such as GST, PAYG withholding or PAYG instalments. A business should confirm which obligations apply to it.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you help with overdue business lodgments?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We can review the outstanding periods and records and determine what preparation work is required. The ATO may apply penalties or interest in some circumstances, and any remission or payment arrangement is subject to ATO rules.
      </p>
    ),
  },
  {
    key: "5",
    label: "Is tax planning included in compliance work?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. Compliance work focuses on preparing and lodging required returns or statements. Tax planning or advice can be separately scoped when you need forward-looking analysis or advice on a specific transaction.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can you coordinate tax compliance with bookkeeping?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Where appropriate, bookkeeping and tax work can be coordinated so that the accounting records support BAS and annual return preparation. The service scope can be agreed based on what your business needs.
      </p>
    ),
  },
];

/**
 * BusinessTaxCompliancePage Component
 * ===================================
 * Route: /services/business-tax/business-tax-compliance
 * Pillar 2.7: Business Tax Compliance (Page 8 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BusinessTaxCompliancePage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: taxComplianceFaqs.map((faq) => ({
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
        title="Business Tax Compliance Services"
        subtitle="Integrated Annual Returns, BAS/GST, PAYG & Statutory Reporting for Australian Businesses"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Tax compliance services help a business meet the tax reporting and lodgment obligations that apply to its structure, registrations and activities. Depending on the business, this can include income tax returns, GST and BAS reporting, PAYG obligations, record keeping and follow-up on ATO correspondence.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides business tax compliance support for companies, trusts, partnerships and sole traders across Australia. We focus on accurate preparation, clear information requirements and coordinated compliance work rather than treating each lodgment in isolation.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.7 • Statutory Compliance Practice"
        highlights={[
          "Integrated Tax Returns, BAS & PAYG",
          "Ledger Reconciliation & Record Review",
          "Online Video Appointments (Outlook Calendar) & In-Person",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Compliance Scope",
            value: "Income tax returns, GST, BAS, PAYGW, PAYGI & ATO correspondence",
          },
          {
            icon: "percentage",
            label: "Applicable Entities",
            value: "Pty Ltd companies, family trusts, partnerships & sole traders",
          },
          {
            icon: "audit",
            label: "Preparation Methodology",
            value: "Reconciling ledger control accounts & verifiable source records",
          },
          {
            icon: "safety",
            label: "Statutory Lodgment",
            value: "Registered Tax Agent electronic ATO portal lodgment & extensions",
          },
          {
            icon: "desktop",
            label: "Consultation Formats",
            value: "100% online video conference, phone or in person",
          },
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Compliance Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. What Is Business Tax Compliance? */}
      <WhatIsBusinessTaxCompliance />

      {/* 2. Tax Returns and Annual Compliance (4 Entity structures) */}
      <TaxReturnsAnnualCompliance />

      {/* 3. GST, BAS and PAYG Obligations */}
      <GstBasPaygObligations />

      {/* 4. Record Keeping and Supporting Information (8 categories + no-guesswork) */}
      <RecordKeepingSupportingInfo />

      {/* 5. Common Business Tax Compliance Issues (7 breakdowns + Division 7A) */}
      <CommonTaxComplianceIssues />

      {/* 6. How Our Business Tax Compliance Process Works (7-step sequential workflow) */}
      <TaxComplianceProcessWorkflow />

      {/* 7. How Financially Up Can Help & Why Choose Financially Up? */}
      <HowFinanciallyUpHelpsCompliance />

      {/* 8. Contextual Related Services Ribbon */}
      <RelatedTaxComplianceRibbon />

      {/* 9. Frequently Asked Questions (6 Verbatim FAQs) */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about Australian business tax compliance, BAS lodgments, overdue returns, and bookkeeping coordination."
        faqs={taxComplianceFaqs}
      />

      {/* 10. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="For practical tax compliance services, book an appointment with Financially Up to discuss your current obligations, records, upcoming lodgments and any compliance issues that need review."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
