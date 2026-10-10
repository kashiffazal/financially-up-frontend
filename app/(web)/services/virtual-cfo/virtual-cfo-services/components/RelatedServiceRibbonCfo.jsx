"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedServiceRibbonCfo Component
 * =================================
 * Navigation ribbon linking to Virtual CFO Hub and related subpages.
 */
export default function RelatedServiceRibbonCfo() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-semibold text-slate-800 dark:text-white">
          Related Services:
        </span>
        <span>Explore the overarching CFO framework at</span>
        <Link href="/services/virtual-cfo">
          <Button
            type="link"
            className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
            icon={<ArrowRightOutlined className="text-xs" />}
            iconPlacement="end"
          >
            Virtual CFO Hub
          </Button>
        </Link>
        <span className="hidden sm:inline">•</span>
        <span>or discover monthly packs at</span>
        <Link href="/services/virtual-cfo/management-reporting">
          <Button
            type="link"
            className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
            icon={<ArrowRightOutlined className="text-xs" />}
            iconPlacement="end"
          >
            Management Reporting Services
          </Button>
        </Link>
      </div>
    </section>
  );
}
