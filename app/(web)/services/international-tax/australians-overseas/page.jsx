import SubServiceHero from "@/components/website/SubServiceHero";
import ExpatResidencyAndDeparture from "./components/ExpatResidencyAndDeparture";
import ForeignResidentStatusAndWithholding from "./components/ForeignResidentStatusAndWithholding";
import AssetsLeavingAndCgtEventI1 from "./components/AssetsLeavingAndCgtEventI1";
import ExpatHelpAndDiscussionPreparation from "./components/ExpatHelpAndDiscussionPreparation";
import RelatedAustraliansOverseasRibbon from "./components/RelatedAustraliansOverseasRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 8)
 */
export const metadata = {
  title: "Australian Expat Tax Accountant | Financially Up",
  description:
    "Living overseas with Australian income or assets? Get help reviewing tax residency, return obligations, rental income, property sales and Australian CGT.",
  keywords: [
    "Australian expat tax accountant",
    "expat tax returns australia",
    "foreign resident capital gains withholding",
    "australian expat property tax",
    "living overseas australian tax obligations",
    "non resident tax accountant sydney",
    "expat tax advice australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/international-tax/australians-overseas/",
  },
  openGraph: {
    title: "Australian Expat Tax Accountant | Financially Up",
    description:
      "Living overseas with Australian income or assets? Get help reviewing tax residency, return obligations, rental income, property sales and Australian CGT.",
    url: "https://financiallyup.com.au/services/international-tax/australians-overseas/",
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
  { label: "International Tax", href: "/services/international-tax" },
  { label: "Australians Overseas" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 8)
 */
const australiansOverseasFaqs = [
  {
    key: "1",
    label: "Am I a foreign resident if I spend more than half the year overseas?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. Australian tax residency is determined under several tests and your overall circumstances; a day count alone does not resolve it.
      </p>
    ),
  },
  {
    key: "2",
    label: "Do I need an Australian tax return while living overseas?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It depends on your residency and income. Australian residents may have worldwide income to declare; foreign residents may still need a return for Australian income or gains.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is my Australian rental income taxable after I leave?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Australian rental income generally remains relevant to an Australian return for a foreign resident. Deductions and ownership details need review.
      </p>
    ),
  },
  {
    key: "4",
    label: "Will a foreign tax return cover my Australian obligations?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Another country's return may provide supporting information, but Australian residency, taxable income and lodgement requirements need a separate assessment.
      </p>
    ),
  },
];

/**
 * AustraliansOverseasPage Component
 * =================================
 * Route: /services/international-tax/australians-overseas
 * Pillar 14.7: Australians Overseas (Page 8 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AustraliansOverseasPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: australiansOverseasFaqs.map((faq) => ({
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
        title="Australian Expat Tax Accountant for Life Overseas"
        subtitle="Australian Tax Returns for Expats, Non-Resident Property Withholding, Rental Portfolios & CGT Event I1"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Living overseas does not automatically end your Australian tax obligations. Your Australian tax residency, continuing income and assets determine whether an Australian return is needed and what it should include. An Australian citizen can be a foreign resident for tax purposes; someone living abroad can also remain an Australian tax resident.
            </span>
            <span className="block mt-2">
              Financially Up helps Australians abroad clarify their status and organize their Australian tax affairs. As an Australian expat tax accountant, we review the facts of your move, income and property before advising on the scope of return preparation.
            </span>
          </span>
        }
        parentService={{
          label: "International Tax Hub",
          href: "/services/international-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 14.7 • Expatriate Practice"
        highlights={[
          "Expat Tax Residency Determination",
          "Foreign Resident CGT Withholding (15% from 1 Jan 2025)",
          "Australian Property & Continuing Income Obligations",
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

      {/* 1. Did moving overseas change your tax residency? & What if you remain resident */}
      <ExpatResidencyAndDeparture />

      {/* 2. What if you become a foreign resident? 15% Withholding & Australian rental */}
      <ForeignResidentStatusAndWithholding />

      {/* 3. What happens to assets when you leave? Event I1 */}
      <AssetsLeavingAndCgtEventI1 />

      {/* 4. How Financially Up helps Australians abroad & What to bring */}
      <ExpatHelpAndDiscussionPreparation />

      {/* 5. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about living overseas, 183-day day counts, continuing return obligations, and Australian rental income."
        image="/images/services/faq.webp"
        imageAlt="Australian Expat Tax Frequently Asked Questions"
        items={australiansOverseasFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Clarify what Australia still requires"
        title="Book an Appointment with Financially Up"
        subtitle="Book an Appointment with Financially Up to review your move, continuing Australian income and assets, and the appropriate Australian expat tax work for your circumstances."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore International Tax Hub"
        secondaryButtonHref="/services/international-tax"
      />

      {/* 7. Related International Tax Services Ribbon */}
      <RelatedAustraliansOverseasRibbon />
    </main>
  );
}
