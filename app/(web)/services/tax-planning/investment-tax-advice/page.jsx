import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatInvestmentTaxAdviceCovers from "./components/WhatInvestmentTaxAdviceCovers";
import WhoBenefitsFromInvestmentTaxPlanning from "./components/WhoBenefitsFromInvestmentTaxPlanning";
import SharesDividendsEtfsAndFunds from "./components/SharesDividendsEtfsAndFunds";
import CapitalGainsLossesDisposalPlanning from "./components/CapitalGainsLossesDisposalPlanning";
import InvestmentPropertyTaxConsiderations from "./components/InvestmentPropertyTaxConsiderations";
import OwnershipAndTimingConsiderations from "./components/OwnershipAndTimingConsiderations";
import RecordsSupportingInvestmentTaxAdvice from "./components/RecordsSupportingInvestmentTaxAdvice";
import HowFinanciallyUpHelpsInvestment from "./components/HowFinanciallyUpHelpsInvestment";
import RelatedInvestmentTaxRibbon from "./components/RelatedInvestmentTaxRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 12)
 * File: '3rd Pillar Tax Planning & Advisory Final Content Pages 1-12.docx'
 */
export const metadata = {
  title: "Investment Tax Advice for Investors | Financially Up",
  description:
    "Understand the tax impact of shares, funds, property and investment disposals with practical investment tax advice from Financially Up.",
  keywords: [
    "investment tax advice",
    "shares tax advice Australia",
    "ETF tax planning Sydney",
    "managed fund AMMA statements",
    "CGT on investment disposals",
    "capital loss quarantining",
    "property investment tax advice",
    "Australian investor tax accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/tax-planning/investment-tax-advice/",
  },
  openGraph: {
    title: "Investment Tax Advice for Investors | Financially Up",
    description:
      "Understand the tax impact of shares, funds, property and investment disposals with practical investment tax advice from Financially Up.",
    url: "https://financiallyup.com.au/services/tax-planning/investment-tax-advice/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the Tax Planning service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services-overview" },
  { label: "Tax Planning", href: "/services/tax-planning" },
  { label: "Investment Tax Advice" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 12)
 */
const investmentTaxAdviceFaqs = [
  {
    key: "1",
    label: "What is investment tax advice?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It is advice about the tax consequences of investment income, ownership, transactions and disposals. It can cover income tax, CGT, capital losses, records and planning considerations before a transaction.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can Financially Up tell me which shares or fund to buy?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        This service is tax advice, not a recommendation to buy, sell or hold a particular financial product. Specific financial product advice may require an appropriately authorized financial adviser.
      </p>
    ),
  },
  {
    key: "3",
    label: "Are franked dividends tax-free?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Franked dividends and attached franking credits generally form part of the tax calculation. The franking credit can provide a tax offset where the relevant requirements are met.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can investment losses reduce my salary income?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Capital losses generally reduce capital gains, not salary or other ordinary income. Different rules can apply where an activity is genuinely carried on as a business rather than as investment activity.
      </p>
    ),
  },
  {
    key: "5",
    label: "When should I seek investment tax advice?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can be useful before a significant disposal, ownership change or other transaction, or when investment income and records have become complicated enough that the tax consequences are unclear.
      </p>
    ),
  },
];

/**
 * InvestmentTaxAdvicePage Component
 * =================================
 * Route: /services/tax-planning/investment-tax-advice
 * Pillar 3.11: Investment Tax Advice (Page 12 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function InvestmentTaxAdvicePage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: investmentTaxAdviceFaqs.map((faq) => ({
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
        title="Investment Tax Advice for Australian Investors"
        subtitle="Tax Impact Modeling for Shares, Managed Funds, ETFs & Property Disposals"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Investment tax advice focuses on the tax consequences of earning, holding, restructuring or disposing of investments. It can help investors understand how income, capital gains, losses, ownership and record keeping may affect their Australian tax position before a decision is finalized.
            </span>
            <span className="block mt-2">
              Financially Up provides tax advice for investors dealing with shares, managed funds, ETFs, interest income, rental property and other investment-related tax matters. We can explain tax consequences and planning considerations, but we do not present tax advice as a recommendation to buy, sell or hold a particular financial product.
            </span>
          </span>
        }
        parentService={{
          label: "Tax Planning Hub",
          href: "/services/tax-planning",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 3.11 • Investor Advisory Practice"
        highlights={[
          "Franked Dividends, ETFs & AMMA Statements",
          "Pre-Disposal CGT & Capital Loss Quarantining",
          "Clear Distinction from Financial Product Advice",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Investment Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person Support" },
        ]}
      />

      {/* 1. What Does Investment Tax Advice Cover? */}
      <WhatInvestmentTaxAdviceCovers />

      {/* 2. Who May Benefit From Tax Planning for Investments? */}
      <WhoBenefitsFromInvestmentTaxPlanning />

      {/* 3. Shares, Dividends, ETFs and Managed Funds */}
      <SharesDividendsEtfsAndFunds />

      {/* 4. Capital Gains, Capital Losses and Disposal Planning */}
      <CapitalGainsLossesDisposalPlanning />

      {/* 5. Investment Property Tax Considerations */}
      <InvestmentPropertyTaxConsiderations />

      {/* 6. Ownership and Timing Considerations */}
      <OwnershipAndTimingConsiderations />

      {/* 7. Records That Support Good Investment Tax Advice */}
      <RecordsSupportingInvestmentTaxAdvice />

      {/* 8. How Financially Up Can Help & Why Choose Us */}
      <HowFinanciallyUpHelpsInvestment />

      {/* 9. Frequently Asked Questions (Verbatim 5 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about investment tax advice, financial product boundaries, franking credits, capital losses, and timing with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Investment Tax Advice Frequently Asked Questions"
        items={investmentTaxAdviceFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Investment Tax Advisory"
        title="Book an Appointment"
        subtitle="Discuss your investments, proposed transactions, capital gains or losses, income, ownership and records with Financially Up and identify the tax issues that should be reviewed."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Tax Planning Hub"
        secondaryButtonHref="/services/tax-planning"
      />

      {/* 11. Related Service Ribbon */}
      <RelatedInvestmentTaxRibbon />
    </main>
  );
}
