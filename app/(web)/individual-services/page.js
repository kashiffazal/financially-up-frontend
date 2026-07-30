'use client';

import React from 'react';
import PageHero from '@/components/website/PageHero';
import IndividualServicesList from './components/IndividualServicesList';
import IndividualServicesWhyUs from './components/IndividualServicesWhyUs';
import CallToActionBanner from '../home-components/CallToActionBanner';

export default function IndividualServicesPage() {
  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Individual Services' },
  ];

  return (
    <div className="w-full overflow-hidden">
      {/* 1. Global Page Hero Banner */}
      <PageHero
        breadcrumbs={breadcrumbs}
        badgeTag="ATO Registered Tax Agents"
        title="Individual Tax Services in Australia"
        subtitle="Expert Assistance for ATO Compliance"
      />

      {/* 2. Individual Services List (Individual Tax Return & Investment Property) */}
      <IndividualServicesList />

      {/* 3. Why Choose Us Section */}
      <IndividualServicesWhyUs />

      {/* 4. Bottom Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
