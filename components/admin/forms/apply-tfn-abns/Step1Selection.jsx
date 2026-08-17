"use client";

import React from "react";
import { Tag, Checkbox } from "antd";
import {
  IdcardOutlined,
  UserOutlined,
  BankOutlined,
  SafetyCertificateOutlined,
  TeamOutlined,
} from "@ant-design/icons";

const APPLICATION_CATEGORIES = [
  {
    key: "Apply Tax File Number (TFN)",
    title: "Tax File Number (TFN)",
    description:
      "Personal 9-digit Australian tax identifier for individuals, foreign workers, or residents",
    icon: <IdcardOutlined className="text-xl" />,
  },
  {
    key: "Sole Trader ABN",
    title: "Sole Trader ABN",
    description:
      "Australian Business Number for self-employed contractors, freelancers, and sole operators",
    icon: <UserOutlined className="text-xl" />,
  },
  {
    key: "Company ABN",
    title: "Company ABN",
    description:
      "ABN registration for incorporated Australian Proprietary Limited (Pty Ltd) entities",
    icon: <BankOutlined className="text-xl" />,
  },
  {
    key: "Trust ABN",
    title: "Trust ABN",
    description:
      "ABN and TFN registration for Discretionary, Family, Unit, or Hybrid Trusts",
    icon: <SafetyCertificateOutlined className="text-xl" />,
  },
  {
    key: "Partnership ABN",
    title: "Partnership ABN",
    description:
      "ABN for business partnerships operating between 2 or more individuals or entities",
    icon: <TeamOutlined className="text-xl" />,
  },
];

export default function Step1Selection({
  form,
  selectedCategories,
  setSelectedCategories,
}) {
  const handleToggleCategory = (categoryKey) => {
    let updated;
    if (selectedCategories.includes(categoryKey)) {
      updated = selectedCategories.filter((item) => item !== categoryKey);
    } else {
      updated = [...selectedCategories, categoryKey];
    }
    setSelectedCategories(updated);
    form.setFieldsValue({ ApplyTFN_ABN: updated });
  };

  return (
    <div className="space-y-3.5 animate-fadeIn">
      <div className="border-b border-slate-100 dark:border-zinc-800 pb-3">
        <div className="flex items-center gap-2 mb-1">
          <Tag
            color="green"
            className="font-extrabold uppercase text-[10px] px-2.5 py-0.5 rounded-full border-none"
          >
            Step 1 of 4
          </Tag>
          <span className="text-xs font-semibold text-slate-400 dark:text-zinc-500">
            Registration Selection
          </span>
        </div>
        <h2 className="text-2xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight">
          Select Application Type (TFN & ABN Registration)
        </h2>
        <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">
          Select one or more registrations you wish to apply for with the ATO &
          Australian Business Register.
        </p>
      </div>

      {/* Visual Selection Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {APPLICATION_CATEGORIES.map((cat) => {
          const isChecked = selectedCategories.includes(cat.key);
          return (
            <div
              key={cat.key}
              onClick={() => handleToggleCategory(cat.key)}
              className={`group relative p-5 rounded-2xl border-2 transition-all duration-200 cursor-pointer flex flex-col justify-between space-y-3 ${
                isChecked
                  ? "bg-brand-primary-soft/40 dark:bg-emerald-950/40 border-brand-primary shadow-sm scale-[1.01]"
                  : "bg-slate-50/60 dark:bg-zinc-800/50 border-slate-200/80 dark:border-zinc-700/80 hover:border-brand-primary/50"
              }`}
            >
              <div className="flex items-start justify-between">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center transition-colors ${
                    isChecked
                      ? "bg-brand-primary text-white"
                      : "bg-slate-200/80 dark:bg-zinc-700 text-slate-600 dark:text-zinc-300 group-hover:text-brand-primary"
                  }`}
                >
                  {cat.icon}
                </div>
                <Checkbox
                  checked={isChecked}
                  onChange={() => {}}
                  className="pointer-events-none"
                />
              </div>

              <div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 dark:text-zinc-100 leading-snug">
                  {cat.title}
                </h4>
                <p className="text-[11px] text-slate-500 dark:text-zinc-400 leading-relaxed mt-1">
                  {cat.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {selectedCategories.length === 0 && (
        <p className="text-xs text-amber-600 dark:text-amber-400 mt-2 font-medium">
          * Please select at least one application option to proceed.
        </p>
      )}
    </div>
  );
}
