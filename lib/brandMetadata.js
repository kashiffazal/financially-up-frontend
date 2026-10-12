/**
 * Page metadata with the live company details (server only).
 *
 *   const baseMetadata = { title: "Bookkeeping | Financially Up", ... };
 *   export const generateMetadata = brandedMetadata(baseMetadata);
 *
 * Titles, descriptions, Open Graph / Twitter names and canonical URLs get the
 * company name, legal name, email and website address from Settings (lib/brand.js).
 */

import { getSettings } from "./getSettings";
import { brandDeep } from "./brand";

export const brandedMetadata = (metadata) =>
  async function generateMetadata() {
    return brandDeep(metadata, await getSettings());
  };
