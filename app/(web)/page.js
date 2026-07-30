'use client';

import React from 'react';
import HeroSection from './home-components/HeroSection';
import QuickServicesSection from './home-components/QuickServicesSection';
import TrustedNationwideSection from './home-components/TrustedNationwideSection';
import HowItWorksSection from './home-components/HowItWorksSection';
import WhyChooseUsSection from './home-components/WhyChooseUsSection';
import FeatureHighlightsSection from './home-components/FeatureHighlightsSection';
import SeamlessTaxExperienceSection from './home-components/SeamlessTaxExperienceSection';
import TestimonialsSection from './home-components/TestimonialsSection';
import GoogleReviewsSection from './home-components/GoogleReviewsSection';
import CallToActionBanner from './home-components/CallToActionBanner';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Quick Services Section */}
      <QuickServicesSection />

      {/* 3. Trusted Nationwide / About Us Section */}
      <TrustedNationwideSection />

      {/* 4. How It Works Section */}
      <HowItWorksSection />

      {/* 5. Why Choose Us Section */}
      <WhyChooseUsSection />

      {/* 6. Feature Highlights Section */}
      <FeatureHighlightsSection />

      {/* 7. Seamless Tax Experience Content Section */}
      <SeamlessTaxExperienceSection />

      {/* 8. Testimonials Section */}
      <TestimonialsSection />

      {/* 9. Google Reviews Section */}
      <GoogleReviewsSection />

      {/* 10. Bottom Call To Action Banner */}
      <CallToActionBanner />
    </div>
  );
}
