import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

// Page Components
import WhenNeedGstRegistration from "./components/WhenNeedGstRegistration";
import WhatHappensAfterRegistration from "./components/WhatHappensAfterRegistration";
import InformationNeededGstSetup from "./components/InformationNeededGstSetup";
import CommonGstRegistrationIssues from "./components/CommonGstRegistrationIssues";
import HowFinanciallyUpHelpsGst from "./components/HowFinanciallyUpHelpsGst";
import WhyChooseFinanciallyUpGst from "./components/WhyChooseFinanciallyUpGst";

export const metadata = {
  title: "GST Registration Service Australia | Financially Up",
  description:
    "GST registration service for Australian businesses. Get help assessing registration requirements, setting up GST and understanding BAS obligations.",
  keywords: [
    "GST registration service",
    "GST registration Australia",
    "register for GST",
    "voluntary GST registration",
    "$75000 GST threshold",
    "ride sourcing GST",
    "taxi GST registration",
    "fuel tax credit registration",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/gst-registration/",
  },
  openGraph: {
    title: "GST Registration Service Australia | Financially Up",
    description:
      "GST registration service for Australian businesses. Get help assessing registration requirements, setting up GST and understanding BAS obligations.",
    url: "https://financiallyup.com.au/services/bas-payroll/gst-registration/",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "GST Registration" },
];

export default function GstRegistrationPage() {
  const faqs = [
    {
      question: "What is the GST registration threshold?",
      answer:
        "For most businesses and enterprises, the GST turnover threshold is $75,000. The compulsory-registration test considers current and projected GST turnover, not accounting profit. A $150,000 threshold generally applies to non-profit organisations, while some activities require registration regardless of turnover. The correct rule and turnover calculation should be checked for the specific entity.",
    },
    {
      question: "Can I register for GST before reaching $75,000?",
      answer:
        "Yes, voluntary registration may be available. However, registration creates ongoing GST and BAS obligations, so it is worth understanding the administrative and commercial effects before choosing to register.",
    },
    {
      question: "Do I need an ABN before registering for GST?",
      answer:
        "A business generally needs an active ABN to register for GST. GST registration can also be applied for as part of some ABN application processes.",
    },
    {
      question: "Can I claim GST credits after I register?",
      answer:
        "GST credits may be available on eligible business purchases when the GST rules are satisfied and the required records are held. Not every purchase qualifies, and private-use components or purchases with special treatment may need separate consideration.",
    },
    {
      question: "Will GST registration automatically set up my BAS?",
      answer:
        "Once GST registration is active, the ATO will generally issue activity statements according to the applicable reporting cycle. The accounting records and GST coding still need to be set up so the BAS can be prepared accurately.",
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
          badge="GST Registration Service"
          title="GST Registration Service for Australian Businesses"
          subtitle="Determine compulsory or voluntary GST status, complete registrations accurately, and establish your BAS workflow."
          description={`A GST registration service helps a business determine whether it needs to register for GST, complete the registration correctly and understand the reporting obligations that follow. Financially Up assists businesses that are approaching the GST threshold, starting a new enterprise, changing structure or voluntarily considering GST registration.

For most businesses and enterprises, GST registration is generally required when the $75,000 GST turnover test is met. The test considers current and projected GST turnover rather than accounting profit or cash receipts. Different rules apply to some organisations and activities, including non-profit bodies, taxi, limousine and ride-sourcing services, and businesses claiming fuel tax credits. Registration can also be voluntary in some circumstances.`}
          appointmentNote="If you are unsure whether registration is required or what happens after registration, book an appointment to review your circumstances before making assumptions."
          ctaText="Book an Appointment"
          ctaLink="/book-an-appointment"
        />

        {/* When Do You Need to Register & Voluntary Registration */}
        <WhenNeedGstRegistration />

        {/* What Happens After Registration & Entity Restructures */}
        <WhatHappensAfterRegistration />

        {/* What Information Needed */}
        <InformationNeededGstSetup />

        {/* Common GST Registration Issues */}
        <CommonGstRegistrationIssues />

        {/* How Financially Up Helps */}
        <HowFinanciallyUpHelpsGst />

        {/* Why Choose Financially Up */}
        <WhyChooseFinanciallyUpGst />

        {/* Related BAS & Payroll Services Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="gst-registration" />

        {/* Frequently Asked Questions */}
        <FaqSection
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about GST turnover calculations, registration criteria, and business activity statement setup."
        />

        {/* Call to Action Banner */}
        <CallToActionBanner
          title="Book an Appointment"
          description="Book an appointment to discuss your turnover, business activities, expected growth, current registrations and accounting setup. We can help establish whether GST registration needs to be considered and what practical steps follow if you register."
          buttonText="Book an Appointment"
          buttonLink="/book-an-appointment"
        />
      </main>
    </>
  );
}
