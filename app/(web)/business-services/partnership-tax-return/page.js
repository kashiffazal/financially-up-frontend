'use client';

import React from 'react';
import PageHero from '@/components/website/PageHero';
import PartnershipOverview from './components/PartnershipOverview';
import WhyChoosePartnership from './components/WhyChoosePartnership';
import FaqSection from '@/components/website/FaqSection';
import CallToActionBanner from '../../home-components/CallToActionBanner';

export default function PartnershipTaxReturnPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Business Services', href: '/business-services' },
    { label: 'Partnership Tax Returns' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="Partnership Tax Specialists"
        title="Partnership Tax Returns"
        subtitle="Efficient Tax Compliance for Your Partnership"
      />

      {/* 2. Overview Block Component */}
      <PartnershipOverview />

      {/* 3. Why Choose Component */}
      <WhyChoosePartnership />

      {/* 4. Accordion FAQ Section */}
      <FaqSection />

      {/* 5. Bottom Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
