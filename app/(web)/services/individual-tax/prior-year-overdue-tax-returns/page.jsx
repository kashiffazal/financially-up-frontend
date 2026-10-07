import SubServiceHero from "@/components/website/SubServiceHero";
import OverdueVsUnlodgedExplanation from "./components/OverdueVsUnlodgedExplanation";
import PriorYearLodgmentAndRefunds from "./components/PriorYearLodgmentAndRefunds";
import PenaltiesInterestAndAtoNotices from "./components/PenaltiesInterestAndAtoNotices";
import MissingRecordsAndCatchUpProcess from "./components/MissingRecordsAndCatchUpProcess";
import HowFinanciallyUpHelpsOverdue from "./components/HowFinanciallyUpHelpsOverdue";
import OverdueRelatedServiceRibbon from "./components/OverdueRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 11)
 */
export const metadata = {
  title: "Overdue Tax Returns Australia | Catch Up Prior Years",
  description:
    "Need help with overdue tax returns? Catch up prior-year and unlodged returns with Financially Up. Book an Australia-wide appointment.",
  keywords: [
    "overdue tax returns australia",
    "prior year tax returns",
    "late tax return accountant",
    "unlodged tax returns",
    "catch up tax returns Australia",
    "non-lodgment advice ATO",
    "ATO failure to lodge penalty",
    "ATO default assessment",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/prior-year-overdue-tax-returns/",
  },
  openGraph: {
    title: "Overdue Tax Returns Australia | Catch Up Prior Years",
    description:
      "Need help with overdue tax returns? Catch up prior-year and unlodged returns with Financially Up. Book an Australia-wide appointment.",
    url: "https://financiallyup.com.au/services/individual-tax/prior-year-overdue-tax-returns/",
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
  { label: "Individual Tax", href: "/services/individual-tax" },
  { label: "Prior-Year & Overdue Tax Returns" },
];

/**
 * 6 Tailored Quick Specifications for Overdue Tax Returns
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const overdueQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Individuals with 1 or multiple outstanding prior-year Australian tax returns",
  },
  {
    icon: "clock",
    label: "Statutory Status",
    value: "Overdue, unlodged, or late lodgments across past financial years",
  },
  {
    icon: "calendar",
    label: "Lodgment Path",
    value: "Non-Lodgment Advice (NLA) or formal prior-year individual return",
  },
  {
    icon: "file",
    label: "Record Rebuilding",
    value: "ATO pre-fill reports, historical PAYG, bank records & substantiation",
  },
  {
    icon: "desktop",
    label: "Delivery Format",
    value: "100% online video meetings (Outlook Calendar) or in-person by arrangement",
  },
  {
    icon: "safety",
    label: "Compliance Guarantee",
    value: "Direct electronic ATO portal lodgement by Registered Tax Agent #26242127",
  },
];

/**
 * 8 Exact Frequently Asked Questions from Client Document (Page 11)
 */
const overdueFaqs = [
  {
    key: "1",
    label: "Do I need to lodge a tax return for every outstanding year?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not necessarily. The lodgment requirement must be checked for each year. If a return was not required, a non-lodgment advice may need to be submitted instead.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can I lodge prior-year tax returns?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Earlier returns can generally still be lodged, although the method and information required depend on the year and your circumstances.
      </p>
    ),
  },
  {
    key: "3",
    label: "What if I have multiple unlodged tax returns?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Each year should be reviewed separately. Start by confirming the outstanding years, then collect the income and deduction records relevant to each one.
      </p>
    ),
  },
  {
    key: "4",
    label: "Will I automatically receive a penalty for lodging late?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. The ATO may apply a failure-to-lodge penalty depending on the circumstances. Remission may be requested where relevant, but the ATO determines the outcome.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can an overdue return still result in a refund?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Possibly. The result depends on the tax information for that year. A refund may also be offset against existing debts and cannot be guaranteed before assessment.
      </p>
    ),
  },
  {
    key: "6",
    label: "What if I cannot pay an amount assessed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Lodgment and payment are separate obligations. Depending on your circumstances, an ATO payment plan may be available, although interest can continue to apply.
      </p>
    ),
  },
  {
    key: "7",
    label: "What if my records are incomplete?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Begin with the records you have and try to obtain replacements. ATO information may assist but is not necessarily complete. Any estimate must have a reasonable basis and satisfy the relevant substantiation rules.
      </p>
    ),
  },
  {
    key: "8",
    label: "When should I use an accountant for overdue tax returns?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Professional help may be useful where several years are outstanding, records are missing, income is complex, or the ATO has issued correspondence. The accountant can help determine the information required and prepare accurate returns; they cannot guarantee a refund or remission.
      </p>
    ),
  },
];

/**
 * Page Component: Overdue Tax Returns Australia (Pillar 1.10)
 */
export default function PriorYearOverdueTaxReturnsPage() {
  // JSON-LD Structured Data for FAQ Rich Snippets
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Do I need to lodge a tax return for every outstanding year?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Not necessarily. The lodgment requirement must be checked for each year. If a return was not required, a non-lodgment advice may need to be submitted instead.",
        },
      },
      {
        "@type": "Question",
        name: "Can I lodge prior-year tax returns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Earlier returns can generally still be lodged, although the method and information required depend on the year and your circumstances.",
        },
      },
      {
        "@type": "Question",
        name: "What if I have multiple unlodged tax returns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Each year should be reviewed separately. Start by confirming the outstanding years, then collect the income and deduction records relevant to each one.",
        },
      },
      {
        "@type": "Question",
        name: "Will I automatically receive a penalty for lodging late?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The ATO may apply a failure-to-lodge penalty depending on the circumstances. Remission may be requested where relevant, but the ATO determines the outcome.",
        },
      },
      {
        "@type": "Question",
        name: "Can an overdue return still result in a refund?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Possibly. The result depends on the tax information for that year. A refund may also be offset against existing debts and cannot be guaranteed before assessment.",
        },
      },
      {
        "@type": "Question",
        name: "What if I cannot pay an amount assessed?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Lodgment and payment are separate obligations. Depending on your circumstances, an ATO payment plan may be available, although interest can continue to apply.",
        },
      },
      {
        "@type": "Question",
        name: "What if my records are incomplete?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Begin with the records you have and try to obtain replacements. ATO information may assist but is not necessarily complete. Any estimate must have a reasonable basis and satisfy the relevant substantiation rules.",
        },
      },
      {
        "@type": "Question",
        name: "When should I use an accountant for overdue tax returns?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Professional help may be useful where several years are outstanding, records are missing, income is complex, or the ATO has issued correspondence. The accountant can help determine the information required and prepare accurate returns; they cannot guarantee a refund or remission.",
        },
      },
    ],
  };

  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 transition-colors">
      {/* FAQ Schema Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero Section */}
      <SubServiceHero
        badge="Prior-Year & Overdue Tax"
        title="Overdue Tax Returns Australia"
        subtitle="Falling behind on a tax return can happen because of changed employment, missing records, time overseas, family pressures or uncertainty about what needs to be lodged. If you have one late return or several years outstanding, the first step is to identify your lodgment obligations and bring each relevant year up to date."
        bodyText={
          <span>
            Financially Up Pty Ltd helps Australian individuals prepare and lodge overdue tax returns, prior year tax returns and catch up tax returns. We can review the years involved, identify available information, explain what is still required and prepare the outstanding returns based on your circumstances.
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Appointment:
              </span>
              At your first appointment, we can discuss the outstanding years, available records, ATO correspondence, missing information and the likely next steps. Appointments can be booked online or by phone, with online meetings available Australia-wide and in-person meetings where available.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.10 • Prior-Year & Overdue Tax Practice"
        highlights={[
          "Multi-Year Historical ATO Portal Access",
          "Non-Lodgment Advice (NLA) Assessment",
          "FTL Penalty & GIC Remission Guidance",
          "Registered Tax Agent #26242127",
        ]}
        quickSpecs={overdueQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Catch-Up Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1 & 2. What are overdue or unlodged tax returns? & What if several years are outstanding? */}
      <OverdueVsUnlodgedExplanation />

      {/* 3. Can prior-year tax returns still be lodged? */}
      <PriorYearLodgmentAndRefunds />

      {/* 4. Penalties interest and ATO notices */}
      <PenaltiesInterestAndAtoNotices />

      {/* 5 & 6. What if tax records are missing? & How the catch-up process works */}
      <MissingRecordsAndCatchUpProcess />

      {/* 7. How Financially Up can help */}
      <HowFinanciallyUpHelpsOverdue />

      {/* 8. Frequently Asked Questions (Verbatim 8 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about catching up on late tax returns, penalties, non-lodgment advice, missing records and ATO notices with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Overdue Tax Returns Australia Frequently Asked Questions"
        items={overdueFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 9. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If you have a late return, unlodged tax returns or several years to catch up, an initial appointment can clarify what is outstanding, what records are available and which services may be required. Financially Up will explain the proposed return-preparation scope and next steps after reviewing your circumstances. No particular assessment, refund, penalty outcome or remission can be promised in advance."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 10. Related Service Ribbon */}
      <OverdueRelatedServiceRibbon />
    </main>
  );
}
