import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhoNeedsPropertyDevAccountant from "./components/WhoNeedsPropertyDevAccountant";
import RevenueVsCapitalDevelopment from "./components/RevenueVsCapitalDevelopment";
import ProjectRecordsDevelopment from "./components/ProjectRecordsDevelopment";
import GstAndWithholdingDevelopment from "./components/GstAndWithholdingDevelopment";
import MarginSchemeDevelopment from "./components/MarginSchemeDevelopment";
import EntityStructureDevelopment from "./components/EntityStructureDevelopment";
import BasAndBusinessTaxComplianceDev from "./components/BasAndBusinessTaxComplianceDev";
import TimingMattersBeforeContracts from "./components/TimingMattersBeforeContracts";
import HowDevEngagementWorks from "./components/HowDevEngagementWorks";
import WhyChooseFinanciallyUpDev from "./components/WhyChooseFinanciallyUpDev";
import RelatedPropertyDevRibbon from "./components/RelatedPropertyDevRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3 of 10th Pillar Property Tax.docx)
 */
export const metadata = {
  title: "Property Development Accountant Australia | Financially Up",
  description:
    "Property development accountant support for project tax, GST, entity accounting, development costs, property sales and reporting across Australia.",
  keywords: [
    "property development accountant",
    "property development tax Australia",
    "property development GST",
    "margin scheme accountant",
    "property developer accounting",
    "land subdivision tax",
    "developer entity structure",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/property-tax/property-development-tax/",
  },
  openGraph: {
    title: "Property Development Accountant Australia | Financially Up",
    description:
      "Property development accountant support for project tax, GST, entity accounting, development costs, property sales and reporting across Australia.",
    url: "https://financiallyup.com.au/services/property-tax/property-development-tax/",
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
  { label: "Property Tax", href: "/services/property-tax" },
  { label: "Property Development Accountant" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const propertyDevFaqs = [
  {
    key: "1",
    label: "Is profit from a property development always a capital gain?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Development profits may be ordinary income where the activity is a property development business or a commercial profit-making undertaking. In other circumstances, CGT may apply. The facts and purpose of the project need to be reviewed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does GST apply to every property development sale?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. GST depends on whether the sale is a taxable supply, whether the entity is registered or required to be registered, and the nature of the property and activity. New residential premises and potential residential land require particular attention.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can the GST margin scheme be chosen after settlement?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The margin scheme has eligibility conditions and generally requires a written agreement between seller and purchaser before settlement. It should therefore be considered before the contract and settlement process is completed.
      </p>
    ),
  },
  {
    key: "4",
    label: "When should I involve a property development accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Ideally before the entity, purchase contract, finance and GST position are locked in. Early review can make the accounting and compliance process clearer, although Financially Up can also assist with existing projects where records need to be brought up to date.
      </p>
    ),
  },
];

/**
 * PropertyDevelopmentTaxPage Component
 * =====================================
 * Route: /services/property-tax/property-development-tax
 * Pillar 10.2: Property Development Tax (Page 3 of 10th Pillar Property Tax.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function PropertyDevelopmentTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: propertyDevFaqs.map((faq) => ({
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
        title="Property Development Accountant"
        subtitle="Project Tax Structuring, GST Margin Scheme, Cost Accounting & Development Compliance Across Australia"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Property development can create tax issues that are very different from simply holding an investment property. A property development accountant helps determine how the project should be accounted for, whether profits are on revenue or capital account, how GST applies, how development costs are recorded and what needs to be reported through the relevant entity and BAS cycle.
            </span>
            <span className="block mt-2">
              Financially Up supports property developers, builders, investors undertaking development projects and business owners using companies, trusts or other entities for property activities. The tax treatment depends on the facts, so the accounting should be set up around the commercial purpose and transaction flow from the beginning.
            </span>
          </span>
        }
        parentService={{
          label: "Property Tax Hub",
          href: "/services/property-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 10.2 • Property Tax Practice"
        highlights={[
          "Ordinary Income vs Capital Account",
          "GST Withholding & Margin Scheme",
          "Project Cost Accounting & Entity BAS",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Property Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. Who Needs a Property Development Accountant */}
      <WhoNeedsPropertyDevAccountant />

      {/* 2. Why Property Development Tax Needs a Different Approach */}
      <RevenueVsCapitalDevelopment />

      {/* 3. Property Development Accounting and Project Records */}
      <ProjectRecordsDevelopment />

      {/* 4. GST Can Be Central to Property Development */}
      <GstAndWithholdingDevelopment />

      {/* 5. Margin Scheme Considerations */}
      <MarginSchemeDevelopment />

      {/* 6. Entity Structure and Development Projects */}
      <EntityStructureDevelopment />

      {/* 7. BAS and Business Tax Compliance */}
      <BasAndBusinessTaxComplianceDev />

      {/* 8. Timing Matters Before Contracts, Settlements and Project Changes */}
      <TimingMattersBeforeContracts />

      {/* 9. How a Property Development Accounting Engagement Works */}
      <HowDevEngagementWorks />

      {/* 10. How Financially Up Can Help */}
      <WhyChooseFinanciallyUpDev />

      {/* 11. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about property development tax, ordinary income vs capital gains, the GST margin scheme, and entity reporting."
        image="/images/services/faq.webp"
        imageAlt="Property Development Tax Frequently Asked Questions"
        items={propertyDevFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 12. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Book an appointment with Financially Up to discuss your property circumstances, records and the appropriate accounting or tax service scope."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Property Tax Services"
        secondaryButtonHref="/services/property-tax"
      />

      {/* 13. Related Service Ribbon */}
      <RelatedPropertyDevRibbon />
    </main>
  );
}
