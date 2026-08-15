"use client";

import React from "react";
import PageHero from "@/components/website/PageHero";
import BasGstOverview from "./components/BasGstOverview";
import WhyChooseBasGst from "./components/WhyChooseBasGst";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "../../home-components/CallToActionBanner";

export default function BasGstLodgementPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Business Services", href: "/business-services" },
    { label: "BAS & GST Lodgement" },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="Registered BAS Agents Australia"
        title="BAS Lodgement Service Australia - Registered BAS Agent Online"
        subtitle="Streamlined Compliance for All Entity Types"
      />

      {/* 2. Overview Block Component */}
      <BasGstOverview />

      {/* 3. Why Choose Component */}
      <WhyChooseBasGst />

      {/* 4. Accordion FAQ Section */}
      <FaqSection />

      {/* 5. Bottom Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
