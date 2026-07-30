'use client';

import React from 'react';
import PageHero from '@/components/website/PageHero';
import CompanyOverview from './components/CompanyOverview';
import WhyChooseCompany from './components/WhyChooseCompany';
import FaqSection from '@/components/website/FaqSection';
import CallToActionBanner from '../../home-components/CallToActionBanner';

export default function CompanyTaxReturnPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Business Services', href: '/business-services' },
    { label: 'Company Tax Returns' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="Company Tax Specialists"
        title="Company Tax Returns"
        subtitle="Expert Assistance for Efficient Tax Compliance"
      />

      {/* 2. Overview Block Component */}
      <CompanyOverview />

      {/* 3. Why Choose Component */}
      <WhyChooseCompany />

      {/* 4. Accordion FAQ Section */}
      <FaqSection />

      {/* 5. Bottom Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
