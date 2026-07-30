"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Tag } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import styles from "./TrustedNationwideSection.module.css";

export default function TrustedNationwideSection() {
  const partnerLogos = [
    { name: "MYOB", src: "/images/home/icons/myob.svg" },
    { name: "Xero", src: "/images/home/icons/xero.svg" },
    { name: "Chartered Accountants", src: "/images/home/icons/ca-anz.svg" },
    { name: "IPA Australia", src: "/images/home/icons/ipa.svg" },
    {
      name: "Tax Practitioners Board",
      src: "/images/home/icons/tax-Practitoners.svg",
    },
    { name: "QuickBooks", src: "/images/home/icons/quickBooks.svg" },
    { name: "ASIC", src: "/images/home/icons/asci.svg" },
    { name: "ATO", src: "/images/home/icons/ato.svg" },
  ];

  return (
    <section className="bg-gradient-to-b from-white to-brand-bg-lighter dark:from-zinc-950 dark:to-zinc-900 pt-16 sm:pt-24 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[450px]">
              <Image
                src="/images/home/Over-50K-Companies.webp"
                alt="Trusted Nationwide Australian Tax Professional"
                width={500}
                height={600}
                className="w-full h-auto object-contain rounded-2xl drop-shadow-lg"
              />

              <div className="absolute top-1/2 -left-4 sm:-left-8 -translate-y-1/2 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-slate-100 dark:border-zinc-800 flex items-center gap-2.5 text-xs font-semibold">
                <span className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span className="text-slate-800 dark:text-zinc-200">
                  File Received
                </span>
                <span className="text-[10px] text-slate-400 dark:text-zinc-500 font-normal">
                  22 Sep, 2020
                </span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-6 pb-16">
            <Tag
              color="green"
              className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400"
            >
              Trusted Nationwide
            </Tag>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
              Over 50,000+ Australians trust Financially Up to get business
              &amp; tax registered.
            </h2>

            <p className="text-base text-slate-600 dark:text-zinc-300 leading-relaxed max-w-xl">
              We partner with the platforms and bodies that matter, keeping your
              compliance seamless from day one.
            </p>

            <div className={`${styles.magicBorderContainer} rounded-[24px]`}>
              <div className="relative z-10 bg-white dark:bg-zinc-900 rounded-[22px] p-6 sm:p-8">
                <div className="grid grid-cols-2 sm:grid-cols-4 items-center gap-4 sm:gap-6">
                  {partnerLogos.map((logo, idx) => (
                    <div
                      key={idx}
                      className="h-16 sm:h-20 flex items-center justify-center p-3 rounded-2xl bg-emerald-50/40 dark:bg-zinc-800/40 border border-emerald-100/50 dark:border-zinc-700/50 hover:bg-white dark:hover:bg-zinc-800 hover:border-emerald-300 dark:hover:border-emerald-600 hover:shadow-md hover:scale-[1.04] transition-all duration-200 cursor-pointer"
                    >
                      <Image
                        src={logo.src}
                        alt={logo.name}
                        width={120}
                        height={48}
                        className="max-h-10 sm:max-h-12 w-auto object-contain"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="pt-2">
              <Link href="/book-an-appointment">
                <Button
                  type="primary"
                  size="large"
                  icon={<ArrowRightOutlined />}
                  iconPlacement="end"
                  className="h-12 px-7 rounded-xl font-bold text-base bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
                >
                  Book an Appointment
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
