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

import { normalizeSettings } from "./companyDefaults";
import { brandText } from "./brand";

const TOKEN_PATTERN = /\{\{\s*([a-zA-Z0-9_.]+)\s*\}\}/g;

/**
 * Replaces {{key}} tokens in a single string, then any written-out default
 * company name / legal name / email / website address (lib/brand.js).
 */
export const interpolate = (text, settings = {}) => {
  if (typeof text !== "string") return text;
  const values = normalizeSettings(settings);
  const withTokens = text.includes("{{")
    ? text.replace(TOKEN_PATTERN, (match, key) => {
        const value = values[key];
        return value === undefined || value === null ? match : String(value);
      })
    : text;
  return brandText(withTokens, values);
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
