"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import {
  SafetyCertificateOutlined,
  PhoneOutlined,
  ArrowRightOutlined,
  SearchOutlined,
  GlobalOutlined,
  CheckCircleOutlined,
  DollarCircleOutlined,
  RightOutlined,
} from "@ant-design/icons";
import { useCompany } from "@/context/SettingsContext";

/**
 * ServicesHero Component
 * ======================
 * Premium hero section for the main /services hub page.
 * Fully responsive and calibrated for BOTH Light and Dark themes.
 * Uses daylight architectural backdrop in Light mode and deep luxury emerald evening in Dark mode.
 * Always utilizes Ant Design Button components for interactive actions.
 */
export default function ServicesHero({ searchQuery, setSearchQuery, onSearchSubmit }) {
  const company = useCompany();

  const trustMetrics = [
    {
      icon: <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-300 text-lg sm:text-xl" />,
      label: "15 Practice Pillars",
      subtext: "Complete end-to-end scope",
    },
    {
      icon: <CheckCircleOutlined className="text-teal-600 dark:text-teal-300 text-lg sm:text-xl" />,
      label: "100% ATO Compliant",
      subtext: "Registered Tax Agents",
    },
    {
      icon: <GlobalOutlined className="text-cyan-600 dark:text-cyan-300 text-lg sm:text-xl" />,
      label: "Australia-Wide",
      subtext: "100% Online & In-Person",
    },
    {
      icon: <DollarCircleOutlined className="text-amber-600 dark:text-amber-300 text-lg sm:text-xl" />,
      label: "Fixed-Fee Clarity",
      subtext: "No hidden hourly charges",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#012214] text-slate-900 dark:text-white pt-10 pb-16 md:pt-14 md:pb-22 border-b border-slate-200/80 dark:border-emerald-900/60 shadow-lg transition-colors duration-300">
      {/* Layer 0A: Daylight Architectural Image (Light Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none block dark:hidden">
        <Image
          src="/images/services/page-hero-light-bg.jpg"
          alt="Australian Corporate Accounting & Tax Services"
          fill
          priority
          className="object-cover object-center opacity-85"
        />
      </div>

      {/* Layer 0B: Evening Architectural Image (Dark Mode) */}
      <div className="absolute inset-0 z-0 pointer-events-none hidden dark:block">
        <Image
          src="/images/services/page-hero-bg.jpg"
          alt="Australian Corporate Accounting & Tax Services"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
      </div>

      {/* Layer 1: Translucent White/Mint Overlay (Light) & Deep Luxury 95% Overlay (Dark) */}
      <div
        className="absolute inset-0 z-[1] bg-gradient-to-r from-white/94 via-white/90 to-[#eefaf3]/92 dark:from-slate-950/96 dark:via-[#012214]/94 dark:to-slate-950/96 pointer-events-none"
        aria-hidden="true"
      />

      {/* Ambient Lighting Orbs */}
      <div className="absolute -top-24 left-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none z-[2]" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-teal-400/10 dark:bg-teal-400/10 rounded-full blur-3xl pointer-events-none z-[2]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Dynamic Breadcrumbs */}
        <nav
          aria-label="Breadcrumb"
          className="flex items-center justify-center flex-wrap gap-2 text-xs font-semibold text-slate-600 dark:text-emerald-200/90 mb-6"
        >
          <Link href="/" className="hover:text-emerald-700 dark:hover:text-white transition-colors">
            Home
          </Link>
          <RightOutlined className="text-[10px] text-slate-400 dark:text-emerald-400" />
          <span className="text-slate-900 dark:text-white font-bold">Services</span>
        </nav>

        {/* Credential Badge */}
        <div className="flex justify-center mb-5">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-50 dark:bg-white/10 backdrop-blur-md border border-emerald-300/80 dark:border-emerald-400/30 text-emerald-800 dark:text-white text-xs font-bold uppercase tracking-wider shadow-xs">
            <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-300 text-sm" />
            <span>ATO Registered Tax Agents • ASIC Registered Agents • CPA Team</span>
          </div>
        </div>

        {/* Headline & Subtitle */}
        <div className="text-center max-w-4xl mx-auto space-y-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15] text-slate-900 dark:text-white">
            All Accounting, Tax &amp;{" "}
            <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 dark:from-emerald-300 dark:via-teal-200 dark:to-cyan-200 bg-clip-text text-transparent">
              Advisory Services
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-slate-600 dark:text-emerald-100/90 max-w-3xl mx-auto font-normal leading-relaxed">
            From individual tax returns and property investments to complex corporate structures,
            trust management, and Virtual CFO leadership — explore our complete suite of 15 registered
            practice pillars designed for Australians nationwide.
          </p>
        </div>

        {/* Live Search Bar */}
        <div className="mt-8 sm:mt-10 max-w-2xl mx-auto">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (onSearchSubmit) onSearchSubmit();
            }}
            className="relative flex items-center bg-white dark:bg-white/10 backdrop-blur-md rounded-2xl p-1.5 border border-slate-300 dark:border-emerald-400/30 shadow-xl dark:shadow-2xl transition-all focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20"
          >
            <div className="pl-3.5 pr-2 text-brand-primary dark:text-emerald-300">
              <SearchOutlined className="text-lg" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search services (e.g. Individual Tax, Trusts, Bookkeeping, Crypto, ASIC)..."
              className="w-full bg-transparent text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-emerald-200/70 text-sm sm:text-base outline-none px-2 py-2"
            />
            {searchQuery && (
              <Button
                type="text"
                size="small"
                onClick={() => setSearchQuery("")}
                className="text-xs text-slate-400 hover:text-slate-700 dark:text-emerald-300 dark:hover:text-white mr-1"
              >
                Clear
              </Button>
            )}
            <Button
              type="primary"
              htmlType="submit"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="hidden sm:inline-flex rounded-xl font-semibold text-xs sm:text-sm h-10 px-5 shrink-0"
            >
              Explore
            </Button>
          </form>
        </div>

        {/* Action Buttons Row using Ant Design Button */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <Link href="/book-an-appointment">
            <Button
              type="primary"
              size="large"
              icon={<ArrowRightOutlined />}
              iconPosition="end"
              className="rounded-xl font-semibold h-12 px-6 shadow-md shadow-brand-primary/25 hover:scale-[1.02] transition-transform"
            >
              Book an Appointment
            </Button>
          </Link>

          {company?.phone && (
            <a href={`tel:${company.phone.replace(/\s/g, "")}`}>
              <Button
                size="large"
                icon={<PhoneOutlined className="text-brand-primary dark:text-emerald-300" />}
                className="rounded-xl font-semibold h-12 px-6 bg-white dark:bg-white/10 hover:bg-slate-50 dark:hover:bg-white/15 border-slate-200 dark:border-white/20 text-slate-800 dark:text-white shadow-xs"
              >
                Call {company.phone}
              </Button>
            </a>
          )}
        </div>

        {/* 4 Trust Metrics Strip */}
        <div className="mt-12 sm:mt-16 pt-8 border-t border-slate-200/80 dark:border-emerald-800/50 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {trustMetrics.map((metric, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-3 rounded-xl bg-white/80 dark:bg-white/5 border border-slate-200/80 dark:border-white/10 backdrop-blur-sm shadow-2xs"
            >
              <div className="p-2 sm:p-2.5 rounded-lg bg-emerald-100/70 dark:bg-emerald-900/60 border border-emerald-200 dark:border-emerald-700/50 shrink-0">
                {metric.icon}
              </div>
              <div className="min-w-0">
                <div className="font-bold text-xs sm:text-sm text-slate-900 dark:text-white truncate">
                  {metric.label}
                </div>
                <div className="text-[11px] text-slate-500 dark:text-emerald-200/80 truncate">
                  {metric.subtext}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
