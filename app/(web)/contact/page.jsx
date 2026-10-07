import React from "react";
import ContactContent from "./ContactContent";

/**
 * Server Metadata for SEO
 */
export const metadata = {
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
    canonical: "https://financiallyup.com.au/contact/",
  },
  openGraph: {
    title: "Contact Us | CPA Accountants & Tax Agents Australia | Financially Up",
    description:
      "Contact Financially Up Pty Ltd. Speak directly with registered Australian tax agents and qualified CPAs. 100% online accounting advice, fast turnarounds, and nationwide support.",
    url: "https://financiallyup.com.au/contact/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

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
