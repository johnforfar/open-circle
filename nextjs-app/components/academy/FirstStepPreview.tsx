"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Wallet, Coins, Award, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function FirstStepPreview() {
  const router = useRouter();

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Start with your first step
          </h2>
          <p className="text-xl text-gray-600">
            Learn how to create a Web3 wallet with Base. No wallet needed to start - connect at the end to save your progress and claim your NFT certificate.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative aspect-video rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 shadow-xl overflow-hidden"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-center">
                  <Wallet className="w-20 h-20 mx-auto mb-4 opacity-90" />
                  <p className="text-lg font-semibold">Getting Started with Web3</p>
                  <p className="text-sm opacity-80 mt-2">Your gateway to Web3</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 rounded-2xl border border-gray-200 bg-white p-6"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Getting Started with Web3
              </h3>
              <p className="text-gray-600 mb-6">
                Learn how to create and use a Web3 wallet with Reown, Base, Binance, MetaMask, and more. Complete the course without a wallet, then connect your account (via Google or Web3 wallet) to save your progress and claim your NFT certificate.
              </p>

              <div className="flex items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>20 min</span>
                </div>
                <div className="flex items-center gap-2">
                  <Wallet className="w-4 h-4" />
                  <span>Beginner</span>
                </div>
              </div>

              <Button
                onClick={() => router.push("/courses/getting-started-web3/learn")}
                className="w-full rounded-xl bg-gray-900 hover:bg-gray-800"
                size="lg"
              >
                Start Course
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-gray-200 bg-white p-6 lg:col-span-1 space-y-6"
          >
            <div>
              <h4 className="text-lg font-bold text-gray-900 mb-4">Course Modules</h4>
              <div className="space-y-2">
                {[
                  { title: "What is a Web3 Wallet?", duration: "5 min" },
                  { title: "Creating a Wallet with Reown", duration: "5 min" },
                  { title: "Base, Binance, MetaMask Wallets", duration: "7 min" },
                  { title: "Your First Transactions", duration: "5 min" },
                  { title: "Quiz: Web3 Wallet Basics", duration: "5 min" },
                ].map((module, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-xl p-3 bg-gray-50"
                  >
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-200">
                      <span className="text-xs font-bold text-gray-700">{index + 1}</span>
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-gray-700">
                        {module.title}
                      </p>
                      <p className="text-xs text-gray-600">{module.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-2xl bg-gray-50 p-4">
              <h5 className="font-bold text-gray-900 mb-3">Course Completion</h5>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <Award className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold">NFT Certificate</p>
                    <p className="text-xs text-gray-600 mt-1">Connect your account to claim</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-gray-200">
                  <p className="text-xs text-gray-600">
                    💡 No wallet needed to learn. Connect at the end to save progress and mint your certificate.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
