// 'use client';

import React from "react";

// Line Chart: Requests over time
export function RequestsOverTimeChart() {
  return (
    <div className="w-full h-[320px] flex flex-col justify-between">
      {/* Chart Legend */}
      <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-xs font-semibold text-slate-500 dark:text-zinc-400">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#10b981]"></span>
          <span>Medicare</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#f59e0b]"></span>
          <span>GST</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#3b82f6]"></span>
          <span>Company</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#06b6d4]"></span>
          <span>Trust</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#8b5cf6]"></span>
          <span>SMSF</span>
        </div>
      </div>

      {/* SVG Responsive Area */}
      <div className="relative flex-1 w-full min-h-0">
        <svg
          viewBox="0 0 700 240"
          width="100%"
          height="100%"
          preserveAspectRatio="none"
          className="overflow-visible"
        >
          {/* Gradients */}
          <defs>
            <linearGradient id="grad-medicare" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#10b981" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="grad-gst" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="grad-company" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="grad-trust" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.0" />
            </linearGradient>
            <linearGradient id="grad-smsf" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.0" />
            </linearGradient>
          </defs>

          {/* Grid lines */}
          <g
            stroke="currentColor"
            className="text-slate-100 dark:text-zinc-800"
            strokeWidth="1"
            strokeDasharray="3 3"
          >
            <line x1="50" y1="20" x2="680" y2="20" />
            <line x1="50" y1="70" x2="680" y2="70" />
            <line x1="50" y1="120" x2="680" y2="120" />
            <line x1="50" y1="170" x2="680" y2="170" />
            <line x1="50" y1="220" x2="680" y2="220" />
          </g>

          {/* Y Axis text labels */}
          <g
            fill="currentColor"
            className="text-slate-400 dark:text-zinc-500 font-medium"
            fontSize="10"
            textAnchor="end"
          >
            <text x="40" y="24">
              60
            </text>
            <text x="40" y="74">
              45
            </text>
            <text x="40" y="124">
              30
            </text>
            <text x="40" y="174">
              15
            </text>
            <text x="40" y="224">
              0
            </text>
          </g>

          {/* X Axis text labels */}
          <g
            fill="currentColor"
            className="text-slate-400 dark:text-zinc-500 font-medium"
            fontSize="9"
            textAnchor="middle"
          >
            <text x="50" y="236">
              23 June
            </text>
            <text x="113" y="236">
              24 June
            </text>
            <text x="176" y="236">
              25 June
            </text>
            <text x="239" y="236">
              26 June
            </text>
            <text x="302" y="236">
              27 June
            </text>
            <text x="365" y="236">
              28 June
            </text>
            <text x="428" y="236">
              29 June
            </text>
            <text x="491" y="236">
              30 June
            </text>
            <text x="554" y="236">
              1 July
            </text>
            <text x="617" y="236">
              2 July
            </text>
            <text x="680" y="236">
              3 July
            </text>
          </g>

          {/* Medicare Line & Area (Green) */}
          <path
            d="M 50 130 Q 113 70 176 110 T 302 90 T 428 120 T 554 100 T 680 80 L 680 220 L 50 220 Z"
            fill="url(#grad-medicare)"
          />
          <path
            d="M 50 130 Q 113 70 176 110 T 302 90 T 428 120 T 554 100 T 680 80"
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* GST Line & Area (Orange) */}
          <path
            d="M 50 90 Q 113 60 176 100 T 302 110 T 428 135 T 554 110 T 680 95 L 680 220 L 50 220 Z"
            fill="url(#grad-gst)"
          />
          <path
            d="M 50 90 Q 113 60 176 100 T 302 110 T 428 135 T 554 110 T 680 95"
            fill="none"
            stroke="#f59e0b"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Company Line & Area (Blue) */}
          <path
            d="M 50 160 Q 113 140 176 150 T 302 130 T 428 165 T 554 140 T 680 120 L 680 220 L 50 220 Z"
            fill="url(#grad-company)"
          />
          <path
            d="M 50 160 Q 113 140 176 150 T 302 130 T 428 165 T 554 140 T 680 120"
            fill="none"
            stroke="#3b82f6"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Trust Line & Area (Light Blue) */}
          <path
            d="M 50 185 Q 113 175 176 180 T 302 170 T 428 190 T 554 175 T 680 155 L 680 220 L 50 220 Z"
            fill="url(#grad-trust)"
          />
          <path
            d="M 50 185 Q 113 175 176 180 T 302 170 T 428 190 T 554 175 T 680 155"
            fill="none"
            stroke="#06b6d4"
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* SMSF Line & Area (Purple) */}
          <path
            d="M 50 205 Q 113 195 176 200 T 302 195 T 428 208 T 554 198 T 680 180 L 680 220 L 50 220 Z"
            fill="url(#grad-smsf)"
          />
          <path
            d="M 50 205 Q 113 195 176 200 T 302 195 T 428 208 T 554 198 T 680 180"
            fill="none"
            stroke="#8b5cf6"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
}

// Horizontal Bar Chart: Requests by module
export function RequestsByModuleChart() {
  const data = [
    { name: "Medicare", value: 290, max: 600, color: "bg-[#008043]" },
    { name: "GST", value: 90, max: 600, color: "bg-[#008043]" },
    {
      name: "Company Registration",
      value: 260,
      max: 600,
      color: "bg-[#008043]",
    },
    {
      name: "Changes To Company Details",
      value: 370,
      max: 600,
      color: "bg-[#008043]",
    },
    { name: "Trust", value: 160, max: 600, color: "bg-[#008043]" },
    { name: "SMSF", value: 200, max: 600, color: "bg-[#008043]" },
    { name: "Business Name", value: 480, max: 600, color: "bg-[#008043]" },
    { name: "Apply TFN / ABNs", value: 190, max: 600, color: "bg-[#008043]" },
    { name: "Individual", value: 330, max: 600, color: "bg-[#008043]" },
    { name: "Entity", value: 65, max: 600, color: "bg-[#008043]" },
  ];

  return (
    <div className="w-full h-full flex flex-col justify-between text-slate-800 dark:text-zinc-200">
      <div className="space-y-3 flex-1 flex flex-col justify-center">
        {data.map((item, idx) => {
          const widthPercentage = (item.value / item.max) * 100;
          return (
            <div key={idx} className="flex items-center text-xs">
              <span className="w-36 text-slate-500 dark:text-zinc-400 font-semibold truncate pr-2 text-left">
                {item.name}
              </span>
              <div className="flex-1 bg-slate-100 dark:bg-zinc-800 h-6 rounded-md overflow-hidden relative">
                <div
                  style={{ width: `${widthPercentage}%` }}
                  className={`h-full rounded-md ${item.color} opacity-90 transition-all duration-500 ease-out`}
                ></div>
                <span className="absolute inset-y-0 right-2 flex items-center text-[10px] font-bold text-slate-600 dark:text-zinc-300">
                  {item.value}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* X Axis Legend */}
      <div className="flex justify-between text-[10px] font-semibold text-slate-400 dark:text-zinc-500 mt-4 border-t border-slate-100 dark:border-zinc-800/80 pt-2">
        <span className="w-36"></span> {/* aligns with label width */}
        <span className="flex-1 flex justify-between px-1">
          <span>0</span>
          <span>150</span>
          <span>300</span>
          <span>450</span>
          <span>600</span>
        </span>
      </div>
    </div>
  );
}
