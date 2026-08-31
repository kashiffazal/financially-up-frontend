"use client";

import React from "react";
import { BankOutlined, HomeOutlined } from "@ant-design/icons";
import CompanyRegistrationLogModule from "./log";
import PageTitle from "@/components/admin/PageTitle";

/**
 * ============================================================================
 * Company Registration Admin Page
 * ============================================================================
 *
 * Architecture Role:
 * 1. Root route for `/admin/company-registration-new`.
 * 2. Uses the standardized `<PageTitle />` component with large icon, title,
 *    public form link pill, "Share Form" modal, and breadcrumbs.
 * 3. Directly renders the status-categorized log module (`CompanyRegistrationLogModule`).
 */
export default function NewCompanyRegistrationAdminPage() {
  return (
    <div className="w-full space-y-6 pb-12">
      {/* 1. Standardized Admin Page Title & Share Header */}
      <PageTitle
        icon={<BankOutlined />}
        title="Company Registrations"
        description="Manage Australian Proprietary Limited company applications, ASIC lodgements, and client submissions."
        formPath="/resources/registration-forms/company-registration"
        formTitle="Company Registration Form"
        shareDefaultMessage="Dear client, please complete your Australian Company Registration application using the secure link below."
        breadcrumbs={[
          {
            title: (
              <span className="flex items-center gap-1.5 text-slate-500">
                <HomeOutlined className="!text-[12px]" /> Dashboard
              </span>
            ),
            href: "/admin/dashboard",
          },
          {
            title: <span className="text-slate-500">Registrations</span>,
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Company Registration
              </span>
            ),
          },
        ]}
      />

      {/* 2. Registrations Status Log Module */}
      <CompanyRegistrationLogModule />
    </div>
  );
}
