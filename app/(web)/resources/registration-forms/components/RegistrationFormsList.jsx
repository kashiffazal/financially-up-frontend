"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  PhoneOutlined,
  CustomerServiceOutlined,
} from "@ant-design/icons";

/**
 * 7 Registration Forms Data Definition
 * Structured with numbers, category tags, titles, concise 1.5-line descriptions, and custom SVG icons.
 */

// 1. GST Registration Icon
const GstIcon = () => (
  <svg
    className="w-6 h-6 text-brand-primary dark:text-emerald-400"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="3"
      width="13"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7H12M7 11H10M7 15H9"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="16"
      cy="16"
      r="5"
      fill="currentColor"
      className="text-emerald-100 dark:text-emerald-950"
    />
    <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M16 13.5V18.5M17.5 15C17.5 14.4 16.8 14 16 14C15.2 14 14.5 14.4 14.5 15C14.5 16.2 17.5 15.8 17.5 17C17.5 17.6 16.8 18 16 18C15.2 18 14.5 17.6 14.5 17"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// 2. Company Registration Icon
const CompanyIcon = () => (
  <svg
    className="w-6 h-6 text-brand-primary dark:text-emerald-400"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="4"
      width="14"
      height="17"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 8H13M7 12H11"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle
      cx="16"
      cy="14"
      r="4"
      stroke="currentColor"
      strokeWidth="2"
      fill="currentColor"
      className="text-emerald-100 dark:text-emerald-950"
    />
    <path
      d="M14 18L13 21L16 19.5L19 21L18 18"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 3. Change to Company Details Icon
const ChangeCompanyDetailsIcon = () => (
  <svg
    className="w-6 h-6 text-brand-primary dark:text-emerald-400"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 10V6M7 10V4M10 10V7"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M12 5L15 3M15 3L15 6M15 3L12 3"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="12" cy="16" r="3.5" stroke="currentColor" strokeWidth="2" />
    <path
      d="M12 11V12.5M12 19.5V21M7.5 16H9M15 16H16.5M9 13L10 14M14 18L15 19M9 19L10 18M14 14L15 13"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 4. Trust Registration Icon
const TrustIcon = () => (
  <svg
    className="w-6 h-6 text-brand-primary dark:text-emerald-400"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="6"
      y="3"
      width="12"
      height="8"
      rx="1.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M9 6H15M9 8.5H13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M4 17L8 13C8.8 12.2 10.2 12.2 11 13L12 14L13 13C13.8 12.2 15.2 12.2 16 13L20 17"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 15L10 18L12 16.5L14 18L17 15"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 5. SMSF Registration Icon
const SmsfIcon = () => (
  <svg
    className="w-6 h-6 text-brand-primary dark:text-emerald-400"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="4"
      y="3"
      width="13"
      height="18"
      rx="2"
      stroke="currentColor"
      strokeWidth="2"
    />
    <path
      d="M7 7H12M7 10H11M7 13H10"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M17 8L20 11L14 17L11 17.5L11.5 14.5L17 8Z"
      fill="currentColor"
      className="text-emerald-100 dark:text-emerald-950"
    />
    <path
      d="M17 8L20 11L14 17L11 17.5L11.5 14.5L17 8Z"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

// 6. Business Name Registration Icon
const BusinessNameIcon = () => (
  <svg
    className="w-6 h-6 text-brand-primary dark:text-emerald-400"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="3"
      y="5"
      width="18"
      height="14"
      rx="2.5"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="8" cy="10" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M5 16C5 14.5 6.5 13.5 8 13.5C9.5 13.5 11 14.5 11 16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M13 9H18M13 12H18M13 15H16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
  </svg>
);

// 7. Individual Sole-Trader Registration Icon
const SoleTraderIcon = () => (
  <svg
    className="w-6 h-6 text-brand-primary dark:text-emerald-400"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="7.5" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="9.5" r="2.2" stroke="currentColor" strokeWidth="1.8" />
    <path
      d="M7.5 16C7.5 14 9.5 13 12 13C14.5 13 16.5 14 16.5 16"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    />
    <path
      d="M12 2.5V4M12 20V21.5M2.5 12H4M20 12H21.5M5.5 5.5L6.5 6.5M17.5 17.5L18.5 18.5M5.5 18.5L6.5 17.5M17.5 6.5L18.5 5.5"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const REGISTRATION_FORMS = [
  {
    num: "01",
    tag: "ATO TAX COMPLIANCE",
    title: "GST Registration",
    desc: "Register for Goods and Services Tax with the ATO to ensure seamless threshold compliance and quarterly BAS claim readiness.",
    href: "/resources/registration-forms/gst-registrations",
    icon: <GstIcon />,
  },
  {
    num: "02",
    tag: "ASIC INCORPORATION",
    title: "Company Registration",
    desc: "Incorporate your Australian Pty Ltd company with ASIC, including instant ACN, constitution, and full shareholder setup.",
    href: "/resources/registration-forms/company-registration",
    icon: <CompanyIcon />,
  },
  {
    num: "03",
    tag: "CORPORATE GOVERNANCE",
    title: "Change to Company Details",
    desc: "Lodge ASIC Form 484 to update company directors, shareholders, share structure, and registered office addresses.",
    href: "/resources/registration-forms/changes-to-company-details",
    icon: <ChangeCompanyDetailsIcon />,
  },
  {
    num: "04",
    tag: "ASSET PROTECTION",
    title: "Trust Registration",
    desc: "Establish Family, Discretionary, or Unit Trusts with customized trust deeds, ABN/TFN applications, and trustee structuring.",
    href: "/resources/registration-forms/trust-registrations",
    icon: <TrustIcon />,
  },
  {
    num: "05",
    tag: "RETIREMENT & SUPER",
    title: "SMSF Registration",
    desc: "Set up an ATO-compliant Self-Managed Super Fund with compliant corporate trusteeship, trust deed, and ESA registration.",
    href: "/resources/registration-forms/smsf-registrations",
    icon: <SmsfIcon />,
  },
  {
    num: "06",
    tag: "TRADING IDENTITY",
    title: "Business Name Registration",
    desc: "Register and protect your nationwide trading business name with ASIC linked directly to your active Australian Business Number.",
    href: "/resources/registration-forms/business-name-registrations",
    icon: <BusinessNameIcon />,
  },
  {
    num: "07",
    tag: "SOLE PROPRIETOR",
    title: "Individual Sole-Trader Registration",
    desc: "Apply for your Australian Tax File Number (TFN) and Sole Trader ABN in minutes to launch your freelance or business venture.",
    href: "/resources/registration-forms/apply-tfn-abns",
    icon: <SoleTraderIcon />,
  },
];

/**
 * Standard Registration Card Component
 */
function RegistrationCard({ form }) {
  return (
    <Link
      href={form.href}
      className="group relative flex flex-col justify-between p-7 sm:p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-2xl hover:border-brand-primary/60 dark:hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300 !no-underline"
    >
      {/* Top Header Row: Icon Container on Left + Number Index on Right */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-brand-primary-soft dark:bg-emerald-950/70 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center group-hover:scale-105 group-hover:bg-brand-primary/10 transition-all duration-300 shadow-xs">
          {form.icon}
        </div>
        <span className="text-2xl sm:text-3xl font-black text-slate-200 dark:text-zinc-700 font-mono tracking-tight select-none">
          {form.num}
        </span>
      </div>

      {/* Middle Content Section */}
      <div className="space-y-2.5 flex-1">
        {/* Category Badge Tag */}
        <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-brand-primary dark:text-emerald-400">
          {form.tag}
        </span>

        {/* Card Title */}
        <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 dark:text-zinc-50 leading-snug group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors duration-200">
          {form.title}
        </h3>

        {/* 1.5-Line Short Description */}
        <p className="text-xs sm:text-[13px] text-slate-500 dark:text-zinc-400 leading-relaxed pt-1">
          {form.desc}
        </p>
      </div>

      {/* Bottom Action Row with Animated Sliding Arrow */}
      <div className="pt-6 mt-4 border-t border-slate-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-extrabold text-brand-primary dark:text-emerald-400">
        <span className="group-hover:underline">Start Registration</span>
        <div className="w-7 h-7 rounded-full bg-brand-primary-soft dark:bg-zinc-800 flex items-center justify-center group-hover:bg-brand-primary group-hover:text-white transition-all duration-300">
          <ArrowRightOutlined className="text-xs transition-transform duration-300 group-hover:translate-x-0.5" />
        </div>
      </div>
    </Link>
  );
}

/**
 * 2-Column Featured Advisory Card (Fills Row 3)
 */
function FeaturedAdvisoryCard() {
  return (
    <div className="md:col-span-2 lg:col-span-2 relative flex flex-col justify-between p-8 sm:p-9 rounded-3xl bg-gradient-to-br from-[#008043] via-[#006e39] to-[#004d28] dark:from-emerald-950 dark:to-zinc-900 text-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden">
      {/* Subtle Background Glow Circles */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-400/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 mb-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-white text-xl">
            <CustomerServiceOutlined />
          </div>
          <div>
            <span className="inline-block text-[11px] font-extrabold uppercase tracking-widest text-emerald-200">
              Need Structuring Advice?
            </span>
            <h3 className="text-xl sm:text-2xl font-extrabold text-white leading-tight">
              Unsure Which Business Entity Fits You Best?
            </h3>
          </div>
        </div>
      </div>

      {/* Middle Description & Key Benefits */}
      <div className="relative z-10 space-y-4 my-2">
        <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-2xl">
          Choosing between a Sole Trader, Pty Ltd Company, Trust, or SMSF impacts your tax rates, personal liability, and ongoing ATO obligations. Speak with our registered tax agents for tailored structuring guidance before you register.
        </p>

        {/* Value Checklist Row */}
        <div className="flex flex-wrap items-center gap-y-2 gap-x-5 text-xs font-semibold text-emerald-100 pt-1">
          <div className="flex items-center gap-1.5">
            <CheckCircleFilled className="text-emerald-300 text-xs" />
            <span>ATO & ASIC Registered Agents</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircleFilled className="text-emerald-300 text-xs" />
            <span>Tax-Minimizing Entity Setup</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircleFilled className="text-emerald-300 text-xs" />
            <span>100% Online & Fast Turnaround</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA Row */}
      <div className="relative z-10 pt-5 mt-4 border-t border-white/20 flex flex-wrap items-center justify-between gap-4">
        <Link href="/book-an-appointment" className="!no-underline">
          <Button
            size="large"
            className="h-11 px-6 rounded-xl font-extrabold text-xs sm:text-sm bg-white text-brand-primary hover:bg-slate-50 border-none shadow-md hover:scale-105 transition-all duration-200"
          >
            Book Structuring Consultation <ArrowRightOutlined className="text-xs" />
          </Button>
        </Link>

        <a
          href="tel:1300328316"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-100 hover:text-white transition-colors !no-underline"
        >
          <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-white text-xs">
            <PhoneOutlined />
          </div>
          <span>Call 1300 328 316</span>
        </a>
      </div>
    </div>
  );
}

/**
 * RegistrationFormsList Main Component
 * Renders all 7 registration cards + the 2-column featured advisory banner in Row 3.
 */
export default function RegistrationFormsList() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Unified 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Cards 01 to 06 (Rows 1 & 2) */}
          {REGISTRATION_FORMS.slice(0, 6).map((form) => (
            <RegistrationCard key={form.num} form={form} />
          ))}

          {/* Row 3: Card 07 (1 Column) */}
          <RegistrationCard form={REGISTRATION_FORMS[6]} />

          {/* Row 3: Featured Advisory Card (2 Columns) */}
          <FeaturedAdvisoryCard />
        </div>
      </div>
    </section>
  );
}
