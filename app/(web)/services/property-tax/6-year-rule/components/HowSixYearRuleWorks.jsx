"use client";

import React from "react";
import { Card } from "antd";
import { ClockCircleOutlined, DollarOutlined, HomeOutlined, SafetyCertificateOutlined } from "@ant-design/icons";

/**
 * HowSixYearRuleWorks Component
 * Explains section 118-145 ITAA 1997 absence concession for former main residences.
 */
export default function HowSixYearRuleWorks() {
  const cards = [
    {
      icon: <ClockCircleOutlined className="text-2xl text-emerald-600" />,
      title: "Up to 6 Years While Income-Producing",
      description:
        "When a former home is rented out to tenants or used to generate assessable income after you move out, you can choose to continue treating it as your main residence for capital gains tax purposes for up to six years for each relevant absence period.",
    },
    {
      icon: <HomeOutlined className="text-2xl text-blue-600" />,
      title: "Unlimited Absence If Not Rented",
      description:
        "If the property is left vacant, used solely by family without charging rent, or not used to produce assessable income, the continuing main residence treatment can potentially apply indefinitely, subject to general residency rules.",
    },
    {
      icon: <DollarOutlined className="text-2xl text-amber-600" />,
      title: "An Elective, Flexible Concession",
      description:
        "The six-year rule is not automatic—it is an optional statutory choice made when lodging your tax return for the income year in which the CGT event (contract of sale) occurs.",
    },
    {
      icon: <SafetyCertificateOutlined className="text-2xl text-purple-600" />,
      title: "Protects Capital Gains Growth",
      description:
        "When applicable, the rule can eliminate capital gains tax completely on the property during the qualifying absence period, provided you do not nominate another dwelling as your main residence for the same timeframe.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-emerald-700 text-sm font-semibold tracking-wider uppercase bg-emerald-50 px-3.5 py-1.5 rounded-full border border-emerald-200">
            Section 118-145 Absence Rule
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-4 tracking-tight">
            How Does the Six-Year Rule Work?
          </h2>
          <p className="text-slate-600 text-base sm:text-lg mt-4 leading-relaxed">
            When a property stops being your actual home, you can choose to continue treating it as your main residence for CGT purposes under Australia’s capital gains tax legislation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cards.map((card, idx) => (
            <Card
              key={idx}
              className="h-full border border-slate-200 shadow-sm hover:shadow-md transition-all duration-300 rounded-2xl"
              styles={{ body: { padding: "28px" } }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 shrink-0">
                  {card.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm sm:text-base">{card.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
