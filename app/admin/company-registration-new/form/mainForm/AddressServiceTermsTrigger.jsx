"use client";

import React, { useState } from "react";
import { Modal, Button } from "antd";
import { EnvironmentOutlined, SafetyCertificateOutlined } from "@ant-design/icons";
import { ADDRESS_SERVICE_TERMS_TEXT } from "./legalDocumentsText";

export default function AddressServiceTermsTrigger() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary dark:text-emerald-400 hover:underline cursor-pointer transition-colors"
      >
        <EnvironmentOutlined />
        <span>View Registered Office Address Terms</span>
      </button>

      <Modal
        title={
          <div className="flex items-center gap-2.5 text-base font-extrabold text-slate-900 dark:text-zinc-100">
            <SafetyCertificateOutlined className="text-brand-primary text-xl" />
            <span>{ADDRESS_SERVICE_TERMS_TEXT.title}</span>
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
            I Understand
          </Button>,
        ]}
        width={680}
        centered
        className="dark:bg-zinc-900"
      >
        <div className="py-3 space-y-4 max-h-[65vh] overflow-y-auto pr-2 text-slate-700 dark:text-zinc-300 text-xs sm:text-sm leading-relaxed">
          <p className="p-3.5 rounded-2xl bg-emerald-50/70 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 text-xs text-emerald-950 dark:text-emerald-200 font-medium">
            {ADDRESS_SERVICE_TERMS_TEXT.overview}
          </p>

          <div className="space-y-2.5">
            {ADDRESS_SERVICE_TERMS_TEXT.points.map((pt, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 text-xs text-slate-700 dark:text-zinc-300"
              >
                {pt}
              </div>
            ))}
          </div>
        </div>
      </Modal>
    </>
  );
}
