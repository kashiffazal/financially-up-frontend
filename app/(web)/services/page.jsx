import React from "react";
import ServicesPageContent from "./components/ServicesPageContent";
import ClientPathwayMatrix from "./components/ClientPathwayMatrix";
import ServicesProcessSteps from "./components/ServicesProcessSteps";
import WhyFinanciallyUpSection from "./components/WhyFinanciallyUpSection";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";
import { SERVICES_LIST } from "./components/ServicesData";

/**
 * Server Metadata for SEO
 */
export const metadata = {
  title: "All Accounting, Tax & Advisory Services Australia | Financially Up",
  description:
    "Explore Financially Up's complete suite of 15 accounting, tax, advisory, and corporate compliance services across Australia. 100% online & in-person CPA expertise.",
  keywords: [
    "accounting services Australia",
    "tax services Australia",
    "tax accountant Australia",
    "business tax accountant",
    "individual tax return",
    "bookkeeping services",
    "BAS lodgement",
    "ASIC compliance",
    "trust accountant",
    "SMSF accountant",
    "property tax accountant",
    "ATO help",
    "business advisory",
    "virtual CFO Australia",
    "international tax accountant",
    "R&D tax incentive",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/",
  },
  openGraph: {
    title: "All Accounting, Tax & Advisory Services Australia | Financially Up",
    description:
      "Explore Financially Up's complete suite of 15 accounting, tax, advisory, and corporate compliance services across Australia. 100% online & in-person CPA expertise.",
    url: "https://financiallyup.com.au/services/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * 8 Core Frequently Asked Questions for Master Services Hub
 */
const servicesFaqs = [
  {
    key: "1",
    label: "Can I bundle or combine multiple services together?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes, absolutely. Many of our clients bundle services to reduce costs and streamline their compliance.
        Common packages include bookkeeping combined with quarterly BAS lodgements and annual company tax
        returns, or individual returns bundled with investment property schedules and tax planning.
        We provide transparent, fixed-fee package quotes tailored to your exact requirements.
      </p>
    ),
  },
  {
    key: "2",
    label: "How does an online consultation with Financially Up work?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        You can book an appointment directly through our online booking tool. Once confirmed, you will
        receive a calendar invitation with a secure video conference link (Zoom, Microsoft Teams, or Google Meet).
        Before or during the meeting, you can securely upload relevant documents to our encrypted portal.
        After the session, we confirm our agreed scope and commence preparation.
      </p>
    ),
  },
  {
    key: "3",
    label: "What documents or records do I need to have ready?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Document requirements depend on the service. For individuals, you will typically need your PAYG
        income statements, work deduction records, private health statements, and rental property summaries.
        For businesses, we typically require access to your cloud accounting software (Xero, MYOB, or QBO),
        recent bank statements, payroll STP summaries, and prior-year tax returns. We provide an itemised checklist
        prior to your consultation.
      </p>
    ),
  },
  {
    key: "4",
    label: "How long does it take to prepare and lodge a tax return or report?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Standard individual tax returns are usually prepared within 3 to 5 business days after receiving
        complete records. Business tax returns, trust accounts, and company financial statements typically
        take 1 to 2 weeks, depending on the volume of ledger reconciliation required. Once you review and
        sign off electronically, lodgement with the ATO is transmitted instantly.
      </p>
    ),
  },
  {
    key: "5",
    label: "Are Financially Up accountants registered with the ATO and ASIC?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Financially Up Pty Ltd is a registered Tax Agent with the Tax Practitioners Board (TPB) and
        an ASIC Registered Agent. All our accountants hold professional qualifications with CPA Australia
        or CA ANZ, adhering strictly to professional ethical standards and Australian taxation law.
      </p>
    ),
  },
  {
    key: "6",
    label: "Can you help with overdue prior-year tax returns or ATO debts?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Through our dedicated ATO Help practice (Pillar 11), we frequently assist clients who have
        multiple years of outstanding tax returns, missing paperwork, or accumulated ATO debts.
        We can contact the ATO on your behalf, retrieve historical data, request penalty and interest
        remissions, and establish realistic payment arrangements.
      </p>
    ),
  },
  {
    key: "7",
    label: "How are your fees structured?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We believe in upfront pricing with zero surprises. Most compliance work—including individual tax
        returns, company tax returns, BAS lodgements, and SMSF annual accounts—is quoted as a fixed, all-inclusive
        fee. Strategic advisory, Virtual CFO, and special consulting projects are available on transparent
        monthly retainers or agreed milestone-based pricing.
      </p>
    ),
  },
  {
    key: "8",
    label: "Do you service clients outside Sydney or overseas?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. We serve clients across all Australian states and territories (NSW, VIC, QLD, WA, SA, TAS, ACT, NT),
        both in capital cities and regional communities. We also support Australian expatriates living abroad
        with non-resident returns, foreign income compliance, and tax residency determinations.
      </p>
    ),
  },
];

/**
 * Main Services Page (/services)
 * ==============================
 * Master Hub presenting all 15 services pillars with interactive filters,
 * persona pathway guidance, process roadmap, value pillars, and FAQs.
 */
export default function ServicesPage() {
  // Schema.org Structured Data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Financially Up - All Accounting, Tax & Advisory Services Australia",
    description:
      "Complete practice directory of 15 registered accounting, tax, advisory, and corporate compliance services across Australia.",
    url: "https://financiallyup.com.au/services/",
    provider: {
      "@type": "AccountingService",
      name: "Financially Up Pty Ltd",
      url: "https://financiallyup.com.au",
    },
    mainEntity: {
      "@type": "ItemList",
      itemListElement: SERVICES_LIST.map((service, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: service.title,
        description: service.description,
        url: `https://financiallyup.com.au${service.href}`,
      })),
    },
  };

  return (
    <main className="w-full">
      {/* Schema.org JSON-LD Script */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* 1. Master Hero & Interactive 15-Pillar Services Directory */}
      <ServicesPageContent />

      {/* 2. Client Pathway Matrix (Who We Serve - 6 Personas) */}
      <ClientPathwayMatrix />

      {/* 3. 4-Step Engagement Process Roadmap */}
      <ServicesProcessSteps />

      {/* 4. Why Financially Up (6 Core Value Pillars) */}
      <WhyFinanciallyUpSection />

      {/* 5. Comprehensive Frequently Asked Questions */}
      <FaqSection
        badgeTag="Answers & Clarity"
        title="Frequently Asked Questions"
        subtitle="Common questions about our complete suite of accounting, taxation, and advisory services."
        image="/images/services/faq.webp"
        imageAlt="Financially Up Accounting Services Frequently Asked Questions"
        items={servicesFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 6. Pre-Footer Call to Action Banner */}
      <CallToActionBanner
        tag="Ready When You Are"
        title="Speak with a qualified Australian CPA today"
        subtitle="Whether you need help with an individual return, business compliance, or strategic Virtual CFO advice, we are here to support your journey. Book an appointment online or get in touch."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Contact Our Team"
      />
    </main>
  );
}
