"use client";

import React, { useState, useMemo, useRef, useEffect } from "react";
import Link from "next/link";
import {
  UserOutlined,
  BankOutlined,
  SolutionOutlined,
  BookOutlined,
  AuditOutlined,
  DeploymentUnitOutlined,
  FileProtectOutlined,
  SafetyOutlined,
  SafetyCertificateOutlined,
  HomeOutlined,
  SecurityScanOutlined,
  RiseOutlined,
  LineChartOutlined,
  GlobalOutlined,
  ExperimentOutlined,
  ArrowRightOutlined,
  RightOutlined,
  PhoneOutlined,
  CalendarOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import {
  MEGA_MENU_CATEGORIES,
  MAIN_SERVICES_MEGA_MENU,
} from "@/data/servicesMegaMenuData";
import { useCompany } from "@/context/SettingsContext";
import styles from "./Header.module.css";

/**
 * Icon resolver mapping data keys to Ant Design icon components
 */
const ICON_MAP = {
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

function renderPillarIcon(iconKey, className = "text-sm") {
  const IconComponent = ICON_MAP[iconKey] || AppstoreOutlined;
  return <IconComponent className={className} />;
}

/**
 * ServicesMegaMenu Component (Spacious & Smooth Zero-Scroll Edition)
 * ====================================================================
 * Full-width executive desktop mega menu for Financially Up.
 * Combines generous breathing room and premium typography with:
 * 1. Zero horizontal/vertical scrollbars & zero text cutting
 * 2. Balanced 2-column layout on the left with spacious clickable cards
 * 3. Roomy right pane with comfortable sub-services spacing
 * 4. Buttery-smooth height transitions via dynamic ResizeObserver measurement
 */
export default function ServicesMegaMenu({ isOpen, onClose, activePath }) {
  const company = useCompany();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activePillarId, setActivePillarId] = useState("individual-tax");

  // Dynamic height measurement for buttery-smooth height transitions between pillars
  const contentRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(undefined);
  const [isMeasured, setIsMeasured] = useState(false);

  useEffect(() => {
    if (!contentRef.current) return;

    const updateHeight = () => {
      if (contentRef.current) {
        const measured = Math.ceil(
          contentRef.current.getBoundingClientRect().height
        );
        if (measured > 0) {
          // Add 2px to account for container top and bottom border
          setMenuHeight(measured + 2);
          setIsMeasured(true);
        }
      }
    };

    updateHeight();

    const resizeObserver = new ResizeObserver(() => {
      window.requestAnimationFrame(() => {
        updateHeight();
      });
    });

    resizeObserver.observe(contentRef.current);

    return () => {
      resizeObserver.disconnect();
    };
  }, [activePillarId, selectedCategory]);

  // Filter pillars by selected category tab
  const filteredPillars = useMemo(() => {
    if (selectedCategory === "all") return MAIN_SERVICES_MEGA_MENU;
    return MAIN_SERVICES_MEGA_MENU.filter(
      (pillar) => pillar.category === selectedCategory
    );
  }, [selectedCategory]);

  // Active pillar to display in the right-hand panel
  const activePillar = useMemo(() => {
    const found = MAIN_SERVICES_MEGA_MENU.find((p) => p.id === activePillarId);
    return found || MAIN_SERVICES_MEGA_MENU[0];
  }, [activePillarId]);

  // When category changes, auto-select first pillar in category if needed
  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    const inCat =
      categoryId === "all"
        ? MAIN_SERVICES_MEGA_MENU
        : MAIN_SERVICES_MEGA_MENU.filter((p) => p.category === categoryId);
    if (inCat.length > 0 && !inCat.some((p) => p.id === activePillarId)) {
      setActivePillarId(inCat[0].id);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      role="region"
      aria-label="Services Mega Menu"
      className="absolute top-full left-0 right-0 z-50 w-full animate-fadeIn"
      onMouseLeave={onClose}
    >
      {/* Backdrop overlay for focus */}
      <div
        className="fixed inset-0 top-[110px] bg-slate-900/20 dark:bg-black/40 backdrop-blur-[2px] transition-opacity -z-10"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Main Container - Strictly Zero Scroll with Animated Height */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-2">
        <div
          className={`bg-white/98 dark:bg-zinc-900/98 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-200/90 dark:border-zinc-800 overflow-hidden ${
            isMeasured
              ? "transition-[height] duration-300 ease-[cubic-bezier(0.4,0,0.2,1)]"
              : ""
          }`}
          style={{ height: menuHeight ? `${menuHeight}px` : "auto" }}
        >
          {/* Inner Content Wrapper monitored by ResizeObserver */}
          <div ref={contentRef} className="w-full">
            {/* Top Bar: Category Filter Pills (Spacious & Clean Single Row, Zero Cutting) */}
            <div className="px-5 py-2.5 bg-slate-50/80 dark:bg-zinc-950/80 border-b border-slate-100 dark:border-zinc-800/80 flex items-center justify-between gap-3 overflow-hidden">
              <div className="flex items-center gap-1.5 flex-nowrap min-w-0">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mr-1 shrink-0">
                  Browse By:
                </span>
                {MEGA_MENU_CATEGORIES.map((cat) => {
                  const isActive = selectedCategory === cat.id;
                  return (
                    <button
                      key={cat.id}
                      onClick={() => handleCategorySelect(cat.id)}
                      className={`px-2.5 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                        isActive
                          ? "bg-brand-primary text-white shadow-sm shadow-emerald-700/20 font-bold"
                          : "text-slate-600 dark:text-zinc-300 hover:text-brand-primary dark:hover:text-emerald-400 hover:bg-white dark:hover:bg-zinc-900"
                      }`}
                    >
                      <span>{cat.label}</span>
                      <span
                        className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] font-bold ${
                          isActive
                            ? "bg-white/25 text-white"
                            : "bg-slate-200/60 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400"
                        }`}
                      >
                        {cat.count}
                      </span>
                    </button>
                  );
                })}
              </div>

              {/* Quick Link to Master Services Overview - Clean & Never Cut Off */}
              <Link
                href="/services"
                onClick={onClose}
                className="group inline-flex items-center gap-1.5 text-xs font-bold text-brand-primary dark:text-emerald-400 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors shrink-0 whitespace-nowrap pr-1"
              >
                <span>View All Services</span>
                <ArrowRightOutlined className="text-[10px] transition-transform group-hover:translate-x-1" />
              </Link>
            </div>

            {/* Master-Detail Dual Pane Grid (Spacious, Roomy & Zero Scroll) */}
            <div className="grid grid-cols-12 divide-x divide-slate-100 dark:divide-zinc-800 overflow-hidden">
              {/* Left Pane: 15 Pillars Selector (Col Span 5 - Balanced, Roomy 2-Column Grid) */}
              <div className="col-span-5 p-5 bg-slate-50/40 dark:bg-zinc-950/40 overflow-hidden flex flex-col justify-start">
                {/* When 'All' is active (15 pillars), render 2 balanced columns with generous breathing room */}
                {selectedCategory === "all" ? (
                  <div className="grid grid-cols-2 gap-2.5">
                    {filteredPillars.map((pillar) => {
                      const isSelected = activePillarId === pillar.id;

                      return (
                        <div
                          key={pillar.id}
                          onMouseEnter={() => setActivePillarId(pillar.id)}
                          onClick={() => setActivePillarId(pillar.id)}
                          className={`group relative py-2 px-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                            isSelected
                              ? "bg-white dark:bg-zinc-900 border-emerald-500/40 dark:border-emerald-500/30 shadow-sm shadow-emerald-500/5 ring-1 ring-emerald-500/25"
                              : "border-transparent hover:bg-white/70 dark:hover:bg-zinc-900/70 hover:border-slate-200/60 dark:hover:border-zinc-800"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {/* Number Badge */}
                            <div
                              className={`w-6 h-6 rounded-lg font-mono text-[11px] font-bold flex items-center justify-center shrink-0 border transition-colors ${
                                isSelected
                                  ? "bg-brand-primary text-white border-brand-primary shadow-xs"
                                  : "bg-emerald-50/80 dark:bg-emerald-950/60 text-brand-primary dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50 group-hover:bg-brand-primary group-hover:text-white"
                              }`}
                            >
                              {pillar.number}
                            </div>

                            {/* Title */}
                            <span
                              className={`text-[13px] font-semibold truncate transition-colors ${
                                isSelected
                                  ? "text-slate-900 dark:text-white font-bold"
                                  : "text-slate-700 dark:text-zinc-200 group-hover:text-brand-primary dark:group-hover:text-emerald-400"
                              }`}
                            >
                              {pillar.shortTitle || pillar.title}
                            </span>
                          </div>

                          {/* Active Dot Indicator */}
                          {isSelected && (
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 shrink-0 ml-1.5 animate-pulse" />
                          )}
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  /* When specific category is active (2-4 pillars), render single-column rich cards with generous padding */
                  <div className="space-y-2.5">
                    {filteredPillars.map((pillar) => {
                      const isSelected = activePillarId === pillar.id;

                      return (
                        <div
                          key={pillar.id}
                          onMouseEnter={() => setActivePillarId(pillar.id)}
                          onClick={() => setActivePillarId(pillar.id)}
                          className={`group relative p-3 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                            isSelected
                              ? "bg-white dark:bg-zinc-900 border-emerald-500/40 dark:border-emerald-500/30 shadow-md shadow-emerald-500/5 ring-1 ring-emerald-500/20"
                              : "border-transparent hover:bg-white/60 dark:hover:bg-zinc-900/60 hover:border-slate-200/50 dark:hover:border-zinc-800"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isSelected
                                  ? "bg-brand-primary text-white shadow-sm shadow-emerald-700/20"
                                  : "bg-emerald-50 text-brand-primary dark:bg-emerald-950/50 dark:text-emerald-400 group-hover:bg-brand-primary-soft"
                              }`}
                            >
                              {renderPillarIcon(pillar.iconKey, "text-sm")}
                            </div>

                            <div className="min-w-0">
                              <div className="flex items-center gap-2">
                                <span
                                  className={`text-xs font-mono font-bold ${
                                    isSelected
                                      ? "text-brand-primary dark:text-emerald-400"
                                      : "text-slate-400 dark:text-zinc-500"
                                  }`}
                                >
                                  {pillar.number}
                                </span>
                                <span
                                  className={`text-sm font-semibold truncate ${
                                    isSelected
                                      ? "text-slate-900 dark:text-white font-bold"
                                      : "text-slate-700 dark:text-zinc-200 group-hover:text-brand-primary dark:group-hover:text-emerald-400"
                                  }`}
                                >
                                  {pillar.title}
                                </span>
                              </div>
                              <span className="text-xs text-slate-500 dark:text-zinc-400 truncate block mt-0.5">
                                {pillar.subServices.length} sub-services •{" "}
                                {pillar.badge || "ATO Ready"}
                              </span>
                            </div>
                          </div>

                          <div className="shrink-0 pl-2">
                            <RightOutlined
                              className={`text-xs transition-transform ${
                                isSelected
                                  ? "text-brand-primary dark:text-emerald-400"
                                  : "text-slate-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100"
                              }`}
                            />
                          </div>
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Pane: Selected Pillar Explorer & Sub-Services (Col Span 7 - Spacious & Smooth) */}
              <div className="col-span-7 p-6 bg-white dark:bg-zinc-900 overflow-hidden flex flex-col justify-between">
                <div key={activePillar.id} className={styles.pillarTransition}>
                  {/* Pillar Header Card */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50/70 to-teal-50/30 dark:from-zinc-950 dark:to-zinc-900 border border-emerald-100 dark:border-zinc-800 mb-4 flex items-center justify-between gap-4 shadow-sm">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-brand-primary dark:text-emerald-400 bg-white dark:bg-zinc-800 px-2 py-0.5 rounded-md border border-emerald-200/50 dark:border-zinc-700">
                          Pillar {activePillar.number}
                        </span>
                        <h3 className="text-base font-bold text-slate-900 dark:text-white truncate">
                          {activePillar.title}
                        </h3>
                        {activePillar.badge && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-primary/10 text-brand-primary dark:bg-emerald-950 dark:text-emerald-400">
                            {activePillar.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-slate-600 dark:text-zinc-300 leading-relaxed max-w-xl">
                        {activePillar.description}
                      </p>
                    </div>

                    {/* Direct Link to Pillar Page */}
                    <Link
                      href={activePillar.href}
                      onClick={onClose}
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-bold bg-brand-primary hover:bg-brand-primary-hover text-white shadow-sm shadow-emerald-700/20 shrink-0 transition-all hover:scale-[1.02] active:scale-[0.98]"
                    >
                      <span>View Hub</span>
                      <ArrowRightOutlined className="text-[10px]" />
                    </Link>
                  </div>

                  {/* Sub-Services Grid Section */}
                  <div>
                    <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-100 dark:border-zinc-800">
                      <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-zinc-400">
                        Sub-Services &amp; Specialisations (
                        {activePillar.subServices.length})
                      </span>
                      <span className="text-[11px] text-slate-400 dark:text-zinc-500 font-medium">
                        ATO Compliant &amp; Expert Prepared
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2.5 content-start">
                      {activePillar.subServices.map((sub, idx) => (
                        <Link
                          key={idx}
                          href={sub.href}
                          onClick={onClose}
                          className="group flex items-center justify-between py-2 px-3 rounded-xl border border-slate-100 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/50 hover:bg-white dark:hover:bg-zinc-800/90 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-sm transition-all"
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className="w-2 h-2 rounded-full bg-emerald-400 shrink-0 group-hover:scale-125 transition-transform" />
                            <span className="text-xs font-semibold text-slate-700 dark:text-zinc-200 group-hover:text-brand-primary dark:group-hover:text-emerald-400 truncate">
                              {sub.title}
                            </span>
                          </div>

                          <div className="flex items-center gap-1.5 shrink-0 ml-2">
                            {sub.badge && (
                              <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                {sub.badge}
                              </span>
                            )}
                            <ArrowRightOutlined className="text-[10px] text-slate-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-all -translate-x-1 group-hover:translate-x-0" />
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Quick-Action Consultation Strip */}
                <div className="pt-3.5 border-t border-slate-100 dark:border-zinc-800 mt-4 flex items-center justify-between gap-4 bg-slate-50/80 dark:bg-zinc-950/80 -mx-6 -mb-6 p-4 px-6 rounded-b-2xl">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <div className="w-7 h-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-xs shrink-0">
                      <CalendarOutlined />
                    </div>
                    <span className="text-xs font-bold text-slate-800 dark:text-white truncate">
                      Need strategic tax planning? Speak directly with an
                      accredited Australian CPA.
                    </span>
                  </div>

                  <div className="flex items-center gap-4 shrink-0">
                    <a
                      href={`tel:${company.phone?.replace(/\s/g, "")}`}
                      className="hidden sm:inline-flex items-center gap-1.5 text-xs font-bold text-slate-700 dark:text-zinc-300 hover:text-brand-primary dark:hover:text-emerald-400 transition-colors"
                    >
                      <PhoneOutlined className="text-xs text-brand-primary" />
                      <span>{company.phone}</span>
                    </a>

                    <Link
                      href="/book-an-appointment"
                      onClick={onClose}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold bg-slate-900 hover:bg-black text-white dark:bg-emerald-600 dark:hover:bg-emerald-500 shadow-sm transition-all"
                    >
                      <span>Book Appointment</span>
                      <ArrowRightOutlined className="text-[10px]" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
