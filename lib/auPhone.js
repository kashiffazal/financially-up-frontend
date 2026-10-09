/**
 * Australian Phone Numbers
 * ========================
 * Shared validation + formatting for every phone / mobile field (website forms,
 * client application forms, admin user profiles).
 *
 * Accepts the ways people normally type numbers: spaces, dashes, dots, brackets,
 * and the +61 / 61 / 0061 country prefix (e.g. "+61 (0) 412-345-678").
 *
 *   Mobile:    04XX XXX XXX                       e.g. 0412 345 678
 *   Landline:  0X XXXX XXXX (02, 03, 07, 08)      e.g. 02 9876 5432
 *   Business:  1300 XXX XXX, 1800 XXX XXX, 13 XX XX
 *
 * The backend keeps its own copy of these rules (financially-up-backend/utils/auPhone.js).
 */

const MOBILE = /^04\d{8}$/;
const LANDLINE = /^0[2378]\d{8}$/;
const BUSINESS_1300_1800 = /^1[38]00\d{6}$/;
const BUSINESS_13 = /^13\d{4}$/;

/** Digits only, with any +61 / 61 / 0061 prefix converted to a leading 0. */
export const normalizeAuPhone = (value) => {
  if (value === null || value === undefined) return "";
  let digits = String(value).replace(/[\s\-().]/g, "");
  if (digits.startsWith("+61")) digits = `0${digits.slice(3)}`;
  else if (digits.startsWith("0061")) digits = `0${digits.slice(4)}`;
  else if (/^61[2-478]\d{8}$/.test(digits)) digits = `0${digits.slice(2)}`;
  // "+61 (0) 4…" leaves a doubled trunk zero
  if (/^00[2-478]/.test(digits)) digits = digits.slice(1);
  return digits;
};

export const isAuMobile = (value) => MOBILE.test(normalizeAuPhone(value));

/** Mobile, landline, or 1300 / 1800 / 13 business number. */
export const isAuPhone = (value) => {
  const d = normalizeAuPhone(value);
  return MOBILE.test(d) || LANDLINE.test(d) || BUSINESS_1300_1800.test(d) || BUSINESS_13.test(d);
};

/** Standard Australian display format; unrecognised input is returned trimmed. */
export const formatAuPhone = (value) => {
  const d = normalizeAuPhone(value);
  if (MOBILE.test(d) || BUSINESS_1300_1800.test(d)) return `${d.slice(0, 4)} ${d.slice(4, 7)} ${d.slice(7)}`;
  if (LANDLINE.test(d)) return `${d.slice(0, 2)} ${d.slice(2, 6)} ${d.slice(6)}`;
  if (BUSINESS_13.test(d)) return `${d.slice(0, 2)} ${d.slice(2, 4)} ${d.slice(4)}`;
  return value === null || value === undefined ? "" : String(value).trim();
};

export const AU_MOBILE_MESSAGE = "Enter an Australian mobile number, e.g. 0412 345 678";
export const AU_PHONE_MESSAGE = "Enter an Australian phone number, e.g. 0412 345 678 or 02 9876 5432";

/**
 * Ant Design form rule. Empty values pass, so pair it with a `required` rule
 * when the field is mandatory.
 * @param {{ mobileOnly?: boolean, message?: string }} options
 */
export const auPhoneRule = ({ mobileOnly = false, message } = {}) => ({
  validator: (_, value) => {
    if (value === undefined || value === null || String(value).trim() === "") return Promise.resolve();
    const valid = mobileOnly ? isAuMobile(value) : isAuPhone(value);
    return valid
      ? Promise.resolve()
      : Promise.reject(new Error(message || (mobileOnly ? AU_MOBILE_MESSAGE : AU_PHONE_MESSAGE)));
  },
});
