"use client";

import { Brain, Code, Users, Award, BookOpen, Zap } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: BookOpen,
    title: "9 Comprehensive Courses",
    description: "Blockchain, Base, OpenxAI & Openmesh technologies",
  },
  {
    icon: Code,
    title: "Live Projects",
    description: "Build DApps on OpenR&D. Earn rewards.",
  },
  {
    icon: Users,
    title: "4 Contributor Levels",
    description: "Progress from Contributor to Expert. Earn NFTs & stake tokens.",
  },
  {
    icon: Award,
    title: "NFT Certificates",
    description: "IPFS-backed credentials on Polygon",
  },
  {
    icon: Brain,
    title: "Decentralized AI",
    description: "OpenxAI platform, X Engine & Openmesh",
  },
  {
    icon: Zap,
    title: "Leaderboard & Rewards",
    description: "Compete. Earn $OPEN tokens. Unlock access.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-900 mb-6">
            <span className="text-gray-900 dark:text-white">Features</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 dark:text-white mb-4">
            Everything You Need
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            From beginner to expert in Web3 & Decentralized AI
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-800 rounded-xl px-8 py-10 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow animate-fadeIn"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-10 h-10 mb-6 p-2 rounded-md text-blue-500 bg-blue-100 dark:bg-blue-900/30" />
                <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/courses"
            className="inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <span>View All Courses</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

