"use client";

import React, { useState } from "react";
import ServicesHero from "./ServicesHero";
import ServicesDirectory from "./ServicesDirectory";

/**
 * ServicesPageContent Component
 * ==============================
 * Interactive client coordinator linking the hero search bar with the
 * dynamic practice catalog directory.
 */
export default function ServicesPageContent() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const handleSearchSubmit = () => {
    const catalogElement = document.getElementById("services-catalog");
    if (catalogElement) {
      catalogElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* 1. Master Services Hero Banner */}
      <ServicesHero
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        onSearchSubmit={handleSearchSubmit}
      />

      {/* 2. Interactive Practice Catalog Directory */}
      <ServicesDirectory
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
    </>
  );
}
