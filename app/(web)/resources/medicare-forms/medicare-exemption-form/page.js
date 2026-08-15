import React from "react";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";

export const metadata = {
  title: "Medicare Levy Exemption Application - Financially Up",
  description:
    "Apply for Medicare Levy Exemption certificate, reduction claims, and tax offsets with registered ATO tax agents.",
};

export default function MedicareExemptionFormPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      <FormPageHeader
        title="Medicare Levy Exemption Application Form"
        subtitle="Apply for Medicare Levy Exemption certificate, reduction claims, and tax offsets with registered ATO tax agents."
        badgeTag="ATO & Medicare Compliance"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Resources", href: "/resources/medicare-forms" },
          { label: "Medicare Forms", href: "/resources/medicare-forms" },
          { label: "Medicare Exemption Form" },
        ]}
        stepsCount={4}
        estimatedTime="5-7 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-center text-slate-600 dark:text-zinc-400">
        <div className="p-12 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200 dark:border-zinc-800 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100 mb-2">
            Medicare Levy Exemption Form
          </h2>
          <p className="text-sm">
            Complete your Medicare Levy Exemption & Reduction application online.
          </p>
        </div>
      </main>

      <FormPreFooter />
    </div>
  );
}
