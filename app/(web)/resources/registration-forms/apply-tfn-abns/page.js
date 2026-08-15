import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";

export const metadata = {
  title: "Apply TFN & Sole Trader ABN - Financially Up",
  description:
    "Apply for your Australian Tax File Number (TFN) and Sole Trader ABN online with registered tax agents.",
};

export default function ApplyTfnAbnPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <FormPageHeader
        title="Apply TFN & Sole Trader ABN Registration"
        subtitle="Apply for your Australian Tax File Number (TFN) and Sole Trader ABN online with registered tax agents."
        badgeTag="ATO & ABR Authorized"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "Apply TFN / ABNs" },
        ]}
        stepsCount={5}
        estimatedTime="5-7 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-slate-600 dark:text-zinc-400">
        <div className="p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
            Apply TFN / ABNs Form
          </h2>
          <p className="text-sm">
            Complete your application online with our registered ATO tax agents.
          </p>
        </div>
      </main>

      <FormPreFooter />
    </div>
  );
}
