import React from "react";
import SubServiceHero from "@/components/website/SubServiceHero";
import WhatIsAnAppointorAndWhyItMatters from "./components/WhatIsAnAppointorAndWhyItMatters";
import WhenMightYouChangeAppointor from "./components/WhenMightYouChangeAppointor";
import HowIsAnAppointorChanged from "./components/HowIsAnAppointorChanged";
import TaxAndControlIssuesBeforeAppointorChange from "./components/TaxAndControlIssuesBeforeAppointorChange";
import AppointorSuccessionAndEstatePlanning from "./components/AppointorSuccessionAndEstatePlanning";
import AppointorChangeVsTrusteeChange from "./components/AppointorChangeVsTrusteeChange";
import HowFinanciallyUpHelpsAppointorChanges from "./components/HowFinanciallyUpHelpsAppointorChanges";
import WhatInformationShouldYouPrepareAppointor from "./components/WhatInformationShouldYouPrepareAppointor";
import WhyChooseFinanciallyUpAppointor from "./components/WhyChooseFinanciallyUpAppointor";
import RelatedAppointorChangesRibbon from "./components/RelatedAppointorChangesRibbon";
import FaqSection from "@/components/website/FaqSection";
import CallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * Server Metadata for SEO (Exact values from client document: Page 9 of 8th Pillar Trust Services.docx)
 */
export const metadata = {
  title: "Change Appointor Trust Australia | Financially Up",
  description:
    "Change appointor of a trust with tax and accounting support from Financially Up. Review control, deed requirements and related trust implications before the change.",
  keywords: [
    "change appointor trust",
    "family trust appointor change",
    "trust deed appointor succession",
    "appointor powers Australia",
    "trust control test tax losses",
    "appointor vs trustee",
  ],
  alternates: {
    canonical: "https://financiallyup.com.au/services/trusts/appointor-changes/",
  },
  openGraph: {
    title: "Change Appointor Trust Australia | Financially Up",
    description:
      "Change appointor of a trust with tax and accounting support from Financially Up. Review control, deed requirements and related trust implications before the change.",
    url: "https://financiallyup.com.au/services/trusts/appointor-changes/",
    siteName: "Financially Up",
    locale: "en_AU",
    type: "website",
  },
};

/**
 * Breadcrumbs configuration linking through the service hierarchy
 */
const breadcrumbs = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Trusts", href: "/services/trusts" },
  { label: "Appointor Changes" },
];

/**
 * 4 Exact Frequently Asked Questions from Client Document (Page 9)
 */
const appointorChangesFaqs = [
  {
    key: "1",
    label: "Can the appointor of a family trust be changed?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Often yes, but the process depends on the trust deed. The deed may allow the current appointor to nominate a
        successor, provide an automatic succession mechanism or require a formal amendment. Legal advice may be
        required to confirm the correct process.
      </p>
    ),
  },
  {
    key: "2",
    label: "Does changing the appointor change the trustee?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        No, not automatically. The appointor and trustee are separate roles. An appointor may have the power to appoint
        or remove the trustee, but changing the appointor does not itself replace the trustee unless that separate
        power is exercised.
      </p>
    ),
  },
  {
    key: "3",
    label: "Can an appointor change affect trust tax losses?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        It may for an ordinary non-fixed trust. The appointor or guardian can be relevant when considering whether
        control has changed for trust loss purposes. A trust with a valid family trust election is generally excepted
        from the ownership and control tests, although the income injection test can still apply in some circumstances.
        The result depends on the trust type, election status, deed and overall control arrangements.
      </p>
    ),
  },
  {
    key: "4",
    label: "Does an appointor change trigger CGT?",
    children: (
      <p className="text-xs sm:text-sm text-slate-600 dark:text-zinc-300 leading-relaxed font-normal">
        Not automatically. The tax outcome depends on the legal effect of the change and whether it is part of a
        broader variation or restructure. Where multiple trust terms or ownership arrangements are changing, the
        transaction should be reviewed before implementation.
      </p>
    ),
  },
];

/**
 * AppointorChangesPage Component
 * ==============================
 * Route: /services/trusts/appointor-changes
 * Pillar 8.8: Change Appointor of a Trust (Page 9 of client docx).
 * Features 100% complete, verbatim content from the professional SEO document.
 */
export default function AppointorChangesPage() {
  // Structured FAQ JSON-LD Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: appointorChangesFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.label,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.children.props.children,
      },
    })),
  };

  return (
    <main className="w-full">
      {/* Structured Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* 0. Dedicated Sub-Service Hero with Verbatim Lead Copy */}
      <SubServiceHero
        title="Change Appointor of a Trust"
        subtitle="Ultimate Trust Control Power, Succession Mechanisms, Family Trust Elections & Governance Continuity"
        description={
          <span className="space-y-3 block">
            <span className="block">
              Changing the appointor of a trust can alter who has practical control over the trustee and can affect
              succession, tax history and the way the trust is administered. Before an appointor change deed is signed,
              the trust deed should be reviewed to confirm how the role is defined, who can appoint a replacement and
              when the change takes effect.
            </span>
            <span className="block mt-2">
              Financially Up can review the accounting and tax implications of a proposed change of appointor and help
              identify related trust matters that need attention. Legal advice may be required for deed interpretation,
              succession rights and preparation of the legal documents. This page focuses on changing the appointor
              role; it is separate from changing the trustee itself.
            </span>
            <span className="block mt-2">
              If the appointor of a family trust or other discretionary trust needs to change, an initial discussion can
              help identify the deed provisions, tax history, control considerations and records that should be
              reviewed before the change is implemented.
            </span>
          </span>
        }
        parentService={{
          label: "Trusts Hub",
          href: "/services/trusts",
        }}
        breadcrumbs={breadcrumbs}
        subPillarTag="Pillar 8.8 • Trust Control & Succession Practice"
        highlights={[
          "Ultimate Control & Appointor Power Analysis",
          "Trust Loss Control Test & FTE Integrity",
          "Deed Succession & Protector Role Alignment",
        ]}
        primaryCta={{
          label: "Book an Appointment",
          href: "/book-an-appointment",
        }}
        metrics={[
          { value: "10+ Years", label: "Trust Experience" },
          { value: "TPB #26234055", label: "Registered Tax Agent" },
          { value: "CPA & IPA", label: "Qualified Specialists" },
          { value: "Australia-Wide", label: "Online & In-Person" },
        ]}
      />

      {/* 1. What is an appointor and why does the role matter? */}
      <WhatIsAnAppointorAndWhyItMatters />

      {/* 2. When might you need to change the appointor of a family trust? */}
      <WhenMightYouChangeAppointor />

      {/* 3. How is an appointor changed? */}
      <HowIsAnAppointorChanged />

      {/* 4. Tax and control issues to review before an appointor change */}
      <TaxAndControlIssuesBeforeAppointorChange />

      {/* 5. Appointor succession and estate planning */}
      <AppointorSuccessionAndEstatePlanning />

      {/* 6. Appointor change versus trustee change */}
      <AppointorChangeVsTrusteeChange />

      {/* 7. How Financially Up can help */}
      <HowFinanciallyUpHelpsAppointorChanges />

      {/* 8. What information should you prepare? */}
      <WhatInformationShouldYouPrepareAppointor />

      {/* 9. Why choose Financially Up? */}
      <WhyChooseFinanciallyUpAppointor />

      {/* 10. Related Services Ribbon */}
      <RelatedAppointorChangesRibbon />

      {/* 11. Frequently Asked Questions */}
      <FaqSection
        tag="Got Questions?"
        title="Frequently Asked Questions About Appointor Changes"
        description="Clear answers regarding appointor vs trustee distinctions, deed mechanisms, tax loss rules, and CGT considerations."
        items={appointorChangesFaqs}
      />

      {/* 12. Call to Action Banner */}
      <CallToActionBanner
        title="Planning to Change the Appointor of Your Trust?"
        subtitle="If you are considering a change of appointor, book an appointment with Financially Up to review the trust deed, tax history, control issues and related accounting matters before the change is finalized."
        primaryBtnText="Book an Appointment"
        primaryBtnHref="/book-an-appointment"
        secondaryBtnText="Explore All Trust Services"
        secondaryBtnHref="/services/trusts"
      />
    </main>
  );
}
