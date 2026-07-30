'use client';

import React from 'react';
import PageHero from '@/components/website/PageHero';
import BookkeepingOverview from './components/BookkeepingOverview';
import WhyChooseBookkeeping from './components/WhyChooseBookkeeping';
import BookkeepingPricing from './components/BookkeepingPricing';
import FaqSection from '@/components/website/FaqSection';
import CallToActionBanner from '../home-components/CallToActionBanner';

export default function BookkeepingPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Business Services', href: '/business-services' },
    { label: 'Bookkeeping' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="Affordable Bookkeeping Australia"
        title="Bookkeeping Services for Small Business Australia – Online & Affordable"
        subtitle="Expertise that Transforms Your Business"
      />

      {/* 2. Overview Block Component */}
      <BookkeepingOverview />

      {/* 3. Why Choose Component */}
      <WhyChooseBookkeeping />

      {/* 4. Accordion FAQ Section */}
      <FaqSection />

      {/* 5. Pricing Plans Component */}
      <BookkeepingPricing />

      {/* 6. Bottom Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
