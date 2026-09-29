/**
 * Company Registration - Submission Payload Builder
 * ==================================================
 * Converts the accumulated multi-step form state into the exact shape expected by
 * POST /api/new-company-registrations (see newCompanyRegistration.controller.js).
 *
 * - Merges indexed Form.Item values (officer_0_dob, member_0_numberOfShares, owner_0_dob)
 *   back into the officeholder / shareholder / beneficial owner objects.
 * - Renames UI field names to the database column names.
 * - Formats every date as YYYY-MM-DD (local date, no UTC day shift).
 * - Strips "$" and "," from money inputs so DECIMAL columns accept them.
 * - Leaves file upload values untouched (indexed file keys stay top-level for Multer).
 */

import dayjs from "dayjs";

// UI field name -> database column name
const RENAMED_FIELDS = {
  otherCompanyPurpose: "otherPurposeDetail",
  postRegBusinessName: "proposedTaxBusinessName",
  beneficialOwnerWealthSummary: "sourceOfWealthSummary",
  expected12MonthFundingAmount: "first12MonthsFundingAmount",
  expectedFundingFunder: "first12MonthsFunderName",
};

const MONEY_FIELDS = [
  "initialCapitalAmount",
  "first12MonthsFundingAmount",
  "expectedTurnover",
  "cashAmount",
];

const CONTROL_QUESTION_KEYS = ["controlQ1", "controlQ2", "controlQ3", "controlQ4", "controlQ5", "controlQ6"];

// Indexed file upload keys that must stay top-level so Multer receives them
const INDEXED_FILE_KEYS = ["idAttachment", "corporateExtract"];

const INDEXED_KEY_PATTERN = /^(officer|member|owner)_(\d+)_([a-zA-Z0-9]+)$/;

const isDateValue = (val) => dayjs.isDayjs(val);

export const toDateOnly = (val) => {
  if (!val) return null;
  const d = dayjs.isDayjs(val) ? val : dayjs(val);
  return d.isValid() ? d.format("YYYY-MM-DD") : null;
};

export const toNumberOrNull = (val) => {
  if (val === undefined || val === null || val === "") return null;
  if (typeof val === "number") return val;
  const num = parseFloat(String(val).replace(/[^0-9.-]/g, ""));
  return Number.isNaN(num) ? null : num;
};

const isAccepted = (val) =>
  val === true || val === "accepted" || (Array.isArray(val) && val.includes("accepted"));

/**
 * Maps the UI roles checkbox array to the officeholder role ENUM
 * ("Director" | "Secretary" | "Director and Secretary").
 */
export const mapOfficerRole = (roles) => {
  const list = (Array.isArray(roles) ? roles : [roles]).filter(Boolean).map((r) => String(r).toLowerCase());
  const isDirector = list.some((r) => r.includes("director"));
  const isSecretary = list.some((r) => r.includes("secretary"));
  if (isDirector && isSecretary) return "Director and Secretary";
  if (isSecretary) return "Secretary";
  return "Director";
};

/**
 * Collects indexed form values into { officer: {0: {...}}, member: {...}, owner: {...} }
 */
const collectIndexedValues = (values) => {
  const indexed = { officer: {}, member: {}, owner: {} };
  Object.entries(values).forEach(([key, val]) => {
    const match = key.match(INDEXED_KEY_PATTERN);
    if (!match) return;
    const [, prefix, idx, field] = match;
    if (INDEXED_FILE_KEYS.includes(field)) return;
    indexed[prefix][idx] = { ...(indexed[prefix][idx] || {}), [field]: val };
  });
  return indexed;
};

// Prefer the validated Form.Item value; fall back to the list state value
const mergeRow = (row, formRow = {}) => {
  const merged = { ...row };
  Object.entries(formRow).forEach(([field, val]) => {
    if (val !== undefined && val !== null && val !== "") merged[field] = val;
  });
  return merged;
};

export default function buildSubmissionPayload({ values, officeholders, shareholders, beneficialOwners }) {
  const indexed = collectIndexedValues(values);
  const payload = {};

  // 1. Top-level fields: drop helper/indexed keys, rename, format dates
  Object.entries(values).forEach(([key, val]) => {
    if (key.startsWith("_")) return; // draft-only list copies
    if (CONTROL_QUESTION_KEYS.includes(key)) return;

    const match = key.match(INDEXED_KEY_PATTERN);
    if (match && !INDEXED_FILE_KEYS.includes(match[3])) return;

    const targetKey = RENAMED_FIELDS[key] || key;
    payload[targetKey] = isDateValue(val) ? toDateOnly(val) : val;
  });

  MONEY_FIELDS.forEach((field) => {
    if (field in payload) payload[field] = toNumberOrNull(payload[field]);
  });

  // 2. Step 6 control questions -> single JSON column
  payload.controlAnswers = CONTROL_QUESTION_KEYS.reduce((acc, key) => {
    if (values[key] !== undefined) acc[key] = values[key];
    return acc;
  }, {});

  // 3. Officeholders
  payload.officeholders = (officeholders || []).map((officer, idx) => {
    const row = mergeRow(officer, indexed.officer[idx]);
    return {
      firstName: row.firstName,
      lastName: row.lastName,
      fullName: row.fullName,
      formerNames: row.formerNames,
      dob: toDateOnly(row.dob),
      birthCity: row.birthCity,
      birthState: row.birthState,
      birthCountry: row.birthCountry,
      residentialAddress: row.residentialAddress,
      email: row.email,
      mobile: row.mobile,
      role: mapOfficerRole(row.roles),
      occupation: row.occupation,
      citizenship: row.citizenship,
      taxResidence: row.taxResidence,
      isAustralianResidentDirector: row.isAustralianResidentDirector === "Yes" || row.isAustralianResidentDirector === true,
      directorIdStatus: row.directorIdStatus,
      directorIdNumber: row.directorIdNumber,
      idDocType: row.idDocType,
      idDocNumber: row.idDocNumber,
      pepStatus: row.pepStatus,
      sanctionsDeclaration: row.sanctionsDeclaration,
      sourceOfWealth: row.sourceOfWealth,
      consentAccepted: isAccepted(row.officerConsentAccepted ?? row.consentAccepted),
      signatureData: row.officerSignature || row.signature || null,
      signatureDate: toDateOnly(row.signatureDate || row.officerSignatureDate),
    };
  });

  // 4. Shareholders / members
  payload.shareholders = (shareholders || []).map((member, idx) => {
    const row = mergeRow(member, indexed.member[idx]);
    return {
      // Individuals supply first/last; companies and trusts keep the entity name
      firstName: row.firstName,
      lastName: row.lastName,
      fullName: row.fullName,
      memberType: row.memberType || "Individual",
      address: row.address,
      shareClass: row.shareClass || "Ordinary",
      numberOfShares: toNumberOrNull(row.numberOfShares),
      amountPaidPerShare: toNumberOrNull(row.amountPaidPerShare),
      amountUnpaidPerShare: toNumberOrNull(row.amountUnpaidPerShare),
      isBeneficiallyHeld: row.isBeneficiallyHeld === "Yes" || row.isBeneficiallyHeld === true,
      heldForWhom: row.heldForWhom,
      corporateOwnershipChain: row.corporateOwnershipChain,
      consentAccepted: isAccepted(row.memberConsentAccepted ?? row.consentAccepted),
    };
  });

  // 5. Beneficial owners
  payload.beneficialOwners = (beneficialOwners || []).map((owner, idx) => {
    const row = mergeRow(owner, indexed.owner[idx]);
    return {
      firstName: row.firstName,
      lastName: row.lastName,
      fullName: row.fullName,
      dob: toDateOnly(row.dob),
      address: row.address,
      ownershipPercentage: toNumberOrNull(row.ownershipPercentage),
      holdingType: row.holdingType,
      howControlIsHeld: row.howControlIsHeld,
    };
  });

  return payload;
}
