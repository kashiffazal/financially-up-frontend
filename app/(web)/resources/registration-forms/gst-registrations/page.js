import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";

export const metadata = {
  title: "GST Registration Form - Financially Up",
  description:
    "Register your Australian business entity for Goods & Services Tax (GST) directly with the ATO.",
};

export default function GSTRegistrationsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <FormPageHeader
        title="GST Registration Form"
        subtitle="Register your Australian business entity for Goods & Services Tax (GST) threshold compliance directly with the ATO."
        badgeTag="ATO Registered Tax Agent"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "GST Registration" },
        ]}
        stepsCount={4}
        estimatedTime="4-6 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-slate-600 dark:text-zinc-400">
        <div className="p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
            GST Registration Form
          </h2>
          <p className="text-sm">
            Submit your GST registration directly to the ATO through our registered portal.
          </p>
        </div>
      </main>

      <FormPreFooter />
    </div>
  );
}
