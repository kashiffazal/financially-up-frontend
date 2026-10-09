"use client";

import React, { useMemo } from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  WalletOutlined,
  BankOutlined,
  SolutionOutlined,
  CalculatorOutlined,
  AuditOutlined,
  ApartmentOutlined,
  FileProtectOutlined,
  SafetyCertificateOutlined,
  CrownOutlined,
  HomeOutlined,
  RiseOutlined,
  LineChartOutlined,
  GlobalOutlined,
  ExperimentOutlined,
  CheckOutlined,
  ArrowRightOutlined,
  FilterOutlined,
  CloseCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { SERVICES_LIST, SERVICE_CATEGORIES } from "./ServicesData";

/**
 * Universal Icon Resolver for Services Directory Cards
 */
const renderDirectoryIcon = (
  iconName,
  className = "text-xl text-brand-primary",
) => {
  switch (iconName?.toLowerCase()) {
    case "wallet":
      return <WalletOutlined className={className} />;
    case "bank":
      return <BankOutlined className={className} />;
    case "solution":
      return <SolutionOutlined className={className} />;
    case "calculator":
      return <CalculatorOutlined className={className} />;
    case "audit":
      return <AuditOutlined className={className} />;
    case "apartment":
      return <ApartmentOutlined className={className} />;
    case "file-protect":
      return <FileProtectOutlined className={className} />;
    case "safety":
    case "shield":
      return <SafetyCertificateOutlined className={className} />;
    case "crown":
      return <CrownOutlined className={className} />;
    case "home":
      return <HomeOutlined className={className} />;
    case "rise":
      return <RiseOutlined className={className} />;
    case "line-chart":
      return <LineChartOutlined className={className} />;
    case "global":
      return <GlobalOutlined className={className} />;
    case "experiment":
      return <ExperimentOutlined className={className} />;
    default:
      return <AuditOutlined className={className} />;
  }
};

/**
 * Accent theme badge helper
 */
const getAccentClasses = (accent) => {
  switch (accent) {
    case "teal":
      return {
        badge:
          "bg-teal-50 dark:bg-teal-950/60 text-teal-700 dark:text-teal-300 border-teal-200 dark:border-teal-800/60",
        iconBox:
          "bg-teal-100/70 dark:bg-teal-900/40 text-teal-600 dark:text-teal-300",
      };
    case "cyan":
      return {
        badge:
          "bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-800/60",
        iconBox:
          "bg-cyan-100/70 dark:bg-cyan-900/40 text-cyan-600 dark:text-cyan-300",
      };
    case "blue":
      return {
        badge:
          "bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800/60",
        iconBox:
          "bg-blue-100/70 dark:bg-blue-900/40 text-blue-600 dark:text-blue-300",
      };
    case "indigo":
      return {
        badge:
          "bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800/60",
        iconBox:
          "bg-indigo-100/70 dark:bg-indigo-900/40 text-indigo-600 dark:text-indigo-300",
      };
    case "violet":
      return {
        badge:
          "bg-violet-50 dark:bg-violet-950/60 text-violet-700 dark:text-violet-300 border-violet-200 dark:border-violet-800/60",
        iconBox:
          "bg-violet-100/70 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300",
      };
    case "amber":
      return {
        badge:
          "bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800/60",
        iconBox:
          "bg-amber-100/70 dark:bg-amber-900/40 text-amber-600 dark:text-amber-300",
      };
    case "rose":
      return {
        badge:
          "bg-rose-50 dark:bg-rose-950/60 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800/60",
        iconBox:
          "bg-rose-100/70 dark:bg-rose-900/40 text-rose-600 dark:text-rose-300",
      };
    case "orange":
      return {
        badge:
          "bg-orange-50 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800/60",
        iconBox:
          "bg-orange-100/70 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300",
      };
    case "purple":
      return {
        badge:
          "bg-purple-50 dark:bg-purple-950/60 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800/60",
        iconBox:
          "bg-purple-100/70 dark:bg-purple-900/40 text-purple-600 dark:text-purple-300",
      };
    case "sky":
      return {
        badge:
          "bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-800/60",
        iconBox:
          "bg-sky-100/70 dark:bg-sky-900/40 text-sky-600 dark:text-sky-300",
      };
    case "emerald":
    default:
      return {
        badge:
          "bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800/60",
        iconBox:
          "bg-emerald-100/70 dark:bg-emerald-900/40 text-emerald-600 dark:text-emerald-300",
      };
  }
};

/**
 * ServicesDirectory Component
 * ===========================
 * Master catalog displaying all 15 services with live category filtering,
 * instant search query evaluation, result counter, and rich cards.
 * Uses flex-wrap (no horizontal scrollbar) and Ant Design Button components throughout.
 */
export default function ServicesDirectory({
  searchQuery = "",
  setSearchQuery,
  selectedCategory = "all",
  setSelectedCategory,
}) {
  // Filter logic
  const filteredServices = useMemo(() => {
    return SERVICES_LIST.filter((service) => {
      // 1. Category check
      if (selectedCategory !== "all" && service.category !== selectedCategory) {
        return false;
      }

      // 2. Search query check
      if (!searchQuery || !searchQuery.trim()) {
        return true;
      }

      const q = searchQuery.toLowerCase().trim();
      const matchTitle = service.title.toLowerCase().includes(q);
      const matchDesc = service.description.toLowerCase().includes(q);
      const matchTag = service.tag.toLowerCase().includes(q);
      const matchPillar = service.pillar.toLowerCase().includes(q);
      const matchHighlights = service.highlights.some((h) =>
        h.toLowerCase().includes(q),
      );
      const matchKeywords = service.keywords?.some((k) =>
        k.toLowerCase().includes(q),
      );

      return (
        matchTitle ||
        matchDesc ||
        matchTag ||
        matchPillar ||
        matchHighlights ||
        matchKeywords
      );
    });
  }, [selectedCategory, searchQuery]);

  // Reset filters
  const handleResetFilters = () => {
    setSelectedCategory("all");
    if (setSearchQuery) setSearchQuery("");
  };

  return (
    <section
      id="services-catalog"
      className="py-16 sm:py-20 bg-slate-50/60 dark:bg-zinc-950/80 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Complete Practice Catalog
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Explore Our 15 Practice Pillars
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            Select a practice category or search by topic to review scope,
            capabilities, and compliance details for each dedicated service.
          </p>
        </div>

        {/* Category Filter Pills (Wrapping without horizontal scrollbar) */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-8">
          {SERVICE_CATEGORIES.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <Button
                key={cat.id}
                type={isActive ? "primary" : "default"}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-xl text-xs sm:text-sm font-semibold h-10 px-3.5 sm:px-4.5 transition-all flex items-center gap-2 ${
                  isActive
                    ? "shadow-md shadow-brand-primary/25 scale-[1.02]"
                    : "bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-200 border-slate-200 dark:border-zinc-800 hover:border-emerald-400 hover:text-brand-primary dark:hover:text-emerald-300 shadow-2xs"
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${
                    isActive
                      ? "bg-white/25 text-white"
                      : "bg-slate-100 dark:bg-zinc-800 text-slate-500 dark:text-zinc-400"
                  }`}
                >
                  {cat.count}
                </span>
              </Button>
            );
          })}
        </div>

        {/* Result Counter & Active Filter Badge */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-200/80 dark:border-zinc-800 text-xs sm:text-sm text-slate-500 dark:text-zinc-400">
          <div className="flex items-center gap-2 font-medium">
            <FilterOutlined className="text-brand-primary dark:text-emerald-400" />
            <span>
              Showing{" "}
              <strong className="text-slate-900 dark:text-white font-bold">
                {filteredServices.length}
              </strong>{" "}
              of {SERVICES_LIST.length} practice services
            </span>
            {searchQuery && (
              <span className="bg-emerald-100/70 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 px-2 py-0.5 rounded-md font-medium text-xs">
                Keyword: &ldquo;{searchQuery}&rdquo;
              </span>
            )}
          </div>

          {(selectedCategory !== "all" || searchQuery) && (
            <Button
              type="link"
              danger
              icon={<CloseCircleOutlined />}
              onClick={handleResetFilters}
              className="text-xs font-semibold p-0 h-auto cursor-pointer"
            >
              Reset Filters
            </Button>
          )}
        </div>

        {/* Services Grid (3 Columns) */}
        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredServices.map((service) => {
              const accent = getAccentClasses(service.accent);
              return (
                <div
                  key={service.id}
                  className="group relative flex flex-col justify-between bg-white dark:bg-zinc-900/90 rounded-2xl p-6 sm:p-7 border border-slate-200/80 dark:border-zinc-800/80 shadow-xs hover:shadow-xl hover:border-emerald-400/60 dark:hover:border-emerald-500/50 hover:-translate-y-1.5 transition-all duration-300"
                >
                  <div>
                    {/* Top Meta: Pillar Number & Tag Badge */}
                    <div className="flex items-center justify-between gap-2 mb-4">
                      <span className="text-[11px] font-extrabold uppercase tracking-widest text-slate-400 dark:text-zinc-500">
                        {service.pillar}
                      </span>
                      <span
                        className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full border ${accent.badge}`}
                      >
                        {service.tag}
                      </span>
                    </div>

                    {/* Icon & Title */}
                    <div className="flex items-start gap-3.5 mb-3">
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 border border-slate-100 dark:border-zinc-800 shadow-2xs transition-transform group-hover:scale-105 ${accent.iconBox}`}
                      >
                        {renderDirectoryIcon(service.icon, "text-2xl")}
                      </div>
                      <div className="min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors leading-snug">
                          <Link
                            href={service.href}
                            className="focus:outline-none"
                          >
                            {service.title}
                          </Link>
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed mb-5 font-normal line-clamp-3">
                      {service.description}
                    </p>

                    {/* Highlights Bullets */}
                    <div className="space-y-2 mb-6 pt-3 border-t border-slate-100 dark:border-zinc-800/80">
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500">
                        Practice Scope:
                      </div>
                      <ul className="space-y-1.5">
                        {service.highlights.map((item, idx) => (
                          <li
                            key={idx}
                            className="flex items-start gap-2 text-xs text-slate-700 dark:text-zinc-300"
                          >
                            <CheckOutlined className="text-brand-primary dark:text-emerald-400 text-[11px] shrink-0 mt-0.5" />
                            <span className="leading-tight">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Bottom Action Footer using Ant Design Button */}
                  <div className="pt-4 border-t border-slate-100 dark:border-zinc-800 flex items-center justify-between">
                    <Link href={service.href}>
                      <Button
                        type="link"
                        className="p-0 text-xs sm:text-sm font-bold text-brand-primary dark:text-emerald-400 inline-flex items-center gap-1.5 group-hover:gap-2.5 transition-all h-auto"
                        icon={
                          <ArrowRightOutlined className="text-xs transition-transform group-hover:translate-x-1" />
                        }
                        iconPlacement="end"
                      >
                        Explore service
                      </Button>
                    </Link>

                    <Link href="/book-an-appointment">
                      <Button
                        type="text"
                        size="small"
                        className="text-[11px] font-medium text-slate-500 dark:text-zinc-400 hover:text-slate-800 dark:hover:text-zinc-200 transition-colors"
                      >
                        Book consult
                      </Button>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Empty Search State */
          <div className="text-center py-16 px-4 bg-white dark:bg-zinc-900 rounded-2xl border border-dashed border-slate-300 dark:border-zinc-800 max-w-lg mx-auto">
            <div className="w-16 h-16 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center mx-auto mb-4 text-brand-primary dark:text-emerald-400 text-2xl">
              <SearchOutlined />
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
              No matching practice services found
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 mb-6">
              We couldn&apos;t find any service matching &ldquo;{searchQuery}
              &rdquo;. Try adjusting your search terms or view all services.
            </p>
            <Button
              type="primary"
              size="large"
              onClick={handleResetFilters}
              className="rounded-xl font-semibold shadow-sm"
            >
              Show All 15 Services
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
