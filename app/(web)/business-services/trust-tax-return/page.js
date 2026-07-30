'use client';

import React from 'react';
import PageHero from '@/components/website/PageHero';
import TrustOverview from './components/TrustOverview';
import WhyChooseTrust from './components/WhyChooseTrust';
import FaqSection from '@/components/website/FaqSection';
import CallToActionBanner from '../../home-components/CallToActionBanner';

export default function TrustTaxReturnPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Business Services', href: '/business-services' },
    { label: 'Trust Tax Returns' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="Trust Tax Specialists"
        title="Trust Tax Returns"
        subtitle="Streamlined Tax Compliance for Various Trust Types"
      />

      {/* 2. Overview Block Component */}
      <TrustOverview />

      {/* 3. Why Choose Component */}
      <WhyChooseTrust />

      {/* 4. Accordion FAQ Section */}
      <FaqSection />

      {/* 5. Bottom Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
