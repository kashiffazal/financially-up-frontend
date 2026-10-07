import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBusinessStructuresRibbon from "../components/RelatedBusinessStructuresRibbon";

import WhoCanApplyForAbn from "./components/WhoCanApplyForAbn";
import DecisionsBeforeAbnAndInformationNeeded from "./components/DecisionsBeforeAbnAndInformationNeeded";
import ApplyingBeforeTradingAndGstDistinction from "./components/ApplyingBeforeTradingAndGstDistinction";
import AbnByEntityAndCommonIssues from "./components/AbnByEntityAndCommonIssues";
import WhyChooseFinanciallyUpAbn from "./components/WhyChooseFinanciallyUpAbn";

export const metadata = {
  title: "ABN Registration Australia | Financially Up",
  description:
    "ABN registration support for businesses and eligible entities. Get help with ABN applications, entity details and related Australian tax registrations.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-structures/abn-registration/",
  },
  openGraph: {
    title: "ABN Registration Australia | Financially Up",
    description:
      "ABN registration support for businesses and eligible entities. Get help with ABN applications, entity details and related Australian tax registrations.",
    url: "https://financiallyup.com.au/services/business-structures/abn-registration/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Structures", href: "/services/business-structures" },
  { label: "ABN Registration" },
];

const abnFaqs = [
  {
    question: "Is it free to apply for an ABN?",
    answer:
      "The Australian Business Register does not charge a government application fee for an ABN. A professional adviser may charge for assistance with reviewing, preparing or lodging the application and related setup work.",
  },
  {
    question: "Can an employee get an ABN for their job?",
    answer:
      "An ABN is not available merely because someone is called a contractor. If the work is actually performed as an employee, the person is not entitled to an ABN for that employment activity.",
  },
  {
    question: "How long does an ABN application take?",
    answer:
      "Processing time depends on the application and whether the ABR can confirm the information immediately or needs further review. It is better to focus on providing accurate information than to assume a particular approval time.",
  },
  {
    question: "Do I need an ABN before I register for GST?",
    answer:
      "GST registration is linked to the entity's ABN, so the ABN is a core part of the registration process. Whether GST registration is required or appropriate depends on the entity's circumstances and activities.",
  },
  {
    question: "Can Financially Up help if my ABN application has questions or needs review?",
    answer:
      "Yes. Financially Up can review the information available, help identify what may be missing and assist with the next steps within the appropriate accounting and tax scope.",
  },
];

export default function AbnRegistrationPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "ABN Registration",
    description:
      "ABN registration support for Australian businesses and eligible entities, covering ABR applications, entity eligibility, and related tax registrations.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Business Number & Entity Registration",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
      />

      <main className="min-h-screen bg-slate-50 dark:bg-zinc-950 text-slate-800 dark:text-zinc-100">
        {/* Hero Section */}
        <SubServiceHero
          parentService={{
            label: "Business Structures Hub",
            href: "/services/business-structures",
          }}
          breadcrumbs={breadcrumbs}
          badgeText="Australian Business Register"
          title="ABN Registration"
          description={[
            "An Australian Business Number (ABN) is a unique 11-digit identifier used by businesses and other eligible entities in their dealings with government and the community. Financially Up provides an ABN registration service for people who want help confirming the correct entity, preparing the application information and coordinating related tax registrations.",
            "Not everyone is entitled to an ABN. Entitlement depends on the entity and the activities being carried on or started. Applying for an ABN should therefore begin with the business structure and the nature of the activity, not simply with an online form.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Book an Appointment if you need help with an ABN application, are unsure which entity should apply, or want to coordinate your ABN with other business and tax registrations."
        />

        {/* Pillar 6 Subpages Ribbon */}
        <RelatedBusinessStructuresRibbon currentSlug="abn-registration" />

        {/* Section 1: Who can apply for an ABN? */}
        <WhoCanApplyForAbn />

        {/* Section 2: What should you decide before an ABN application? & Information needed */}
        <DecisionsBeforeAbnAndInformationNeeded />

        {/* Section 3: Applying before trading starts & ABN vs GST */}
        <ApplyingBeforeTradingAndGstDistinction />

        {/* Section 4: ABNs by entity & Common issues */}
        <AbnByEntityAndCommonIssues />

        {/* Section 5: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpAbn />

        {/* Section 6: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About ABN Registration"
          description="Find answers to common questions about applying for an Australian Business Number, eligibility criteria, employees vs contractors, and GST linkage."
          faqs={abnFaqs}
        />

        {/* Section 7: Final Call to Action */}
        <CallToActionBanner
          title="Book an Appointment"
          description="If you need to apply for an ABN or want help confirming that the right entity is being registered, book an appointment with Financially Up. We can review the setup, the ABN application information and any related accounting or tax registrations that may be relevant."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
