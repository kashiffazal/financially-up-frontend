import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsACompanyTaxReturn from "./components/WhatIsACompanyTaxReturn";
import WhatCompanyTaxReturnIncludes from "./components/WhatCompanyTaxReturnIncludes";
import CompanyTaxRatesOverview from "./components/CompanyTaxRatesOverview";
import CommonCompanyTaxIssues from "./components/CommonCompanyTaxIssues";
import CompanyAccountsStatements from "./components/CompanyAccountsStatements";
import WhatRecordsCompanyProvides from "./components/WhatRecordsCompanyProvides";
import CompanyTaxProcessSteps from "./components/CompanyTaxProcessSteps";
import WhyChooseFinanciallyUpCompany from "./components/WhyChooseFinanciallyUpCompany";
import RelatedBusinessServicesRibbon from "./components/RelatedBusinessServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2 of Business Tax)
 */
export const metadata = {
  title: "Company Tax Return Accountant | Financially Up",
  description:
    "Company tax return preparation, year-end accounts, tax adjustments, loss reviews and compliance support for Pty Ltd companies Australia-wide.",
  keywords: [
    "company tax return",
    "company tax return accountant",
    "Pty Ltd tax return Australia",
    "company tax return preparation",
    "business tax accountant",
    "company tax return services",
    "lodge company tax return",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/company-tax-returns/",
  },
  openGraph: {
    title: "Company Tax Return Accountant | Financially Up",
    description:
      "Company tax return preparation, year-end accounts, tax adjustments, loss reviews and compliance support for Pty Ltd companies Australia-wide.",
    url: "https://financiallyup.com.au/services/business-tax/company-tax-returns/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the business service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Tax", href: "/services/business-tax" },
  { label: "Company Tax Returns" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const companyTaxFaqs = [
  {
    key: "1",
    label: "Does every Pty Ltd company need a company tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Most companies are required to lodge a company tax return for each income year unless a specific exemption or non-lodgment position applies. No taxable income or a tax loss does not, by itself, remove that obligation. The company’s circumstances and the ATO requirements for the relevant year should be checked.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is a company tax return the same as a director’s tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A company is a separate taxpayer. The company lodges its own return, while directors and shareholders deal with their personal income and other tax items through their individual returns.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can company losses be carried forward?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Company tax losses can generally be carried forward, but their later use is subject to the company loss rules. This commonly requires the company to satisfy the continuity of ownership test or, where relevant, the business continuity test, together with any other applicable integrity rules. The ownership history and prior-year loss records should be reviewed before a deduction is claimed.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you prepare the company accounts as well as the return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up can provide company accounting and financial statement preparation where required, as well as company tax return services. The required form and purpose of the statements will be agreed as part of the engagement.
      </p>
    ),
  },
  {
    key: "5",
    label: "What if the company also operates through a trust?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The entities need to be dealt with separately. Where a related trust has its own tax and distribution obligations, see our Trust Tax Returns service.
      </p>
    ),
  },
];

/**
 * CompanyTaxReturnsPage Component
 * ===============================
 * Route: /services/business-tax/company-tax-returns
 * Pillar 2.1: Company Tax Returns (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CompanyTaxReturnsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: companyTaxFaqs.map((faq) => ({
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
        title="Company Tax Return Accountant"
        subtitle="Annual Return Preparation, Year-End Accounts & Tax Compliance for Pty Ltd Companies"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A company tax return reports a company’s income, deductions and taxable position to the Australian Taxation Office. Because a company is a separate taxpayer, its return is not simply an extension of the director’s individual tax return. Accurate company tax work usually starts with reliable accounts and a clear understanding of transactions that affect both the financial statements and the tax calculation.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd prepares company tax returns for Australian companies, including small and medium-sized Pty Ltd businesses. We can review the company’s accounting records, prepare year-end financial statements where required, make relevant tax adjustments and prepare the return for lodgment.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.1 • Corporate Tax Practice"
        highlights={[
          "Base Rate Entity & General Rate Assessment",
          "Pty Ltd Year-End Financial Statements Reconciliation",
          "100% Online Consultations or In-Person",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Entity Structure",
            value: "Proprietary Limited (Pty Ltd) & Australian corporate entities",
          },
          {
            icon: "percentage",
            label: "Corporate Rates",
            value: "25% Base Rate Entity or 30% General Company Tax Rate",
          },
          {
            icon: "audit",
            label: "Scope of Service",
            value: "Year-end accounts, tax reconciliations, loss tests & lodgement",
          },
          {
            icon: "safety",
            label: "Representation",
            value: "Direct electronic ATO lodgement via Registered Tax Agent",
          },
          {
            icon: "desktop",
            label: "Appointment Format",
            value: "100% online video (Outlook Calendar) or in-person consultation",
          },
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Corporate Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. What Is a Company Tax Return? */}
      <WhatIsACompanyTaxReturn />

      {/* 2. What Company Tax Return Preparation Usually Involves (8 scopes) */}
      <WhatCompanyTaxReturnIncludes />

      {/* 3. Company Tax Rates and Taxable Income (Base Rate vs General Rate) */}
      <CompanyTaxRatesOverview />

      {/* 4. Common Company Tax Issues That Need Review (8 critical review triggers) */}
      <CommonCompanyTaxIssues />

      {/* 5. Company Accounts and Financial Statements */}
      <CompanyAccountsStatements />

      {/* 6. What Records Should a Company Provide? */}
      <WhatRecordsCompanyProvides />

      {/* 7. How the Process Works (5 sequential workflow steps) */}
      <CompanyTaxProcessSteps />

      {/* 8. Why Choose Financially Up */}
      <WhyChooseFinanciallyUpCompany />

      {/* 9. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about company tax return preparation, Pty Ltd lodgement obligations, tax rates, and year-end accounts with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Company Tax Return Frequently Asked Questions"
        items={companyTaxFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Bring your latest accounts, prior-year return and details of any unusual company transactions so we can identify the work required."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore All Business Tax Services"
        secondaryButtonHref="/services/business-tax"
      />

      {/* 11. Related Service Ribbon (Contextual Cross-links) */}
      <RelatedBusinessServicesRibbon />
    </main>
  );
}
