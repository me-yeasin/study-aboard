"use client";

import { Header, HeroSection, ServicesSection, FeaturesSection, AboutUsSection, CoursesSection, BrandMarquee, OurProcessSection, TestimonialsSection, OurBlocksSection, FaqSection, CtaSection } from "./components/sections";

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
      <OurProcessSection />
      <TestimonialsSection />
      <OurBlocksSection />
      <FaqSection />
      <CtaSection />
    </>
  );
}