import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIndividualTaxReturnIncludes from "./components/WhatIndividualTaxReturnIncludes";
import WhoThisServiceIsFor from "./components/WhoThisServiceIsFor";
import WhenAnAccountantHelps from "./components/WhenAnAccountantHelps";
import IndividualTaxProcessSteps from "./components/IndividualTaxProcessSteps";
import WhatYouNeedToProvide from "./components/WhatYouNeedToProvide";
import WhyChooseFinanciallyUpIndividual from "./components/WhyChooseFinanciallyUpIndividual";
import RelatedServiceRibbon from "./components/RelatedServiceRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 2)
 */
export const metadata = {
  title: "Individual Tax Return Services Australia | Financially Up",
  description:
    "Need help with an individual tax return? Financially Up assists clients Australia-wide with preparation, complex income, deductions and online appointments.",
  keywords: [
    "individual tax return services",
    "individual tax return accountant",
    "personal tax return Australia",
    "online individual tax return",
    "tax return accountant near me",
    "tax accountant for individuals",
    "lodge tax return online Australia",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/individual-tax/individual-tax-returns/",
  },
  openGraph: {
    title: "Individual Tax Return Services Australia | Financially Up",
    description:
      "Need help with an individual tax return? Financially Up assists clients Australia-wide with preparation, complex income, deductions and online appointments.",
    url: "https://financiallyup.com.au/services/individual-tax/individual-tax-returns/",
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
  { label: "Individual Tax Return" },
];

/**
 * 7 Exact Frequently Asked Questions from Client Document (Page 2)
 */
const individualTaxFaqs = [
  {
    key: "1",
    label: "Do I need an accountant to do my tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. You can lodge your own return through the ATO. A tax return accountant may be helpful if your return involves property, investments, capital gains, foreign income, crypto assets, contracting income or deductions you are unsure about, or if you want the completed return explained before lodgement.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can Financially Up help with a complex individual tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up assists with complex individual returns involving multiple income sources, investment property, shares, managed funds, capital gains, crypto assets, foreign income, employee share schemes and other matters requiring closer review. The work required depends on your circumstances and records.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can I complete my individual tax return online?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up provides online individual tax return support across Australia. You can book through the website or by phone, attend an Outlook Calendar online meeting and provide the requested documents without visiting an office. In-person appointments are also available by arrangement.
      </p>
    ),
  },
  {
    key: "4",
    label: "What documents do I need for my tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        The documents depend on your income, deductions and investments. Common examples include income statements, interest and dividend information, receipts, rental property records, capital gains records, crypto asset reports and foreign income documents. Financially Up will confirm what is relevant to your return.
      </p>
    ),
  },
  {
    key: "5",
    label: "What can I claim in my tax return?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        What you can claim depends on your circumstances and current ATO requirements. An expense generally needs to be connected with earning your assessable income, not reimbursed and supported by appropriate records. If an expense was partly private, only the work-related portion may be considered.
      </p>
    ),
  },
  {
    key: "6",
    label: "What happens after I book an appointment?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up will confirm the appointment and discuss your circumstances. We then identify the information required, explain the next steps and prepare the return once the necessary records are available. You review and approve the completed return before lodgement.
      </p>
    ),
  },
  {
    key: "7",
    label: "Can you help with prior-year or overdue tax returns?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up can assist with prior-year and overdue individual tax returns. We will identify the years and records involved and explain whether any related ATO correspondence or additional work requires separate attention.
      </p>
    ),
  },
];

/**
 * IndividualTaxReturnPage Component
 * =================================
 * Route: /services/individual-tax/individual-tax-returns
 * Pillar 1.1: Individual Tax Returns (Page 2 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function IndividualTaxReturnPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: individualTaxFaqs.map((faq) => ({
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
        title="Individual Tax Return Services in Australia"
        subtitle="Professional Personal Tax Preparation & Lodgement Australia-Wide"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An individual tax return can become more involved when you have income beyond salary and wages. Investment property, capital gains, shares, managed funds, crypto assets, foreign income, employee share schemes, contracting income or significant deductions can all require closer review.
            </span>
            <span className="block mt-2">
              Financially Up Pty Ltd provides individual tax return services for clients across Australia. We review the information relevant to your circumstances, prepare your return, explain the key details and obtain your approval before lodgement. We also assist with straightforward returns when you prefer an accountant to manage the process.
            </span>
          </span>
        }
        parentService={{
          label: "Individual Tax Hub",
          href: "/services/individual-tax",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 1.1 • Personal Tax Practice"
        highlights={[
          "Extended ATO Lodgement Deadlines",
          "Registered Tax Agent #26234055",
          "100% Online or In-Person Consultations",
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

      {/* 1. What Individual Tax Return Services Include */}
      <WhatIndividualTaxReturnIncludes />

      {/* 2. Who This Service Is For */}
      <WhoThisServiceIsFor />

      {/* 3. When an Accountant May Help With Your Tax Return */}
      <WhenAnAccountantHelps />

      {/* 4. How the Individual Tax Return Process Works */}
      <IndividualTaxProcessSteps />

      {/* 5. What You May Need to Provide */}
      <WhatYouNeedToProvide />

      {/* 6. Why Choose Financially Up */}
      <WhyChooseFinanciallyUpIndividual />

      {/* 7. Frequently Asked Questions (Verbatim 7 FAQs) */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about individual tax return preparation, required documents, deductions, and lodgement with Financially Up."
        image="/images/services/faq.webp"
        imageAlt="Individual Tax Return Frequently Asked Questions"
        items={individualTaxFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 8. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Book an Appointment"
        subtitle="If you need help with an individual tax return, book an appointment with Financially Up. We will discuss your circumstances, identify the appropriate service and explain the information needed to proceed."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Individual Tax Services"
        secondaryButtonHref="/services/individual-tax"
      />

      {/* 9. Related Service Ribbon (Verbatim from Document) */}
      <RelatedServiceRibbon />
    </main>
  );
}
