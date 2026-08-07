"use client";

import React, { useState, useEffect } from "react";
import { Form, Button, Card, Steps, message, Modal, notification } from "antd";
import {
  ArrowRightOutlined,
  SaveOutlined,
  CheckOutlined,
  SmileOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
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

export default function IndividualEngagementClientForm() {
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [formKey, setFormKey] = useState(0);
  const [hasViewedSchedule, setHasViewedSchedule] = useState(false);
  const [formData, setFormData] = useState({
    services: [],
    entityService: null,
  });

  // Auto-restore saved draft from localStorage on mount
  useEffect(() => {
    try {
      const savedDraftStr = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (savedDraftStr) {
        const savedDraft = JSON.parse(savedDraftStr);
        if (savedDraft && savedDraft.data) {
          setFormData(savedDraft.data);
          form.setFieldsValue(savedDraft.data);
          if (typeof savedDraft.step === "number" && savedDraft.step >= 0 && savedDraft.step <= 9) {
            setCurrentStep(savedDraft.step);
          }
          notification.info({
            message: "Draft Restored",
            description: `Restored your previously saved progress from ${savedDraft.savedAt || "a previous session"}.`,
            placement: "topRight",
            duration: 4,
          });
        }
      }
    } catch (e) {
      console.error("Error loading saved form draft:", e);
    }
  }, [form]);

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
        localStorage.removeItem(DRAFT_STORAGE_KEY);

        Modal.success({
          title: "Engagement Submitted Successfully!",
          content: (
            <div className="space-y-3 pt-2">
              <p className="text-sm text-slate-600 dark:text-zinc-300">
                Your Individual Client Engagement Application has been received
                and logged.
              </p>
              <div className="p-3 rounded-xl bg-slate-100 dark:bg-zinc-800 text-xs font-mono">
                <div>
                  <strong>Status:</strong> Pending Review
                </div>
                <div>
                  <strong>Reference:</strong> ENG-
                  {Math.floor(100000 + Math.random() * 900000)}
                </div>
                <div>
                  <strong>Submitted At:</strong>{" "}
                  {new Date().toLocaleString("en-AU")}
                </div>
              </div>
              <p className="text-xs text-slate-500">
                Our accountants will review your submission and issue a formal
                Engagement Acceptance Notice shortly.
              </p>
            </div>
          ),
        });
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
        message: "Draft Saved Successfully!",
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
    Modal.confirm({
      title: "Reset Form & Clear Saved Draft?",
      icon: <DeleteOutlined className="text-red-500" />,
      content: "Are you sure you want to clear your saved draft and start over from scratch? All entered information will be permanently deleted.",
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
          {currentStep === 4 && <Step5BasGstSoleTrader form={form} />}
          {currentStep === 5 && <Step6DocumentVerification form={form} />}
          {currentStep === 6 && <Step7AuthoritiesBank form={form} />}
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
