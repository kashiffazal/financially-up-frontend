"use client";

import React from "react";
import BaseCallToActionBanner from "@/components/website/CallToActionBanner";

/**
 * CallToActionBanner Adapter
 * ==========================
 * Normalizes props between legacy/new calls (e.g. description vs subtitle, primaryButtonLink vs primaryButtonHref)
 */
export default function CallToActionBanner(props) {
  return (
    <BaseCallToActionBanner
      tag={props.tag || "Ready When You Are"}
      title={props.title}
      subtitle={props.subtitle || props.description}
      primaryButtonText={props.primaryButtonText || "Book an Appointment"}
      primaryButtonHref={props.primaryButtonHref || props.primaryButtonLink || "/book-an-appointment"}
      secondaryButtonText={props.secondaryButtonText || "Explore Services"}
      {...props}
    />
  );
}
