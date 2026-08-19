"use client";

import React, { useState, useEffect, useRef } from "react";
import { Form, Button, Card, App, message as staticMessage, notification as staticNotification, Modal as staticModal } from "antd";
import {
  ArrowRightOutlined,
  SaveOutlined,
  CheckOutlined,
  DeleteOutlined,
  ArrowLeftOutlined,
  CheckCircleFilled,
  MailOutlined,
} from "@ant-design/icons";

import Step1EngagementService from "./Step1EngagementService";
import Step2CompanyDetails from "./Step2CompanyDetails";
import Step3AddressesService from "./Step3AddressesService";
import Step4Officeholders from "./Step4Officeholders";
import Step5ShareStructure from "./Step5ShareStructure";
import Step6BeneficialOwnership from "./Step6BeneficialOwnership";
import Step7CddAmlQuestions from "./Step7CddAmlQuestions";
import Step8SourceOfFundsWealth from "./Step8SourceOfFundsWealth";
import Step9NomineeTrusteeArrangements from "./Step9NomineeTrusteeArrangements";
import Step10OptionalTaxServices from "./Step10OptionalTaxServices";
import Step11DocumentUploads from "./Step11DocumentUploads";
import Step12DeclarationSignatures from "./Step12DeclarationSignatures";
import { createNewCompanyRegistration } from "@/services/newCompanyRegistration.service";

const DRAFT_STORAGE_KEY = "FINANCIALLY_UP_COMPANY_REGISTRATION_DRAFT";

const STEP_ITEMS = [
  { step: 1, title: "Engagement", fullTitle: "Client Contact & Service" },
  { step: 2, title: "Company", fullTitle: "ASIC Company Details" },
  { step: 3, title: "Addresses", fullTitle: "Addresses & Office Facility" },
  { step: 4, title: "Officeholders", fullTitle: "Directors & Secretaries" },
  { step: 5, title: "Shares", fullTitle: "Share Structure & Members" },
  { step: 6, title: "Beneficial Owners", fullTitle: "Beneficial Ownership & Control" },
  { step: 7, title: "CDD / AML", fullTitle: "Customer Due Diligence" },
  { step: 8, title: "Source of Funds", fullTitle: "Funds & Wealth Origin" },
  { step: 9, title: "Nominees", fullTitle: "Nominee & Trustee Roles" },
  { step: 10, title: "Tax & Bank", fullTitle: "Optional ATO & Bank Setup" },
  { step: 11, title: "Documents", fullTitle: "Supporting Attachments" },
  { step: 12, title: "Declarations", fullTitle: "Statutory Declarations & Sign" },
];

export default function CompanyRegistrationForm() {
  const app = App.useApp?.() || {};
  const message = app.message || staticMessage;
  const notification = app.notification || staticNotification;
  const modal = app.modal || staticModal;
  const [form] = Form.useForm();
  const [currentStep, setCurrentStep] = useState(0);
  const [formKey, setFormKey] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({});
  const stepRefs = useRef([]);

  // Auto-scroll stepper into view when step changes
  useEffect(() => {
    if (stepRefs.current && stepRefs.current[currentStep]) {
      stepRefs.current[currentStep].scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  }, [currentStep]);

  // Repeatable subform state
    const [officeholders, setOfficeholders] = useState([
    {
      id: 1,
      roles: [],
      fullName: "",
      formerNames: "",
      dob: null,
      birthCity: "",
      birthState: "",
      birthCountry: undefined,
      residentialAddress: "",
      email: "",
      mobile: "",
      occupation: "",
      citizenship: "",
      taxResidence: "",
      isAustralianResidentDirector: undefined,
      directorIdStatus: undefined,
      directorIdNumber: "",
      idDocType: undefined,
      idDocNumber: "",
      pepStatus: undefined,
      sanctionsDeclaration: undefined,
      sourceOfWealth: "",
      officerConsentAccepted: [],
      officerSignature: "",
      officerSignatureDate: null,
    },
  ]);

    const [shareholders, setShareholders] = useState([
    {
      id: 1,
      fullName: "",
      memberType: undefined,
      address: "",
      shareClass: undefined,
      numberOfShares: "",
      amountPaidPerShare: "",
      amountUnpaidPerShare: "",
      isBeneficiallyHeld: undefined,
      heldForWhom: "",
      isTrusteeOrNominee: undefined,
      trusteeDetails: "",
      isCorporateEntity: undefined,
      corporateOwnershipChain: "",
      memberConsentAccepted: [],
    },
  ]);

    const [beneficialOwners, setBeneficialOwners] = useState([
    {
      id: 1,
      fullName: "",
      dob: null,
      address: "",
      ownershipPercentage: "",
      holdingType: undefined,
      howControlIsHeld: "",
      idVerificationProvided: undefined,
    },
  ]);

  // Restore draft on mount
  useEffect(() => {
    try {
      const savedDraftStr = localStorage.getItem(DRAFT_STORAGE_KEY);
      if (savedDraftStr) {
        const savedDraft = JSON.parse(savedDraftStr);
        if (savedDraft && savedDraft.data) {
          setFormData(savedDraft.data);
          form.setFieldsValue(savedDraft.data);
          if (Array.isArray(savedDraft.data._officeholders)) {
            setOfficeholders(savedDraft.data._officeholders);
          }
          if (Array.isArray(savedDraft.data._shareholders)) {
            setShareholders(savedDraft.data._shareholders);
          }
          if (Array.isArray(savedDraft.data._beneficialOwners)) {
            setBeneficialOwners(savedDraft.data._beneficialOwners);
          }
          if (
            typeof savedDraft.step === "number" &&
            savedDraft.step >= 0 &&
            savedDraft.step <= 11
          ) {
            setCurrentStep(savedDraft.step);
          }
          message.info(`Restored your saved Company Registration progress from ${savedDraft.savedAt || "a previous session"}.`);
        }
      }
    } catch (e) {
      console.error("Draft restore error:", e);
    }
  }, [form, message]);

  // Next step
  const handleNext = async () => {
    try {
      const values = await form.validateFields();
      const updatedData = {
        ...formData,
        ...values,
        _officeholders: officeholders,
        _shareholders: shareholders,
        _beneficialOwners: beneficialOwners,
      };
      setFormData(updatedData);

      if (currentStep < 11) {
        setCurrentStep((prev) => prev + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        // Final Submission
        setIsSubmitting(true);
        try {
          const payload = {
            ...updatedData,
            officeholders,
            shareholders,
            beneficialOwners,
            terms_version: "v1.0",
            terms_accepted: true,
            privacy_notice_version: "v1.0",
            privacy_notice_acknowledged: true,
          };
          
          const result = await createNewCompanyRegistration(payload);
          const refNumber = result?.data?.referenceNumber || "CREG-" + Date.now();

          localStorage.removeItem(DRAFT_STORAGE_KEY);
          setFormData({});
          form.resetFields();
          setCurrentStep(0);
          setFormKey((prev) => prev + 1);

          modal.success({
            width: 540,
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
                    Company Registration Application Lodged
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 max-w-sm mx-auto leading-relaxed">
                    Your incorporation application for <strong className="text-brand-primary dark:text-emerald-400">{updatedData.companyName1 || "Proposed Company"}</strong> has been received by our ASIC corporate agent team.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-200/80 dark:border-zinc-800 space-y-3">
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Proposed Name (1st Pref)
                    </span>
                    <span className="text-sm font-mono font-extrabold text-brand-primary dark:text-emerald-400">
                      {updatedData.companyName1 || "Apex Enterprises Pty Ltd"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Structure / State
                    </span>
                    <span className="text-xs font-bold text-slate-700 dark:text-zinc-300">
                      {updatedData.companyType || "Proprietary company limited by shares"} ({updatedData.jurisdictionState || "NSW"})
                    </span>
                  </div>
                  <div className="flex items-center justify-between border-b border-slate-200/60 dark:border-zinc-800 pb-2.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Reference Number
                    </span>
                    <span className="text-xs font-mono font-bold text-slate-800 dark:text-zinc-200">
                      {refNumber}
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-0.5">
                    <span className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
                      Status
                    </span>
                    <span className="text-xs font-bold text-emerald-700 dark:text-emerald-300 px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-900">
                      Pending ASIC Form 201 Lodgement
                    </span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-emerald-50/60 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/50 space-y-2 text-xs">
                  <div className="font-bold text-emerald-900 dark:text-emerald-200 flex items-center gap-1.5">
                    <MailOutlined className="text-emerald-600 dark:text-emerald-400" />
                    <span>Next Steps</span>
                  </div>
                  <ul className="space-y-1.5 text-slate-600 dark:text-zinc-300 leading-normal pl-5 list-disc">
                    <li>Our ASIC registered agents will review Director IDs and verify name availability.</li>
                    <li>Form 201 will be submitted directly to the ASIC corporate register gateway.</li>
                    <li>Your ASIC Certificate of Registration, ACN, and Company Constitution will be emailed upon issuance.</li>
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

  // Prev step
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
      const mergedData = {
        ...formData,
        ...currentFields,
        _officeholders: officeholders,
        _shareholders: shareholders,
        _beneficialOwners: beneficialOwners,
      };
      const savedAt = new Date().toLocaleString("en-AU", {
        dateStyle: "medium",
        timeStyle: "short",
      });

      localStorage.setItem(
        DRAFT_STORAGE_KEY,
        JSON.stringify({ step: currentStep, data: mergedData, savedAt })
      );
      setFormData(mergedData);

      notification.success({
        // message: "Draft Saved Successfully!",
        title: "Draft Saved Successfully!",
        description: `Your company registration progress (Step ${currentStep + 1}: ${STEP_ITEMS[currentStep].title}) has been saved to your device.`,
        icon: <SaveOutlined className="text-emerald-500" />,
        placement: "topRight",
        duration: 4,
      });
    } catch (err) {
      message.error("Failed to save draft.");
    }
  };

  // Reset Form
  const handleClearDraft = () => {
    modal.confirm({
      title: "Reset Form & Clear Saved Draft?",
      icon: <DeleteOutlined className="text-red-500" />,
      content: "Are you sure you want to clear your saved draft and start over from scratch? All entered company and director information will be permanently deleted.",
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

  const progressPercent = Math.round(((currentStep + 1) / 12) * 100);

  return (
    <Card className="shadow-lg border border-slate-200/80 dark:border-zinc-800 rounded-3xl overflow-hidden dark:bg-zinc-950">
      {/* Executive 12-Step Progress Header */}
      <div className="p-5 sm:p-6 bg-slate-50/80 dark:bg-zinc-900/60 border mb-5 border-slate-200/80 dark:border-zinc-800 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-2xl bg-brand-primary text-white font-extrabold text-sm flex items-center justify-center shadow-md shadow-emerald-600/20">
              {currentStep + 1}
            </div>
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400">
                Step {currentStep + 1} of 12 — {STEP_ITEMS[currentStep].fullTitle}
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

        {/* 12 Horizontal Scrollable Step Stepper Cards */}
        <div className="grid grid-cols-4 sm:grid-cols-6 lg:flex lg:flex-nowrap lg:items-center gap-1.5 sm:gap-2 w-full pt-1 lg:overflow-x-auto lg:pb-2 scrollbar-thin scrollbar-thumb-slate-300 dark:scrollbar-thumb-zinc-700">
          {STEP_ITEMS.map((item, idx) => {
            const isCurrent = idx === currentStep;
            const isCompleted = idx < currentStep;

            return (
              <button
                key={idx}
                ref={(el) => (stepRefs.current[idx] = el)}
                type="button"
                onClick={() => {
                  if (idx <= currentStep) setCurrentStep(idx);
                }}
                className={`w-full lg:flex-1 lg:min-w-[110px] py-2 px-1.5 sm:px-2 rounded-2xl flex flex-col items-center justify-center transition-all duration-200 cursor-pointer shrink-0 ${
                  isCurrent
                    ? "bg-brand-primary text-white font-extrabold shadow-md shadow-emerald-600/20 scale-[1.02]"
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

      {/* Dynamic Step Content */}
      <Form
        key={formKey}
        form={form}
        layout="vertical"
        preserve={true}
        initialValues={{
          primaryService: "Register a new Australian company",
        }}
        requiredMark="optional"
        className="p-2 sm:p-6"
      >
        {currentStep === 0 && <Step1EngagementService form={form} />}
        {currentStep === 1 && <Step2CompanyDetails form={form} />}
        {currentStep === 2 && <Step3AddressesService form={form} />}
        {currentStep === 3 && (
          <Step4Officeholders
            officeholders={officeholders}
            setOfficeholders={setOfficeholders}
          />
        )}
        {currentStep === 4 && (
          <Step5ShareStructure
            shareholders={shareholders}
            setShareholders={setShareholders}
          />
        )}
        {currentStep === 5 && (
          <Step6BeneficialOwnership
            beneficialOwners={beneficialOwners}
            setBeneficialOwners={setBeneficialOwners}
          />
        )}
        {currentStep === 6 && <Step7CddAmlQuestions form={form} />}
        {currentStep === 7 && <Step8SourceOfFundsWealth form={form} />}
        {currentStep === 8 && <Step9NomineeTrusteeArrangements form={form} />}
        {currentStep === 9 && <Step10OptionalTaxServices form={form} />}
        {currentStep === 10 && <Step11DocumentUploads form={form} />}
        {currentStep === 11 && <Step12DeclarationSignatures form={form} />}
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
            icon={currentStep === 11 ? <CheckOutlined /> : <ArrowRightOutlined />}
            onClick={handleNext}
            className="w-full sm:w-auto bg-brand-primary hover:bg-brand-primary-hover h-11 px-8 rounded-xl font-extrabold text-sm shadow-md shadow-emerald-600/20"
          >
            {currentStep === 11 ? "Submit Company Registration" : `Next: Step ${currentStep + 2}`}
          </Button>
        </div>
      </div>
    </Card>
  );
}
