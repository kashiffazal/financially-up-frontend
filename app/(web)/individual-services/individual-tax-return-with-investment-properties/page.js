"use client";

import React from "react";
import PageHero from "@/components/website/PageHero";
import PropertyTaxOverview from "./components/PropertyTaxOverview";
import WhyChoosePropertyTax from "./components/WhyChoosePropertyTax";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "../../home-components/CallToActionBanner";

export default function IndividualTaxReturnWithInvestmentPropertiesPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Individual Tax", href: "/individual-services" },
    { label: "Tax Return + Investment Property" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Global Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="Investment Property Tax Specialists"
        title="Investment Property Tax Accountant Australia"
        subtitle="Maximize Tax Benefits for Rental Income"
      />

      {/* 2. Main Overview Section (Text + Image) */}
      <PropertyTaxOverview />

      {/* 3. Why Choose Financially Up for Rental Properties? */}
      <WhyChoosePropertyTax />

      {/* 4. Reusable Image + Accordion FAQ Section */}
      <FaqSection />

      {/* 5. Pre-Footer Call to Action Banner (Includes Contact Us Modal Popup) */}
      <CallToActionBanner />
    </div>
  );
}
