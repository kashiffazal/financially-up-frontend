/**
 * Company Global Variable Defaults
 * =================================
 * Fallback values used when the settings API is unreachable (offline build,
 * API restart, first render before seeding). The live values are stored in the
 * `settings` table and edited at /admin/settings (Company Details).
 *
 * Keys mirror financially-up-backend/utils/settingsSeed.js exactly.
 *
 * Not edited in the admin any more (normalizeSettings() derives them):
 *   - email.info / admin / privacy / support -> the Primary Email (company.email)
 *   - url.website / url.adminPortal          -> NEXT_PUBLIC_SITE_URL (server config)
 *   - company.tagline / company.logoUrl      -> fixed values below
 */

/**
 * Domains (server config, never written in the code). Set per Hostinger account
 * in hPanel - see .env.example:
 *   NEXT_PUBLIC_SITE_URL  website + admin, e.g. https://financiallyup.com.au
 *   NEXT_PUBLIC_API_URL   Node API,        e.g. https://api.financiallyup.com.au/api
 * Both are checked when the site is built (next.config.mjs).
 */
export const SITE_URL = String(process.env.NEXT_PUBLIC_SITE_URL || "").replace(/\/+$/, "");
/** Website host without protocol, e.g. "financiallyup.com.au" (for text such as "visit financiallyup.com.au/privacy") */
export const SITE_HOST = SITE_URL.replace(/^https?:\/\//, "");
/** Node API base (without /api), e.g. https://api.financiallyup.com.au */
export const API_BASE_URL = String(process.env.NEXT_PUBLIC_API_URL || "").replace(/\/+$/, "").replace(/\/api$/, "");

export const COMPANY_DEFAULTS = {
  "company.name": "Financially Up",
  "company.legalName": "Financially Up Pty Ltd",
  "company.abn": "84 659 717 263",
  "company.taxAgentNumber": "25800000",
  "company.phone": "1300 328 316",
  "company.email": "info@financiallyup.com.au",
  "company.address": "Level 5, 100 Walker St, North Sydney NSW 2060, Australia",
  "company.tagline": "Accounting | Taxation | Advisory",
  "company.logoUrl": "/images/logo.png",

  "email.info": "info@financiallyup.com.au",
  "email.admin": "admin@financiallyup.com.au",
  "email.privacy": "privacy@financiallyup.com.au",
  "email.support": "support@financiallyup.com.au",

  "url.website": SITE_URL,
  "url.api": API_BASE_URL,
  "url.adminPortal": `${SITE_URL}/admin`,
};

/** Values fixed in code (no longer edited in the admin) */
const FIXED_SETTINGS = {
  "company.tagline": COMPANY_DEFAULTS["company.tagline"],
  "company.logoUrl": COMPANY_DEFAULTS["company.logoUrl"],
};

const CONTACT_EMAIL_KEYS = ["email.info", "email.admin", "email.privacy", "email.support"];

/**
 * Settings map as the app uses it: defaults, then saved values, then the derived
 * values (every contact email = Primary Email, URLs from the server config).
 */
export const normalizeSettings = (settings = {}) => {
  const out = { ...COMPANY_DEFAULTS, ...(settings || {}), ...FIXED_SETTINGS };
  const email = out["company.email"] || COMPANY_DEFAULTS["company.email"];
  CONTACT_EMAIL_KEYS.forEach((key) => {
    out[key] = email;
  });
  out["url.website"] = SITE_URL;
  out["url.api"] = API_BASE_URL;
  out["url.adminPortal"] = `${SITE_URL}/admin`;
  return out;
};

/**
 * Shapes a flat settings map into the nested object exposed by useCompany().
 */
export const toCompanyShape = (settings = {}) => {
  const normalized = normalizeSettings(settings);
  const get = (key) => normalized[key] ?? "";
  return {
    name: get("company.name"),
    legalName: get("company.legalName"),
    abn: get("company.abn"),
    taxAgentNumber: get("company.taxAgentNumber"),
    phone: get("company.phone"),
    email: get("company.email"),
    address: get("company.address"),
    tagline: get("company.tagline"),
    logoUrl: get("company.logoUrl"),
    emails: {
      info: get("email.info"),
      admin: get("email.admin"),
      privacy: get("email.privacy"),
      support: get("email.support"),
    },
    urls: {
      website: get("url.website"),
      api: get("url.api"),
      adminPortal: get("url.adminPortal"),
    },
  };
};
