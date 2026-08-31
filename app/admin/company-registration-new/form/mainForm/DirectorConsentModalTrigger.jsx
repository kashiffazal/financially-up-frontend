"use client";

import React, { useState } from "react";
import { Modal, Button } from "antd";
import { FileProtectOutlined, UserOutlined } from "@ant-design/icons";
import { DIRECTOR_CONSENT_TEXT } from "./legalDocumentsText";

export default function DirectorConsentModalTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary dark:text-emerald-400 hover:underline cursor-pointer transition-colors"
      >
        <FileProtectOutlined />
        <span>View Director Consent to Act</span>
      </button>

      <Modal
        title={
          <div className="flex items-center gap-2.5 text-base font-extrabold text-slate-900 dark:text-zinc-100">
            <UserOutlined className="text-brand-primary text-xl" />
            <span>{DIRECTOR_CONSENT_TEXT.title}</span>
          </div>
        }
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={[
          <Button
            key="close"
            type="primary"
            onClick={() => setIsOpen(false)}
            className="bg-brand-primary hover:bg-brand-primary-hover font-bold rounded-xl h-10 px-6"
          >
            Close
          </Button>,
        ]}
        width={640}
        centered
        className="dark:bg-zinc-900"
      >
        <div className="py-3 space-y-4 max-h-[65vh] overflow-y-auto pr-2 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
          <p className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 text-xs text-emerald-950 dark:text-emerald-200 font-medium">
            {DIRECTOR_CONSENT_TEXT.overview}
          </p>

          <div className="space-y-2.5">
            {DIRECTOR_CONSENT_TEXT.clauses.map((clause, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300"
              >
                {clause}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
