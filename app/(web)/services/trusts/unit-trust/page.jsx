import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsDifferentUnitTrust from "./components/WhatIsDifferentUnitTrust";
import WhatUnitTrustAccountantHelps from "./components/WhatUnitTrustAccountantHelps";
import UnitHolderRecordsAndOwnership from "./components/UnitHolderRecordsAndOwnership";
import UnitTrustDistributionsAndReturn from "./components/UnitTrustDistributionsAndReturn";
import UnitTrustGstRegistration from "./components/UnitTrustGstRegistration";
import RecordsUnitTrustShouldKeep from "./components/RecordsUnitTrustShouldKeep";
import SettingUpUnitTrust from "./components/SettingUpUnitTrust";
import HowFinanciallyUpHelpsUnitTrust from "./components/HowFinanciallyUpHelpsUnitTrust";
import RelatedUnitTrustRibbon from "./components/RelatedUnitTrustRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Unit Trust Accountant & Tax Services | Financially Up",
  description:
    "Unit trust accountant support for accounts, tax returns, distributions and compliance. Financially Up assists private unit trusts across Australia.",
  keywords: [
    "unit trust accountant",
    "unit trust accounting Australia",
    "unit trust tax return",
    "unit register accounting",
    "fixed trust tax",
    "unit trust distribution",
    "unit trust GST",
    "unit trust setup accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/unit-trust/",
  },
  openGraph: {
    title: "Unit Trust Accountant & Tax Services | Financially Up",
    description:
      "Unit trust accountant support for accounts, tax returns, distributions and compliance. Financially Up assists private unit trusts across Australia.",
    url: "https://financiallyup.com.au/services/trusts/unit-trust/",
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
  { label: "Unit Trust Accountant" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const unitTrustFaqs = [
  {
    key: "1",
    label: "Is every unit trust a fixed trust for tax purposes?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Tax law applies specific tests to determine whether beneficiaries have fixed entitlements. A trust can be
        called a unit trust without automatically satisfying those tests, so the deed and relevant circumstances need
        to be reviewed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does a unit trust lodge its own tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, the trustee of a unit trust must lodge a trust tax return each year regardless of the amount of net
        income, unless the ATO advises that a return is not required or a different return applies to that type of
        trust. The return reports the trust’s tax information and distributions to unit holders.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can units be transferred between investors?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        They may be transferable if the deed and legal arrangements allow it, but a transfer can create tax, duty,
        valuation and legal issues. Professional advice should be obtained before significant ownership changes are
        implemented.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up help with unit trust setup?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We can assist with the accounting and tax aspects of setup and relevant registrations. Legal drafting of the
        trust deed and investor rights should be handled by an appropriately qualified legal adviser.
      </p>
    ),
  },
];

/**
 * UnitTrustPage Component
 * =======================
 * Route: /services/trusts/unit-trust
 * Pillar 8.2: Unit Trust Accountant (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function UnitTrustPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: unitTrustFaqs.map((faq) => ({
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
        title="Unit Trust Accountant"
        subtitle="Fixed Entitlements, Unit Registers, Capital Accounts & Tax Compliance for Joint Ventures & Syndicates"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A unit trust gives unit holders interests that are represented by units, but the accounting and tax
              treatment still depends on the trust deed, the rights attached to those units and the trust’s actual
              activities. A unit trust accountant helps keep the trust’s financial records, unit-holder information,
              distributions and tax reporting aligned.
            </span>
            <span className="block mt-2">
              Financially Up provides unit trust accounting services for private investment and business structures
              across Australia. We can assist with annual accounts, unit trust tax return preparation, distribution
              reporting, reconciliations and compliance-related accounting. Unit trust tax advice can be separately
              scoped where a transaction, ownership change or more complex tax issue needs analysis.
            </span>
            <span className="block mt-2">
              If you would like us to review an existing unit trust or discuss the accounting work required, Book an
              Appointment. The first discussion can help establish the trust’s activities, unit-holder structure,
              current records and appropriate scope.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.2 • Unit Trust Practice"
        highlights={[
          "Fixed vs Non-Fixed Trust Analysis",
          "Unit Register & Capital Account Reconciliations",
          "CPA & IPA Qualified Practitioners",
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

      {/* 1. What is Different About Accounting for a Unit Trust? */}
      <WhatIsDifferentUnitTrust />

      {/* 2. What Can a Unit Trust Accountant Help With? */}
      <WhatUnitTrustAccountantHelps />

      {/* 3. Unit-Holder Records and Ownership Changes */}
      <UnitHolderRecordsAndOwnership />

      {/* 4. Distributions and the Unit Trust Tax Return */}
      <UnitTrustDistributionsAndReturn />

      {/* 5. Does a Unit Trust Need to Register for GST? */}
      <UnitTrustGstRegistration />

      {/* 6. What Records Should a Unit Trust Keep? */}
      <RecordsUnitTrustShouldKeep />

      {/* 7. Setting Up a Unit Trust */}
      <SettingUpUnitTrust />

      {/* 8. How Financially Up Can Help & Why Choose Financially Up */}
      <HowFinanciallyUpHelpsUnitTrust />

      {/* 9. Related Trust Services Ribbon */}
      <RelatedUnitTrustRibbon />

      {/* 10. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Unit Trusts"
        description="Clear answers regarding fixed entitlements, trust returns, unit transfers, and setup coordination."
        items={unitTrustFaqs}
      />

      {/* 11. Call to Action Banner */}
      <CallToActionBanner
        title="Need Help With Your Unit Trust?"
        subtitle="For unit trust accounting, tax-return preparation, compliance support or tax review before a significant unit-holder transaction, Book an Appointment. We can review the trust’s documents and records and agree on the appropriate scope."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
