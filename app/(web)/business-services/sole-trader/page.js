'use client';

import React from 'react';
import PageHero from '@/components/website/PageHero';
import SoleTraderOverview from './components/SoleTraderOverview';
import WhyChooseSoleTrader from './components/WhyChooseSoleTrader';
import FaqSection from '@/components/website/FaqSection';
import CallToActionBanner from '../../home-components/CallToActionBanner';

export default function SoleTraderTaxReturnPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Business Services', href: '/business-services' },
    { label: 'Sole Trader' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="Sole Trader Tax Specialists"
        title="Sole Trader Tax Returns"
        subtitle="Simplifying Tax Compliance for Various Industries"
      />

      {/* 2. Overview Block Component */}
      <SoleTraderOverview />

      {/* 3. Why Choose Component */}
      <WhyChooseSoleTrader />

      {/* 4. Reusable Image + Accordion FAQ Section */}
      <FaqSection />

      {/* 5. Bottom Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
