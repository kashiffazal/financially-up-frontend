"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * ShareChangesRelatedRibbon Component
 * ===================================
 * Navigational ribbon linking back to the ASIC Compliance Hub (/services/asic)
 * and related corporate registers maintenance services.
 */
export default function ShareChangesRelatedRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-semibold text-slate-800 dark:text-white">Related Service:</span>
        <span>Need to ensure your statutory member register and share certificates comply with the Corporations Act? Visit</span>
        <Link href="/services/asic/corporate-registers">
          <Button
            type="link"
            className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
            icon={<ArrowRightOutlined className="text-xs" />}
            iconPosition="end"
          >
            Corporate Registers Service
          </Button>
        </Link>
      </div>
    </section>
  );
}
