"use client";

import React from "react";
import FaqSection from "@/components/website/FaqSection";

/**
 * ServiceFaqSection Adapter
 * =========================
 * Normalizes props for FAQ sections across service pages (faqs array vs items array).
 */
export default function ServiceFaqSection({ faqs, items, ...rest }) {
  const resolvedItems =
    items ||
    (Array.isArray(faqs)
      ? faqs.map((faq, i) => ({
          key: String(i + 1),
          label: faq.question || faq.label || faq.title,
          children:
            typeof faq.answer === "string" ? (
              <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                {faq.answer}
              </p>
            ) : (
              faq.answer || faq.children
            ),
        }))
      : []);

  return <FaqSection items={resolvedItems} showSideColumn={false} {...rest} />;
}
