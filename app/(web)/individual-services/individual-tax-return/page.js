"use client";

import React from "react";
import PageHero from "@/components/website/PageHero";
import IndividualTaxReturnOverview from "./components/IndividualTaxReturnHero";
import WhyChooseIndividualTax from "./components/WhyChooseIndividualTax";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "../../home-components/CallToActionBanner";

export default function IndividualTaxReturnPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Individual Tax", href: "/individual-services" },
    { label: "Individual Tax Return" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Global Reusable Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="ATO Registered Tax Agents"
        title="Individual Tax Return Australia - Online, Fast & ATO Compliant"
        subtitle="Expert Assistance for ATO Compliance"
      />

      {/* 2. Page Overview Section (Text + Image) */}
      <IndividualTaxReturnOverview />

      {/* 3. Why Choose Financially Up for Your Individual Tax Returns? */}
      <WhyChooseIndividualTax />

      {/* 4. Reusable Image + Accordion FAQ Section */}
      <FaqSection />

      {/* 5. Pre-Footer Call to Action Banner (Includes Contact Us Modal Popup) */}
      <CallToActionBanner />
    </div>
  );
}
