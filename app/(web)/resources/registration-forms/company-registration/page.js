import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";

export const metadata = {
  title: "Australian Company Registration (Pty Ltd) - Financially Up",
  description:
    "Incorporate your Australian Proprietary Limited company with ASIC complete with ACN & constitution.",
};

export default function CompanyRegistrationPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <FormPageHeader
        title="Australian Company Registration (Pty Ltd)"
        subtitle="Incorporate your Australian Proprietary Limited company with ASIC, complete with ACN, constitution, and certificate."
        badgeTag="ASIC Registered Corporate Agent"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/registration-forms" },
          { label: "Registration Forms", href: "/resources/registration-forms" },
          { label: "Company Registration" },
        ]}
        stepsCount={7}
        estimatedTime="8-12 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-slate-600 dark:text-zinc-400">
        <div className="p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
            Company Registration Form
          </h2>
          <p className="text-sm">
            Incorporate your new Australian Pty Ltd company online in minutes.
          </p>
        </div>
      </main>

      <FormPreFooter />
    </div>
  );
}
