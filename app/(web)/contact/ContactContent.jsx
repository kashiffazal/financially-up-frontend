"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Form, Button } from "antd";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  SafetyCertificateOutlined,
  SendOutlined,
  CheckCircleFilled,
  CalendarOutlined,
  GlobalOutlined,
  LockOutlined,
  RightOutlined,
  ThunderboltOutlined,
  FileProtectOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";
import { antdMsg, HTTP } from "@/services";
import { AntInput } from "@/services/antdFields";
import PageHero from "@/components/website/PageHero";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Service options for Contact Form dropdown
 */
const contactServiceOptions = [
  { value: "Individual Tax Return", label: "Individual Tax Return" },
  { value: "Company & Business Tax", label: "Company & Business Tax Return" },
  { value: "Sole Trader Tax", label: "Sole Trader Tax Return" },
  { value: "Bookkeeping & Payroll", label: "Bookkeeping & Payroll Services" },
  { value: "BAS & GST Lodgement", label: "BAS & GST Compliance" },
  { value: "SMSF Accounting", label: "SMSF Accounting & Audit" },
  { value: "Trusts & Asset Protection", label: "Trusts & Asset Structuring" },
  { value: "Property Tax & CGT", label: "Property Tax & Capital Gains" },
  { value: "Business Advisory & CFO", label: "Business Advisory & Virtual CFO" },
  { value: "ATO Overdue & Audit Help", label: "ATO Letters & Debt Management" },
  { value: "General Enquiry", label: "General Accounting Question" },
];

/**
 * Contact Page Specific FAQs
 */
const contactFaqs = [
  {
    key: "1",
    label: "How quickly will an accountant respond to my enquiry?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We respond to all contact submissions and email enquiries within 1 business day (and typically within 2 to 4 business hours). If your matter is urgent, we recommend calling us directly on our dedicated phone line or booking a same-day appointment.
      </p>
    ),
  },
  {
    key: "2",
    label: "Do I need to visit an office in person or is everything 100% online?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Financially Up is fully optimized for 100% online service across all Australian states. You can securely upload your documents, communicate via phone or video call, and sign documents electronically from your phone or laptop. In-person meetings are also available at our North Sydney head office by prior appointment.
      </p>
    ),
  },
  {
    key: "3",
    label: "What documents should I prepare before our initial discussion?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        For individual tax returns, having your PAYG payment summary, private health statement, and deduction receipts ready is helpful. For businesses, access to your cloud accounting software (Xero, MYOB, QuickBooks) or your prior year&apos;s financial statements and BAS records will help us give you an exact quote and turnaround timeframe.
      </p>
    ),
  },
  {
    key: "4",
    label: "How is my personal and financial information protected?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        We take data confidentiality very seriously. Our portals utilize bank-grade 256-bit SSL encryption, and as registered Australian tax agents, we strictly adhere to the Privacy Act 1988 and the Tax Practitioners Board (TPB) Code of Professional Conduct.
      </p>
    ),
  },
  {
    key: "5",
    label: "Can I book a complimentary discovery consultation?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Yes! We offer a complimentary 15-minute phone or video discovery consultation to discuss your specific accounting or tax situation and provide an upfront fixed fee quote with zero obligation.
      </p>
    ),
  },
];

/**
 * ContactContent Component
 * ========================
 * Executive Contact Page presentation:
 * - PageHero with breadcrumbs
 * - Direct contact cards (phone, email, office, hours, ABN) via useCompany()
 * - Interactive Ant Design Form powered by @/services/antdFields (AntInput)
 * - National online digital consultation coverage
 * - Dedicated Contact FAQs
 * - Pre-footer CTA banner
 */
export default function ContactContent() {
  const company = useCompany();
  const [form] = Form.useForm();
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  // When the form became interactive — very fast submissions are treated as bots
  const formOpenedAtRef = useRef(null);
  useEffect(() => {
    formOpenedAtRef.current = Date.now();
  }, []);

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Contact Us" },
  ];

  /** Send the enquiry to the practice (stored + staff notified). Errors are shown by HTTP(). */
  const handleFinish = async (values) => {
    setSubmitting(true);
    try {
      const res = await HTTP("POST", "/contact-enquiries", {
        ...values,
        source: "contact_page",
        formElapsedMs: formOpenedAtRef.current ? Date.now() - formOpenedAtRef.current : undefined,
      });
      if (res?.success) {
        setSubmitted(true);
        antdMsg.success(
          "Thank you! Your message has been received. Our CPA accountants will be in touch shortly.",
        );
        form.resetFields();
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="w-full overflow-hidden bg-white dark:bg-zinc-950 transition-colors duration-300">
      {/* 1. Global Page Title Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="Get In Touch"
        title="Contact Financially Up"
        subtitle="Speak directly with registered Australian tax agents and qualified CPAs. We provide proactive accounting and taxation support nationwide."
      />

      {/* 2. Main Contact Grid (Contact Cards & Interactive Form) */}
      <section className="py-14 md:py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Practice Information (Span 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-200 dark:border-emerald-800 text-brand-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
                <ThunderboltOutlined className="text-xs" />
                <span>Fast &amp; Responsive Support</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                We&apos;re Here to Help Your Finances Grow
              </h2>
              <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                Whether you need assistance with an overdue tax return, company BAS lodgements, or strategic Virtual CFO advice, our qualified team is ready to assist.
              </p>
            </div>

            {/* Contact Method Cards Stack */}
            <div className="space-y-3.5">
              {/* Phone Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand-primary dark:hover:border-emerald-500/50 shadow-2xs transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                    <PhoneOutlined />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Phone Enquiries
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400">
                        Toll Free
                      </span>
                    </div>
                    <a
                      href={`tel:${company.phone?.replace(/\s/g, "")}`}
                      className="text-base sm:text-lg font-extrabold text-slate-900 dark:text-white hover:text-brand-primary dark:hover:text-emerald-400 transition-colors block mt-0.5 truncate"
                    >
                      {company.phone}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                      Mon – Fri: 9:00 AM – 6:00 PM AEST
                    </p>
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand-primary dark:hover:border-emerald-500/50 shadow-2xs transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                    <MailOutlined />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Email Support
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400">
                        24h Reply
                      </span>
                    </div>
                    <a
                      href={`mailto:${company.email}`}
                      className="text-sm sm:text-base font-extrabold text-brand-primary dark:text-emerald-400 hover:underline transition-colors block mt-0.5 truncate"
                    >
                      {company.email}
                    </a>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                      Client documents &amp; general enquiries
                    </p>
                  </div>
                </div>
              </div>

              {/* Head Office Card */}
              <div className="p-4 sm:p-5 rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-brand-primary dark:hover:border-emerald-500/50 shadow-2xs transition-all group">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-lg shrink-0 group-hover:scale-105 transition-transform">
                    <EnvironmentOutlined />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                      Head Office (By Appointment)
                    </span>
                    <div className="text-sm font-bold text-slate-900 dark:text-white mt-0.5 leading-snug">
                      {company.address}
                    </div>
                    <p className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                      100% Online Consultations Available Australia-Wide
                    </p>
                  </div>
                </div>
              </div>

              {/* Registered Agent & Credentials Pill */}
              <div className="p-4 rounded-2xl bg-slate-50 dark:bg-zinc-900/50 border border-slate-200/70 dark:border-zinc-800 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-slate-700 dark:text-zinc-300 font-semibold">
                  <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
                  <span>Tax Practitioners Board Registered</span>
                </div>
                <span className="font-mono text-[11px] text-slate-500 dark:text-zinc-400 font-bold">
                  ABN {company.abn}
                </span>
              </div>
            </div>

            {/* Direct Booking Highlight Banner */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-950 to-[#00381e] text-white shadow-lg space-y-3">
              <div className="flex items-center gap-2">
                <CalendarOutlined className="text-emerald-300 text-base" />
                <h4 className="text-sm font-bold text-white">
                  Prefer to Pick a Specific Time?
                </h4>
              </div>
              <p className="text-xs text-emerald-100 leading-relaxed font-normal">
                Select a convenient 15-minute slot directly on our live calendar for a complimentary phone or video consultation.
              </p>
              <Link
                href="/book-an-appointment"
                className="inline-flex items-center justify-between w-full px-4 py-2.5 rounded-xl bg-brand-primary hover:bg-brand-primary-hover text-white text-xs font-bold transition-all shadow-sm"
              >
                <span>Book Free Discovery Call</span>
                <RightOutlined className="text-[10px]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form (Span 7) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-9 rounded-3xl border border-slate-200/90 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl transition-all relative">
              
              {/* Header Title inside Form Container */}
              <div className="mb-6 space-y-1.5 pb-4 border-b border-slate-100 dark:border-zinc-800">
                <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-brand-primary dark:text-emerald-400">
                  <SendOutlined />
                  <span>Online Enquiry</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  Send Us a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
                  Fill in your details below and one of our Australian CPA accountants will review and respond within 24 hours.
                </p>
              </div>

              {/* Form Success State Notification */}
              {submitted && (
                <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-800 flex items-start gap-3">
                  <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-lg mt-0.5 shrink-0" />
                  <div className="space-y-1">
                    <h5 className="text-sm font-bold text-slate-900 dark:text-white">
                      Message Successfully Sent!
                    </h5>
                    <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed">
                      Thank you for contacting Financially Up. We have received your enquiry and an accountant will review your details and contact you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Ant Design Form using unified services/antdFields */}
              <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
                requiredMark={false}
                initialValues={{
                  preferredContact: "Email",
                }}
                className="space-y-1"
              >
                {/* Anti-spam honeypot: display:none so browsers and password managers never autofill it; bots reading the HTML still do */}
                <div aria-hidden="true" hidden style={{ display: "none" }}>
                  <Form.Item name="fu_contact_trap" noStyle>
                    <input type="text" tabIndex={-1} autoComplete="off" data-lpignore="true" data-1p-ignore="true" />
                  </Form.Item>
                </div>

                {/* Row 1: Name fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <AntInput
                    name="firstName"
                    label="First Name"
                    placeholder="e.g. Sarah"
                    noRequired={false}
                    reqMsg="Please enter your first name"
                  />
                  <AntInput
                    name="lastName"
                    label="Last Name"
                    placeholder="e.g. Jenkins"
                    noRequired={false}
                    reqMsg="Please enter your last name"
                  />
                </div>

                {/* Row 2: Contact fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
                  <AntInput
                    type="email"
                    name="email"
                    label="Email Address"
                    placeholder="e.g. sarah@example.com.au"
                    noRequired={false}
                    reqMsg="Please enter a valid email address"
                  />
                  <AntInput
                    type="phone"
                    name="phone"
                    label="Phone / Mobile Number"
                    placeholder="e.g. 0412 345 678"
                    noRequired={false}
                    reqMsg="Please enter your contact phone number"
                  />
                </div>

                {/* Row 3: Service Selection */}
                <AntInput
                  type="select"
                  name="service"
                  label="Area of Assistance"
                  placeholder="Select a service category..."
                  options={contactServiceOptions}
                  emptyFirstVal="- Select Service Category -"
                  noRequired={false}
                  reqMsg="Please select the service you are interested in"
                  filter={true}
                />

                {/* Row 4: Preferred Contact Method Radio */}
                <AntInput
                  type="radio"
                  name="preferredContact"
                  label="Preferred Contact Method"
                  radioOptions={[
                    { value: "Email", label: "Email Response" },
                    { value: "Phone", label: "Phone Call" },
                  ]}
                  noRequired={true}
                />

                {/* Row 5: Message Details */}
                <AntInput
                  type="textarea"
                  name="message"
                  label="How Can We Help You?"
                  placeholder="Provide a brief summary of your accounting needs, tax return status, or questions..."
                  rows={4}
                  noRequired={false}
                  reqMsg="Please share a brief summary of your enquiry"
                />

                {/* Privacy Assurance & Submission */}
                <div className="pt-2 space-y-4">
                  <div className="flex items-center gap-2 text-[11px] text-slate-500 dark:text-zinc-400">
                    <LockOutlined className="text-emerald-500" />
                    <span>Your data is strictly confidential and protected by Australian privacy standards.</span>
                  </div>

                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={submitting}
                    icon={<SendOutlined />}
                    className="w-full h-12 rounded-xl font-bold text-sm bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-700/20 transition-all cursor-pointer"
                  >
                    {submitting ? "Sending Your Enquiry..." : "Submit Message"}
                  </Button>
                </div>
              </Form>

            </div>
          </div>

        </div>
      </section>

      {/* 3. National Online Digital Coverage Banner */}
      <section className="py-12 bg-slate-50 dark:bg-zinc-900/60 border-y border-slate-200/80 dark:border-zinc-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              100% Online Accounting Nationwide
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300">
              No matter where you are located across Australia, you get direct access to certified CPA professionals.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
            {[
              { region: "NSW & ACT", focus: "Sydney & Regional NSW" },
              { region: "VIC & TAS", focus: "Melbourne & Regional VIC" },
              { region: "QLD & NT", focus: "Brisbane, Gold Coast & QLD" },
              { region: "WA & SA", focus: "Perth, Adelaide & Regional" },
            ].map((reg, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-slate-200/70 dark:border-zinc-800 shadow-2xs"
              >
                <div className="text-sm font-bold text-brand-primary dark:text-emerald-400">
                  {reg.region}
                </div>
                <div className="text-xs text-slate-500 dark:text-zinc-400 mt-0.5">
                  {reg.focus}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Contact Specific FAQs */}
      <FaqSection
        badgeTag="Help & Answers"
        title="Frequently Asked Contact Questions"
        subtitle="Common questions about communicating with our team, booking consultations, and document preparation."
        items={contactFaqs}
        defaultActiveKey="1"
        showSideColumn={false}
      />

      {/* 5. Pre-Footer Call to Action Banner */}
      <CallToActionBanner
        tag="Complimentary Discovery"
        title="Prefer to speak directly with an accountant?"
        subtitle="Book a complimentary 15-minute discovery consultation on our calendar or contact our team directly."
        primaryButtonText="Book an Appointment"
        primaryButtonHref="/book-an-appointment"
        secondaryButtonText="Call Our Office"
        onSecondaryClick={() => {
          if (typeof window !== "undefined") {
            window.location.href = `tel:${company.phone?.replace(/\s/g, "")}`;
          }
        }}
      />
    </div>
  );
}
