import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

import WhatAreSuperProcessingServices from "./components/WhatAreSuperProcessingServices";
import WhoBenefitsAndCapabilitiesSuper from "./components/WhoBenefitsAndCapabilitiesSuper";
import SuperComplianceAndRecordsNeeded from "./components/SuperComplianceAndRecordsNeeded";
import HowSuperServiceWorksAndScope from "./components/HowSuperServiceWorksAndScope";
import WhyChooseFinanciallyUpSuper from "./components/WhyChooseFinanciallyUpSuper";

export const metadata = {
  title: "Superannuation Processing Services | Financially Up",
  description:
    "Superannuation processing services for employers, including contribution workflows, payroll reconciliation and Payday Super support. Australia-wide assistance.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/super-processing/",
  },
  openGraph: {
    title: "Superannuation Processing Services | Financially Up",
    description:
      "Superannuation processing services for employers, including contribution workflows, payroll reconciliation and Payday Super support. Australia-wide assistance.",
    url: "https://financiallyup.com.au/services/bas-payroll/super-processing/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "Superannuation Processing" },
];

const superProcessingFaqs = [
  {
    question: "What is included in superannuation processing services?",
    answer:
      "The scope can include reviewing payroll contribution data, preparing contribution workflows, monitoring payment status, reconciling super liability accounts and helping resolve processing exceptions. The exact tasks depend on the employer’s payroll system and agreed service scope.",
  },
  {
    question: "How quickly does super need to reach the employee’s fund under Payday Super?",
    answer:
      "From 1 July 2026, ATO guidance generally requires super guarantee contributions to be received by the employee’s super fund within seven business days of payday. Different or extended timeframes can apply in specified circumstances, so the exact rule should be checked for the situation.",
  },
  {
    question: "Can Financially Up choose a super fund for my employees?",
    answer:
      "No. Our super processing service focuses on employer-side contribution administration, payroll and accounting records. Advice about which financial product or super fund an employee should choose is a different type of service and may require appropriately authorized financial advice.",
  },
  {
    question: "What happens if a super contribution is rejected?",
    answer:
      "A rejected contribution should be investigated promptly. The cause may be incorrect member details, fund information, payment data or another processing issue. The correction required depends on the reason for the rejection and the applicable payment timeframe.",
  },
  {
    question: "Can super processing be combined with payroll services?",
    answer:
      "Yes. Many employers benefit from coordinating super contribution processing with payroll because the calculation and payment cycle now occurs around payday. Financially Up can scope payroll and super administration together where that suits the business.",
  },
];

export default function SuperProcessingPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Superannuation Processing Services for Employers",
    description:
      "Superannuation processing services for employers, including contribution workflows, payroll reconciliation and Payday Super support.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Superannuation & Payday Super Processing",
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
            label: "BAS & Payroll Hub",
            href: "/services/bas-payroll",
          }}
          breadcrumbs={breadcrumbs}
          badgeText="Payday Super & Workflow Support"
          title="Superannuation Processing Services for Employers"
          description={[
            "Superannuation processing services help employers calculate, prepare, reconcile and manage employee super contributions as part of the payroll cycle. From 1 July 2026, Payday Super has made the timing of contribution processing more closely connected to each pay run, increasing the need for accurate payroll data and reliable payment workflows.",
            "Financially Up supports businesses that want an organized super contribution process without treating super as an isolated task. We can help connect payroll records, contribution data, payment information and accounting reconciliations so that employers have a clearer view of what has been calculated, paid and recorded.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Need help with your employer super process? Book an Appointment to discuss your payroll setup, contribution workflow and the level of ongoing super processing support your business needs."
        />

        {/* Pillar 5 Subpages Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="super-processing" />

        {/* Section 1: What are super processing services & Payday Super changes */}
        <WhatAreSuperProcessingServices />

        {/* Section 2: Who may benefit & What Financially Up can help with */}
        <WhoBenefitsAndCapabilitiesSuper />

        {/* Section 3: Compliance boundaries & Records needed */}
        <SuperComplianceAndRecordsNeeded />

        {/* Section 4: How our super processing service works */}
        <HowSuperServiceWorksAndScope />

        {/* Section 5: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpSuper />

        {/* Section 6: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About Superannuation Processing"
          description="Find answers to common questions about Payday Super deadlines, clearing houses, rejected contributions, and employer workflows."
          faqs={superProcessingFaqs}
        />

        {/* Section 7: Final Call to Action */}
        <CallToActionBanner
          title="Need a more organized super contribution process?"
          description="Book an Appointment to discuss superannuation processing services, Payday Super workflows and how the service can fit with your payroll and bookkeeping."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
