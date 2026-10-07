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
  findPillarByPath,
  isServicePathMatch,
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
 * 5. Automatic active state resolution for current pillar and sub-service
 * 6. Direct navigation links to service hubs from left pane pillars
 */
export default function ServicesMegaMenu({ isOpen, onClose, activePath }) {
  const company = useCompany();

  // Resolve which pillar corresponds to the current page route
  const currentRoutePillar = useMemo(
    () => findPillarByPath(activePath),
    [activePath]
  );

  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activePillarId, setActivePillarId] = useState(
    () => currentRoutePillar?.id || "individual-tax"
  );

  // Adjust active pillar during render when route or menu open state changes
  const [prevActivePath, setPrevActivePath] = useState(activePath);
  const [prevIsOpen, setPrevIsOpen] = useState(isOpen);
  if (prevActivePath !== activePath || (!prevIsOpen && isOpen)) {
    setPrevActivePath(activePath);
    setPrevIsOpen(isOpen);
    if (currentRoutePillar) {
      setActivePillarId(currentRoutePillar.id);
    }
  }

  // Dynamic height measurement for buttery-smooth height transitions between pillars
  const contentRef = useRef(null);
  const [menuHeight, setMenuHeight] = useState(undefined);
  const [isMeasured, setIsMeasured] = useState(false);

  // Refs for tracking mouse intent & trajectory (Amazon / Stripe mouse-intent pattern)
  const hoverTimeoutRef = useRef(null);
  const mousePosRef = useRef({
    x: 0,
    y: 0,
    prevX: 0,
    prevY: 0,
    lastCheckTime: 0,
  });

  // Track cursor velocity & trajectory
  const handleMouseMove = (e) => {
    const now = Date.now();
    if (now - mousePosRef.current.lastCheckTime > 30) {
      mousePosRef.current.prevX = mousePosRef.current.x;
      mousePosRef.current.prevY = mousePosRef.current.y;
      mousePosRef.current.lastCheckTime = now;
    }
    mousePosRef.current.x = e.clientX;
    mousePosRef.current.y = e.clientY;
  };

  // Smart Pillar Hover with Directional Intent Delay
  const handlePillarHover = (pillarId) => {
    if (activePillarId === pillarId) return;

    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }

    const deltaX = mousePosRef.current.x - mousePosRef.current.prevX;

    // If mouse is moving rightward towards the right pane (sub-services),
    // apply a 200ms transit grace period so crossing Column 2 doesn't hijack the menu.
    // If browsing vertically or stationary, switch with a snappy 40ms delay.
    const isMovingRight = deltaX > 1.5;
    const delay = isMovingRight ? 200 : 40;

    hoverTimeoutRef.current = setTimeout(() => {
      setActivePillarId(pillarId);
      hoverTimeoutRef.current = null;
    }, delay);
  };

  // Immediate Click Switch
  const handlePillarClick = (pillarId) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    setActivePillarId(pillarId);
  };

  // Right Pane Entrance: Immediately lock active pillar and cancel pending transit switches
  const handleRightPaneMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  // Mega Menu Mouse Leave
  const handleMenuMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    onClose();
  };

  // Clean up pending timers on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

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
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
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
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMenuMouseLeave}
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
                      const isCurrentPillar = currentRoutePillar?.id === pillar.id;

                      return (
                        <Link
                          key={pillar.id}
                          href={pillar.href}
                          onClick={onClose}
                          onMouseEnter={() => handlePillarHover(pillar.id)}
                          className={`group relative py-2 px-2.5 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                            isSelected
                              ? "bg-white dark:bg-zinc-900 border-emerald-500/40 dark:border-emerald-500/30 shadow-sm shadow-emerald-500/5 ring-1 ring-emerald-500/25"
                              : isCurrentPillar
                              ? "bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-300/70 dark:border-emerald-800/60 shadow-2xs"
                              : "border-transparent hover:bg-white/70 dark:hover:bg-zinc-900/70 hover:border-slate-200/60 dark:hover:border-zinc-800"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            {/* Number Badge */}
                            <div
                              className={`w-6 h-6 rounded-lg font-mono text-[11px] font-bold flex items-center justify-center shrink-0 border transition-colors ${
                                isSelected || isCurrentPillar
                                  ? "bg-brand-primary text-white border-brand-primary shadow-xs"
                                  : "bg-emerald-50/80 dark:bg-emerald-950/60 text-brand-primary dark:text-emerald-400 border-emerald-100 dark:border-emerald-900/50 group-hover:bg-brand-primary group-hover:text-white"
                              }`}
                            >
                              {pillar.number}
                            </div>

                            {/* Title */}
                            <span
                              className={`text-[13px] font-semibold truncate transition-colors ${
                                isSelected || isCurrentPillar
                                  ? "text-slate-900 dark:text-white font-bold"
                                  : "text-slate-700 dark:text-zinc-200 group-hover:text-brand-primary dark:group-hover:text-emerald-400"
                              }`}
                            >
                              {pillar.shortTitle || pillar.title}
                            </span>
                          </div>

                          {/* Active and Current Route Indicators */}
                          <div className="flex items-center gap-1.5 shrink-0 ml-1.5">
                            {isCurrentPillar && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400">
                                Current
                              </span>
                            )}
                            {isSelected && (
                              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary dark:bg-emerald-400 shrink-0 animate-pulse" />
                            )}
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                ) : (
                  /* When specific category is active (2-4 pillars), render single-column rich cards with generous padding */
                  <div className="space-y-2.5">
                    {filteredPillars.map((pillar) => {
                      const isSelected = activePillarId === pillar.id;
                      const isCurrentPillar = currentRoutePillar?.id === pillar.id;

                      return (
                        <Link
                          key={pillar.id}
                          href={pillar.href}
                          onClick={onClose}
                          onMouseEnter={() => handlePillarHover(pillar.id)}
                          className={`group relative p-3 rounded-xl transition-all duration-200 cursor-pointer flex items-center justify-between border ${
                            isSelected
                              ? "bg-white dark:bg-zinc-900 border-emerald-500/40 dark:border-emerald-500/30 shadow-md shadow-emerald-500/5 ring-1 ring-emerald-500/20"
                              : isCurrentPillar
                              ? "bg-emerald-50/50 dark:bg-emerald-950/30 border-emerald-300/70 dark:border-emerald-800/60 shadow-2xs"
                              : "border-transparent hover:bg-white/60 dark:hover:bg-zinc-900/60 hover:border-slate-200/50 dark:hover:border-zinc-800"
                          }`}
                        >
                          <div className="flex items-center gap-3 min-w-0">
                            <div
                              className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                                isSelected || isCurrentPillar
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
                                    isSelected || isCurrentPillar
                                      ? "text-brand-primary dark:text-emerald-400"
                                      : "text-slate-400 dark:text-zinc-500"
                                  }`}
                                >
                                  {pillar.number}
                                </span>
                                <span
                                  className={`text-sm font-semibold truncate ${
                                    isSelected || isCurrentPillar
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

                          <div className="shrink-0 pl-2 flex items-center gap-1.5">
                            {isCurrentPillar && (
                              <span className="text-[9px] font-bold px-1.5 py-0.2 rounded-full bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400">
                                Current
                              </span>
                            )}
                            <RightOutlined
                              className={`text-xs transition-transform ${
                                isSelected
                                  ? "text-brand-primary dark:text-emerald-400"
                                  : "text-slate-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100"
                              }`}
                            />
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Right Pane: Selected Pillar Explorer & Sub-Services (Col Span 7 - Spacious & Smooth) */}
              <div
                onMouseEnter={handleRightPaneMouseEnter}
                className="col-span-7 p-6 bg-white dark:bg-zinc-900 overflow-hidden flex flex-col justify-between"
              >
                <div key={activePillar.id} className={styles.pillarTransition}>
                  {/* Pillar Header Card */}
                  <div className="p-4 rounded-xl bg-gradient-to-r from-emerald-50/70 to-teal-50/30 dark:from-zinc-950 dark:to-zinc-900 border border-emerald-100 dark:border-zinc-800 mb-4 flex items-center justify-between gap-4 shadow-sm">
                    <div className="space-y-1 min-w-0">
                      <div className="flex items-center gap-2 flex-wrap">
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
                        {currentRoutePillar?.id === activePillar.id && (
                          <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-brand-primary text-white shadow-2xs">
                            Current Pillar
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
                      {activePillar.subServices.map((sub, idx) => {
                        const isCurrentSub = isServicePathMatch(sub.href, activePath);

                        return (
                          <Link
                            key={idx}
                            href={sub.href}
                            onClick={onClose}
                            className={`group flex items-center justify-between py-2 px-3 rounded-xl border transition-all ${
                              isCurrentSub
                                ? "bg-emerald-500/10 dark:bg-emerald-950/60 border-brand-primary dark:border-emerald-500 shadow-xs ring-1 ring-brand-primary/40"
                                : "border-slate-100 dark:border-zinc-800/80 bg-slate-50/50 dark:bg-zinc-950/50 hover:bg-white dark:hover:bg-zinc-800/90 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-sm"
                            }`}
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <span
                                className={`w-2 h-2 rounded-full shrink-0 transition-transform ${
                                  isCurrentSub
                                    ? "bg-brand-primary ring-2 ring-emerald-300 dark:ring-emerald-500 scale-125"
                                    : "bg-emerald-400 group-hover:scale-125"
                                }`}
                              />
                              <span
                                className={`text-xs truncate transition-colors ${
                                  isCurrentSub
                                    ? "text-brand-primary dark:text-emerald-300 font-bold"
                                    : "font-semibold text-slate-700 dark:text-zinc-200 group-hover:text-brand-primary dark:group-hover:text-emerald-400"
                                }`}
                              >
                                {sub.title}
                              </span>
                            </div>

                            <div className="flex items-center gap-1.5 shrink-0 ml-2">
                              {isCurrentSub ? (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-full bg-brand-primary text-white shadow-2xs">
                                  Active
                                </span>
                              ) : sub.badge ? (
                                <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-emerald-100/70 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300">
                                  {sub.badge}
                                </span>
                              ) : null}
                              <ArrowRightOutlined
                                className={`text-[10px] transition-all ${
                                  isCurrentSub
                                    ? "text-brand-primary dark:text-emerald-400 opacity-100 translate-x-0"
                                    : "text-slate-300 dark:text-zinc-600 opacity-0 group-hover:opacity-100 group-hover:text-brand-primary dark:group-hover:text-emerald-400 -translate-x-1 group-hover:translate-x-0"
                                }`}
                              />
                            </div>
                          </Link>
                        );
                      })}
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
