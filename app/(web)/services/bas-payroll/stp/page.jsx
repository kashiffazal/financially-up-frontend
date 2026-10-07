import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

// Page Components
import WhatIsSingleTouchPayroll from "./components/WhatIsSingleTouchPayroll";
import WhatStpReportingCanHelpWith from "./components/WhatStpReportingCanHelpWith";
import StpSetupAndBasCoordination from "./components/StpSetupAndBasCoordination";
import PaydaySuperAndCommonStpIssues from "./components/PaydaySuperAndCommonStpIssues";
import RecordsNeededAndHowFinanciallyUpHelps from "./components/RecordsNeededAndHowFinanciallyUpHelps";
import WhyChooseFinanciallyUpStp from "./components/WhyChooseFinanciallyUpStp";

export const metadata = {
  title: "Single Touch Payroll Services | STP Reporting Support",
  description:
    "Single Touch Payroll services for employers needing STP setup, pay-event reporting, corrections and year-end finalization support. Book an appointment.",
  keywords: [
    "single touch payroll services",
    "STP Phase 2 Australia",
    "STP reporting",
    "Single Touch Payroll setup",
    "STP finalization declaration",
    "payday super STP",
    "STP payroll accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/stp/",
  },
  openGraph: {
    title: "Single Touch Payroll Services | STP Reporting Support",
    description:
      "Single Touch Payroll services for employers needing STP setup, pay-event reporting, corrections and year-end finalization support. Book an appointment.",
    url: "https://financiallyup.com.au/services/bas-payroll/stp/",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "Single Touch Payroll (STP)" },
];

export default function SingleTouchPayrollPage() {
  const faqs = [
    {
      question: "What information is reported through Single Touch Payroll?",
      answer:
        "STP generally reports payroll information including salaries and wages, PAYG withholding and super-related information through enabled payroll software. The exact reporting fields depend on the payroll event and employee circumstances.",
    },
    {
      question: "Do I need to report STP every time I pay employees?",
      answer:
        "Employers generally report STP pay events on or before payday, subject to any applicable concessions or special rules. Your payroll process should be set up around the reporting requirement that applies to your business.",
    },
    {
      question: "What is an STP finalization declaration?",
      answer:
        "It is the year-end declaration that tells the ATO the payroll information for the financial year is complete. It allows employees’ income statements to be marked tax ready once finalized.",
    },
    {
      question: "Can Financially Up help correct STP errors?",
      answer:
        "Yes, we can review payroll and STP information and help prepare corrections within our accounting and tax scope. The appropriate correction depends on the type of error and the payroll system used.",
    },
    {
      question: "Is STP the same as payroll processing?",
      answer:
        "No. Payroll processing calculates and records employee pay. STP is the reporting of payroll information to the ATO. They are closely connected but are not the same service.",
    },
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      {/* Schema.org FAQ Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <main className="min-h-screen bg-white dark:bg-zinc-900">
        {/* Hero Section */}
        <SubServiceHero
          parentService={{
            label: "BAS & Payroll Hub",
            href: "/services/bas-payroll",
          }}
          breadcrumbs={breadcrumbs}
          badge="Single Touch Payroll Services"
          title="Single Touch Payroll Services for Employers"
          subtitle="Manage ATO pay-event reporting, STP Phase 2 compliance, corrections, and year-end finalization declarations."
          description={`Single Touch Payroll services help employers manage the payroll information that must be reported to the ATO through STP-enabled software. Financially Up can assist with STP setup, routine reporting, corrections and year-end finalization as part of an agreed payroll or compliance service.`}
          appointmentNote="Need help with STP setup, reporting or a payroll reporting issue? Book an Appointment."
          ctaText="Book an Appointment"
          ctaLink="/book-an-appointment"
        />

        {/* What is STP & Reporting Timelines */}
        <WhatIsSingleTouchPayroll />

        {/* What STP Reporting Services Help With */}
        <WhatStpReportingCanHelpWith />

        {/* STP Setup & BAS Coordination */}
        <StpSetupAndBasCoordination />

        {/* Payday Super & Common STP Problems */}
        <PaydaySuperAndCommonStpIssues />

        {/* Records Needed & How Financially Up Helps */}
        <RecordsNeededAndHowFinanciallyUpHelps />

        {/* Why Choose Financially Up */}
        <WhyChooseFinanciallyUpStp />

        {/* Related BAS & Payroll Services Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="stp" />

        {/* Frequently Asked Questions */}
        <FaqSection
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about Single Touch Payroll Phase 2 reporting, deadlines, and STP error adjustments."
        />

        {/* Call to Action Banner */}
        <CallToActionBanner
          title="Book an Appointment"
          description="An initial discussion can cover your payroll system, STP setup, any ATO errors or notices, year-to-date figures, finalization status and the broader payroll process. We can then confirm whether you need one-off STP assistance or ongoing payroll support."
          buttonText="Book an Appointment"
          buttonLink="/book-an-appointment"
        />
      </main>
    </>
  );
}
