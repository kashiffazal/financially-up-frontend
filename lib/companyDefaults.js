/**
 * Company Global Variable Defaults
 * =================================
 * Fallback values used when the settings API is unreachable (offline build,
 * API restart, first render before seeding). The live values are stored in the
 * `settings` table and edited at /admin/settings.
 *
 * Keys mirror financially-up-backend/utils/settingsSeed.js exactly.
 */

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

  "url.website": "https://financiallyup.com.au",
  "url.api": "https://api-financiallyup.innotechcloud.online",
  "url.adminPortal": "https://financiallyup.innotechcloud.online/admin",
};

/**
 * Shapes a flat settings map into the nested object exposed by useCompany().
 */
export const toCompanyShape = (settings = {}) => {
  const get = (key) => settings[key] ?? COMPANY_DEFAULTS[key] ?? "";
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
