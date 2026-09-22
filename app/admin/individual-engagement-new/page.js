"use client";

import React from "react";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";
import IndividualEngagementLogModule from "./log";
import PageTitle from "@/components/admin/PageTitle";

/**
 * ============================================================================
 * Individual Engagement Admin Page
 * ============================================================================
 *
 * Architecture Role:
 * 1. Root route for `/admin/individual-engagement-new`.
 * 2. Uses the standardized `<PageTitle />` component with large icon, title,
 *    public form link pill, "Share Form" modal, and breadcrumbs.
 * 3. Directly renders the status-categorized log module (`IndividualEngagementLogModule`).
 */
export default function NewIndividualEngagementAdminPage() {
  return (
    <div className="w-full space-y-6 pb-12">
      {/* 1. Standardized Admin Page Title & Share Header */}
      <PageTitle
        icon={<UserOutlined />}
        title="Individual Engagements"
        description="Manage individual client engagements, AML/CTF risk assessments, Tax Agent reviews, and compliance records."
        formPath="/resources/engagement-forms/individual-engagement-form"
        formTitle="Individual Engagement Form"
        shareDefaultMessage="Dear client, please complete your Individual Client Engagement application using the secure link below."
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
            title: <span className="text-slate-500">Engagements</span>,
          },
          {
            title: (
              <span className="font-semibold text-brand-primary dark:text-emerald-400">
                Individual Engagement
              </span>
            ),
          },
        ]}
      />

      {/* 2. Engagements Status Log Module */}
      <IndividualEngagementLogModule />
    </div>
  );
}
