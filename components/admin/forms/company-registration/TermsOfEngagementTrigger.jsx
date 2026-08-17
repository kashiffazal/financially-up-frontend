"use client";

import React, { useState } from "react";
import { Modal, Button } from "antd";
import { FileProtectOutlined } from "@ant-design/icons";
import { TERMS_OF_ENGAGEMENT_TEXT } from "./legalDocumentsText";

export default function TermsOfEngagementTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary dark:text-emerald-400 hover:underline cursor-pointer transition-colors"
      >
        <FileProtectOutlined />
        <span>View Terms of Engagement</span>
      </button>

      <Modal
        title={
          <div className="flex items-center gap-2.5 text-base font-extrabold text-slate-900 dark:text-zinc-100">
            <FileProtectOutlined className="text-brand-primary text-xl" />
            <span>{TERMS_OF_ENGAGEMENT_TEXT.title}</span>
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
            Close & Review
          </Button>,
        ]}
        width={720}
        centered
        className="dark:bg-zinc-900"
      >
        <div className="py-3 space-y-4 max-h-[65vh] overflow-y-auto pr-2 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
          <p className="p-3.5 rounded-2xl bg-slate-100 dark:bg-zinc-800/60 text-xs font-medium text-slate-700 dark:text-zinc-300">
            {TERMS_OF_ENGAGEMENT_TEXT.summary}
          </p>

          <div className="space-y-3">
            {TERMS_OF_ENGAGEMENT_TEXT.sections.map((sec, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-1"
              >
                <h4 className="text-xs font-black text-slate-900 dark:text-zinc-100">
                  {sec.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-zinc-400 leading-normal">
                  {sec.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
