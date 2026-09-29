/**
 * Company Variable Interpolation
 * ===============================
 * Legal documents (terms, privacy notices, consents) are stored as plain data
 * modules, so company details inside them are written as tokens:
 *
 *   "Financially Up Pty Ltd ABN {{company.abn}} ... {{company.phone}}"
 *
 * This helper swaps the tokens for live values from the global settings store,
 * walking strings, arrays and nested objects.
 *
 * Usage inside a component:
 *   const { settings } = useSettings();
 *   const notice = applyCompanyVars(PRIVACY_NOTICE_TEXT, settings);
 */

import { COMPANY_DEFAULTS } from "./companyDefaults";

const TOKEN_PATTERN = /\{\{\s*([a-zA-Z0-9_.]+)\s*\}\}/g;

/** Replaces {{key}} tokens in a single string */
export const interpolate = (text, settings = {}) => {
  if (typeof text !== "string" || !text.includes("{{")) return text;
  return text.replace(TOKEN_PATTERN, (match, key) => {
    const value = settings[key] ?? COMPANY_DEFAULTS[key];
    return value === undefined || value === null ? match : String(value);
  });
};

/** Deeply replaces tokens in strings, arrays and plain objects */
export const applyCompanyVars = (input, settings = {}) => {
  if (typeof input === "string") return interpolate(input, settings);
  if (Array.isArray(input)) return input.map((item) => applyCompanyVars(item, settings));
  if (input && typeof input === "object") {
    return Object.entries(input).reduce((acc, [key, value]) => {
      acc[key] = applyCompanyVars(value, settings);
      return acc;
    }, {});
  }
  return input;
};

export default applyCompanyVars;
