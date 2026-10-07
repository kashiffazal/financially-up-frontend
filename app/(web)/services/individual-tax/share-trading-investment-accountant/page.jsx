import SubServiceHero from "@/components/website/SubServiceHero";
import InvestorVsTraderClassification from "./components/InvestorVsTraderClassification";
import DividendsAndFrankingCredits from "./components/DividendsAndFrankingCredits";
import ShareCapitalGainsAndEtfs from "./components/ShareCapitalGainsAndEtfs";
import ShareRecordsAndCorporateActions from "./components/ShareRecordsAndCorporateActions";
import HowFinanciallyUpHelpsShares from "./components/HowFinanciallyUpHelpsShares";
import ShareRelatedServiceRibbon from "./components/ShareRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 7)
 */
export const metadata = {
  title: "Share Trading Accountant Australia | Financially Up",
  description:
    "Share trading accountant for Australian investors, dividends, ETFs, managed funds and investment tax reporting. Book an appointment.",
  keywords: [
    "share trading accountant",
    "share investor tax accountant",
    "ETF tax return Australia",
    "managed fund annual tax statement",
    "franking credits tax accountant",
    "share trader vs investor Australia",
    "dividend reinvestment plan tax",
    "capital gains on shares Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/share-trading-investment-accountant/",
  },
  openGraph: {
    title: "Share Trading Accountant Australia | Financially Up",
    description:
      "Share trading accountant for Australian investors, dividends, ETFs, managed funds and investment tax reporting. Book an appointment.",
    url: "https://financiallyup.com.au/services/individual-tax/share-trading-investment-accountant/",
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
  { label: "Share Trading Accountant" },
];

/**
 * 6 Tailored Quick Specifications for Share Trading & Investments
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const shareQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Share investors, active traders, ETF holders & dividend yield portfolios",
  },
  {
    icon: "file",
    label: "Tax Reporting Model",
    value: "Dividends, distributions & capital gains in individual return (or trading stock for traders)",
  },
  {
    icon: "bank",
    label: "Corporate Actions",
    value: "DRP tracking, stock splits, demergers, rights issues & parcel cost bases",
  },
  {
    icon: "desktop",
    label: "Delivery Format",
    value: "100% online video meetings (Outlook Calendar) or in-person by arrangement",
  },
  {
    icon: "send",
    label: "ATO Lodgement",
    value: "Direct electronic ATO portal lodgement by Registered Tax Agent #26242127",
  },
  {
    icon: "safety",
    label: "Credits & Concessions",
    value: "Franking credit tax offsets & 50% CGT discount for 12+ month holdings",
  },
];

/**
 * 8 Exact Frequently Asked Questions from Client Document (Page 7)
 */
const shareFaqs = [
  {
    key: "1",
    label: "What does a share trading accountant do",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A share trading accountant reviews investment activity, records, dividends, distributions and disposals for tax-return preparation, calculation work or separately scoped advice.
      </p>
    ),
  },
  {
    key: "2",
    label: "How are shares taxed in Australia",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Investors generally hold shares as CGT assets and may have assessable dividend income. A genuine share-trading business may instead apply ordinary income and trading stock rules.
      </p>
    ),
  },
  {
    key: "3",
    label: "What is the difference between a share investor and a share trader",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The distinction depends on the overall facts and whether the activity amounts to carrying on a business. Transaction frequency or portfolio size alone does not decide the classification.
      </p>
    ),
  },
  {
    key: "4",
    label: "Do I pay tax on dividends",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Dividends are generally assessable income. Franked dividends may also carry franking credits that must be reported where the investor is entitled to them.
      </p>
    ),
  },
  {
    key: "5",
    label: "How do franking credits work",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An eligible investor generally includes the attached credit in assessable income and may receive an equivalent tax offset. The credit does not guarantee a refund.
      </p>
    ),
  },
  {
    key: "6",
    label: "How are capital gains from shares taxed",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        An investor may make a capital gain or loss when shares are disposed of. The calculation depends on proceeds, cost base, ownership period, losses and any available concession.
      </p>
    ),
  },
  {
    key: "7",
    label: "How are ETFs and managed funds treated for tax",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Treatment depends on the investment structure and tax-statement components. Taxable amounts can include distributions, capital gains, franking credits and foreign income, even when they differ from cash received.
      </p>
    ),
  },
  {
    key: "8",
    label: "What records should I keep for share investments",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Keep acquisition and disposal records, brokerage, dividend statements, annual tax statements, parcel details and documents relating to corporate actions.
      </p>
    ),
  },
];

/**
 * ShareTradingInvestmentAccountantPage Component
 * ==============================================
 * Route: /services/individual-tax/share-trading-investment-accountant
 * Pillar 1.6: Share Trading Accountant (Page 7 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function ShareTradingInvestmentAccountantPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: shareFaqs.map((faq) => ({
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
        title="Share Trading Accountant for Australian Investors"
        subtitle="Tax Reporting for Shares, ETFs, Managed Funds, Dividends & Trading vs Investing Classification"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Shares, ETFs and managed funds can add dividends, franking credits, distributions, capital gains, capital losses and numerous transactions to an individual tax return. The correct treatment also depends on whether your activities amount to investing or a business of share trading.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd assists Australian individuals with share and investment-related tax reporting. Services are available Australia-wide through online meetings, with appointments also available by phone or in person where preferred.
            </span>
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Appointment:
              </span>
              Book an appointment to discuss your investment activity, transaction history, dividend and distribution statements, capital gains or losses and the records available. The first appointment helps identify the work required and whether you need tax-return preparation, calculation work or separately scoped tax advice.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.6 • Share Trading & Investment Practice"
        highlights={[
          "Shares, ETFs & Managed Fund Distributions",
          "Franking Credits & Dividend Gross-Up",
          "Investor vs Share Trader Assessment",
          "Registered Tax Agent #26242127",
        ]}
        quickSpecs={shareQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Share Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1. Share Investor or Share Trader */}
      <InvestorVsTraderClassification />

      {/* 2. Dividends and Franking Credits */}
      <DividendsAndFrankingCredits />

      {/* 3 & 4. Capital Gains and Losses from Shares & ETFs Managed Funds */}
      <ShareCapitalGainsAndEtfs />

      {/* 5. Records for Shares, Investments and Corporate Actions */}
      <ShareRecordsAndCorporateActions />

      {/* 6. How Financially Up Can Help */}
      <HowFinanciallyUpHelpsShares />

      {/* 7. Frequently Asked Questions (Verbatim 8 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about share investments, dividend taxation, franking credits, capital gains, ETFs and share trading classification with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Share Trading Accountant Frequently Asked Questions"
        items={shareFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If shares, ETFs or managed funds have made your tax return more complex, Financially Up can review your investment records and explain the work required before lodgement. Book an appointment to discuss your transactions, statements, capital gains or losses and the next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 9. Related Service Ribbon */}
      <ShareRelatedServiceRibbon />
    </main>
  );
}
