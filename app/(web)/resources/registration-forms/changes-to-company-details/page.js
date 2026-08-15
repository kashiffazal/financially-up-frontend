import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";

export const metadata = {
  title: "Changes to Company Details (ASIC Form 484) - Financially Up",
  description:
    "Lodge corporate changes for company directors, shareholders, and registered addresses.",
};

export default function ChangesToCompanyDetailsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <FormPageHeader
        title="Changes to Company Details (ASIC Form 484)"
        subtitle="Lodge corporate changes for company directors, shareholders, share structure, and registered office addresses."
        badgeTag="ASIC Registered Agent 484"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "Changes to Company Details" },
        ]}
        stepsCount={5}
        estimatedTime="5-8 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-slate-600 dark:text-zinc-400">
        <div className="p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
            Change to Company Details Form
          </h2>
          <p className="text-sm">
            Update ASIC records for directors, share allocations, and officeholder details.
          </p>
        </div>
      </main>

      <FormPreFooter />
    </div>
  );
}
