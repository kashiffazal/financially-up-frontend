'use client';

import React from 'react';
import PageHero from '@/components/website/PageHero';
import BusinessServicesList from './components/BusinessServicesList';
import CallToActionBanner from '../home-components/CallToActionBanner';

export default function BusinessServicesIndexPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Business Services' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Global Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="CPA Business Accountants Australia"
        title="Small Business Accountant Online Australia – Tax, Payroll & BAS"
        subtitle="Unlock the full potential of your business with our comprehensive range of business services. From financial management to strategic planning, we have the expertise to help your business thrive."
      />

      {/* 2. Redesigned Business Services List Component */}
      <BusinessServicesList />

      {/* 3. Bottom Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
