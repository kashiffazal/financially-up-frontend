import React from "react";
import { App } from "antd";
import FormPageHeader from "@/components/website/FormPageHeader";
import FormPreFooter from "@/components/website/FormPreFooter";
import GSTRegistrationsForm from "@/components/admin/forms/gst-registrations";

export const metadata = {
  title: "GST Registration Form - Financially Up",
  description:
    "Register your Australian business entity for Goods & Services Tax (GST) directly with the ATO.",
};

export default function GSTRegistrationsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Universal Reusable Form Page Hero Header */}
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
        stepsCount={2}
        estimatedTime="4-6 mins"
      />

      {/* Main Form Area Container (Max 1200px) */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <App>
          <GSTRegistrationsForm />
        </App>
      </main>

      {/* Dedicated Form Pre-Footer Assistance & Guarantee Section */}
      <FormPreFooter />
    </div>
  );
}
