"use client";

import React, { useState, useEffect } from "react";
import { Form, Button, Card, Steps, App } from "antd";
import {
  ArrowRightOutlined,
  SaveOutlined,
  CheckOutlined,
  SmileOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
  MailOutlined,
} from "@ant-design/icons";
import Step1ServiceSelection from "./Step1ServiceSelection";
import Step2PersonalInformation from "./Step2PersonalInformation";
import Step3ResidencyFamily from "./Step3ResidencyFamily";
import Step4IncomeProfile from "./Step4IncomeProfile";
import Step5BasGstSoleTrader from "./Step5BasGstSoleTrader";
import Step6DocumentVerification from "./Step6DocumentVerification";
import Step7AuthoritiesBank from "./Step7AuthoritiesBank";
import Step8EngagementSchedule from "./Step8EngagementSchedule";
import Step9LegalConsents from "./Step9LegalConsents";
import Step10ElectronicSignature from "./Step10ElectronicSignature";
import { HTTP } from "@/services";

const DRAFT_STORAGE_KEY = "FINANCIALLY_UP_INDIVIDUAL_ENGAGEMENT_DRAFT";

// 10 Steps Specifications & Short Titles
const STEP_ITEMS = [
  { step: 1, title: "Services", fullTitle: "Service Selection" },
  { step: 2, title: "Personal", fullTitle: "Personal Details" },
  { step: 3, title: "Residency", fullTitle: "Residency & Family" },
  { step: 4, title: "Income", fullTitle: "Income & Tax Profile" },
  { step: 5, title: "BAS / GST", fullTitle: "Sole Trader BAS & GST" },
  { step: 6, title: "Identity", fullTitle: "ID Verification" },
  { step: 7, title: "Authorities", fullTitle: "ATO & Bank Authorities" },
  { step: 8, title: "Schedule", fullTitle: "Fee Schedule" },
  { step: 9, title: "Consents", fullTitle: "Legal Agreements" },
  { step: 10, title: "Signature", fullTitle: "E-Signature & Submit" },
];

const getInitialSavedDraft = () => {
  if (typeof window === "undefined") return null;
  try {
    const savedDraftStr = localStorage.getItem(DRAFT_STORAGE_KEY);
    if (savedDraftStr) {
      const savedDraft = JSON.parse(savedDraftStr);
      if (savedDraft && savedDraft.data) return savedDraft;
    }
  } catch (e) {
    console.error("Error loading saved form draft:", e);
  }
  return null;
};

export default function IndividualEngagementClientForm() {
  const { message, notification, modal } = App.useApp();
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(() => {
    const d = getInitialSavedDraft();
    return typeof d?.step === "number" && d.step >= 0 && d.step <= 9 ? d.step : 0;
  });
  const [formKey, setFormKey] = useState(0);
  const [hasViewedSchedule, setHasViewedSchedule] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState(() => {
    const d = getInitialSavedDraft();
    return d?.data || {
      services: [],
      entityService: null,
    };
  });

  // Auto-restore form field values from draft on mount
  useEffect(() => {
    const savedDraft = getInitialSavedDraft();
    if (savedDraft && savedDraft.data) {
      form.setFieldsValue(savedDraft.data);
      message.info(
        `Restored your previously saved progress from ${savedDraft.savedAt || "a previous session"}.`,
      );
    }
  }, [form, message]);

  // Handle Next Button Click across steps
  const handleNext = async () => {
    try {
      // Validate current step fields
      const values = await form.validateFields();
      setFormData((prev) => ({ ...prev, ...values }));

      // Special check for Step 8 (Engagement Schedule view requirement)
      if (currentStep === 7 && !hasViewedSchedule) {
        message.warning(
          "Please click 'View Full Engagement Schedule' to review your scope of work before proceeding.",
        );
        return;
      }

      if (currentStep < 9) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Step 10 Submission Trigger
        const mergedPayload = { ...formData, ...values };
        setIsSubmitting(true);
        try {
          const res = await HTTP("POST", "/new-individual-engagements", mergedPayload);

          // Immediately wipe local storage draft & reset form state
          localStorage.removeItem(DRAFT_STORAGE_KEY);
          const emptyState = { services: [], entityService: null };
          setFormData(emptyState);
          form.resetFields();
          form.setFieldsValue(emptyState);
          setCurrentStep(0);
          setHasViewedSchedule(false);
          setFormKey((prev) => prev + 1);

          modal.success({
            width: 520,
            icon: null,
            centered: true,
            title: null,
            content: (
              <div className="pt-2 pb-1 space-y-5 animate-fadeIn">
                {/* Header Icon & Title */}
                <div className="text-center space-y-2">
                  <div className="w-14 h-14 mx-auto rounded-full bg-emerald-100 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 flex items-center justify-center shadow-inner">
                    <CheckCircleFilled className="text-3xl text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
                    Application Submitted Successfully
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Thank you for choosing Financially Up. Your Individual
                    Client Engagement Notice has been securely logged.
                  </p>
                </div>

                {/* Reference Details Box */}
                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Reference Number
                    </span>
                    <span className="text-sm font-mono font-extrabold text-brand-primary dark:text-emerald-400 px-2.5 py-0.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200/60 dark:border-emerald-900">
                      {res.referenceNumber || "NENG-2026-0001"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Engagement Status
                    </span>
                    <span className="text-xs font-bold text-amber-700 dark:text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-900">
                      Pending Tax Agent Review
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Submitted At
                    </span>
                    <span className="text-xs font-medium text-slate-700 dark:text-zinc-300 font-mono">
                      {new Date().toLocaleString("en-AU", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </span>
                  </div>
                </div>

                {/* Next Steps Checklist */}
                <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 space-y-2 text-xs">
                  <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                    <MailOutlined className="text-emerald-600 dark:text-emerald-400" />
                    <span>Next Steps</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-600 dark:text-zinc-300 leading-normal pl-5 list-disc">
                    <li>
                      A copy of your signed Client Engagement Notice has been
                      sent to your email.
                    </li>
                    <li>
                      Our Tax Agent compliance team will review your application
                      within 1 business day.
                    </li>
                  </ul>
                </div>
              </div>
            ),
            okText: "Return to Form Home",
            okButtonProps: {
              className:
                "bg-emerald-600 hover:bg-emerald-700 text-white font-bold h-10 px-6 rounded-xl border-none shadow-md shadow-emerald-600/20",
            },
            onOk: () => window.scrollTo({ top: 0, behavior: "smooth" }),
            onCancel: () => window.scrollTo({ top: 0, behavior: "smooth" }),
          });
        } catch (apiErr) {
          message.error(
            `Submission failed: ${apiErr.message || "Server connection error"}`,
          );
        } finally {
          setIsSubmitting(false);
        }
      }
    } catch (errorInfo) {
      message.error(
        "Please complete all required fields on this step before proceeding.",
      );
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Fully functional Save Draft handler storing data & step in localStorage
  const handleSaveDraft = () => {
    try {
      const currentFields = form.getFieldsValue();
      const mergedData = { ...formData, ...currentFields };
      const savedAt = new Date().toLocaleString("en-AU", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      const draftPayload = {
        step: currentStep,
        data: mergedData,
        savedAt,
      };

      localStorage.setItem(DRAFT_STORAGE_KEY, JSON.stringify(draftPayload));
      setFormData(mergedData);

      notification.success({
        title: "Draft Saved Successfully!",
        description: `Your form progress (Step ${currentStep + 1}: ${STEP_ITEMS[currentStep].title}) has been saved to your device. You can close this window and return anytime.`,
        icon: <SaveOutlined className="text-emerald-500" />,
        placement: "topRight",
        duration: 4,
      });
    } catch (err) {
      message.error("Failed to save draft. Please try again.");
    }
  };

  // Clear Draft & Reset Form from scratch
  const handleClearDraft = () => {
    modal.confirm({
      title: "Reset Form & Clear Saved Draft?",
      icon: <DeleteOutlined className="text-red-500" />,
      content:
        "Are you sure you want to clear your saved draft and start over from scratch? All entered information will be permanently deleted.",
      okText: "Yes, Reset Form",
      okType: "danger",
      cancelText: "Cancel",
      maskClosable: true,
      onOk: () => {
        try {
          localStorage.removeItem(DRAFT_STORAGE_KEY);
          const emptyState = {
            services: [],
            entityService: null,
          };
          setFormData(emptyState);
          form.resetFields();
          form.setFieldsValue(emptyState);
          setCurrentStep(0);
          setHasViewedSchedule(false);
          setFormKey((prev) => prev + 1);
          message.success("Form reset to Step 1. All saved data cleared.");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } catch (err) {
          message.error("Failed to reset form.");
        }
      },
    });
  };

  const progressPercent = Math.round(((currentStep + 1) / 10) * 100);

  return (
    <>
      {/* Wizard Card Container */}
      <Card className="shadow-lg border border-slate-200/80 dark:border-zinc-800 rounded-3xl overflow-hidden dark:bg-zinc-950">
        {/* Executive 10-Step Progress Header */}
        <div className="p-5 sm:p-6 bg-slate-50/80 dark:bg-zinc-900/60 border mb-5 border-slate-200/80 dark:border-zinc-800 space-y-4">
          {/* Top Progress Row */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-2xl bg-brand-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-emerald-600/20">
                {currentStep + 1}
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400">
                  Step {currentStep + 1} of 10 -{" "}
                  {STEP_ITEMS[currentStep].fullTitle}
                </div>
              </div>
            </div>

            {/* Visual Progress Line with Percentage */}
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

          {/* 10 Equal-Width Step Stepper Cards (Number Top, Title Bottom) */}
          <div className="grid grid-cols-5 sm:grid-cols-10 gap-1.5 sm:gap-2 w-full pt-1">
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
                  className={`w-full py-2 px-1.5 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer ${
                    isCurrent
                      ? "bg-brand-primary text-white font-extrabold shadow-md shadow-emerald-600/20 scale-[1.02]"
                      : isCompleted
                        ? "bg-brand-primary-soft/90 text-brand-primary font-bold dark:bg-emerald-950/80 dark:text-emerald-400 border border-brand-primary/20 dark:border-emerald-800/40"
                        : "bg-slate-50 dark:bg-zinc-900/80 text-slate-500 dark:text-zinc-400 border border-slate-200/60 dark:border-zinc-800 opacity-60 hover:opacity-100"
                  }`}
                >
                  {/* Top Circle Badge */}
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] font-black shrink-0 transition-transform ${
                      isCurrent
                        ? "bg-white text-brand-primary shadow-sm"
                        : isCompleted
                          ? "bg-brand-primary text-white"
                          : "border border-slate-300 dark:border-zinc-700 text-slate-500 dark:text-zinc-400"
                    }`}
                  >
                    {isCompleted ? (
                      <CheckOutlined className="text-[10px] text-white font-black" />
                    ) : (
                      item.step
                    )}
                  </div>

                  {/* Bottom Title */}
                  <span className="text-[11px] leading-tight font-extrabold tracking-tight truncate w-full text-center mt-1">
                    {item.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Step Content */}
        <Form
          key={formKey}
          form={form}
          layout="vertical"
          preserve={true}
          initialValues={formData}
          requiredMark="optional"
          className="p-2 sm:p-6"
        >
          {currentStep === 0 && (
            <Step1ServiceSelection form={form} formData={formData} />
          )}
          {currentStep === 1 && <Step2PersonalInformation form={form} />}
          {currentStep === 2 && <Step3ResidencyFamily form={form} />}
          {currentStep === 3 && <Step4IncomeProfile form={form} />}
          {currentStep === 4 && (
            <Step5BasGstSoleTrader form={form} formData={formData} />
          )}
          {currentStep === 5 && <Step6DocumentVerification form={form} />}
          {currentStep === 6 && (
            <Step7AuthoritiesBank form={form} formData={formData} />
          )}
          {currentStep === 7 && (
            <Step8EngagementSchedule
              form={form}
              formData={formData}
              onScheduleViewed={() => setHasViewedSchedule(true)}
            />
          )}
          {currentStep === 8 && <Step9LegalConsents form={form} />}
          {currentStep === 9 && <Step10ElectronicSignature form={form} />}
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
              icon={
                currentStep === 9 ? <CheckOutlined /> : <ArrowRightOutlined />
              }
              onClick={handleNext}
              className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover h-11 px-8 rounded-xl font-extrabold text-sm shadow-md shadow-emerald-600/20"
            >
              {currentStep === 9
                ? "Submit Engagement Application"
                : `Next: Step ${currentStep + 2}`}
            </Button>
          </div>
        </div>
      </Card>
    </>
  );
}
