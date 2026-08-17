import React from "react";
import { App } from "antd";
import FormPageHeader from "@/components/website/FormPageHeader";
import FormPreFooter from "@/components/website/FormPreFooter";
import TrustRegistrationsForm from "@/components/admin/forms/trust-registrations";

export const metadata = {
  title: "Trust Registration Form - Financially Up",
  description:
    "Establish Family, Discretionary, or Unit Trusts with customized trust deeds, ABN & TFN.",
};

export default function TrustRegistrationsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Universal Reusable Form Page Hero Header */}
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
        stepsCount={4}
        estimatedTime="8-10 mins"
      />

      {/* Main Form Area Container (Max 1200px) */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <App>
          <TrustRegistrationsForm />
        </App>
      </main>

      {/* Dedicated Form Pre-Footer Assistance & Guarantee Section */}
      <FormPreFooter />
    </div>
  );
}
