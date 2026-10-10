import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsBareTrust from "./components/WhatIsBareTrust";
import WhoNeedsBareTrustSupport from "./components/WhoNeedsBareTrustSupport";
import KeyBareTrustTaxConsiderations from "./components/KeyBareTrustTaxConsiderations";
import BareTrustsAndProperty from "./components/BareTrustsAndProperty";
import WhatFinanciallyUpHelpsBareTrust from "./components/WhatFinanciallyUpHelpsBareTrust";
import RecordsToHaveReadyBareTrust from "./components/RecordsToHaveReadyBareTrust";
import WhyChooseFinanciallyUpBareTrust from "./components/WhyChooseFinanciallyUpBareTrust";
import RelatedBareTrustRibbon from "./components/RelatedBareTrustRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Bare Trust Accountant Australia | Financially Up",
  description:
    "Bare trust accounting and tax support for property and other assets. Understand records, tax treatment, registrations and the role of the beneficiary.",
  keywords: [
    "bare trust accountant",
    "bare trust accounting Australia",
    "bare trust tax return",
    "bare trust property accountant",
    "bare trust absolute entitlement",
    "transparent trust tax exemption",
    "holding trust accounting",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/bare-trust/",
  },
  openGraph: {
    title: "Bare Trust Accountant Australia | Financially Up",
    description:
      "Bare trust accounting and tax support for property and other assets. Understand records, tax treatment, registrations and the role of the beneficiary.",
    url: "https://financiallyup.com.au/services/trusts/bare-trust/",
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
  { label: "Trusts", href: "/services/trusts" },
  { label: "Bare Trust Accountant" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const bareTrustFaqs = [
  {
    key: "1",
    label: "Does a bare trust need its own tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, a trustee must lodge a trust tax return each year unless the ATO advises that a return is not
        required or a specific exemption applies. Some bare-trust arrangements may qualify as transparent trusts or
        secured-purchase trusts under the ATO&apos;s limited exemption, but the conditions should be checked rather than
        assumed from the label &apos;bare trust&apos;.
      </p>
    ),
  },
  {
    key: "2",
    label: "Who pays tax on income from a bare trust asset?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It depends on the beneficiary&apos;s entitlement and the applicable tax rules. Where a beneficiary is absolutely
        entitled to the asset as against the trustee, income and capital gains may be treated as belonging to the
        beneficiary, but the facts and arrangement need to be checked.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can a bare trust be registered for GST?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        GST treatment is fact-specific. The key issue is generally which entity is carrying on the relevant enterprise
        and making the supply or acquisition. A bare trust does not automatically determine the GST outcome, so the
        transaction and registrations should be reviewed.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up prepare a bare trust deed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up can assist with accounting, tax and implementation matters within scope. Drafting or
        interpreting legal trust documents may require an appropriately qualified lawyer.
      </p>
    ),
  },
];

/**
 * BareTrustPage Component
 * =======================
 * Route: /services/trusts/bare-trust
 * Pillar 8.3: Bare Trust Accountant (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BareTrustPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: bareTrustFaqs.map((faq) => ({
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
        title="Bare Trust Accountant"
        subtitle="Absolute Entitlement Accounting, Property Transactions, Holding Trusts & Tax Support"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A bare trust is generally an arrangement where a trustee holds legal title to an asset for a beneficiary
              who has the beneficial interest and can direct how the asset is dealt with. The trustee&apos;s role is
              usually limited compared with a discretionary or unit trust, but the tax, GST, record-keeping and
              ownership consequences can still be significant.
            </span>
            <span className="block mt-2">
              Financially Up assists clients with the accounting and tax aspects of bare trust arrangements, including
              property-related bare trusts, transaction records and the interaction between the trustee and
              beneficiary. The right treatment depends on the deed or arrangement, the asset, who carries on any
              enterprise, and the beneficiary&apos;s circumstances. Legal documentation and advice about creating or
              interpreting the trust may require a lawyer.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.3 • Bare Trust Practice"
        highlights={[
          "Absolute Entitlement & Beneficial Ownership Analysis",
          "Property Settlement & Loan Account Reconciliations",
          "ATO Transparent Trust Lodgement Exemption Assessment",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Trust Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is a bare trust? */}
      <WhatIsBareTrust />

      {/* 2. Who may need bare trust accounting support? */}
      <WhoNeedsBareTrustSupport />

      {/* 3. Key tax and accounting considerations */}
      <KeyBareTrustTaxConsiderations />

      {/* 4. Bare trusts and property */}
      <BareTrustsAndProperty />

      {/* 5. What Financially Up can help with */}
      <WhatFinanciallyUpHelpsBareTrust />

      {/* 6. What records should you have ready? */}
      <RecordsToHaveReadyBareTrust />

      {/* 7. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpBareTrust />

      {/* 8. Related Services Ribbon */}
      <RelatedBareTrustRibbon />

      {/* 9. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Bare Trusts"
        description="Clear answers regarding tax return requirements, income tax obligations, GST registrations, and deed preparations."
        items={bareTrustFaqs}
      />

      {/* 10. Call to Action Banner */}
      <CallToActionBanner
        title="Need Bare Trust Accounting or Tax Advice?"
        subtitle="For bare trust accounting, property transaction reconciliations, compliance support or tax review before establishing an ownership arrangement, Book an Appointment. We will review your documentation and establish the right treatment."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
