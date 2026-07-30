"use client";

import React from "react";
import Link from "next/link";
import {
  CalendarOutlined,
  PhoneOutlined,
  MailOutlined,
  SafetyCertificateOutlined,
} from "@ant-design/icons";

export default function BookAppointmentPage() {
  return (
    <div className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 min-h-[70vh] transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
          <SafetyCertificateOutlined className="text-sm" />
          <span>Online Consultation Booking</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Book Your Consultation with a Tax Specialist
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 max-w-2xl mx-auto">
          Schedule a one-on-one session with our ATO registered tax accountants
          to get expert guidance tailored to your individual or business needs.
        </p>

        <div className="bg-white dark:bg-zinc-900 p-8 sm:p-12 rounded-3xl border border-slate-200/80 dark:border-zinc-800 shadow-xl space-y-6 max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-emerald-100 dark:bg-zinc-800 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-3xl mx-auto">
            <CalendarOutlined />
          </div>

          <h2 className="text-xl font-bold text-slate-900 dark:text-zinc-100">
            Direct Appointment Support
          </h2>

          <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed">
            Our online booking schedule is being finalized. You can immediately
            get in touch with our team via phone or email to secure your
            preferred date and time slot.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <a
              href="tel:1300328316"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-brand-primary hover:bg-[#006635] text-white px-7 py-3.5 rounded-xl font-bold text-sm shadow-md transition-all"
            >
              <PhoneOutlined />
              <span>Call 1300 328 316</span>
            </a>

            <a
              href="mailto:info@financiallyup.com.au"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-slate-100 dark:bg-zinc-800 hover:bg-slate-200 text-slate-800 dark:text-zinc-200 px-7 py-3.5 rounded-xl font-bold text-sm transition-all"
            >
              <MailOutlined />
              <span>Email Us Directly</span>
            </a>
          </div>
        </div>

        <div>
          <Link
            href="/"
            className="text-sm font-semibold text-brand-primary hover:underline"
          >
            ← Back to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
}
