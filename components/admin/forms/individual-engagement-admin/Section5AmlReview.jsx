"use client";

import React from "react";
import { SafetyCertificateOutlined } from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Section5AmlReview() {
  return (
    <div className="rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm p-6 space-y-4 hover:border-brand-primary/40 transition-all">
      <h4 className="text-sm font-extrabold text-slate-900 dark:text-zinc-100 flex items-center gap-2 text-brand-primary dark:text-emerald-400">
        <SafetyCertificateOutlined className="text-brand-primary" /> Section 5: Anti-Money Laundering (AML / CTF) Review
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <AntInput
          type="radio"
          name="amlDesignatedServiceInvolved"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Is a Designated Service Involved?</span>}
          radioOptions={[
            { value: "Yes", label: "Yes" },
            { value: "No", label: "No" },
          ]}
          reqMsg="Select option."
        />

        <AntInput
          type="radio"
          name="amlBeneficialOwnershipVerified"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Beneficial Ownership Verified?</span>}
          radioOptions={[
            { value: "Yes", label: "Verified" },
            { value: "No", label: "Unverified" },
            { value: "N/A", label: "N/A" },
          ]}
          reqMsg="Select option."
        />

        <AntInput
          type="radio"
          name="amlSourceOfFundsRecorded"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Source of Funds / Wealth Recorded?</span>}
          radioOptions={[
            { value: "Yes", label: "Recorded" },
            { value: "No", label: "Not Recorded" },
            { value: "N/A", label: "N/A" },
          ]}
          reqMsg="Select option."
        />

        <AntInput
          type="radio"
          name="amlEscalationRequired"
          label={<span className="font-bold text-slate-800 dark:text-zinc-200">Escalate to Compliance Officer?</span>}
          radioOptions={[
            { value: "Yes", label: "Yes, Escalate" },
            { value: "No", label: "No" },
          ]}
          reqMsg="Select option."
        />
      </div>
    </div>
  );
}
