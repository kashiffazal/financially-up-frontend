"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Tag } from "antd";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  HomeOutlined,
} from "@ant-design/icons";
import styles from "./PropertyTaxOverview.module.css";

export default function PropertyTaxOverview() {
  const highlights = [
    "Mortgage interest, council rates & water charge deductions",
    "Division 40 & 43 depreciation schedule optimization",
    "Joint property ownership percentage split calculations",
    "Capital Gains Tax (CGT) planning for property sales",
  ];

  return (
    <section className="bg-white dark:bg-zinc-950 py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-primary-soft dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 text-brand-primary dark:text-emerald-400 text-xs font-bold uppercase tracking-wider">
              <HomeOutlined className="text-sm" />
              <span>Investment Property Specialists</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
              Expert Assistance for Individual Tax Returns with Investment
              Properties
            </h2>

            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
              At Financially Up, our team of tax professionals specializes in
              individual tax returns involving investment properties. We
              understand the unique tax considerations and complexities that
              come with rental income. Our goal is to help you maximize your tax
              benefits while ensuring compliance with the Australian Taxation
              Office (ATO) regulations.
            </p>

            {/* 2x2 Grid Highlights Chips */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-2xl bg-slate-50 dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-zinc-200 hover:bg-brand-primary-soft transition-all"
                >
                  <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-sm shrink-0" />
                  <span className="leading-snug">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-12 px-8 rounded-xl font-bold text-base bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Graphic Column */}
          <div className="lg:col-span-6 flex justify-center">
            <div
              className={`relative w-full max-w-[500px] rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-900 p-3 ${styles.overviewCard}`}
            >
              <Image
                src="/images/services/investment-property.webp"
                alt="Investment Property Tax Returns Specialist"
                width={550}
                height={420}
                priority
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
