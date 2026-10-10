import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhichAddressesAsicRecords from "./components/WhichAddressesAsicRecords";
import WhenToUpdateAndRegisteredOfficeChange from "./components/WhenToUpdateAndRegisteredOfficeChange";
import WhyAccurateAddressesMatterAndHowWeHelp from "./components/WhyAccurateAddressesMatterAndHowWeHelp";
import AddressChangesRelatedRibbon from "./components/AddressChangesRelatedRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 8 / Pillar 7.7)
 */
export const metadata = {
  title: "Change Company Address ASIC | Financially Up",
  description:
    "Need to change a company address with ASIC? Financially Up can help update registered office and principal place of business details correctly.",
  keywords: [
    "change company address ASIC",
    "registered office change Australia",
    "principal place of business ASIC",
    "ASIC Form 484 address change",
    "update registered office ASIC",
    "occupier consent registered office",
    "statutory address change 28 days",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/asic/address-changes/",
  },
  openGraph: {
    title: "Change Company Address ASIC | Financially Up",
    description:
      "Need to change a company address with ASIC? Financially Up can help update registered office and principal place of business details correctly.",
    url: "https://financiallyup.com.au/services/asic/address-changes/",
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
  { label: "Address Changes" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 8)
 */
const addressChangesFaqs = [
  {
    key: "1",
    label: "How quickly do I need to change my company address with ASIC?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        ASIC generally requires companies to notify changes to company details within 28 days of the change. Late fees can apply when a required notification is lodged after the relevant deadline.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can a PO Box be my registered office?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. ASIC states that the registered office must be a physical street address in Australia. The principal place of business must also be a physical address.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can my accountant’s office be my registered office?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can be, provided the arrangement is agreed and the ASIC requirements are met. If the company does not occupy the premises, it must keep the occupier&apos;s written consent to use that address.
      </p>
    ),
  },
  {
    key: "4",
    label: "Is the registered office the same as the principal place of business?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. The registered office is the company&apos;s official address for notices and documents, while the principal place of business is the main location where the business operates. They can be the same address, but they serve different purposes.
      </p>
    ),
  },
];

/**
 * AddressChangesPage Component
 * ============================
 * Route: /services/asic/address-changes
 * Pillar 7.7: Change Company Address ASIC (Page 8 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AddressChangesPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: addressChangesFaqs.map((faq) => ({
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
        title="Change Company Address with ASIC"
        subtitle="Registered Office & Principal Place of Business Updates Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              When a company moves, changes accountants or stops using a previous address, its ASIC records may need to be updated promptly. An ASIC company-address notification can involve the registered office, principal place of business, contact address or more than one address at the same time. Financially Up can help identify which company details have changed and prepare the relevant ASIC update.
            </span>
            <span className="block mt-2">
              The registered office and principal place of business serve different purposes, so changing one does not automatically mean the other should change. Getting the distinction right helps ensure ASIC notices reach the correct place and the public company record remains accurate.
            </span>
          </span>
        }
        parentService={{
          label: "ASIC Compliance Hub",
          href: "/services/asic",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 7.7 • Corporate Secretarial & Governance"
        highlights={[
          "Registered Office vs Business Premise",
          "Occupier Written Consent Compliance",
          "28-Day Statutory Lodgement Window",
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

      {/* 1. Which Company Addresses Does ASIC Record? */}
      <WhichAddressesAsicRecords />

      {/* 2. When to Update, 6 Triggers & Registered Office Change Requirements */}
      <WhenToUpdateAndRegisteredOfficeChange />

      {/* 3. Why Accurate Addresses Matter, Scope of Support & Checklist */}
      <WhyAccurateAddressesMatterAndHowWeHelp />

      {/* 4. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about address change timeframes, PO Box restrictions, accountant office registered addresses, and premises differences."
        image="/images/services/faq.webp"
        imageAlt="Change Company Address Frequently Asked Questions"
        items={addressChangesFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 5. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Need to change your registered office or another company address with ASIC? Book an appointment with Financially Up to review the current record and the update required."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ASIC Compliance Hub"
        secondaryButtonHref="/services/asic"
      />

      {/* 6. Related Service Ribbon linking to Registered Agent */}
      <AddressChangesRelatedRibbon />
    </main>
  );
}
