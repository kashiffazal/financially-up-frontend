import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBookkeepingRibbon from "../components/RelatedBookkeepingRibbon";

// Page Components
import WhatAreManagementReportingServices from "./components/WhatAreManagementReportingServices";
import WhoBenefitsManagementReporting from "./components/WhoBenefitsManagementReporting";
import WhatManagementReportsInclude from "./components/WhatManagementReportsInclude";
import ManagementVsStatutoryAndCleanBooks from "./components/ManagementVsStatutoryAndCleanBooks";
import HowManagementReportingWorks from "./components/HowManagementReportingWorks";
import WhatReportingHelpsYouSeeAndInfoNeeded from "./components/WhatReportingHelpsYouSeeAndInfoNeeded";
import WhyChooseFinanciallyUpReporting from "./components/WhyChooseFinanciallyUpReporting";

export const metadata = {
  title: "Management Reporting Services for Business | Financially Up",
  description:
    "Management reporting services that turn current bookkeeping data into practical profit, balance sheet and cash-flow information for business owners.",
  keywords: [
    "management reporting services",
    "management accounts Australia",
    "monthly financial reporting",
    "profit and loss balance sheet reports",
    "cash flow reports",
    "financial visibility business",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bookkeeping/reporting/",
  },
  openGraph: {
    title: "Management Reporting Services for Business | Financially Up",
    description:
      "Management reporting services that turn current bookkeeping data into practical profit, balance sheet and cash-flow information for business owners.",
    url: "https://financiallyup.com.au/services/bookkeeping/reporting/",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Management Reporting" },
];

export default function ManagementReportingPage() {
  const faqs = [
    {
      question: "What is included in management reporting services?",
      answer:
        "The scope can include profit and loss, balance sheet, cash-flow information, debtor and creditor reporting, period comparisons and other agreed management reports. The exact report set depends on the business.",
    },
    {
      question: "How often should management reports be prepared?",
      answer:
        "Monthly reporting is common where owners need regular visibility, but quarterly or other reporting cycles may suit some businesses. Frequency should reflect how often the information will be used.",
    },
    {
      question: "Are management reports the same as financial statements?",
      answer:
        "Not necessarily. Management reports are primarily for internal decision-making. Formal financial statements may need to meet different accounting, tax, regulatory or assurance requirements.",
    },
    {
      question: "Can you prepare reports if my bookkeeping is behind?",
      answer:
        "We can first assess the file. Catch-up or clean-up work may be needed before reliable reporting can be produced.",
    },
    {
      question: "Can you explain what the reports mean?",
      answer:
        "Yes. We can explain the accounting information and significant movements within the agreed service scope. Broader strategic, tax, financial product or legal advice may require a separate engagement or specialist adviser.",
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

      <main className="min-h-screen bg-white dark:bg-neutral-900">
        {/* Hero Section */}
        <SubServiceHero
          parentService={{
            label: "Bookkeeping Hub",
            href: "/services/bookkeeping",
          }}
          breadcrumbs={breadcrumbs}
          badge="Management Reporting Services"
          title="Management Reporting Services for Better Business Visibility"
          subtitle="Turn current bookkeeping data into structured financial information to understand performance and make informed business decisions."
          description={`Management reporting services turn current bookkeeping data into structured financial information that business owners and managers can use to understand performance. Rather than waiting until tax time, regular reports can show how the business is tracking across income, expenses, profitability, cash and key balance-sheet accounts.

Financially Up provides management accounts services for businesses that want reliable recurring reporting built on accurate bookkeeping records. Reports can be tailored to the information that is useful for managing the business, without confusing internal management reporting with statutory financial statements, tax returns or audit work.`}
          appointmentNote="Discuss the reports you currently use, how often you need them, the quality of your bookkeeping data and which financial information would be most useful for management decisions."
          ctaText="Book an Appointment"
          ctaLink="/book-an-appointment"
        />

        {/* What are Management Reporting Services */}
        <WhatAreManagementReportingServices />

        {/* Who May Benefit from Regular Reporting */}
        <WhoBenefitsManagementReporting />

        {/* What Management Reports Include */}
        <WhatManagementReportsInclude />

        {/* Management vs Statutory & Clean Books */}
        <ManagementVsStatutoryAndCleanBooks />

        {/* 4-Step Reporting Process */}
        <HowManagementReportingWorks />

        {/* What Reporting Helps You See & Info Needed */}
        <WhatReportingHelpsYouSeeAndInfoNeeded />

        {/* Why Choose Financially Up */}
        <WhyChooseFinanciallyUpReporting />

        {/* Related Bookkeeping Services Ribbon */}
        <RelatedBookkeepingRibbon currentSlug="reporting" />

        {/* Frequently Asked Questions */}
        <FaqSection
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about business management reporting, financial visibility, and reporting frequency."
        />

        {/* Call to Action Banner */}
        <CallToActionBanner
          title="Book an Appointment"
          description="If you want clearer financial information throughout the year rather than only at tax time, book an appointment with Financially Up. We can discuss your current bookkeeping, reporting needs, preferred frequency and the management reporting services that fit your business."
          buttonText="Book an Appointment"
          buttonLink="/book-an-appointment"
        />
      </main>
    </>
  );
}
