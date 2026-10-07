"use client";

import React from "react";
import { Tag } from "antd";
import {
  FolderOpenOutlined,
  IdcardOutlined,
  CalendarOutlined,
  RiseOutlined,
  ShoppingOutlined,
  ExclamationCircleOutlined,
  LaptopOutlined,
  MailOutlined,
} from "@ant-design/icons";

/**
 * InformationNeededGstSetup Component
 * Covers 'What information may be needed for a GST setup service?'
 * from Page 3 of 5th Pillar BAS, GST & Payroll.docx.
 */
export default function InformationNeededGstSetup() {
  const requirements = [
    {
      title: "ABN and entity details",
      desc: "Australian Business Number, registered entity name, directors/trustees, and current trading details.",
      icon: <IdcardOutlined className="text-xl text-emerald-600 dark:text-emerald-400" />,
    },
    {
      title: "Business commencement date",
      desc: "The date operations started or the scheduled date commercial trading begins.",
      icon: <CalendarOutlined className="text-xl text-teal-600 dark:text-teal-400" />,
    },
    {
      title: "Current and expected turnover",
      desc: "Monthly gross sales figures and 12-month forward projections to determine compulsory status.",
      icon: <RiseOutlined className="text-xl text-blue-600 dark:text-blue-400" />,
    },
    {
      title: "Nature of the goods or services sold",
      desc: "Products, services, export activities, or digital downloads to identify relevant tax treatments.",
      icon: <ShoppingOutlined className="text-xl text-indigo-600 dark:text-indigo-400" />,
    },
    {
      title: "Information about any activities with special GST rules",
      desc: "Ride-sourcing, taxi operations, non-profit status, or fuel tax credit entitlements.",
      icon: <ExclamationCircleOutlined className="text-xl text-amber-600 dark:text-amber-400" />,
    },
    {
      title: "Current accounting software and invoicing process",
      desc: "Details on Xero, MYOB, QuickBooks, or POS systems used for sales and customer billing.",
      icon: <LaptopOutlined className="text-xl text-purple-600 dark:text-purple-400" />,
    },
    {
      title: "Existing ATO registrations and correspondence where relevant",
      desc: "Activity statement history, prior registrations, and any formal ATO notices.",
      icon: <MailOutlined className="text-xl text-rose-600 dark:text-rose-400" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white dark:bg-zinc-900 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12 sm:mb-16">
          <Tag color="cyan" className="brand-section-tag mb-4 font-bold tracking-wider uppercase text-xs">
            <FolderOpenOutlined className="mr-1.5" />
            Registration Requirements
          </Tag>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            What information may be needed for a GST setup service?
          </h2>

          <p className="text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
            To register your enterprise with the ATO accurately and establish your reporting cycle from the correct effective date, have the following information prepared:
          </p>
        </div>

        {/* 7 Requirements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {requirements.map((item, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl bg-slate-50 dark:bg-zinc-800/50 border border-slate-200/80 dark:border-zinc-700/80 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white dark:bg-zinc-700/60 border border-slate-200/60 dark:border-zinc-600/40 flex items-center justify-center mb-5">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
