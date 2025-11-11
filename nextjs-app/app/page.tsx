"use client";

import React from "react";
import HeroSection from "@/components/academy/HeroSection";
import StatsSection from "@/components/academy/StatsSection";
import FirstStepPreview from "@/components/academy/FirstStepPreview";
import JourneySection from "@/components/academy/JourneySection";
import RewardsSection from "@/components/academy/RewardsSection";
import CourseCatalog from "@/components/academy/CourseCatalog";
import CommunitySection from "@/components/academy/CommunitySection";
import VideoExperience from "@/components/academy/VideoExperience";
import TestimonialsSection from "@/components/academy/TestimonialsSection";
import CTABanner from "@/components/academy/CTABanner";
import Footer from "@/components/academy/Footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-white">
      <HeroSection />
      <StatsSection />
      <FirstStepPreview />
      <JourneySection />
      <CommunitySection />
      <RewardsSection />
      <CourseCatalog />
      <VideoExperience />
      <TestimonialsSection />
      <CTABanner />
      <Footer />
    </div>
  );
}
