import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsATrustTaxReturn from "./components/WhatIsATrustTaxReturn";
import DiscretionaryTrustsAndFTE from "./components/DiscretionaryTrustsAndFTE";
import TrustDistributionsYearEnd from "./components/TrustDistributionsYearEnd";
import WhatTrustTaxPreparationIncludes from "./components/WhatTrustTaxPreparationIncludes";
import BeneficiaryReportingAndTFN from "./components/BeneficiaryReportingAndTFN";
import TrustIncomeVsCashPaid from "./components/TrustIncomeVsCashPaid";
import RecordsTrustNeedsToProvide from "./components/RecordsTrustNeedsToProvide";
import HowFinanciallyUpHelpsTrusts from "./components/HowFinanciallyUpHelpsTrusts";
import RelatedTrustServicesRibbon from "./components/RelatedTrustServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3 of Business Tax)
 */
export const metadata = {
  title: "Trust Tax Return Australia | Financially Up",
  description:
    "Trust tax return preparation, accounting and lodgment support for discretionary trusts, family trusts and business trusts across Australia.",
  keywords: [
    "trust tax return",
    "trust tax return accountant",
    "discretionary trust tax return",
    "family trust tax return Australia",
    "trust distribution tax",
    "trust accounting",
    "lodge trust tax return",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/trust-tax-returns/",
  },
  openGraph: {
    title: "Trust Tax Return Australia | Financially Up",
    description:
      "Trust tax return preparation, accounting and lodgment support for discretionary trusts, family trusts and business trusts across Australia.",
    url: "https://financiallyup.com.au/services/business-tax/trust-tax-returns/",
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
  { label: "Trust Tax Returns" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const trustTaxFaqs = [
  {
    key: "1",
    label: "Does every trust need to lodge a trust tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not in every circumstance. Lodgment requirements depend on the type of trust, its income and the relevant ATO rules. Some trusts may qualify for an exemption from lodgment, while others must lodge even if the position appears simple.
      </p>
    ),
  },
  {
    key: "2",
    label: "Who pays tax on trust income?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It depends on the trust and how income is dealt with. Beneficiaries may be assessed on their share of trust net income, while the trustee may be assessed on certain amounts. The trust deed and tax rules are important to the outcome.
      </p>
    ),
  },
  {
    key: "3",
    label: "When should a discretionary trust decide its distributions?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The trustee generally needs to make and document distribution decisions by the time required under the trust deed and tax law, commonly by 30 June. The resolution must be effective under the deed; paying cash later does not, by itself, create the required present entitlement.
      </p>
    ),
  },
  {
    key: "4",
    label: "Is a family trust tax return different from a company return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Trusts and companies are different structures with different tax and reporting rules. A company is a separate taxpayer, while trust income can be assessed to beneficiaries or the trustee depending on the circumstances.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can you prepare beneficiary information as well as the trust return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up can prepare the trust return and relevant distribution reporting from the information available. Beneficiaries may also need separate tax-return assistance depending on their own circumstances.
      </p>
    ),
  },
];

/**
 * TrustTaxReturnsPage Component
 * ==============================
 * Route: /services/business-tax/trust-tax-returns
 * Pillar 2.2: Trust Tax Returns (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function TrustTaxReturnsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trustTaxFaqs.map((faq) => ({
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
        title="Trust Tax Returns"
        subtitle="Trust tax return preparation and accounting for discretionary trusts, family trusts and business trusts in Australia."
        description={
          <span className="space-y-3 block">
            <span className="block">
              A trust tax return is the annual income tax return for a trust estate. It reports the trust’s income, deductions, net income for tax purposes and distribution information. The trust itself is not taxed in exactly the same way as a company: depending on the circumstances, beneficiaries may be assessed on shares of the trust’s net income, while the trustee may be assessed on some amounts.
            </span>
            <span className="block mt-2">
              That is why trust accounting, distribution decisions and tax-return preparation need to be considered together. A trust tax return accountant should understand both the trust’s financial records and the tax consequences of how income is allocated.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.2 • Trust Estate Practice"
        highlights={[
          "Discretionary & Family Trust Returns",
          "Pre-30 June Distribution Resolution Reviews",
          "Beneficiary Reporting & TFN Withholding",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Trust Structures",
            value: "Discretionary trusts, family trusts, unit trusts & trading trusts",
          },
          {
            icon: "percentage",
            label: "Tax Assessment",
            value: "Beneficiary present entitlement assessment or trustee taxation",
          },
          {
            icon: "calendar",
            label: "Key Milestone",
            value: "Trustee distribution resolutions executed on or before 30 June",
          },
          {
            icon: "safety",
            label: "ATO Representation",
            value: "Registered Tax Agent electronic lodgment & extension program",
          },
          {
            icon: "desktop",
            label: "Consultation Options",
            value: "Online video conference (Outlook Calendar), phone or in person",
          },
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Trust Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. What Is a Trust Tax Return? */}
      <WhatIsATrustTaxReturn />

      {/* 2. Discretionary Trusts and Family Trust Elections */}
      <DiscretionaryTrustsAndFTE />

      {/* 3. Trust Distributions and Year-End Decisions */}
      <TrustDistributionsYearEnd />

      {/* 4. What Trust Tax Return Preparation Can Include (9 scopes) */}
      <WhatTrustTaxPreparationIncludes />

      {/* 5. Beneficiary Reporting and TFN Considerations */}
      <BeneficiaryReportingAndTFN />

      {/* 6. Trust Income Is Not the Same as Cash Paid Out */}
      <TrustIncomeVsCashPaid />

      {/* 7. Records We May Need */}
      <RecordsTrustNeedsToProvide />

      {/* 8. How Financially Up Can Help & Why Choose Financially Up */}
      <HowFinanciallyUpHelpsTrusts />

      {/* 9. Contextual Related Services Ribbon */}
      <RelatedTrustServicesRibbon />

      {/* 10. Frequently Asked Questions (5 Verbatim FAQs) */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about Australian trust tax returns, distributions, beneficiary reporting and lodgment requirements."
        faqs={trustTaxFaqs}
      />

      {/* 11. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="Discuss the trust’s accounts, distribution position, beneficiaries and tax-return requirements before lodgment."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
