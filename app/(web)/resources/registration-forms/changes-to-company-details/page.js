import React from "react";
import { App } from "antd";
import FormPageHeader from "@/components/website/FormPageHeader";
import FormPreFooter from "@/components/website/FormPreFooter";
import ChangesToCompanyDetailsForm from "@/components/admin/forms/changes-to-company-details";

export const metadata = {
  title: "Changes to Company Details (ASIC Form 484) - Financially Up",
  description:
    "Lodge corporate changes for company directors, shareholders, share structure, and registered office addresses with ASIC.",
};

export default function ChangesToCompanyDetailsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Universal Reusable Form Page Hero Header */}
      <FormPageHeader
        title="Changes to Company Details (ASIC Form 484)"
        subtitle="Lodge corporate changes for company directors, secretaries, shareholders, share allocations, and registered office addresses online with registered ASIC corporate agents."
        badgeTag="ASIC Registered Corporate Agent 484"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "Changes to Company Details" },
        ]}
        stepsCount={4}
        estimatedTime="5-8 mins"
      />

      {/* Main Form Area Container (Max 1200px) */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <App>
          <ChangesToCompanyDetailsForm />
        </App>
      </main>

      {/* Dedicated Form Pre-Footer Assistance & Guarantee Section */}
      <FormPreFooter />
    </div>
  );
}
