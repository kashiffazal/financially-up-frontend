"use client";

import { useSettings } from "@/context/SettingsContext";
import { brandDeep } from "@/lib/brand";

/**
 * Structured data (schema.org JSON-LD) with the live company name, legal name,
 * email and website address (see lib/brand.js). Rendered on the server, so
 * search engines see it in the page HTML.
 *
 *   <JsonLd data={faqSchema} />
 *
 * @param {object|object[]} data - JSON-LD object(s)
 * @param {string} [id] - optional id for the script tag
 */
export default function JsonLd({ data, id }) {
  const { settings } = useSettings();
  const json = JSON.stringify(brandDeep(data, settings)).replace(/</g, "\\u003c");
  return <script id={id} type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
