import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

import WhatArePaygServices from "./components/WhatArePaygServices";
import PaygReportingAndDistinctions from "./components/PaygReportingAndDistinctions";
import PaygComplianceScopeAndIssues from "./components/PaygComplianceScopeAndIssues";
import HowFinanciallyUpHelpsPayg from "./components/HowFinanciallyUpHelpsPayg";
import WhyChooseFinanciallyUpPayg from "./components/WhyChooseFinanciallyUpPayg";

export const metadata = {
  title: "PAYG Withholding Services & Registration | Financially Up",
  description:
    "PAYG withholding services for employers, including registration, reporting and reconciliations. Get practical PAYG withholding compliance support Australia-wide.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/payg/",
  },
  openGraph: {
    title: "PAYG Withholding Services & Registration | Financially Up",
    description:
      "PAYG withholding services for employers, including registration, reporting and reconciliations. Get practical PAYG withholding compliance support Australia-wide.",
    url: "https://financiallyup.com.au/services/bas-payroll/payg/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "PAYG Withholding" },
];

const paygFaqs = [
  {
    question: "When does a business need to register for PAYG withholding?",
    answer:
      "Registration is generally required before a business starts withholding from payments covered by the PAYG withholding rules. The exact requirement depends on the type of payment and payer. If you are about to hire employees or begin making other reportable payments, it is sensible to review the registration position before the first relevant pay cycle.",
  },
  {
    question: "Is PAYG withholding the same as income tax for the business?",
    answer:
      "No. PAYG withholding is tax withheld from payments to employees and certain other payees and remitted to the ATO. The business’s own income tax is separate, although PAYG instalments may be payable towards that liability.",
  },
  {
    question: "Can PAYG withholding be reported through STP only?",
    answer:
      "STP reports payroll information to the ATO, but employers also have activity statement obligations for PAYG withholding. The payroll, STP and activity statement figures should be reconciled rather than treated as unrelated reports.",
  },
  {
    question: "Can Financially Up fix old PAYG withholding errors?",
    answer:
      "We can review historical payroll and activity statement records and identify the correction steps that appear appropriate. The work may involve payroll amendments, STP corrections, activity statement revisions or bookkeeping adjustments depending on the source of the error.",
  },
  {
    question: "Does PAYG withholding advice include employment law advice?",
    answer:
      "No. We can assist with tax and accounting aspects of PAYG withholding and payroll compliance. Employment contracts, award interpretation and legal employment obligations may require advice from an appropriately qualified employment adviser or lawyer.",
  },
];

export default function PaygWithholdingPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "PAYG Withholding Services for Employers",
    description:
      "PAYG withholding services for employers, including registration, reporting and reconciliations across Australia by registered tax agents.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Payroll & PAYG Withholding Tax Compliance",
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
          badgeText="Employer Withholding Compliance"
          title="PAYG Withholding Services for Employers"
          description={[
            "PAYG withholding is the system under which businesses withhold amounts from certain payments and remit those amounts to the ATO. For most employers, it is a core payroll compliance obligation alongside Single Touch Payroll reporting, superannuation and record keeping. Financially Up provides PAYG withholding services for businesses that need help with registration, payroll reconciliations, activity statement reporting and ongoing compliance.",
            "A PAYG withholding accountant can help make sure the amounts calculated through payroll are reflected correctly in the figures reported to the ATO. This is especially useful when a business is hiring for the first time, changing payroll systems, correcting historical payroll, or dealing with discrepancies between STP reports and activity statements.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Book an appointment to discuss your payroll setup, PAYG withholding registration or reporting issue. We can confirm the relevant compliance work and whether payroll processing, STP corrections or tax advice should be separately scoped."
        />

        {/* Pillar 5 Subpages Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="payg" />

        {/* Section 1: What are PAYG withholding services? & Who may need registration */}
        <WhatArePaygServices />

        {/* Section 2: STP reporting, PAYG instalments distinction, and activity statements */}
        <PaygReportingAndDistinctions />

        {/* Section 3: Compliance scope and common problems */}
        <PaygComplianceScopeAndIssues />

        {/* Section 4: Information needed & How Financially Up can help */}
        <HowFinanciallyUpHelpsPayg />

        {/* Section 5: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpPayg />

        {/* Section 6: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About PAYG Withholding"
          description="Find answers to common questions about employer PAYG withholding, registration, activity statements, and adjustments."
          faqs={paygFaqs}
        />

        {/* Section 7: Final Call to Action */}
        <CallToActionBanner
          title="Book an Appointment"
          description="Need help registering for PAYG withholding, reconciling payroll or preparing activity statement figures? Book an appointment with Financially Up to discuss the issue and appropriate scope."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
