"use client";

import React from "react";
import {
  SafetyCertificateOutlined,
  WarningOutlined,
  MobileOutlined,
  CheckCircleTwoTone,
  StopOutlined,
} from "@ant-design/icons";

/**
 * HowToCheckGenuineAtoMessage Component
 * =====================================
 * Section 2: Distinguishing legitimate ATO correspondence from phishing scams,
 * verifying via myGov / ATO online, and reporting suspected identity fraud.
 */
export default function HowToCheckGenuineAtoMessage() {
  const securityRules = [
    {
      title: "Watch for Urgent Threats & Links",
      description:
        "Scammers impersonate the ATO via email, SMS, phone calls, and fake portals. Any message creating pressure to click a link, disclose identity information, or pay immediately is a major red flag.",
      icon: <WarningOutlined className="text-xl text-rose-500" />,
    },
    {
      title: "Direct Access via Official Portals",
      description:
        "Individuals with myGov linked to the ATO generally receive personal notices in their myGov Inbox. Always log in directly via my.gov.au or the official ATO app—never follow links in SMS or email.",
      icon: <MobileOutlined className="text-xl text-emerald-500" />,
    },
    {
      title: "Verify Unsolicited Contacts",
      description:
        "Never use phone numbers or payment links supplied in an unverified text or email. Stop and verify the communication through independent ATO phone numbers or your registered tax agent.",
      icon: <SafetyCertificateOutlined className="text-xl text-blue-500" />,
    },
    {
      title: "Report Suspicious Activity Promptly",
      description:
        "Financially Up can help confirm genuine tax issues, but suspected impersonation or compromised TFNs should also be lodged with the ATO’s official Client Identity Support Centre.",
      icon: <StopOutlined className="text-xl text-amber-500" />,
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 dark:bg-zinc-950 border-b border-slate-200/80 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 uppercase tracking-wider block mb-2">
            Security & Verification
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
            How do you check whether the message is genuine?
          </h2>
          <div className="mt-6 text-base sm:text-lg text-slate-600 dark:text-zinc-300 leading-relaxed space-y-4">
            <p>
              Scammers impersonate the ATO through email, SMS, phone calls, social media and fake websites. If a message is unexpected or creates pressure to click a link, disclose identity information or pay immediately, stop and verify it through official ATO channels. Do not use the contact details supplied by an unverified sender.
            </p>
            <p>
              Individuals with myGov linked to the ATO generally receive personal messages and reminders through their myGov Inbox or ATO online services, although the ATO may also send general SMS or email communications. Access the service directly through the official website or app rather than an unexpected link. The ATO also provides a scam-verification and reporting service and advises people not to engage if unsure.
            </p>
            <p>
              Financially Up can help identify the tax issue shown in genuine correspondence, but suspected impersonation, identity compromise or unauthorized account activity should also be reported promptly through the ATO’s official security channels.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {securityRules.map((rule, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-zinc-900 border border-slate-200/80 dark:border-zinc-800 hover:border-emerald-500 dark:hover:border-emerald-500 shadow-sm transition-all duration-300 hover:-translate-y-1 flex gap-5"
            >
              <div className="w-12 h-12 rounded-xl bg-slate-50 dark:bg-zinc-800 border border-slate-200 dark:border-zinc-700 flex items-center justify-center flex-shrink-0">
                {rule.icon}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {rule.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-zinc-300 leading-relaxed">
                  {rule.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
