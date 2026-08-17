import React from "react";
import { App } from "antd";
import FormPageHeader from "@/components/website/FormPageHeader";
import FormPreFooter from "@/components/website/FormPreFooter";
import BusinessNameRegistrationForm from "@/components/admin/forms/business-name-registrations";

export const metadata = {
  title: "Business Name Registration - Financially Up",
  description:
    "Register your Australian business name across all states and territories directly with ASIC.",
};

export default function BusinessNameRegistrationPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Universal Reusable Form Page Hero Header */}
      <FormPageHeader
        title="Business Name Registration"
        subtitle="Register your Australian business name online across all states with ASIC, ensuring compliance with Australian business laws."
        badgeTag="ASIC Registered Corporate Agent"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "Business Name Registration" },
        ]}
        stepsCount={2}
        estimatedTime="4-6 mins"
      />

      {/* Main Form Area Container (Max 1200px) */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <App>
          <BusinessNameRegistrationForm />
        </App>
      </main>

      {/* Dedicated Form Pre-Footer Assistance & Guarantee Section */}
      <FormPreFooter />
    </div>
  );
}
