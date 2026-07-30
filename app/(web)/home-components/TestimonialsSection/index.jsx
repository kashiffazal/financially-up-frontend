"use client";

import React, { useRef } from "react";
import { Carousel, Button, Rate, Tag } from "antd";
import {
  LeftOutlined,
  RightOutlined,
  StarFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import styles from "./TestimonialsSection.module.css";

export default function TestimonialsSection() {
  const carouselRef = useRef(null);

  const testimonials = [
    {
      name: "Amelia Robinson",
      role: "Small Business Owner, Sydney",
      stars: 5,
      quote:
        "Financially Up simplified a difficult tax season. Their support and process were exceptional from start to finish, and I saved more than expected.",
      initials: "AR",
      avatarBg: "bg-emerald-600",
    },
    {
      name: "George Mitchell",
      role: "Investment Property Owner, Melbourne",
      stars: 5,
      quote:
        "Expert advice guided us through complex tax matters. I felt in control the entire time and the team handled every detail with clarity.",
      initials: "GM",
      avatarBg: "bg-teal-600",
    },
    {
      name: "Hazel Bennett",
      role: "Sole Trader, Brisbane",
      stars: 5,
      quote:
        "Deeply engaged and thorough. Their team understood our business and delivered clear outcomes with no stress and no jargon.",
      initials: "HB",
      avatarBg: "bg-emerald-700",
    },
    {
      name: "Daniel Nguyen",
      role: "Company Director, Perth",
      stars: 5,
      quote:
        "The most responsive accountants I've worked with. 100% online, quick turnaround and always available for questions. Highly recommended.",
      initials: "DN",
      avatarBg: "bg-brand-primary",
    },
  ];

  return (
    <section className="bg-brand-bg-lighter dark:bg-zinc-950/60 py-16 sm:py-24 transition-colors duration-300">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <Tag
              color="green"
              className="font-bold text-xs uppercase px-3.5 py-1 rounded-full border-none bg-emerald-100 dark:bg-emerald-950 text-brand-primary dark:text-emerald-400"
            >
              Testimonials
            </Tag>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-zinc-50 tracking-tight leading-[1.2]">
              What Our Clients Say
            </h2>

            <p className="text-sm sm:text-base text-slate-600 dark:text-zinc-400 font-normal max-w-xl">
              Real feedback from Australian individuals and business owners
              trusting Financially Up.
            </p>
          </div>

          <div className="flex items-center gap-6 shrink-0">
            <div className="hidden sm:flex items-center gap-2 bg-white dark:bg-zinc-900 px-4 py-2 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm text-xs font-bold text-slate-700 dark:text-zinc-200">
              <StarFilled className="text-amber-400 text-sm" />
              <span>4.9 / 5.0 Rating</span>
              <span className="text-slate-400 dark:text-zinc-500 font-normal">
                | 500+ Reviews
              </span>
            </div>

            <div className="flex items-center gap-2">
              <Button
                shape="circle"
                size="large"
                icon={<LeftOutlined className="text-xs" />}
                onClick={() => carouselRef.current?.prev()}
                className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-200 hover:border-brand-primary hover:text-brand-primary shadow-sm transition-all"
                aria-label="Previous Slide"
              />
              <Button
                shape="circle"
                size="large"
                icon={<RightOutlined className="text-xs" />}
                onClick={() => carouselRef.current?.next()}
                className="bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 text-slate-700 dark:text-zinc-200 hover:border-brand-primary hover:text-brand-primary shadow-sm transition-all"
                aria-label="Next Slide"
              />
            </div>
          </div>
        </div>

        <Carousel
          ref={carouselRef}
          autoplay
          dots
          slidesToShow={3}
          responsive={[
            { breakpoint: 1024, settings: { slidesToShow: 2 } },
            { breakpoint: 640, settings: { slidesToShow: 1 } },
          ]}
          className={`${styles.equalHeightCarousel} pb-6`}
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="px-3 py-2">
              <div className="bg-white dark:bg-zinc-900 p-7 rounded-2xl border border-slate-200/80 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-brand-border-hover dark:hover:border-emerald-500 transition-all duration-300 w-full flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Rate
                      disabled
                      defaultValue={item.stars}
                      className="text-amber-400 text-xs"
                    />
                    <div className="flex items-center gap-1 text-[11px] font-semibold text-brand-primary dark:text-emerald-400 bg-[#eaf7f0] dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full">
                      <CheckCircleFilled className="text-[10px]" />
                      <span>Verified Client</span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-zinc-800/80">
                  <div
                    className={`w-10 h-10 rounded-full ${item.avatarBg} text-white font-bold text-xs flex items-center justify-center shadow-sm shrink-0`}
                  >
                    {item.initials}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-zinc-50 leading-tight">
                      {item.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 dark:text-zinc-400 font-normal mt-0.5">
                      {item.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </section>
  );
}
