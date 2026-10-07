import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

// Page Components
import WhatDoPayrollServicesInclude from "./components/WhatDoPayrollServicesInclude";
import WhoMayBenefitPayrollOutsourcing from "./components/WhoMayBenefitPayrollOutsourcing";
import PayrollObligationsAndPaydaySuper from "./components/PayrollObligationsAndPaydaySuper";
import PracticalPayrollManagementProcess from "./components/PracticalPayrollManagementProcess";
import InformationNeededPayroll from "./components/InformationNeededPayroll";
import WhyChooseFinanciallyUpPayroll from "./components/WhyChooseFinanciallyUpPayroll";

export const metadata = {
  title: "Payroll Services Australia | Payroll Processing & Support",
  description:
    "Payroll services for Australian businesses, including payroll processing, records, STP coordination and employer reporting support. Book an appointment.",
  keywords: [
    "payroll services",
    "payroll processing Australia",
    "outsourced payroll",
    "small business payroll",
    "Single Touch Payroll support",
    "Payday Super",
    "payroll accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/payroll-services/",
  },
  openGraph: {
    title: "Payroll Services Australia | Payroll Processing & Support",
    description:
      "Payroll services for Australian businesses, including payroll processing, records, STP coordination and employer reporting support. Book an appointment.",
    url: "https://financiallyup.com.au/services/bas-payroll/payroll-services/",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "Payroll Services" },
];

export default function PayrollServicesPage() {
  const faqs = [
    {
      question: "Can payroll be outsourced if I already use accounting software?",
      answer:
        "Yes. Payroll outsourcing can be structured around your existing payroll or accounting software, provided the system and access arrangements are suitable. The first step is usually to review the current setup and determine who will be responsible for inputs, approvals and reporting.",
    },
    {
      question: "Do payroll services include Single Touch Payroll reporting?",
      answer:
        "STP reporting can be included where it forms part of the agreed payroll scope and the payroll system supports it. The employer still needs to provide accurate employee and pay information.",
    },
    {
      question: "Can you fix previous payroll errors?",
      answer:
        "We can review payroll records and help identify accounting or reporting corrections within our scope. Some matters, particularly employment entitlement disputes or award interpretation, may require specialist workplace advice.",
    },
    {
      question: "Are payroll services the same as bookkeeping?",
      answer:
        "No. Payroll focuses on employee pay and related employer reporting. Bookkeeping covers broader business transactions and reconciliations. The services can be coordinated where appropriate.",
    },
    {
      question: "Can a payroll accountant help a growing business?",
      answer:
        "A payroll accountant can help establish a more structured payroll process as employee numbers and payroll complexity increase. The appropriate service depends on your workforce, systems and internal responsibilities.",
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
          badge="Payroll Services"
          title="Payroll Services for Australian Businesses"
          subtitle="Pay employees accurately, keep records organized, and meet recurring employer compliance obligations."
          description={`Reliable payroll services help businesses pay employees accurately, keep payroll records organized and meet recurring employer reporting obligations. Financially Up supports businesses that want payroll processed consistently without having to manage every calculation, reconciliation and reporting step internally.`}
          appointmentNote="Need help reviewing your payroll setup, pay cycle or reporting process? Book an Appointment."
          ctaText="Book an Appointment"
          ctaLink="/book-an-appointment"
        />

        {/* What Do Payroll Services Include */}
        <WhatDoPayrollServicesInclude />

        {/* Who May Benefit from Payroll Outsourcing */}
        <WhoMayBenefitPayrollOutsourcing />

        {/* Statutory Obligations & Payday Super */}
        <PayrollObligationsAndPaydaySuper />

        {/* Practical Process & Payroll vs Bookkeeping vs BAS */}
        <PracticalPayrollManagementProcess />

        {/* Information Needed & How Financially Up Helps */}
        <InformationNeededPayroll />

        {/* Why Choose Financially Up */}
        <WhyChooseFinanciallyUpPayroll />

        {/* Related BAS & Payroll Services Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="payroll-services" />

        {/* Frequently Asked Questions */}
        <FaqSection
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about outsourced payroll processing, STP coordination, and employer reporting."
        />

        {/* Call to Action Banner */}
        <CallToActionBanner
          title="Book an Appointment"
          description="Discuss your current payroll process, employee numbers, software, reporting requirements and any recurring payroll issues. We can then clarify the appropriate payroll service scope and any related bookkeeping or tax support required."
          buttonText="Book an Appointment"
          buttonLink="/book-an-appointment"
        />
      </main>
    </>
  );
}
