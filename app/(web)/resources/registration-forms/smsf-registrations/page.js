import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";

export const metadata = {
  title: "SMSF Registration Form - Financially Up",
  description:
    "Register an ATO-compliant Self-Managed Superannuation Fund with corporate trusteeship.",
};

export default function SMSFRegistrationsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <FormPageHeader
        title="SMSF Registration & Setup Form"
        subtitle="Register an ATO-compliant Self-Managed Superannuation Fund with corporate trusteeship, trust deed, and ESA registration."
        badgeTag="ATO & Superannuation Specialist"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "SMSF Registration" },
        ]}
        stepsCount={6}
        estimatedTime="8-10 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-slate-600 dark:text-zinc-400">
        <div className="p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
            SMSF Registration Form
          </h2>
          <p className="text-sm">
            Establish your Self-Managed Super Fund with compliant trustee documentation.
          </p>
        </div>
      </main>

      <FormPreFooter />
    </div>
  );
}
