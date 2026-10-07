import React from "react";
import AboutContent from "./AboutContent";

/**
 * Server Metadata for SEO
 */
export const metadata = {
  title: "About Us | CPA Accountants & Registered Tax Agents Australia | Financially Up",
  description:
    "Learn about Financially Up Pty Ltd — Australia's premier online accounting firm. Dedicated CPA qualified accountants and registered tax agents delivering stress-free compliance nationwide.",
  keywords: [
    "about Financially Up",
    "CPA accountants Australia",
    "registered tax agent Sydney",
    "online accountant Australia",
    "tax accountants Australia",
    "business advisory Sydney",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/about/",
  },
  openGraph: {
    title: "About Us | CPA Accountants & Registered Tax Agents Australia | Financially Up",
    description:
      "Learn about Financially Up Pty Ltd — Australia's premier online accounting firm. Dedicated CPA qualified accountants and registered tax agents delivering stress-free compliance nationwide.",
    url: "https://financiallyup.com.au/about/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

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
