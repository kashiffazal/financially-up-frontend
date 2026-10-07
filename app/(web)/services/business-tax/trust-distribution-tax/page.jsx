import SubServiceHero from "@/components/website/SubServiceHero";
import HowTrustDistributionsTaxed from "./components/HowTrustDistributionsTaxed";
import TrustDeedDistributionResolutions from "./components/TrustDeedDistributionResolutions";
import CapitalGainsFrankedStreaming from "./components/CapitalGainsFrankedStreaming";
import Section100AEconomicBenefit from "./components/Section100AEconomicBenefit";
import CommonTrustDistributionIssues from "./components/CommonTrustDistributionIssues";
import InformationNeededTrustReview from "./components/InformationNeededTrustReview";
import HowFinanciallyUpHelpsTrusts from "./components/HowFinanciallyUpHelpsTrusts";
import RelatedTrustDistributionRibbon from "./components/RelatedTrustDistributionRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 11 of Business Tax)
 */
export const metadata = {
  title: "Trust Distribution Tax Australia | Financially Up",
  description:
    "Trust distribution tax support for trustees and beneficiaries. Get help with resolutions, reporting, beneficiary entitlements and annual tax compliance.",
  keywords: [
    "trust distribution tax",
    "trustee resolution June 30",
    "streaming capital gains trust",
    "franked distributions trust Australia",
    "section 100A reimbursement agreements",
    "trust distribution to company",
    "Bendel decision UPE trust",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/trust-distribution-tax/",
  },
  openGraph: {
    title: "Trust Distribution Tax Australia | Financially Up",
    description:
      "Trust distribution tax support for trustees and beneficiaries. Get help with resolutions, reporting, beneficiary entitlements and annual tax compliance.",
    url: "https://financiallyup.com.au/services/business-tax/trust-distribution-tax/",
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
  { label: "Trust Distribution Tax" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 11)
 */
const trustDistributionFaqs = [
  {
    key: "1",
    label: "When should a trust distribution resolution be made?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The timing depends on the deed and the type of entitlement. A beneficiary&apos;s present entitlement to trust income generally needs to be created by 30 June, or earlier if the deed requires it. Different record deadlines can apply to specific entitlement for streamed amounts.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does a trust have to distribute all of its income?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily, but retaining income can change who is assessed and at what rate. The deed and tax rules should be reviewed before deciding how income is dealt with.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can capital gains be distributed to a particular beneficiary?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Potentially. Where the deed permits it and the tax requirements are met, a beneficiary may be made specifically entitled to a capital gain. The records and timing matter.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can a trust distribute income to a company?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A company can be a beneficiary where the deed permits it. An unpaid present entitlement is not, merely because it remains unpaid, a section 109D loan following the High Court&apos;s decision in Bendel. Separate loans, payments, interposed-entity arrangements and section 100A or other tax rules may still need review.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can section 100A apply even if the distribution resolution is valid?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. A valid deed-based entitlement does not prevent section 100A applying where the statutory reimbursement-agreement conditions are met. The flow and use of the economic benefit should be reviewed separately.
      </p>
    ),
  },
];

/**
 * TrustDistributionTaxPage Component
 * ==================================
 * Route: /services/business-tax/trust-distribution-tax
 * Pillar 2.10: Trust Distribution Tax (Page 11 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function TrustDistributionTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trustDistributionFaqs.map((faq) => ({
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
        title="Trust Distribution Tax Australia"
        subtitle="Annual Trustee Resolutions, Beneficiary Entitlements, Capital Streaming & Compliance"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Trust distributions can affect who is assessed on trust income, capital gains and franked distributions. The outcome depends on the trust deed, the trustee&apos;s resolutions, beneficiary entitlements, the character of the income and the tax rules that apply to the particular trust.
            </span>
            <span className="block mt-2">
              Financially Up provides trust distribution tax support for trustees and business families who need help with annual distribution decisions, tax reporting and the information required for the trust tax return. The focus is on getting the trust&apos;s accounting, resolutions and tax reporting aligned rather than treating a distribution as a simple year-end journal entry.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.10 • Trust Tax & Resolutions"
        highlights={[
          "Trustee Minute & Resolution Compliance Before June 30",
          "Capital Gains & Franked Dividend Streaming",
          "Section 100A & Division 7A Beneficiary Integrity Reviews",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Scope of Advisory",
            value: "Trust income, capital gains, franked distributions & beneficiary entitlements",
          },
          {
            icon: "calendar",
            label: "Resolution Timelines",
            value: "Mandatory June 30 present entitlement & August 31 CGT streaming records",
          },
          {
            icon: "audit",
            label: "Integrity Rules",
            value: "Section 100A reimbursement agreements & Division 7A corporate beneficiaries",
          },
          {
            icon: "safety",
            label: "Legal Interlock",
            value: "Trust deed definitions, eligible beneficiary classes & streaming powers",
          },
          {
            icon: "desktop",
            label: "Consultation Formats",
            value: "100% online video conference, phone or in-person consultation",
          },
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Trust Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. How are trust distributions taxed? */}
      <HowTrustDistributionsTaxed />

      {/* 2. Why the trust deed and distribution resolution matter */}
      <TrustDeedDistributionResolutions />

      {/* 3. Capital gains and franked distributions */}
      <CapitalGainsFrankedStreaming />

      {/* 4. Section 100A and who receives the benefit */}
      <Section100AEconomicBenefit />

      {/* 5. Common trust distribution issues (8 points + Division 7A) */}
      <CommonTrustDistributionIssues />

      {/* 6. Information we may need (8 records checklist) */}
      <InformationNeededTrustReview />

      {/* 7. How Financially Up can help & Why choose Financially Up? */}
      <HowFinanciallyUpHelpsTrusts />

      {/* 8. Contextual Related Services Ribbon */}
      <RelatedTrustDistributionRibbon />

      {/* 9. Frequently asked questions (5 Verbatim FAQs) */}
      <FaqSection
        title="Frequently asked questions"
        subtitle="Key legal and tax considerations regarding Australian trust distribution minutes, deadlines, streaming, and anti-avoidance."
        faqs={trustDistributionFaqs}
      />

      {/* 10. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="Arrange a year-end discussion before distributions are finalized so we can review the trust information, proposed beneficiaries and tax-reporting requirements."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
