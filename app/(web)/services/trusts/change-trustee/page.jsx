import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatDoesItMeanToChangeTrustee from "./components/WhatDoesItMeanToChangeTrustee";
import WhyMightTrustReplaceTrustee from "./components/WhyMightTrustReplaceTrustee";
import DoesChangingTrusteeTriggerTax from "./components/DoesChangingTrusteeTriggerTax";
import MovingFromIndividualToCorporateTrustee from "./components/MovingFromIndividualToCorporateTrustee";
import RecordsAndRegistrationsToUpdate from "./components/RecordsAndRegistrationsToUpdate";
import TrustLossesAndControlTrusteeChange from "./components/TrustLossesAndControlTrusteeChange";
import HowFinanciallyUpHelpsTrusteeChange from "./components/HowFinanciallyUpHelpsTrusteeChange";
import WhatShouldYouHaveReadyTrusteeChange from "./components/WhatShouldYouHaveReadyTrusteeChange";
import WhyChooseFinanciallyUpTrusteeChange from "./components/WhyChooseFinanciallyUpTrusteeChange";
import RelatedChangeTrusteeRibbon from "./components/RelatedChangeTrusteeRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 8 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Change Trustee Australia | Financially Up",
  description:
    "Change a trustee with accounting and tax support from Financially Up. Review trust records, asset ownership, registrations and tax implications before the change.",
  keywords: [
    "change trustee Australia",
    "replace family trust trustee",
    "change to corporate trustee",
    "trustee retirement and appointment",
    "ABR 28 day trustee update",
    "trust asset title transfer",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/change-trustee/",
  },
  openGraph: {
    title: "Change Trustee Australia | Financially Up",
    description:
      "Change a trustee with accounting and tax support from Financially Up. Review trust records, asset ownership, registrations and tax implications before the change.",
    url: "https://financiallyup.com.au/services/trusts/change-trustee/",
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
  { label: "Change Trustee" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 8)
 */
const changeTrusteeFaqs = [
  {
    key: "1",
    label: "Can I change the trustee of a family trust?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, a trustee can be changed where the trust deed and applicable law permit it and the required
        appointment or retirement process is followed. The deed should be reviewed and legal advice may be appropriate
        before the change is executed.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does a change of trustee create a new trust?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. A mere trustee change does not automatically create a new trust for tax purposes. The outcome
        depends on the legal effect of the transaction and whether other changes are made at the same time.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do trust assets need to be transferred to the new trustee?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Because the trustee is the legal holder of trust property, asset registrations often need to be updated to
        reflect the new trustee. The process differs by asset type and jurisdiction, and property transfers may require
        legal or conveyancing work.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can I change from an individual trustee to a corporate trustee?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, where the trust deed and legal requirements allow it. The incoming company must be properly established
        and appointed, and the trust assets, registrations and records should then be updated consistently.
      </p>
    ),
  },
];

/**
 * ChangeTrusteePage Component
 * ===========================
 * Route: /services/trusts/change-trustee
 * Pillar 8.7: Change Trustee Australia (Page 8 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ChangeTrusteePage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: changeTrusteeFaqs.map((faq) => ({
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
        title="Change Trustee Australia"
        subtitle="Trustee Appointment & Retirement, Asset Title Transition, ABR Updates & Tax Continuity"
        description={
          <span className="space-y-3 block">
            <span className="block">
              To change the trustee of a trust, the existing trust deed, the reason for the change and the legal
              appointment process should be reviewed before the new trustee takes over. The accounting and tax work
              then focuses on keeping the trust, registrations, asset records and related entities aligned with the
              change.
            </span>
            <span className="block mt-2">
              A trustee change can occur when an individual trustee retires or dies, when a family wants to move to a
              corporate trustee, when an existing corporate trustee is replaced, or when succession and control
              arrangements are being updated. The trust itself may continue, but the trustee is the legal owner of trust
              property and the party responsible for administering the trust, so the change needs to be implemented
              carefully.
            </span>
            <span className="block mt-2">
              If you need to replace a trustee or appoint a new trustee, an initial discussion can help clarify the
              trust deed, effective date, asset and registration updates, and the accounting or tax work required around
              the change.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.7 • Trustee Transition Practice"
        highlights={[
          "CGT Continuity Review (No Deemed Disposal)",
          "ABN, ATO & ABR 28-Day Associate Updating",
          "Bank, Asset Title & Share Registry Alignment",
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

      {/* 1. What does it mean to change the trustee of a trust? */}
      <WhatDoesItMeanToChangeTrustee />

      {/* 2. Why might a trust replace its trustee? */}
      <WhyMightTrustReplaceTrustee />

      {/* 3. Does changing trustee trigger tax? */}
      <DoesChangingTrusteeTriggerTax />

      {/* 4. Moving from an individual trustee to a corporate trustee */}
      <MovingFromIndividualToCorporateTrustee />

      {/* 5. What records and registrations may need updating? */}
      <RecordsAndRegistrationsToUpdate />

      {/* 6. Trust losses and control should not be overlooked */}
      <TrustLossesAndControlTrusteeChange />

      {/* 7. How Financially Up can help with a trustee change */}
      <HowFinanciallyUpHelpsTrusteeChange />

      {/* 8. What should you have ready? */}
      <WhatShouldYouHaveReadyTrusteeChange />

      {/* 9. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpTrusteeChange />

      {/* 10. Related Services Ribbon */}
      <RelatedChangeTrusteeRibbon />

      {/* 11. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Changing a Trustee"
        description="Clear answers regarding deed powers, trust continuity, asset title updates, and corporate trustee transitions."
        items={changeTrusteeFaqs}
      />

      {/* 12. Call to Action Banner */}
      <CallToActionBanner
        title="Planning to Change the Trustee of Your Trust?"
        subtitle="If you are planning to change the trustee of a trust, book an appointment with Financially Up to review the trust records, tax position, affected registrations and the practical steps that should be coordinated around the change."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
