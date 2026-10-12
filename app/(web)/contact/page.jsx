import React from "react";
import ContactContent from "./ContactContent";
import { brandedMetadata } from "@/lib/brandMetadata";
import { SITE_URL } from "@/lib/companyDefaults";

/**
 * Server Metadata for SEO
 */
const baseMetadata = {
  title: "Contact Us | CPA Accountants & Tax Agents Australia | Financially Up",
  description:
    "Contact Financially Up Pty Ltd. Speak directly with registered Australian tax agents and qualified CPAs. 100% online accounting advice, fast turnarounds, and nationwide support.",
  keywords: [
    "contact Financially Up",
    "contact tax accountant Australia",
    "CPA accountant Sydney phone",
    "registered tax agent enquiry",
    "online accounting support Australia",
  ],
  alternates: {
    canonical: `${SITE_URL}/contact/`,
  },
  openGraph: {
    title: "Contact Us | CPA Accountants & Tax Agents Australia | Financially Up",
    description:
      "Contact Financially Up Pty Ltd. Speak directly with registered Australian tax agents and qualified CPAs. 100% online accounting advice, fast turnarounds, and nationwide support.",
    url: `${SITE_URL}/contact/`,
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};
export const generateMetadata = brandedMetadata(baseMetadata);

/**
 * Contact Page Route (/contact)
 */
export default function ContactPage() {
  return (
    <main className="w-full">
      <ContactContent />
    </main>
  );
}
