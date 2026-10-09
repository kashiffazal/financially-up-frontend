"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * CompanyChangesRelatedRibbon Component
 * =====================================
 * Navigational ribbon linking back to the ASIC Compliance Hub (/services/asic)
 * and related sub-services (director changes, share changes, address updates).
 */
export default function CompanyChangesRelatedRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-semibold text-slate-800 dark:text-white">Related Service:</span>
        <span>For broader corporate compliance and registered agent services, visit</span>
        <Link href="/services/asic">
          <Button
            type="link"
            className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
            icon={<ArrowRightOutlined className="text-xs" />}
            iconPosition="end"
          >
            ASIC Compliance Services Hub
          </Button>
        </Link>
      </div>
    </section>
  );
}
