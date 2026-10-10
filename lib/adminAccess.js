/**
 * Admin Access Map (single source of truth for the admin panel)
 * =============================================================
 * Which permission opens each admin page. Used by the page guard in
 * app/admin/layout.js, the Sidebar, the "New application" menu and Global
 * Search shortcuts, so hiding a link and blocking its URL always agree.
 *
 * The module lists mirror the backend (financially-up-backend/utils/
 * modulePermissions.js), which is what actually protects the data — keep the
 * two in sync. Each list holds the current permission name first, then older
 * names existing roles may still use (e.g. "medicare.view").
 */

export const MODULE_VIEW_PERMISSIONS = {
  "new-company": ["company.registration.view"],
  "legacy-company": ["company.registration.view"],
  "changes-company": ["changes_to_company.request.view", "company.changes.view"],
  "new-individual": ["engagement.view", "individual.engagement.view"],
  "legacy-individual": ["engagement.view", "individual.engagement.view"],
  "entity-engagements": ["engagement.view", "entity.engagement.view"],
  gst: ["gst.registration.view"],
  medicare: ["medicare.claim.view", "medicare.view"],
  trust: ["trust.registration.view"],
  smsf: ["smsf.registration.view"],
  "business-names": ["business_name.registration.view", "business.name.view"],
  "apply-tfn": ["tfn_abn.application.view", "tfn.abn.view"],
};

/** Client-application module keys (the dashboard's application widgets need one of these). */
export const APPLICATION_MODULE_KEYS = Object.keys(MODULE_VIEW_PERMISSIONS);

/**
 * Admin URL (first segment after /admin, or a longer path) -> required access.
 * `null` = any signed-in staff member. The longest matching path wins.
 */
const ROUTE_ACCESS = {
  dashboard: null,
  profile: null,
  "company-registration-new": { module: "new-company" },
  "company-registration": { module: "legacy-company" },
  "changes-to-company-details": { module: "changes-company" },
  "individual-engagement-new": { module: "new-individual" },
  "individual-engagement": { module: "legacy-individual" },
  "entity-engagements": { module: "entity-engagements" },
  "gst-registrations": { module: "gst" },
  medicare: { module: "medicare" },
  "trust-registrations": { module: "trust" },
  "smsf-registrations": { module: "smsf" },
  "business-name-registrations": { module: "business-names" },
  "apply-tfn-abns": { module: "apply-tfn" },
  enquiries: { permission: "enquiries.view" },
  newsletter: { permission: "newsletter.view" },
  blog: { permission: "blog.view" },
  "blog/new": { permission: "blog.manage" },
  users: { permission: "users.view" },
  roles: { permission: "roles.view" },
  "audit-logs": { permission: "audit.view" },
  settings: { permission: "settings.view" },
};

const hasAny = (permissions, slugs) => slugs.some((slug) => permissions.includes(slug));

/** True when the permissions allow viewing the module. */
export const canViewModule = (permissions = [], moduleKey) => hasAny(permissions, MODULE_VIEW_PERMISSIONS[moduleKey] || []);

/** Required access for an admin path, or undefined when the path isn't a known page. */
export const accessRuleForPath = (pathname = "") => {
  const rest = String(pathname).replace(/^\/admin\/?/, "").replace(/\/+$/, "");
  const parts = rest.split("/").filter(Boolean);
  for (let n = parts.length; n > 0; n--) {
    const key = parts.slice(0, n).join("/");
    if (Object.prototype.hasOwnProperty.call(ROUTE_ACCESS, key)) return ROUTE_ACCESS[key];
  }
  return undefined;
};

/**
 * May this user open the admin page?
 * @param {{ permissions?: string[] }} user
 * @param {boolean} isAdministrator - the Administrator role sees everything
 * @param {string} pathname
 */
export const canAccessAdminPath = (user, isAdministrator, pathname) => {
  if (isAdministrator) return true;
  const rule = accessRuleForPath(pathname);
  if (!rule) return true; // dashboard / profile / unknown pages (the 404 page handles those)
  const permissions = user?.permissions || [];
  if (rule.module) return canViewModule(permissions, rule.module);
  return permissions.includes(rule.permission);
};
