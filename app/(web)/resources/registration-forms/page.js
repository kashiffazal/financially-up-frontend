"use client";

import React from "react";
import PageHero from "@/components/website/PageHero";
import RegistrationFormsList from "./components/RegistrationFormsList";

/**
 * Business Registrations Page
 * Route: /resources/registration-forms
 */
export default function BusinessRegistrationsPage() {
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Business Registration" },
  ];

  return (
    <div className="w-full overflow-hidden bg-slate-50/60 dark:bg-zinc-950 transition-colors duration-300 min-h-screen">
      {/* 1. Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="ATO & ASIC Registration Services"
        title="Business Registrations"
        subtitle="Start your business on the right foot with our business registration services. We'll assist you in registering your business entity, ensuring compliance with all legal requirements."
      />

      {/* 2. Registration Forms Cards Grid (3 Columns) */}
      <RegistrationFormsList />
    </div>
  );
}
