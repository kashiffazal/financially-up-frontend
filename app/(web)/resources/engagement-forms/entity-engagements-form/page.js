import React from "react";
import { App } from "antd";
import FormPageHeader from "@/components/website/FormPageHeader";
import FormPreFooter from "@/components/website/FormPreFooter";
import EntityEngagementForm from "@/components/admin/forms/entity-engagement";

export const metadata = {
  title: "Entity Engagement Form - Financially Up",
  description: "Company, Trust, Partnership & SMSF Engagement Onboarding Form.",
};

export default function EntityEngagementsFormPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Universal Reusable Form Page Hero Header */}
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
        stepsCount={3}
        estimatedTime="6-8 mins"
      />

      {/* Main Form Area Container (Max 1200px) */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <App>
          <EntityEngagementForm />
        </App>
      </main>

      {/* Dedicated Form Pre-Footer Assistance & Guarantee Section */}
      <FormPreFooter />
    </div>
  );
}
