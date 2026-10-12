"use client";

import { useCompany } from "@/context/SettingsContext";

/**
 * The company name from Settings > Company Details, as plain text.
 * Works inside server and client components.
 *
 *   <CompanyName />              -> "Financially Up"
 *   <CompanyName legal />        -> "Financially Up Pty Ltd"
 *   <CompanyName legal upper />  -> "FINANCIALLY UP PTY LTD"
 *
 * @param {boolean} [legal] - registered legal name instead of the trading name
 * @param {boolean} [upper] - in capitals
 */
export default function CompanyName({ legal = false, upper = false }) {
  const company = useCompany();
  const value = legal ? company.legalName : company.name;
  return upper ? value.toUpperCase() : value;
}

// Lets lib/brand.js turn this element back into text (e.g. inside JSON-LD)
CompanyName.brandRole = "name";
