"use client";

import React from "react";
import CompanyRegistrationForm from "./mainForm";

/**
 * ============================================================================
 * Company Registration Creation Form Container (`form/index.js`)
 * ============================================================================
 *
 * Architecture Role:
 * 1. Hosts the full 12-step interactive company registration form (`./mainForm`).
 * 2. Provides a clean, card-like container with dark/light mode theme support.
 * 3. Handles form success callback:
 *    - When the admin/user completes all steps and successfully submits the application,
 *      `onSuccess` is called to redirect the user back to the "Registrations Log" tab.
 *
 * @param {function} onSuccess - Callback invoked when a new company registration is successfully submitted.
 */
export default function CompanyRegistrationFormModule({ onSuccess }) {
  return (
    <div className="w-full bg-white dark:bg-zinc-900 p-4 sm:p-6 rounded-xl border border-slate-200/80 dark:border-zinc-800 shadow-sm">
      {/* Interactive 12-Step Company Registration Form */}
      <CompanyRegistrationForm onSuccess={onSuccess} />
    </div>
  );
}
