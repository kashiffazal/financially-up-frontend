"use client";

import React from "react";
import { App } from "antd";
import FormPageHeader from "../../../../../components/website/FormPageHeader";
import FormPreFooter from "../../../../../components/website/FormPreFooter";
import CompanyRegistrationForm from "@/components/admin/forms/company-registration";

export default function CompanyRegistrationPage() {
  return (
    <App>
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
        stepsCount={12}
        estimatedTime="10-15 mins"
      />

      <main className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <CompanyRegistrationForm />
      </main>

      <FormPreFooter />
      </div>
    </App>
  );
}
