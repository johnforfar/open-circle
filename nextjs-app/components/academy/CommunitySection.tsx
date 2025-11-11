"use client";

import React from "react";
import { motion } from "framer-motion";
import { Users, Globe, MessageSquare, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CommunitySection() {
  return (
    <section className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              After you learn,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                you earn.
              </span>
            </h2>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Real projects. Real income. Real community.
            </p>

            <div className="space-y-6 mb-8">
              {[
                {
                  icon: Users,
                  title: "12,500+ Contributors",
                  description: "Join learners from 85+ countries building the decentralized future together"
                },
                {
                  icon: MessageSquare,
                  title: "Active Community",
                  description: "24/7 Discord channels, mentorship programs, and weekly AMA sessions with experts"
                },
                {
                  icon: Globe,
                  title: "Real Opportunities",
                  description: "Direct access to paid projects, governance roles, and career advancement in Web3"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-gray-900">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2 text-lg">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Link href="/community">
              <Button
                size="lg"
                className="group px-8 py-6 bg-gray-900 hover:bg-gray-800 text-white font-semibold"
              >
                Join the Community
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* Right: Project cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {[
              { title: "NFT Marketplace UI", reward: "500 OPENX", members: 8, status: "Active" },
              { title: "DeFi Protocol Audit", reward: "1000 OPENX", members: 5, status: "In Progress" },
              { title: "DAO Dashboard", reward: "750 OPENX", members: 12, status: "Open" }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ x: 5 }}
                className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 transition-all hover:border-gray-900 hover:shadow-xl"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gray-900">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-sm text-gray-500">{project.members} contributors</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">{project.reward}</p>
                    <p className="text-xs text-gray-500">Bounty</p>
                  </div>
                </div>
                <div className="flex items-center justify-between border-t border-gray-100 pt-3">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-600">
                    {project.status}
                  </span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 group-hover:translate-x-1 transition-all" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}


