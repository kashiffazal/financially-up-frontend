import React from "react";
import AboutContent from "./AboutContent";
import { brandedMetadata } from "@/lib/brandMetadata";
import { SITE_URL } from "@/lib/companyDefaults";

/**
 * Server Metadata for SEO
 */
const baseMetadata = {
  title:
    "About Us | CPA Accountants & Registered Tax Agents Australia | Financially Up",
  description:
    "Learn about Financially Up Pty Ltd - Australia's premier online accounting firm. Dedicated CPA qualified accountants and registered tax agents delivering stress-free compliance nationwide.",
  keywords: [
    "about Financially Up",
    "CPA accountants Australia",
    "registered tax agent Sydney",
    "online accountant Australia",
    "tax accountants Australia",
    "business advisory Sydney",
  ],
  alternates: {
    canonical: `${SITE_URL}/about/`,
  },
  openGraph: {
    title:
      "About Us | CPA Accountants & Registered Tax Agents Australia | Financially Up",
    description:
      "Learn about Financially Up Pty Ltd - Australia's premier online accounting firm. Dedicated CPA qualified accountants and registered tax agents delivering stress-free compliance nationwide.",
    url: `${SITE_URL}/about/`,
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};
export const generateMetadata = brandedMetadata(baseMetadata);

/**
 * About Page Route (/about)
 */
export default function AboutPage() {
  return (
    <main className="w-full">
      <AboutContent />
    </main>
  );
}
