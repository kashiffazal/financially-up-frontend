import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";

export const metadata = {
  title: "Trust Registration Form - Financially Up",
  description:
    "Establish Family, Discretionary, or Unit Trusts with customized trust deeds, ABN & TFN.",
};

export default function TrustRegistrationsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <FormPageHeader
        title="Trust Registration & Deed Setup Form"
        subtitle="Establish a Family, Discretionary, or Unit Trust with customized trust deeds, ABN, and TFN registrations."
        badgeTag="Trust & Asset Structuring"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "Trust Registration" },
        ]}
        stepsCount={6}
        estimatedTime="8-10 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-slate-600 dark:text-zinc-400">
        <div className="p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
            Trust Registration Form
          </h2>
          <p className="text-sm">
            Complete your Trust structure setup with our expert accountants.
          </p>
        </div>
      </main>

      <FormPreFooter />
    </div>
  );
}
