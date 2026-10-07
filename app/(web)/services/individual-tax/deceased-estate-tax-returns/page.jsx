import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsDeceasedEstateTaxReturn from "./components/WhatIsDeceasedEstateTaxReturn";
import TheTwoDifferentTaxReturns from "./components/TheTwoDifferentTaxReturns";
import ExecutorsAndEstateBeneficiaries from "./components/ExecutorsAndEstateBeneficiaries";
import CapitalGainsInheritedAssetsAndRecords from "./components/CapitalGainsInheritedAssetsAndRecords";
import HowFinanciallyUpHelpsDeceasedEstates from "./components/HowFinanciallyUpHelpsDeceasedEstates";
import DeceasedEstateRelatedServiceRibbon from "./components/DeceasedEstateRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 13)
 */
export const metadata = {
  title: "Deceased Estate Tax Return Accountant | Financially Up",
  description:
    "Need help with a deceased estate tax return? Financially Up assists executors with final returns, estate income and ATO obligations.",
  keywords: [
    "deceased estate tax return",
    "executor tax return Australia",
    "final individual tax return date of death",
    "deceased estate TFN",
    "trust tax return deceased estate",
    "CGT on inherited property Australia",
    "ATO legal personal representative tax",
    "estate administration tax accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/deceased-estate-tax-returns/",
  },
  openGraph: {
    title: "Deceased Estate Tax Return Accountant | Financially Up",
    description:
      "Need help with a deceased estate tax return? Financially Up assists executors with final returns, estate income and ATO obligations.",
    url: "https://financiallyup.com.au/services/individual-tax/deceased-estate-tax-returns/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking back through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Individual Tax", href: "/services/individual-tax" },
  { label: "Deceased Estate Tax Returns" },
];

/**
 * 6 Tailored Quick Specifications for Deceased Estate Tax
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const deceasedEstateQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Executors, administrators & legal personal representatives managing an estate",
  },
  {
    icon: "file",
    label: "Return Types",
    value: "Final individual return (deceased TFN) & separate estate trust return (estate TFN)",
  },
  {
    icon: "clock",
    label: "Tax Periods",
    value: "Date of death cut-off for individual return; administration period for trust return",
  },
  {
    icon: "bank",
    label: "Inheritance Tax",
    value: "No general inheritance tax in Australia; ordinary income & CGT apply during administration",
  },
  {
    icon: "desktop",
    label: "Delivery Format",
    value: "100% online video meetings (Outlook Calendar) or in-person by arrangement",
  },
  {
    icon: "safety",
    label: "Legal Safeguards",
    value: "Formal authority verification protecting executor fiduciary responsibilities",
  },
];

/**
 * 6 Exact Frequently Asked Questions from Client Document (Page 13)
 */
const deceasedEstateFaqs = [
  {
    key: "1",
    label: "Does every deceased person need a final tax return",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A final return may be required where the person had income or another lodgment obligation for the period up to death. The person&apos;s circumstances and lodgment history should be checked.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does every deceased estate need a separate tax return",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A deceased estate tax return is required only where the estate has a relevant lodgment obligation. Estate income, gains, beneficiaries and the administration stage should be reviewed.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does the estate use the deceased person's TFN",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The final individual return uses the deceased person&apos;s TFN. A deceased estate that needs to lodge trust returns generally requires its own TFN.
      </p>
    ),
  },
  {
    key: "4",
    label: "Who can deal with the ATO",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The ATO generally requires an authorized executor, administrator or legal personal representative to establish their authority. A family member is not automatically authorized.
      </p>
    ),
  },
  {
    key: "5",
    label: "Is an inheritance taxable",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Receiving inherited assets is not automatically assessable income. Tax may apply to estate income distributed to a beneficiary or to a later disposal of an inherited asset.
      </p>
    ),
  },
  {
    key: "6",
    label: "What happens to tax debts or refunds",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An assessed tax debt is generally dealt with during administration of the estate. A refund generally becomes an estate asset and may be offset against existing debts. A relative does not become personally liable merely because of their relationship to the deceased.
      </p>
    ),
  },
];

/**
 * Page Component: Deceased Estate Tax Return Services (Pillar 1.12)
 */
export default function DeceasedEstateTaxReturnsPage() {
  // JSON-LD Structured Data for FAQ Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Does every deceased person need a final tax return",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A final return may be required where the person had income or another lodgment obligation for the period up to death. The person's circumstances and lodgment history should be checked.",
        },
      },
      {
        "@type": "Question",
        name: "Does every deceased estate need a separate tax return",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. A deceased estate tax return is required only where the estate has a relevant lodgment obligation. Estate income, gains, beneficiaries and the administration stage should be reviewed.",
        },
      },
      {
        "@type": "Question",
        name: "Does the estate use the deceased person's TFN",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The final individual return uses the deceased person's TFN. A deceased estate that needs to lodge trust returns generally requires its own TFN.",
        },
      },
      {
        "@type": "Question",
        name: "Who can deal with the ATO",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ATO generally requires an authorized executor, administrator or legal personal representative to establish their authority. A family member is not automatically authorized.",
        },
      },
      {
        "@type": "Question",
        name: "Is an inheritance taxable",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Receiving inherited assets is not automatically assessable income. Tax may apply to estate income distributed to a beneficiary or to a later disposal of an inherited asset.",
        },
      },
      {
        "@type": "Question",
        name: "What happens to tax debts or refunds",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An assessed tax debt is generally dealt with during administration of the estate. A refund generally becomes an estate asset and may be offset against existing debts. A relative does not become personally liable merely because of their relationship to the deceased.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <SubServiceHero
        badge="Deceased Estate Tax"
        title="Deceased Estate Tax Return Services"
        subtitle="When someone passes away, their tax affairs may still need to be finalized. Depending on the circumstances, this may involve: a final individual tax return for income derived by the deceased person up to the date of death; and a separate deceased estate tax return for relevant income or capital gains derived by the estate during administration."
        bodyText={
          <span>
            Neither return is automatically required in every case. The person managing the estate should review the deceased person&apos;s lodgment history, income before death and any income received or derived by the estate afterwards. Financially Up Pty Ltd assists executors, administrators and legal personal representatives with understanding the relevant tax-return requirements, gathering records and preparing returns where required.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Appointment:
              </span>
              Book an Appointment to discuss the deceased person&apos;s tax history, estate income, property or investments, available records and any ATO correspondence. The first appointment is used to identify the likely returns and information required. It does not guarantee a particular tax, refund or estate outcome.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.12 • Deceased Estate & Trust Tax Practice"
        highlights={[
          "Final Individual Return (1 July to Date of Death)",
          "Deceased Estate Trust Return & Dedicated TFN",
          "Inherited Asset CGT & Cost Base Reset Rules",
          "Registered Tax Agent #26242127",
        ]}
        quickSpecs={deceasedEstateQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Estate Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1. What Is a Deceased Estate Tax Return */}
      <WhatIsDeceasedEstateTaxReturn />

      {/* 2. The Two Different Tax Returns */}
      <TheTwoDifferentTaxReturns />

      {/* 3 & 4. Executors and Legal Personal Representatives & Estate Income and Beneficiaries */}
      <ExecutorsAndEstateBeneficiaries />

      {/* 5 & 6. Capital Gains and Inherited Assets & Records You May Need */}
      <CapitalGainsInheritedAssetsAndRecords />

      {/* 7. How Financially Up Can Help */}
      <HowFinanciallyUpHelpsDeceasedEstates />

      {/* 8. Frequently Asked Questions (Verbatim 6 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about deceased estate returns, executor legal authority, final individual returns and inherited assets with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Deceased Estate Tax Return Services Frequently Asked Questions"
        items={deceasedEstateFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Managing tax matters after a death can involve different returns, representatives and record requirements. Book an Appointment with Financially Up to discuss the deceased person's tax history, the estate's income and assets, your authority to act and the documents available."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 10. Related Service Ribbon */}
      <DeceasedEstateRelatedServiceRibbon />
    </main>
  );
}
