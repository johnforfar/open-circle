"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { WalletConnectButton } from "@/components/wallet-connect-button";

export default function HeroSection() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-black via-blue-950 to-black">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col text-center items-center justify-center gap-8 sm:gap-12 md:gap-16 max-w-6xl mx-auto py-32">
          {/* Badge */}
          <div className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-sm font-medium bg-white/10 backdrop-blur-md">
            <span className="text-white">Web3 Education Platform</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-tight text-white">
            Learn Web3 &<br />
            Decentralized AI
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl">
            Master Web3 & Decentralized AI. Progress from Contributor to Expert. Earn NFTs & Rewards.
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
              href="#community"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-transparent border-2 border-white/30 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
            >
              <span>Join Community</span>
            </Link>
          </div>

          {/* Wallet Connect */}
          <div className="mt-8">
            <p className="text-sm text-white/60 mb-4">Or connect your wallet</p>
            <WalletConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
}

