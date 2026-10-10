import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatToDoIfBasOverdue from "./components/WhatToDoIfBasOverdue";
import WhyBasLodgmentsBecomeOverdue from "./components/WhyBasLodgmentsBecomeOverdue";
import HowBasCatchUpServiceWorks from "./components/HowBasCatchUpServiceWorks";
import OverdueBasAndAtoPenalties from "./components/OverdueBasAndAtoPenalties";
import WhatIfYouCannotPayBasDebt from "./components/WhatIfYouCannotPayBasDebt";
import RecordsNeededLateBasAccountant from "./components/RecordsNeededLateBasAccountant";
import OverdueBasVsNormalLodgement from "./components/OverdueBasVsNormalLodgement";
import WhyChooseFinanciallyUpOverdueBas from "./components/WhyChooseFinanciallyUpOverdueBas";
import RelatedOverdueBasRibbon from "./components/RelatedOverdueBasRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 11 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "Overdue BAS Accountant | Catch Up BAS | Financially Up",
  description:
    "Overdue BAS accountant support to reconstruct records, prepare late activity statements, catch up lodgments and address related ATO debt or penalty issues.",
  keywords: [
    "overdue BAS accountant",
    "catch up BAS",
    "late business activity statement",
    "unlodged BAS Australia",
    "overdue GST lodgement",
    "BAS catch up service",
    "ATO overdue BAS penalty",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/overdue-bas/",
  },
  openGraph: {
    title: "Overdue BAS Accountant | Catch Up BAS | Financially Up",
    description:
      "Overdue BAS accountant support to reconstruct records, prepare late activity statements, catch up lodgments and address related ATO debt or penalty issues.",
    url: "https://financiallyup.com.au/services/ato-help/overdue-bas/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ATO Help", href: "/services/ato-help" },
  { label: "Overdue BAS" },
];

/**
 * 3 Exact Frequently Asked Questions from Client Document (Page 11)
 */
const overdueBasFaqs = [
  {
    key: "1",
    label: "Can I lodge a late BAS if I cannot pay it?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, lodgment and payment are separate issues. An accurate activity statement can still be lodged even if the resulting amount cannot be paid in full immediately. Payment options can then be considered based on the actual ATO account balance.
      </p>
    ),
  },
  {
    key: "2",
    label: "Do I need to lodge an overdue BAS if there was no activity?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Often yes. If an activity statement was issued and there are no amounts to report, a nil activity statement may still need to be lodged. There are exceptions for some instalment notices, so the actual obligation should be checked rather than assumed.
      </p>
    ),
  },
  {
    key: "3",
    label: "Will I automatically receive a penalty for every late BAS?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A failure-to-lodge penalty can apply, but the ATO considers the circumstances and does not necessarily impose one for every isolated late lodgment. If a penalty has been imposed, the notice and surrounding circumstances can be reviewed for any available remission request.
      </p>
    ),
  },
];

/**
 * OverdueBasPage Component
 * ========================
 * Route: /services/ato-help/overdue-bas
 * Pillar 11.10: Overdue BAS (Page 11 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function OverdueBasPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: overdueBasFaqs.map((faq) => ({
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
        title="Overdue BAS Accountant"
        subtitle="Reconstruct Missing Records, Catch Up Multiple Periods & Restore ATO Activity Statement Compliance"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An overdue BAS accountant can help bring unlodged business activity statements up to date when bookkeeping is behind, records are incomplete, multiple periods are outstanding or ATO notices have started arriving. The priority is usually to establish exactly which activity statements are overdue, reconstruct reliable figures, lodge accurate statements and then address any resulting tax debt or penalties separately.
            </span>
            <span className="block mt-2">
              Financially Up provides BAS catch up support for businesses that need to move from an overdue position back to current compliance. We can review the ATO lodgment history, organize or repair the underlying bookkeeping where required, prepare outstanding activity statements and coordinate related ATO communication within the agreed scope.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.10 • Activity Statement Catch-Up Practice"
        highlights={[
          "Registered Tax Agent #26234055",
          "Forensic Bookkeeping & GST Reconstruction",
          "Sequential Multi-Period Backlog Lodgement",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What should you do if your BAS is overdue? */}
      <WhatToDoIfBasOverdue />

      {/* 2. Why do BAS lodgments become overdue? */}
      <WhyBasLodgmentsBecomeOverdue />

      {/* 3. How does a BAS catch up service work? */}
      <HowBasCatchUpServiceWorks />

      {/* 4. Overdue BAS and ATO penalties */}
      <OverdueBasAndAtoPenalties />

      {/* 5. What if you cannot pay the BAS debt? */}
      <WhatIfYouCannotPayBasDebt />

      {/* 6. What records does a late BAS accountant need? */}
      <RecordsNeededLateBasAccountant />

      {/* 7. Overdue BAS versus normal BAS lodgement & Finalized statements */}
      <OverdueBasVsNormalLodgement />

      {/* 8. Why choose Financially Up for overdue BAS help? */}
      <WhyChooseFinanciallyUpOverdueBas />

      {/* 9. Frequently Asked Questions (Verbatim 3 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="Overdue BAS FAQs"
        description="Clear guidance on uncoupling lodgement from cash flow, mandatory nil statements, and failure to lodge penalty rules."
        items={overdueBasFaqs}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Restore Compliance"
        title="Bring Your BAS Lodgments Up to Date"
        subtitle="If you have overdue or unlodged BAS, Book an Appointment with Financially Up to review the backlog, bookkeeping records, ATO status and the most practical path back to current lodgment compliance."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 11. Sibling Service Ribbon */}
      <RelatedOverdueBasRibbon />
    </main>
  );
}
