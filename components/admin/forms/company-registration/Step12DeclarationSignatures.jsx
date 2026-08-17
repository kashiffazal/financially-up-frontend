"use client";

import React, { useRef } from "react";
import { Tag } from "antd";
import {
  SafetyCertificateOutlined,
  CalendarOutlined,
  ClearOutlined,
} from "@ant-design/icons";
import { AntInput } from "@/services/antdFields";

export default function Step12DeclarationSignatures({ form }) {
  const canvas1Ref = useRef(null);
  const canvas2Ref = useRef(null);

  const clearCanvas1 = () => {
    if (canvas1Ref.current) {
      const ctx = canvas1Ref.current.getContext("2d");
      ctx.clearRect(0, 0, canvas1Ref.current.width, canvas1Ref.current.height);
      form.setFieldsValue({ signatory1Signature: "" });
    }
  };

  const clearCanvas2 = () => {
    if (canvas2Ref.current) {
      const ctx = canvas2Ref.current.getContext("2d");
      ctx.clearRect(0, 0, canvas2Ref.current.width, canvas2Ref.current.height);
      form.setFieldsValue({ signatory2Signature: "" });
    }
  };

  const initDrawing = (canvas, fieldName) => {
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "#0f172a";

    let drawing = false;

    const startDraw = (e) => {
      drawing = true;
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      ctx.beginPath();
      ctx.moveTo(clientX - rect.left, clientY - rect.top);
    };

    const draw = (e) => {
      if (!drawing) return;
      e.preventDefault();
      const rect = canvas.getBoundingClientRect();
      const clientX = e.clientX || (e.touches && e.touches[0].clientX);
      const clientY = e.clientY || (e.touches && e.touches[0].clientY);
      ctx.lineTo(clientX - rect.left, clientY - rect.top);
      ctx.stroke();
    };

    const stopDraw = () => {
      if (!drawing) return;
      drawing = false;
      ctx.closePath();
      const dataUrl = canvas.toDataURL("image/png");
      form.setFieldsValue({ [fieldName]: dataUrl });
    };

    canvas.onmousedown = startDraw;
    canvas.onmousemove = draw;
    canvas.onmouseup = stopDraw;
    canvas.ontouchstart = startDraw;
    canvas.ontouchmove = draw;
    canvas.ontouchend = stopDraw;
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 12 of 12
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Legal Declarations & Execution
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Client Declaration, Consent & Authorisation
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Please review and accept each of the six statutory declarations below and provide your digital signature to authorize lodgement.
        </p>
      </div>

      {/* 6 Mandatory Statutory Declarations */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex items-center gap-2 mb-1">
          <SafetyCertificateOutlined className="text-brand-primary text-sm" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200">
            Statutory Declarations
          </span>
        </div>

        <div className="space-y-3 text-xs text-slate-700 dark:text-zinc-300">
          {/* Declaration 1 */}
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 space-y-2">
            <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 text-xs">
              Declaration 1: Accuracy of Information
            </h4>
            <p className="text-slate-600 dark:text-zinc-400 leading-normal">
              I/we confirm that the information in this form is true, complete and not misleading.
            </p>
            <AntInput
              type="checkbox"
              name="declaration1"
              group={[{ value: "accepted", label: "Accept *" }]}
              reqMsg="You must accept Declaration 1"
              containerClassName="!mb-0"
            />
          </div>

          {/* Declaration 2 */}
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 space-y-2">
            <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 text-xs">
              Declaration 2: AML/CTF, CDD and Verification Authority
            </h4>
            <p className="text-slate-600 dark:text-zinc-400 leading-normal">
              I/we authorise Financially Up to use this information to assess AML/CTF risk, complete CDD, verify identity information, conduct PEP/sanctions/adverse media screening, and prepare/lodge company registration documentation.
            </p>
            <AntInput
              type="checkbox"
              name="declaration2"
              group={[{ value: "accepted", label: "Accept *" }]}
              reqMsg="You must accept Declaration 2"
              containerClassName="!mb-0"
            />
          </div>

          {/* Declaration 3 */}
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 space-y-2">
            <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 text-xs">
              Declaration 3: Director, Secretary and Member Consent
            </h4>
            <p className="text-slate-600 dark:text-zinc-400 leading-normal">
              I/we confirm that all proposed directors, secretaries and members have consented or will sign consents before lodgement.
            </p>
            <AntInput
              type="checkbox"
              name="declaration3"
              group={[{ value: "accepted", label: "Accept *" }]}
              reqMsg="You must accept Declaration 3"
              containerClassName="!mb-0"
            />
          </div>

          {/* Declaration 4 */}
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 space-y-2">
            <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 text-xs">
              Declaration 4: Beneficial Ownership Disclosure
            </h4>
            <p className="text-slate-600 dark:text-zinc-400 leading-normal">
              I/we confirm that all beneficial owners/controllers have been disclosed, including any person who controls the company through indirect ownership, agreements, nominees, funding or practical influence.
            </p>
            <AntInput
              type="checkbox"
              name="declaration4"
              group={[{ value: "accepted", label: "Accept *" }]}
              reqMsg="You must accept Declaration 4"
              containerClassName="!mb-0"
            />
          </div>

          {/* Declaration 5 */}
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 space-y-2">
            <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 text-xs">
              Declaration 5: Further Information / Decline / AUSTRAC
            </h4>
            <p className="text-slate-600 dark:text-zinc-400 leading-normal">
              I/we understand Financially Up may request further information, decline, suspend or exit the matter, or make reports to AUSTRAC if required by law.
            </p>
            <AntInput
              type="checkbox"
              name="declaration5"
              group={[{ value: "accepted", label: "Accept *" }]}
              reqMsg="You must accept Declaration 5"
              containerClassName="!mb-0"
            />
          </div>

          {/* Declaration 6 */}
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 space-y-2">
            <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 text-xs">
              Declaration 6: Legal Advice Limitation
            </h4>
            <p className="text-slate-600 dark:text-zinc-400 leading-normal">
              I/we understand Financially Up cannot provide legal advice unless separately agreed and may recommend independent legal advice for constitutions, shareholder agreements, nominee arrangements, trusts or complex structures.
            </p>
            <AntInput
              type="checkbox"
              name="declaration6"
              group={[{ value: "accepted", label: "Accept *" }]}
              reqMsg="You must accept Declaration 6"
              containerClassName="!mb-0"
            />
          </div>
        </div>
      </div>

      {/* Authorised Signatories */}
      <div className="p-5 rounded-2xl bg-slate-50/70 dark:bg-zinc-900/50 border border-slate-200/80 dark:border-zinc-800 space-y-5">
        <span className="text-xs font-black uppercase tracking-wider text-slate-800 dark:text-zinc-200 block mb-1">
          Authorised Client Execution Signatures
        </span>

        {/* Signatory 1 */}
        <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-brand-primary dark:text-emerald-400 block">
            Primary Authorised Signatory (Signatory 1) *
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <AntInput
              type="text"
              name="signatory1Name"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Signatory 1 Full Legal Name *</span>}
              placeholder="e.g. Jonathan Alexander Smith"
              reqMsg="Signatory 1 name is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntInput
              type="select"
              name="signatory1Capacity"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Legal Capacity *</span>}
              options={["Individual client", "Director/officeholder", "Trustee", "Partner", "Authorised agent", "Other"]}
              emptyFirstVal="- Select Capacity -"
              reqMsg="Signatory 1 capacity is required"
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntInput
              type="datepicker"
              name="signatory1Date"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Signature Date *</span>}
              format="DD/MM/YYYY"
              reqMsg="Signature date is required"
              preIconAnt={<CalendarOutlined className="text-slate-400" />}
              size="large"
              className="w-full rounded-xl"
              containerClassName="!mb-0"
            />
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                Draw Digital Signature (Signatory 1) *
              </span>
              <button
                type="button"
                onClick={clearCanvas1}
                className="text-xs text-red-500 hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <ClearOutlined /> Clear
              </button>
            </div>
            <div className="border border-slate-300 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-inner touch-none">
              <canvas
                ref={(node) => {
                  canvas1Ref.current = node;
                  if (node) initDrawing(node, "signatory1Signature");
                }}
                width={600}
                height={120}
                className="w-full h-[120px] cursor-crosshair block"
              />
            </div>
          </div>
        </div>

        {/* Signatory 2 (Optional / Joint) */}
        <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/60 dark:border-zinc-800 space-y-4">
          <span className="text-xs font-black uppercase tracking-wider text-slate-700 dark:text-zinc-300 block">
            Secondary Authorised Signatory (Signatory 2 — Optional / Joint Director)
          </span>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <AntInput
              type="text"
              name="signatory2Name"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Signatory 2 Full Name</span>}
              placeholder="e.g. Mary Jane Watson"
              noRequired={true}
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntInput
              type="select"
              name="signatory2Capacity"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Legal Capacity</span>}
              options={["Individual client", "Director/officeholder", "Trustee", "Partner", "Authorised agent", "Other"]}
              emptyFirstVal="- Select Capacity -"
              noRequired={true}
              size="large"
              className="rounded-xl"
              containerClassName="!mb-0"
            />

            <AntInput
              type="datepicker"
              name="signatory2Date"
              label={<span className="font-bold text-slate-800 dark:text-zinc-200">Signature Date</span>}
              format="DD/MM/YYYY"
              noRequired={true}
              preIconAnt={<CalendarOutlined className="text-slate-400" />}
              size="large"
              className="w-full rounded-xl"
              containerClassName="!mb-0"
            />
          </div>

          <div className="space-y-1 pt-1">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-800 dark:text-zinc-200">
                Draw Digital Signature (Signatory 2)
              </span>
              <button
                type="button"
                onClick={clearCanvas2}
                className="text-xs text-red-500 hover:underline inline-flex items-center gap-1 font-semibold"
              >
                <ClearOutlined /> Clear
              </button>
            </div>
            <div className="border border-slate-300 dark:border-zinc-700 rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden shadow-inner touch-none">
              <canvas
                ref={(node) => {
                  canvas2Ref.current = node;
                  if (node) initDrawing(node, "signatory2Signature");
                }}
                width={600}
                height={120}
                className="w-full h-[120px] cursor-crosshair block"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
