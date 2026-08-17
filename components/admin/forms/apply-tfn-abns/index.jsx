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
import Step1Selection from "./Step1Selection";
import Step2ApplicantDetails from "./Step2ApplicantDetails";
import Step3EntityDetails from "./Step3EntityDetails";
import Step4IdVerification from "./Step4IdVerification";

const DRAFT_STORAGE_KEY = "FINANCIALLY_UP_APPLY_TFN_ABN_DRAFT";

const STEP_ITEMS = [
  { step: 1, title: "Select Type", fullTitle: "TFN / ABN Category" },
  { step: 2, title: "Applicant", fullTitle: "Identity & Address" },
  { step: 3, title: "Business Info", fullTitle: "Trading & Activity" },
  { step: 4, title: "Verification", fullTitle: "ID Upload & Consent" },
];

export default function ApplyTfnAbnForm() {
  const { message, notification, modal } = App.useApp();
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [formKey, setFormKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(["Sole Trader ABN"]);
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
          if (Array.isArray(savedDraft.data.ApplyTFN_ABN)) {
            setSelectedCategories(savedDraft.data.ApplyTFN_ABN);
          }
          if (typeof savedDraft.step === "number" && savedDraft.step >= 0 && savedDraft.step <= 3) {
            setCurrentStep(savedDraft.step);
          }
          message.info(`Restored your saved TFN/ABN application progress.`);
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
      if (currentStep === 0 && (!selectedCategories || selectedCategories.length === 0)) {
        message.warning("Please select at least one application category.");
        return;
      }

      setFormData((prev) => ({ ...prev, ...values }));

      if (currentStep < 3) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const mergedPayload = { ...formData, ...values, ApplyTFN_ABN: selectedCategories };
        setIsSubmitting(true);
        try {
          console.log("Submitting TFN/ABN Payload:", mergedPayload);
          localStorage.removeItem(DRAFT_STORAGE_KEY);
          setFormData({});
          setSelectedCategories(["Sole Trader ABN"]);
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
                    Application Lodged Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Your TFN/ABN application for <strong className="text-brand-primary">{mergedPayload.firstName} {mergedPayload.lastName}</strong> has been logged with our registered tax agent team.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Categories
                    </span>
                    <span className="text-sm font-bold text-brand-primary dark:text-emerald-400">
                      {selectedCategories.join(", ")}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Contact Email
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-zinc-300">
                      {mergedPayload.email}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Status
                    </span>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900">
                      Pending ATO / ABR Lodgement
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 space-y-2 text-xs">
                  <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                    <MailOutlined className="text-emerald-600 dark:text-emerald-400" />
                    <span>Next Steps</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-600 dark:text-zinc-300 leading-normal pl-5 list-disc">
                    <li>Our agents will review ID documents and submit to the Australian Business Register.</li>
                    <li>Your ABN / TFN notice will be emailed directly once issued by the ATO.</li>
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
      const mergedData = { ...formData, ...currentFields, ApplyTFN_ABN: selectedCategories };
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
        setSelectedCategories(["Sole Trader ABN"]);
        form.resetFields();
        setCurrentStep(0);
        setFormKey((prev) => prev + 1);
        message.success("Form reset to Step 1. All saved data cleared.");
        window.scrollTo({ top: 0, behavior: "smooth" });
      },
    });
  };

  const progressPercent = Math.round(((currentStep + 1) / 4) * 100);

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
                Step {currentStep + 1} of 4 - {STEP_ITEMS[currentStep].fullTitle}
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

        {/* 4 Equal-Width Step Stepper Cards */}
        <div className="grid grid-cols-4 gap-2 w-full pt-1">
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
        {currentStep === 0 && (
          <Step1Selection
            form={form}
            selectedCategories={selectedCategories}
            setSelectedCategories={setSelectedCategories}
          />
        )}
        {currentStep === 1 && <Step2ApplicantDetails />}
        {currentStep === 2 && <Step3EntityDetails selectedCategories={selectedCategories} />}
        {currentStep === 3 && <Step4IdVerification />}
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
            icon={currentStep === 3 ? <CheckOutlined /> : <ArrowRightOutlined />}
            onClick={handleNext}
            className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover h-11 px-8 rounded-xl font-extrabold text-sm shadow-md shadow-emerald-600/20"
          >
            {currentStep === 3 ? "Submit TFN/ABN Application" : "Next: Step 4"}
          </Button>
        </div>
      </div>
    </Card>
  );
}
