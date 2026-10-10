import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsInvolvedInSettingUpSmsf from "./components/WhatIsInvolvedInSettingUpSmsf";
import MembersEligibilityAndTrustDeed from "./components/MembersEligibilityAndTrustDeed";
import SmsfRegistrationAndBankingSetup from "./components/SmsfRegistrationAndBankingSetup";
import SmsfSetupCostsAndRequiredInfo from "./components/SmsfSetupCostsAndRequiredInfo";
import PostEstablishmentAdminAndWhyChoose from "./components/PostEstablishmentAdminAndWhyChoose";
import RelatedSmsfRibbon from "../components/RelatedSmsfRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 3 of 9th Pillar SMSF.docx)
 */
export const metadata = {
  title: "SMSF Setup & Establishment Services | Financially Up",
  description:
    "SMSF setup support covering trustee structure, deed coordination, ABN/TFN registration and establishment steps. Practical assistance from Financially Up.",
  keywords: [
    "SMSF setup",
    "SMSF establishment",
    "set up self managed super fund",
    "corporate trustee SMSF",
    "SMSF trust deed",
    "SMSF ABN registration",
    "SMSF director ID",
    "SMSF bank account setup",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/smsf/establishment/",
  },
  openGraph: {
    title: "SMSF Setup & Establishment Services | Financially Up",
    description:
      "SMSF setup support covering trustee structure, deed coordination, ABN/TFN registration and establishment steps. Practical assistance from Financially Up.",
    url: "https://financiallyup.com.au/services/smsf/establishment/",
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
  { label: "SMSF Setup & Establishment" },
];

/**
 * 6 Quick Specifications for SMSF Setup & Establishment
 */
const smsfEstablishmentQuickSpecs = [
  {
    icon: "team",
    label: "Membership Limit",
    value: "Up to six members; all members act as trustees or corporate directors",
  },
  {
    icon: "bank",
    label: "Trustee Models",
    value: "Individual trustees or proprietary special-purpose corporate trustee",
  },
  {
    icon: "calendar",
    label: "Declaration Window",
    value: "Signed ATO trustee declaration required within 21 days of appointment",
  },
  {
    icon: "clock",
    label: "ATO Registration",
    value: "60 days from legal establishment to register for fund ABN and TFN",
  },
  {
    icon: "file",
    label: "Governing Deed",
    value: "Coordinated legal trust deed establishing fund rules and powers",
  },
  {
    icon: "safety",
    label: "Rollover Protocol",
    value: "Dedicated bank account & SuperStream ESA verification before transfers",
  },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 3)
 */
const smsfEstablishmentFaqs = [
  {
    key: "1",
    label: "How many members can an SMSF have?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An SMSF can generally have up to six members. The trustee/director requirements and limited exceptions should be checked for the proposed membership before establishment.
      </p>
    ),
  },
  {
    key: "2",
    label: "Do SMSF trustees need to sign a declaration?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Each new trustee or director of a corporate trustee must sign the ATO trustee declaration within 21 days of becoming a trustee or director and retain it as required.
      </p>
    ),
  },
  {
    key: "3",
    label: "How long do I have to register a new SMSF?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The ATO states that once the fund is legally established and trustees are appointed, the SMSF has 60 days to register by applying for an ABN and completing the related registration steps.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can Financially Up advise whether an SMSF is right for me?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We can explain the accounting, tax and administration implications of operating an SMSF. A recommendation about whether you should establish an SMSF can involve regulated financial product advice and may require an appropriately authorized financial adviser.
      </p>
    ),
  },
];

/**
 * SmsfEstablishmentSubpage Component
 * ==================================
 * Route: /services/smsf/establishment
 * Pillar 9.2: SMSF Setup & Establishment Services (Page 3 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function SmsfEstablishmentSubpage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How many members can an SMSF have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "An SMSF can generally have up to six members. The trustee/director requirements and limited exceptions should be checked for the proposed membership before establishment.",
        },
      },
      {
        "@type": "Question",
        name: "Do SMSF trustees need to sign a declaration?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Each new trustee or director of a corporate trustee must sign the ATO trustee declaration within 21 days of becoming a trustee or director and retain it as required.",
        },
      },
      {
        "@type": "Question",
        name: "How long do I have to register a new SMSF?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The ATO states that once the fund is legally established and trustees are appointed, the SMSF has 60 days to register by applying for an ABN and completing the related registration steps.",
        },
      },
      {
        "@type": "Question",
        name: "Can Financially Up advise whether an SMSF is right for me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We can explain the accounting, tax and administration implications of operating an SMSF. A recommendation about whether you should establish an SMSF can involve regulated financial product advice and may require an appropriately authorized financial adviser.",
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
        badge="SMSF Setup"
        title="SMSF Setup & Establishment Services"
        subtitle="SMSF setup is the legal and administrative process of establishing a self-managed super fund, appointing its trustees, putting the governing documents in place and registering the fund so it can operate. The sequence matters because a fund should be properly established before contributions, rollovers and investments are handled through it."
        bodyText={
          <span>
            Financially Up can assist with the accounting and registration side of SMSF establishment and coordinate the practical setup steps. Deciding whether an SMSF is suitable for you can involve regulated financial product advice, which is separate from accounting and tax services and may require an appropriately authorized financial adviser.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Initial Discussion:
              </span>
              If you are planning to set up an SMSF, an initial discussion can clarify the proposed members and trustee structure, the registration steps, what information is needed and whether legal or financial advice should be separately arranged.
            </div>
          </span>
        }
        parentService={{
          label: "SMSF Hub",
          href: "/services/smsf",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 9.2 • SMSF Practice"
        highlights={[
          "Individual vs Corporate Trustee Assessment",
          "ABN, TFN & SuperStream ESA Registrations",
          "60-Day Statutory ATO Registration Window",
          "Trust Deed Coordination & Bank Setup",
        ]}
        quickSpecs={smsfEstablishmentQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "SMSF Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is involved in setting up an SMSF? & Choose individual vs corporate trustee */}
      <WhatIsInvolvedInSettingUpSmsf />

      {/* 2. Members, trustees and eligibility & Trust deed and legal establishment */}
      <MembersEligibilityAndTrustDeed />

      {/* 3. Register for ABN/TFN, Bank Account, & Rollovers/Contributions */}
      <SmsfRegistrationAndBankingSetup />

      {/* 4. SMSF setup fees, costs & What information is needed */}
      <SmsfSetupCostsAndRequiredInfo />

      {/* 5. What happens after establishment? & Why choose Financially Up */}
      <PostEstablishmentAdminAndWhyChoose />

      {/* 6. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently asked questions"
        subtitle="Common questions about fund membership limits, trustee declarations, ATO registration windows, and financial advice boundaries."
        image="/images/services/faq.webp"
        imageAlt="SMSF Setup & Establishment Frequently Asked Questions"
        items={smsfEstablishmentFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 7. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Book an Appointment"
        title="Explore SMSF Setup"
        subtitle="If you are ready to explore SMSF setup, book an appointment with Financially Up to discuss the proposed members, trustee structure, registration requirements, establishment records and the ongoing accounting process."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore SMSF Services"
        secondaryButtonHref="/services/smsf"
      />

      {/* 8. Related SMSF Ribbon */}
      <RelatedSmsfRibbon currentSlug="establishment" />
    </main>
  );
}
