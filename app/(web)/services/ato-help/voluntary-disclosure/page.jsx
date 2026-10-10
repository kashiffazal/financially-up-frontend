import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsVoluntaryDisclosure from "./components/WhatIsVoluntaryDisclosure";
import WhyTimingMattersDisclosure from "./components/WhyTimingMattersDisclosure";
import DisclosureVsAmendmentVsObjection from "./components/DisclosureVsAmendmentVsObjection";
import DifferentRoutesIncomeTaxBas from "./components/DifferentRoutesIncomeTaxBas";
import InformationToAssembleDisclosure from "./components/InformationToAssembleDisclosure";
import WhatHappensAfterDisclosure from "./components/WhatHappensAfterDisclosure";
import HowFinanciallyUpHelpsDisclosure from "./components/HowFinanciallyUpHelpsDisclosure";
import WhyChooseFinanciallyUpDisclosure from "./components/WhyChooseFinanciallyUpDisclosure";
import RelatedVoluntaryDisclosureRibbon from "./components/RelatedVoluntaryDisclosureRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 6 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "ATO Voluntary Disclosure Accountant | Financially Up",
  description:
    "Found an error in tax information previously given to the ATO? Financially Up can help review the facts and prepare an appropriate voluntary disclosure.",
  keywords: [
    "ATO voluntary disclosure accountant",
    "voluntary disclosure ATO",
    "correct tax return error",
    "disclose tax mistake",
    "ATO shortfall penalty reduction",
    "amend tax return accountant",
    "unprompted voluntary disclosure",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/voluntary-disclosure/",
  },
  openGraph: {
    title: "ATO Voluntary Disclosure Accountant | Financially Up",
    description:
      "Found an error in tax information previously given to the ATO? Financially Up can help review the facts and prepare an appropriate voluntary disclosure.",
    url: "https://financiallyup.com.au/services/ato-help/voluntary-disclosure/",
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
  { label: "ATO Help", href: "/services/ato-help" },
  { label: "Voluntary Disclosure" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 6)
 */
const voluntaryDisclosureFaqs = [
  {
    key: "1",
    label: "Will a voluntary disclosure remove the tax I owe?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A correction can change the underlying tax position, and any tax properly payable remains due. Penalty treatment depends on the facts and applicable rules.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is every correction a voluntary disclosure?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The ATO may describe telling it about an error as a voluntary disclosure, but the practical process differs. A return amendment, activity statement correction or disclosure during an audit can have different requirements.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I disclose an error after an ATO audit starts?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, but timing and the circumstances can affect the process and any penalty reduction. Tell your accountant about all ATO contact before submitting information.
      </p>
    ),
  },
  {
    key: "4",
    label: "What if I am unsure whether the original return is wrong?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We can review the underlying records and tax treatment first. The aim is to establish a supportable correction, if one is required, before approaching the ATO.
      </p>
    ),
  },
];

/**
 * VoluntaryDisclosurePage Component
 * =================================
 * Route: /services/ato-help/voluntary-disclosure
 * Pillar 11.5: Voluntary Disclosure (Page 6 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function VoluntaryDisclosurePage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: voluntaryDisclosureFaqs.map((faq) => ({
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
        title="ATO Voluntary Disclosure Accountant"
        subtitle="Proactively Correct Past Tax Errors, Mitigate Shortfall Penalties & Reconstruct Accurate Figures"
        description={
          <span className="space-y-3 block">
            <span className="block">
              If you discover that information previously given to the ATO was wrong or incomplete, the next step is to establish what needs correcting and how to tell the ATO. The method depends on the tax, the document and whether a review or audit has begun. Acting promptly can affect the treatment of administrative penalties, but it does not erase tax that should have been paid.
            </span>
            <span className="block mt-2">
              Financially Up helps individuals and businesses review tax errors, reconstruct the relevant figures and prepare an appropriate correction or voluntary disclosure. Book an Appointment with the return, statement or ATO correspondence concerned.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.5 • Voluntary Disclosure Practice"
        highlights={[
          "Registered Tax Agent #26234055",
          "Shortfall Penalty Concession Advice",
          "Pre-Audit & Examination Disclosures",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is a voluntary disclosure to the ATO? */}
      <WhatIsVoluntaryDisclosure />

      {/* 2. Why does timing matter? */}
      <WhyTimingMattersDisclosure />

      {/* 3. Voluntary disclosure or tax return amendment? */}
      <DisclosureVsAmendmentVsObjection />

      {/* 4. Income tax, BAS and audit disclosures can follow different routes */}
      <DifferentRoutesIncomeTaxBas />

      {/* 5. What information should be assembled? */}
      <InformationToAssembleDisclosure />

      {/* 6. What happens after disclosure? */}
      <WhatHappensAfterDisclosure />

      {/* 7. How Financially Up can help */}
      <HowFinanciallyUpHelpsDisclosure />

      {/* 8. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpDisclosure />

      {/* 9. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="Frequently Asked Questions"
        description="Common questions about voluntary disclosures, shortfall penalty reductions, audit timings, and preliminary error reviews."
        items={voluntaryDisclosureFaqs}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Address Reporting Errors"
        title="Address the Error with Clear Records"
        subtitle="Bring the original lodgment, the records that revealed the issue and any ATO correspondence. Financially Up can help determine the correction pathway and prepare the supporting information."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 11. Sibling Service Ribbon */}
      <RelatedVoluntaryDisclosureRibbon />
    </main>
  );
}
