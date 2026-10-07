import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

import WhatArePayrollTaxServices from "./components/WhatArePayrollTaxServices";
import PayrollTaxRulesAndWages from "./components/PayrollTaxRulesAndWages";
import PayrollTaxReturnsAndDistinctions from "./components/PayrollTaxReturnsAndDistinctions";
import PayrollTaxRisksAndHelp from "./components/PayrollTaxRisksAndHelp";
import WhyChooseFinanciallyUpPayrollTax from "./components/WhyChooseFinanciallyUpPayrollTax";

export const metadata = {
  title: "Payroll Tax Services & Compliance | Financially Up",
  description:
    "Payroll tax services for Australian employers, including registration, wage reviews, returns and compliance support across state and territory requirements.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/payroll-tax/",
  },
  openGraph: {
    title: "Payroll Tax Services & Compliance | Financially Up",
    description:
      "Payroll tax services for Australian employers, including registration, wage reviews, returns and compliance support across state and territory requirements.",
    url: "https://financiallyup.com.au/services/bas-payroll/payroll-tax/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "Payroll Tax" },
];

const payrollTaxFaqs = [
  {
    question: "Is payroll tax a federal tax?",
    answer:
      "No. Payroll tax is imposed and administered by state and territory governments. The rules, thresholds, rates and lodgement requirements can differ between jurisdictions.",
  },
  {
    question: "Does every employer have to pay payroll tax?",
    answer:
      "No. Payroll tax generally applies when the relevant wage threshold and other jurisdictional requirements are met. A business below the applicable threshold may not have a liability, but multi-state wages and grouping rules can affect the calculation.",
  },
  {
    question: "Are contractor payments included in payroll tax?",
    answer:
      "Some contractor payments can be treated as taxable wages under payroll tax rules, subject to jurisdiction-specific provisions and exemptions. The arrangement should be reviewed rather than assuming all contractors are excluded.",
  },
  {
    question: "Do payroll tax thresholds stay the same every year?",
    answer:
      "Not necessarily. Thresholds, rates and other rules can change and differ by state or territory. Current revenue-office guidance should be checked for the relevant financial year.",
  },
  {
    question: "Can Financially Up lodge payroll tax returns in every state?",
    answer:
      "We provide Australia-wide accounting and tax support and can assist with payroll tax review and compliance work across jurisdictions within the agreed engagement scope. The applicable registration and lodgement process is determined by the relevant state or territory revenue office.",
  },
];

export default function PayrollTaxPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Payroll Tax Services for Australian Employers",
    description:
      "Payroll tax services for Australian employers, including registration, wage reviews, returns and compliance support across state and territory requirements.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "State & Territory Payroll Tax Compliance",
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
          badgeText="State & Territory Compliance"
          title="Payroll Tax Services for Australian Employers"
          description={[
            "Payroll tax is a state and territory tax on wages paid by employers once the relevant jurisdictional threshold and rules are met. Unlike PAYG withholding, it is not administered by the ATO. Thresholds, rates, return requirements and some definitions vary between jurisdictions, so businesses with a growing wage bill or employees in more than one state should review their position carefully.",
            "Financially Up provides payroll tax services to help employers assess registration requirements, review taxable wage categories, prepare payroll tax returns and reconcile payroll data to the figures reported to state or territory revenue offices. The service is designed for business owners and finance teams that want practical support without treating payroll tax as a simple extension of ordinary payroll processing.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Book an appointment to discuss your wage levels, employee locations and current payroll tax position. We can identify the jurisdictions and records that need review and confirm the scope of any registration, return or reconciliation work."
        />

        {/* Pillar 5 Subpages Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="payroll-tax" />

        {/* Section 1: What do payroll tax services include? & Who may need advice */}
        <WhatArePayrollTaxServices />

        {/* Section 2: Registration, taxable wages, and contractor rules */}
        <PayrollTaxRulesAndWages />

        {/* Section 3: Periodic/annual returns and PAYG comparison */}
        <PayrollTaxReturnsAndDistinctions />

        {/* Section 4: Common risks, records needed, and how we help */}
        <PayrollTaxRisksAndHelp />

        {/* Section 5: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpPayrollTax />

        {/* Section 6: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About Payroll Tax"
          description="Find answers to common questions about state and territory payroll taxes, thresholds, contractors, and returns."
          faqs={payrollTaxFaqs}
        />

        {/* Section 7: Final Call to Action */}
        <CallToActionBanner
          title="Book an Appointment"
          description="If your wage bill is growing, you operate across states or you need help with payroll tax registration or returns, book an appointment with Financially Up to review the position and next steps."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
