import SubServiceHero from "@/components/website/SubServiceHero";
import ArrivalAndResidencyTiming from "./components/ArrivalAndResidencyTiming";
import NewMigrantIncomeAndTransfers from "./components/NewMigrantIncomeAndTransfers";
import PartYearResidencyAndForeignTax from "./components/PartYearResidencyAndForeignTax";
import NewMigrantsChecklistAndMeeting from "./components/NewMigrantsChecklistAndMeeting";
import RelatedNewMigrantsRibbon from "./components/RelatedNewMigrantsRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4)
 */
export const metadata = {
  title: "Tax Accountant for New Migrants Australia | Financially Up",
  description:
    "New to Australia? Financially Up reviews tax residency, overseas income, part-year rules and the records needed for your first Australian tax return.",
  keywords: [
    "tax accountant for new migrants Australia",
    "new migrant tax return australia",
    "temporary resident tax exemption",
    "part year tax free threshold australia",
    "first tax return in australia",
    "overseas savings transfer tax australia",
    "migrant tax advice sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/international-tax/new-migrants-tax/",
  },
  openGraph: {
    title: "Tax Accountant for New Migrants Australia | Financially Up",
    description:
      "New to Australia? Financially Up reviews tax residency, overseas income, part-year rules and the records needed for your first Australian tax return.",
    url: "https://financiallyup.com.au/services/international-tax/new-migrants-tax/",
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
  { label: "New Migrants Tax" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const newMigrantsFaqs = [
  {
    key: "1",
    label: "Do I become an Australian tax resident on the day I arrive",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. Residency depends on the tax tests and your circumstances. The date your status changes must be established from the evidence rather than assumed from the visa or flight date.
      </p>
    ),
  },
  {
    key: "2",
    label: "Must I report income earned before moving to Australia",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It depends on your status when the income was derived and the kind of income. We review the timeline rather than treating a whole foreign tax year as one Australian reporting period.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is a temporary visa enough to exempt all overseas income",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Temporary-resident tax treatment has specific conditions and exceptions. Australian tax residency and the character of each income item must also be assessed.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do I need to declare money transferred from overseas",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A transfer is not automatically income. You should retain evidence showing whether the money represents savings, sale proceeds, a loan, a gift or income, because the underlying source and timing determine the tax question.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can Financially Up prepare my first Australian tax return",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, within an agreed engagement. We first check residency, income sources and records so the return reflects your circumstances and any separate advice needs are identified.
      </p>
    ),
  },
];

/**
 * NewMigrantsTaxPage Component
 * =============================
 * Route: /services/international-tax/new-migrants-tax
 * Pillar 14.3: New Migrants Tax (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function NewMigrantsTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: newMigrantsFaqs.map((faq) => ({
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
        title="Tax Accountant for New Migrants in Australia"
        subtitle="First Tax Return Preparation, Part-Year Residency Rules, Worldwide Income & Temporary Resident Advice"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Moving to Australia can change which income needs to be reported and how your first tax return is prepared. Your visa, arrival date and tax residency are related but separate questions. Income earned overseas, investments, a property left abroad and tax already paid in another country may all need review before you lodge.
            </span>
            <span className="block mt-2">
              Financially Up helps new arrivals understand their Australian tax position and prepare an accurate return within an agreed scope. As a tax accountant for new migrants in Australia, we start with your circumstances rather than assuming everyone who arrives has the same obligations.
            </span>
          </span>
        }
        parentService={{
          label: "International Tax Hub",
          href: "/services/international-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 14.3 • New Arrivals Practice"
        highlights={[
          "Part-Year Tax-Free Threshold",
          "Pre vs Post-Arrival Earnings",
          "Temporary Resident Exemptions",
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

      {/* 1. Are you an Australian tax resident when you arrive & How residency changes income */}
      <ArrivalAndResidencyTiming />

      {/* 2. What income may need attention & Transfers */}
      <NewMigrantIncomeAndTransfers />

      {/* 3. Part-year residency rules & Does paying foreign tax remove obligation */}
      <PartYearResidencyAndForeignTax />

      {/* 4. What to bring to the first meeting & How Financially Up can help */}
      <NewMigrantsChecklistAndMeeting />

      {/* 5. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about arrival dates, pre-arrival foreign earnings, temporary visas, and first-year lodgement rules."
        image="/images/services/faq.webp"
        imageAlt="Tax Accountant for New Migrants Frequently Asked Questions"
        items={newMigrantsFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Get clarity on your first Australian tax year"
        title="Book an Appointment with Financially Up"
        subtitle="Book an Appointment with Financially Up to discuss your arrival timeline, Australian and overseas income, and the tax advice or return preparation you need."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore International Tax Hub"
        secondaryButtonHref="/services/international-tax"
      />

      {/* 7. Related International Tax Services Ribbon */}
      <RelatedNewMigrantsRibbon />
    </main>
  );
}
