"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Button, Tag } from "antd";
import {
  ArrowRightOutlined,
  CheckCircleFilled,
  UserOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
  BankOutlined,
  FileProtectOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import styles from "./BusinessServicesList.module.css";

export default function BusinessServicesList() {
  const services = [
    {
      id: "sole-trader",
      number: "01",
      tag: "FREELANCERS & TRADIES",
      badgeText: "Industry Expense Claims",
      badgeIcon: <ThunderboltOutlined className="text-amber-400 text-sm" />,
      icon: <UserOutlined className="text-brand-primary text-xl" />,
      title: "Sole Trader Tax Returns",
      description:
        "At Financially Up, we specialize in providing expert assistance with sole trader tax returns across a wide range of industries. Our knowledgeable team of tax professionals understands the specific tax obligations and regulations applicable to different types of sole trader businesses. Whether you're a freelancer, IT service provider, security services provider, taxi driver, truck driver, ride-share service provider, delivery driver, or any other type of sole trader, we have the expertise to simplify your tax compliance.",
      highlights: [
        "Industry-specific expense claim optimization",
        "Motor vehicle logbook & home office deduction rules",
        "GST & ABN registration assistance",
        "CPA tax agent review for 100% peace of mind",
      ],
      image: "/images/services/sole-trader.webp",
      imageAlt: "Sole Trader Tax Returns Specialist",
      link: "/business-services/sole-trader",
      reverseLayout: false,
    },
    {
      id: "trust-tax-return",
      number: "02",
      tag: "FAMILY & UNIT TRUSTS",
      badgeText: "June 30 Resolution Prep",
      badgeIcon: (
        <SafetyCertificateOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
      ),
      icon: (
        <SafetyCertificateOutlined className="text-brand-primary text-xl" />
      ),
      title: "Trust Tax Returns",
      description:
        "At Financially Up, we specialize in providing expert assistance with trust tax returns for a wide range of trust types. Our experienced team of tax professionals understands the unique tax obligations and complexities associated with different trust structures, including fixed trusts, unit trusts, testamentary trusts, discretionary trusts (family trusts), hybrid trusts, charitable trusts, superannuation trusts, and bare trusts.",
      highlights: [
        "Family & discretionary trust distribution prep",
        "Section 100A & 99B compliance risk review",
        "Unit trust & beneficiary income tax reporting",
        "Capital gains & dividend streaming optimization",
      ],
      image: "/images/services/Trust.webp",
      imageAlt: "Trust Tax Returns Specialist",
      link: "/business-services/trust-tax-return",
      reverseLayout: true,
    },
    {
      id: "partnership-tax-return",
      number: "03",
      tag: "PARTNERSHIPS",
      badgeText: "Partner Profit Splits",
      badgeIcon: (
        <TeamOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
      ),
      icon: <TeamOutlined className="text-brand-primary text-xl" />,
      title: "Partnership Tax Returns",
      description:
        "At Financially Up, we specialize in providing expert assistance with partnership tax returns. Our experienced team of tax professionals understands the unique tax obligations and complexities associated with partnerships. Whether you have a general partnership, limited partnership, or limited liability partnership, we have the expertise to simplify your tax compliance.",
      highlights: [
        "Partnership agreement profit distribution split",
        "Partner salary & capital contribution tracking",
        "Joint asset depreciation & instant write-offs",
        "Individual partner tax return integration",
      ],
      image: "/images/services/Partnership.webp",
      imageAlt: "Partnership Tax Returns Specialist",
      link: "/business-services/partnership-tax-return",
      reverseLayout: false,
    },
    {
      id: "company-tax-return",
      number: "04",
      tag: "PTY LTD COMPANIES",
      badgeText: "25% Corporate Tax Rate",
      badgeIcon: (
        <BankOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
      ),
      icon: <BankOutlined className="text-brand-primary text-xl" />,
      title: "Company Tax Returns",
      description:
        "At Financially Up, we specialize in providing expert assistance with company tax returns. Our experienced team of tax professionals understands the unique tax obligations and complexities associated with companies. Whether you have a small business, a medium-sized enterprise, or a large corporation, we have the expertise to simplify your tax compliance.",
      highlights: [
        "25% small business corporate tax rate optimization",
        "Dividend franking account & credit reporting",
        "Division 7A loan agreement compliance & monitoring",
        "Extended ATO tax agent portal lodgement deadlines",
      ],
      image: "/images/services/company.webp",
      imageAlt: "Company Tax Returns Specialist",
      link: "/business-services/company-tax-return",
      reverseLayout: true,
    },
    {
      id: "bas-gst-lodgement",
      number: "05",
      tag: "BAS & GST COMPLIANCE",
      badgeText: "4-Week ATO Extension",
      badgeIcon: (
        <FileProtectOutlined className="text-brand-primary dark:text-emerald-400 text-sm" />
      ),
      icon: <FileProtectOutlined className="text-brand-primary text-xl" />,
      title: "BAS/GST Lodgement",
      description:
        "At Financially Up, we specialize in providing expert assistance with Business Activity Statement (BAS) lodgement and Goods and Services Tax (GST) compliance for all types of entities. Our experienced team of tax professionals understands the unique obligations and complexities associated with BAS and GST.",
      highlights: [
        "Quarterly & monthly BAS lodgement with 4-week extension",
        "PAYG withholding & PAYG instalment calculation",
        "GST fuel tax credits & payroll reconciliations",
        "STP Phase 2 year-end payroll finalization",
      ],
      image: "/images/services/gst.webp",
      imageAlt: "BAS and GST Lodgement Specialist",
      link: "/business-services/bas-gst-lodgement",
      reverseLayout: false,
    },
  ];

  return (
    <section
      className={`bg-gradient-to-b from-white via-brand-bg-lighter/40 to-white dark:from-zinc-950 dark:via-zinc-900/30 dark:to-zinc-950 py-16 sm:py-24 transition-colors duration-300 ${styles.sectionWrapper}`}
    >
      {/* Background Ambient Glow Orbs */}
      <div className={styles.glowOrb1} />
      <div className={styles.glowOrb2} />

      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16 lg:space-y-20">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <Tag
            color="green"
            className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 shadow-sm"
          >
            Explore Business Services
          </Tag>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
            Tailored Accounting &amp; Tax Solutions for Australian Businesses
          </h2>

          <p className="text-sm sm:text-base text-slate-500 dark:text-zinc-400 font-normal">
            From sole traders to PTY LTD companies and family trusts, our CPA
            business accountants optimize tax efficiency and keep you 100% ATO
            compliant.
          </p>
        </div>

        {/* Services Cards List */}
        {services.map((service, idx) => (
          <div
            key={service.id}
            className={`group bg-white dark:bg-zinc-900 rounded-3xl p-8 sm:p-12 border border-slate-200/80 dark:border-zinc-800 shadow-sm ${styles.serviceCard}`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
              {/* Image Column */}
              <div
                className={`lg:col-span-6 ${
                  service.reverseLayout ? "lg:order-2" : "lg:order-1"
                }`}
              >
                <div
                  className={`relative ${styles.serviceImageWrapper} shadow-xl border border-slate-200/80 dark:border-zinc-800 bg-slate-50 dark:bg-zinc-950 p-2.5`}
                >
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={580}
                    height={550}
                    className="w-full h-[550px] object-cover rounded-2xl"
                  />

                  {/* Number Badge Top-Left */}
                  <div className="absolute top-6 left-6 bg-brand-primary text-white font-extrabold text-xs px-3 py-1.5 rounded-xl shadow-md tracking-wider">
                    {service.number}
                  </div>

                  {/* Floating Trust Badge Bottom-Right */}
                  <div className="absolute bottom-6 right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-slate-200/80 dark:border-zinc-800 flex items-center gap-2 text-xs font-bold text-slate-900 dark:text-zinc-50 z-10">
                    {service.badgeIcon}
                    <span>{service.badgeText}</span>
                  </div>
                </div>
              </div>

              {/* Text Column */}
              <div
                className={`lg:col-span-6 space-y-6 ${
                  service.reverseLayout ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-brand-primary-soft dark:bg-emerald-950/70 flex items-center justify-center shrink-0">
                    {service.icon}
                  </div>
                  <Tag
                    color="green"
                    className="font-bold text-[11px] uppercase px-3 py-0.5 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400 tracking-wider"
                  >
                    {service.tag}
                  </Tag>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-tight">
                  {service.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Highlights List in 2x2 Grid Chips */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  {service.highlights.map((item, hIdx) => (
                    <div
                      key={hIdx}
                      className={`p-3 rounded-2xl bg-slate-50 dark:bg-zinc-950/60 border border-slate-100 dark:border-zinc-800 flex items-center gap-2.5 text-xs font-semibold text-slate-700 dark:text-zinc-200 ${styles.bulletChip}`}
                    >
                      <CheckCircleFilled className="text-brand-primary dark:text-emerald-400 text-sm shrink-0" />
                      <span className="leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="pt-3">
                  <Link href={service.link}>
                    <Button
                      type="primary"
                      size="large"
                      icon={<ArrowRightOutlined />}
                      iconPlacement="end"
                      className="h-12 px-8 rounded-xl font-bold text-sm bg-brand-primary hover:bg-brand-primary-hover shadow-md shadow-emerald-600/20 hover:scale-105 transition-all"
                    >
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
