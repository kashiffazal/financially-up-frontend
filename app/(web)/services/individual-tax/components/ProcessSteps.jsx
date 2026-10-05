"use client";

import React from "react";
import WhyChooseSection from "@/components/website/WhyChooseSection";

/**
 * ProcessSteps Component
 * ======================
 * Section 5: How the process works (5 Sequential Steps).
 *
 * Utilizes the mutual WhyChooseSection component from `@/components/website/WhyChooseSection`
 * configured with 5 columns for a streamlined end-to-end client journey.
 */
export default function ProcessSteps() {
  const steps = [
    {
      step: "01",
      badge: "Step 01",
      title: "Book an appointment",
      desc: "Book online or over the phone. Appointments are held online via Outlook Calendar meeting link, or face-to-face in person.",
      icon: "calendar",
    },
    {
      step: "02",
      badge: "Step 02",
      title: "Confirm scope and fees",
      desc: "We confirm the exact work to be completed and the applicable fee before commencing with 100% upfront transparency.",
      icon: "dollar-circle",
    },
    {
      step: "03",
      badge: "Step 03",
      title: "Provide your records",
      desc: "Upload documents through the approved secure Financially Up channel. We review everything and notify you of any missing items.",
      icon: "upload",
    },
    {
      step: "04",
      badge: "Step 04",
      title: "Review return or advice",
      desc: "We prepare your return or advice and clearly explain the outcome, assumptions, and items requiring your confirmation.",
      icon: "file-done",
    },
    {
      step: "05",
      badge: "Step 05",
      title: "Approve lodgement",
      desc: "Review and approve your return before we lodge it directly with the ATO. Separate advice is provided within the agreed scope.",
      icon: "safety",
    },
    {
      step: "06",
      isCta: true,
      badge: "Get Started",
      title: "Ready to Begin Step 1?",
      desc: "Schedule your consultation online or over the phone to discuss your return directly with our CPA team.",
      icon: "calendar",
      href: "/book-an-appointment",
      actionText: "Book an Appointment",
    },
  ];

  return (
    <WhyChooseSection
      sectionId="how-it-works"
      tag="Structured Client Journey"
      title="How the process works"
      subtitle="A clear, collaborative, five-step pathway ensuring every tax obligation is handled with precision, privacy, and full ATO compliance."
      items={steps}
      columns={3}
      containerClassName="max-w-7xl"
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 transition-colors duration-300"
      ctaText={null}
      ctaHref={null}
    />
  );
}


