"use client";

import React, { useState, useRef, useEffect, useMemo } from "react";
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
  RightOutlined,
  UserOutlined,
  HomeOutlined,
  BankOutlined,
  AuditOutlined,
  BookOutlined,
  SolutionOutlined,
  SafetyCertificateOutlined,
  FileProtectOutlined,
  SecurityScanOutlined,
  DeploymentUnitOutlined,
  SafetyOutlined,
  RiseOutlined,
  LineChartOutlined,
  GlobalOutlined,
  ExperimentOutlined,
  FileTextOutlined,
  MedicineBoxOutlined,
  FormOutlined,
  SwapOutlined,
  IdcardOutlined,
  CalendarOutlined,
  TeamOutlined,
  ContactsOutlined,
} from "@ant-design/icons";
import { useTheme } from "../../../app/ThemeProvider";
import styles from "./Header.module.css";
import { useCompany } from "@/context/SettingsContext";
import ServicesMegaMenu from "./ServicesMegaMenu";
import {
  MAIN_SERVICES_MEGA_MENU,
  MEGA_MENU_CATEGORIES,
  findPillarByPath,
  isServicePathMatch,
} from "@/data/servicesMegaMenuData";

/**
 * Mobile Icon resolver mapping data iconKey to Ant Design icon components
 */
const MOBILE_ICON_MAP = {
  UserOutlined: UserOutlined,
  BankOutlined: BankOutlined,
  SolutionOutlined: SolutionOutlined,
  BookOutlined: BookOutlined,
  AuditOutlined: AuditOutlined,
  DeploymentUnitOutlined: DeploymentUnitOutlined,
  FileProtectOutlined: FileProtectOutlined,
  SafetyOutlined: SafetyOutlined,
  SafetyCertificateOutlined: SafetyCertificateOutlined,
  HomeOutlined: HomeOutlined,
  SecurityScanOutlined: SecurityScanOutlined,
  RiseOutlined: RiseOutlined,
  LineChartOutlined: LineChartOutlined,
  GlobalOutlined: GlobalOutlined,
  ExperimentOutlined: ExperimentOutlined,
};

function renderMobilePillarIcon(iconKey) {
  const IconComponent = MOBILE_ICON_MAP[iconKey] || SolutionOutlined;
  return <IconComponent className="text-xs" />;
}

/**
 * WebsiteHeader Component
 * ======================
 * Executive header featuring:
 * 1. Animated Top Banner with dynamic phone & email via useCompany()
 * 2. High-performance Desktop Navbar with full Services Mega Menu covering all 15 Main Services
 * 3. Mobile Executive Drawer with multi-level accordion covering all 15 pillars & sub-services
 * 4. Dark / Light mode toggle with persistent smooth transitions
 */
export default function WebsiteHeader() {
  const { isDark, toggleTheme } = useTheme();
  const company = useCompany();
  const pathname = usePathname();

  // Resolve current route pillar based on pathname
  const currentRoutePillar = useMemo(() => {
    return findPillarByPath(pathname);
  }, [pathname]);

  // Desktop Mega Menu open state with mouse-intent debounce
  const [servicesMegaMenuOpen, setServicesMegaMenuOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  // Mobile menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileCategory, setMobileCategory] = useState("all");
  const [mobileExpandedSection, setMobileExpandedSection] = useState({
    services: false,
    resources: false,
    regForms: false,
    engForms: false,
    medForms: false,
  });
  const [mobileActivePillarId, setMobileActivePillarId] = useState(null);

  // Open mobile drawer with pre-expanded active service section if present
  const handleOpenMobileMenu = () => {
    if (currentRoutePillar) {
      setMobileExpandedSection((prev) => ({ ...prev, services: true }));
      setMobileActivePillarId(currentRoutePillar.id);
    }
    setMobileMenuOpen(true);
  };

  // Filtered pillars for mobile services explorer
  const filteredMobilePillars = useMemo(() => {
    if (mobileCategory === "all") return MAIN_SERVICES_MEGA_MENU;
    return MAIN_SERVICES_MEGA_MENU.filter(
      (p) => p.category === mobileCategory
    );
  }, [mobileCategory]);

  // Adjust state during render on pathname change without ref or effect warnings
  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (servicesMegaMenuOpen) setServicesMegaMenuOpen(false);
    if (mobileMenuOpen) setMobileMenuOpen(false);
  }

  // Desktop Mega Menu Mouse Enter handler
  const handleServicesMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setServicesMegaMenuOpen(true);
  };

  // Desktop Mega Menu Mouse Leave handler (with 200ms grace period)
  const handleServicesMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setServicesMegaMenuOpen(false);
    }, 200);
  };

  // Mobile Section Toggle
  const toggleMobileSection = (sectionKey) => {
    setMobileExpandedSection((prev) => ({
      ...prev,
      [sectionKey]: !prev[sectionKey],
    }));
  };

  // Mobile Pillar Accordion Toggle
  const toggleMobilePillar = (pillarId) => {
    setMobileActivePillarId((prev) => (prev === pillarId ? null : pillarId));
  };

  // Resources Nested Dropdown Items for Desktop Navbar
  const resourcesItems = [
    {
      key: "reg-forms-group",
      label: (
        <Link
          href="/resources/registration-forms"
          className="flex items-center gap-2 font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary"
        >
          <FileTextOutlined className="text-brand-primary dark:text-emerald-400" />
          <span>Registration Forms</span>
        </Link>
      ),
      children: [
        {
          key: "r-gst",
          label: (
            <Link
              href="/resources/registration-forms/gst-registrations"
              className="flex items-center gap-2"
            >
              <FileProtectOutlined className="text-xs text-brand-primary" /> GST Registrations
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
              <SolutionOutlined className="text-xs text-brand-primary" /> Company Registration
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
              <SwapOutlined className="text-xs text-brand-primary" /> Changes to Company Details
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
              <SafetyOutlined className="text-xs text-brand-primary" /> Trust Registrations
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
              <BookOutlined className="text-xs text-brand-primary" /> SMSF Registrations
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
              <IdcardOutlined className="text-xs text-brand-primary" /> Business Name Registrations
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
              <FormOutlined className="text-xs text-brand-primary" /> Apply TFN / ABNs
            </Link>
          ),
        },
      ],
    },
    {
      key: "eng-forms-group",
      label: (
        <Link
          href="/resources/engagement-forms"
          className="flex items-center gap-2 font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary"
        >
          <FormOutlined className="text-brand-primary dark:text-emerald-400" />
          <span>Engagement Forms</span>
        </Link>
      ),
      children: [
        {
          key: "e-ind",
          label: (
            <Link
              href="/resources/engagement-forms/individual-engagement-form"
              className="flex items-center gap-2"
            >
              <UserOutlined className="text-xs text-brand-primary" /> Individual Engagement Form
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
              <BankOutlined className="text-xs text-brand-primary" /> Entity Engagement Form
            </Link>
          ),
        },
      ],
    },
    {
      key: "med-forms-group",
      label: (
        <Link
          href="/resources/medicare-forms"
          className="flex items-center gap-2 font-semibold text-slate-800 dark:text-zinc-200 hover:text-brand-primary"
        >
          <MedicineBoxOutlined className="text-brand-primary dark:text-emerald-400" />
          <span>Medicare Forms</span>
        </Link>
      ),
      children: [
        {
          key: "m-exemption",
          label: (
            <Link
              href="/resources/medicare-forms/medicare-exemption-form"
              className="flex items-center gap-2"
            >
              <MedicineBoxOutlined className="text-xs text-brand-primary" /> Medicare Exemption Form
            </Link>
          ),
        },
      ],
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full transition-colors duration-300">
      {/* Top Bar with Primary Animated Gradient (Hidden on Mobile) */}
      <div
        className={`hidden sm:block ${styles.topbarGradientAnimated} text-white py-2.5 px-4 sm:px-8 text-xs font-medium border-b border-emerald-800/40 shadow-sm`}
      >
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-ping inline-block" />
            <span className="tracking-wide">
              Trusted Australian Accountants - 100% Online, ATO Compliant
            </span>
          </div>
          <div className="flex items-center gap-6">
            <a
              href={`tel:${company.phone?.replace(/\s/g, "")}`}
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <PhoneOutlined className="text-emerald-200" />
              <span>{company.phone}</span>
            </a>
            <a
              href={`mailto:${company.email}`}
              className="flex items-center gap-1.5 hover:text-emerald-200 transition-colors"
            >
              <MailOutlined className="text-emerald-200" />
              <span>{company.email}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-slate-100 dark:border-zinc-800 px-4 sm:px-8 py-3.5 relative">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
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
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-semibold text-slate-700 dark:text-zinc-200">
            {/* 1. Home */}
            <Link
              href="/"
              className={`hover:text-brand-primary transition-colors ${
                pathname === "/" ? "text-brand-primary font-bold" : ""
              }`}
            >
              Home
            </Link>

            {/* 2. About */}
            <Link
              href="/about"
              className={`hover:text-brand-primary transition-colors ${
                pathname === "/about" ? "text-brand-primary font-bold" : ""
              }`}
            >
              About
            </Link>

            {/* 3. Services Dropdown as Mega Menu */}
            <div
              className="relative py-2"
              onMouseEnter={handleServicesMouseEnter}
              onMouseLeave={handleServicesMouseLeave}
            >
              <Link
                href="/services"
                onClick={() => setServicesMegaMenuOpen(false)}
                className={`inline-flex items-center gap-1.5 hover:text-brand-primary transition-colors cursor-pointer ${
                  pathname === "/services" || pathname?.startsWith("/services/")
                    ? "text-brand-primary font-bold"
                    : ""
                }`}
              >
                <span>Services</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded-full bg-emerald-100 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400 font-bold">
                  15
                </span>
                <DownOutlined
                  className={`text-[10px] transition-transform duration-200 ${
                    servicesMegaMenuOpen ? "rotate-180 text-brand-primary" : "text-slate-400"
                  }`}
                />
              </Link>
            </div>

            {/* 4. Resources Sub-dropdown */}
            <Dropdown
              menu={{ items: resourcesItems }}
              placement="bottomLeft"
              arrow
            >
              <button
                className={`flex items-center gap-1 hover:text-brand-primary transition-colors py-2 cursor-pointer ${
                  pathname?.startsWith("/resources") ? "text-brand-primary font-bold" : ""
                }`}
              >
                <span>Resources</span>
                <DownOutlined className="text-[10px]" />
              </button>
            </Dropdown>

            {/* 5. Blog */}
            <Link
              href="/blog"
              className={`hover:text-brand-primary transition-colors ${
                pathname === "/blog" ? "text-brand-primary font-bold" : ""
              }`}
            >
              Blog
            </Link>

            {/* 6. Contact */}
            <Link
              href="/contact"
              className={`hover:text-brand-primary transition-colors ${
                pathname === "/contact" ? "text-brand-primary font-bold" : ""
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md border border-slate-200 dark:border-zinc-800 hover:bg-slate-100 dark:hover:bg-zinc-900 text-slate-600 dark:text-zinc-300 transition-all cursor-pointer"
              aria-label="Toggle Dark Mode"
              title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {isDark ? (
                <SunOutlined className="text-amber-400 text-base" />
              ) : (
                <MoonOutlined className="text-slate-600 text-base" />
              )}
            </button>

            {/* Appointment CTA Button */}
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
              onClick={handleOpenMobileMenu}
              className="lg:hidden p-2 rounded-xl border border-slate-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-200 cursor-pointer"
              aria-label="Open Mobile Menu"
            >
              <MenuOutlined className="text-lg" />
            </button>
          </div>
        </div>

        {/* Desktop Services Mega Menu Component */}
        <div
          onMouseEnter={handleServicesMouseEnter}
          onMouseLeave={handleServicesMouseLeave}
        >
          <ServicesMegaMenu
            isOpen={servicesMegaMenuOpen}
            onClose={() => setServicesMegaMenuOpen(false)}
            activePath={pathname}
          />
        </div>
      </div>

          {/* Executive Mobile Drawer Design */}
          <Drawer
            placement="right"
            onClose={() => setMobileMenuOpen(false)}
            open={mobileMenuOpen}
            closeIcon={null}
            size={360}
            styles={{
              body: { padding: 0 },
              header: { display: "none" },
            }}
            className="dark:bg-zinc-950 dark:text-zinc-100"
          >
            <div className="flex flex-col h-full bg-slate-50/60 dark:bg-zinc-950 text-slate-900 dark:text-zinc-50 font-sans">
              
              {/* 1. Header: Logo on left, Theme switch & Close button on right */}
              <div className="p-4 border-b border-slate-200/80 dark:border-zinc-800 flex items-center justify-between bg-white dark:bg-zinc-900 shrink-0">
                <Link
                  href="/"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center"
                >
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
                    className="w-9 h-9 rounded-xl border border-slate-200 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 text-slate-700 dark:text-zinc-200 flex items-center justify-center cursor-pointer hover:border-brand-primary transition-colors"
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

              {/* 2. Scrollable Body: Modern Cohesive Navigation & Actions */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3.5">
                
                {/* Unified Navigation Card Surface */}
                <div className="bg-white dark:bg-zinc-900 rounded-2xl border border-slate-200/80 dark:border-zinc-800 divide-y divide-slate-100 dark:divide-zinc-800/80 shadow-xs overflow-hidden">
                  
                  {/* Home Link */}
                  <Link
                    href="/"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 flex items-center justify-between transition-colors ${
                      pathname === "/"
                        ? "bg-brand-primary/10 text-brand-primary dark:text-emerald-400 font-bold"
                        : "text-slate-800 dark:text-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm transition-colors ${
                          pathname === "/"
                            ? "bg-brand-primary text-white"
                            : "bg-emerald-50 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400"
                        }`}
                      >
                        <HomeOutlined />
                      </div>
                      <span className="text-sm font-semibold">Home</span>
                    </div>
                    {pathname === "/" ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 shrink-0" />
                    ) : (
                      <RightOutlined className="text-xs text-slate-300 dark:text-zinc-600" />
                    )}
                  </Link>

                  {/* About Link */}
                  <Link
                    href="/about"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 flex items-center justify-between transition-colors ${
                      pathname === "/about"
                        ? "bg-brand-primary/10 text-brand-primary dark:text-emerald-400 font-bold"
                        : "text-slate-800 dark:text-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm transition-colors ${
                          pathname === "/about"
                            ? "bg-brand-primary text-white"
                            : "bg-emerald-50 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400"
                        }`}
                      >
                        <TeamOutlined />
                      </div>
                      <span className="text-sm font-semibold">About Us</span>
                    </div>
                    {pathname === "/about" ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 shrink-0" />
                    ) : (
                      <RightOutlined className="text-xs text-slate-300 dark:text-zinc-600" />
                    )}
                  </Link>

                  {/* Services Accordion (All 15 Pillars with Category Filter) */}
                  <div>
                    <button
                      onClick={() => toggleMobileSection("services")}
                      className={`w-full px-4 py-3.5 flex items-center justify-between transition-colors cursor-pointer text-left ${
                        mobileExpandedSection.services || pathname?.startsWith("/services")
                          ? "bg-emerald-50/50 dark:bg-emerald-950/30 text-brand-primary dark:text-emerald-400 font-bold"
                          : "text-slate-800 dark:text-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                      }`}
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center text-sm shrink-0">
                          <SolutionOutlined />
                        </div>
                        <div className="min-w-0">
                          <span className="text-sm font-semibold block leading-tight">Services</span>
                          <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-normal truncate block">
                            15 Accounting &amp; Advisory Pillars
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-primary text-white">
                          15
                        </span>
                        <DownOutlined
                          className={`text-xs transition-transform duration-300 ${
                            mobileExpandedSection.services ? "rotate-180 text-brand-primary" : "text-slate-400"
                          }`}
                        />
                      </div>
                    </button>

                    {/* Animated Services Accordion Container */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        mobileExpandedSection.services
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div
                          className={`p-3 bg-slate-50/70 dark:bg-zinc-950/70 border-t border-slate-100 dark:border-zinc-800 space-y-2.5 transition-opacity duration-300 ease-in-out ${
                            mobileExpandedSection.services
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          {/* Master Directory Link */}
                          <Link
                            href="/services"
                            onClick={() => setMobileMenuOpen(false)}
                            className="px-3 py-2.5 rounded-xl flex items-center justify-between text-xs font-bold bg-brand-primary hover:bg-brand-primary-hover text-white shadow-sm transition-all"
                          >
                            <span>Explore All 15 Services Directory</span>
                            <ArrowRightOutlined className="text-[10px]" />
                          </Link>

                          {/* Category Filter Pills for Mobile */}
                          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                            {MEGA_MENU_CATEGORIES.map((cat) => {
                              const isCatActive = mobileCategory === cat.id;
                              return (
                                <button
                                  key={cat.id}
                                  onClick={() => setMobileCategory(cat.id)}
                                  className={`px-2.5 py-1 rounded-lg text-[11px] font-semibold whitespace-nowrap transition-all cursor-pointer ${
                                    isCatActive
                                      ? "bg-slate-900 text-white dark:bg-white dark:text-slate-900 font-bold shadow-xs"
                                      : "bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-slate-600 dark:text-zinc-300 hover:text-brand-primary"
                                  }`}
                                >
                                  {cat.label} ({cat.count})
                                </button>
                              );
                            })}
                          </div>

                          {/* Filtered Pillars List */}
                          <div className="space-y-1.5 pt-1">
                            {filteredMobilePillars.map((pillar) => {
                              const isPillarOpen = mobileActivePillarId === pillar.id;
                              const isCurrentPillar = currentRoutePillar?.id === pillar.id;

                              return (
                                <div
                                  key={pillar.id}
                                  className={`rounded-xl border transition-all overflow-hidden shadow-2xs ${
                                    isCurrentPillar
                                      ? "border-emerald-300 dark:border-emerald-800 bg-emerald-50/20 dark:bg-emerald-950/20"
                                      : "border-slate-200/70 dark:border-zinc-800 bg-white dark:bg-zinc-900"
                                  }`}
                                >
                                  <button
                                    onClick={() => toggleMobilePillar(pillar.id)}
                                    className="w-full p-2.5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors"
                                  >
                                    <div className="flex items-center gap-2 min-w-0">
                                      <span
                                        className={`w-5 h-5 rounded-md flex items-center justify-center font-mono text-[10px] font-bold shrink-0 transition-colors ${
                                          isCurrentPillar
                                            ? "bg-brand-primary text-white shadow-xs"
                                            : "bg-emerald-50 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400"
                                        }`}
                                      >
                                        {pillar.number}
                                      </span>
                                      <div className="min-w-0">
                                        <span
                                          className={`text-xs block truncate ${
                                            isCurrentPillar
                                              ? "font-bold text-brand-primary dark:text-emerald-400"
                                              : "font-bold text-slate-800 dark:text-zinc-200"
                                          }`}
                                        >
                                          {pillar.title}
                                        </span>
                                        <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                                          {pillar.subServices.length} sub-services • {pillar.badge || "ATO Ready"}
                                        </span>
                                      </div>
                                    </div>
                                    <div className="flex items-center gap-1.5 shrink-0 ml-2">
                                      {isCurrentPillar && (
                                        <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400">
                                          Current
                                        </span>
                                      )}
                                      <DownOutlined
                                        className={`text-[10px] transition-transform duration-300 ${
                                          isPillarOpen ? "rotate-180 text-brand-primary" : "text-slate-400"
                                        }`}
                                      />
                                    </div>
                                  </button>

                                  {/* Animated Pillar Sub-Services Container */}
                                  <div
                                    className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                      isPillarOpen
                                        ? "grid-rows-[1fr]"
                                        : "grid-rows-[0fr]"
                                    }`}
                                  >
                                    <div className="overflow-hidden min-h-0">
                                      <div
                                        className={`p-2.5 bg-slate-50 dark:bg-zinc-950/80 border-t border-slate-100 dark:border-zinc-800 space-y-1.5 transition-opacity duration-300 ease-in-out ${
                                          isPillarOpen
                                            ? "opacity-100"
                                            : "opacity-0"
                                        }`}
                                      >
                                        {/* Direct Pillar Hub Link */}
                                        <Link
                                          href={pillar.href}
                                          onClick={() => setMobileMenuOpen(false)}
                                          className="p-2 rounded-lg flex items-center justify-between text-xs font-bold text-brand-primary dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100/70 dark:hover:bg-emerald-900/50 transition-colors"
                                        >
                                          <span>View {pillar.shortTitle || pillar.title} Hub</span>
                                          <ArrowRightOutlined className="text-[10px]" />
                                        </Link>

                                        {/* Sub-services list */}
                                        <div className="grid grid-cols-1 gap-1">
                                          {pillar.subServices.map((sub, sIdx) => {
                                            const isCurrentSub = isServicePathMatch(sub.href, pathname);

                                            return (
                                              <Link
                                                key={sIdx}
                                                href={sub.href}
                                                onClick={() => setMobileMenuOpen(false)}
                                                className={`p-2 rounded-lg flex items-center justify-between text-xs transition-colors ${
                                                  isCurrentSub
                                                    ? "bg-emerald-500/10 dark:bg-emerald-950/60 text-brand-primary dark:text-emerald-300 font-bold border border-brand-primary/40 shadow-xs"
                                                    : "font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900"
                                                }`}
                                              >
                                                <div className="flex items-center gap-2 truncate min-w-0">
                                                  <span
                                                    className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                                      isCurrentSub
                                                        ? "bg-brand-primary ring-2 ring-emerald-300 dark:ring-emerald-500 scale-125"
                                                        : "bg-emerald-500"
                                                    }`}
                                                  />
                                                  <span className="truncate">{sub.title}</span>
                                                </div>
                                                <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                                                  {isCurrentSub ? (
                                                    <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-brand-primary text-white shadow-2xs">
                                                      Active
                                                    </span>
                                                  ) : sub.badge ? (
                                                    <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 dark:bg-zinc-800 dark:text-zinc-400">
                                                      {sub.badge}
                                                    </span>
                                                  ) : null}
                                                </div>
                                              </Link>
                                            );
                                          })}
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Resources & Forms Accordion */}
                  <div>
                    <button
                      onClick={() => toggleMobileSection("resources")}
                      className={`w-full px-4 py-3.5 flex items-center justify-between transition-colors cursor-pointer text-left ${
                        mobileExpandedSection.resources || pathname?.startsWith("/resources")
                          ? "bg-emerald-50/50 dark:bg-emerald-950/30 text-brand-primary dark:text-emerald-400 font-bold"
                          : "text-slate-800 dark:text-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-xl bg-emerald-50 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400 flex items-center justify-center text-sm shrink-0">
                          <FileProtectOutlined />
                        </div>
                        <div>
                          <span className="text-sm font-semibold block leading-tight">Resources &amp; Forms</span>
                          <span className="text-[11px] text-slate-500 dark:text-zinc-400 font-normal">
                            Registrations, Engagements &amp; Medicare
                          </span>
                        </div>
                      </div>
                      <DownOutlined
                        className={`text-xs transition-transform duration-300 ${
                          mobileExpandedSection.resources ? "rotate-180 text-brand-primary" : "text-slate-400"
                        }`}
                      />
                    </button>

                    {/* Animated Resources & Forms Container */}
                    <div
                      className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                        mobileExpandedSection.resources
                          ? "grid-rows-[1fr]"
                          : "grid-rows-[0fr]"
                      }`}
                    >
                      <div className="overflow-hidden min-h-0">
                        <div
                          className={`p-2.5 bg-slate-50/70 dark:bg-zinc-950/70 border-t border-slate-100 dark:border-zinc-800 space-y-1.5 transition-opacity duration-300 ease-in-out ${
                            mobileExpandedSection.resources
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                        >
                          {/* Sub-Accordion 1: Registration Forms */}
                          <div className="rounded-xl border border-slate-200/70 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-2xs">
                            <button
                              onClick={() => toggleMobileSection("regForms")}
                              className="w-full p-2.5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                                  <FileProtectOutlined />
                                </div>
                                <div className="min-w-0">
                                  <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 block truncate">
                                    Registration Forms
                                  </span>
                                  <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                                    7 registration portals
                                  </span>
                                </div>
                              </div>
                              <DownOutlined
                                className={`text-[10px] transition-transform duration-300 shrink-0 ml-2 ${
                                  mobileExpandedSection.regForms
                                    ? "rotate-180 text-brand-primary"
                                    : "text-slate-400"
                                }`}
                              />
                            </button>

                            {/* Animated Registration Forms Container */}
                            <div
                              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                mobileExpandedSection.regForms
                                  ? "grid-rows-[1fr]"
                                  : "grid-rows-[0fr]"
                              }`}
                            >
                              <div className="overflow-hidden min-h-0">
                                <div
                                  className={`p-2 bg-slate-50 dark:bg-zinc-950/80 border-t border-slate-100 dark:border-zinc-800 space-y-1 transition-opacity duration-300 ease-in-out ${
                                    mobileExpandedSection.regForms
                                      ? "opacity-100"
                                      : "opacity-0"
                                  }`}
                                >
                                  <Link
                                    href="/resources/registration-forms"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-lg flex items-center justify-between text-xs font-bold text-brand-primary dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100/70 transition-colors mb-1"
                                  >
                                    <span>View Registration Forms Hub</span>
                                    <ArrowRightOutlined className="text-[10px]" />
                                  </Link>
                                  <Link
                                    href="/resources/registration-forms/gst-registrations"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">GST Registrations</span>
                                  </Link>
                                  <Link
                                    href="/resources/registration-forms/company-registration"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">Company Registration</span>
                                  </Link>
                                  <Link
                                    href="/resources/registration-forms/changes-to-company-details"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">Changes to Company Details</span>
                                  </Link>
                                  <Link
                                    href="/resources/registration-forms/trust-registrations"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">Trust Registrations</span>
                                  </Link>
                                  <Link
                                    href="/resources/registration-forms/smsf-registrations"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">SMSF Registrations</span>
                                  </Link>
                                  <Link
                                    href="/resources/registration-forms/business-name-registrations"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">Business Name Registrations</span>
                                  </Link>
                                  <Link
                                    href="/resources/registration-forms/apply-tfn-abns"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">Apply TFN / ABNs</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Sub-Accordion 2: Engagement Forms */}
                          <div className="rounded-xl border border-slate-200/70 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-2xs">
                            <button
                              onClick={() => toggleMobileSection("engForms")}
                              className="w-full p-2.5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                                  <FormOutlined />
                                </div>
                                <div className="min-w-0">
                                  <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 block truncate">
                                    Engagement Forms
                                  </span>
                                  <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                                    2 client onboarding forms
                                  </span>
                                </div>
                              </div>
                              <DownOutlined
                                className={`text-[10px] transition-transform duration-300 shrink-0 ml-2 ${
                                  mobileExpandedSection.engForms
                                    ? "rotate-180 text-brand-primary"
                                    : "text-slate-400"
                                }`}
                              />
                            </button>

                            {/* Animated Engagement Forms Container */}
                            <div
                              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                mobileExpandedSection.engForms
                                  ? "grid-rows-[1fr]"
                                  : "grid-rows-[0fr]"
                              }`}
                            >
                              <div className="overflow-hidden min-h-0">
                                <div
                                  className={`p-2 bg-slate-50 dark:bg-zinc-950/80 border-t border-slate-100 dark:border-zinc-800 space-y-1 transition-opacity duration-300 ease-in-out ${
                                    mobileExpandedSection.engForms
                                      ? "opacity-100"
                                      : "opacity-0"
                                  }`}
                                >
                                  <Link
                                    href="/resources/engagement-forms"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-lg flex items-center justify-between text-xs font-bold text-brand-primary dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100/70 transition-colors mb-1"
                                  >
                                    <span>View Engagement Forms Hub</span>
                                    <ArrowRightOutlined className="text-[10px]" />
                                  </Link>
                                  <Link
                                    href="/resources/engagement-forms/individual-engagement-form"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">Individual Engagement Form</span>
                                  </Link>
                                  <Link
                                    href="/resources/engagement-forms/entity-engagements-form"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">Entity Engagements Form</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Sub-Accordion 3: Medicare Forms */}
                          <div className="rounded-xl border border-slate-200/70 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-2xs">
                            <button
                              onClick={() => toggleMobileSection("medForms")}
                              className="w-full p-2.5 flex items-center justify-between text-left cursor-pointer hover:bg-slate-50 dark:hover:bg-zinc-800/50 transition-colors"
                            >
                              <div className="flex items-center gap-2.5 min-w-0">
                                <div className="w-6 h-6 rounded-lg bg-emerald-50 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                                  <MedicineBoxOutlined />
                                </div>
                                <div className="min-w-0">
                                  <span className="text-xs font-bold text-slate-800 dark:text-zinc-200 block truncate">
                                    Medicare Forms
                                  </span>
                                  <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-medium">
                                    Exemption certificate form
                                  </span>
                                </div>
                              </div>
                              <DownOutlined
                                className={`text-[10px] transition-transform duration-300 shrink-0 ml-2 ${
                                  mobileExpandedSection.medForms
                                    ? "rotate-180 text-brand-primary"
                                    : "text-slate-400"
                                }`}
                              />
                            </button>

                            {/* Animated Medicare Forms Container */}
                            <div
                              className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                                mobileExpandedSection.medForms
                                  ? "grid-rows-[1fr]"
                                  : "grid-rows-[0fr]"
                              }`}
                            >
                              <div className="overflow-hidden min-h-0">
                                <div
                                  className={`p-2 bg-slate-50 dark:bg-zinc-950/80 border-t border-slate-100 dark:border-zinc-800 space-y-1 transition-opacity duration-300 ease-in-out ${
                                    mobileExpandedSection.medForms
                                      ? "opacity-100"
                                      : "opacity-0"
                                  }`}
                                >
                                  <Link
                                    href="/resources/medicare-forms"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-2 rounded-lg flex items-center justify-between text-xs font-bold text-brand-primary dark:text-emerald-400 bg-emerald-50/80 dark:bg-emerald-950/40 hover:bg-emerald-100/70 transition-colors mb-1"
                                  >
                                    <span>View Medicare Forms Hub</span>
                                    <ArrowRightOutlined className="text-[10px]" />
                                  </Link>
                                  <Link
                                    href="/resources/medicare-forms/medicare-exemption-form"
                                    onClick={() => setMobileMenuOpen(false)}
                                    className="p-1.5 px-2 rounded-lg flex items-center gap-2 text-xs font-medium text-slate-700 dark:text-zinc-300 hover:text-brand-primary hover:bg-white dark:hover:bg-zinc-900 transition-colors"
                                  >
                                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                                    <span className="truncate">Medicare Exemption Form</span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Blog Link */}
                  <Link
                    href="/blog"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 flex items-center justify-between transition-colors ${
                      pathname === "/blog"
                        ? "bg-brand-primary/10 text-brand-primary dark:text-emerald-400 font-bold"
                        : "text-slate-800 dark:text-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm transition-colors ${
                          pathname === "/blog"
                            ? "bg-brand-primary text-white"
                            : "bg-emerald-50 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400"
                        }`}
                      >
                        <FileTextOutlined />
                      </div>
                      <span className="text-sm font-semibold">Blog</span>
                    </div>
                    {pathname === "/blog" ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 shrink-0" />
                    ) : (
                      <RightOutlined className="text-xs text-slate-300 dark:text-zinc-600" />
                    )}
                  </Link>

                  {/* Contact Link */}
                  <Link
                    href="/contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`px-4 py-3.5 flex items-center justify-between transition-colors ${
                      pathname === "/contact"
                        ? "bg-brand-primary/10 text-brand-primary dark:text-emerald-400 font-bold"
                        : "text-slate-800 dark:text-zinc-100 hover:bg-slate-50 dark:hover:bg-zinc-800/50"
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center text-sm transition-colors ${
                          pathname === "/contact"
                            ? "bg-brand-primary text-white"
                            : "bg-emerald-50 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400"
                        }`}
                      >
                        <ContactsOutlined />
                      </div>
                      <span className="text-sm font-semibold">Contact Us</span>
                    </div>
                    {pathname === "/contact" ? (
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 shrink-0" />
                    ) : (
                      <RightOutlined className="text-xs text-slate-300 dark:text-zinc-600" />
                    )}
                  </Link>

                </div>

                {/* Direct CTA & Quick Action Section */}
                <div className="space-y-2.5 pt-1">
                  {/* Primary High-Contrast Book Appointment CTA with Guaranteed Background */}
                  <Link
                    href="/book-an-appointment"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group flex items-center justify-between w-full p-3.5 rounded-2xl font-bold text-sm text-white shadow-lg shadow-emerald-700/20 active:scale-[0.98] transition-all cursor-pointer"
                    style={{ backgroundColor: "#008043", color: "#ffffff" }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center text-white text-base shrink-0">
                        <CalendarOutlined />
                      </div>
                      <div className="text-left">
                        <span className="block text-white font-extrabold text-sm leading-tight">
                          Book an Appointment
                        </span>
                        <span className="block text-[11px] text-emerald-100 font-normal">
                          Complimentary 15-min discovery call
                        </span>
                      </div>
                    </div>
                    <ArrowRightOutlined className="text-white text-xs transition-transform group-hover:translate-x-1 shrink-0 ml-2" />
                  </Link>

                  {/* Quick Direct Call Button */}
                  <a
                    href={`tel:${company.phone?.replace(/\s/g, "")}`}
                    className="flex items-center justify-between w-full p-3 rounded-2xl border border-emerald-500/30 dark:border-emerald-500/25 bg-white dark:bg-zinc-900 text-slate-800 dark:text-zinc-100 hover:border-brand-primary shadow-2xs transition-all"
                  >
                    <div className="flex items-center gap-2.5 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-emerald-50 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-sm shrink-0">
                        <PhoneOutlined />
                      </div>
                      <div className="min-w-0">
                        <span className="text-[10px] text-slate-400 dark:text-zinc-500 block font-medium leading-none">
                          Speak Directly With a CPA
                        </span>
                        <span className="text-xs font-bold text-slate-900 dark:text-zinc-100 truncate block mt-0.5">
                          {company.phone}
                        </span>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-brand-primary dark:text-emerald-400 px-2.5 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/80 border border-emerald-200 dark:border-emerald-800 shrink-0">
                      Call Now
                    </span>
                  </a>
                </div>

              </div>

              {/* 3. Drawer Footer: Dynamic Company Context & Trust Credentials */}
              <div className="p-4 border-t border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2 shrink-0">
                <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-zinc-400">
                  <div className="flex items-center gap-1.5 font-medium">
                    <SafetyCertificateOutlined className="text-brand-primary text-xs" />
                    <span>Registered Tax Agent &amp; CPA Firm</span>
                  </div>
                  <span className="font-mono text-[10px]">ABN {company.abn}</span>
                </div>

                <div className="flex items-center justify-between pt-1 border-t border-slate-100 dark:border-zinc-800/80 text-xs">
                  <a
                    href={`mailto:${company.email}`}
                    className="text-slate-600 dark:text-zinc-300 hover:text-brand-primary flex items-center gap-1.5 text-[11px] font-medium transition-colors truncate"
                  >
                    <MailOutlined className="text-brand-primary text-xs shrink-0" />
                    <span className="truncate">{company.email}</span>
                  </a>

                  <span className="text-[10px] text-slate-400 dark:text-zinc-500 shrink-0 ml-2">
                    Sydney, Australia
                  </span>
                </div>
              </div>

            </div>
          </Drawer>
    </header>
  );
}
