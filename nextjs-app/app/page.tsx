import React from "react";
import Navbar from "@/components/navbar";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import CommunitySection from "@/components/community-section";
import Footer from "@/components/footer";

export default function IndexPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CommunitySection />
      <Footer />
    </div>
  );
}
