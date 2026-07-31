"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Tag, Button } from "antd";
import {
  CheckCircleFilled,
  ArrowRightOutlined,
  ThunderboltOutlined,
  SafetyCertificateOutlined,
  DollarOutlined,
} from "@ant-design/icons";
import styles from "./SeamlessTaxExperienceSection.module.css";

export default function SeamlessTaxExperienceSection() {
  const highlights = [
    {
      title: "Fast 48-Hour Review",
      desc: "Rapid turnaround by qualified Australian CPA accountants.",
      icon: <ThunderboltOutlined className="text-brand-primary text-lg" />,
    },
    {
      title: "Maximum Tax Optimization",
      desc: "Claiming all eligible deductions to maximize your return.",
      icon: <DollarOutlined className="text-brand-primary text-lg" />,
    },
    {
      title: "100% Security & Encryption",
      desc: "Bank-grade encryption protecting your personal and tax data.",
      icon: (
        <SafetyCertificateOutlined className="text-brand-primary text-lg" />
      ),
    },
  ];

  return (
    <section
      className={`bg-gradient-to-b from-white via-brand-bg-lighter to-white dark:from-zinc-950 dark:via-zinc-900/60 dark:to-zinc-950 py-16 sm:py-24 transition-colors duration-300 ${styles.experienceSection}`}
    >
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* ── Left Column: Rich Narrative Content (Col 7) ── */}
          <div className="lg:col-span-7 space-y-6">
            {/* Tag */}
            <Tag
              color="green"
              className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400"
            >
              Simplified Tax Lodgement
            </Tag>

            {/* Main Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
              Designed for Maximum Refunds &amp; Complete Peace of Mind
            </h2>

            {/* Narrative Body Paragraphs */}
            <div className="space-y-4 text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              <p>
                At Financially Up, we believe lodging your tax return shouldn’t
                be a tedious, paperwork-heavy chore. We have modernised
                Australian tax accounting by combining high-touch human
                expertise from certified CPAs with an effortless 100% online
                experience.
              </p>
              <p>
                Whether you are claiming work-related deductions, managing
                investment property depreciation, or lodging complex company
                returns, our senior tax agents manually review every line item
                to ensure zero ATO red flags and maximum tax savings.
              </p>
            </div>

            {/* 3 Vertical Border Accent Highlights (Non-Boxed) */}
            <div className="pt-2 space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className={styles.experienceStatItem}>
                  <div className="flex items-center gap-2 mb-1">
                    {item.icon}
                    <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-500 dark:text-zinc-400 font-normal">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-12 px-8 rounded-xl font-bold text-base bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
                >
                  Get Started Online
                </Button>
              </Link>
            </div>
          </div>

          {/* ── Right Column: High-Impact Visual Graphic & Stats Bar (Col 5) ── */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[460px]">
              {/* Soft Ambient Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-emerald-200/60 dark:bg-emerald-950/50 blur-3xl rounded-full pointer-events-none -z-10" />

              {/* Graphic Banner Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2">
                <Image
                  src="/images/services/home-Complete-Peace-of-Mind.webp"
                  alt="Seamless Australian Online Tax Service"
                  width={500}
                  height={550}
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              {/* Floating Stat Badge 1: 99.8% Accuracy */}
              <div className="absolute -top-4 -left-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-emerald-100 dark:border-zinc-800 flex items-center gap-3 z-10">
                <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center font-bold text-sm shrink-0">
                  <CheckCircleFilled />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 dark:text-zinc-50">
                    99.8%
                  </div>
                  <div className="text-[10px] font-semibold text-slate-400 dark:text-zinc-400">
                    ATO Compliance Rate
                  </div>
                </div>
              </div>

              {/* Floating Stat Badge 2: $2.4M+ Saved */}
              <div className="absolute -bottom-5 -right-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-emerald-100 dark:border-zinc-800 flex items-center gap-3 z-10">
                <div className="w-9 h-9 rounded-xl bg-amber-100 dark:bg-amber-950 text-amber-600 dark:text-amber-400 flex items-center justify-center font-bold text-sm shrink-0">
                  <DollarOutlined />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-brand-primary dark:text-emerald-400">
                    $2.4M+
                  </div>
                  <div className="text-[10px] font-semibold text-slate-400 dark:text-zinc-400">
                    Tax Deductions Saved
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
