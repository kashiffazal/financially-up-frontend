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

export default nextConfig;
