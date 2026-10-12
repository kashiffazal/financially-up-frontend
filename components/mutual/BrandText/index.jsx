"use client";

import { useSettings } from "@/context/SettingsContext";
import { brandText } from "@/lib/brand";

/**
 * Text written with the default company details, shown with the live ones from
 * Settings > Company Details (name, legal name, email, website - lib/brand.js).
 * Used for copy passed as props to shared components:
 *
 *   <SubServiceHero subtitle={<BrandText text="Why choose Financially Up?" />} />
 *
 * @param {string} text
 */
export default function BrandText({ text }) {
  const { settings } = useSettings();
  return brandText(text, settings);
}

// Lets lib/brand.js turn this element back into text (e.g. inside JSON-LD)
BrandText.brandRole = "text";
