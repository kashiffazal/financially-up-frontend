"use client";

import React, { useState } from "react";
import {
  Table,
  Tag,
  Button,
  Alert,
  Modal,
  Card,
  Descriptions,
  Divider,
} from "antd";
import {
  FilePdfOutlined,
  CheckCircleFilled,
  EyeOutlined,
  LockOutlined,
  DownloadOutlined,
  PrinterOutlined,
  InfoCircleOutlined,
  CalendarOutlined,
  DollarOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  UserOutlined,
  FileTextOutlined,
} from "@ant-design/icons";

/**
 * Service Schedule Helper Matrix
 * Maps each selected service from Step 1 to standard engagement parameters.
 */
export const getScheduleItemsForServices = (services = []) => {
  const currentYear = new Date().getFullYear();
  const fyPeriod = `FY ${currentYear - 1}-${currentYear}`;

  if (!services || services.length === 0) {
    // Default fallback if no services selected
    services = ["Individual Tax Return"];
  }

  return services.map((srv, idx) => {
    let fee = "$180.00 (ex. GST)";
    let deliverable = `${srv} Lodgement & Advice`;
    let includedWork =
      "Data verification, ATO portal pre-fill check, tax calculation, electronic lodgement, and notice of assessment review.";
    let excludedWork =
      "ATO audit defense, legal advisory, bookkeeping/data entry, or financial planning advice.";
    let infoDeadline = "15 October";
    let lodgmentDeadline = "31 October";
    let specialConditions =
      "Client must provide all income statements, interest records, and deduction receipts prior to preparation.";
    let period = fyPeriod;

    if (srv.includes("Rental Property")) {
      fee = "+ $120.00 / property (ex. GST)";
      deliverable = "Rental Property Schedule & Capital Works Advice";
      specialConditions =
        "Client must supply 12-month property manager annual statement and loan interest statements.";
    } else if (srv.includes("Capital Gains")) {
      fee = "+ $150.00 / CGT event (ex. GST)";
      deliverable = "Capital Gains Tax Schedule & Discount Calculation";
      specialConditions =
        "Client must supply purchase contract, settlement statements, and cost base records.";
    } else if (srv.includes("Cryptocurrency")) {
      fee = "+ $150.00 / crypto report (ex. GST)";
      deliverable = "Cryptocurrency Tax Report & Capital Loss Tracking";
      specialConditions =
        "Client must supply complete exchange transaction CSV logs or API read access.";
    } else if (srv.includes("Sole Trader BAS")) {
      fee = "$220.00 / quarter (ex. GST)";
      deliverable = "Quarterly BAS Preparation & Lodgement";
      period = "Quarterly (Q1 - Q4)";
      infoDeadline = "21st of month following quarter end";
      lodgmentDeadline = "28th of month following quarter end";
      specialConditions =
        "Client must maintain reconciled bank records or software file (Xero/MYOB/QuickBooks).";
    } else if (srv.includes("ABN Application")) {
      fee = "$150.00 (Fixed ex. GST)";
      deliverable = "ABN & Business Registration Processing";
      period = "One-Off";
      infoDeadline = "Immediate upon engagement";
      lodgmentDeadline = "Within 3 business days of receipt";
      specialConditions =
        "Subject to Registrar identification checks and business entity eligibility.";
    } else if (srv.includes("GST Registration")) {
      fee = "$150.00 (Fixed ex. GST)";
      deliverable = "GST Registration & ATO System Setup";
      period = "One-Off";
      infoDeadline = "Immediate upon engagement";
      lodgmentDeadline = "Within 3 business days of receipt";
      specialConditions =
        "Client must confirm projected turnover exceeds $75,000 threshold.";
    } else if (srv.includes("Prior-Year Return")) {
      fee = "$220.00 / return (ex. GST)";
      deliverable = "Prior Year Overdue Tax Return Lodgement";
      infoDeadline = "Immediate";
      lodgmentDeadline = "Within 14 business days";
      specialConditions =
        "May involve ATO failure to lodge penalties which remain client responsibility.";
    } else if (srv.includes("Tax Return Amendment")) {
      fee = "$150.00 / amendment (ex. GST)";
      deliverable = "Notice of Assessment Amendment Request";
      specialConditions =
        "Requires copy of original notice of assessment and justification documents.";
    } else if (srv.includes("Tax Planning")) {
      fee = "$300.00 / session (ex. GST)";
      deliverable = "Pre-EOFY Tax Minimization Strategy";
      period = "Annual Pre-EOFY";
      infoDeadline = "May 31st";
      lodgmentDeadline = "June 30th";
    } else if (srv.includes("ATO Matter")) {
      fee = "Custom Quote on Assessment";
      deliverable = "ATO Audit & Dispute Representation";
      specialConditions =
        "Scope to be finalized in writing after initial document review.";
    }

    return {
      key: idx + 1,
      service: srv,
      period,
      deliverable,
      includedWork,
      excludedWork,
      infoDeadline,
      expectedCompletion:
        "14 business days from receipt of complete information",
      lodgmentDeadline,
      fee,
      gstTreatment: "10% GST applies to all professional fees in Australia",
      urgentWorkLimit:
        "Urgent requests (< 5 business days) incur a 30% rush surcharge",
      specialConditions,
      responsibleAccountant: "Financially Up - Registered Tax Agent Team",
      engagementTerm: "Ongoing until terminated in writing with 14 days notice",
      acceptanceDate: new Date().toLocaleDateString("en-AU", {
        day: "2-digit",
        month: "short",
        year: "numeric",
      }),
    };
  });
};

export default function Step8EngagementSchedule({
  form,
  formData,
  onScheduleViewed,
}) {
  const [hasOpenedSchedule, setHasOpenedSchedule] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const fullName =
    form?.getFieldValue("fullName") ||
    formData?.fullName ||
    "Individual Client";
  const selectedServices =
    form?.getFieldValue("services") || formData?.services || [];
  const scheduleData = getScheduleItemsForServices(selectedServices);

  const handleOpenScheduleModal = () => {
    setHasOpenedSchedule(true);
    setModalVisible(true);
    if (onScheduleViewed) onScheduleViewed();
  };

  const handlePrintSchedule = () => {
    window.print();
  };

  return (
    <div className="space-y-8 animate-fadeIn">
      {/* Step Header */}
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-4">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 8 of 10
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Engagement Schedule
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Review Scope of Work & Engagement Schedule
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Please review the official read-only Engagement Schedule generated for{" "}
          <strong className="text-slate-900 dark:text-zinc-200">
            {fullName}
          </strong>
          .
        </p>
      </div>

      {/* Mandatory Schedule Review Alert Banner */}
      <Alert
        type={hasOpenedSchedule ? "success" : "info"}
        showIcon
        icon={hasOpenedSchedule ? <CheckCircleFilled /> : <EyeOutlined />}
        title={
          hasOpenedSchedule
            ? "Engagement Schedule Reviewed & Confirmed"
            : "Action Required: Open & Review Official Engagement Schedule"
        }
        description={
          hasOpenedSchedule
            ? "Thank you for reviewing your custom Engagement Schedule. You may now proceed to Step 9."
            : "Under Tax Agent Professional Conduct Rules (TASA 2009), you must click 'View Engagement Schedule' to inspect all 15 schedule parameters before signing."
        }
        className="rounded-2xl p-4 !mb-4 shadow-sm"
      />

      {/* Main View Engagement Schedule Action Card */}
      <div className="p-6 rounded-2xl bg-gradient-to-r from-emerald-50/80 via-slate-50 to-emerald-50/40 dark:from-emerald-950/40 dark:via-zinc-900 dark:to-emerald-950/20 border border-emerald-200/80 dark:border-emerald-800/50 shadow-sm">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1.5 max-w-xl">
            <div className="text-lg font-extrabold text-slate-900 dark:text-zinc-50 flex items-center gap-2.5">
              <FilePdfOutlined className="text-brand-primary text-xl" />
              <span>Official Client Engagement Schedule</span>
            </div>
            <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed">
              Contains all 15 statutory parameters including Service Scope,
              Exclusions, Information Deadlines, Lodgement Deadlines, Fee
              Breakdown, GST Treatment, and Responsible Tax Agent details.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-1 text-xs font-mono text-slate-500 dark:text-zinc-400">
              <span>
                <strong>Client:</strong> {fullName}
              </span>
              <span>•</span>
              <span>
                <strong>Term:</strong> Ongoing
              </span>
              <span>•</span>
              <span>
                <strong>Date:</strong> {new Date().toLocaleDateString("en-AU")}
              </span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full md:w-auto shrink-0">
            <Button
              type="primary"
              icon={<EyeOutlined />}
              size="large"
              onClick={handleOpenScheduleModal}
              className="bg-brand-primary hover:bg-brand-primary-hover font-extrabold rounded-xl px-7 h-12 shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2"
            >
              View Engagement Schedule
            </Button>
          </div>
        </div>
      </div>

      {/* One-Page Summary Card View (Visible directly on Step 8) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 flex items-center gap-2">
            <LockOutlined className="text-brand-primary" /> Engagement Summary
            Overview
          </h3>
          <Tag color="blue" className="font-semibold text-xs rounded-md">
            15 Parameters Validated
          </Tag>
        </div>

        {scheduleData.map((item, index) => (
          <Card
            key={item.key}
            className="rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-xs hover:shadow-md transition-all overflow-hidden dark:bg-zinc-950 !mb-4"
            title={
              <div className="flex flex-wrap items-center justify-between gap-2 py-1">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300 font-bold text-xs flex items-center justify-center">
                    {index + 1}
                  </span>
                  <span className="font-extrabold text-slate-900 dark:text-zinc-100 text-sm">
                    {item.service}
                  </span>
                </div>
                <Tag
                  color="green"
                  className="font-black text-xs px-3 py-0.5 rounded-full border-none"
                >
                  Fee: {item.fee}
                </Tag>
              </div>
            }
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-1">
                <span className="font-extrabold text-slate-500 dark:text-zinc-400 block uppercase tracking-wider text-[10px]">
                  Year / Period
                </span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200">
                  {item.period}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-1">
                <span className="font-extrabold text-slate-500 dark:text-zinc-400 block uppercase tracking-wider text-[10px]">
                  Deliverable
                </span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200">
                  {item.deliverable}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-1">
                <span className="font-extrabold text-slate-500 dark:text-zinc-400 block uppercase tracking-wider text-[10px]">
                  Expected Completion
                </span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200">
                  {item.expectedCompletion}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-1">
                <span className="font-extrabold text-amber-600 dark:text-amber-400 block uppercase tracking-wider text-[10px]">
                  Information Deadline
                </span>
                <span className="font-extrabold text-slate-800 dark:text-zinc-200">
                  {item.infoDeadline}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-1">
                <span className="font-extrabold text-emerald-600 dark:text-emerald-400 block uppercase tracking-wider text-[10px]">
                  Lodgment / Payment Deadline
                </span>
                <span className="font-extrabold text-slate-800 dark:text-zinc-200">
                  {item.lodgmentDeadline}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 space-y-1">
                <span className="font-extrabold text-slate-500 dark:text-zinc-400 block uppercase tracking-wider text-[10px]">
                  GST Treatment
                </span>
                <span className="font-semibold text-slate-800 dark:text-zinc-200">
                  {item.gstTreatment}
                </span>
              </div>

              <div className="p-3 rounded-xl bg-emerald-50/50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/40 md:col-span-2 space-y-1">
                <span className="font-extrabold text-emerald-700 dark:text-emerald-400 block uppercase tracking-wider text-[10px] flex items-center gap-1">
                  <CheckCircleOutlined /> Included Work
                </span>
                <p className="text-slate-700 dark:text-zinc-300 m-0 leading-relaxed">
                  {item.includedWork}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-100 dark:border-rose-900/40 space-y-1">
                <span className="font-extrabold text-rose-700 dark:text-rose-400 block uppercase tracking-wider text-[10px] flex items-center gap-1">
                  <CloseCircleOutlined /> Excluded Work
                </span>
                <p className="text-slate-700 dark:text-zinc-300 m-0 leading-relaxed">
                  {item.excludedWork}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 dark:bg-zinc-900/80 border border-slate-100 dark:border-zinc-800/80 md:col-span-3 space-y-1">
                <span className="font-extrabold text-slate-500 dark:text-zinc-400 block uppercase tracking-wider text-[10px]">
                  Special Conditions
                </span>
                <p className="text-slate-700 dark:text-zinc-300 m-0 italic">
                  {item.specialConditions}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Global General Conditions Box */}
      <div className="p-5 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 space-y-3 text-xs">
        <h4 className="font-extrabold text-slate-900 dark:text-zinc-100 uppercase tracking-wider text-xs">
          General Terms & Responsible Tax Agent Details
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          <div>
            <span className="text-slate-400 block font-semibold text-[10px]">
              RESPONSIBLE ACCOUNTANT
            </span>
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Financially Up - Registered Tax Agent Team
            </span>
          </div>
          <div>
            <span className="text-slate-400 block font-semibold text-[10px]">
              ENGAGEMENT TERM
            </span>
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              Ongoing until terminated in writing (14 days notice)
            </span>
          </div>
          <div>
            <span className="text-slate-400 block font-semibold text-[10px]">
              URGENT WORK SURCHARGE
            </span>
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              30% surcharge applies for requests under 5 business days
            </span>
          </div>
          <div>
            <span className="text-slate-400 block font-semibold text-[10px]">
              SCHEDULE ACCEPTANCE DATE
            </span>
            <span className="font-bold text-slate-800 dark:text-zinc-200">
              {new Date().toLocaleDateString("en-AU")}
            </span>
          </div>
        </div>
      </div>

      {/* Full Modal Document View with Save / Print Option */}
      <Modal
        open={modalVisible}
        onCancel={() => setModalVisible(false)}
        width={900}
        centered={true}
        getContainer={() =>
          typeof document !== "undefined" ? document.body : null
        }
        footer={[
          <div
            key="footer-btns"
            className="flex items-center justify-between w-full px-2"
          >
            <Button
              icon={<PrinterOutlined />}
              onClick={handlePrintSchedule}
              className="rounded-xl font-bold border-slate-300"
            >
              Print / Save as PDF
            </Button>

            <Button
              type="primary"
              icon={<CheckCircleFilled />}
              onClick={() => setModalVisible(false)}
              className="bg-brand-primary hover:bg-brand-primary-hover rounded-xl font-bold px-6 h-10 shadow-md"
            >
              I Have Reviewed the Engagement Schedule
            </Button>
          </div>,
        ]}
      >
        <div className="p-4 sm:p-8 space-y-6 text-slate-900 dark:text-zinc-100 font-sans print:p-0">
          {/* Print specific header styles */}
          <div className="border-b-2 border-brand-primary pb-4 flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-brand-primary tracking-tight m-0">
                FINANCIALLY UP PTY LTD
              </h1>
              <p className="text-xs text-slate-500 m-0">
                Registered Tax Agent Services | ABN 12 345 678 901 | TASA 2009
                Compliant
              </p>
            </div>
            <div className="text-right">
              <Tag
                color="green"
                className="font-extrabold text-xs px-3 py-1 rounded-md"
              >
                ENGAGEMENT SCHEDULE v2.5
              </Tag>
              <div className="text-[11px] font-mono text-slate-400 mt-1">
                Ref Date: {new Date().toLocaleDateString("en-AU")}
              </div>
            </div>
          </div>

          {/* Document Title Banner */}
          <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 text-center">
            <h2 className="text-lg font-extrabold text-slate-900 dark:text-zinc-100 uppercase tracking-wide m-0">
              INDIVIDUAL CLIENT ENGAGEMENT SCHEDULE & SCOPE OF WORKS
            </h2>
            <p className="text-xs text-slate-500 m-0 mt-1">
              Issued for{" "}
              <strong className="text-slate-800 dark:text-zinc-200">
                {fullName}
              </strong>{" "}
              under Tax Agent Professional Regulations
            </p>
          </div>

          {/* Service Details Breakdown - 15 Fields Table */}
          <div className="space-y-6">
            {scheduleData.map((item, idx) => (
              <div
                key={item.key}
                className="border border-slate-200 dark:border-zinc-800 rounded-2xl overflow-hidden"
              >
                <div className="bg-emerald-50 dark:bg-emerald-950/60 p-3 border-b border-slate-200 dark:border-zinc-800 flex items-center justify-between">
                  <span className="font-extrabold text-sm text-brand-primary dark:text-emerald-400">
                    Service #{idx + 1}: {item.service}
                  </span>
                  <Tag color="green" className="font-bold text-xs">
                    Fee: {item.fee}
                  </Tag>
                </div>

                <div className="p-4 space-y-3 text-xs">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    <div>
                      <strong className="text-slate-500 block uppercase text-[10px]">
                        1. Service Name
                      </strong>
                      <span>{item.service}</span>
                    </div>
                    <div>
                      <strong className="text-slate-500 block uppercase text-[10px]">
                        2. Year / Period
                      </strong>
                      <span>{item.period}</span>
                    </div>
                    <div>
                      <strong className="text-slate-500 block uppercase text-[10px]">
                        3. Deliverable
                      </strong>
                      <span>{item.deliverable}</span>
                    </div>
                    <div>
                      <strong className="text-slate-500 block uppercase text-[10px]">
                        6. Information Deadline
                      </strong>
                      <span className="font-bold text-amber-700 dark:text-amber-400">
                        {item.infoDeadline}
                      </span>
                    </div>
                    <div>
                      <strong className="text-slate-500 block uppercase text-[10px]">
                        7. Expected Completion
                      </strong>
                      <span>{item.expectedCompletion}</span>
                    </div>
                    <div>
                      <strong className="text-slate-500 block uppercase text-[10px]">
                        8. Lodgment / Payment Deadline
                      </strong>
                      <span className="font-bold text-emerald-700 dark:text-emerald-400">
                        {item.lodgmentDeadline}
                      </span>
                    </div>
                    <div>
                      <strong className="text-slate-500 block uppercase text-[10px]">
                        9. Professional Fee
                      </strong>
                      <span className="font-bold">{item.fee}</span>
                    </div>
                    <div>
                      <strong className="text-slate-500 block uppercase text-[10px]">
                        10. GST Treatment
                      </strong>
                      <span>{item.gstTreatment}</span>
                    </div>
                    <div>
                      <strong className="text-slate-500 block uppercase text-[10px]">
                        11. Urgent-Work Surcharge Limit
                      </strong>
                      <span>{item.urgentWorkLimit}</span>
                    </div>
                  </div>

                  <Divider className="my-2 border-slate-200 dark:border-zinc-800" />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <div>
                      <strong className="text-emerald-700 dark:text-emerald-400 block uppercase text-[10px]">
                        4. Included Work Scope
                      </strong>
                      <p className="text-slate-600 dark:text-zinc-300 m-0 leading-relaxed">
                        {item.includedWork}
                      </p>
                    </div>
                    <div>
                      <strong className="text-rose-700 dark:text-rose-400 block uppercase text-[10px]">
                        5. Excluded Work Scope
                      </strong>
                      <p className="text-slate-600 dark:text-zinc-300 m-0 leading-relaxed">
                        {item.excludedWork}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2">
                    <strong className="text-slate-500 block uppercase text-[10px]">
                      12. Special Conditions
                    </strong>
                    <p className="text-slate-600 dark:text-zinc-300 m-0 italic">
                      {item.specialConditions}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* General Terms Section */}
          <div className="bg-slate-50 dark:bg-zinc-900 p-4 rounded-xl border border-slate-200 dark:border-zinc-800 text-xs space-y-2">
            <h4 className="font-bold text-slate-900 dark:text-zinc-100 m-0 uppercase">
              General Terms & Compliance Declarations
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div>
                <strong className="text-slate-500 block text-[10px]">
                  13. RESPONSIBLE ACCOUNTANT
                </strong>
                <span>Financially Up - Registered Tax Agent Team</span>
              </div>
              <div>
                <strong className="text-slate-500 block text-[10px]">
                  14. ENGAGEMENT TERM
                </strong>
                <span>
                  Ongoing until terminated in writing (14 days notice)
                </span>
              </div>
              <div>
                <strong className="text-slate-500 block text-[10px]">
                  15. ACCEPTANCE DATE
                </strong>
                <span>{new Date().toLocaleDateString("en-AU")}</span>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
}
