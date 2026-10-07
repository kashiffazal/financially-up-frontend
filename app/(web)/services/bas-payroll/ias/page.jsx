import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import RelatedBasPayrollRibbon from "../components/RelatedBasPayrollRibbon";

import WhatIsIasLodgement from "./components/WhatIsIasLodgement";
import PaygInstalmentsAndWithholdingIas from "./components/PaygInstalmentsAndWithholdingIas";
import IasVsBasDifference from "./components/IasVsBasDifference";
import WhatFinanciallyUpHelpsIas from "./components/WhatFinanciallyUpHelpsIas";
import IasLodgementProcess from "./components/IasLodgementProcess";
import WhyChooseFinanciallyUpIas from "./components/WhyChooseFinanciallyUpIas";

export const metadata = {
  title: "IAS Lodgement & Preparation Services | Financially Up",
  description:
    "IAS lodgement and preparation support for PAYG instalments and withholding. Get accurate activity statement assistance from Financially Up Australia-wide.",
  alternates: {
    canonical: "https://financiallyup.com.au/services/bas-payroll/ias/",
  },
  openGraph: {
    title: "IAS Lodgement & Preparation Services | Financially Up",
    description:
      "IAS lodgement and preparation support for PAYG instalments and withholding. Get accurate activity statement assistance from Financially Up Australia-wide.",
    url: "https://financiallyup.com.au/services/bas-payroll/ias/",
    siteName: "Financially Up",
    type: "website",
  },
};

const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "BAS & Payroll", href: "/services/bas-payroll" },
  { label: "IAS Preparation & Lodgement" },
];

const iasFaqs = [
  {
    question: "Do I need to lodge an IAS if there is nothing to pay?",
    answer:
      "It depends on the statement and the obligation. If the ATO has issued an activity statement, you should not assume it can be ignored because the amount appears to be nil. The statement may still require lodgement or review. Check the specific IAS or ask your tax agent to confirm the requirement.",
  },
  {
    question: "Can an IAS include both PAYG instalments and PAYG withholding?",
    answer:
      "Yes. An IAS can contain more than one obligation, depending on your registrations and reporting cycles. The labels shown on the ATO-issued statement determine what must be completed.",
  },
  {
    question: "Can Financially Up vary my PAYG instalment?",
    answer:
      "A PAYG instalment may be varied where the rules allow and there is a reasonable basis for the estimate. We can review the current-year position and help prepare the relevant activity statement figures. Broader tax planning or forecasting may be separately scoped.",
  },
  {
    question: "What if my IAS is overdue?",
    answer:
      "It is usually better to address overdue statements promptly. Financially Up can help identify the outstanding periods, check the available records and prepare the IAS for lodgement. If records are incomplete, bookkeeping clean-up may need to occur first.",
  },
  {
    question: "Is IAS lodgement the same as lodging my income tax return?",
    answer:
      "No. An IAS reports specific instalment or withholding obligations during the year. An income tax return reports the taxpayer’s annual taxable income and tax position. PAYG instalments paid during the year are generally credited through the income tax assessment process.",
  },
];

export default function IasLodgementPage() {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "IAS Lodgement & Instalment Activity Statement Services",
    description:
      "IAS lodgement and preparation support for PAYG instalments and withholding across Australia by registered tax agents.",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    areaServed: {
      "@type": "Country",
      name: "Australia",
    },
    serviceType: "Tax Accounting & Activity Statement Services",
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
          badgeText="Instalment Activity Statement"
          title="IAS Lodgement & Instalment Activity Statement Services"
          description={[
            "An Instalment Activity Statement (IAS) is an ATO activity statement used to report and pay certain tax obligations, commonly including PAYG instalments and PAYG withholding. The exact labels on your IAS depend on your registrations and the obligations the ATO has placed on your account. Financially Up provides IAS lodgement support for businesses, sole traders, investors and other taxpayers who want their statement prepared from reliable records and lodged correctly.",
            "If you have received an IAS and are unsure what needs to be reported, an IAS accountant can help identify the relevant figures, reconcile them to your records and explain what the statement is reporting. This is particularly useful where bookkeeping has changed during the period, payroll has been corrected, or the ATO instalment amount no longer appears to match current business conditions.",
          ]}
          ctaText="Book an Appointment"
          ctaHref="/contact"
          ctaSubtext="Discuss your current IAS, reporting cycle and underlying records with Financially Up. We can confirm the scope of the IAS preparation work and identify whether any separate tax or bookkeeping work is needed."
        />

        {/* Pillar 5 Subpages Ribbon */}
        <RelatedBasPayrollRibbon currentSlug="ias" />

        {/* Section 1: What is IAS lodgement? & Who may need IAS preparation services? */}
        <WhatIsIasLodgement />

        {/* Section 2: PAYG instalments and your IAS & PAYG withholding on an IAS */}
        <PaygInstalmentsAndWithholdingIas />

        {/* Section 3: IAS vs BAS: what is the difference? */}
        <IasVsBasDifference />

        {/* Section 4: What Financially Up can help with & What information may be needed? */}
        <WhatFinanciallyUpHelpsIas />

        {/* Section 5: Our IAS lodgement process */}
        <IasLodgementProcess />

        {/* Section 6: Why choose Financially Up? */}
        <WhyChooseFinanciallyUpIas />

        {/* Section 7: FAQs */}
        <FaqSection
          title="Frequently Asked Questions About IAS Lodgement"
          description="Find answers to common questions about Instalment Activity Statements, PAYG instalments, withholding, and variations."
          faqs={iasFaqs}
        />

        {/* Section 8: Final Call to Action */}
        <CallToActionBanner
          title="Book an Appointment"
          description="Need help with an IAS, PAYG instalment or withholding amount? Book an appointment with Financially Up to review the statement, records and appropriate lodgement scope."
          ctaText="Book an Appointment"
          ctaHref="/contact"
        />
      </main>
    </>
  );
}
