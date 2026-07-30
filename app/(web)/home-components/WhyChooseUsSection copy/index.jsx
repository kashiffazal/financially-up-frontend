"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Tag } from "antd";
import {
  CheckCircleFilled,
  ArrowRightOutlined,
  SafetyOutlined,
} from "@ant-design/icons";
import styles from "./WhyChooseUsSection.module.css";

export default function WhyChooseUsSection() {
  const points = [
    {
      title: "Precision & Accuracy",
      description:
        "Every financial record is handled with utmost accuracy, leaving no detail overlooked.",
    },
    {
      title: "Custom Solutions",
      description:
        "Services tailored around your unique needs, delivering personalised, insightful guidance.",
    },
    {
      title: "Transparency",
      description:
        "Clear, upfront pricing with no hidden charges - a straightforward, uncomplicated experience.",
    },
    {
      title: "Knowledgeable Team",
      description:
        "Certified, experienced professionals at the forefront of Australian tax legislation.",
    },
  ];

  return (
    <section className="bg-white dark:bg-zinc-950 py-16 sm:py-24 border-t border-slate-100 dark:border-zinc-800 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          <div className="lg:col-span-6 relative flex justify-center">
            <div className="relative w-full max-w-[520px]">
              <div className="absolute inset-4 rounded-3xl bg-emerald-200/50 dark:bg-emerald-950/40 blur-2xl -z-10" />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-950/10 border border-slate-200/80 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-2">
                <Image
                  src="/images/home/Why-Choose-Us.webp"
                  alt="Financially Up Professional Team Meeting"
                  width={550}
                  height={450}
                  priority
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>

              <div className="absolute -bottom-5 -right-4 sm:right-4 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-emerald-100 dark:border-zinc-800 flex items-center gap-2.5 text-xs font-bold text-slate-800 dark:text-zinc-100 z-10">
                <span className="w-8 h-8 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 flex items-center justify-center text-sm shrink-0">
                  <SafetyOutlined />
                </span>
                <div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    100% Tax Compliant
                  </div>
                  <div className="text-xs font-bold text-brand-primary dark:text-emerald-400">
                    Certified Tax Agents
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <Tag
              color="green"
              className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400"
            >
              Why Choose Us
            </Tag>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
              Precision meets personalised service.
            </h2>

            <div className="space-y-3.5 pt-2">
              {points.map((point, idx) => (
                <div
                  key={idx}
                  className={`group flex items-start gap-4 p-4 rounded-2xl bg-slate-50/80 dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/80 hover:bg-white dark:hover:bg-zinc-900 cursor-pointer ${styles.featureTile}`}
                >
                  <div className="w-9 h-9 rounded-xl bg-emerald-100/80 dark:bg-emerald-950/80 flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <CheckCircleFilled className="text-base text-brand-primary dark:text-emerald-400" />
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-base font-bold text-slate-900 dark:text-zinc-100 group-hover:text-brand-primary dark:group-hover:text-emerald-400 transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-normal">
                      {point.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-3">
              <Link href="/resources/engagement-forms/individual-engagement-form">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPosition="end"
                  className="h-12 px-8 rounded-xl font-bold text-base bg-brand-primary hover:bg-[#006635] shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
