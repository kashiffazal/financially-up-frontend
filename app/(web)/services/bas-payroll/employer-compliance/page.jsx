import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

import WhatDoComplianceServicesInvolve from "./components/WhatDoComplianceServicesInvolve";
import KeyAreasCoveredCompliance from "./components/KeyAreasCoveredCompliance";
import AuditVsPracticalReviewAndInfo from "./components/AuditVsPracticalReviewAndInfo";
import HowFinanciallyUpHelpsCompliance from "./components/HowFinanciallyUpHelpsCompliance";
import WhyChooseFinanciallyUpCompliance from "./components/WhyChooseFinanciallyUpCompliance";

export const metadata = {
  title: "Payroll Compliance Services Australia | Financially Up",
  description:
    "Payroll compliance services for Australian employers, covering payroll records, STP, PAYG, super and payroll reviews. Get practical support from Financially Up.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/employer-compliance/",
  },
  openGraph: {
    title: "Payroll Compliance Services Australia | Financially Up",
    description:
      "Payroll compliance services for Australian employers, covering payroll records, STP, PAYG, super and payroll reviews. Get practical support from Financially Up.",
    url: "https://financiallyup.com.au/services/bas-payroll/employer-compliance/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "Employer Compliance" },
];

const employerComplianceFaqs = [
  {
    question: "What is payroll compliance?",
    answer:
      "Payroll compliance is the process of making sure payroll calculations, records, reporting and payments are handled consistently with the employer obligations that apply to the business. It can involve Fair Work record keeping, PAYG withholding, STP, super and, where relevant, state or territory payroll tax.",
  },
  {
    question: "Is a payroll compliance review the same as an audit?",
    answer:
      "Not necessarily. A payroll compliance review can be an accounting-focused examination of payroll records, reconciliations and processes. A statutory audit, legal review or formal workplace investigation is a different service and may require other appropriately qualified professionals.",
  },
  {
    question: "Can you check award payroll compliance?",
    answer:
      "We can review payroll data, pay categories and accounting records within the agreed service scope. Where the core question is how a modern award, enterprise agreement or employment contract applies, specialist workplace-relations or legal advice may also be required.",
  },
  {
    question: "Can Financially Up help fix historical payroll records?",
    answer:
      "Where the issue is within our accounting, payroll and tax scope, we can help identify discrepancies and work through appropriate corrections. The required process depends on what is wrong, the periods affected and whether external legal or workplace advice is also needed.",
  },
];

export default function EmployerCompliancePage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Payroll Compliance Services for Employers",
    description:
      "Payroll compliance services for Australian employers covering payroll records, STP, PAYG, super, and payroll reviews.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Employer Payroll & Fair Work Compliance",
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
          badgeText="Fair Work & Tax Compliance"
          title="Payroll Compliance Services for Employers"
          description={[
            "Payroll compliance services help employers check that payroll processes, reporting and supporting records are working together correctly. For many businesses, payroll is not just calculating wages: it also involves employee records, pay slips, PAYG withholding, Single Touch Payroll reporting, superannuation, leave balances and other obligations that can vary with the workforce and employment arrangements.",
            "Financially Up supports employers who want a clearer, more reliable payroll process and an accounting-focused review of the information flowing through payroll. The service is designed for businesses that need ongoing payroll compliance support, are changing payroll systems, have grown their team, or want to review existing processes before small errors become recurring problems.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Need help reviewing your payroll setup or recurring obligations? Book an Appointment to discuss your current process, the issues you are seeing and the appropriate scope of payroll compliance support."
        />

        {/* Pillar 5 Subpages Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="employer-compliance" />

        {/* Section 1: What do compliance services involve? & Who may need review */}
        <WhatDoComplianceServicesInvolve />

        {/* Section 2: Key areas covered in compliance */}
        <KeyAreasCoveredCompliance />

        {/* Section 3: Audit vs practical review & Information needed */}
        <AuditVsPracticalReviewAndInfo />

        {/* Section 4: How Financially Up can help */}
        <HowFinanciallyUpHelpsCompliance />

        {/* Section 5: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpCompliance />

        {/* Section 6: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About Payroll Compliance"
          description="Find answers to common questions about Australian employer payroll compliance, Fair Work records, audits, and corrections."
          faqs={employerComplianceFaqs}
        />

        {/* Section 7: Final Call to Action */}
        <CallToActionBanner
          title="Want clearer payroll records and reporting?"
          description="Book an Appointment to discuss a payroll compliance review and the practical steps needed for your business."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
