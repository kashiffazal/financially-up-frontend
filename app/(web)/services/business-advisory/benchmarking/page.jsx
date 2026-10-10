import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatBenchmarkingInvolves from "./components/WhatBenchmarkingInvolves";
import WhyIndustryAveragesMislead from "./components/WhyIndustryAveragesMislead";
import HowAtoBenchmarksFit from "./components/HowAtoBenchmarksFit";
import HowWeApproachBenchmarkReview from "./components/HowWeApproachBenchmarkReview";
import QuestionsBenchmarkingCanUncover from "./components/QuestionsBenchmarkingCanUncover";
import WhatToBringAndWhatToExpectBenchmark from "./components/WhatToBringAndWhatToExpectBenchmark";
import BenchmarkingRelatedServicesRibbon from "./components/BenchmarkingRelatedServicesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO
 * Exact values from client document: Page 9 (9- Benchmarking)
 */
export const metadata = {
  title: "Business Benchmarking Services | Financially Up",
  description:
    "Compare business performance with context. Financially Up helps select suitable benchmarks, explain differences and identify questions worth investigating.",
  keywords: [
    "business benchmarking services",
    "business benchmarking consultant",
    "SME benchmarking services",
    "ATO small business benchmarks",
    "financial benchmarking Australia",
    "industry average comparison",
    "operational benchmarking",
    "business advisory Sydney",
  ],
  alternates: {
    canonical:
      "https://financiallyup.com.au/services/business-advisory/benchmarking/",
  },
  openGraph: {
    title: "Business Benchmarking Services | Financially Up",
    description:
      "Compare business performance with context. Financially Up helps select suitable benchmarks, explain differences and identify questions worth investigating.",
    url: "https://financiallyup.com.au/services/business-advisory/benchmarking/",
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
  { label: "Business Advisory", href: "/services/business-advisory" },
  { label: "Benchmarking" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 9: Benchmarking)
 */
const benchmarkingFaqs = [
  {
    key: "1",
    label: "Can I benchmark my business if no reliable industry data exists?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes. Comparing your own periods, locations or plans can still be
        valuable, provided differences in operations and accounting are
        explained.
      </p>
    ),
  },
  {
    key: "2",
    label: "Is an industry average the right target for my business?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. It may prompt a question, but your pricing, strategy
        and cost structure can justify a different result.
      </p>
    ),
  },
  {
    key: "3",
    label: "What is the difference between benchmarking and KPI reporting?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Benchmarking focuses on a comparison and its interpretation. KPI
        reporting establishes a regular set of measures for monitoring
        performance; the two can work together.
      </p>
    ),
  },
  {
    key: "4",
    label: "Can benchmarking identify why profit is low?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It can highlight an area worth examining. Finding the cause usually
        requires further analysis of pricing, costs, activity and the quality of
        the underlying records.
      </p>
    ),
  },
];

/**
 * Schema.org Structured Data
 */
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Business Benchmarking Services",
      serviceType: "Business Advisory / Financial Performance Benchmarking",
      description:
        "Financially Up delivers contextual business benchmarking, comparing internal historical performance, budgets, ATO benchmarks, and published industry ratios across Australia.",
      provider: {
        "@type": "AccountingService",
        name: "Financially Up",
        url: "https://financiallyup.com.au",
        telephone: "+61-1300-328-316",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Level 5, 100 Walker St",
          addressLocality: "North Sydney",
          addressRegion: "NSW",
          postalCode: "2060",
          addressCountry: "AU",
        },
      },
      areaServed: {
        "@type": "Country",
        name: "Australia",
      },
    },
    {
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "Can I benchmark my business if no reliable industry data exists?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes. Comparing your own periods, locations or plans can still be valuable, provided differences in operations and accounting are explained.",
          },
        },
        {
          "@type": "Question",
          name: "Is an industry average the right target for my business?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Not automatically. It may prompt a question, but your pricing, strategy and cost structure can justify a different result.",
          },
        },
        {
          "@type": "Question",
          name: "What is the difference between benchmarking and KPI reporting?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Benchmarking focuses on a comparison and its interpretation. KPI reporting establishes a regular set of measures for monitoring performance; the two can work together.",
          },
        },
        {
          "@type": "Question",
          name: "Can benchmarking identify why profit is low?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "It can highlight an area worth examining. Finding the cause usually requires further analysis of pricing, costs, activity and the quality of the underlying records.",
          },
        },
      ],
    },
  ],
};

/**
 * Business Benchmarking Page Component
 * =====================================
 * Dedicated subpage for Pillar 12: Business Advisory
 * Route: /services/business-advisory/benchmarking
 */
export default function BenchmarkingPage() {
  return (
    <>
      {/* Schema.org Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* SubServiceHero Component */}
      <SubServiceHero
        title="Business Benchmarking Services with Useful Context"
        subtitle="Business Benchmarking Services"
        description={[
          "Business benchmarking services compare selected results with earlier performance, your plans or suitable external reference points. The comparison can reveal where to ask better questions about costs, margins, productivity or cash. A benchmark is a starting point for investigation, not a grade or a prediction of what your business should earn.",
          "Financially Up helps owners choose relevant measures, check that figures are comparable and interpret differences in light of their business model. Book an Appointment to discuss what you want to compare and why.",
        ]}
        parentService={{
          label: "Business Advisory Hub",
          href: "/services/business-advisory",
        }}
        breadcrumbs={breadcrumbs}
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Explore Advisory Hub"
        secondaryButtonHref="/services/business-advisory"
        badge="Contextual Performance Benchmarking"
        features={[
          "Internal Historical & Budget Variance",
          "ATO Small Business Benchmark Ranges",
          "Financial & Operational Ratio Analysis",
          "Transparent Limitation Disclosure",
        ]}
      />

      {/* Section 1: What does business performance benchmarking involve? */}
      <WhatBenchmarkingInvolves />

      {/* Section 2: Why can industry averages mislead? */}
      <WhyIndustryAveragesMislead />

      {/* Section 3: How do ATO small business benchmarks fit? */}
      <HowAtoBenchmarksFit />

      {/* Section 4: How we approach a benchmark review */}
      <HowWeApproachBenchmarkReview />

      {/* Section 5: What questions can benchmarking uncover? */}
      <QuestionsBenchmarkingCanUncover />

      {/* Section 6: What to bring and what to expect */}
      <WhatToBringAndWhatToExpectBenchmark />

      {/* Section 7: Related Advisory Services Ribbon */}
      <BenchmarkingRelatedServicesRibbon />

      {/* Section 8: Benchmarking FAQs */}
      <FaqSection
        title="Benchmarking FAQs"
        subtitle="Common Questions"
        description="Clear answers regarding benchmarking without peer data, industry average limitations, difference from KPI reporting, and diagnosing low profit."
        faqList={benchmarkingFaqs}
      />

      {/* Section 9: Call to Action Banner */}
      <CallToActionBanner
        title="Compare with purpose"
        description="Book an Appointment to discuss the performance question, suitable comparison points and what a useful business benchmarking review could cover."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
      />
    </>
  );
}
