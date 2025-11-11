import React from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/academy/Footer";
import { contributorLevels } from "@/templates/contributors/contributor-levels";
import { ArrowRight, Award, Users, Zap, Crown } from "lucide-react";

const levelIcons = [Users, Award, Zap, Crown];

export default function ContributorsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <Navbar />
      <div className="container mx-auto px-4 py-24 max-w-7xl mt-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-gray-700 px-4 py-2 text-sm font-medium bg-gray-100 dark:bg-gray-900 mb-6">
            <span className="text-gray-900 dark:text-white">Contributor Ecosystem</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-gray-900 dark:text-white">
            Your Path to Web3 Excellence
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4 max-w-3xl mx-auto">
            Progress through 4 levels. Learn, build, earn, and lead.
          </p>
        </div>

        {/* Contributor Levels - Visual Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contributorLevels.levels.map((level, index) => {
            const Icon = levelIcons[index] || Users;
            return (
              <div
                key={level.id}
                className="border border-gray-200 dark:border-gray-800 rounded-xl p-6 bg-white dark:bg-gray-900 hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
              >
                {/* Level Badge */}
                <div className="absolute top-4 right-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white text-xl font-bold flex items-center justify-center">
                    {level.level}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div className="w-16 h-16 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center group-hover:bg-blue-200 dark:group-hover:bg-blue-900/50 transition-colors">
                    <Icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {level.title}
                </h2>
                <p className="text-sm text-blue-600 dark:text-blue-400 font-medium mb-4">
                  {level.tagline}
                </p>

                {/* Summary */}
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-3">
                  {level.summary}
                </p>

                {/* Key Features - Compact */}
                <div className="space-y-2 mb-4">
                  {level.highlights.slice(0, 2).map((highlight, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-gray-600 dark:text-gray-400">
                      <span className="text-blue-600 dark:text-blue-400 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Key Privileges - Visual */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {level.functions.staking === true && (
                    <span className="px-2 py-1 text-xs rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                      Staking
                    </span>
                  )}
                  {level.functions.proposeProjects && (
                    <span className="px-2 py-1 text-xs rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">
                      Propose
                    </span>
                  )}
                  {level.functions.exclusiveNetworkAccess === "Limited" && (
                    <span className="px-2 py-1 text-xs rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400">
                      Limited Access
                    </span>
                  )}
                </div>

                {/* Arrow */}
                {index < contributorLevels.levels.length - 1 && (
                  <div className="hidden lg:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-gray-400" />
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">4</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Levels</div>
          </div>
          <div className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">NFT</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Certificates</div>
          </div>
          <div className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">$OPENX</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Token Rewards</div>
          </div>
          <div className="text-center p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-white dark:bg-gray-900">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400 mb-2">DAO</div>
            <div className="text-sm text-gray-600 dark:text-gray-400">Governance</div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center border border-gray-200 dark:border-gray-800 rounded-xl p-12 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
            Ready to Start?
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Begin your journey from Contributor to Openmesh Expert
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/courses"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
            >
              View Courses
            </a>
            <a
              href="#community"
              className="px-8 py-3 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 dark:text-blue-400 dark:border-blue-400 font-semibold rounded-lg transition-colors"
            >
              Join Community
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
