import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatAreMonthlyBookkeepingServices from "./components/WhatAreMonthlyBookkeepingServices";
import WhoBenefitsMonthlyBookkeeper from "./components/WhoBenefitsMonthlyBookkeeper";
import MonthlyCycleAndBasReadiness from "./components/MonthlyCycleAndBasReadiness";
import WhyRecurringVsCatchUp from "./components/WhyRecurringVsCatchUp";
import HowFinanciallyUpHelpsMonthly from "./components/HowFinanciallyUpHelpsMonthly";
import InformationNeededMonthly from "./components/InformationNeededMonthly";
import WhyChooseFinanciallyUpMonthly from "./components/WhyChooseFinanciallyUpMonthly";
import RelatedBookkeepingRibbon from "../components/RelatedBookkeepingRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3 of Bookkeeping)
 */
export const metadata = {
  title: "Monthly Bookkeeping Services Australia | Financially Up",
  description:
    "Monthly bookkeeping services for Australian businesses. Keep accounts reconciled, records organised and bookkeeping ready for ongoing reporting and compliance.",
  keywords: [
    "monthly bookkeeping services",
    "monthly bookkeeper Australia",
    "small business monthly bookkeeping",
    "outsourced monthly bookkeeping",
    "recurring bookkeeping services",
    "BAS ready bookkeeping",
    "monthly bank reconciliation",
    "ongoing bookkeeping support",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/bookkeeping/monthly-bookkeeping/",
  },
  openGraph: {
    title: "Monthly Bookkeeping Services Australia | Financially Up",
    description:
      "Monthly bookkeeping services for Australian businesses. Keep accounts reconciled, records organised and bookkeeping ready for ongoing reporting and compliance.",
    url: "https://financiallyup.com.au/services/bookkeeping/monthly-bookkeeping/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the Bookkeeping service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Bookkeeping", href: "/services/bookkeeping" },
  { label: "Monthly Bookkeeping" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const monthlyBookkeepingFaqs = [
  {
    key: "1",
    label: "What is included in monthly bookkeeping?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The scope varies by business. It commonly includes agreed transaction processing, bank and credit-card reconciliation, review of coding and follow-up of unclear items. BAS, payroll, tax and advisory services are separate unless specifically included.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is monthly bookkeeping enough for every business?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Some businesses have transaction volumes or payroll requirements that need weekly or more frequent attention. Others may only need monthly support. The right frequency depends on your operations and reporting needs.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can you start if my books are behind?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, but catch-up or clean-up work may need to be completed before a normal monthly cycle begins. The current file should be reviewed first so the backlog can be scoped properly.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can monthly bookkeeping help with BAS?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can keep the underlying records more current, which may make BAS preparation more efficient. BAS preparation and lodgement remains a separate compliance task unless included in the agreed scope.
      </p>
    ),
  },
  {
    key: "5",
    label: "Do you offer outsourced monthly bookkeeping Australia-wide?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up can provide outsourced monthly bookkeeping online to businesses across Australia, with in-person appointments also available where preferred.
      </p>
    ),
  },
];

/**
 * MonthlyBookkeepingPage Component
 * ================================
 * Route: /services/bookkeeping/monthly-bookkeeping
 * Pillar 4.2: Monthly Bookkeeping Services (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function MonthlyBookkeepingPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: monthlyBookkeepingFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.label,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.children.props.children,
      },
    })),
  };

  return (
    <main className="w-full">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 0. Dedicated Sub-Service Hero with Verbatim Lead Copy */}
      <SubServiceHero
        title="Monthly Bookkeeping Services"
        subtitle="Consistent Monthly Reconciliations, Organised Records & Compliance Readiness"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Monthly bookkeeping services provide a regular cycle for keeping business records up to date instead of leaving transactions to build up until BAS or tax time. Financially Up offers ongoing bookkeeping for businesses that want consistent reconciliations, organised records and a clearer view of their financial activity from month to month.
            </span>
            <span className="block mt-2">
              A monthly service can suit established small businesses, growing businesses and owners who no longer want to manage bookkeeping themselves. The scope is agreed around your transaction volume, software, number of accounts and reporting needs.
            </span>
          </span>
        }
        parentService={{
          label: "Bookkeeping Hub",
          href: "/services/bookkeeping",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 4.2 • Monthly Bookkeeping Cadence"
        highlights={[
          "Regular Month-End Reconciliations",
          "Clean Underlying Records for BAS",
          "Proactive Query & Discrepancy Resolution",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Bookkeeping Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What Are Monthly Bookkeeping Services? */}
      <WhatAreMonthlyBookkeepingServices />

      {/* 2. Who Benefits from a Monthly Bookkeeper? */}
      <WhoBenefitsMonthlyBookkeeper />

      {/* 3. What Happens in a Monthly Cycle + GST/BAS Readiness */}
      <MonthlyCycleAndBasReadiness />

      {/* 4. Why Recurring vs Catch-Up + Monthly with Xero */}
      <WhyRecurringVsCatchUp />

      {/* 5. How Financially Up Can Help Each Month */}
      <HowFinanciallyUpHelpsMonthly />

      {/* 6. What Information Do We Need From You? */}
      <InformationNeededMonthly />

      {/* 7. Why Choose Financially Up? */}
      <WhyChooseFinanciallyUpMonthly />

      {/* 8. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about recurring monthly bookkeeping, cycle frequencies, BAS alignment and outsourced workflows with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Monthly Bookkeeping Frequently Asked Questions"
        items={monthlyBookkeepingFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If you want a regular bookkeeping routine instead of repeated catch-up work, book an appointment with Financially Up. We can discuss your accounting software, transaction volume, current backlog and reporting needs, then confirm whether monthly bookkeeping is the right cadence for your business."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore All Bookkeeping Services"
        secondaryButtonHref="/services/bookkeeping"
      />

      {/* 10. Related Bookkeeping Services Ribbon */}
      <RelatedBookkeepingRibbon currentSlug="monthly-bookkeeping" />
    </main>
  );
}
