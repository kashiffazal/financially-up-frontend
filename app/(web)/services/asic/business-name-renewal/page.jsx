import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsBusinessNameRenewal from "./components/WhatIsBusinessNameRenewal";
import WhatToCheckBeforeRenewing from "./components/WhatToCheckBeforeRenewing";
import RenewalProcessAndCancellationRisks from "./components/RenewalProcessAndCancellationRisks";
import RenewalVsCompanyAnnualReviewAndHowWeHelp from "./components/RenewalVsCompanyAnnualReviewAndHowWeHelp";
import BusinessNameRenewalRelatedRibbon from "./components/BusinessNameRenewalRelatedRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4 / Pillar 7.3)
 */
export const metadata = {
  title: "Business Name Renewal Australia | Financially Up",
  description:
    "Renew your ASIC business name with practical support from Financially Up. Review registration details, renewal timing and the next steps before expiry.",
  keywords: [
    "business name renewal",
    "renew business name Australia",
    "ASIC business name renewal",
    "ASIC Connect renewal",
    "business name expiry Australia",
    "business name restoration ASIC",
    "ABN business name renewal",
    "ASIC registration renewal",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/business-name-renewal/",
  },
  openGraph: {
    title: "Business Name Renewal Australia | Financially Up",
    description:
      "Renew your ASIC business name with practical support from Financially Up. Review registration details, renewal timing and the next steps before expiry.",
    url: "https://financiallyup.com.au/services/asic/business-name-renewal/",
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
  { label: "Business Name Renewal" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const businessNameRenewalFaqs = [
  {
    key: "1",
    label: "How long can I renew a business name for?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ASIC currently allows renewal for one year or three years. The most suitable period depends on how long you expect to keep using the name and your administrative preferences.
      </p>
    ),
  },
  {
    key: "2",
    label: "When does ASIC send a business name renewal notice?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ASIC says it sends the renewal notice 30 days before the registration is due to expire, usually by email. Keeping your registered contact details current helps ensure notices reach the right person.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I renew if I missed the due date?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, depending on where the ASIC process has reached. If ASIC has issued a notice of intention to cancel because renewal was missed, the holder can generally stop cancellation by renewing within two months of receiving the notice. If cancellation has already occurred, restoration can be requested within six months of cancellation.
      </p>
    ),
  },
  {
    key: "4",
    label: "Is renewing a business name the same as renewing an ABN?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. An ABN and an ASIC-registered business name are different registrations. Renewing the business name does not renew or replace the ABN.
      </p>
    ),
  },
];

/**
 * BusinessNameRenewalPage Component
 * =================================
 * Route: /services/asic/business-name-renewal
 * Pillar 7.3: Business Name Renewal (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function BusinessNameRenewalPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: businessNameRenewalFaqs.map((faq) => ({
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
        title="Business Name Renewal Australia"
        subtitle="ASIC Business Name Renewals, Registration Review & Continuity Management Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A business name renewal keeps your registered business name active with ASIC so you can continue carrying on business under that name. If the registration is approaching expiry, the practical task is to confirm the name is still needed, check the holder details, choose the renewal period and make sure the renewal is completed before ASIC cancellation becomes an issue.
            </span>
            <span className="block mt-2">
              Financially Up can assist business owners who want help reviewing an ASIC business name renewal, checking the information connected with the registration and coordinating the renewal with broader business administration where required. This page is about renewing an existing business name. If you need to register a new name instead, see our business name registration service.
            </span>
          </span>
        }
        parentService={{
          label: "ASIC Compliance Hub",
          href: "/services/asic",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 7.3 • Corporate Secretarial & Governance"
        highlights={[
          "1 or 3 Year Renewal Options",
          "30-Day Notice Monitoring",
          "Pre-Renewal Holder & ABN Audit",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Business Experience" },
          { value: "1 or 3 Yrs", label: "Renewal Terms" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is a Business Name Renewal & Who Needs It? */}
      <WhatIsBusinessNameRenewal />

      {/* 2. What Should Be Checked Before You Renew? */}
      <WhatToCheckBeforeRenewing />

      {/* 3. How ASIC Business Name Renewal Works & Cancellation Risks */}
      <RenewalProcessAndCancellationRisks />

      {/* 4. Renewal vs Company Annual Review & How Financially Up Can Help */}
      <RenewalVsCompanyAnnualReviewAndHowWeHelp />

      {/* 5. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about ASIC business name renewal durations, 30-day notice timing, late renewal grace periods, and ABN distinctions."
        image="/images/services/faq.webp"
        imageAlt="Business Name Renewal Frequently Asked Questions"
        items={businessNameRenewalFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If your business name is approaching expiry, has become overdue or needs to be reviewed alongside other business changes, book an appointment with Financially Up to discuss the registration and next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ASIC Compliance Hub"
        secondaryButtonHref="/services/asic"
      />

      {/* 7. Related Service Ribbon linking to New Business Name Registration */}
      <BusinessNameRenewalRelatedRibbon />
    </main>
  );
}
