"use client";

import React from "react";
import Link from "next/link";
import { Button } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";

/**
 * RelatedServiceRibbon Component
 * ==============================
 * Displays the exact Related Service link from Page 2 of the client docx.
 * Uses Ant Design Button in a dedicated client component context.
 */
export default function RelatedServiceRibbon() {
  return (
    <section className="py-8 bg-slate-50 dark:bg-zinc-950 border-t border-slate-200/80 dark:border-zinc-800 text-center transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-center gap-3 text-sm text-slate-600 dark:text-zinc-300">
        <span className="font-semibold text-slate-800 dark:text-white">Related Service:</span>
        <span>For the broader range of personal tax services, visit</span>
        <Link href="/services/individual-tax">
          <Button
            type="link"
            className="p-0 font-bold text-brand-primary dark:text-emerald-400 hover:underline inline-flex items-center gap-1 h-auto"
            icon={<ArrowRightOutlined className="text-xs" />}
            iconPosition="end"
          >
            Individual Tax Services
          </Button>
        </Link>
      </div>
    </section>
  );
}
