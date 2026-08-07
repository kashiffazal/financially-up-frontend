import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";
import IndividualEngagementClientForm from "../../../../../components/admin/forms/individual-engagement";

export const metadata = {
  title: "Individual Client Engagement Form - Financially Up",
  description:
    "Complete your individual client engagement onboarding form online with Financially Up Tax Agents.",
};

export default function IndividualEngagementFormPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Universal Reusable Form Page Hero Header */}
      <FormPageHeader
        title="Individual Client Engagement Form"
        subtitle="Complete your individual tax & compliance engagement onboarding in 10 guided steps."
        badgeTag="ATO Registered Tax Agent"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/engagement-forms" },
          { label: "Engagement Forms", href: "/resources/engagement-forms" },
          { label: "Individual Engagement Form" },
        ]}
        stepsCount={10}
        estimatedTime="8-10 mins"
      />

      {/* Main Form Area Container (Max 1200px) */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <IndividualEngagementClientForm />
      </main>

      {/* Dedicated Form Pre-Footer Assistance & Guarantee Section */}
      <FormPreFooter />
    </div>
  );
}
