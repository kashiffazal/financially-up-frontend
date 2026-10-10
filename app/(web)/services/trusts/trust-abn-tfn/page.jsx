import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import DoesEveryTrustNeedAbnAndTfn from "./components/DoesEveryTrustNeedAbnAndTfn";
import WhenMightTrustAbnBeRequired from "./components/WhenMightTrustAbnBeRequired";
import ApplyingForTrustTfn from "./components/ApplyingForTrustTfn";
import InformationNeededForTrustAbn from "./components/InformationNeededForTrustAbn";
import AbnEntitlementNeedsToBeGenuine from "./components/AbnEntitlementNeedsToBeGenuine";
import HowFinanciallyUpHelpsRegistrations from "./components/HowFinanciallyUpHelpsRegistrations";
import WhyChooseFinanciallyUpRegistrations from "./components/WhyChooseFinanciallyUpRegistrations";
import RelatedTrustAbnRibbon from "./components/RelatedTrustAbnRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 10 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Trust ABN Registration & TFN Application | Financially Up",
  description:
    "Trust ABN registration and TFN application support for Australian trusts. Get help checking eligibility, details and registration requirements.",
  keywords: [
    "trust ABN registration",
    "trust TFN application",
    "Australian Business Register trust",
    "trust enterprise test",
    "family trust ABN eligibility",
    "trustee separate ABN",
    "trust tax agent registrations",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/trust-abn-tfn/",
  },
  openGraph: {
    title: "Trust ABN Registration & TFN Application | Financially Up",
    description:
      "Trust ABN registration and TFN application support for Australian trusts. Get help checking eligibility, details and registration requirements.",
    url: "https://financiallyup.com.au/services/trusts/trust-abn-tfn/",
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
  { label: "Trust ABN / TFN" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 10)
 */
const trustAbnFaqs = [
  {
    key: "1",
    label: "Can I apply for a trust ABN and TFN at the same time?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For most trusts, a TFN can be applied for while completing the ABN application. The appropriate process depends
        on the trust and its circumstances, and some entity types have different application rules.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does a family trust automatically qualify for an ABN?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A trust must be entitled to an ABN. In general, a trust carrying on or starting an enterprise can be
        entitled to an ABN; simply establishing a family trust does not by itself establish ABN entitlement.
      </p>
    ),
  },
  {
    key: "3",
    label: "How long does a trust TFN application take?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The Australian Business Register states that a TFN should generally be received within 28 days after a completed
        application is received. Processing can take longer where information needs to be checked or the application is
        incomplete.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can the trust use the trustee's ABN or TFN?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The trust&apos;s registrations are separate from the personal or company identifiers of the trustee. The
        application should identify the trust correctly and record the trustee in its trustee capacity.
      </p>
    ),
  },
];

/**
 * TrustAbnTfnPage Component
 * =========================
 * Route: /services/trusts/trust-abn-tfn
 * Pillar 8.9: Trust ABN Registration & TFN Application (Page 10 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function TrustAbnTfnPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: trustAbnFaqs.map((faq) => ({
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
        title="Trust ABN Registration & TFN Application"
        subtitle="Entity Registrations, Australian Business Register Eligibility, TFN Lodgement & Tax Compliance Setup"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A trust may need its own tax file number (TFN) for its tax affairs and, where it is entitled to one, an
              Australian business number (ABN) for its enterprise activities. Trust ABN registration is therefore not
              simply a matter of registering every trust automatically: the trust needs to be correctly established,
              the trustee and associate details need to be identified, and ABN entitlement must be considered before an
              application is lodged.
            </span>
            <span className="block mt-2">
              Financially Up can assist with trust ABN and TFN applications, including reviewing the trust structure,
              gathering registration information and helping determine which registrations are relevant. This service
              deals with tax and business registrations after the trust has been established. It does not replace
              legal advice on drafting or varying a trust deed.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.9 • Trust Registrations & Tax Compliance"
        highlights={[
          "ABR Enterprise Test & Genuine Entitlement Review",
          "Simultaneous Trust TFN & ABN Application Management",
          "Trustee Identifier Separation & GST/PAYG Alignment",
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

      {/* 1. Does every trust need an ABN and TFN? */}
      <DoesEveryTrustNeedAbnAndTfn />

      {/* 2. When might trust ABN registration be required? */}
      <WhenMightTrustAbnBeRequired />

      {/* 3. Applying for a trust TFN */}
      <ApplyingForTrustTfn />

      {/* 4. What information is needed for a trust ABN application? */}
      <InformationNeededForTrustAbn />

      {/* 5. ABN entitlement needs to be genuine */}
      <AbnEntitlementNeedsToBeGenuine />

      {/* 6. How Financially Up can help */}
      <HowFinanciallyUpHelpsRegistrations />

      {/* 7. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpRegistrations />

      {/* 8. Related Services Ribbon */}
      <RelatedTrustAbnRibbon />

      {/* 9. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Trust ABN & TFN"
        description="Clear answers regarding simultaneous lodgement, family trust eligibility, processing timeframes, and trustee identifier separation."
        items={trustAbnFaqs}
      />

      {/* 10. Call to Action Banner */}
      <CallToActionBanner
        title="Ready to Register Your Trust ABN & Apply for a TFN?"
        subtitle="Ensure your trust entity registrations, ABN enterprise entitlement and TFN lodgements are completed accurately by registered tax agents before trading commences."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
