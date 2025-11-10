"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WalletConnectButton } from "@/components/wallet-connect-button";
import EarthGlobe from "@/components/earth-globe";

export default function HeroSection() {
  return (
    <div className="h-screen flex items-center justify-center relative overflow-hidden bg-black">
      {/* Spinning Globe Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <EarthGlobe />
      </div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="flex flex-col text-center items-center justify-center gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto py-32">
          {/* Badge */}
          <div className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-md">
            <span className="text-white">Innovative Web3 Education</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
            The Future of<br />
            Web3 Education
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl">
            Onchain certificates, live projects, and real rewards. Learn by building on OpenR&D. Progress from Contributor to Expert.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
            <Link
              href="/courses"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <span>Explore Courses</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
            
            <Link
              href="/contributors"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Contributor Levels</span>
            </Link>
            
            <Link
              href="/community"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Join Community</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
}

