import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatShareTransferInvolvesAndTransferVsIssue from "./components/WhatShareTransferInvolvesAndTransferVsIssue";
import WhenNeedServiceAndTaxConsiderations from "./components/WhenNeedServiceAndTaxConsiderations";
import WhatFinanciallyUpHelpsSharesAndRecords from "./components/WhatFinanciallyUpHelpsSharesAndRecords";
import ShareChangesRelatedRibbon from "./components/ShareChangesRelatedRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 7 / Pillar 7.6)
 */
export const metadata = {
  title: "Share Transfer ASIC & Company Share Changes | Financially Up",
  description:
    "Need help with a share transfer or share issue? Financially Up assists with ASIC notifications, shareholder updates and company share records.",
  keywords: [
    "share transfer ASIC",
    "company share changes",
    "issue shares ASIC",
    "transfer shares proprietary company Australia",
    "ASIC Form 484 share transfer",
    "change beneficial ownership ASIC",
    "reconstruct share register",
    "statutory member register",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/share-changes/",
  },
  openGraph: {
    title: "Share Transfer ASIC & Company Share Changes | Financially Up",
    description:
      "Need help with a share transfer or share issue? Financially Up assists with ASIC notifications, shareholder updates and company share records.",
    url: "https://financiallyup.com.au/services/asic/share-changes/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking back through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ASIC Compliance", href: "/services/asic" },
  { label: "Share Changes" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 7)
 */
const shareChangesFaqs = [
  {
    key: "1",
    label: "How long do I have to tell ASIC about a share transfer?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ASIC states that a company must notify it within 28 days of a transfer of shares or a change in beneficial ownership status. Late notification can result in late fees. The company&apos;s own share register should also be updated to reflect the completed change.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is a share transfer the same as issuing shares?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. A share transfer moves existing shares from one holder to another. A share issue creates new shares and can change the company&apos;s total share capital and ownership percentages.
      </p>
    ),
  },
  {
    key: "3",
    label: "Does notifying ASIC make a share transfer legally valid?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. An ASIC notification records relevant company information but does not approve or validate the underlying transaction. The company should ensure the transfer has been properly authorised, documented and entered in its register of members. Legal advice may be appropriate where rights, restrictions or validity are uncertain.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up update an old or incorrect share register?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We can review the records available and help update or reconstruct the register where the history can be supported. If there are disputed ownership issues or missing legal documents, further legal advice may be needed.
      </p>
    ),
  },
];

/**
 * ShareChangesPage Component
 * ==========================
 * Route: /services/asic/share-changes
 * Pillar 7.6: Share Transfer ASIC and Company Share Changes (Page 7 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ShareChangesPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: shareChangesFaqs.map((faq) => ({
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
        title="Share Transfer ASIC and Company Share Changes"
        subtitle="Share Transfers, Share Issues & Member Register Management Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A company share transfer, new share issue or other change to share ownership needs more than an ASIC update. The company also needs accurate internal records, appropriate approvals and supporting documents that reflect what actually occurred. Financially Up can help company directors and shareholders work through the accounting and ASIC administration connected with share changes so the company records and public register stay aligned.
            </span>
            <span className="block mt-2">
              If you are planning to transfer shares in an Australian company, issue new shares or correct shareholder information, it is important to establish the nature and effective date of the change before lodging anything. A share transfer is not the same as issuing new shares, and the supporting steps can differ. Where tax, legal or valuation advice is required, that work is considered separately from the ASIC filing itself.
            </span>
          </span>
        }
        parentService={{
          label: "ASIC Compliance Hub",
          href: "/services/asic",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 7.6 • Corporate Secretarial & Governance"
        highlights={[
          "Transfer vs New Share Issue Analysis",
          "28-Day Statutory Notification",
          "Internal Member Register Reconciliation",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Corporate Experience" },
          { value: "28 Days", label: "Statutory Deadline" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What a Share Transfer ASIC Update Involves & Transfer vs Issue */}
      <WhatShareTransferInvolvesAndTransferVsIssue />

      {/* 2. When Might You Need Service & Tax/Transaction Considerations */}
      <WhenNeedServiceAndTaxConsiderations />

      {/* 3. What Financially Up Can Help With, Records Needed & Why Choose Us */}
      <WhatFinanciallyUpHelpsSharesAndRecords />

      {/* 4. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about share transfer deadlines, share issue differences, legal validity, and reconstructing outdated share registers."
        image="/images/services/faq.webp"
        imageAlt="Share Changes Frequently Asked Questions"
        items={shareChangesFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 5. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If your company is transferring shares, issuing shares or correcting shareholder records, book an appointment with Financially Up. We can help clarify the ASIC filing, company-record and accounting steps relevant to your circumstances."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ASIC Compliance Hub"
        secondaryButtonHref="/services/asic"
      />

      {/* 6. Related Service Ribbon linking to Corporate Registers */}
      <ShareChangesRelatedRibbon />
    </main>
  );
}
