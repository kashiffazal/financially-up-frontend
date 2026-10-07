import SubServiceHero from "@/components/website/SubServiceHero";
import HowCryptoIsTaxedInAustralia from "./components/HowCryptoIsTaxedInAustralia";
import TaxableCryptoTransactions from "./components/TaxableCryptoTransactions";
import CryptoCgtLossesAndPersonalUse from "./components/CryptoCgtLossesAndPersonalUse";
import StakingAirdropsAndCryptoIncome from "./components/StakingAirdropsAndCryptoIncome";
import CryptoTaxRecordsAndReconciliation from "./components/CryptoTaxRecordsAndReconciliation";
import HowFinanciallyUpHelpsCrypto from "./components/HowFinanciallyUpHelpsCrypto";
import CryptoRelatedServiceRibbon from "./components/CryptoRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 8)
 */
export const metadata = {
  title: "Cryptocurrency Tax Accountant Australia-Wide | Financially Up",
  description:
    "Get help with crypto transactions, capital gains, staking, airdrops and tax returns from a cryptocurrency tax accountant serving Australia-wide.",
  keywords: [
    "cryptocurrency tax accountant",
    "crypto tax accountant Australia",
    "bitcoin tax return Australia",
    "crypto capital gains tax calculator",
    "staking rewards tax Australia",
    "crypto to crypto swap tax",
    "Koinly accountant Australia",
    "crypto tax accountant Sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/cryptocurrency-tax/",
  },
  openGraph: {
    title: "Cryptocurrency Tax Accountant Australia-Wide | Financially Up",
    description:
      "Get help with crypto transactions, capital gains, staking, airdrops and tax returns from a cryptocurrency tax accountant serving Australia-wide.",
    url: "https://financiallyup.com.au/services/individual-tax/cryptocurrency-tax/",
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
  { label: "Cryptocurrency Tax" },
];

/**
 * 6 Tailored Quick Specifications for Cryptocurrency Tax
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const cryptoQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "Crypto investors, active traders, DeFi yield farmers & airdrop recipients",
  },
  {
    icon: "file",
    label: "Tax Reporting Model",
    value: "CGT schedule in individual tax return (or trading stock for trading business)",
  },
  {
    icon: "percentage",
    label: "Disposal Tracking",
    value: "Crypto-to-fiat sales, crypto-to-crypto swaps, staking rewards & merchant spends",
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
    label: "Software & Records",
    value: "Koinly, CryptoTaxCalculator & exchange CSV reconciliation with 5-year retention",
  },
];

/**
 * 8 Exact Frequently Asked Questions from Client Document (Page 8)
 */
const cryptoFaqs = [
  {
    key: "1",
    label: "Do I pay tax when I sell cryptocurrency?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Selling crypto may trigger a CGT event for an investor. The result depends on proceeds, cost base, losses and any available discount. Business treatment may apply in other circumstances.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is swapping one cryptocurrency for another taxable?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, yes. A swap usually disposes of the first asset and acquires the second. You normally need the Australian-dollar market value at the time of the swap.
      </p>
    ),
  },
  {
    key: "3",
    label: "Do I pay tax when transferring crypto between my own wallets?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A transfer between wallets you beneficially own is generally not a disposal by itself. Keep ownership and transfer records; fees or changed ownership may require review.
      </p>
    ),
  },
  {
    key: "4",
    label: "Are staking rewards taxable?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Staking rewards may be ordinary income when derived, depending on the arrangement. A later sale or swap may create a separate CGT calculation.
      </p>
    ),
  },
  {
    key: "5",
    label: "Are crypto airdrops taxable?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        They may be. The treatment depends on why and how the tokens were received. Some airdrops may be ordinary income; later disposal can also have CGT consequences.
      </p>
    ),
  },
  {
    key: "6",
    label: "How are crypto capital losses used?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Capital losses generally offset capital gains, not salary or other ordinary income. Unused net capital losses may usually be carried forward for future eligible capital gains.
      </p>
    ),
  },
  {
    key: "7",
    label: "What records do I need?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Keep transaction dates, quantities, Australian-dollar values, acquisition and disposal details, fees, exchange exports, wallet records, transfers, staking records and airdrop information.
      </p>
    ),
  },
  {
    key: "8",
    label: "When should I use a cryptocurrency tax accountant?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Professional assistance may help with multiple platforms, many swaps, crypto income, missing records, unusual transactions or uncertain investor and business treatment.
      </p>
    ),
  },
];

/**
 * CryptocurrencyTaxPage Component
 * ================================
 * Route: /services/individual-tax/cryptocurrency-tax
 * Pillar 1.7: Cryptocurrency Tax Accountant (Page 8 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function CryptocurrencyTaxPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: cryptoFaqs.map((faq) => ({
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
        title="Cryptocurrency Tax Accountant for Australian Individuals"
        subtitle="ATO Digital Asset Compliance, Swaps, Staking, Airdrops, DeFi & Exchange Reconciliation"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Cryptocurrency tax can become difficult when activity spans exchanges and wallets or includes swaps, staking, airdrops and missing records. Financially Up Pty Ltd assists Australian individuals with reviewing and reporting crypto and digital-asset activity.
            </span>
            <span className="block mt-2">
              A cryptocurrency tax accountant can help identify relevant transactions, organize a crypto tax return, calculate gains and losses where applicable, and review crypto income. Treatment depends on each transaction, your purpose and your records.
            </span>
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Appointment:
              </span>
              At your first appointment, we can discuss your activity, exchanges, wallets, records and tax-return requirements. We will explain the information needed, proposed scope and next steps. Book online or by phone; online meetings are available Australia-wide, with in-person meetings where available.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.7 • Cryptocurrency & Digital Asset Practice"
        highlights={[
          "Exchange & On-Chain Wallet Reconciliation",
          "Swaps, Staking, Airdrops & DeFi Tax",
          "50% CGT Discount & Loss Offsets",
          "Registered Tax Agent #26242127",
        ]}
        quickSpecs={cryptoQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Crypto Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1. How is cryptocurrency taxed in Australia? */}
      <HowCryptoIsTaxedInAustralia />

      {/* 2. Which crypto transactions may have tax consequences? */}
      <TaxableCryptoTransactions />

      {/* 3. Crypto capital gains, losses and personal-use assets */}
      <CryptoCgtLossesAndPersonalUse />

      {/* 4. Staking rewards, airdrops and other crypto income */}
      <StakingAirdropsAndCryptoIncome />

      {/* 5. Records for a crypto tax return */}
      <CryptoTaxRecordsAndReconciliation />

      {/* 6. How a cryptocurrency tax accountant can help */}
      <HowFinanciallyUpHelpsCrypto />

      {/* 7. Frequently Asked Questions (Verbatim 8 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about crypto capital gains, swaps, wallet transfers, staking rewards, airdrops and records with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Cryptocurrency Tax Accountant Frequently Asked Questions"
        items={cryptoFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Book an Appointment with a cryptocurrency tax accountant to discuss your crypto activity, available records and the work required for your tax return. Financially Up will outline the next steps and confirm the service scope before proceeding."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 9. Related Service Ribbon */}
      <CryptoRelatedServiceRibbon />
    </main>
  );
}
