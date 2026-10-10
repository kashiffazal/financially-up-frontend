import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatShouldYouCheckFirstLetter from "./components/WhatShouldYouCheckFirstLetter";
import HowToCheckGenuineAtoMessage from "./components/HowToCheckGenuineAtoMessage";
import DifferentAtoLettersDifferentAction from "./components/DifferentAtoLettersDifferentAction";
import WhatIfAtoAsksForInformationLetter from "./components/WhatIfAtoAsksForInformationLetter";
import WhatIfLetterSaysYouOweMoney from "./components/WhatIfLetterSaysYouOweMoney";
import WhatIfLetterContainsDecisionDisagree from "./components/WhatIfLetterContainsDecisionDisagree";
import HowFinanciallyUpHelpsLetter from "./components/HowFinanciallyUpHelpsLetter";
import WhyChooseFinanciallyUpLetter from "./components/WhyChooseFinanciallyUpLetter";
import RelatedAtoLettersRibbon from "./components/RelatedAtoLettersRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 9 of 11th Pillar ATO Help.docx)
 */
export const metadata = {
  title: "Help Responding to an ATO Letter | Financially Up",
  description:
    "Unsure what an ATO letter requires? Financially Up can identify the notice, check its deadline and help you take the appropriate next step.",
  keywords: [
    "help responding to ATO letter",
    "ATO letter response",
    "received letter from ATO",
    "ATO notice help",
    "ATO audit letter",
    "ATO debt letter",
    "ATO demand for payment",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/ato-help/ato-letters/",
  },
  openGraph: {
    title: "Help Responding to an ATO Letter | Financially Up",
    description:
      "Unsure what an ATO letter requires? Financially Up can identify the notice, check its deadline and help you take the appropriate next step.",
    url: "https://financiallyup.com.au/services/ato-help/ato-letters/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "ATO Help", href: "/services/ato-help" },
  { label: "ATO Letters" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 9)
 */
const letterFaqs = [
  {
    key: "1",
    label: "Should I ignore a letter if I think the ATO is wrong?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No. Identify the notice and respond through the appropriate channel within the applicable timeframe. A disagreement does not pause a deadline automatically.
      </p>
    ),
  },
  {
    key: "2",
    label: "Can my tax agent respond for me?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        A registered tax agent may communicate on authorized client tax matters when properly appointed and engaged. You remain responsible for supplying complete and accurate information.
      </p>
    ),
  },
  {
    key: "3",
    label: "What if I cannot find the requested documents?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Identify what is missing and where another reliable record may exist, such as a bank, employer, supplier or property agent. Explain the gap rather than creating an unsupported figure.
      </p>
    ),
  },
  {
    key: "4",
    label: "How do I check an unexpected ATO message?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Access myGov or ATO online services directly, use the official ATO app or contact the ATO through independently verified details. Do not click an unexpected link or disclose information to an unverified caller.
      </p>
    ),
  },
];

/**
 * AtoLettersPage Component
 * ========================
 * Route: /services/ato-help/ato-letters
 * Pillar 11.8: Help Responding to an ATO Letter (Page 9 of client docx: 11th Pillar ATO Help.docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AtoLettersPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: letterFaqs.map((faq) => ({
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
        title="Help Responding to an ATO Letter"
        subtitle="Decode Official Notices, Verify Authenticity, Track Deadlines & Submit Structured Tax Responses"
        description={
          <span className="space-y-3 block">
            <span className="block">
              An ATO letter may be routine, request information, advise of a debt or record a decision with a formal deadline. The first task is to identify exactly what the communication says. A reminder about an overdue return, a demand for payment and a review request require different responses.
            </span>
            <span className="block mt-2">
              Financially Up helps individuals and business owners understand genuine ATO correspondence and decide what to do next. Provide the complete notice, including all pages and attachments, so we can check the entity, issue, period, tax account and deadline.
            </span>
          </span>
        }
        parentService={{
          label: "ATO Help Hub",
          href: "/services/ato-help",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 11.8 • ATO Correspondence & Notice Resolution"
        highlights={[
          "Registered Tax Agent #26234055",
          "Urgent Notice Triage & Scam Verification",
          "Strict Statutory Deadline Preservation",
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

      {/* 1. What should you check first? */}
      <WhatShouldYouCheckFirstLetter />

      {/* 2. How do you check whether the message is genuine? */}
      <HowToCheckGenuineAtoMessage />

      {/* 3. Different ATO letters require different action */}
      <DifferentAtoLettersDifferentAction />

      {/* 4. What if the ATO asks for information? */}
      <WhatIfAtoAsksForInformationLetter />

      {/* 5. What if the letter says you owe money? */}
      <WhatIfLetterSaysYouOweMoney />

      {/* 6. What if the letter contains a decision you disagree with? */}
      <WhatIfLetterContainsDecisionDisagree />

      {/* 7. How Financially Up helps */}
      <HowFinanciallyUpHelpsLetter />

      {/* 8. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpLetter />

      {/* 9. Frequently Asked Questions (Verbatim 4 FAQs) */}
      <FaqSection
        tag="Answers & Clarity"
        title="ATO Letter FAQs"
        description="Practical answers on dealing with unexpected notices, agent representation, missing records, and avoiding tax scams."
        items={letterFaqs}
      />

      {/* 10. Pre-Footer Call to Action Banner (Verbatim from Client Document) */}
      <CallToActionBanner
        tag="Correspondence Evaluation"
        title="Unsure What an ATO Letter Requires?"
        subtitle="Provide the complete correspondence, including every attachment and earlier related notices. Financially Up can help identify the issue, deadline and appropriate next step."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore ATO Help Hub"
        secondaryButtonHref="/services/ato-help"
      />

      {/* 11. Sibling Service Ribbon */}
      <RelatedAtoLettersRibbon />
    </main>
  );
}
