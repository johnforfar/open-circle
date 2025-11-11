"use client";

import React from "react";
import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import { Card } from "@/components/ui/card";

const levels = [
  {
    name: "Starter",
    tagline: "Learn & Connect",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/930109f55_Level1.png",
    nftBadge:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/930109f55_Level1.png",
    features: {
      courses: "Basic Courses",
      tokens: "50 OPENX",
      nft: true,
      community: true,
      dao: false,
      projects: false,
      mentorship: false,
      office: false
    }
  },
  {
    name: "Verified",
    tagline: "Build & Contribute",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/d4a0cebe1_Level2.png",
    nftBadge:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/d4a0cebe1_Level2.png",
    features: {
      courses: "Advanced Courses",
      tokens: "200 OPENX",
      nft: true,
      community: true,
      dao: "Voting Rights",
      projects: false,
      mentorship: false,
      office: false
    }
  },
  {
    name: "Active",
    tagline: "Lead & Earn",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/ebf92eb88_Level3.png",
    nftBadge:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/ebf92eb88_Level3.png",
    features: {
      courses: "Expert Courses",
      tokens: "500 OPENX",
      nft: true,
      community: true,
      dao: "Full DAO Access",
      projects: "Paid Projects",
      mentorship: "Mentor Others",
      office: false
    }
  },
  {
    name: "Expert",
    tagline: "Govern & Shape",
    image:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/e1c24b6b2_Level4.png",
    nftBadge:
      "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/6911c388f34d7c304d4bb290/e1c24b6b2_Level4.png",
    features: {
      courses: "All Courses + Create",
      tokens: "1000+ OPENX",
      nft: true,
      community: true,
      dao: "Governance Power",
      projects: "Lead Projects",
      mentorship: "Expert Advisor",
      office: "Revenue Share"
    }
  }
];

const comparisonRows = [
  { label: "Course Access", key: "courses" },
  { label: "OPENX Tokens", key: "tokens" },
  { label: "NFT Certificate", key: "nft" },
  { label: "Community Access", key: "community" },
  { label: "DAO Participation", key: "dao" },
  { label: "Paid Projects", key: "projects" },
  { label: "Mentorship", key: "mentorship" },
  { label: "Additional Benefits", key: "office" }
] as const;

export default function JourneySection() {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            Your Journey to Expert Status
          </h2>
          <p className="text-lg text-gray-600">
            Four levels. Each one unlocks new rewards, opportunities, and influence in the ecosystem.
          </p>
        </motion.div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="overflow-x-auto"
        >
          <Card className="bg-white border border-gray-200 rounded-2xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="p-6 text-left w-48 bg-gray-50">
                    <span className="text-sm font-semibold text-gray-600 uppercase">Features</span>
                  </th>
                  {levels.map((level, index) => (
                    <th key={index} className="p-6 text-center border-l border-gray-200">
                      <div className="flex flex-col items-center gap-4">
                        {/* Person Image */}
                        <div className="relative">
                          <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-gray-200">
                            <img 
                              src={level.image} 
                              alt={level.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          {/* NFT Badge overlay */}
                          <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-white">
                            <img 
                              src={level.nftBadge} 
                              alt={`${level.name} badge`}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </div>
                        
                        {/* Level Info */}
                        <div>
                          <h3 className="text-xl font-bold text-gray-900 mb-1">{level.name}</h3>
                          <p className="text-sm font-medium text-gray-600">
                            {level.tagline}
                          </p>
                        </div>
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, rowIndex) => (
                  <motion.tr
                    key={rowIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: rowIndex * 0.05 }}
                    className="border-b border-gray-100 hover:bg-gray-50"
                  >
                    <td className="p-6 font-semibold text-gray-900 bg-gray-50">
                      {row.label}
                    </td>
                    {levels.map((level, colIndex) => {
                      const value = level.features[row.key as keyof typeof level.features];
                      return (
                        <td key={colIndex} className="p-6 text-center border-l border-gray-100">
                          {typeof value === 'boolean' ? (
                            value ? (
                              <div className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100">
                                <Check className="w-4 h-4 text-green-600" />
                              </div>
                            ) : (
                              <div className="inline-flex items-center justify-center w-6 h-6">
                                <X className="w-4 h-4 text-gray-300" />
                              </div>
                            )
                          ) : value ? (
                            <span className="font-medium text-gray-900">{value}</span>
                          ) : (
                            <div className="inline-flex items-center justify-center w-6 h-6">
                              <X className="w-4 h-4 text-gray-300" />
                            </div>
                          )}
                        </td>
                      );
                    })}
                  </motion.tr>
                ))}
              </tbody>
            </table>

            {/* CTA Footer */}
            <div className="bg-gray-50 p-8 text-center border-t border-gray-200">
              <p className="text-lg font-medium text-gray-900 mb-4">
                Ready to start your journey? Begin with our free Starter level today.
              </p>
              <button className="px-6 py-3 rounded-xl bg-gray-900 hover:bg-gray-800 text-white font-semibold transition-colors">
                Get Started Now
              </button>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}

