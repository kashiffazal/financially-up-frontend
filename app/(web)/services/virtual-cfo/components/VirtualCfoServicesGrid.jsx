"use client";

import React from "react";
import ServicesGrid from "@/components/website/ServicesGrid";

/**
 * VirtualCfoServicesGrid Component
 * =================================
 * Section 3: Our Virtual CFO Services.
 *
 * Consumes the mutual reusable `@/components/website/ServicesGrid` component,
 * presenting the 7 primary sub-service offerings of Pillar 13 (Virtual CFO)
 * in an authoritative 3-column layout with Clean White background.
 */
export default function VirtualCfoServicesGrid() {
  /**
   * The 7 Pillar 13 Services from official client scope document
   */
  const services = [
    {
      id: "virtual-cfo-services",
      icon: "team",
      tag: "Pillar 13.1",
      title: "Outsourced CFO Services",
      description:
        "Access senior finance capability through an ongoing external finance-management arrangement, following a repeatable monthly or quarterly rhythm.",
      href: "/services/virtual-cfo/virtual-cfo-services",
      actionText: "Outsourced CFO",
    },
    {
      id: "management-reporting",
      icon: "fund",
      tag: "Pillar 13.2",
      title: "Management Reporting",
      description:
        "Regular preparation and analysis of financial information for internal decision-making, tracking revenue, margins, and cash flow.",
      href: "/services/virtual-cfo/management-reporting",
      actionText: "Management packs",
    },
    {
      id: "financial-modelling",
      icon: "calculator",
      tag: "Pillar 13.3",
      title: "Financial Modelling",
      description:
        "Connect forecasts, cash flow and assumptions around business decisions such as expansion, staffing, capital purchases or funding.",
      href: "/services/virtual-cfo/financial-modelling",
      actionText: "Financial models",
    },
    {
      id: "scenario-planning",
      icon: "compass",
      tag: "Pillar 13.4",
      title: "Scenario Planning",
      description:
        "Compare possible business outcomes and show what each could mean for profit, cash and commitments to prepare for uncertainty.",
      href: "/services/virtual-cfo/scenario-planning",
      actionText: "Scenario planning",
    },
    {
      id: "board-reporting",
      icon: "bank",
      tag: "Pillar 13.5",
      title: "Board Reporting",
      description:
        "Organise financial results, cash information, forecasts and commentary into tailored board packs for directors and advisory boards.",
      href: "/services/virtual-cfo/board-reporting",
      actionText: "Board packs",
    },
    {
      id: "dashboards",
      icon: "line-chart",
      tag: "Pillar 13.6",
      title: "Finance Dashboards",
      description:
        "Bring selected business figures into one clear view to see what has changed and what needs attention with agreed definitions.",
      href: "/services/virtual-cfo/dashboards",
      actionText: "Finance dashboards",
    },
    {
      id: "three-way-forecasting",
      icon: "rise",
      tag: "Pillar 13.7",
      title: "Three Way Forecasting",
      description:
        "Connect projected profit and loss, balance sheet and cash flow statements to see how plans affect earnings, debt, and cash runway.",
      href: "/services/virtual-cfo/three-way-forecasting",
      actionText: "Three-way forecast",
    },
  ];

  return (
    <ServicesGrid
      sectionId="cfo-services-overview"
      tag="Service Portfolio"
      title="Our Virtual CFO Services"
      subtitle="From recurring outsourced CFO retainers and monthly management packs to dynamic financial models, scenario planning, and 3-way forecasts."
      services={services}
      columns={3}
      className="py-16 md:py-24 bg-white dark:bg-zinc-950 border-t border-b border-slate-200/80 dark:border-zinc-800 transition-colors"
    />
  );
}
