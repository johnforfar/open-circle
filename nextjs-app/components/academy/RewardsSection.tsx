"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Coins, Zap, Users, Briefcase, Trophy } from "lucide-react";

const rewards = [
  {
    icon: Award,
    title: "NFT Certificates",
    description: "On-chain proof of your achievements, stackable and tradeable"
  },
  {
    icon: Coins,
    title: "OPENX Tokens",
    description: "Earn tokens for learning, contributing, and building"
  },
  {
    icon: Zap,
    title: "Gas Airdrops",
    description: "Free gas to deploy your first smart contracts"
  },
  {
    icon: Users,
    title: "DAO Access",
    description: "Vote on proposals and shape the ecosystem's future"
  },
  {
    icon: Briefcase,
    title: "Real Projects",
    description: "Paid opportunities to work on cutting-edge Web3 initiatives"
  },
  {
    icon: Trophy,
    title: "Community Roles",
    description: "Unlock exclusive channels, events, and mentorship programs"
  }
];

export default function RewardsSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Real rewards for real progress
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every level unlocks new opportunities. No empty promises—just tangible value.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rewards.map((reward, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="h-full rounded-2xl border border-gray-200 bg-white p-8 transition-all duration-300 hover:border-gray-900 hover:shadow-xl">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-gray-900 transition-transform group-hover:scale-110">
                  <reward.icon className="w-7 h-7 text-white" />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">{reward.title}</h3>
                <p className="text-gray-600 leading-relaxed">{reward.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


