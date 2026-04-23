"use client";

import { Header, HeroSection, ServicesSection, FeaturesSection, AboutUsSection, CoursesSection, BrandMarquee } from "./components/sections";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ServicesSection />
      <FeaturesSection />
      <AboutUsSection />
      <BrandMarquee />
      <CoursesSection />
    </>
  );
}