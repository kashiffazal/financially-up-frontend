"use client";

import React from "react";
import Link from "next/link";
import { Tag, Button } from "antd";
import {
  UserOutlined,
  ToolOutlined,
  BankOutlined,
  HomeOutlined,
  CrownOutlined,
  RiseOutlined,
  ArrowRightOutlined,
  CheckCircleOutlined,
} from "@ant-design/icons";
import { CLIENT_PERSONAS, SERVICES_LIST } from "./ServicesData";

/**
 * Universal Icon Resolver for Personas
 */
const renderPersonaIcon = (icon) => {
  const iconClasses = "text-xl text-brand-primary dark:text-emerald-400";
  switch (icon) {
    case "user":
      return <UserOutlined className={iconClasses} />;
    case "tool":
      return <ToolOutlined className={iconClasses} />;
    case "bank":
      return <BankOutlined className={iconClasses} />;
    case "home":
      return <HomeOutlined className={iconClasses} />;
    case "crown":
      return <CrownOutlined className={iconClasses} />;
    case "rise":
      return <RiseOutlined className={iconClasses} />;
    default:
      return <UserOutlined className={iconClasses} />;
  }
};

/**
 * ClientPathwayMatrix Component
 * =============================
 * Interactive "Who We Serve" pathways section that helps visitors identify
 * exactly which bundle of services applies to their unique legal and tax profile.
 */
export default function ClientPathwayMatrix() {
  // Helper to look up service by slug
  const getServiceInfo = (slug) => {
    return SERVICES_LIST.find((s) => s.slug === slug);
  };

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 transition-colors duration-300 border-t border-slate-100 dark:border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <Tag
            color="green"
            className="brand-section-tag mb-2 font-bold tracking-wider uppercase text-xs"
          >
            Client Solutions Matrix
          </Tag>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Find the Right Services for Your Situation
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed">
            Whether you are lodging an individual tax return, structuring a
            multi-entity business, managing property investments, or seeking
            strategic Virtual CFO advice, we tailor our scope to you.
          </p>
        </div>

        {/* 6 Persona Pathway Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {CLIENT_PERSONAS.map((persona) => (
            <div
              key={persona.id}
              className="flex flex-col justify-between bg-slate-50/70 dark:bg-zinc-950/70 rounded-2xl p-6 sm:p-7 border border-slate-200/90 dark:border-zinc-800 shadow-xs hover:shadow-lg hover:border-emerald-400/50 transition-all duration-300"
            >
              <div>
                {/* Header Row */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-100/60 dark:bg-emerald-950/80 border border-emerald-200/60 dark:border-emerald-800/40 flex items-center justify-center">
                    {renderPersonaIcon(persona.icon)}
                  </div>
                  <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-slate-200 dark:border-zinc-800 shadow-2xs">
                    {persona.badge}
                  </span>
                </div>

                {/* Title & Subtitle */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-1">
                  {persona.title}
                </h3>
                <p className="text-xs font-medium text-emerald-700 dark:text-emerald-400 mb-3">
                  {persona.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed mb-6 font-normal">
                  {persona.description}
                </p>
              </div>

              {/* Recommended Services Section */}
              <div className="pt-4 border-t border-slate-200/80 dark:border-zinc-800">
                <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 dark:text-zinc-500 mb-2.5 flex items-center gap-1.5">
                  <CheckCircleOutlined className="text-emerald-500 text-xs" />
                  <span>Recommended Practice Services:</span>
                </div>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {persona.recommendedSlugs.map((slug) => {
                    const svc = getServiceInfo(slug);
                    if (!svc) return null;
                    return (
                      <Link
                        key={slug}
                        href={svc.href}
                        className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-semibold bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-200 border border-slate-200 dark:border-zinc-800 hover:border-emerald-400 hover:text-brand-primary dark:hover:text-emerald-400 transition-colors"
                      >
                        <span>{svc.title}</span>
                        <ArrowRightOutlined className="text-[9px]" />
                      </Link>
                    );
                  })}
                </div>

                <Link href="/book-an-appointment" className="w-full">
                  <Button
                    type="link"
                    className="p-0 text-xs font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center justify-between w-full h-auto pt-1"
                    icon={<ArrowRightOutlined className="text-xs" />}
                    iconPlacement="end"
                  >
                    Book a tailored consultation
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
