import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

// Page Components
import WhatIsIncludedBasLodgement from "./components/WhatIsIncludedBasLodgement";
import WhenUseBasServices from "./components/WhenUseBasServices";
import AccurateRecordsBeforeBas from "./components/AccurateRecordsBeforeBas";
import RecordsToHaveReadyBas from "./components/RecordsToHaveReadyBas";
import BasLodgementForSmallBusiness from "./components/BasLodgementForSmallBusiness";
import WhyChooseFinanciallyUpBas from "./components/WhyChooseFinanciallyUpBas";

export const metadata = {
  title: "BAS Lodgement Service Australia | Financially Up",
  description:
    "Professional BAS lodgement service for Australian businesses. Get help preparing activity statements, reviewing GST figures and lodging with the ATO.",
  keywords: [
    "BAS lodgement service",
    "BAS lodgement Australia",
    "activity statement accountant",
    "GST lodgement",
    "BAS preparation",
    "registered tax agent BAS",
    "business activity statement lodgement",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/bas-lodgement/",
  },
  openGraph: {
    title: "BAS Lodgement Service Australia | Financially Up",
    description:
      "Professional BAS lodgement service for Australian businesses. Get help preparing activity statements, reviewing GST figures and lodging with the ATO.",
    url: "https://financiallyup.com.au/services/bas-payroll/bas-lodgement/",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "BAS Lodgement" },
];

export default function BasLodgementPage() {
  const faqs = [
    {
      question: "Can an accountant lodge my BAS?",
      answer:
        "Yes. A registered tax agent or BAS agent can assist with preparing and lodging BAS information within their authorized scope. Financially Up can help through its registered tax-agent services.",
    },
    {
      question: "What if I have missed more than one BAS?",
      answer:
        "Multiple outstanding periods can usually be worked through in sequence. The first step is to identify which activity statements are outstanding and bring the relevant accounting records up to date before preparing each period.",
    },
    {
      question: "Can you lodge a BAS if my bookkeeping is incomplete?",
      answer:
        "Incomplete records normally need to be corrected or completed first. Financially Up can identify what is missing and, where appropriate, scope catch-up bookkeeping before the BAS is prepared.",
    },
    {
      question: "Can I claim GST on every business expense?",
      answer:
        "No. GST credits depend on the nature of the purchase, whether the business is registered or required to be registered, how the purchase is used and whether the relevant tax-invoice requirements are met. Some purchases may not give rise to a GST credit.",
    },
    {
      question: "Is BAS filing the same as GST registration?",
      answer:
        "No. GST registration establishes the business's GST registration status. BAS filing is the later reporting process used to report GST and other applicable activity-statement obligations.",
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
          badge="BAS Lodgement Service"
          title="BAS Lodgement Service for Australian Businesses"
          subtitle="Prepare, review and lodge accurate activity statements with the ATO backed by registered tax agent oversight."
          description={`A BAS lodgement service helps a business prepare, review and lodge the activity statement information required by the ATO. Financially Up works with business owners who want their BAS prepared from reliable records, with GST and other relevant activity-statement figures checked before lodgement.

This page is specifically about BAS preparation and lodgement. It is not a replacement for ongoing bookkeeping, payroll processing or broader tax planning, although those services can be coordinated where the BAS work identifies a separate need.`}
          appointmentNote="Book an appointment to discuss your reporting cycle, current records and any BAS that needs to be prepared or brought up to date."
          ctaText="Book an Appointment"
          ctaLink="/book-an-appointment"
        />

        {/* What is Included in BAS Lodgement */}
        <WhatIsIncludedBasLodgement />

        {/* When Use BAS Services & What BAS Reports */}
        <WhenUseBasServices />

        {/* Accurate Records Before BAS */}
        <AccurateRecordsBeforeBas />

        {/* Records to Have Ready */}
        <RecordsToHaveReadyBas />

        {/* BAS for Small Business & How Financially Up Helps */}
        <BasLodgementForSmallBusiness />

        {/* Why Choose Financially Up */}
        <WhyChooseFinanciallyUpBas />

        {/* Related BAS & Payroll Services Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="bas-lodgement" />

        {/* Frequently Asked Questions */}
        <FaqSection
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about business activity statements, GST reporting, and BAS agent lodgement."
        />

        {/* Call to Action Banner */}
        <CallToActionBanner
          title="Book an Appointment"
          description="Book an appointment to discuss the BAS period, the state of your records, GST coding, payroll-related reporting and any outstanding lodgements. The first discussion can help establish what needs to be prepared and whether bookkeeping or separate advice is also required."
          buttonText="Book an Appointment"
          buttonLink="/book-an-appointment"
        />
      </main>
    </>
  );
}
