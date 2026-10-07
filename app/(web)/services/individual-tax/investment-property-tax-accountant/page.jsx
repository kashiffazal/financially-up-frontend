import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsInvestmentPropertyTax from "./components/WhatIsInvestmentPropertyTax";
import RentalIncomeAndExpenses from "./components/RentalIncomeAndExpenses";
import PrivateUseAndAvailability from "./components/PrivateUseAndAvailability";
import PropertyCostsTreatment from "./components/PropertyCostsTreatment";
import RepairsVsImprovementsDepreciation from "./components/RepairsVsImprovementsDepreciation";
import ComplexInvestorSituationsAndGearing from "./components/ComplexInvestorSituationsAndGearing";
import PropertyCgtAndRecords from "./components/PropertyCgtAndRecords";
import HowFinanciallyUpHelpsProperty from "./components/HowFinanciallyUpHelpsProperty";
import PropertyRelatedServiceRibbon from "./components/PropertyRelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 5)
 */
export const metadata = {
  title: "Investment Property Tax Accountant Australia | Financially Up",
  description:
    "Investment property tax accountant for Australian property investors. Get help with rental income, deductions, CGT and tax returns.",
  keywords: [
    "investment property tax",
    "rental property tax accountant",
    "property investor tax return Australia",
    "negative gearing tax accountant",
    "rental property deductions",
    "investment loan interest tax deductible",
    "capital works division 43",
    "depreciation schedule tax accountant",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/investment-property-tax-accountant/",
  },
  openGraph: {
    title: "Investment Property Tax Accountant Australia | Financially Up",
    description:
      "Investment property tax accountant for Australian property investors. Get help with rental income, deductions, CGT and tax returns.",
    url: "https://financiallyup.com.au/services/individual-tax/investment-property-tax-accountant/",
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
  { label: "Investment Property Tax Accountant" },
];

/**
 * 6 Tailored Quick Specifications for Investment Property Tax
 * (Uses string icon identifiers for safe Server Component serialization)
 */
const propertyQuickSpecs = [
  {
    icon: "team",
    label: "Suitable For",
    value: "First-time landlords, joint owners & multi-property residential investors",
  },
  {
    icon: "file",
    label: "Tax Reporting Model",
    value: "Rental property schedule integrated into individual tax return (no separate return)",
  },
  {
    icon: "bank",
    label: "Loan & Interest",
    value: "Deductibility determined by use of borrowed funds, redraws & mixed-use apportionment",
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
    label: "Depreciation & CGT",
    value: "Division 43 capital works, Division 40 plant & equipment, and CGT cost-base adjustments",
  },
];

/**
 * 8 Exact Frequently Asked Questions from Client Document (Page 5)
 */
const propertyFaqs = [
  {
    key: "1",
    label: "Is interest on my investment property loan tax deductible?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It may be deductible to the extent the borrowed funds were used for an income-producing rental purpose. The property used as loan security does not determine deductibility. Private or mixed-purpose borrowing may require apportionment.
      </p>
    ),
  },
  {
    key: "2",
    label: "How does joint ownership affect rental property tax?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Joint owners generally report rental income and expenses according to their legal ownership interests. A separate private agreement does not necessarily change the tax treatment.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I claim depreciation on my investment property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You may be able to claim the decline in value of eligible depreciating assets and capital works deductions where the requirements are met. Restrictions can apply to second-hand assets and certain property-related costs.
      </p>
    ),
  },
  {
    key: "4",
    label: "How long should I keep investment property records?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Rental income and expense records generally need to be kept for at least five years. Acquisition, ownership and CGT records should generally be kept throughout ownership and for at least five years after the property is sold.
      </p>
    ),
  },
  {
    key: "5",
    label: "What rental property expenses can I claim?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Eligible claims may include property management fees, rates, insurance, certain repairs and interest on funds used for a rental purpose. Private, capital or mixed-use amounts may need to be excluded, apportioned or claimed over time.
      </p>
    ),
  },
  {
    key: "6",
    label: "What is the difference between repairs and improvements?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A repair generally restores an existing item. An improvement adds to or substantially changes the property. Initial repairs, improvements and whole-item replacements may receive capital treatment.
      </p>
    ),
  },
  {
    key: "7",
    label: "What happens if I move out of my home and start renting it?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Rental income and eligible expenses generally need to be reported from the relevant period. The change in use may also affect future CGT calculations, so valuation, ownership and occupancy records can be important.
      </p>
    ),
  },
  {
    key: "8",
    label: "What happens for tax purposes when I sell an investment property?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A capital gain or loss may arise. The calculation depends on the sale contract, cost base, ownership history, capital expenditure, prior deductions and any exemptions or concessions that apply.
      </p>
    ),
  },
];

/**
 * InvestmentPropertyTaxAccountantPage Component
 * ==============================================
 * Route: /services/individual-tax/investment-property-tax-accountant
 * Pillar 1.4: Investment Property Tax Accountant (Page 5 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function InvestmentPropertyTaxAccountantPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: propertyFaqs.map((faq) => ({
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
        title="Investment Property Tax Accountant for Australian Property Investors"
        subtitle="Rental Income, Loan Interest, Deductions & CGT Guidance for Property Landlords Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Owning a rental property can involve more than adding rent and expenses to a standard tax return. Loan use, ownership, private use, repairs, capital works, depreciating assets and a future sale can all affect how amounts are reported.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides investment property tax assistance to residential property investors across Australia, including first-time landlords, joint owners and investors with one or multiple properties. We review the relevant records, prepare the rental property information for your individual tax return and explain matters that require further consideration.
            </span>
            <div className="mt-4 p-4 rounded-xl bg-emerald-50/95 dark:bg-emerald-950/40 border border-emerald-200/90 dark:border-emerald-700/50 text-xs sm:text-sm text-emerald-950 dark:text-emerald-100 leading-relaxed font-medium shadow-2xs">
              <span className="font-bold text-emerald-900 dark:text-emerald-200 block mb-1">
                Your Initial Discussion:
              </span>
              Book an appointment to discuss your property, ownership, rental income, expenses and records. The initial discussion helps us identify what needs to be reviewed, explain the relevant service scope and outline the next steps.
            </div>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.4 • Residential Property Investor Tax Practice"
        highlights={[
          "Rental Schedules & Joint Ownership",
          "Loan Interest & Redraw Apportionment",
          "Division 40 & 43 Depreciation Verification",
          "Registered Tax Agent #26242127",
        ]}
        quickSpecs={propertyQuickSpecs}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Property Tax Experience" },
          { value: "TPB #26242127", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Virtual & In-Person" },
        ]}
      />

      {/* 1. What Is Investment Property Tax? */}
      <WhatIsInvestmentPropertyTax />

      {/* 2. How Rental Income and Expenses Are Reported */}
      <RentalIncomeAndExpenses />

      {/* 3. Private Use, Below-Market Rent and Rental Availability */}
      <PrivateUseAndAvailability />

      {/* 4. How Property Costs May Be Treated */}
      <PropertyCostsTreatment />

      {/* 5. Repairs, Improvements, Capital Works and Depreciating Assets */}
      <RepairsVsImprovementsDepreciation />

      {/* 6 & 7. Complex Property Investor Situations, Negative and Positive Gearing */}
      <ComplexInvestorSituationsAndGearing />

      {/* 8 & 9. Capital Gains Tax When Selling a Rental Property & Records to Keep */}
      <PropertyCgtAndRecords />

      {/* 10 & 11. How Financially Up Can Help & How Our Service Works */}
      <HowFinanciallyUpHelpsProperty />

      {/* 12. Frequently Asked Questions (Verbatim 8 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about rental income, property deductions, loan interest, depreciation and CGT with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Investment Property Tax Frequently Asked Questions"
        items={propertyFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 13. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="Rental income, loan use, private use, ownership changes, capital expenditure and CGT can all affect your investment property tax position. Book an appointment with Financially Up Pty Ltd to discuss your property and records. We will identify the areas requiring review, explain the relevant service scope and outline the next steps."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 14. Related Service Ribbon */}
      <PropertyRelatedServiceRibbon />
    </main>
  );
}
