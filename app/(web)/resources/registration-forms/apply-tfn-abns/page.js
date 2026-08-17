import React from "react";
import { App } from "antd";
import FormPageHeader from "@/components/website/FormPageHeader";
import FormPreFooter from "@/components/website/FormPreFooter";
import ApplyTfnAbnForm from "@/components/admin/forms/apply-tfn-abns";

export const metadata = {
  title: "Apply TFN & ABN Registration - Financially Up",
  description:
    "Quick and compliant Tax File Number (TFN) and Australian Business Number (ABN) applications for individuals and businesses.",
};

export default function ApplyTfnAbnsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Universal Reusable Form Page Hero Header */}
      <FormPageHeader
        title="Apply TFN & ABN Registration"
        subtitle="Quick and compliant online TFN & ABN applications for individuals, sole traders, companies, trusts, and partnerships."
        badgeTag="ATO Registered Tax Agent"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "Apply TFN / ABN" },
        ]}
        stepsCount={4}
        estimatedTime="5-7 mins"
      />

      {/* Main Form Area Container (Max 1200px) */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <App>
          <ApplyTfnAbnForm />
        </App>
      </main>

      {/* Dedicated Form Pre-Footer Assistance & Guarantee Section */}
      <FormPreFooter />
    </div>
  );
}
