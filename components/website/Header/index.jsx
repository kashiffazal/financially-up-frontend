"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dropdown, Drawer, Button } from "antd";
import {
  DownOutlined,
  MenuOutlined,
  CloseOutlined,
  PhoneOutlined,
  MailOutlined,
  SunOutlined,
  MoonOutlined,
  ArrowRightOutlined,
  UserOutlined,
  HomeOutlined,
  TeamOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  AuditOutlined,
  FileProtectOutlined,
  SolutionOutlined,
  SwapOutlined,
  SafetyOutlined,
  BookOutlined,
  IdcardOutlined,
  FormOutlined,
  FileTextOutlined,
  MedicineBoxOutlined,
} from "@ant-design/icons";
import { useTheme } from "../../../app/ThemeProvider";
import styles from "./Header.module.css";

export default function WebsiteHeader() {
  const { isDark, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedSections, setExpandedSections] = useState({
    individual: false,
    business: false,
    registration: false,
  });

  const toggleSection = (sectionKey) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  // Individual Tax Dropdown Items with Icons
  const individualTaxItems = [
    {
      key: "ind-tax-return",
      label: (
        <Link
          href="/individual-services/individual-tax-return"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <UserOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Individual Tax Return</span>
        </Link>
      ),
    },
    {
      key: "ind-tax-investment",
      label: (
        <Link
          href="/individual-services/individual-tax-return-with-investment-properties"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <HomeOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Tax Return with Investment Properties</span>
        </Link>
      ),
    },
  ];

  // Business Tax Dropdown Items with Icons
  const businessTaxItems = [
    {
      key: "sole-trader",
      label: (
        <Link
          href="/business-services/sole-trader"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <UserOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Sole Trader Tax Return</span>
        </Link>
      ),
    },
    {
      key: "partnership",
      label: (
        <Link
          href="/business-services/partnership-tax-return"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <TeamOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Partnership Tax Return</span>
        </Link>
      ),
    },
    {
      key: "company-tax",
      label: (
        <Link
          href="/business-services/company-tax-return"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <BankOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Company Tax Return</span>
        </Link>
      ),
    },
    {
      key: "trust-tax",
      label: (
        <Link
          href="/business-services/trust-tax-return"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Trust Tax Return</span>
        </Link>
      ),
    },
    {
      key: "bas-gst",
      label: (
        <Link
          href="/business-services/bas-gst-lodgement"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <AuditOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>BAS / GST Lodgement</span>
        </Link>
      ),
    },
  ];

  // Business Registration Dropdown Items with Icons
  const businessRegistrationItems = [
    {
      key: "gst-reg",
      label: (
        <Link
          href="/resources/registration-forms/gst-registrations"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <FileProtectOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>GST Registrations</span>
        </Link>
      ),
    },
    {
      key: "company-reg",
      label: (
        <Link
          href="/resources/registration-forms/company-registration"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <SolutionOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Company Registration</span>
        </Link>
      ),
    },
    {
      key: "company-changes",
      label: (
        <Link
          href="/resources/registration-forms/changes-to-company-details"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <SwapOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Changes To Company Details</span>
        </Link>
      ),
    },
    {
      key: "trust-reg",
      label: (
        <Link
          href="/resources/registration-forms/trust-registrations"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <SafetyOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Trust Registrations</span>
        </Link>
      ),
    },
    {
      key: "smsf-reg",
      label: (
        <Link
          href="/resources/registration-forms/smsf-registrations"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <BookOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>SMSF Registrations</span>
        </Link>
      ),
    },
    {
      key: "biz-name-reg",
      label: (
        <Link
          href="/resources/registration-forms/business-name-registrations"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <IdcardOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Business Name Registrations</span>
        </Link>
      ),
    },
    {
      key: "tfn-abn",
      label: (
        <Link
          href="/resources/registration-forms/apply-tfn-abns"
          className="py-1.5 flex items-center gap-2.5 font-medium text-slate-700 dark:text-zinc-200 hover:text-brand-primary"
        >
          <FormOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
          <span>Apply TFN / ABNs</span>
        </Link>
      ),
    },
  ];

  // Resources Nested Dropdown Items with Icons
  const resourcesItems = [
    {
      key: "reg-forms-group",
      label: (
        <span className="flex items-center gap-2 font-semibold text-slate-800 dark:text-zinc-200">
          <FileTextOutlined className="text-brand-primary dark:text-emerald-400" />
          <span>Registration Forms</span>
        </span>
      ),
      children: [
        {
          key: "r-gst",
          label: (
            <Link
              href="/resources/registration-forms/gst-registrations"
              className="flex items-center gap-2"
            >
              <FileProtectOutlined className="text-xs text-brand-primary" /> GST
              Registrations
            </Link>
          ),
        },
        {
          key: "r-company",
          label: (
            <Link
              href="/resources/registration-forms/company-registration"
              className="flex items-center gap-2"
            >
              <SolutionOutlined className="text-xs text-brand-primary" /> Company
              Registration
            </Link>
          ),
        },
        {
          key: "r-changes",
          label: (
            <Link
              href="/resources/registration-forms/changes-to-company-details"
              className="flex items-center gap-2"
            >
              <SwapOutlined className="text-xs text-brand-primary" /> Changes to
              Company Details
            </Link>
          ),
        },
        {
          key: "r-trust",
          label: (
            <Link
              href="/resources/registration-forms/trust-registrations"
              className="flex items-center gap-2"
            >
              <SafetyOutlined className="text-xs text-brand-primary" /> Trust
              Registrations
            </Link>
          ),
        },
        {
          key: "r-smsf",
          label: (
            <Link
              href="/resources/registration-forms/smsf-registrations"
              className="flex items-center gap-2"
            >
              <BookOutlined className="text-xs text-brand-primary" /> SMSF
              Registrations
            </Link>
          ),
        },
        {
          key: "r-biz",
          label: (
            <Link
              href="/resources/registration-forms/business-name-registrations"
              className="flex items-center gap-2"
            >
              <IdcardOutlined className="text-xs text-brand-primary" /> Business
              Name Registrations
            </Link>
          ),
        },
        {
          key: "r-tfn",
          label: (
            <Link
              href="/resources/registration-forms/apply-tfn-abns"
              className="flex items-center gap-2"
            >
              <FormOutlined className="text-xs text-brand-primary" /> Apply TFN /
              ABNs
            </Link>
          ),
        },
      ],
    },
    {
      key: "eng-forms-group",
      label: (
        <span className="flex items-center gap-2 font-semibold text-slate-800 dark:text-zinc-200">
          <FormOutlined className="text-brand-primary dark:text-emerald-400" />
          <span>Engagement Forms</span>
        </span>
      ),
      children: [
        {
          key: "e-ind",
          label: (
            <Link
              href="/resources/engagement-forms/individual-engagement-form"
              className="flex items-center gap-2"
            >
              <UserOutlined className="text-xs text-brand-primary" /> Individual
              Engagement Form
            </Link>
          ),
        },
        {
          key: "e-ent",
          label: (
            <Link
              href="/resources/engagement-forms/entity-engagements-form"
              className="flex items-center gap-2"
            >
              <BankOutlined className="text-xs text-brand-primary" /> Entity
              Engagement Form
            </Link>
          ),
        },
      ],
    },
    {
      key: "med-forms-group",
      label: (
        <span className="flex items-center gap-2 font-semibold text-slate-800 dark:text-zinc-200">
          <MedicineBoxOutlined className="text-brand-primary dark:text-emerald-400" />
          <span>Medicare Forms</span>
        </span>
      ),
      children: [
        {
          key: "m-exemption",
          label: (
            <Link
              href="/resources/medicare-forms/medicare-exemption-form"
              className="flex items-center gap-2"
            >
              <MedicineBoxOutlined className="text-xs text-brand-primary" />{" "}
              Medicare Exemption Form
            </Link>
          ),
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* Top Bar with Primary Animated Gradient (Hidden on Mobile) */}
      <div className={`hidden sm:block ${styles.topbarGradientAnimated} text-white py-2.5 px-4 sm:px-8 text-xs font-medium border-b border-emerald-800/40 shadow-sm`}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
            <span className="tracking-wide">
              Trusted Australian Accountants - 100% Online, ATO Compliant
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href="tel:1300328316"
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <PhoneOutlined className="text-emerald-200" />
              <span>1300 328 316</span>
            </a>
            <a
              href="mailto:info@financiallyup.com.au"
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <MailOutlined className="text-emerald-200" />
              <span>info@financiallyup.com.au</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-slate-100 dark:border-zinc-800 px-4 sm:px-8 py-3.5">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between">
          {/* Brand Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <Image
              src={isDark ? "/images/logo-w.png" : "/images/logo.png"}
              alt="Financially Up Logo"
              width={180}
              height={45}
              priority
              className="h-10 w-auto object-contain transition-transform group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-slate-700 dark:text-zinc-200">
            <Link
              href="/"
              className={`hover:text-brand-primary transition-colors ${
                pathname === "/" ? "text-brand-primary" : ""
              }`}
            >
              Home
            </Link>

            {/* Individual Tax Dropdown */}
            <Dropdown
              menu={{ items: individualTaxItems }}
              placement="bottomLeft"
              arrow
            >
              <Link
                href="/individual-services"
                className={`flex items-center gap-1 hover:text-brand-primary transition-colors py-1 cursor-pointer ${
                  pathname?.startsWith('/individual-services') ? 'text-brand-primary' : ''
                }`}
              >
                Individual Tax <DownOutlined className="text-[10px]" />
              </Link>
            </Dropdown>

            {/* Business Tax Dropdown */}
            <Dropdown
              menu={{ items: businessTaxItems }}
              placement="bottomLeft"
              arrow
            >
              <Link
                href="/business-services"
                className={`flex items-center gap-1 hover:text-brand-primary transition-colors py-1 cursor-pointer ${
                  pathname?.startsWith('/business-services') ? 'text-brand-primary' : ''
                }`}
              >
                Business Tax <DownOutlined className="text-[10px]" />
              </Link>
            </Dropdown>

            {/* Bookkeeping */}
            <Link
              href="/book-keeping"
              className={`hover:text-brand-primary transition-colors ${
                pathname === "/book-keeping" ? "text-brand-primary" : ""
              }`}
            >
              Bookkeeping
            </Link>

            {/* Business Registration Dropdown */}
            <Dropdown
              menu={{ items: businessRegistrationItems }}
              placement="bottomLeft"
              arrow
            >
              <button className="flex items-center gap-1 hover:text-brand-primary transition-colors py-1 cursor-pointer">
                Business Registration <DownOutlined className="text-[10px]" />
              </button>
            </Dropdown>

            {/* Resources Sub-dropdown */}
            <Dropdown
              menu={{ items: resourcesItems }}
              placement="bottomLeft"
              arrow
            >
              <button className="flex items-center gap-1 hover:text-brand-primary transition-colors py-1 cursor-pointer">
                Resources <DownOutlined className="text-[10px]" />
              </button>
            </Dropdown>

            {/* Blog */}
            <Link
              href="/blog"
              className={`hover:text-brand-primary transition-colors ${
                pathname === "/blog" ? "text-brand-primary" : ""
              }`}
            >
              Blog
            </Link>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-xl border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-900 text-slate-600 dark:text-zinc-300 transition-all cursor-pointer"
              aria-label="Toggle Dark Mode"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <SunOutlined className="text-amber-400 text-base" />
              ) : (
                <MoonOutlined className="text-slate-600 text-base" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              href="/book-an-appointment"
              className="hidden sm:inline-block"
            >
              <Button
                type="primary"
                size="large"
                className="h-10 px-5 rounded-xl font-semibold text-sm bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20"
              >
                Appointment
              </Button>
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-200"
              aria-label="Open Mobile Menu"
            >
              <MenuOutlined className="text-lg" />
            </button>
          </div>
        </div>
      </div>

      {/* Executive Mobile Drawer Design */}
      <Drawer
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        closeIcon={null}
        width={340}
        styles={{
          body: { padding: 0 },
          header: { display: "none" },
        }}
        className="dark:bg-zinc-950 dark:text-zinc-100"
      >
        <div className="flex flex-col h-full bg-slate-50/50 dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 font-sans">
          {/* Top Bar: Logo on left, Theme switch & Close button on right */}
          <div className="p-4 border-b border-slate-200/80 dark:border-zinc-800 flex items-center justify-between bg-white dark:bg-zinc-900 shrink-0">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center">
              <Image
                src={isDark ? "/images/logo-w.png" : "/images/logo.png"}
                alt="Financially Up Logo"
                width={130}
                height={34}
                className="h-7 w-auto object-contain"
              />
            </Link>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 text-slate-700 dark:text-zinc-200 flex items-center justify-center cursor-pointer"
                aria-label="Toggle Theme"
              >
                {isDark ? (
                  <SunOutlined className="text-amber-400 text-sm" />
                ) : (
                  <MoonOutlined className="text-slate-600 text-sm" />
                )}
              </button>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-9 h-9 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 hover:border-brand-primary hover:text-brand-primary bg-white dark:bg-zinc-900 flex items-center justify-center transition-all cursor-pointer"
                aria-label="Close Menu"
              >
                <CloseOutlined className="text-sm font-bold" />
              </button>
            </div>
          </div>

          {/* Body Menu Items with Executive Rounded Cards */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {/* 1. Home */}
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                pathname === "/"
                  ? "bg-brand-primary text-white border-brand-primary font-extrabold shadow-md shadow-emerald-600/20"
                  : "bg-white dark:bg-zinc-900 border-slate-200/80 dark:border-zinc-800 text-slate-900 dark:text-zinc-50 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm ${
                    pathname === "/"
                      ? "bg-white/20 text-white"
                      : "bg-brand-primary-soft text-brand-primary dark:bg-emerald-950 dark:text-emerald-400"
                  }`}
                >
                  <HomeOutlined />
                </div>
                <span className={`text-sm font-semibold ${pathname === "/" ? "text-white" : "text-slate-900 dark:text-zinc-50"}`}>
                  Home
                </span>
              </div>
            </Link>

            {/* 2. Individual Tax Category */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-all">
              <button
                onClick={() => toggleSection("individual")}
                className={`w-full p-3.5 flex items-center justify-between transition-all cursor-pointer ${
                  expandedSections.individual || pathname?.startsWith("/individual-services")
                    ? "bg-brand-primary-soft/60 dark:bg-emerald-950/60 text-brand-primary dark:text-emerald-400 font-extrabold"
                    : "text-slate-900 dark:text-zinc-50 hover:text-brand-primary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-primary-soft text-brand-primary dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center text-sm font-bold">
                    <UserOutlined />
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-zinc-50">Individual Tax</span>
                </div>
                <DownOutlined
                  className={`text-xs transition-transform duration-300 ${
                    expandedSections.individual ? "rotate-180 text-brand-primary" : "text-slate-400"
                  }`}
                />
              </button>

              {expandedSections.individual && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-slate-50/50 dark:bg-zinc-950/50 border-t border-slate-100 dark:border-zinc-800/80">
                  <Link
                    href="/individual-services/individual-tax-return"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <UserOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Individual Tax Return</span>
                  </Link>
                  <Link
                    href="/individual-services/individual-tax-return-with-investment-properties"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <HomeOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Tax Return with Investment Properties</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 3. Business Tax Category */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-all">
              <button
                onClick={() => toggleSection("business")}
                className={`w-full p-3.5 flex items-center justify-between transition-all cursor-pointer ${
                  expandedSections.business || pathname?.startsWith("/business-services")
                    ? "bg-brand-primary-soft/60 dark:bg-emerald-950/60 text-brand-primary dark:text-emerald-400 font-extrabold"
                    : "text-slate-900 dark:text-zinc-50 hover:text-brand-primary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-primary-soft text-brand-primary dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center text-sm font-bold">
                    <BankOutlined />
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-zinc-50">Business Tax</span>
                </div>
                <DownOutlined
                  className={`text-xs transition-transform duration-300 ${
                    expandedSections.business ? "rotate-180 text-brand-primary" : "text-slate-400"
                  }`}
                />
              </button>

              {expandedSections.business && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-slate-50/50 dark:bg-zinc-950/50 border-t border-slate-100 dark:border-zinc-800/80">
                  <Link
                    href="/business-services/sole-trader"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <UserOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Sole Trader Tax Return</span>
                  </Link>
                  <Link
                    href="/business-services/partnership-tax-return"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <TeamOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Partnership Tax Return</span>
                  </Link>
                  <Link
                    href="/business-services/company-tax-return"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <BankOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Company Tax Return</span>
                  </Link>
                  <Link
                    href="/business-services/trust-tax-return"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <SafetyCertificateOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Trust Tax Return</span>
                  </Link>
                  <Link
                    href="/business-services/bas-gst-lodgement"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <AuditOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">BAS / GST Lodgement</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 4. Bookkeeping */}
            <Link
              href="/book-keeping"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                pathname === "/book-keeping"
                  ? "bg-brand-primary text-white border-brand-primary font-extrabold shadow-md shadow-emerald-600/20"
                  : "bg-white dark:bg-zinc-900 border-slate-200/80 dark:border-zinc-800 text-slate-900 dark:text-zinc-50 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm ${
                    pathname === "/book-keeping"
                      ? "bg-white/20 text-white"
                      : "bg-brand-primary-soft text-brand-primary dark:bg-emerald-950 dark:text-emerald-400"
                  }`}
                >
                  <BookOutlined />
                </div>
                <span className={`text-sm font-semibold ${pathname === "/book-keeping" ? "text-white" : "text-slate-900 dark:text-zinc-50"}`}>
                  Bookkeeping
                </span>
              </div>
            </Link>

            {/* 5. Business Registration Category */}
            <div className="rounded-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden transition-all">
              <button
                onClick={() => toggleSection("registration")}
                className={`w-full p-3.5 flex items-center justify-between transition-all cursor-pointer ${
                  expandedSections.registration || pathname?.includes("/registration-forms")
                    ? "bg-brand-primary-soft/60 dark:bg-emerald-950/60 text-brand-primary dark:text-emerald-400 font-extrabold"
                    : "text-slate-900 dark:text-zinc-50 hover:text-brand-primary"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-xl bg-brand-primary-soft text-brand-primary dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center text-sm font-bold">
                    <FileProtectOutlined />
                  </div>
                  <span className="text-sm font-semibold text-slate-900 dark:text-zinc-50">Business Registration</span>
                </div>
                <DownOutlined
                  className={`text-xs transition-transform duration-300 ${
                    expandedSections.registration ? "rotate-180 text-brand-primary" : "text-slate-400"
                  }`}
                />
              </button>

              {expandedSections.registration && (
                <div className="px-3 pb-3 pt-1 space-y-1 bg-slate-50/50 dark:bg-zinc-950/50 border-t border-slate-100 dark:border-zinc-800/80">
                  <Link
                    href="/resources/registration-forms/gst-registrations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <FileProtectOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">GST Registrations</span>
                  </Link>
                  <Link
                    href="/resources/registration-forms/company-registration"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <SolutionOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Company Registration</span>
                  </Link>
                  <Link
                    href="/resources/registration-forms/changes-to-company-details"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <SwapOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Changes to Company Details</span>
                  </Link>
                  <Link
                    href="/resources/registration-forms/trust-registrations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <SafetyOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Trust Registrations</span>
                  </Link>
                  <Link
                    href="/resources/registration-forms/smsf-registrations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <BookOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">SMSF Registrations</span>
                  </Link>
                  <Link
                    href="/resources/registration-forms/business-name-registrations"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <IdcardOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Business Name Registrations</span>
                  </Link>
                  <Link
                    href="/resources/registration-forms/apply-tfn-abns"
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-2.5 rounded-xl flex items-center gap-3 text-xs font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-all"
                  >
                    <FormOutlined className="text-brand-primary text-xs" />
                    <span className="text-slate-800 dark:text-zinc-200">Apply TFN / ABNs</span>
                  </Link>
                </div>
              )}
            </div>

            {/* 6. Blog */}
            <Link
              href="/blog"
              onClick={() => setMobileMenuOpen(false)}
              className={`p-3.5 rounded-2xl border transition-all flex items-center justify-between ${
                pathname === "/blog"
                  ? "bg-brand-primary text-white border-brand-primary font-extrabold shadow-md shadow-emerald-600/20"
                  : "bg-white dark:bg-zinc-900 border-slate-200/80 dark:border-zinc-800 text-slate-900 dark:text-zinc-50 hover:border-brand-primary hover:text-brand-primary"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm ${
                    pathname === "/blog"
                      ? "bg-white/20 text-white"
                      : "bg-brand-primary-soft text-brand-primary dark:bg-emerald-950 dark:text-emerald-400"
                  }`}
                >
                  <FileTextOutlined />
                </div>
                <span className={`text-sm font-semibold ${pathname === "/blog" ? "text-white" : "text-slate-900 dark:text-zinc-50"}`}>
                  Blog
                </span>
              </div>
            </Link>

            {/* 7. Prominent CTA Button after Navigation */}
            <div className="pt-2">
              <Link
                href="/book-an-appointment"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2.5 w-full bg-brand-primary hover:bg-brand-primary-hover text-white py-3.5 px-4 rounded-2xl font-extrabold text-sm shadow-md shadow-emerald-600/20 active:scale-98 transition-all"
              >
                <span className="text-white font-extrabold">Book an Appointment</span>
                <ArrowRightOutlined className="text-white text-xs" />
              </Link>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-4 border-t border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 flex items-center justify-between text-xs font-semibold shrink-0">
            <div className="text-xs font-semibold text-slate-500 dark:text-zinc-400">
              Direct Contact:
            </div>

            <a
              href="tel:1300328316"
              className="text-brand-primary dark:text-emerald-400 flex items-center gap-1.5 font-bold text-xs"
            >
              <PhoneOutlined /> 1300 328 316
            </a>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
