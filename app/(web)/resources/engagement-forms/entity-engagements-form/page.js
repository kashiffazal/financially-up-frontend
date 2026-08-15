import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";

export const metadata = {
  title: "Entity Engagement Form - Financially Up",
  description: "Company, Trust, Partnership & SMSF Engagement Onboarding Form.",
};

export default function EntityEngagementsFormPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <FormPageHeader
        title="Entity Client Engagement Form"
        subtitle="Complete your Company, Trust, Partnership, or SMSF tax engagement onboarding in guided steps."
        badgeTag="ATO Registered Tax Agent"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/engagement-forms" },
          { label: "Engagement Forms", href: "/resources/engagement-forms" },
          { label: "Entity Engagement Form" },
        ]}
        stepsCount={10}
        estimatedTime="10-12 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-slate-600 dark:text-zinc-400">
        <div className="p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
            Entity Engagement Form
          </h2>
          <p className="text-sm">
            Complete your Company, Trust, Partnership, or SMSF engagement onboarding securely.
          </p>
        </div>
      </main>

      <FormPreFooter />
    </div>
  );
}
