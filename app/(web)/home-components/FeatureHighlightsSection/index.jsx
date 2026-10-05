"use client";

import React from "react";
import FeatureHighlightsSection from "@/components/website/FeatureHighlightsSection";

/**
 * Home Feature Highlights Data
 * Fully data-driven items passed to mutual FeatureHighlightsSection component.
 */
const homeHighlights = [
  {
    category: "LOCAL SERVICE",
    title: "Australian Owned & Operated",
    description:
      "Registered tax agents based in Australia, providing trusted expertise across all states.",
    icon: "environment",
    footerBadgeText: "Verified Local Practice",
  },
  {
    category: "HASSLE-FREE",
    title: "100% Online & No Paperwork",
    description:
      "Submit documents securely from anywhere using your phone, tablet, or desktop.",
    icon: "file-text",
    footerBadgeText: "Digital First Process",
  },
  {
    category: "REPUTABLE",
    title: "No Hidden Fees or Charges",
    description:
      "Fixed upfront pricing so you always know exactly what you pay before we start.",
    icon: "safety",
    footerBadgeText: "Transparent Guarantee",
  },
];

/**
 * Home FeatureHighlightsSection
 * =============================
 * Uses the mutual, reusable FeatureHighlightsSection from `@/components/website/FeatureHighlightsSection`.
 */
export default function HomeFeatureHighlightsSection() {
  return (
    <FeatureHighlightsSection
      tag="Why Financially Up"
      title="Empower Your Finances with Precision"
      subtitle="Designed for busy Australians seeking fast, accurate, and completely transparent tax services."
      items={homeHighlights}
      columns={3}
    />
  );
}
