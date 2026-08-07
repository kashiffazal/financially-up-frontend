"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  PhoneOutlined,
  MailOutlined,
  EnvironmentOutlined,
  ClockCircleOutlined,
  ArrowUpOutlined,
  ArrowRightOutlined,
  RightOutlined,
  CheckOutlined,
} from "@ant-design/icons";
import { useTheme } from "../../../app/ThemeProvider";
import styles from "./Footer.module.css";

export default function WebsiteFooter() {
  const { isDark } = useTheme();

  /* Smooth scroll back to top of page */
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /* Quick Navigation Links */
  const quickLinks = [
    { href: "/", label: "Home" },
    {
      href: "/individual-services/individual-tax-return",
      label: "Individual Tax Return",
    },
    { href: "/business-services/company-tax-return", label: "Business Tax" },
    { href: "/book-keeping", label: "Bookkeeping" },
    {
      href: "/resources/registration-forms/company-registration",
      label: "Business Registration",
    },
    {
      href: "/business-services/bas-gst-lodgement",
      label: "BAS & GST Lodgement",
    },
    {
      href: "/resources/registration-forms/company-registration",
      label: "Forms & Documents",
    },
    { href: "/book-an-appointment", label: "Book an Appointment" },
  ];

  return (
    <footer className="bg-gradient-to-b from-brand-bg-lighter-m2 via-brand-bg-lighter-m3 to-brand-bg-lighter-m dark:from-[#0a1a12] dark:via-[#07140e] dark:to-[#050d09] text-slate-700 dark:text-slate-300 border-t border-emerald-200/80 dark:border-emerald-900/40 transition-colors duration-300 pt-14 pb-6">
      {/* ========== Main 3-Column Footer Section ========== */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* ── COLUMN 1: Logo, Description & Certifications (Span 5) ── */}
          <div className="md:col-span-5 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              {/* Brand Logo */}
              <Link href="/" className="inline-block">
                <Image
                  src={isDark ? "/images/logo-w.png" : "/images/logo.png"}
                  alt="Financially Up – Accounting | Taxation | Advisory"
                  width={200}
                  height={50}
                  priority
                  className="h-10 w-auto object-contain"
                />
              </Link>

              {/* Company Description */}
              <p className="text-[13px] leading-relaxed text-slate-600 dark:text-slate-300/90 max-w-md">
                Financially Up is Australia’s premier online accounting &amp;
                taxation platform - connecting individuals, sole traders, and
                businesses with registered tax agents for stress-free
                lodgements.
              </p>
            </div>

            {/* Quality Certifications / Accreditations Section */}
            <div className="space-y-3 pt-2">
              <h5 className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand-primary dark:text-emerald-400 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 inline-block" />
                ATO Registered &amp; Certifications
              </h5>

              {/* Certification Badges Row */}
              <div className="flex flex-wrap items-center gap-2">
                {["ATO REGISTERED", "CPA AUSTRALIA", "100% ATO COMPLIANT"].map(
                  (badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[11px] font-semibold bg-white/80 dark:bg-emerald-950/80 text-brand-primary dark:text-emerald-300 border border-emerald-300/70 dark:border-emerald-700/50 shadow-sm"
                    >
                      <CheckOutlined className="text-[10px] text-brand-primary dark:text-emerald-400" />
                      {badge}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          {/* ── COLUMN 2: Quick Links (Span 3) ── */}
          <div className="md:col-span-3 flex flex-col space-y-5">
            {/* Heading with Brand Green Dot */}
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 tracking-wide">
              <span className="text-brand-primary dark:text-emerald-400 text-lg leading-none">
                ●
              </span>
              Quick Links
            </h4>

            {/* Arrow Bulleted Links List */}
            <ul className="space-y-2.5 flex-1">
              {quickLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className={`group flex items-center gap-2 text-[13px] text-slate-650 dark:text-slate-300 hover:text-brand-primary dark:hover:text-emerald-400 font-medium transition-colors duration-200 ${styles.footerLink}`}
                  >
                    {/* Animated Arrow Bullet */}
                    <RightOutlined className="text-[9px] text-brand-primary dark:text-emerald-400 group-hover:translate-x-1 transition-transform duration-200" />
                    <span className="group-hover:translate-x-0.5 transition-transform duration-200">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── COLUMN 3: Get in Touch (Span 4) ── */}
          <div className="md:col-span-4 flex flex-col space-y-5">
            {/* Heading with Brand Green Dot */}
            <h4 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2 tracking-wide">
              <span className="text-brand-primary dark:text-emerald-400 text-lg leading-none">
                ●
              </span>
              Get in Touch
            </h4>

            {/* Contact Items Stack with Brand Styling */}
            <div className="space-y-4 flex-1">
              {/* Phone */}
              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/90 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-brand-primary dark:text-emerald-400 shadow-sm group-hover:scale-105 group-hover:border-brand-primary transition-all duration-200 shrink-0">
                  <PhoneOutlined className="text-sm" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Phone &amp; Support
                  </div>
                  <a
                    href="tel:1300328316"
                    className="text-[13px] font-bold text-slate-800 dark:text-white hover:text-brand-primary dark:hover:text-emerald-400 transition-colors"
                  >
                    1300 328 316
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/90 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-brand-primary dark:text-emerald-400 shadow-sm group-hover:scale-105 group-hover:border-brand-primary transition-all duration-200 shrink-0">
                  <MailOutlined className="text-sm" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Email Address
                  </div>
                  <a
                    href="mailto:info@financiallyup.com.au"
                    className="text-[13px] font-bold text-brand-primary dark:text-emerald-400 hover:underline transition-colors"
                  >
                    info@financiallyup.com.au
                  </a>
                </div>
              </div>

              {/* Office / Service Scope */}
              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/90 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-brand-primary dark:text-emerald-400 shadow-sm group-hover:scale-105 group-hover:border-brand-primary transition-all duration-200 shrink-0">
                  <EnvironmentOutlined className="text-sm" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Head Office
                  </div>
                  <div className="text-[12px] font-semibold text-slate-700 dark:text-slate-200 leading-snug">
                    Level 5, 100 Walker St, North Sydney NSW 2060, Australia
                  </div>
                </div>
              </div>

              {/* Hours / Online Service */}
              <div className="flex items-start gap-3 group">
                <div className="w-9 h-9 rounded-xl bg-white/90 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800/60 flex items-center justify-center text-brand-primary dark:text-emerald-400 shadow-sm group-hover:scale-105 group-hover:border-brand-primary transition-all duration-200 shrink-0">
                  <ClockCircleOutlined className="text-sm" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Operating Hours
                  </div>
                  <div className="text-[12px] font-semibold text-slate-700 dark:text-slate-200">
                    Mon – Fri: 9:00 AM – 6:00 PM AEST (100% Online)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ========== Bottom Bar Separator ========== */}
      <div className="border-t border-emerald-300/60 dark:border-emerald-900/50">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[12px] text-slate-600 dark:text-slate-400">
          {/* Left: Copyright */}
          <p>
            © {new Date().getFullYear()} Financially Up. All rights reserved.
          </p>

          {/* Right: Back to Top & Developed by Innotech Cloud */}
          <div className="flex items-center gap-4 font-medium">
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1 hover:text-brand-primary dark:hover:text-emerald-400 transition-colors cursor-pointer"
            >
              <span>Back to top</span>
              <ArrowUpOutlined className="text-[10px]" />
            </button>

            <span className="text-slate-400 dark:text-slate-600">|</span>

            <p>
              Crafted with care in{" "}
              <a
                href="http://innotechcloud.com/"
                target="_blank"
                rel="noreferrer"
                className="font-bold text-brand-primary dark:text-emerald-400 hover:underline"
              >
                Innotech Cloud
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
