import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsAPartnershipTaxReturn from "./components/WhatIsAPartnershipTaxReturn";
import WhoIsPartnershipServiceFor from "./components/WhoIsPartnershipServiceFor";
import WhatPartnershipReturnReports from "./components/WhatPartnershipReturnReports";
import PartnerProfitSharesDrawingsTax from "./components/PartnerProfitSharesDrawingsTax";
import PartnershipAccountingCompliance from "./components/PartnershipAccountingCompliance";
import WhatRecordsPartnershipNeeds from "./components/WhatRecordsPartnershipNeeds";
import HowFinanciallyUpHelpsPartnerships from "./components/HowFinanciallyUpHelpsPartnerships";
import RelatedPartnershipServicesRibbon from "./components/RelatedPartnershipServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 4 of Business Tax)
 */
export const metadata = {
  title: "Partnership Tax Return Australia | Financially Up",
  description:
    "Partnership tax return and accounting support, including income, deductions, partner profit shares and lodgment for Australian businesses.",
  keywords: [
    "partnership tax return",
    "partnership tax return accountant",
    "partnership accounting Australia",
    "partner profit shares",
    "partnership tax return preparation",
    "business partnership tax",
    "lodge partnership tax return",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/business-tax/partnership-tax-returns/",
  },
  openGraph: {
    title: "Partnership Tax Return Australia | Financially Up",
    description:
      "Partnership tax return and accounting support, including income, deductions, partner profit shares and lodgment for Australian businesses.",
    url: "https://financiallyup.com.au/services/business-tax/partnership-tax-returns/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the business tax hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Business Tax", href: "/services/business-tax" },
  { label: "Partnership Tax Returns" },
];

/**
 * 5 Exact Frequently Asked Questions from Client Document (Page 4)
 */
const partnershipTaxFaqs = [
  {
    key: "1",
    label: "Does a partnership pay income tax itself?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Generally, a partnership does not pay income tax on its net income. The partnership lodges a return showing its tax information, and partners generally report their respective shares in their own tax returns. Different rules can apply to particular structures, including certain limited partnerships.
      </p>
    ),
  },
  {
    key: "2",
    label: "Do all jointly owned investments require a partnership tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Joint ownership of a rental property, bank account or shares does not by itself mean the owners are carrying on a partnership business. The arrangement and activities need to be considered.
      </p>
    ),
  },
  {
    key: "3",
    label: "What if the partnership has GST or employees?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The partnership may have BAS, GST, PAYG withholding, superannuation and other employer obligations depending on its registrations and activities. These are separate from the annual income tax return.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can you prepare the partners’ individual tax returns as well?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, this can be arranged where required. The partnership return and each partner’s personal return are separate lodgments, so the scope can be agreed based on the work needed.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can you help if our partnership records are not fully reconciled?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We can review the available accounting records and identify reconciliation or year-end work required before the return is finalized. The amount of work depends on the quality and completeness of the records.
      </p>
    ),
  },
];

/**
 * PartnershipTaxReturnsPage Component
 * ===================================
 * Route: /services/business-tax/partnership-tax-returns
 * Pillar 2.3: Partnership Tax Returns (Page 4 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function PartnershipTaxReturnsPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: partnershipTaxFaqs.map((faq) => ({
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
        title="Partnership Tax Return & Accounting Services"
        subtitle="Annual Return Preparation, Partner Profit Allocations & Compliance for Australian Partnerships"
        description={
          <span className="space-y-3 block">
            <span className="block">
              A partnership tax return reports the partnership’s business income, deductions and tax information for the year, including how relevant income or losses are allocated to the partners. The partnership itself generally does not pay income tax on its net income; instead, each partner reports their share in their own tax return, subject to the applicable tax rules.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides partnership tax return preparation and partnership accounting services for businesses across Australia. We help organize the partnership’s records, prepare the annual return, reconcile partner information and identify matters that may need separate tax advice before lodgment.
            </span>
          </span>
        }
        parentService={{
          label: "Business Tax Hub",
          href: "/services/business-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 2.3 • Partnership Practice"
        highlights={[
          "Flow-Through Tax & Partner Share Allocations",
          "Drawings vs Taxable Profits Reconciliation",
          "Online Video Appointments (Outlook Calendar) & In-Person",
        ]}
        quickSpecs={[
          {
            icon: "bank",
            label: "Entity Type",
            value: "General business partnerships, joint professional practices & trades",
          },
          {
            icon: "percentage",
            label: "Taxation Flow-Through",
            value: "Net income or tax loss distributed to individual partner tax returns",
          },
          {
            icon: "audit",
            label: "Drawings vs Profit",
            value: "Separating personal drawings from assessable commercial profit shares",
          },
          {
            icon: "safety",
            label: "ATO Representation",
            value: "Registered Tax Agent electronic lodgment & extension program",
          },
          {
            icon: "desktop",
            label: "Consultation Formats",
            value: "Online video conference (Outlook Calendar), phone or in person",
          },
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Partnership Tax Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person Support" },
        ]}
      />

      {/* 1. Partnership Tax Return & Accounting Services Overview */}
      <WhatIsAPartnershipTaxReturn />

      {/* 2. Who Is This Service For? (Active Business vs Co-Ownership) */}
      <WhoIsPartnershipServiceFor />

      {/* 3. What Does a Partnership Tax Return Report? */}
      <WhatPartnershipReturnReports />

      {/* 4. Partner Profit Shares, Drawings and Tax */}
      <PartnerProfitSharesDrawingsTax />

      {/* 5. Partnership Accounting and Compliance Support */}
      <PartnershipAccountingCompliance />

      {/* 6. What Records Do We Usually Need? (10 Categories + 5-year retention) */}
      <WhatRecordsPartnershipNeeds />

      {/* 7. How Financially Up Can Help & Why Choose Financially Up? */}
      <HowFinanciallyUpHelpsPartnerships />

      {/* 8. Contextual Related Services Ribbon */}
      <RelatedPartnershipServicesRibbon />

      {/* 9. Frequently Asked Questions (5 Verbatim FAQs) */}
      <FaqSection
        title="Frequently Asked Questions"
        subtitle="Answers to common questions about Australian partnership tax returns, partner profit distributions, registrations and lodgment."
        faqs={partnershipTaxFaqs}
      />

      {/* 10. Pre-Footer Call To Action Banner */}
      <CallToActionBanner
        title="Book an Appointment"
        description="If you need an accountant for a partnership business, Financially Up can help you organize the accounting information, prepare the partnership tax return and understand what needs to happen next."
        primaryBtnText="Book an Appointment"
        primaryBtnLink="/book-an-appointment"
      />
    </main>
  );
}
