import HeroSection from "@/components/sections/HeroSection";
import ImpactStats from "@/components/sections/ImpactStats";
import WhatWeDoPreview from "@/components/sections/WhatWeDoPreview";
import FeaturedProduct from "@/components/sections/FeaturedProduct";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PartnersSection from "@/components/sections/PartnersSection";
import LatestNews from "@/components/sections/LatestNews";
import CTASection from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ImpactStats />
      <WhatWeDoPreview />
      <FeaturedProduct />
      <TestimonialsSection />
      <PartnersSection />
      <LatestNews />
      <CTASection />
    </>
  );
}
