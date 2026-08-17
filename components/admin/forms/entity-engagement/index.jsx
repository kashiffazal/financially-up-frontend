"use client";

import React, { useState, useEffect } from "react";
import { Form, Button, Card, App } from "antd";
import {
  ArrowRightOutlined,
  SaveOutlined,
  CheckOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
  MailOutlined,
} from "@ant-design/icons";
import Step1EntityProfile from "./Step1EntityProfile";
import Step2ContactAddress from "./Step2ContactAddress";
import Step3DocumentsSign from "./Step3DocumentsSign";

const DRAFT_STORAGE_KEY = "FINANCIALLY_UP_ENTITY_ENGAGEMENT_DRAFT";

const STEP_ITEMS = [
  { step: 1, title: "Entity Profile", fullTitle: "Structure & ABN" },
  { step: 2, title: "Contact & Address", fullTitle: "Officer & Office" },
  { step: 3, title: "Documents & Sign", fullTitle: "ID & Engagement Terms" },
];

export default function EntityEngagementForm() {
  const { message, notification, modal } = App.useApp();
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [formKey, setFormKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});

  // Restore draft
  useEffect(() => {
    try {
      const savedDraftStr = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (savedDraftStr) {
        const savedDraft = JSON.parse(savedDraftStr);
        if (savedDraft && savedDraft.data) {
          setFormData(savedDraft.data);
          form.setFieldsValue(savedDraft.data);
          if (typeof savedDraft.step === "number" && savedDraft.step >= 0 && savedDraft.step <= 2) {
            setCurrentStep(savedDraft.step);
          }
          message.info(`Restored your saved Entity Engagement progress.`);
        }
      }
    } catch (e) {
      console.error("Draft restore error:", e);
    }
  }, [form, message]);

  // Next
  const handleNext = async () => {
    try {
      const values = await form.validateFields();
      setFormData((prev) => ({ ...prev, ...values }));

      if (currentStep < 2) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const mergedPayload = { ...formData, ...values };
        setIsSubmitting(true);
        try {
          console.log("Submitting Entity Engagement Payload:", mergedPayload);
          localStorage.removeItem(DRAFT_STORAGE_KEY);
          setFormData({});
          form.resetFields();
          setCurrentStep(0);
          setFormKey((prev) => prev + 1);

          modal.success({
            width: 520,
            icon: null,
            centered: true,
            title: null,
            content: (
              <div className="pt-2 pb-1 space-y-5 animate-fadeIn">
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shadow-inner">
                    <CheckCircleFilled className="text-3xl text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
                    Entity Engagement Submitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Your corporate onboarding application for <strong className="text-brand-primary">{mergedPayload.LegalName}</strong> has been logged.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Entity Name
                    </span>
                    <span className="text-sm font-mono font-extrabold text-brand-primary dark:text-emerald-400">
                      {mergedPayload.LegalName}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Structure
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-zinc-300">
                      {mergedPayload.TypeOfEntity}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Status
                    </span>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900">
                      Pending Review
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 space-y-2 text-xs">
                  <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                    <MailOutlined className="text-emerald-600 dark:text-emerald-400" />
                    <span>Next Steps</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-600 dark:text-zinc-300 leading-normal pl-5 list-disc">
                    <li>Our corporate tax agents will review your uploaded documents.</li>
                    <li>An official Engagement Letter will be emailed to you within 1 business day.</li>
                  </ul>
                </div>
              </div>
            ),
            okText: "Return to Form Home",
            okButtonProps: {
              className: "bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-10 px-6 rounded-xl border-none shadow-md shadow-emerald-600/20",
            },
            onOk: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          });
        } catch (apiErr) {
          message.error("Submission failed. Please try again.");
        } finally {
          setIsSubmitting(false);
        }
      }
    } catch (err) {
      message.error("Please complete all required fields on this step before proceeding.");
    }
  };

  // Prev
  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Save Draft
  const handleSaveDraft = () => {
    try {
      const currentFields = form.getFieldsValue();
      const mergedData = { ...formData, ...currentFields };
      const savedAt = new Date().toLocaleString("en-AU", { dateStyle: "medium", timeStyle: "short" });

      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify({ step: currentStep, data: mergedData, savedAt }));
      setFormData(mergedData);

      notification.success({
        title: "Draft Saved Successfully!",
        description: `Your progress (Step ${currentStep + 1}: ${STEP_ITEMS[currentStep].title}) has been saved.`,
        icon: <SaveOutlined className="text-emerald-500" />,
        placement: "topRight",
        duration: 4,
      });
    } catch (err) {
      message.error("Failed to save draft.");
    }
  };

  // Reset
  const handleClearDraft = () => {
    modal.confirm({
      title: "Reset Form & Clear Saved Draft?",
      icon: <DeleteOutlined className="text-red-500" />,
      content: "Are you sure you want to clear your saved draft and start over? All entered information will be permanently deleted.",
      okText: "Yes, Reset Form",
      okType: "danger",
      cancelText: "Cancel",
      onOk: () => {
        localStorage.removeItem(DRAFT_STORAGE_KEY);
        setFormData({});
        form.resetFields();
        setCurrentStep(0);
        setFormKey((prev) => prev + 1);
        message.success("Form reset to Step 1. All saved data cleared.");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    });
  };

  const progressPercent = Math.round(((currentStep + 1) / 3) * 100);

  return (
    <Card className="shadow-lg border border-slate-200/80 dark:border-zinc-800 rounded-3xl overflow-hidden dark:bg-zinc-950">
      {/* Executive Stepper Progress Header */}
      <div className="p-5 sm:p-6 bg-slate-50/80 dark:bg-zinc-900/60 border mb-5 border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-brand-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-emerald-600/20">
              {currentStep + 1}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400">
                Step {currentStep + 1} of 3 - {STEP_ITEMS[currentStep].fullTitle}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <span className="text-xs font-bold text-slate-700 dark:text-zinc-200">
              {progressPercent}% Completed
            </span>
            <div className="w-36 sm:w-48 h-2 bg-slate-200 dark:bg-zinc-800 rounded-full overflow-hidden shrink-0">
              <div
                className="h-full bg-brand-primary transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* 3 Equal-Width Step Stepper Cards */}
        <div className="grid grid-cols-3 gap-2 w-full pt-1">
          {STEP_ITEMS.map((item, idx) => {
            const isCurrent = idx === currentStep;
            const isCompleted = idx < currentStep;

            return (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  if (idx <= currentStep) setCurrentStep(idx);
                }}
                className={`w-full py-2.5 px-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? "bg-brand-primary text-white font-extrabold shadow-md shadow-emerald-600/20 scale-[1.01]"
                    : isCompleted
                    ? "bg-brand-primary-soft/90 text-brand-primary font-bold dark:bg-emerald-950/80 dark:text-emerald-400 border border-brand-primary/20"
                    : "bg-slate-50 dark:bg-zinc-900/80 text-slate-500 dark:text-zinc-400 border border-slate-200/60 opacity-60 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 ${
                    isCurrent
                      ? "bg-white text-brand-primary shadow-sm"
                      : isCompleted
                      ? "bg-brand-primary text-white"
                      : "border border-slate-300 dark:border-zinc-700 text-slate-500"
                  }`}
                >
                  {isCompleted ? <CheckOutlined className="text-[10px] text-white" /> : item.step}
                </div>
                <span className="text-[11px] leading-tight font-extrabold tracking-tight truncate w-full text-center mt-1">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Form Area */}
      <Form
        key={formKey}
        form={form}
        layout="vertical"
        preserve={true}
        initialValues={{}}
        requiredMark="optional"
        className="p-2 sm:p-6"
      >
        {currentStep === 0 && <Step1EntityProfile />}
        {currentStep === 1 && <Step2ContactAddress />}
        {currentStep === 2 && <Step3DocumentsSign />}
      </Form>

      {/* Footer Actions Bar */}
      <div className="mt-10 pt-6 border-t border-slate-100 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 p-2 sm:p-6 bg-slate-50/50 dark:bg-zinc-900/40 rounded-2xl">
        <div className="flex items-center gap-2 w-full sm:w-auto flex-wrap">
          {currentStep > 0 && (
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={handlePrev}
              className="rounded-xl h-11 font-semibold text-slate-700 dark:text-zinc-200"
            >
              Back
            </Button>
          )}
          <Button
            icon={<SaveOutlined />}
            onClick={handleSaveDraft}
            className="rounded-xl h-11 font-semibold text-slate-700 dark:text-zinc-200 hover:border-brand-primary"
          >
            Save Draft
          </Button>
          <Button
            danger
            type="text"
            icon={<DeleteOutlined />}
            onClick={handleClearDraft}
            className="rounded-xl h-11 font-medium text-slate-500 hover:text-red-600 hover:bg-red-50 dark:hover:bg-red-950/30 transition-colors"
          >
            Reset Form
          </Button>
        </div>

        <div className="flex items-center gap-3 w-full sm:w-auto">
          <Button
            type="primary"
            size="large"
            loading={isSubmitting}
            icon={currentStep === 2 ? <CheckOutlined /> : <ArrowRightOutlined />}
            onClick={handleNext}
            className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover h-11 px-8 rounded-xl font-extrabold text-sm shadow-md shadow-emerald-600/20"
          >
            {currentStep === 2 ? "Submit Engagement Application" : "Next: Step 3"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
