import { PHASE_PRODUCTION_BUILD } from "next/constants.js";

/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  // 301 Redirects
  async redirects() {
    return [
      {
        source: "/individual-tax-return",
        destination: "/individual-services/individual-tax-return",
        permanent: true,
      },
      {
        source: "/individual-tax-return-with-investment-properties",
        destination:
          "/individual-services/individual-tax-return-with-investment-properties",
        permanent: true,
      },
      {
        source: "/gst-registrations",
        destination: "/resources/registration-forms/gst-registrations",
        permanent: true,
      },
      {
        source: "/company-registration",
        destination: "/resources/registration-forms/company-registration",
        permanent: true,
      },
      {
        source: "/changes-to-company-details",
        destination: "/resources/registration-forms/changes-to-company-details",
        permanent: true,
      },
      {
        source: "/trust-registrations",
        destination: "/resources/registration-forms/trust-registrations",
        permanent: true,
      },
      {
        source: "/smsf-registrations-form",
        destination: "/resources/registration-forms/smsf-registrations-form",
        permanent: true,
      },
      {
        source: "/business-name-registrations",
        destination:
          "/resources/registration-forms/business-name-registrations",
        permanent: true,
      },
      {
        source: "/apply-tfn-abns",
        destination: "/resources/registration-forms/apply-tfn-abns",
        permanent: true,
      },
      {
        source: "/entity-engagements-form",
        destination: "/resources/engagement-forms/entity-engagements-form",
        permanent: true,
      },
      {
        source: "/individual-engagement-form",
        destination: "/resources/engagement-forms/individual-engagement-form",
        permanent: true,
      },


      {
        source: "/medicare",
        destination: "/resources/medicare-forms/medicare-exemption-form",
        permanent: true,
      },

      {
        source: "/sole-trader",
        destination: "/business-services/sole-trader",
        permanent: true,
      },
      {
        source: "/trust-tax-return",
        destination: "/business-services/trust-tax-return",
        permanent: true,
      },
      {
        source: "/partnership-tax-return",
        destination: "/business-services/partnership-tax-return",
        permanent: true,
      },
      {
        source: "/company-tax-return",
        destination: "/business-services/company-tax-return",
        permanent: true,
      },
      {
        source: "/BAS-GST-Lodgement",
        destination: "/business-services/BAS-GST-Lodgement",
        permanent: true,
      },
    ];
  },
};

/**
 * Low-memory production build (Hostinger)
 * ---------------------------------------
 * The hosting build container has less memory than a developer PC; an
 * unrestricted build used ~3.9 GB in total and got killed. During `next build`
 * only (`npm run dev` is unchanged):
 *   - React Compiler off: it runs Babel over every file in 4 extra worker
 *     processes (~1.6 GB together) and nearly doubles compile time. It is a
 *     render-performance optimisation only; the app behaves the same without it.
 *     Measured locally: ~3.9 GB → ~2.2 GB, compile 49s → 31s.
 *   - cpus: 1: one page-generation worker instead of several in parallel.
 *   - Server source maps off (they only make server error stack traces readable).
 *
 * Hosting env vars (no code change needed):
 *   NEXT_BUILD_REACT_COMPILER=true  keep the React Compiler in production builds
 *   NEXT_BUILD_LOW_MEMORY=false     build with none of these limits
 */
export default function config(phase) {
  if (phase !== PHASE_PRODUCTION_BUILD || process.env.NEXT_BUILD_LOW_MEMORY === "false") return nextConfig;
  return {
    ...nextConfig,
    reactCompiler: process.env.NEXT_BUILD_REACT_COMPILER === "true" ? nextConfig.reactCompiler : false,
    experimental: {
      ...nextConfig.experimental,
      cpus: 1,
      serverSourceMaps: false,
    },
  };
}
