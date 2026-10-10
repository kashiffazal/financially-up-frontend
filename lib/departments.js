/**
 * Staff departments: managed by admins in Settings > Staff ("staff.departments",
 * stored as a JSON array). Used by the Add / Edit User and Profile forms.
 */

export const DEFAULT_DEPARTMENTS = [
  "Taxation & Accounting",
  "Corporate Advisory",
  "Audit & Assurance",
  "Compliance & ASIC",
  "Bookkeeping & Payroll",
  "Practice Administration",
];

/** Settings value (JSON array text) -> array of department names. */
export const parseDepartments = (value) => {
  if (Array.isArray(value)) return value.filter(Boolean);
  try {
    const list = JSON.parse(value || "[]");
    return Array.isArray(list) ? list.map((d) => String(d).trim()).filter(Boolean) : [];
  } catch {
    return [];
  }
};

/**
 * Select options for a department field. The user's current department is kept
 * even when it was removed from the list, so saving a form never loses it.
 */
export const departmentOptions = (settingsValue, current) => {
  const list = parseDepartments(settingsValue);
  const names = list.length ? list : DEFAULT_DEPARTMENTS;
  const all = current && !names.includes(current) ? [...names, current] : names;
  return all.map((name) => ({ label: name, value: name }));
};
