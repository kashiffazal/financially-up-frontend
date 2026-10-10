import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhenTrusteesWindUpSmsf from "./components/WhenTrusteesWindUpSmsf";
import OrderlyWindUpSequence from "./components/OrderlyWindUpSequence";
import MemberBenefitsSuperStreamAndFinalAccounts from "./components/MemberBenefitsSuperStreamAndFinalAccounts";
import FinalAuditReturnAndAtoClosure from "./components/FinalAuditReturnAndAtoClosure";
import CorporateTrusteeDeregistrationAndRecords from "./components/CorporateTrusteeDeregistrationAndRecords";
import RelatedSmsfRibbon from "../components/RelatedSmsfRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 9 of 9th Pillar SMSF.docx)
 */
export const metadata = {
  title: "SMSF Wind Up & Closure Services | Financially Up",
  description:
    "SMSF wind up support covering final accounts, member benefits, audit, tax lodgement and ATO closure steps so the fund can be properly finalized.",
  keywords: [
    "SMSF wind up",
    "close SMSF",
    "SMSF winding up services",
    "SMSF winding up cost",
    "cancel SMSF ABN",
    "final SMSF audit",
    "SMSF SuperStream rollover",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/smsf/wind-up/",
  },
  openGraph: {
    title: "SMSF Wind Up & Closure Services | Financially Up",
    description:
      "SMSF wind up support covering final accounts, member benefits, audit, tax lodgement and ATO closure steps so the fund can be properly finalized.",
    url: "https://financiallyup.com.au/services/smsf/wind-up/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking back through the SMSF hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "SMSF", href: "/services/smsf" },
  { label: "SMSF Wind Up" },
];

/**
 * 6 Quick Specifications for SMSF Wind Up
 */
const smsfWindUpQuickSpecs = [
  {
    icon: "fileText",
    label: "Orderly Procedure",
    value: "Trustee resolution, asset liquidation, SuperStream rollovers, and final audits",
  },
  {
    icon: "sync",
    label: "SuperStream Standards",
    value: "Rollovers completed with final residual balances finalized within 28 days",
  },
  {
    icon: "safety",
    label: "Final SMSF Audit",
    value: "Independent approved auditor sign-off before lodging the final annual return",
  },
  {
    icon: "bank",
    label: "ATO Closure",
    value: "ATO automatically cancels fund ABN upon processing; never cancel manually",
  },
  {
    icon: "creditCard",
    label: "Bank Account Timing",
    value: "Keep SMSF bank account active until final ATO clearance and refund arrival",
  },
  {
    icon: "clock",
    label: "10-Year Archival",
    value: "Statutory 10-year record retention requirement after the final SAR lodgement",
  },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 9)
 */
const smsfWindUpFaqs = [
  {
    key: "1",
    label: "Can I close an SMSF if it still owns assets?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The fund’s assets and liabilities need to be dealt with before the wind-up is completed. The appropriate steps depend on the assets and the members’ circumstances.
      </p>
    ),
  },
  {
    key: "2",
    label: "Do I need a final SMSF audit?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. The final income year must be audited by an approved SMSF auditor before the final SMSF annual return is lodged, and any outstanding earlier audits should also be completed.
      </p>
    ),
  },
  {
    key: "3",
    label: "Should I cancel the SMSF ABN myself?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The ATO states that trustees should not cancel the SMSF ABN. After the final annual return is processed, the ATO will cancel the ABN and close the fund records.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can a wound-up SMSF be reopened?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Once an SMSF has been wound up, it cannot be reactivated. A new SMSF would need to be established if members later decided to use that structure again.
      </p>
    ),
  },
  {
    key: "5",
    label: "How much does it cost to wind up an SMSF?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        SMSF winding up cost depends on the condition of the records, number and type of assets, outstanding lodgements, audit work and any specialist issues. A review of the fund is usually needed before the work can be scoped accurately.
      </p>
    ),
  },
];

/**
 * SmsfWindUpSubpage Component
 * ===========================
 * Route: /services/smsf/wind-up
 * Pillar 9.8: SMSF Wind Up and Closure Services (Page 9 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SmsfWindUpSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Can I close an SMSF if it still owns assets?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The fund’s assets and liabilities need to be dealt with before the wind-up is completed. The appropriate steps depend on the assets and the members’ circumstances.",
        },
      },
      {
        "@type": "Question",
        name: "Do I need a final SMSF audit?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. The final income year must be audited by an approved SMSF auditor before the final SMSF annual return is lodged, and any outstanding earlier audits should also be completed.",
        },
      },
      {
        "@type": "Question",
        name: "Should I cancel the SMSF ABN myself?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The ATO states that trustees should not cancel the SMSF ABN. After the final annual return is processed, the ATO will cancel the ABN and close the fund records.",
        },
      },
      {
        "@type": "Question",
        name: "Can a wound-up SMSF be reopened?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. Once an SMSF has been wound up, it cannot be reactivated. A new SMSF would need to be established if members later decided to use that structure again.",
        },
      },
      {
        "@type": "Question",
        name: "How much does it cost to wind up an SMSF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "SMSF winding up cost depends on the condition of the records, number and type of assets, outstanding lodgements, audit work and any specialist issues. A review of the fund is usually needed before the work can be scoped accurately.",
        },
      },
    ],
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
        badge="SMSF Wind Up & Closure"
        title="SMSF Wind Up and Closure Services"
        subtitle="An SMSF wind up is the formal process of ending a self-managed super fund after its members’ benefits, assets, liabilities, accounting, audit and reporting obligations have been dealt with. Closing a bank account or deciding to stop using the fund is not enough on its own."
        bodyText={
          <span>
            Financially Up can assist trustees with the accounting, tax and administration work involved in an SMSF closure, including final accounts, coordination of the final audit and preparation of the final SMSF annual return. Decisions about where member benefits should be transferred, financial products or investment choices may require appropriately authorized financial advice.
            <div className="mt-4 p-4 rounded-xl bg-amber-50/95 dark:bg-amber-950/40 border border-amber-200/90 dark:border-amber-700/50 text-xs sm:text-sm text-amber-950 dark:text-amber-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-amber-900 dark:text-amber-200 block mb-1">
                Initial Wind Up Review:
              </span>
              If you are considering closing your SMSF, we can review what remains in the fund, what records are outstanding and the steps needed before the final annual return is lodged.
            </div>
          </span>
        }
        parentService={{
          label: "SMSF Hub",
          href: "/services/smsf",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 9.8 • SMSF Practice"
        highlights={[
          "Orderly Asset Disposal & Liability Settlement",
          "SuperStream Rollover Execution & Compliance",
          "Final Independent Audit & SAR Lodgement",
          "Systematic ATO Deregistration Coordination",
        ]}
        quickSpecs={smsfWindUpQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "SMSF & Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. When might trustees wind up an SMSF? */}
      <WhenTrusteesWindUpSmsf />

      {/* 2. What needs to happen before an SMSF can be closed? (8 orderly steps) */}
      <OrderlyWindUpSequence />

      {/* 3. Member benefits must be dealt with correctly & Final accounting and audit */}
      <MemberBenefitsSuperStreamAndFinalAccounts />

      {/* 4. Final SMSF annual return and ATO closure */}
      <FinalAuditReturnAndAtoClosure />

      {/* 5. Corporate trustee after SMSF closes, How we help, Documents checklist, Why choose */}
      <CorporateTrusteeDeregistrationAndRecords />

      {/* 6. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about assets, final audits, ATO ABN cancellation, reopening funds, and closure costs."
        image="/images/services/faq.webp"
        imageAlt="SMSF Wind Up Frequently Asked Questions"
        items={smsfWindUpFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="SMSF Wind Up & Closure Support"
        subtitle="If you are ready to close an SMSF or want to understand what must be completed first, book an appointment with Financially Up to review the fund and plan the wind-up process."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore SMSF Services"
        secondaryButtonHref="/services/smsf"
      />

      {/* 8. Related SMSF Ribbon */}
      <RelatedSmsfRibbon currentSlug="wind-up" />
    </main>
  );
}
