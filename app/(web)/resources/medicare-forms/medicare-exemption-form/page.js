import React from "react";
import { App } from "antd";
import FormPageHeader from "@/components/website/FormPageHeader";
import FormPreFooter from "@/components/website/FormPreFooter";
import MedicareExemptionForm from "@/components/admin/forms/medicare";

export const metadata = {
  title: "Medicare Levy Exemption Application - Financially Up",
  description:
    "Apply for Medicare Levy Exemption certificate, reduction claims, and tax offsets with registered ATO tax agents.",
};

export default function MedicareExemptionFormPage() {
  return (
    <div className="bg-slate-50 dark:bg-zinc-950 min-h-screen transition-colors duration-300">
      {/* Universal Reusable Form Page Hero Header */}
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

      {/* Main Form Area Container (Max 1200px) */}
      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <App>
          <MedicareExemptionForm />
        </App>
      </main>

      {/* Dedicated Form Pre-Footer Assistance & Guarantee Section */}
      <FormPreFooter />
    </div>
  );
}
