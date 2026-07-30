"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "antd";
import {
  ArrowRightOutlined,
  SafetyCertificateOutlined,
  RiseOutlined,
  BookOutlined,
  FileTextOutlined,
  IdcardOutlined,
  AuditOutlined,
  BankOutlined,
} from "@ant-design/icons";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const floatingTags = [
    {
      label: "Investments",
      icon: (
        <RiseOutlined className="text-brand-primary dark:text-emerald-400" />
      ),
      position: "top-4 left-0 sm:left-4",
      animationClass: styles.animateFloatPill,
    },
    {
      label: "Bookkeeping",
      icon: (
        <BookOutlined className="text-brand-primary dark:text-emerald-400" />
      ),
      position: "top-12 right-0 sm:right-2",
      animationClass: styles.animateFloatPillSlow,
    },
    {
      label: "Tax Returns",
      icon: (
        <FileTextOutlined className="text-brand-primary dark:text-emerald-400" />
      ),
      position: "top-36 -left-4 sm:left-0",
      animationClass: styles.animateFloatPillAlt,
    },
    {
      label: "ABN & TFN",
      icon: (
        <IdcardOutlined className="text-brand-primary dark:text-emerald-400" />
      ),
      position: "top-40 right-2 sm:right-4",
      animationClass: styles.animateFloatPill,
    },
    {
      label: "Accounting",
      icon: (
        <AuditOutlined className="text-brand-primary dark:text-emerald-400" />
      ),
      position: "bottom-20 right-4 sm:right-10",
      animationClass: styles.animateFloatPillSlow,
    },
    {
      label: "Business Registrations",
      icon: (
        <BankOutlined className="text-brand-primary dark:text-emerald-400" />
      ),
      position: "bottom-4 left-6 sm:left-14",
      animationClass: styles.animateFloatPillAlt,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-bg-lighter to-white dark:from-zinc-900 dark:to-zinc-950 pt-10 pb-14 md:pt-14 md:pb-20 transition-colors duration-300">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-emerald-200/50 dark:bg-emerald-950/30 blur-3xl rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-100/90 dark:bg-emerald-950/90 border border-emerald-200/80 dark:border-emerald-800/80 text-brand-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider shadow-sm">
              <span className="w-2 h-2 rounded-full bg-brand-primary dark:bg-emerald-400 animate-ping" />
              <SafetyCertificateOutlined className="text-sm" />
              <span>ATO Registered Tax Agents</span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
              Tax Return Online Australia –{" "}
              <span className="text-brand-primary dark:text-emerald-400 font-extrabold">
                Fast, ATO Compliant
              </span>{" "}
              &amp; 100% Online
            </h1>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 max-w-xl leading-relaxed">
              At Financially Up, we illuminate the path, aligning your personal
              and business tax journey with financial prosperity, and saving you
              $$$$.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-11 px-7 rounded-xl font-bold text-sm sm:text-base bg-brand-primary hover:bg-brand-primary-hover shadow-lg shadow-emerald-600/20 hover:scale-[1.03] transition-all"
                >
                  Book an Appointment
                </Button>
              </Link>

              <Link href="/resources/engagement-forms/individual-engagement-form">
                <Button
                  size="large"
                  className="h-11 px-7 rounded-xl font-bold text-sm sm:text-base border border-slate-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900 text-slate-800 dark:text-zinc-200 hover:text-brand-primary hover:border-brand-primary"
                >
                  Start My Tax Return
                </Button>
              </Link>
            </div>

            <p className="text-xs font-medium text-slate-500 dark:text-zinc-400 pt-1">
              Join countless Australians who experience a stress-free tax
              lodgement with us.
            </p>
          </div>

          <div className="lg:col-span-5 relative flex justify-center items-center py-4">
            <div className="relative w-full max-w-[460px] flex justify-center">
              <div className="absolute inset-2 rounded-full bg-emerald-200/60 dark:bg-emerald-950/70 blur-md scale-105 -z-10" />

              <Image
                src="/images/home/hero.png"
                alt="Australian Tax Specialist - Financially Up"
                width={480}
                height={480}
                priority
                className="w-full h-auto object-contain drop-shadow-xl relative z-0"
              />

              {floatingTags.map((tag, idx) => (
                <div
                  key={idx}
                  className={`absolute ${tag.position} ${tag.animationClass} z-10`}
                >
                  <div className="bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-200/90 dark:border-zinc-800 shadow-md flex items-center gap-2 text-xs font-bold text-slate-800 dark:text-zinc-100 hover:scale-105 transition-transform cursor-pointer">
                    <span className="w-5 h-5 rounded-full bg-emerald-100/90 dark:bg-zinc-800 flex items-center justify-center text-xs">
                      {tag.icon}
                    </span>
                    <span>{tag.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
