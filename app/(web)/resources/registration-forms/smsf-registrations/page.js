import React from "react";
import { App } from "antd";
import FormPageHeader from "@/components/website/FormPageHeader";
import FormPreFooter from "@/components/website/FormPreFooter";
import SMSFRegistrationsForm from "@/components/admin/forms/smsf-registrations";

export const metadata = {
  title: "SMSF Registration Form - Financially Up",
  description:
    "Register an ATO-compliant Self-Managed Superannuation Fund with corporate trusteeship.",
};

export default function SMSFRegistrationsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Universal Reusable Form Page Hero Header */}
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
        stepsCount={4}
        estimatedTime="8-10 mins"
      />

      {/* Main Form Area Container (Max 1200px) */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <App>
          <SMSFRegistrationsForm />
        </App>
      </main>

      {/* Dedicated Form Pre-Footer Assistance & Guarantee Section */}
      <FormPreFooter />
    </div>
  );
}
