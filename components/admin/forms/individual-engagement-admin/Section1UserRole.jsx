"use client";

import React from "react";
import { AntInput } from "@/services/antdFields";

const USER_ROLE_OPTIONS = [
  { value: "Accountant", label: "Accountant (Review & Decision)" },
  { value: "Compliance Officer", label: "Compliance Officer (AML/CTF & Sanctions Review)" },
  { value: "Administrator", label: "System Administrator" },
];

export default function Section1UserRole() {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-6 space-y-4 hover:border-brand-primary/40 transition-all">
      <AntInput
        type="select"
        name="userRole"
        label={<span className="font-bold text-slate-800 dark:text-zinc-200">Reviewing Staff User Role</span>}
        options={USER_ROLE_OPTIONS}
        size="large"
        className="rounded-xl"
        reqMsg="Please select your user role."
      />
    </div>
  );
}
