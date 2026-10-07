import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

// Page Components
import WhatIsFbtAndWhenNeeded from "./components/WhatIsFbtAndWhenNeeded";
import WhatDoFbtServicesCover from "./components/WhatDoFbtServicesCover";
import ReportableFbtAndTiming from "./components/ReportableFbtAndTiming";
import CommonRecordsNeededForFbt from "./components/CommonRecordsNeededForFbt";
import HowFinanciallyUpHelpsFbt from "./components/HowFinanciallyUpHelpsFbt";
import WhyChooseFinanciallyUpFbt from "./components/WhyChooseFinanciallyUpFbt";

export const metadata = {
  title: "FBT Accountant Australia | Fringe Benefits Tax Services",
  description:
    "FBT accountant support for employers with fringe benefits, FBT calculations, records and return preparation. Australia-wide appointments available.",
  keywords: [
    "FBT accountant",
    "fringe benefits tax Australia",
    "FBT return preparation",
    "FBT calculation",
    "company car FBT",
    "reportable fringe benefits",
    "FBT exemptions",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/fringe-benefits-tax/",
  },
  openGraph: {
    title: "FBT Accountant Australia | Fringe Benefits Tax Services",
    description:
      "FBT accountant support for employers with fringe benefits, FBT calculations, records and return preparation. Australia-wide appointments available.",
    url: "https://financiallyup.com.au/services/bas-payroll/fringe-benefits-tax/",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "Fringe Benefits Tax (FBT)" },
];

export default function FringeBenefitsTaxPage() {
  const faqs = [
    {
      question: "Does every employee benefit create fringe benefits tax?",
      answer:
        "No. Some benefits may be exempt, concessional or outside the FBT rules depending on the circumstances. The benefit type, recipient, use and available records all matter.",
    },
    {
      question: "Who pays fringe benefits tax?",
      answer:
        "FBT is generally an employer tax. However, certain benefits can also create reportable fringe benefits amounts for employees, which are reported separately under the relevant rules.",
    },
    {
      question: "When is the FBT year?",
      answer:
        "The standard FBT year runs from 1 April to 31 March. Lodgement and payment dates should be confirmed for the relevant year and method of lodgement.",
    },
    {
      question: "Can you prepare an FBT return if my records are incomplete?",
      answer:
        "We can review the records you have and identify what additional information may be needed. The ability to apply particular valuation methods, exemptions or concessions may depend on having the required evidence.",
    },
    {
      question: "Is an FBT accountant the same as a payroll accountant?",
      answer:
        "The roles can overlap, but they are different. Payroll focuses on employee pay and payroll reporting, while FBT work focuses on the tax treatment of benefits provided in connection with employment.",
    },
    {
      question: "Do I need to lodge an FBT return every year?",
      answer:
        "Not every employer needs to lodge an FBT return every year. The requirement depends on whether the employer has an FBT liability or another lodgement obligation for the relevant year. An employer that is registered for FBT but is not required to lodge may need to notify the ATO using the applicable non-lodgement process.",
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
          badge="FBT Accountant Services"
          title="FBT Accountant for Fringe Benefits Tax Compliance"
          subtitle="Identify employee benefits, calculate taxable values, and lodge annual FBT returns with qualified tax agent support."
          description={`An FBT accountant can help employers identify fringe benefits, review available records, calculate taxable values and prepare an FBT return where required. Financially Up supports businesses that provide non-cash benefits or reimbursements and need help understanding the related fringe benefits tax obligations.`}
          appointmentNote="Unsure whether employee benefits create an FBT obligation? Book an Appointment."
          ctaText="Book an Appointment"
          ctaLink="/book-an-appointment"
        />

        {/* What Is FBT & When Needed */}
        <WhatIsFbtAndWhenNeeded />

        {/* What Do FBT Services Cover */}
        <WhatDoFbtServicesCover />

        {/* Reportable FBT & Timing */}
        <ReportableFbtAndTiming />

        {/* Records Needed & FBT Bookkeeping */}
        <CommonRecordsNeededForFbt />

        {/* How Financially Up Helps */}
        <HowFinanciallyUpHelpsFbt />

        {/* Why Choose Financially Up */}
        <WhyChooseFinanciallyUpFbt />

        {/* Related BAS & Payroll Services Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="fringe-benefits-tax" />

        {/* Frequently Asked Questions */}
        <FaqSection
          faqs={faqs}
          title="Frequently Asked Questions"
          subtitle="Common questions about fringe benefits tax exemptions, calculations, and annual return lodgements."
        />

        {/* Call to Action Banner */}
        <CallToActionBanner
          title="Book an Appointment"
          description="An initial discussion can cover the benefits your business provides, available records, payroll reporting, prior FBT treatment and whether an FBT return or further review may be required. We can then confirm the appropriate scope of work."
          buttonText="Book an Appointment"
          buttonLink="/book-an-appointment"
        />
      </main>
    </>
  );
}
