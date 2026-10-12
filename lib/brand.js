/**
 * Brand Text
 * ==========
 * Website copy, SEO metadata and structured data are written with the default
 * company details ("Financially Up", "Financially Up Pty Ltd",
 * info@financiallyup.com.au, https://financiallyup.com.au) so the source stays
 * readable. These helpers swap them for the live values from Settings > Company
 * Details when the page is rendered:
 *
 *   brandText("Why choose Financially Up?", settings)  -> "Why choose Innotech Cloud?"
 *   brandDeep(metadataObject, settings)                -> same object shape, every string branded
 *
 * In JSX use <CompanyName /> (components/mutual/CompanyName), for JSON-LD use
 * <JsonLd data={...} />, and for page metadata brandedMetadata() (lib/brandMetadata.js).
 */

import { COMPANY_DEFAULTS, SITE_URL, SITE_HOST, normalizeSettings } from "./companyDefaults";

const DEFAULT_NAME = COMPANY_DEFAULTS["company.name"]; // "Financially Up"
const DEFAULT_LEGAL = COMPANY_DEFAULTS["company.legalName"]; // "Financially Up Pty Ltd"

const escapeRegExp = (value) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

// Any whitespace between the words (copy may wrap across lines)
const LEGAL_PATTERN = new RegExp(escapeRegExp(DEFAULT_LEGAL).replace(/ /g, "\\s+"), "gi");
const NAME_PATTERN = new RegExp(escapeRegExp(DEFAULT_NAME).replace(/ /g, "\\s+"), "gi");
// Company mailboxes at the default domain (info@, privacy@, support@ ...) -> Primary Email.
// Other addresses (a staff member's own, example placeholders) are left as they are.
const EMAIL_PATTERN = /\b(?:info|admin|privacy|support|enquiries|contact|hello)@financiallyup\.com\.au\b/gi;
// Website address (with or without protocol / www)
const SITE_PATTERN = /\bhttps?:\/\/(?:www\.)?financiallyup\.com\.au\b/gi;
const HOST_PATTERN = /(?<!@)\b(?:www\.)?financiallyup\.com\.au\b/gi;
// Example addresses in placeholders (you@financiallyup.com.au) -> the Primary Email's domain
const OTHER_MAILBOX_DOMAIN = /@financiallyup\.com\.au\b/gi;
// Other Company Details written out with their default values
const TEL_PATTERN = /tel:\+?(?:61)?1300328316/g;
const PHONE_PATTERN = /\b1300[\s-]?328[\s-]?316\b/g;
const ABN_PATTERN = /\b84\s?659\s?717\s?263\b/g;
const ADDRESS_PATTERN = /Level 5, 100 Walker St(?:reet)?,? North Sydney,? NSW,? 2060(?:,? Australia)?/g;
// Tax agent number (current placeholder and the numbers older copy used)
const TPB_PATTERN = /\b(?:26234055|26242127|25800000)\b/g;
const ANY_DEFAULT = /financially\s?up|1300[\s-]?328[\s-]?316|1300328316|84\s?659\s?717\s?263|100 Walker St|26234055|26242127|25800000/i;

/** Same letter case as the matched text (FINANCIALLY UP -> INNOTECH CLOUD). */
const matchCase = (match, value) => (match === match.toUpperCase() && match !== match.toLowerCase() ? value.toUpperCase() : value);

const valuesOf = (settings) => {
  const s = normalizeSettings(settings);
  return {
    name: s["company.name"] || DEFAULT_NAME,
    legalName: s["company.legalName"] || DEFAULT_LEGAL,
    email: s["company.email"],
    site: SITE_URL,
    host: SITE_URL.replace(/^https?:\/\//, ""),
    phone: s["company.phone"],
    abn: s["company.abn"],
    address: s["company.address"],
    taxAgentNumber: s["company.taxAgentNumber"],
  };
};

/** One string with the default company details replaced by the live ones. */
export const brandText = (text, settings) => {
  if (typeof text !== "string" || !ANY_DEFAULT.test(text)) return text;
  const v = valuesOf(settings);
  return text
    .replace(EMAIL_PATTERN, v.email)
    .replace(OTHER_MAILBOX_DOMAIN, `@${String(v.email).split("@")[1] || SITE_HOST}`)
    .replace(SITE_PATTERN, v.site)
    .replace(HOST_PATTERN, v.host)
    .replace(LEGAL_PATTERN, (m) => matchCase(m, v.legalName))
    .replace(NAME_PATTERN, (m) => matchCase(m, v.name))
    .replace(TEL_PATTERN, `tel:${String(v.phone).replace(/[^\d+]/g, "")}`)
    .replace(PHONE_PATTERN, v.phone)
    .replace(ABN_PATTERN, v.abn)
    .replace(ADDRESS_PATTERN, v.address)
    .replace(TPB_PATTERN, v.taxAgentNumber);
};

const isPlainObject = (value) => {
  if (!value || typeof value !== "object") return false;
  const proto = Object.getPrototypeOf(value);
  return proto === Object.prototype || proto === null;
};

/**
 * Plain text of a React element written with <BrandText> / <CompanyName> (they
 * carry a `brandRole` marker), or null for any other element. Lets data shared
 * by the page and its JSON-LD (e.g. FAQ answers) become text in the JSON-LD.
 */
const elementText = (element, settings) => {
  if (element === null || element === undefined || typeof element === "boolean") return "";
  if (typeof element === "string" || typeof element === "number") return brandText(String(element), settings);
  if (Array.isArray(element)) {
    const parts = element.map((child) => elementText(child, settings));
    return parts.includes(null) ? null : parts.join("");
  }
  if (typeof element !== "object" || !element.$$typeof) return null;
  const props = element.props || {};
  // Marker on the component; data passed from a server page arrives as a client
  // reference without it, so fall back to the props each one uses
  const keys = Object.keys(props);
  const role =
    element.type?.brandRole ||
    (typeof props.text === "string" && keys.every((k) => k === "text") ? "text" : null) ||
    (keys.every((k) => k === "legal" || k === "upper") ? "name" : null);
  if (role === "text") return brandText(props.text, settings);
  if (role === "name") {
    const v = valuesOf(settings);
    const value = props.legal ? v.legalName : v.name;
    return props.upper ? value.toUpperCase() : value;
  }
  // Fragments / simple wrappers: their children's text
  return props.children !== undefined ? elementText(props.children, settings) : null;
};

/** Copy of a plain object / array with every string branded (other React elements and class instances are left alone). */
export const brandDeep = (value, settings) => {
  if (typeof value === "string") return brandText(value, settings);
  if (value && typeof value === "object" && value.$$typeof) {
    const text = elementText(value, settings);
    return text === null ? value : text;
  }
  if (value instanceof URL) return new URL(brandText(value.href, settings));
  if (Array.isArray(value)) return value.map((item) => brandDeep(item, settings));
  // schema.org address split into parts: the saved address can't be split reliably, so use it whole
  if (isPlainObject(value) && value["@type"] === "PostalAddress" && /100 Walker St/.test(String(value.streetAddress || ""))) {
    const address = valuesOf(settings).address;
    if (!/100 Walker St/.test(address)) return { "@type": "PostalAddress", streetAddress: address, addressCountry: value.addressCountry || "AU" };
  }
  if (isPlainObject(value) && !value.$$typeof) {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, brandDeep(item, settings)]));
  }
  return value;
};
