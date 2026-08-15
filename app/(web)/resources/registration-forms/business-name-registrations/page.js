import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";

export const metadata = {
  title: "Business Name Registration - Financially Up",
  description:
    "Register your official Australian trading business name online with ASIC.",
};

export default function BusinessNameRegistrationsPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <FormPageHeader
        title="Business Name Registration Form"
        subtitle="Register and protect your official trading business name across Australia with ASIC linked directly to your ABN."
        badgeTag="ASIC Registered Agent"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "Business Name Registration" },
        ]}
        stepsCount={4}
        estimatedTime="4-6 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-slate-600 dark:text-zinc-400">
        <div className="p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
            Business Name Registration Form
          </h2>
          <p className="text-sm">
            Register your trading name across all Australian states and territories.
          </p>
        </div>
      </main>

      <FormPreFooter />
    </div>
  );
}
