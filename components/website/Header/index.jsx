"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dropdown, Drawer, Button } from "antd";
import {
  DownOutlined,
  MenuOutlined,
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
      {/* Top Bar with Primary Animated Gradient */}
      <div className={`${styles.topbarGradientAnimated} text-white py-2.5 px-4 sm:px-8 text-xs font-medium border-b border-emerald-800/40 shadow-sm`}>
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
            <span className="tracking-wide">
              Trusted Australian Accountants — 100% Online, ATO Compliant
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

      {/* Mobile Drawer */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        className="dark:bg-zinc-950 dark:text-zinc-100"
      >
        <div className="flex flex-col gap-4 text-base font-medium">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-primary"
          >
            Home
          </Link>
          <div className="border-t border-slate-100 dark:border-zinc-800 pt-2">
            <Link
              href="/individual-services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase text-slate-400 font-bold tracking-wider hover:text-brand-primary block mb-1"
            >
              Individual Tax →
            </Link>
            <div className="pl-3 mt-1 flex flex-col gap-2 text-sm">
              <Link
                href="/individual-services/individual-tax-return"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <UserOutlined className="text-brand-primary" /> Individual Tax
                Return
              </Link>
              <Link
                href="/individual-services/individual-tax-return-with-investment-properties"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <HomeOutlined className="text-brand-primary" /> Tax Return with
                Investment Properties
              </Link>
            </div>
          </div>

          <div className="border-t border-slate-100 dark:border-zinc-800 pt-2">
            <Link
              href="/business-services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase text-slate-400 font-bold tracking-wider hover:text-brand-primary block mb-1"
            >
              Business Tax →
            </Link>
            <div className="pl-3 mt-1 flex flex-col gap-2 text-sm">
              <Link
                href="/business-services/sole-trader"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <UserOutlined className="text-brand-primary" /> Sole Trader
              </Link>
              <Link
                href="/business-services/partnership-tax-return"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <TeamOutlined className="text-brand-primary" /> Partnership
              </Link>
              <Link
                href="/business-services/company-tax-return"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <BankOutlined className="text-brand-primary" /> Company Tax
              </Link>
              <Link
                href="/business-services/trust-tax-return"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <SafetyCertificateOutlined className="text-brand-primary" /> Trust
                Tax
              </Link>
              <Link
                href="/business-services/bas-gst-lodgement"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <AuditOutlined className="text-brand-primary" /> BAS / GST
              </Link>
            </div>
          </div>

          <Link
            href="/book-keeping"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-primary"
          >
            Bookkeeping
          </Link>

          <div className="border-t border-slate-100 dark:border-zinc-800 pt-2">
            <span className="text-xs uppercase text-slate-400 font-bold tracking-wider">
              Business Registration
            </span>
            <div className="pl-3 mt-1 flex flex-col gap-2 text-sm">
              <Link
                href="/resources/registration-forms/gst-registrations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <FileProtectOutlined className="text-brand-primary" /> GST
                Registrations
              </Link>
              <Link
                href="/resources/registration-forms/company-registration"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <SolutionOutlined className="text-brand-primary" /> Company
                Registration
              </Link>
              <Link
                href="/resources/registration-forms/changes-to-company-details"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <SwapOutlined className="text-brand-primary" /> Changes to Company
                Details
              </Link>
              <Link
                href="/resources/registration-forms/trust-registrations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <SafetyOutlined className="text-brand-primary" /> Trust
                Registrations
              </Link>
              <Link
                href="/resources/registration-forms/smsf-registrations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <BookOutlined className="text-brand-primary" /> SMSF Registrations
              </Link>
              <Link
                href="/resources/registration-forms/business-name-registrations"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <IdcardOutlined className="text-brand-primary" /> Business Name
                Registrations
              </Link>
              <Link
                href="/resources/registration-forms/apply-tfn-abns"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2"
              >
                <FormOutlined className="text-brand-primary" /> Apply TFN / ABNs
              </Link>
            </div>
          </div>

          <Link
            href="/blog"
            onClick={() => setMobileMenuOpen(false)}
            className="hover:text-brand-primary"
          >
            Blog
          </Link>

          <div className="mt-4 pt-4 border-t border-slate-100 dark:border-zinc-800">
            <Link
              href="/book-an-appointment"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-brand-primary text-white py-3 rounded-xl font-semibold text-center"
            >
              <span>Book an Appointment</span>
              <ArrowRightOutlined />
            </Link>
          </div>
        </div>
      </Drawer>
    </header>
  );
}
